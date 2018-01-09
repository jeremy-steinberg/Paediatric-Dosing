//This is a paediatric dosing calculator, written by Dr. Jeremy Steinberg
//Contact me for any queries, http://www.jackofallorgans.com/contact/
//I am happy to allow re-use of the code for non-commercial organisations, but please contact me first.

//Set up the drug object with all their values
let drug_options = {
	"None": 0,
	"Paracetamol120" : {
		mlsvar: 0.625,
		mgsvar: 15,
		numberOfTimesADay: " FOUR times a day",
		mlsmax: 42,
		mgsmax: 1000
	},
	"Paracetamol250":  {
		mlsvar: 0.3,
		mgsvar: 15,
		numberOfTimesADay: " FOUR times a day",
		mlsmax: 20,
		mgsmax: 1000
	},
	"Ibuprofen100": {
		mlsvar: 0.25,
		mgsvar: 5,
		numberOfTimesADay: " THREE times a day",
		mlsmax: 10,
		mgsmax: 200,
		mlsmaxhigh: 20,
		mgsmaxhigh: 400,
		highrange: true,
	},
	"Amoxicillin125": {
	  mlsvar: 0.6,
	  mgsvar: 15,
	  numberOfTimesADay: " THREE times a day",
	  mlsmax: 20,
	  mgsmax: 500,
	  mlsmaxhigh: 40,
	  mgsmaxhigh: 1000,
	  highrange: true,
	  messageshow: true,
	  messageMls:
		"<br><br>(maximum 20 mL/dose age three months to five years, 40 mL/dose age > 5 years)",
	  messageMgs:
		"<br><br>(maximum 500 mg/dose age three months to five years, 1000 mg/dose age > 5 years)"
	},
	"Amoxicillin250": {
	  mlsvar: 0.3,
	  mgsvar: 15,
	  numberOfTimesADay: " THREE times a day",
	  mlsmax: 10,
	  mgsmax: 500,
	  mlsmaxhigh: 20,
	  mgsmaxhigh: 1000,
	  highrange: true,
	  messageshow: true,
	  messageMls:
		"<br><br>(maximum 10 mL/dose age three months to five years, 20 mL/dose age > 5 years)",
	  messageMgs:
		"<br><br>(maximum 10 mL/dose age three months to five years, 20 mL/dose age > 5 years)"
	},
	"Cefaclor125": {
	  mlsvar: 0.4,
	  mgsvar: 10,
	  numberOfTimesADay: " THREE times a day",
	  mlsmax: 20,
	  mgsmax: 1000
	},
	"Cefalexin125": {
	  mlsvar: 0.5,
	  mgsvar: 12.5,
	  numberOfTimesADay: " TWICE to FOUR times a day",
	  mlsmax: 40,
	  mgsmax: 1000
	},
	"Cefalexin250": {
	  mlsvar: 0.25,
	  mgsvar: 12.5,
	  numberOfTimesADay: " TWICE to FOUR times a day",
	  mlsmax: 20,
	  mgsmax: 1000
	},
	"Coamoxiclav125-31.25": {
	  mlsvar: 0.48,
	  mgsvar: 12,
	  numberOfTimesADay: " THREE times a day",
	  mlsmax: 20,
	  mgsmax: 500
	},
	"Coamoxiclav250-62.5": {
	  mlsvar: 0.24,
	  mgsvar: 12,
	  numberOfTimesADay: " THREE times a day",
	  mlsmax: 10,
	  mgsmax: 500
	},
	"Cotrimoxazole480": {
	  mlsvar: 0.5,
	  mgsvar: 24,
	  numberOfTimesADay: " TWICE a day",
	  mlsmax: 20,
	  mgsmax: 960
	},
	"Erythromycin200": {
	  mlsvar: 0.25,
	  mgsvar: 10,
	  numberOfTimesADay: " FOUR times a day",
	  mlsmax: 25,
	  mgsmax: 1000,
	  messageshow: true,
	  messageMls: "<br>(Total daily dose may be given in two divided doses)",
	  messageMgs: "<br>(Total daily dose may be given in two divided doses)"
	},
	"Erythromycin400": {
	  mlsvar: 0.125,
	  mgsvar: 10,
	  numberOfTimesADay: " FOUR times a day",
	  mlsmax: 12.5,
	  mgsmax: 1000,
	  messageshow: true,
	  messageMls: "<br>(Total daily dose may be given in two divided doses)",
	  messageMgs: "<br>(Total daily dose may be given in two divided doses)"
	},
	"Flucloxacillin125": {
	  mlsvar: 0.5,
	  mgsvar: 12.5,
	  numberOfTimesADay: " FOUR times a day",
	  mlsmax: 20,
	  mgsmax: 500
	},
	"Flucloxacillin250": {
	  mlsvar: 0.25,
	  mgsvar: 12.5,
	  numberOfTimesADay: " FOUR times a day",
	  mlsmax: 10,
	  mgsmax: 500
	},
	"Lactulose": {
	  mlsvar: 0.5,
	  mgsvar: 0.334,
	  numberOfTimesADay: " TWICE daily (adjusted according to response)",
	  mlsmax: 20,
	  mgsmax: 20
	},
	"Loratadine": {
	  numberOfTimesADay: " ONCE daily",
	  weightrange: true,
	  rangeWeightCutOff: 30,
	  rangeWeightCutOff2: 9999,
	  range1doseMls: 5,
	  range1doseMgs: 5,
	  range2doseMls: 10,
	  range2doseMgs: 10,
	  messageMls: "<br><br>(2.5 mLs if 1-2 years)",
	  messageMgs: "<br><br>(2.5 mgs if 1-2 years)"
	},
	"Macrogol": {
	  mlsvar: 0.038,
	  mgsvar: 0.5,
	  numberOfTimesADay: " ONCE daily",
	  mlsmax: 8, //actually sachets
	  mgsmax: 105,
	  sachetsmax: 8 //actually sachets
	},
	"Ondansetron": {
	  range1doseMgs: 2,
	  range2doseMgs: 4,
	  range3doseMgs: 8,
	  weightrange: true,
	  hardcutoff: true,
	  hardRangeWeightCutOff: 7.9,
	  RangeWeightCutOff: 15,
	  rangeWeightCutOff2: 30,
	  numberOfTimesADay: " once as a single dose",
	  messageMls: "<br><br>(N/A, oro-dispersible tablet form only)",
	  messageMgs: ""
	},
	"Phenoxymethylpenicillin": {
	  numberOfTimesADay: " TWO to THREE times a day <br>(10 days for strep A)",
	  weightrange: true,
	  rangeWeightCutOff: 20,
	  rangeWeightCutOff2: 9999,
	  range1doseMls: 5,
	  range1doseMgs: 250,
	  range2doseMls: 10,
	  range2doseMgs: 500,
	  messageMls: "",
	  messageMgs: "",
	},
	"Prednisolone": {
	  mlsvar: 0.2,
	  mgsvar: 1,
	  numberOfTimesADay: " ONCE daily",
	  mlsmax: 8,
	  mgsmax: 40,
	  mlsmaxhigh: 8,
	  mgsmaxhigh: 40,
	  highrange: true,
	  messageshow: true,
	  messageMls: "<br><br>If child has been taking an oral corticosteroid for more than a few days, give 2 mg/kg (i.e. 0.4mL/kg, with a higher maximum of 12mL) once daily",
	  messageMgs: "<br><br>If child has been taking an oral corticosteroid for more than a few days, give 2 mg/kg (higher maximum of 60mg) once daily",
	}
	
};
	
