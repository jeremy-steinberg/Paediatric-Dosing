import { DoseEngine } from './DoseEngine.js';
import { drug_options } from './drugs.js';

class PaediatricCalculator {
  constructor(options) {
    this.engine = new DoseEngine(drug_options);
    this.state = {
      weight: 0,
      selectedDrugKey: 'None',
      selectedIndicationIndex: 0
    };
    this.init();
  }

  init() {
    this.el = {
      weight: document.getElementById('theweight'),
      drugSelect: document.getElementById('drug'),
      indicationContainer: document.getElementById('indication-container'),
      indicationRadios: document.getElementById('indication-radios'),
      calcButton: document.getElementById('calcbutton'),
      resultMls: document.getElementById('Result'),
      resultMgs: document.getElementById('ResultMgs'),
      error: document.getElementById('error-message'),
      warning: document.getElementById('warning-message'),
      instructions: document.getElementById('instructions'),
      dosingSection: document.getElementById('dosing-section'),
      nzfLink: document.getElementById('nzflink')
    };

    this.setupEventListeners();
  }

  setupEventListeners() {
    // These replace the "onchange" and "onclick" from your HTML
    this.el.drugSelect?.addEventListener('change', (e) => {
      this.state.selectedDrugKey = e.target.value;
      this.state.selectedIndicationIndex = 0;
      this.renderIndications();
      this.validate();
    });

    this.el.weight?.addEventListener('input', () => this.clearResults());
    
    this.el.calcButton?.addEventListener('click', () => this.validate());

    this.el.indicationRadios?.addEventListener('change', (e) => {
      if (e.target.name === 'indication-select') {
        this.state.selectedIndicationIndex = parseInt(e.target.value, 10);
        this.validate();
      }
    });
  }

  renderIndications() {
    const drug = drug_options[this.state.selectedDrugKey];
    if (drug?.indications) {
      this.el.indicationContainer.style.display = 'block';
      this.el.indicationRadios.innerHTML = drug.indications.map((ind, index) => `
        <label style="margin-right:15px; cursor:pointer;">
          <input type="radio" name="indication-select" value="${index}" ${index === 0 ? 'checked' : ''}> 
          ${ind.label}
        </label>
      `).join('');
    } else {
      this.el.indicationContainer.style.display = 'none';
    }
  }

  validate() {
    const weightVal = this.el.weight.value;
    const weight = Number(weightVal);
    this.state.weight = weight;

    this.clearResults();

    if (weightVal === "") return this.showError("Please input a weight", "weight");
    if (weight <= 0) return this.showError("Please enter a valid weight.", "weight");
    if (this.state.selectedDrugKey === "None") return this.showError("Please select a drug", "drug");

    this.calculate();
  }

  calculate() {
    try {
      const result = this.engine.calculate(
        this.state.selectedDrugKey, 
        this.state.weight, 
        this.state.selectedIndicationIndex
      );
      this.renderResults(result);
    } catch (err) {
      console.error(err);
    }
  }

  renderResults(result) {
      const { mls, mgs, frequency, loadingDose, instructions, nzfLink, warnings } = result;
      const drug = drug_options[this.state.selectedDrugKey]; // Access drug config for tablet info

      this.el.dosingSection.style.display = 'block';
      this.el.instructions.innerHTML = instructions;
      this.el.nzfLink.href = nzfLink;

      // Render mLs Output
      if (mls) {
          const range = mls.rangeUpper ? ` - ${mls.rangeUpper}` : "";
          let fullMlsString = `${mls.dose}${range} ${mls.unit} ${frequency}`;
          
          if (mls.alternative) {
                      fullMlsString += `<br>OR<br>${mls.alternative}`;
          }
          if (loadingDose) {
              fullMlsString += `<br><span class='loading-text'>(an initial loading dose of ${loadingDose.mls} mLs may be given)</span>`;
          }
          this.el.resultMls.innerHTML = this.formatOutput(fullMlsString);
      } else if (drug.tabletOnly) {
          // FIX: Display message for tablet-only drugs
          this.el.resultMls.innerHTML = `<span style="font-size: 0.9rem; color: #666;">
            This medication does not come in liquid form, but as a ${drug.tabletSize} tablet.
          </span>`;
      }

      // Render mgs Output
      const mgRange = mgs.rangeUpper ? ` - ${mgs.rangeUpper}` : "";
      let fullMgsString = `${mgs.dose}${mgRange} ${mgs.unit} ${frequency}`;

      if (mgs.alternative) {
          fullMgsString += `<br>OR<br>${mgs.alternative}`;
      }
      
      if (loadingDose) {
          fullMgsString += `<br><span class='loading-text'>(an initial loading dose of ${loadingDose.mgs} mgs may be given)</span>`;
      }
      this.el.resultMgs.innerHTML = this.formatOutput(fullMgsString);

      if (warnings.length > 0) {
          this.showWarning(warnings.join('<br>'));
      }
  }

  formatOutput(string) {
    return string.replace(/(\d+)(\.)?(\d+)?(\s\-\s)?/g, 
      '<span style="font-size:1.25rem;">$1</span><span style="font-size:1.25rem;">$2</span><span style="font-size:1.25rem;">$3</span><span style="font-size:1.25rem;">$4</span>');
  }

  showError(message, type) {
    this.el.error.textContent = message;
    this.el.error.style.display = 'block';
    const field = type === 'weight' ? this.el.weight : this.el.drugSelect;
    field.style.border = '1px solid #d02c03';
  }

  showWarning(message) {
    this.el.warning.innerHTML = message;
    this.el.warning.style.display = 'block';
  }

  clearResults() {
    this.el.resultMls.innerHTML = '';
    this.el.resultMgs.innerHTML = '';
    this.el.error.style.display = 'none';
    this.el.warning.style.display = 'none';
    this.el.weight.style.border = '1px solid #cacaca';
    this.el.drugSelect.style.border = '1px solid #cacaca';
    this.el.dosingSection.style.display = 'none';
  }
}

// Start the app
window.addEventListener('DOMContentLoaded', () => {
  new PaediatricCalculator({});
});