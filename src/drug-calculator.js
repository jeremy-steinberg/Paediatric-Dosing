//This is a paediatric dosing calculator, written by Dr. Jeremy Steinberg
//Contact me for any queries, http://www.jackofallorgans.com/contact/
//I am happy to allow re-use of the code for non-commercial organisations, but please contact me first.




//get the frequency from the drug object in the drug_options object
function getFrequency() {
 let theDrug = getDrug();
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
 let theDrug = getDrug();
 return drug_options[theDrug].mlsvar;
}

//find the MgsValue
function getMgsValue() {
 let theDrug = getDrug();
 return drug_options[theDrug].mgsvar;
}

//get the inputted age value
function getAge() {
  
  let age = Number(document.getElementById("theage").value);
  if (document.getElementById("age-type").value == "months") {
    age = age / 12
  };
  return age;
}

//rounding function
function round(value, step) {
 step || (step = 1.0);
 let inv = 1.0 / step;
 return Math.round(value * inv) / inv;
}


//check if tablet and set message if tablet only for mls section
function tabletOnly(theDrug){
  document.getElementById("Result").innerHTML = theDrug + " does not come in liquid form, but as a dispersible " + drug_options[theDrug].tabletSize + " tablet";
}

// show bottom dosing instructions
function showInstructions(drug){

let theDrug = getDrug();  
    if (theDrug == "None"){
      document.getElementById("instructions").innerHTML = "";
      document.getElementById("dosing-section").style.display = "none";

      return;
    } else {
      document.getElementById("dosing-section").style.display = "block";
      document.getElementById("instructions").innerHTML = drug.instructions;
    }
  
}



// warning display
function showWarning(message){
  var warning = document.getElementById("warning-message");
  warning.innerHTML = message;
  document.getElementById("Result").innerHTML = "";
    document.getElementById("ResultMgs").innerHTML = "";
  warning.style.display = "block";
}

//error display
function showError(message, section){
 var error = document.getElementById("error-message");
 error.innerHTML = message;
 document.getElementById("Result").innerHTML = "";
 document.getElementById("ResultMgs").innerHTML = "";
 error.style.display = "block";
  
  if (section == "weight"){
    document.getElementById("theweight").style.border = "1px solid #d02c03";
  } else if (section == "drug"){
    document.getElementById("drug").style.border = "1px solid #d02c03";
  } 

 
  
}


// make dashes and decimals bigger
function changeDecimalSize(string){
    let replaceString = '<span style="font-size:1.25rem;">$1</span><span style="font-size:1.25rem;">$2</span><span style="font-size:1.25rem;">$3</span><span style="font-size:1.25rem;">$4</span>';
  return string.replace(/(\d+)(\.)?(\d+)?(\s\-\s)?/g, replaceString);
}

// clear results
function clearResults(){
 document.getElementById("ResultMgs").innerHTML = "";
 document.getElementById("Result").innerHTML = "" ;
 document.getElementById("warning-message").innerHTML = "" ;
 document.getElementById("error-message").innerHTML = "" ;
 document.getElementById("error-message").style.display = "none";
 document.getElementById("warning-message").style.display = "none";

}

// generate a loading dose, return null if no loading dose.
function getLoading(unit){
    let theDrug = getDrug();
    if (drug_options[theDrug].loadingdose == true){
      if (unit == "mls"){
          let loadingdose = drug_options[theDrug].mlsvarloading * getWeight();
          if (loadingdose > drug_options[theDrug].mlsmaxloading){
             loadingdose = drug_options[theDrug].mlsmaxloading;
          }
          return "<br>(an initial loading dose of " + parseFloat(loadingdose.toFixed(1)) + " mLs may be given)";  
      } else if (unit == "mgs"){
          let loadingdose = drug_options[theDrug].mgsvarloading * getWeight();
          if (loadingdose > drug_options[theDrug].mgsmaxloading){
             loadingdose = drug_options[theDrug].mgsmaxloading;
          }
          return "<br>(an initial loading dose of " + parseFloat(loadingdose.toFixed(1)) + " mgs may be given)";          
      }
    } else {
      return null;
    }
  
}