// for creating a new drug if required: e.g. var Prednislone = new Drug (....), then drug_options.Prednisolone = Prednisolone;	
function Drug(mlsvar, mgsvar, numberOfTimesADay, mlsmax, mgsmax, mlsmaxhigh, mgsmaxhigh, highrange, messageshow, messageMls, messageMgs) {
	this.mlsvar = mlsvar;
	this.mgsvar = mgsvar;
	this.numberOfTimesADay = numberOfTimesADay;
	this.mlsmax = mlsmax;
	this.mgsmax = mgsmax;
	this.mlsmaxhigh = mlsmaxhigh;
	this.mgsmaxhigh = mgsmaxhigh;
	this.highrange = highrange;
	this.messageshow = messageshow;
	this.messageMls = messageMls;
	this.messageMgs = messageMgs;
}




//get the frequency from the drug object in the drug_options object
function getFrequency() {
  let theDrug = document.getElementById("drug").value;
  let frequency = drug_options[theDrug].numberOfTimesADay;
  return frequency;
}

// getWeight() finds the weight from the form
function getWeight() {
  let weight = Number(document.getElementById("theweight").value);
  return weight;
}

// getMlsValue() finds the Mls value from the drug_options object
function getMlsValue() {
  let drugSelect = document.getElementById("drug");
  return drug_options[drugSelect.value].mlsvar;
}

//find the MgsValue
function getMgsValue() {
  let drugSelect = document.getElementById("drug");
  return drug_options[drugSelect.value].mgsvar;
}


//rounding function
function round(value, step) {
  step || (step = 1.0);
  let inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}

