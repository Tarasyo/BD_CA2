
//The API was taken from https://rapidapi.com/divad12/api/numbers-1
//Setting that will be assign with request
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://numbersapi.p.rapidapi.com/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "d17c026280mshb5b8a8233a81e50p147175jsnf95ab01ae921"
	}
}
//function wich will be called each time when need to send request, request send by AJAX
//responce are passt to BuildTable function
function getReq(settings) {
$.ajax(settings).done(function (response) {
    buildTable(response);
    
});
};

//function to retrive data from responce
function buildTable(data) {
    let DateHTML = '';
        DateHTML += '<h3>'+data.text+'</h3>'
    $('#outPut').html(DateHTML);
}


//_______________
//Four functions which initilize new value to the url in settings varible and after call getReq function
//which sends request with new settings
//some of the functions have simple validation
//in dateF()function, I create validation but API worked even if I enterd wrong date  
//_________________

function dateF() {  
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    
    if((month > 12 || month < 1) || (day > 31 || day < 1)){
        
        alert("Please enter valid date");

    }else{
        
    var link = "https://numbersapi.p.rapidapi.com/"+month+"/"+day+"/date?fragment=true&json=true";
    settings.url = link;
    getReq(settings);
    document.getElementById("one").reset();

    }
  }

  
function numberF() {  
    var number = document.getElementById('numberS').value;
   
    var link = "https://numbersapi.p.rapidapi.com/"+number+"/math?fragment=true&json=true";
    settings.url = link;
    getReq(settings);
    document.getElementById("two").reset();

  }

  function triviaF() {  
    var trivia = document.getElementById('trivia').value;
   
    var link =  "https://numbersapi.p.rapidapi.com/"+trivia+"/trivia?fragment=true&notfound=floor&json=true";
    settings.url = link;
    getReq(settings);
    document.getElementById("t").reset();

  }

  function yearF() {  
    var year = document.getElementById('year').value;
    if(year >=1 && year <= 2019){
   
    var link =  "https://numbersapi.p.rapidapi.com/"+year+"/year?fragment=true&json=true";
    settings.url = link;
    getReq(settings);
    document.getElementById("f").reset();
    }else{
        alert("Please enter valid year between 1 and 2019");
    }

  }