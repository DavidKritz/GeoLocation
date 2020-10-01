	$('#getName').click(function() {
		 
		$.ajax({
			url: "php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
					$('#continent').html(result['data'][0]['continent']);
					$('#countryName').html(result['data'][0]['countryName']);
					$('#capital').html(result['data'][0]['capital']);
					$('#languages').html(result['data'][0]['languages']);
					$('#population').html(result['data'][0]['population']);
					$('#area').html(result['data'][0]['areaInSqKm']);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	});