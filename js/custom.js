$(function() {
var countryOptions;
    $.getJSON('countries.json', function(result) {
        $.each(result, function(i,country) {
            //<option value='countrycode'>countryname</optiom>
            countryOptions+="<option value='"
            +country.code+
            "'>"
            +country.name+
            "</option>";
            });
            $('#country').html(countryOptions);
        });
    });