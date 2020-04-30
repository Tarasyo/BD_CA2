//function to get diferent div's on clik of the button
$(document).ready(function() {
    // hide the forms when page is ready
    $('#dateFact').hide();
    $('#mathFact').hide();
    $('#triviaFact').hide();
    $('#yearFact').hide();

    $('#buttonDateF').click(function(){ 
        $('#dateFact').show(); 
        $('#mathFact').hide();
        $('#triviaFact').hide();
        $('#yearFact').hide();
    });
    $('#buttonMathF').click(function(){ 
        $('#mathFact').show(); 
        $('#dateFact').hide();
        $('#triviaFact').hide();
        $('#yearFact').hide();
    });
    $('#buttonTriviaF').click(function(){ 
        $('#triviaFact').show();
        $('#dateFact').hide();
        $('#mathFact').hide();
        $('#yearFact').hide(); 
    });
    $('#buttonYearF').click(function(){ 
        $('#yearFact').show(); 
        $('#dateFact').hide();
        $('#mathFact').hide();
        $('#triviaFact').hide();
    });
});
