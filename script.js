function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function Correct() {
    var vek = document.getElementById('age').value;
    var Vekram = document.getElementById('age');
    var Bday = document.getElementById('Bdate').value;
    var Bdayram = document.getElementById('Bdate');
    if (calculate_age(new Date(Bday))>vek || calculate_age(new Date(Bday))<vek){
        Vekram.style.border ="solid 2px";
        Vekram.style.borderColor ="#FF0000";
        Bdayram.style.border ="solid 2px";
        Bdayram.style.borderColor ="#FF0000";
    }
    else{
        Vekram.style.border ="solid 2px";
        Vekram.style.borderColor ="#00FF00";
        Bdayram.style.border ="solid 2px";
        Bdayram.style.borderColor ="#00FF00";
    }
}
function PhoneNum(){
    var cislo = document.getElementById('contactChoice2');
    var cislotel = document.getElementById('phone');
    if(cislo.checked===true){
        cislotel.style.display="ruby-base-container";
    }else{
        cislotel.style.display="none";
    }
}

function ValidateEmail(mail) 
{
    if (mail.includes('@')===true)
  {
    return (true)
  }
    return (false)
}

function CorrectEmail() {
    var mail = document.getElementById('email').value;
    var mailram = document.getElementById('email');
    var a = mail.indexOf("@");
    var b = mail.lastIndexOf(".");
    var zaa= mail.substring(a+1);
    var bodka= zaa.includes('.');

    var zaaa= mail.slice(a+1,b);
    var pred= mail.slice(0, a);
    var zab = mail.slice(b+1);

    if(ValidateEmail(mail) && ((pred.length>3) && ((zab.length>1 && zab.length<4) && zaaa.length>0)) && bodka){
        mailram.style.border ="solid 2px";
        mailram.style.borderColor ="#00FF00";
    }
    else{
        mailram.style.border ="solid 2px";
        mailram.style.borderColor ="#FF0000";
    }
}

function Submit(){
    var c=0;
    var mail = document.getElementById('email').value;
    var a = mail.indexOf("@");
    var b = mail.lastIndexOf(".");
    var zaa= mail.substring(a+1);
    var bodka= zaa.includes('.');

    var zaaa= mail.slice(a+1,b);
    var pred= mail.slice(0, a);
    var zab = mail.slice(b+1);

    var vek = document.getElementById('age').value;
    var Bday = document.getElementById('Bdate').value;

    var submitram=document.getElementById('submit');

    if((ValidateEmail(mail) && ((pred.length>3) && ((zab.length>1 && zab.length<4) && zaaa.length>0)) && bodka) && (calculate_age(new Date(Bday))==vek)){
        c=1;
    }
    if(c==1){
        submitram.style.display="block";
    }
    else{
        submitram.style.display="none";
    }
}

function ShowHide(){
    var te=document.getElementById('otherValue');
    var od=document.getElementById('other');
    if(od.checked === true){
        te.style.display="initial";
    }
    else{
        te.style.display="none";
    }
} 

var objekty = {
        "Bratislava": {"Petr??alka":["1 izbov??","3 izbov??"], "Karlov?? ves":["1 izbov??","2 izbov??","3 izbov??"], "Nivy":["3 izbov??"]},
        "Bansk?? Bystrica": {"Podlavice":["1 izbov??","2 izbov??"], "Radva??":["3 izbov??"], "S??sov??":["2 izbov??","3 izbov??"]},
        "Ko??ice": {"Barca":["2 izbov??"], "D??ung??a":["2 izbov??","3 izbov??"], "Lun??k IX":["4 izbov??"]}
}
window.onload = function() {
    var lokalita_predaj = document.getElementById("Lokalita");
    var cast_predaj = document.getElementById("??as??");
    var izba_predaj = document.getElementById("Po??et_izieb");
    for (var x in objekty) {
        lokalita_predaj.options[lokalita_predaj.options.length] = new Option(x, x);
    }
    lokalita_predaj.onchange = function() {
        Po??et_izieb.length=1;
        ??as??.length=1;
        for (var y in objekty[this.value]) {
            cast_predaj.options[cast_predaj.options.length] = new Option(y, y);
        }
    }
    cast_predaj.onchange = function() {
        Po??et_izieb.length=1;
        var z = objekty[lokalita_predaj.value][this.value];
        for (var i = 0; i < z.length; i++) {
            izba_predaj.options[izba_predaj.options.length] = new Option(z[i], z[i]);
        }
    }
}