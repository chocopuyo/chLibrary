// Generated by CoffeeScript 1.3.3
var ChLib;

ChLib = (function() {

  function ChLib() {}

  ChLib.ch_get_params = function() {
    var hash, hashes, i, vars, _i, _ref;
    vars = [];
    hash = [];
    hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (i = _i = 1, _ref = hashes.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
      return vars;
    }
  };

  return ChLib;

})();