// calculateTotalMls() calculate the dose and set the maximums
function calculateTotalMls() {
  let totalMls = parseFloat(getMlsValue() * getWeight());
  let messageMls = "";
  let totalhighMls = parseFloat((totalMls * 2).toFixed(1));
  let theDrug = document.getElementById("drug").value;
  let highMls = "";
  let mls = " mLs";
  let totalhighsachets = (totalMls * 3).toFixed(1);
  let weight = getWeight();
  totalMls = totalMls || ""; // removes NaN messageMgs

  // set maximum doses

  if (totalMls > drug_options[theDrug].mlsmax) {
    totalMls = drug_options[theDrug].mlsmax;
  }

  if (totalhighMls > drug_options[theDrug].mlsmaxhigh) {
    totalhighMls = drug_options[theDrug].mlsmaxhigh;
  }

  if (totalhighsachets > drug_options[theDrug].sachetsmax) {
    totalhighsachets = parseFloat(drug_options[theDrug].sachetsmax);
  }

  //check if there is a high range and then add the high range string

  if (drug_options[theDrug].highrange == true && totalMls < totalhighMls) {
    highMls = " - " + String(totalhighMls);
  }

  //check if there is a message and then add the message string

  if (drug_options[theDrug].messageshow == true) {
    messageMls = drug_options[theDrug].messageMls;
  }
  
  //work out the dosing for drugs with weight cut offs 
  if (drug_options[theDrug].weightrange == true) {
    if (weight < drug_options[theDrug].rangeWeightCutOff) {
      totalMls = drug_options[theDrug].range1doseMls;
      messageMls = drug_options[theDrug].messageMls;
    } else if (weight >= drug_options[theDrug].rangeWeightCutOff && weight < drug_options[theDrug].rangeWeightCutOff2) {
      totalMls = drug_options[theDrug].range2doseMls;
      messageMls = drug_options[theDrug].messageMls;
    } else {
      totalMls = "unexpected error"
    }
  }

  //set strings and display range for when there is a range for drugs with a weight cut off rather than a calculation

  if (document.getElementById("drug").value == "Ibuprofen100" && weight < 10) {
    messageMls =
      "<br><br>Maximum " + totalMls.toFixed(1) + " mLs if under THREE months";
  }
  
    if (document.getElementById("drug").value == "Prednisolone") {
    let veryhighdosepred = parseFloat((weight * 0.4).toFixed(1));
    if (veryhighdosepred >= 12){
      veryhighdosepred = 12;
    }
    messageMls = 
      "<br><br>If child has already been taking for more than a few days, give " + veryhighdosepred + "mL once daily (2mg/kg with a 60mg/12mL maximum)";
  }



  if (document.getElementById("drug").value == "Macrogol") {
    mls = " sachets";
  }

  if (document.getElementById("drug").value == "Macrogol") {
    messageMls =
      " (disolved in " +
      String(round(125 * totalMls, 10)) +
      " mLs of water)" +
      "<br><br>OR<br>" +
      "<br>Disimpaction Dose: " +
      String(round(totalhighsachets, 0.25)) +
      " sachets daily until passes soft stool" +
      " (disolved in " +
      String(round(125 * totalhighsachets, 10)) +
      " mLs of water)";
  }

  //the bit that puts it in the div

  displayMls(totalMls, highMls, mls, messageMls);
}

//display the result for Mls
function displayMls(totalMls, highMls, mls, messageMls) {
  let totalEl = document.getElementById("Result");
  let frequency = getFrequency();
  totalEl.style.display = "block";


  
  if (document.getElementById("drug").value == "None") {
    document.getElementById("Result").innerHTML =
      "Please select a drug and input a weight";
  } else if (document.getElementById("theweight").value == "") {
    document.getElementById("Result").innerHTML =
      "Please select a drug and input a weight";

  } else if (document.getElementById("theweight").value < 0) {
    document.getElementById("Result").innerHTML =
    "Cannot be negative weight";
  } else if (document.getElementById("theweight").value > 100) {
    document.getElementById("Result").innerHTML =
    "Please enter a weight below 100kg";
 
  } else {
    document.getElementById("Result").innerHTML =
      "Dose = " +
      parseFloat(totalMls.toFixed(1)) +
      highMls +
      mls +
      frequency +
      messageMls;
	  
  }
    
    //this will then make all '.' letters and numbers and dashes bigger    
  let element = document.querySelector('#Result');
  element.innerHTML = element.innerHTML.replace(/(\d+)(\.)?(\d+)?(\s\-\s)?/g, 
  '<span style="font-size:1.25rem;">$1</span><span style="font-size:1.75rem;">$2</span><span style="font-size:1.25rem;">$3</span><span style="font-size:1.5rem;">$4</span>');


}

//hide the mls result
function hideTotal() {
  let totalEl = document.getElementById("Result");
  totalEl.style.display = "none";
}

//calculate Milligram total

