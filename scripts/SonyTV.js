/*
 * Copyright (C) 2014 Vladimir Shabunin
 * License: http://www.gnu.org/licenses/gpl.html GPL version 2 or higher
 */

var SonyTV = function (url) {
    var module = {
        url: '',
        IRCC: {}
    };
    
    module.url = url;
    module.IRCC = {
        'Analog': 'AAAAAgAAAHcAAAANAw==',
        'Audio': 'AAAAAQAAAAEAAAAXAw==',
        'Blue': 'AAAAAgAAAJcAAAAkAw==',
        'ChannelDown': 'AAAAAQAAAAEAAAARAw==',
        'ChannelUp': 'AAAAAQAAAAEAAAAQAw==',
        'Confirm': 'AAAAAQAAAAEAAABlAw==',
        'Display': 'AAAAAQAAAAEAAAA6Aw==',
        'Down': 'AAAAAQAAAAEAAAB1Aw==',
        'EPG': 'AAAAAgAAAKQAAABbAw==',
        'Exit': 'AAAAAQAAAAEAAABjAw==',
        'Forward': 'AAAAAgAAAJcAAAAcAw==',
        'Green': 'AAAAAgAAAJcAAAAmAw==',
        'Home': 'AAAAAQAAAAEAAABgAw==',
        'Input': 'AAAAAQAAAAEAAAAlAw==',
        'Left': 'AAAAAQAAAAEAAAA0Aw==',
        'Mute': 'AAAAAQAAAAEAAAAUAw==',
        'Next': 'AAAAAgAAAJcAAAA9Aw==',
        'Num0': 'AAAAAQAAAAEAAAAJAw==',
        'Num1': 'AAAAAQAAAAEAAAAAAw==',
        'Num2': 'AAAAAQAAAAEAAAABAw==',
        'Num3': 'AAAAAQAAAAEAAAADAw==',
        'Num4': 'AAAAAQAAAAEAAAADAw==',
        'Num5': 'AAAAAQAAAAEAAAAEAw==',
        'Num6': 'AAAAAQAAAAEAAAAFAw==',
        'Num7': 'AAAAAQAAAAEAAAAGAw==',
        'Num8': 'AAAAAQAAAAEAAAAHAw==',
        'Num9': 'AAAAAQAAAAEAAAAIAw==',
        'Options': 'AAAAAgAAAJcAAAA2Aw==',
        'PAP': 'AAAAAgAAAKQAAAB3Aw==',
        'Pause': 'AAAAAgAAAJcAAAAZAw==',
        'Play': 'AAAAAgAAAJcAAAAaAw==',
        'Prev': 'AAAAAgAAAJcAAAA8Aw==',
        'Red': 'AAAAAgAAAJcAAAAlAw==',
        'Return': 'AAAAAgAAAJcAAAAjAw==',
        'Rewind': 'AAAAAgAAAJcAAAAbAw==',
        'Right': 'AAAAAQAAAAEAAAAzAw==',
        'Stop': 'AAAAAgAAAJcAAAAYAw==',
        'SubTitle': 'AAAAAgAAAJcAAAAoAw==',
        'SyncMenu': 'AAAAAgAAABoAAABYAw==',
        'Up': 'AAAAAQAAAAEAAAB0Aw==',
        'VolumeDown': 'AAAAAQAAAAEAAAATAw==',
        'VolumeUp': 'AAAAAQAAAAEAAAASAw==',
        'Wide': 'AAAAAgAAAKQAAAA9Aw==',
        'Yellow': 'AAAAAgAAAJcAAAAnAw==',
        'HDMI1': 'AAAAAgAAABoAAABaAw==',
        'HDMI2': 'AAAAAgAAABoAAABbAw==',
        'HDMI3': 'AAAAAgAAABoAAABcAw==',
        'HDMI4': 'AAAAAgAAABoAAABdAw=='
    }; 
    module.sendCmd = function (CMD) {
        // Send IRCC command to TV
        var cmdBody = '<?xml version="1.0"?>' +
        '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
        '<SOAP-ENV:Body>' + '<m:X_SendIRCC xmlns:m="urn:schemas-sony-com:service:IRCC:1">' +
        '<IRCCCode xmlns:dt="urn:schemas-microsoft-com:datatypes" dt:dt="string">' +
            module.IRCC[CMD] +
        '</IRCCCode>' +
        '</m:X_SendIRCC>' +
        '</SOAP-ENV:Body>' +
        '</SOAP-ENV:Envelope>';
        var cmdHeaders = {
            'Content-Type': 'text/xml; charset=utf-8',
            'SOAPAction': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"'
        };
        CF.request(module.url,
            'POST', cmdHeaders, cmdBody,
            function (status, headers, body) {
                if (status == 200) {
                    //CF.log("Form data sent");
                } else {
                    CF.log('SonyTV(' + module.url + ')error: request returned status ' + status);
                }
            });
    };
    
    return module;
}