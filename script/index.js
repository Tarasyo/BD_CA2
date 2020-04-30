







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
function getReq(settings) {
$.ajax(settings).done(function (response) {
    buildTable(response);
    console.log(response);
});
};

function buildTable(data) {
    let DateHTML = '';
        DateHTML += '<h3>'+data.text+'</h3>'
    $('#outPut').html(DateHTML);
}

function dateF() {  
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;  
   
    var link = "https://numbersapi.p.rapidapi.com/"+month+"/"+day+"/date?fragment=true&json=true";
    settings.url = link;
    getReq(settings);
    document.getElementById("one").reset();

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
   
    var link =  "https://numbersapi.p.rapidapi.com/"+year+"/year?fragment=true&json=true";
    settings.url = link;
    getReq(settings);
    document.getElementById("f").reset();

  }