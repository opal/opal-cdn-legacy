/* Generated by Opal 0.9.3 */
Opal.modules["phantomjs"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  var $a, $b, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$write_proc=', '$tty=']);
  Opal.exit = function(status) { callPhantom(['exit', status]); };
  (($a = [function(str){callPhantom(['stdout', str])}]), $b = $scope.get('STDOUT'), $b['$write_proc='].apply($b, $a), $a[$a.length-1]);
  (($a = [function(str){callPhantom(['stderr', str])}]), $b = $scope.get('STDERR'), $b['$write_proc='].apply($b, $a), $a[$a.length-1]);
  (($a = [true]), $b = $scope.get('STDOUT'), $b['$tty='].apply($b, $a), $a[$a.length-1]);
  return (($a = [true]), $b = $scope.get('STDERR'), $b['$tty='].apply($b, $a), $a[$a.length-1]);
};
