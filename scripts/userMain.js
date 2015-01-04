var TV = {};

CF.userMain = function() {
    TV.Sony1 = SonyTV('http://192.168.1.124', '/IRCC', '/sony/accessControl'); //in some cases you should try "/sony/IRCC" instead of "/IRCC"; 
};

var pairSony1 = function() {
  CF.getJoin('s1', function(join, value, tokens) {
    TV.Sony1.pairRequest(value); 
  });
};