//get strep A dosing information
function getStrep(unit){
    unit = unit == "mls" ? "mLs" : "mgs";
    let theDrug = getDrug();
    let weight = getWeight();
    if (drug_options[theDrug].strepdrug == true){
    if (theDrug == "Amoxicillin125" || theDrug == "Amoxicillin250"){
      if (weight < 15){
        let dose = unit == "mLs" ? drug_options[theDrug].mlsvarstrep : drug_options[theDrug].mgsvarstrep;
        return "<br><br>Strep A: " + parseFloat((dose * weight).toFixed(1)) + " " + unit + drug_options[theDrug].strepfrequency;             
      } else if (weight >= 15 && weight < 30){
        let dose = unit == "mLs" ? drug_options[theDrug].mlsvarstreplow : drug_options[theDrug].mgsvarstreplow;
        return "<br><br>Strep A: " + dose + " " + unit + drug_options[theDrug].strepfrequency;        
      } else if (weight >= 30){
        let dose = unit == "mLs" ? drug_options[theDrug].mlsvarstrephigh : drug_options[theDrug].mgsvarstrephigh;
        return "<br><br>Strep A:  " +  dose + " " + unit + drug_options[theDrug].strepfrequency;      
      }
      
    } else if (theDrug == "Coamoxiclav125-31.25" || theDrug == "Coamoxiclav250-62.5") {
      
      let dose = unit == "mLs" ? drug_options[theDrug].mlsvarstrep : drug_options[theDrug].mgsvarstrep;
      dose = parseFloat((dose * weight).toFixed(1));
      
      if (unit == "mLs"){
      dose = (dose > drug_options[theDrug].mlsstrepmax) ? drug_options[theDrug].mlsstrepmax : dose;
      } else if (unit == "mgs"){
      dose = (dose > drug_options[theDrug].mgsstrepmax) ? drug_options[theDrug].mgsstrepmax : dose;        
      }
      return "<br><br>Strep A: " + dose + " " + unit + drug_options[theDrug].strepfrequency;    

     
    } else if (theDrug == "Penicillin125" || theDrug == "Penicillin250"){
      if (weight < 20){
        let dose = unit == "mLs" ? drug_options[theDrug].mlsvarstreplow : drug_options[theDrug].mgsvarstreplow;
        return "<br><br>Strep A: " + dose + " " + unit + drug_options[theDrug].strepfrequency;  
      } else if (weight >= 20){
        let dose = unit == "mLs" ? drug_options[theDrug].mlsvarstrephigh : drug_options[theDrug].mgsvarstrephigh;
        return "<br><br>Strep A: " + dose + " " + unit + drug_options[theDrug].strepfrequency;  
      }  
    } else if (theDrug == "Roxithromycin"){
      if (weight < 40){
        if (unit == "mLs"){ return null;} else if (unit == "mgs"){
        return "<br><br>Strep A: " + parseFloat((drug_options[theDrug].mgsvar * weight).toFixed(1)) + " " + unit + drug_options[theDrug].strepfrequency;
        }
      } else if (weight >= 40){	
        if (unit == "mLs"){ return null;} else if (unit == "mgs"){
        return "<br><br>Strep A: " + drug_options[theDrug].mgsvarstrephigh + " " + unit + drug_options[theDrug].strepfrequency;        
        }
      }      
    } else if (theDrug == "Erythromycin200" || theDrug == "Erythromycin400"){
        
      if (unit == "mLs"){
      let strepdose = parseFloat((drug_options[theDrug].mlsvarstrep * weight).toFixed(1));
        if (strepdose > drug_options[theDrug].mlsstrepmax) {
        strepdose = drug_options[theDrug].mlsstrepmax;
        }
       return "<br><br>Strep A: " + strepdose + " " + unit + drug_options[theDrug].strepfrequency;
      } else if (unit == "mgs"){
      let strepdose = parseFloat((drug_options[theDrug].mgsvarstrep * weight).toFixed(1));
        if (strepdose > drug_options[theDrug].mgsstrepmax) {
        strepdose = drug_options[theDrug].mgsstrepmax;
        }
       return "<br><br>Strep A: " + strepdose + " " + unit + drug_options[theDrug].strepfrequency;        
      }
    } 
  } else { //end of checking if its a strep drug
    return null;
  }
  
}



