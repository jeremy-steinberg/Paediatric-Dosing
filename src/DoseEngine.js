/**
 * DoseEngine.js
 * Pure calculation logic independent of the UI.
 */
export class DoseEngine {
  constructor(drugData) {
    this.drugData = drugData;
  }

  /**
   * Primary entry point for calculations
   * @param {string} drugKey - The ID of the drug (e.g., 'Amoxicillin125')
   * @param {number} weight - Patient weight in kg
   * @param {number} indicationIndex - Index of the selected indication
   * @returns {Object} Structured result object
   */
    calculate(drugKey, weight, indicationIndex = 0) {
        const drug = this.drugData[drugKey];
        if (!drug) throw new Error("Drug not found");

        const indication = drug.indications ? drug.indications[indicationIndex] : null;
        
        // Get base results
        let mlsResult = this._calculateMls(drug, indication, weight, drugKey);
        let mgsResult = this._calculateMgs(drug, indication, weight, drugKey);
        const frequency = indication?.freq || drug.numberOfTimesADay || "";

        // FIX: Handle Macrogol custom formatting
        if (drugKey === "Macrogol") {
            const sachetDose = mlsResult.dose;
            const waterVol = Math.round(125 * sachetDose);
            mlsResult.unit = `sachets (dissolved in ${waterVol} mLs of water)`;
            const disimpactionSachets = parseFloat(Math.min((sachetDose * 3), drug.sachetsmax || 8).toFixed(1));
            const disimpactionWater = Math.round(125 * disimpactionSachets);
            mlsResult.alternative = `Disimpaction Dose: ${disimpactionSachets} sachets daily until passes soft stool (dissolved in ${disimpactionWater} mLs of water)`;
        }

        // FIX: Append extra messages (e.g., Loratadine age-based notes)
        if (drug.messageMls) {
            mlsResult.unit += ` ${drug.messageMls}`;
        }
        if (drug.messageMgs) {
            mgsResult.unit += ` ${drug.messageMgs}`;
        }

        // Handle alternative twice-daily dosing for Erythromycin
        if (drug.alternativeFreq === "twice daily" && indicationIndex === 0) {
            const altMls = parseFloat((mlsResult.dose * 2).toFixed(1));
            mlsResult.alternative = `${altMls} mLs twice daily`;
            const altMgs = parseFloat((mgsResult.dose * 2).toFixed(0));
            mgsResult.alternative = `${altMgs} mgs twice daily`;
        }

        return {
        mls: mlsResult,
        mgs: mgsResult,
        frequency: frequency,
        loadingDose: this._calculateLoadingDose(drug, weight),
        instructions: drug.instructions,
        nzfLink: drug.nzflink,
        warnings: this._getWarnings(drugKey, weight)
        };
    }

  _calculateMls(drug, indication, weight, drugKey) {
    if (drug.tabletOnly) return null;

    let result = { dose: 0, rangeUpper: null, unit: 'mLs' };

    if (drug.weightrange && drug.rangeWeightCutOff) {
      result.dose = (weight < drug.rangeWeightCutOff) ? drug.range1doseMls : drug.range2doseMls;
    } else {
      const baseMls = indication ? indication.mls : drug.mlsvar;
      const maxLimit = indication ? indication.mlsmax : drug.mlsmax;
      
      let dose = parseFloat((baseMls * weight).toFixed(1));
      result.dose = Math.min(dose, maxLimit);

      const hasHighRange = (indication && indication.highrange !== undefined) ? indication.highrange : drug.highrange;
      if (hasHighRange) {
        const modifier = (indication && indication.highmodifier !== undefined) ? indication.highmodifier : (drug.highmodifier || 2);
        const highMax = (indication && indication.mlsmaxhigh) ? indication.mlsmaxhigh : (drug.mlsmaxhigh || drug.mlsmax);
        
        let highDose = parseFloat((result.dose * modifier).toFixed(1));
        result.rangeUpper = Math.min(highDose, highMax);
      }
    }
    return result;
  }

  _calculateMgs(drug, indication, weight, drugKey) {
    let result = { dose: 0, rangeUpper: null, unit: 'mgs' };

    if (drug.weightrange && drug.rangeWeightCutOff) {
      // Specialized Malarone logic
    if (drugKey === "Malarone") {
      if (weight < drug.rangeWeightCutOff) {
        result.dose = "1";
        result.unit = "Junior tablet";
      } else if (weight < drug.rangeWeightCutOff2) {
        result.dose = "2";
        result.unit = "Junior tablets";
      } else if (weight < drug.rangeWeightCutOff3) {
        result.dose = "3";
        result.unit = "Junior tablets";
      } else {
        result.dose = "1";
        result.unit = "Adult tablet";
      }
    } else {
        result.dose = (weight < drug.rangeWeightCutOff) ? drug.range1doseMgs : drug.range2doseMgs;
      }
    } else {
      const baseMgs = indication ? indication.mgs : drug.mgsvar;
      const maxLimit = indication ? indication.mgsmax : drug.mgsmax;

      let dose = parseFloat((baseMgs * weight).toFixed(1));
      result.dose = Math.min(dose, maxLimit);
      
      if (drugKey === "Roxithromycin" && weight > 40) result.dose = 150;

      const hasHighRange = (indication && indication.highrange !== undefined) ? indication.highrange : drug.highrange;
      if (hasHighRange) {
        const modifier = (indication && indication.highmodifier !== undefined) ? indication.highmodifier : (drug.highmodifier || 2);
        const highMax = (indication && indication.mgsmaxhigh) ? indication.mgsmaxhigh : (drug.mgsmaxhigh || drug.mgsmax);

        let highDose = parseFloat((result.dose * modifier).toFixed(0));
        result.rangeUpper = Math.min(highDose, highMax);
      }
    }
    return result;
  }

  _getWarnings(drugKey, weight) {
    const warnings = [];
    if (drugKey === "Ibuprofen100" && weight < 7) {
      warnings.push("Warning: calculator is for ages above 3 months. If under 3 months, use lower end of dose range and give a maximum of three times daily.");
    }
    return warnings;
  }

  _calculateLoadingDose(drug, weight) {
    if (!drug.loadingdose) return null;

    const mls = parseFloat((drug.mlsvarloading * weight).toFixed(1));
    const mgs = parseFloat((drug.mgsvarloading * weight).toFixed(1));

    return {
        mls: Math.min(mls, drug.mlsmaxloading),
        mgs: Math.min(mgs, drug.mgsmaxloading)
    };
 }
}