/* Generated by Opal 0.9.2 */
Opal.modules["js"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$insert', '$<<', '$global', '$extend']);
  return (function($base) {
    var $JS, self = $JS = $module($base, 'JS');

    var def = self.$$proto, $scope = self.$$scope, $a, TMP_1, TMP_2, TMP_3;

    Opal.defn(self, '$delete', function(object, property) {
      var self = this;

      return delete object[property];
    });

    Opal.defn(self, '$global', function() {
      var self = this;

      return Opal.global;
    });

    Opal.defn(self, '$in', function(property, object) {
      var self = this;

      return property in object;
    });

    Opal.defn(self, '$instanceof', function(value, func) {
      var self = this;

      return value instanceof func;
    });

    if ((($a = typeof Function.prototype.bind == 'function') !== nil && (!$a.$$is_boolean || $a == true))) {
      Opal.defn(self, '$new', TMP_1 = function(func) {
        var self = this, $iter = TMP_1.$$p, block = $iter || nil, $splat_index = nil;

        var array_size = arguments.length - 1;
        if(array_size < 0) array_size = 0;
        var args = new Array(array_size);
        for($splat_index = 0; $splat_index < array_size; $splat_index++) {
          args[$splat_index] = arguments[$splat_index + 1];
        }
        TMP_1.$$p = null;
        args.$insert(0, this);
        if (block !== false && block !== nil) {
          args['$<<'](block)};
        return new (func.bind.apply(func, args))();
      })
      } else {
      Opal.defn(self, '$new', TMP_2 = function(func) {
        var self = this, $iter = TMP_2.$$p, block = $iter || nil, f = nil, $splat_index = nil;

        var array_size = arguments.length - 1;
        if(array_size < 0) array_size = 0;
        var args = new Array(array_size);
        for($splat_index = 0; $splat_index < array_size; $splat_index++) {
          args[$splat_index] = arguments[$splat_index + 1];
        }
        TMP_2.$$p = null;
        if (block !== false && block !== nil) {
          args['$<<'](block)};
        f = function(){return func.apply(this, args)};
        f["prototype"]=func["prototype"];
        return new f();
      })
    };

    Opal.defn(self, '$typeof', function(value) {
      var self = this;

      return typeof value;
    });

    Opal.defn(self, '$void', function(expr) {
      var self = this;

      return void expr;
    });

    Opal.defn(self, '$call', TMP_3 = function(func) {
      var self = this, $iter = TMP_3.$$p, block = $iter || nil, g = nil, $splat_index = nil;

      var array_size = arguments.length - 1;
      if(array_size < 0) array_size = 0;
      var args = new Array(array_size);
      for($splat_index = 0; $splat_index < array_size; $splat_index++) {
        args[$splat_index] = arguments[$splat_index + 1];
      }
      TMP_3.$$p = null;
      g = self.$global();
      if (block !== false && block !== nil) {
        args['$<<'](block)};
      return g[func].apply(g, args);
    });

    Opal.alias(self, 'method_missing', 'call');

    self.$extend(self);
  })($scope.base)
};