function setIndication(i){
  if (i == "1"){
    theIndication = "general"
    document.getElementById("ResultMgs").innerHTML = "";
    document.getElementById("Result").innerHTML = "" ;
    document.getElementById("indicationgeneral").style.color = "#bc4380";
    document.getElementById("indicationstrep").style.color = "#b3b3b3";

  } else if (i == "2") {
    theIndication = "strep";
    document.getElementById("ResultMgs").innerHTML = "";
    document.getElementById("Result").innerHTML = ""  ;
    document.getElementById("indicationgeneral").style.color = "#b3b3b3";
    document.getElementById("indicationstrep").style.color = "#bc4380";
   
  }

}

//make sure valid inputs
function validate(){
  
  let theDrug = getDrug();
   
   if (document.getElementById("theweight").value == "") {
    showError("Please input a weight", "weight");
  } else if (document.getElementById("theweight").value < 0) {
    showError("Cannot be negative weight.", "weight");
  } else if (document.getElementById("theweight").value > 100) {
    showError("Please enter a weight below 100kg.", "weight");
  } else if (radioDosing == true && document.getElementById('drug1').checked == false && document.getElementById('drug2').checked == false){
   showError("Please select a drug", "drug");
  } else if (theDrug == "None") {
    showError("Please select a drug", "drug");
  }   else {
      document.getElementById("warning-message").innerHTML = "" ;
      document.getElementById("error-message").innerHTML = "" ;
      document.getElementById("error-message").style.display = "none";
      document.getElementById("warning-message").style.display = "none";
      calculateMlsTotal();
      calculateMgsTotal();

    document.getElementById("drug").style.border = "1px solid  #cacaca";
    document.getElementById("theweight").style.border = "1px solid  #cacaca";
  }


}

// change href on the NZF button
function changeLink(){

  var theDrug = getDrug();
  if (theDrug != null){
  let link = drug_options[theDrug].nzflink;
  document.getElementById("nzflink").href = link;
  }


}

//for calculators with radio select, check which one is selected and return the value.
function getDrugRadio(){
  if (document.getElementById("drug1").checked){
    document.getElementById("120label").style.color = "#bc4380";
    document.getElementById("250label").style.color = "#b3b3b3";
    return document.getElementById("drug1").value;

  } else if (document.getElementById("drug2").checked) {
    document.getElementById("250label").style.color = "#bc4380";
    document.getElementById("120label").style.color = "#b3b3b3";
    return document.getElementById("drug2").value;
    
  } else {
    return document.getElementById("drug1").value;
  }

}

// Set the drug, either set it to be selectable from the drop down, or set it as a specific drug.
function getDrug(){
  if (radioDosing == false){
  return document.getElementById("drug").value;    
  } else if (radioDosing == true){
  return getDrugRadio();
  } 
 
}