function calculateMgsTotal() {
  let totalMgs = parseFloat((getMgsValue() * getWeight()).toFixed(1));
  let messageMgs = "";
  let totalhigh = parseFloat((totalMgs * 2).toFixed(0));
  let totalhighsachets = (totalMgs * 3).toFixed(0);
  let theDrug = document.getElementById("drug").value;
  let highMgs = "";
  let mgs = " mgs";
  let weight = getWeight();

  // set maximum doses

  if (totalMgs > drug_options[theDrug].mgsmax) {
    totalMgs = drug_options[theDrug].mgsmax;
  }

  if (totalhigh > drug_options[theDrug].mgsmaxhigh) {
    totalhigh = drug_options[theDrug].mgsmaxhigh;
  }

  if (totalhighsachets > drug_options[theDrug].mgsmax) {
    totalhighsachets = parseFloat(drug_options[theDrug].mgsmax);
  }

  //check if there is a high range and then add the high range string

  if (drug_options[theDrug].highrange == true && totalMgs < totalhigh) {
    highMgs = " - " + String(totalhigh);
  }

  //check if there is a message and then add the message string

  if (drug_options[theDrug].messageshow == true) {
    messageMgs = drug_options[theDrug].messageMgs;
  }

   //work out the dosing for drugs with weight cut offs 
    if (drug_options[theDrug].weightrange == true) {
    if (weight < drug_options[theDrug].rangeWeightCutOff) {
      totalMgs = drug_options[theDrug].range1doseMgs;
      messageMgs = drug_options[theDrug].messageMgs;
    } else if (weight >= drug_options[theDrug].rangeWeightCutOff && weight < drug_options[theDrug].rangeWeightCutOff2){
      totalMgs = drug_options[theDrug].range2doseMgs;
      messageMgs = drug_options[theDrug].messageMgs;
    } else {
      totalMgs = "unexpected error"
    }
  }
  
  
  if (document.getElementById("drug").value == "Ibuprofen100" && weight < 10) {
    messageMgs =
      "<br><br>Maximum " + totalMgs.toFixed(0) + " mgs if under THREE months";
  }

    if (document.getElementById("drug").value == "Prednisolone") {
    let veryhighdosepred = parseFloat((weight * 2).toFixed(1));
    if (veryhighdosepred >= 60){
      veryhighdosepred = 60;
    }
    messageMgs = 
      "<br><br>If child has already been taking for more than a few days, give " + veryhighdosepred + "mg once daily (2mg/kg with a 60mg maximum)";
  }  
  
  
  if (
    document.getElementById("drug").value == "Coamoxiclav125-31.25" ||
    document.getElementById("drug").value == "Coamoxiclav250-62.5"
  ) {
    messageMgs =
      " of the amoxicillin component" +
      "<br>" +
      "OR" +
      "<br>" +
      totalMgs * 1.25 +
      " mgs of the total component";
  }


  if (document.getElementById("drug").value == "Macrogol") {
    messageMgs =
      "<br><br> (or " +
      String(round(totalhighsachets, 0.25)) +
      " mgs daily for disimpaction until passes soft stool)";
  }

  displayMgs(totalMgs, highMgs, mgs, messageMgs);
}

//show the mgs result
function displayMgs(totalMgs, highMgs, mgs, messageMgs) {
  let totalElMgs = document.getElementById("ResultMgs");
  let frequency = getFrequency();

  if (document.getElementById("drug").value == "None") {
    totalElMgs.style.display = "none";
    document.getElementById("ResultMgs").innerHTML =
      "Please select a drug and input a weight"; // shouldn't show up
  } else if (document.getElementById("theweight").value == "") {
    totalElMgs.style.display = "none";
    document.getElementById("ResultMgs").innerHTML =
      "Please select a drug and input a weight";
    
  } else if (document.getElementById("theweight").value < 0) {
    totalElMgs.style.display = "none";
  } else if (document.getElementById("theweight").value > 100) {
    totalElMgs.style.display = "none";
    
  } else {
    totalElMgs.style.display = "block";
    document.getElementById("ResultMgs").innerHTML =
      "In milligrams = " + totalMgs + highMgs + mgs + frequency + messageMgs;
    
  }
	

      //this will then make all '.' letters and numbers and dashes bigger    
  let element = document.querySelector('#ResultMgs');
  element.innerHTML = element.innerHTML.replace(/(\d+)(\.)?(\d+)?(\s\-\s)?/g, 
  '<span style="font-size:1.25rem;">$1</span><span style="font-size:1.75rem;">$2</span><span style="font-size:1.25rem;">$3</span><span style="font-size:1.5rem;">$4</span>');


  
  
}

//hide the mgs result
function hideTotalMgs() {
  let totalElMgs = document.getElementById("ResultMgs");
  totalElMgs.style.display = "none";
}


 