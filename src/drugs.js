export const drug_options = {
  Paracetamol120: {
    tabletOnly: false,
    mlsvar: 0.625,
    mgsvar: 15,
    numberOfTimesADay: " every four hours, up to a maximum of four doses in 24 hours",
    mlsmax: 42,
    mgsmax: 1000,
    loadingdose: true,
    mlsvarloading: 1.25,
    mgsvarloading: 30,
    mlsmaxloading: 62.5,
    mgsmaxloading: 1500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15 mg/kg per dose (maximum 1 g) every four hours; maximum 75 mg/kg per day (without exceeding 4 g) for 48 hours, maximum of 60 mg/kg per day (without exceeding 4 g) thereafter <br> <span class='age-group'> Note</span> A loading dose of 30 mg/kg (maximum 1.5 g) may be given provided there has been no paracetamol given within the preceding 12 hours</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_2439"
  },
  Paracetamol250: {
    tabletOnly: false,
    mlsvar: 0.3,
    mgsvar: 15,
    numberOfTimesADay: " every four hours, up to a maximum of four doses in 24 hours",
    mlsmax: 20,
    mgsmax: 1000,
    loadingdose: true,
    mlsvarloading: 0.6,
    mgsvarloading: 30,
    mlsmaxloading: 30,
    mgsmaxloading: 1500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15 mg/kg per dose (maximum 1 g) every four hours; maximum 75 mg/kg per day (without exceeding 4 g) for 48 hours, maximum of 60 mg/kg per day (without exceeding 4 g) thereafter <br> <span class='age-group'> Note</span> A loading dose of 30 mg/kg (maximum 1.5 g) may be given provided there has been no paracetamol given within the preceding 12 hours</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_2439"
  },
  Paracetamol120nonloading: {
    tabletOnly: false,
    mlsvar: 0.625,
    mgsvar: 15,
    numberOfTimesADay: " every four hours, up to a maximum of four doses in 24 hours",
    mlsmax: 42,
    mgsmax: 1000,
    loadingdose: false,
    mlsvarloading: 1.25,
    mgsvarloading: 30,
    mlsmaxloading: 62.5,
    mgsmaxloading: 1500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15 mg/kg per dose (maximum 1 g) every four hours; maximum 75 mg/kg per day (without exceeding 4 g) for 48 hours, maximum of 60 mg/kg per day (without exceeding 4 g) thereafter</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_2439"
  },
  Paracetamol250nonloading: {
    tabletOnly: false,
    mlsvar: 0.3,
    mgsvar: 15,
    numberOfTimesADay: " every four hours, up to a maximum of four doses in 24 hours",
    mlsmax: 20,
    mgsmax: 1000,
    loadingdose: false,
    mlsvarloading: 0.6,
    mgsvarloading: 30,
    mlsmaxloading: 30,
    mgsmaxloading: 1500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15 mg/kg per dose (maximum 1 g) every four hours; maximum 75 mg/kg per day (without exceeding 4 g) for 48 hours, maximum of 60 mg/kg per day (without exceeding 4 g) thereafter</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_2439"
  },
  Ibuprofen100: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 5,
    numberOfTimesADay: " three to four times a day",
    mlsmax: 10,
    mgsmax: 200,
    mlsmaxhigh: 20,
    mgsmaxhigh: 400,
    highrange: true,
    highmodifier: 2,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 - 3 months</span> 5 mg/kg 3-4 times daily <br> <span class='age-group'> 3 months - 18 years</span> 5-10 mg/kg 3 or 4 times daily up to 30 mg/kg daily (maximum 2.4 g daily)</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_5524"
  },
  Ibuprofen100norange: {
    tabletOnly: false,
    mlsvar: 0.3,
    mgsvar: 6,
    numberOfTimesADay: " three times a day",
    mlsmax: 20,
    mgsmax: 400,
    mlsmaxhigh: 20,
    mgsmaxhigh: 400,
    highrange: false,
    highmodifier: 2,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>3 months - 18 years</span> 6 mg/kg per dose (maximum 400mg) every 6 to 8 hours as needed for pain or fever. Do not take more than 3 doses in 24 hours.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_5524"
  },
  Ibuprofen200norange: {
    tabletOnly: false,
    mlsvar: 0.15,
    mgsvar: 6,
    numberOfTimesADay: " three times a day",
    mlsmax: 10,
    mgsmax: 400,
    mlsmaxhigh: 10,
    mgsmaxhigh: 400,
    highrange: false,
    highmodifier: 2,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>3 months - 18 years</span> 6 mg/kg per dose (maximum 400mg) every 6 to 8 hours as needed for pain or fever. Do not take more than 3 doses in 24 hours.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_5524"
  },
  Amoxicillin125: {
    tabletOnly: false,
    mlsvar: 0.6,
    mgsvar: 15,
    numberOfTimesADay: " three times a day",
    mlsmax: 40,
    mgsmax: 1000,
    highrange: true,
    highmodifier: 2,
    indications: [
      { label: "General (15-30mg/kg)", mgs: 15, mls: 0.6, freq: " three times a day", mgsmax: 1000, mlsmax: 40, highrange: true },
      { label: "Strep A (50mg/kg)", mgs: 50, mls: 2, freq: " once daily for 10 days", mgsmax: 1000, mlsmax: 40, highrange: false }
    ],
    messageshow: true,
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15 - 30mg/kg (maximum 1,000mg) three times daily </div> <strong>Strep A Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span> 50mg/kg once daily for 10 days (maximum 1,000mg/dose).</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3025"
  },
  Amoxicillin250: {
    tabletOnly: false,
    mlsvar: 0.3,
    mgsvar: 15,
    numberOfTimesADay: " three times a day",
    mlsmax: 20,
    mgsmax: 1000,
    highrange: true,
    highmodifier: 2,
    indications: [
      { label: "General (15-30mg/kg)", mgs: 15, mls: 0.3, freq: " three times a day", mgsmax: 1000, mlsmax: 20, highrange: true },
      { label: "Strep A (50mg/kg)", mgs: 50, mls: 1, freq: " once daily for 10 days", mgsmax: 1000, mlsmax: 20, highrange: false }
    ],
    messageshow: true,
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15 - 30mg/kg (maximum 1,000mg) three times daily </div> <strong>Strep A Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span> 50mg/kg once daily for 10 days (maximum 1,000mg/dose).</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3025"
  },
  Cefaclor125: {
    tabletOnly: false,
    mlsvar: 0.4,
    mgsvar: 10,
    numberOfTimesADay: " three times a day",
    mlsmax: 20,
    mgsmax: 500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 10 mg/kg (maximum 500 mg) three times daily </div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3052"
  },
  Cefalexin125multi: {
    tabletOnly: false,
    mlsvar: 0.5,
    mgsvar: 12.5,
    indications: [
      { 
        label: "General Dosing (12.5mg/kg)", 
        mgs: 12.5, 
        mls: 0.5, 
        freq: " twice <b>OR</b> four times a day", 
        mgsmax: 1000, 
        mlsmax: 40 
      },
      { 
        label: "UTI (25mg/kg)", 
        mgs: 25, 
        mls: 1.0, 
        freq: " three times a day", 
        mgsmax: 500, 
        mlsmax: 20 
      }
    ],
    numberOfTimesADay: " twice <b>OR</b> four times a day", // Default fallback
    mlsmax: 40,
    mgsmax: 1000,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 12.5–25 mg/kg (usual maximum 500 mg; up to 1 g may be used), <b>TWICE</b> daily for impetigo and <b>FOUR</b> times daily for infections due to sensitive Gram-positive and Gram-negative bacteria. <br> <span class='age-group'> Note</span> High doses (25 mg/kg) are used in secondary care situations (e.g. step-down dosing for bone/joint infections).</div> <strong>UTI Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 25 mg/kg (maximum 500mg) <b>THREE</b> times daily.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3058"
  },
  Cefalexin250multi: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 12.5,
    indications: [
      { 
        label: "General Dosing (12.5mg/kg)", 
        mgs: 12.5, 
        mls: 0.25, 
        freq: " twice <b>OR</b> four times a day", 
        mgsmax: 1000, 
        mlsmax: 20 
      },
      { 
        label: "UTI (25mg/kg)", 
        mgs: 25, 
        mls: 0.5, 
        freq: " three times a day", 
        mgsmax: 500, 
        mlsmax: 10 
      }
    ],
    numberOfTimesADay: " twice <b>OR</b> four times a day", // Default fallback
    mlsmax: 20,
    mgsmax: 1000,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 12.5–25 mg/kg (usual maximum 500 mg; up to 1 g may be used), <b>TWICE</b> daily for impetigo and <b>FOUR</b> times daily for infections due to sensitive Gram-positive and Gram-negative bacteria. <br> <span class='age-group'> Note</span> High doses (25 mg/kg) are used in secondary care situations (e.g. step-down dosing for bone/joint infections).</div> <strong>UTI Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 25 mg/kg (maximum 500mg) <b>THREE</b> times daily.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3058"
  },
  Cefalexin125: {
    tabletOnly: false,
    mlsvar: 0.5,
    mgsvar: 12.5,
    numberOfTimesADay: "111 twice <b>OR</b> four times a day",
    mlsmax: 40,
    mgsmax: 1000,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 12.5-25 mg/kg (usual maximum 500 mg; up to 1 g may be used), <strong>TWICE</strong> daily for impetigo and <strong>FOUR</strong> times daily for infections due to sensitive Gram-positive and Gram-negative bacteria <br> <span class='age-group'> Note</span> High doses (25 mg/kg) are used in secondary care situations (e.g. step-down dosing from intravenous to oral therapy for bone and joint infections).</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3058"
  },
  Cefalexin250: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 12.5,
    numberOfTimesADay: "111 twice <b>OR</b> four times a day",
    mlsmax: 20,
    mgsmax: 1000,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 12.5-25 mg/kg (usual maximum 500 mg; up to 1 g may be used), <strong>TWICE</strong> daily for impetigo and <strong>FOUR</strong> times daily for infections due to sensitive Gram-positive and Gram-negative bacteria <br> <span class='age-group'> Note</span> High doses (25 mg/kg) are used in secondary care situations (e.g. step-down dosing from intravenous to oral therapy for bone and joint infections).</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3058"
  },
  "Coamoxiclav125-31.25": {
    tabletOnly: false,
    mlsvar: 0.48,
    mgsvar: 15,
    numberOfTimesADay: " three times a day",
    mlsmax: 20,
    mgsmax: 625,
    highrange: true,
    highmodifier: 2,
    indications: [
      { label: "General (15-30mg/kg total)", mgs: 15, mls: 0.48, freq: " three times a day", mgsmax: 625, mlsmax: 20, highrange: true },
      { label: "Strep A (16.7mg/kg total)", mgs: 16.7, mls: 0.533, freq: " three times daily for 10 days", mgsmax: 833, mlsmax: 26.65, highrange: false }
    ],
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15-30 mg/kg (maximum 625 mg) 3 times daily <br> <span class='age-group'> Note</span> Oral doses are expressed as the total dose of amoxicillin + clavulanic acid (ratio 4:1); 15-30 mg of the total (amoxicillin + clavulanic acid) contains 12-24 mg of amoxicillin. </div> <strong>Strep A Dosing (Third or More Episode within 3 months):</strong> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span>  16.7 mg/kg (maximum dose 833 mg) 3 times daily for 10 days (50 mg/kg daily, maximum 2.5 g daily)</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3032"
  },

  "Coamoxiclav250-62.5": {
    tabletOnly: false,
    mlsvar: 0.24,
    mgsvar: 15,
    numberOfTimesADay: " three times a day",
    mlsmax: 10,
    mgsmax: 625,
    highrange: true,
    highmodifier: 2,
    indications: [
      { label: "General (15-30mg/kg total)", mgs: 15, mls: 0.24, freq: " three times a day", mgsmax: 625, mlsmax: 10, highrange: true },
      { label: "Strep A (16.7mg/kg total)", mgs: 16.7, mls: 0.2665, freq: " three times daily for 10 days", mgsmax: 833, mlsmax: 13.32, highrange: false }
    ],
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15-30 mg/kg (maximum 625 mg) 3 times daily <br> <span class='age-group'> Note</span> Oral doses are expressed as the total dose of amoxicillin + clavulanic acid (ratio 4:1); 15-30 mg of the total (amoxicillin + clavulanic acid) contains 12-24 mg of amoxicillin. </div> <strong>Strep A Dosing (Third or More Episode within 3 months):</strong> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span>  16.7 mg/kg (maximum dose 833 mg) 3 times daily for 10 days (50 mg/kg daily, maximum 2.5 g daily)</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3032"
  },