// calculateTotalMls() calculate the dose and set the maximums
function calculateMlsTotal() {
  let theDrug = getDrug();
  showInstructions(drug_options[theDrug]);
  changeLink();
  let totalMls = parseFloat(getMlsValue() * getWeight());
  let highmodifier = drug_options[theDrug].highmodifier;
 let messageMls = "";
 let totalhighMls = parseFloat((totalMls * highmodifier).toFixed(1));
 let maximumMlsPerDay = "";
  let loading = "";
  let strep = "";
 let highMls = "";
 let mls = " mLs";
 let totalhighsachets = (totalMls * 3).toFixed(1);
 let weight = getWeight();
 totalMls = totalMls || ""; // removes NaN messageMgs

 // set maximum doses
  totalMls = totalMls > drug_options[theDrug].mlsmax ? drug_options[theDrug].mlsmax : totalMls;
  totalhighMls = totalhighMls > drug_options[theDrug].mlsmaxhigh ? drug_options[theDrug].mlsmaxhigh : totalhighMls;
  totalhighsachets = totalhighsachets > drug_options[theDrug].sachetsmax ? drug_options[theDrug].sachetsmax : totalhighsachets;


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
 totalMls = "unexpected error";
 }
 }

 //set strings and display range for when there is a range for drugs with a weight cut off rather than a calculation
 if (theDrug == "Ibuprofen100" && weight < 7) {
 showWarning("Warning: calculator is for ages above 3 months<br> However, if under 3 months then use lower end of dose range and give a maximum of three times daily");
 }
 if (theDrug == "Ibuprofen100norange" && weight < 7|| theDrug == "Ibuprofen200norange" && weight < 7 ) {
 showWarning("Caution: For use in infants from age 3 months - contact your doctor");
 }

 
 if (theDrug == "Prednisolone") {
 let veryhighdosepred = parseFloat((weight * 0.4).toFixed(1));
 veryhighdosepred = veryhighdosepred >= 12 ? 12 : veryhighdosepred;
 messageMls = 
 "<br><br>If child has already been taking for more than a few days, give " + veryhighdosepred + "mL once daily (2mg/kg with a 60mg/12mL maximum)";
 }

 if (theDrug == "Macrogol") {
  mls = " sachets";
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


//TODO set this to a variable in the drug object
 if (theDrug == "Ibuprofen100"){
 maximumMlsPerDay = "<br>(maximum " + parseFloat((totalhighMls * 3).toFixed(1)) + " mLs daily)";
}

    if (getLoading("mls") != null) { loading = getLoading("mls"); }
  
  if (getStrep("mls") != null) { 
      strep = getStrep("mls"); 
    } 
  
  
      if (theDrug == "Erythromycin200" || theDrug == "Erythromycin400") {

      let erythromycinaltdose = parseFloat((drug_options[theDrug].mlsvaralt * weight).toFixed(1));
      erythromycinaltdose = erythromycinaltdose > drug_options[theDrug].mlsmaxalt ? drug_options[theDrug].mlsmaxalt : erythromycinaltdose;
      
      messageMls = 
          "<br>" +
          "OR" +
          "</br>" +
          erythromycinaltdose + mls + 
          drug_options[theDrug].numberOfTimesADayAlt;
  }
  
 //the bit that puts it in the div
  
 if (drug_options[theDrug].tabletOnly == false) {
 
 displayMls(totalMls, highMls, mls, messageMls, loading, strep, maximumMlsPerDay);
 } else {
   tabletOnly(theDrug);
 }
  
}


//display the result for Mls
function displayMls(totalMls, highMls, mls, messageMls, loading, strep, maximumMlsPerDay) {


strep = (showStrep == true) ? strep : "";

let frequency = getFrequency();
 
if (theIndication == "strep"){
 var result = strep;
 result = result.replace("<br><br>Strep A: ", "");

 if (ageInput == true){
     if (getAge() < 3) {
    showWarning("Do not use this calculator for ages under 3 for strep A treatment.");
    }
 }

} else if (theIndication == "multi") {
 var result =  parseFloat(totalMls.toFixed(1)) +
 highMls +  mls +  frequency +  messageMls +   loading + maximumMlsPerDay + strep;
} else if (theIndication == "general"){
 var result =  parseFloat(totalMls.toFixed(1)) +
 highMls +  mls +  frequency +  messageMls +   loading + maximumMlsPerDay;
}

 document.getElementById("Result").innerHTML = result;
 document.getElementById("error-message").style.display = "none";
 document.querySelector('#Result').innerHTML = changeDecimalSize(result);

}



