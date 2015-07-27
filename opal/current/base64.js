/* Generated by Opal 0.8.0 */
Opal.modules["base64"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  return (function($base) {
    var self = $module($base, 'Base64');

    var def = self.$$proto, $scope = self.$$scope;

    
    var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        lookup  = {};

    for (var i = 0, length = charset.length; i < length; i++) {
      lookup[charset.charAt(i)] = i;
    }

    function from(string) {
      var buffer = [];

      for (var i = 0, length = string.length; i < length; i++) {
        var a, b, c, d;

        a = lookup[string.charAt(i)];
        b = lookup[string.charAt(++i)];

        buffer.push((a << 2) | (b >> 4));

        c = lookup[string.charAt(++i)];

        if (c == 64) {
          break;
        }

        buffer.push(((b & 15) << 4) | (c >> 2));

        d = lookup[string.charAt(++i)];

        if (d == 64) {
          break;
        }

        buffer.push(((c & 3) << 6) | d);
      }

      return buffer;
    }

    function decode(string) {
      var buffer = from(string),
          result = [];

      for (var i = 0, length = buffer.length; i < length; i++) {
        if (buffer[i] < 128) {
          result.push(String.fromCharCode(buffer[i]));
        }
        else if (buffer[i] > 191 && buffer[i] < 224) {
          var a = (buffer[i] & 31) << 6,
              b = buffer[++i] & 63;

          result.push(String.fromCharCode(a | b));
        }
        else {
          var a = (buffer[i] & 15) << 12,
              b = (buffer[++i] & 63) << 6,
              c = buffer[++i] & 63;

          result.push(String.fromCharCode(a | b | c));
        }
      }

      return result.join('');
    }

    function to(string) {
      var buffer = [];

      if (/^[\x00-\x7f]*$/.test(string)) {
        for (var i = 0, length = string.length; i < length; i++) {
          buffer.push(string.charCodeAt(i));
        }
      }
      else {
        for (var i = 0, length = string.length; i < length; i++) {
          var ch = string.charCodeAt(i);

          if (ch < 128) {
            buffer.push(ch);
          }
          else if (ch < 2048) {
            buffer.push((ch >> 6) | 192);
            buffer.push((ch & 63) | 128);
          }
          else {
            buffer.push((ch >> 12) | 224);
            buffer.push(((ch >> 6) & 63) | 128);
            buffer.push((ch & 63) | 128);
          }
        }
      }

      return buffer;
    }

    function encode(string) {
      var buffer = to(string),
          result = [];

      for (var i = 0, length = buffer.length; i < length; i++) {
        var a = buffer[i],
            b = buffer[++i],
            c = 0,
            d = a >> 2,
            e = ((a & 3) << 4) | (b >> 4),
            f = 0,
            g = 0;

        if (isNaN(a)) {
          f = g = 64;
        }
        else {
          c = buffer[++i];
          f = ((b & 15) << 2) | (c >> 6);
          g = isNaN(c) ? 64 : c & 63;
        }

        result.push(charset.charAt(d));
        result.push(charset.charAt(e));
        result.push(charset.charAt(f));
        result.push(charset.charAt(g));
      }

      return result.join('');
    }
  

    Opal.defs(self, '$decode64', function(string) {
      var self = this;

      return decode(string.replace(/\r?\n/g, ''));
    });

    Opal.defs(self, '$encode64', function(string) {
      var self = this;

      return encode(string).replace(/(.{60})/g, "$1\n");
    });

    Opal.defs(self, '$strict_decode64', function(string) {
      var self = this;

      return decode(string);
    });

    Opal.defs(self, '$strict_encode64', function(string) {
      var self = this;

      return encode(string);
    });

    Opal.defs(self, '$urlsafe_decode64', function(string) {
      var self = this;

      return decode(string.replace(/\-/g, '+').replace(/_/g, '/'));
    });

    Opal.defs(self, '$urlsafe_encode64', function(string) {
      var self = this;

      return encode(string).replace(/\+/g, '-').replace(/\//g, '_');
    });
  })(self)
};
