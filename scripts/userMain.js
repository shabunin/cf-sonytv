var TV = {};

CF.userMain = function() {
    TV.Sony1 = SonyTV('http://192.168.1.124', '/IRCC', '/sony/accessControl'); //in some cases you should try "/sony/IRCC" instead of "/IRCC"; 
};

var pairSony1 = function() {
  CF.getJoin('s1', function(join, value, tokens) {
    TV.Sony1.pairRequest(value); 
  });
  CF.getJoin(CF.GlobalTokensJoin, function(j, v, tokens, tags) {
    var authCookie = tokens["[authCookie]"]; 
    if (authCookie !== 0) {
      TV.Sony1.authCookie = authCookie;
    }
  });
};

TV.Sony1.saveCookieToken = function() {
  if (TV.Sony1.authCookie !== '') {
    CF.setToken(CF.GlobalTokensJoin, "[authCookie]", TV.Sony1.authCookie);
  }
};