//calculate Milligram total
function calculateMgsTotal() {
 let theDrug = getDrug();
  let totalMgs = parseFloat((getMgsValue() * getWeight()).toFixed(1));
 let messageMgs = "";
  let loading = "";
    let strep = "";
 let maximumMgsPerDay = "";
 let highmodifier = drug_options[theDrug].highmodifier;
 let totalhigh = parseFloat((totalMgs * highmodifier).toFixed(0));
 let totalhighsachets = (totalMgs * 3).toFixed(0);
 let highMgs = "";
 let mgs = " mgs";
 let weight = getWeight();


  // set maximum doses
  totalMgs = totalMgs > drug_options[theDrug].mgsmax ? drug_options[theDrug].mgsmax : totalMgs;
  totalhigh = totalhigh > drug_options[theDrug].mgsmaxhigh ? drug_options[theDrug].mgsmaxhigh : totalhigh;
  totalhighsachets = totalhighsachets > drug_options[theDrug].mgsmax ? drug_options[theDrug].mgsmax : totalhighsachets; 


 //check if there is a high range and then add the high range string
   if (theDrug == "Roxithromycin" && weight > 40) { 
   totalMgs = 150;

 }
  
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
 totalMgs = "unexpected error";
 }
 }
 
 if (theDrug == "Ibuprofen100"){
 maximumMgsPerDay = "<br>(maximum " + parseFloat((totalhigh * 3).toFixed(1)) + " mgs daily)";
 }



 if (theDrug == "Prednisolone") {
 let veryhighdosepred = parseFloat((weight * 2).toFixed(1));
 veryhighdosepred = veryhighdosepred >= 60 ? 60 : veryhighdosepred;

 messageMgs = 
 "<br><br>If child has already been taking for more than a few days, give " + veryhighdosepred + "mg once daily (2mg/kg with a 60mg maximum)";
 } 
 
 
 if (
 theDrug == "Coamoxiclav125-31.25" ||
 theDrug == "Coamoxiclav250-62.5"
 ) {
 messageMgs +=
 " of the total component";
 }


 if (theDrug == "Macrogol") {
 messageMgs =
 "<br> (or " +
 String(round(totalhighsachets, 0.25)) +
 " mgs daily for disimpaction until passes soft stool)";
 }

      if (getLoading("mgs") != null) { loading = getLoading("mgs"); }
      if (getStrep("mgs") != null) { strep = getStrep("mgs"); }  
  

  
    if (theDrug == "Erythromycin200" || theDrug == "Erythromycin400") {
    
      let erythromycinaltdose = parseFloat((drug_options[theDrug].mgsvaralt * weight).toFixed(1));
      erythromycinaltdose = erythromycinaltdose > drug_options[theDrug].mgsmaxalt ? drug_options[theDrug].mgsmaxalt : erythromycinaltdose;
    
          messageMgs = 
          "<br>" +
          "OR" +
          "</br>" +
          erythromycinaltdose + mgs + 
          drug_options[theDrug].numberOfTimesADayAlt;
    }

 displayMgs(totalMgs, highMgs, mgs, messageMgs, loading, strep, maximumMgsPerDay);
}

//show the mgs result
function displayMgs(totalMgs, highMgs, mgs, messageMgs, loading, strep, maximumMgsPerDay) {
 let frequency = getFrequency(); 
 strep = (showStrep == true) ? strep : "";

if (theIndication == "strep"){
 var result = strep;
 result = result.replace("<br><br>Strep A: ", "");
} else if (theIndication == "multi") {
 var result =  totalMgs + highMgs + mgs + frequency + messageMgs + loading + maximumMgsPerDay + strep;
} else if (theIndication == "general"){
 var result =  totalMgs + highMgs + mgs + frequency + messageMgs + loading + maximumMgsPerDay;
}


  
  document.getElementById("ResultMgs").innerHTML = result;
 document.getElementById("error-message").style.display = "none";
 document.querySelector('#ResultMgs').innerHTML = changeDecimalSize(result);
  

 
}



// checks if it is a single dose calculator, and if it is, then it shows the dosing instructions on load
window.onload = function(){ 
   if (singleDrugCalculator == true && radioDosing == true){
   changeLink();
   let theDrug = document.getElementById("drug1").value
   document.getElementById("dosing-section").style.display = "block";
   document.getElementById("instructions").innerHTML = drug_options[theDrug].instructions;


   } else if (singleDrugCalculator == true && radioDosing == false){
   changeLink();
   let theDrug = document.getElementById("drug").value
   document.getElementById("dosing-section").style.display = "block";
   document.getElementById("instructions").innerHTML = drug_options[theDrug].instructions;     


   } else {
   return
   }
}

function copyToClipboard(section) {
    
  //first remove the html tags from the result string.
    var str = section == "Result" ? document.getElementById("Result").innerHTML : document.getElementById("ResultMgs").innerHTML
    str = str.replace(/<br\s*\/?>/gi,' ');
    var div = document.createElement("div");
    div.innerHTML = str;
    str = div.textContent || div.innerText || "";
    
  
  //copy the text.
  const el = document.createElement('textarea');
  el.value = str; 
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false; 
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {                               
    document.getSelection().removeAllRanges();   
    document.getSelection().addRange(selected);  
  }
};
