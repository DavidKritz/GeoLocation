$('#getLocLL').click(function () {

    var address = $('#address').val()
    $.ajax({
        url: "php/geolocate-rev.php",
        type: 'POST',
        dataType: 'json',
        data: {
            //address: $('#address').val()
            q: address,
            lang: 'en'
        },
        success: function (result) {

            console.log(result);

            $('#txtLong').html(result['geometry']['lng']);
            $('#txtLat').html(result['geometry']['lat']);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(errorThrown);
            console.log(textStatus);
            console.log(jqXHR);
        }
    });
});