"Coamoxiclav125-31.25nostrepinfo": {
    tabletOnly: false,
    mlsvar: 0.48,
    mgsvar: 15,
    numberOfTimesADay: " three times a day",
    mlsmax: 20,
    mgsmax: 625,
    mlsmaxhigh: 20,
    mgsmaxhigh: 625,
    highrange: true,
    highmodifier: 2,
    strepdrug: true,
    strepweightcutoff: false,
    mlsvarstrep: 0.533,
    mgsvarstrep: 16.7,
    mlsstrepmax: 26.65,
    mgsstrepmax: 833,
    strepfrequency: " three times daily for 10 days",
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15-30 mg/kg (maximum 625 mg) 3 times daily <br> <span class='age-group'> Note</span> Oral doses are expressed as the total dose of amoxicillin + clavulanic acid (ratio 4:1); 15-30 mg of the total (amoxicillin + clavulanic acid) contains 12-24 mg of amoxicillin. </div> ",
    nzflink: "https://nzfchildren.org.nz/nzf_3032"
  },
  "Coamoxiclav250-62.5nostrepinfo": {
    tabletOnly: false,
    mlsvar: 0.24,
    mgsvar: 15,
    numberOfTimesADay: " three times a day",
    mlsmax: 10,
    mgsmax: 625,
    mlsmaxhigh: 10,
    mgsmaxhigh: 625,
    highrange: true,
    highmodifier: 2,
    strepdrug: true,
    strepweightcutoff: false,
    mlsvarstrep: 0.2665,
    mgsvarstrep: 16.7,
    mlsstrepmax: 13.32,
    mgsstrepmax: 833,
    strepfrequency: " three times daily for 10 days",
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br><div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 15-30 mg/kg (maximum 625 mg) 3 times daily <br> <span class='age-group'> Note</span> Oral doses are expressed as the total dose of amoxicillin + clavulanic acid (ratio 4:1); 15-30 mg of the total (amoxicillin + clavulanic acid) contains 12-24 mg of amoxicillin. </div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3032"
  },

  Cotrimoxazole480: {
    tabletOnly: false,
    mlsvar: 0.5,
    mgsvar: 24,
    numberOfTimesADay: " twice a day",
    mlsmax: 20,
    mgsmax: 960,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>6 weeks - 18 years</span> 24 mg/kg (maximum 960 mg) twice daily </div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3200"
  },
  Erythromycin200: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 10,
    numberOfTimesADay: " four times a day",
    mlsmax: 10,
    mgsmax: 400,
    highrange: true,
    highmodifier: 1.25,
    indications: [
      { label: "General (10-12.5mg/kg)", mgs: 10, mls: 0.25, freq: " four times a day", mgsmax: 400, mlsmax: 10, highrange: true },
      { label: "Strep A (20mg/kg)", mgs: 20, mls: 0.5, freq: " twice daily for 10 days", mgsmax: 800, mlsmax: 20, highrange: false }
    ],
    messageshow: true,
    strepdrug: true,
    messageMls: "",
    messageMgs: "",
    alternativeFreq: "twice daily",
    instructions:
      "<div class='message__section-dosing-instructions'><span class='age-group'> Note</span> Erythromycin has two forms: erythromycin ethylsuccinate, and erythromycin stearate. This calculator uses the former, and this should be specified on the prescription</div> <div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 10-12.5 mg/kg every 6 hours (usual maximum 1.6 g daily; maximum 4 g daily in severe infection)</div> <strong>Strep A Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span> 20 mg/kg twice daily; maximum 800 mg twice daily for 10 days</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3154"
  },

  Erythromycin400: {
    tabletOnly: false,
    mlsvar: 0.125,
    mgsvar: 10,
    numberOfTimesADay: " four times a day",
    mlsmax: 5,
    mgsmax: 400,
    highrange: true,
    highmodifier: 1.25,
    indications: [
      { label: "General (10-12.5mg/kg)", mgs: 10, mls: 0.125, freq: " four times a day", mgsmax: 400, mlsmax: 5, highrange: true },
      { label: "Strep A (20mg/kg)", mgs: 20, mls: 0.25, freq: " twice daily for 10 days", mgsmax: 800, mlsmax: 10, highrange: false }
    ],
    messageshow: true,
    strepdrug: true,
    messageMls: "",
    messageMgs: "",
    alternativeFreq: "twice daily",
    instructions:
      "<div class='message__section-dosing-instructions'><span class='age-group'> Note</span> Erythromycin has two forms: erythromycin ethylsuccinate, and erythromycin stearate. This calculator uses the former, and this should be specified on the prescription</div> <div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 10-12.5 mg/kg every 6 hours (usual maximum 1.6 g daily; maximum 4 g daily in severe infection)</div> <strong>Strep A Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span> 20 mg/kg twice daily; maximum 800 mg twice daily for 10 days</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3154"
  },
  Flucloxacillin125: {
    tabletOnly: false,
    mlsvar: 0.5,
    mgsvar: 12.5,
    numberOfTimesADay: " four times a day",
    mlsmax: 20,
    mgsmax: 500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 12.5-25 mg/kg (usually up to 500 mg; maximum 1 g) 4 times daily (see note below) <br> <span class='age-group'> Note</span> High doses (25 mg/kg, maximum 1 g) should be used in severe infection (e.g. step-down therapy from intravenous to oral dosing, or deep site infection). High oral doses may be poorly tolerated due to gastrointestinal adverse effects.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3012"
  },
  Flucloxacillin250: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 12.5,
    numberOfTimesADay: " four times a day",
    mlsmax: 10,
    mgsmax: 500,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 12.5-25 mg/kg (usually up to 500 mg; maximum 1 g) 4 times daily (see note below) <br> <span class='age-group'> Note</span> High doses (25 mg/kg, maximum 1 g) should be used in severe infection (e.g. step-down therapy from intravenous to oral dosing, or deep site infection). High oral doses may be poorly tolerated due to gastrointestinal adverse effects.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3012"
  },
  Lactulose: {
    tabletOnly: false,
    mlsvar: 0.5,
    mgsvar: 0.334,
    numberOfTimesADay: " twice daily (adjusted according to response)",
    mlsmax: 20,
    mgsmax: 20,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 1 years</span> 2.5 mL twice daily, adjusted according to response<br><span class='age-group'>1 - 5 years</span> 2.5-10 mL twice daily, adjusted according to response<br><span class='age-group'>5 - 18 years</span> 5-20 mL twice daily, adjusted according to response <br> <span class='age-group'> Note</span> This calculator uses the UpToDate dosing of 0.5 mL/kg</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_895"
  },
  Loratadine: {
    tabletOnly: false,
    numberOfTimesADay: " once daily",
    weightrange: true,
    rangeWeightCutOff: 30,
    rangeWeightCutOff2: 9999,
    range1doseMls: 5,
    range1doseMgs: 5,
    range2doseMls: 10,
    range2doseMgs: 10,
    messageMls: "<br><br>(2.5 mLs if 1-2 years)",
    messageMgs: "<br><br>(2.5 mgs if 1-2 years)",
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 - 2 years</span> 2.5 mg once daily<br><span class='age-group'>2 - 12 years under 30kg</span> 5 mg once daily<br><span class='age-group'>2 - 12 years over 30kg</span> 10 mg once daily<br> <span class='age-group'>12 - 18 years</span> 10 mg once daily</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_1848"
  },
  Macrogol: {
    tabletOnly: false,
    mlsvar: 0.038,
    mgsvar: 0.5,
    numberOfTimesADay: " daily",
    mlsmax: 8,
    mgsmax: 105,
    sachetsmax: 8,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>12 - 18 years</span> 1 sachet once daily, increase to 2-3 sachets daily if required; contents of each sachet dissolved in half a glass (approximately 125 mL) of water<br><span class='age-group'>2 - 18 years</span> The NZF only provides dosing advise for the unfunded Lax-Sachets Half for this age group. Therefore this calculator uses 1.5g/kg for disimpaction (<a href='https://www.starship.org.nz/for-health-professionals/starship-clinical-guidelines/c/constipation/' target='_blank'>starship</a> advises 1-1.5g/kg), and a maintenance dose of 0.5g/kg </div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_897"
  },
  Malarone: {
    tabletOnly: true,
    tabletSize: "Atovaquone/Proguanil",
    numberOfTimesADay: " once daily",
    weightrange: true, // Used to trigger bucket-based dosing
    rangeWeightCutOff: 21,
    rangeWeightCutOff2: 31,
    rangeWeightCutOff3: 40, // New property for 3rd weight tier
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>Malaria Prophylaxis:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>11–21 kg</span> 1 Malarone Junior tablet once daily<br><span class='age-group'>21–31 kg</span> 2 Malarone Junior tablets once daily<br><span class='age-group'>31–40 kg</span> 3 Malarone Junior tablets once daily<br><span class='age-group'>Over 40 kg</span> 1 Malarone Adult tablet once daily<br> <span class='age-group'> Note</span> Start 1–2 days before entering endemic area; continue for 7 days after leaving.</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3549"
  },
  Penicillin125: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 6.25,
    numberOfTimesADay: " four times a day",
    mlsmax: 20,
    mgsmax: 500,
    highrange: true,
    highmodifier: 2,
    indications: [
      { label: "General (6.25-12.5mg/kg)", mgs: 6.25, mls: 0.25, freq: " four times a day", mgsmax: 500, mlsmax: 20, highrange: true },
      { label: "Strep A (15mg/kg)", mgs: 15, mls: 0.6, freq: " twice daily for 10 days", mgsmax: 500, mlsmax: 20, highrange: false }
    ],
    messageshow: true,
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 6.25-12.5 mg/kg (maximum 250-500 mg) 4 times daily </div><strong>Strep A Dosing (First and Second Episodes):</strong> <div class='message__section-dosing-instructions'><span class='age-group'> Child</span> 15 mg/kg twice daily for 10 days (maximum 500 mg / dose)</div><strong>Strep A Dosing (Third or More Episode within 3 months):</strong> <div class='message__section-dosing-instructions'><span class='age-group'> Child</span> 12.5 mg/kg (maximum 500 mg) 4 times daily for 10 days, in combination with <a href='https://nzfchildren.org.nz/nzf_3243' target='_blank'>rifampicin</a> at 20 mg/kg (maximum 600 mg) once daily for 4 days, beginning on day 7 of the phenoxymethylpenicillin or amoxicillin course (requires specialist approval)</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3006"
  },

  Penicillin250: {
    tabletOnly: false,
    mlsvar: 0.125,
    mgsvar: 6.25,
    numberOfTimesADay: " four times a day",
    mlsmax: 10,
    mgsmax: 500,
    highrange: true,
    highmodifier: 2,
    indications: [
      { label: "General (6.25-12.5mg/kg)", mgs: 6.25, mls: 0.125, freq: " four times a day", mgsmax: 500, mlsmax: 10, highrange: true },
      { label: "Strep A (15mg/kg)", mgs: 15, mls: 0.3, freq: " twice daily for 10 days", mgsmax: 500, mlsmax: 10, highrange: false }
    ],
    messageshow: true,
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>1 month - 18 years</span> 6.25-12.5 mg/kg (maximum 250-500 mg) 4 times daily </div><strong>Strep A Dosing (First and Second Episodes):</strong> <div class='message__section-dosing-instructions'><span class='age-group'> Child</span> 15 mg/kg twice daily for 10 days (maximum 500 mg / dose)</div><strong>Strep A Dosing (Third or More Episode within 3 months):</strong> <div class='message__section-dosing-instructions'><span class='age-group'> Child</span> 12.5 mg/kg (maximum 500 mg) 4 times daily for 10 days, in combination with <a href='https://nzfchildren.org.nz/nzf_3243' target='_blank'>rifampicin</a> at 20 mg/kg (maximum 600 mg) once daily for 4 days, beginning on day 7 of the phenoxymethylpenicillin or amoxicillin course (requires specialist approval)</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3006"
  },
  Prednisolone: {
    tabletOnly: false,
    mlsvar: 0.2,
    mgsvar: 1,
    numberOfTimesADay: " once a day",
    mlsmax: 8,
    mgsmax: 40,
    mlsmaxhigh: 8,
    mgsmaxhigh: 40,
    highrange: true,
    highmodifier: 2,
    messageshow: true,
    messageMls:
      "<br><br>If child has been taking an oral corticosteroid for more than a few days, give 2 mg/kg (i.e. 0.4mL/kg, with a higher maximum of 12mL) once daily",
    messageMgs:
      "<br><br>If child has been taking an oral corticosteroid for more than a few days, give 2 mg/kg (higher maximum of 60mg) once daily",
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>Child</span> 1-2 mg/kg (maximum 40 mg) once daily for 3-5 days; if child has been taking an oral corticosteroid for more than a few days, give 2 mg/kg (maximum 60 mg) once daily for at least 5 days </div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3846"
  },
  Roxithromycin: {
    tabletOnly: true,
    tabletSize: "50 mg",
    mgsvar: 2.5,
    numberOfTimesADay: " twice daily",
    mgsmax: 150,
    highrange: true,
    highmodifier: 1.6,
    indications: [
      { label: "General (2.5-4mg/kg)", mgs: 2.5, mls: 0, freq: " twice daily", mgsmax: 150, mlsmax: 0, highrange: true },
      { label: "Strep A (2.5mg/kg)", mgs: 2.5, mls: 0, freq: " twice daily for 10 days", mgsmax: 150, mlsmax: 0, highrange: false }
    ],
    strepdrug: true,
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>under 40 kg</span> 2.5-4 mg/kg (maximum 150 mg) twice daily <br><span class='age-group'>over 40 kg</span> 150 mg twice daily </div> <strong>Strep A Dosing:</strong> <div class='message__section-dosing-instructions'><span class='age-group'>under 40 kg</span> 2.5 mg/kg twice daily for 10 days<br> <span class='age-group'> over 40 kg </span> 150 mg twice daily for 10 days<br></div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_3161"
  },
  Ferrous_sulphate: {
    tabletOnly: false,
    mlsvar: 0.25,
    mgsvar: 1.5,
    numberOfTimesADay: " twice a day",
    mlsmax: 7.5,
    mgsmax: 45,
    mlsmaxhigh: 15,
    mgsmaxhigh: 90,
    highrange: true,
    highmodifier: 2,
    mlsvarprophylaxis: 0.33,
    mgsvarprophylaxis: 2,
    prophylaxisfrequency: "daily",
    messageshow: true,
    messageMls:
      "",
    messageMgs:
      " of equivalent elemental iron",
    instructions:
      "<div class='message__section-dosing-item message__section-dosing-label'><strong>General Dosing:</strong> <br> <div class='message__section-dosing-instructions'><span class='age-group'>Child 1 month - 12 years</span> 0.5-1 mL/kg daily up to maximum 30 mL daily in 2-3 divided doses <br><span class='age-group'>Child 12 - 18 years</span> 15-30 mL daily in 1-2 divided doses</div></div>",
    nzflink: "https://nzfchildren.org.nz/nzf_4915"
  }
};