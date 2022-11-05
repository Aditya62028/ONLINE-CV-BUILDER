//alert("Loading");
function addNewWEField(){
   //console.log("Adding new field");


   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");


   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField() {
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("aqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");


   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);


}
function addNewSLField(){
let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("slField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");


   let slOb = document.getElementById("sl");
   let slAddButtonOb = document.getElementById("slAddButton");

   slOb.insertBefore(newNode,slAddButtonOb);
}

//generating CV
function generateCV(){
    //console.log("generating CV");

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT2").innerHTML = document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
//Gmail
    document.getElementById("gmailT").innerHTML = document.getElementById("gmailField").value;
//Github
    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;
//Facebook
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
//linkedin
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
//instagram
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    //Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //work experience

    let wes=document.getElementsByClassName("weField");

    let str= "";


    for (let e of wes)  {
      str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //aq

    let aqs=document.getElementsByClassName("aqField");

    let str1= "";

    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

     //SKILL

     let sls=document.getElementsByClassName("slField");

     let str2= "";
 
     for (let e of sls) {
         str2 += `<li> ${e.value} </li>`;
     }
 
     document.getElementById("slT").innerHTML = str2;

     //code for setting image

     let file = document.getElementById("imgField").files[0];

     console.log(file);

     let reader = new FileReader();
     reader.readAsDataURL(file);

     console.log(reader.result);

     //set the image to template

     reader.onloadend = function() {
     document.getElementById("imgTemplate").src = reader.result;
     };

     document.getElementById("CV-form").style.display ="none";
     document.getElementById("CV-template").style.display ="block";

}

//print CV

function printCV()
{
    window.print();
}
