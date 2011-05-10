#strict on
#include 'qr_library.js'

var tests = {
  setup: function () {
    this.qr = QR();
  },

  'test logger': function () {
    log('Testing logger...');
  },

  'test quiet zone is off': function () {
    var qr = this.qr;
    var quietZonePoints = [[0, 0], [3, 1], [0, 3], [3, 3]];
    forEach(quietZonePoints, function (item) {
      assert_equal(qr.get(item[0], item[1]), 0);
    });
  },

  'test position mark borders are on': function () {
    var qr = this.qr;
    var positionPoints = [[4, 4], [10, 4], [4, 10], [10, 10]];
    forEach(positionPoints, function (point) {
      assert_equal(qr.get(point), 1);
    });
  },
}


function assert(msg, success) {
  if (! success) {
    throw msg;
  }
}

function assert_equal(expected, actual) {
  if (expected.constructor.toString().indexOf('Array') !== -1) {
    //ugly hack for comparing arrays - would be better to recursively search
    expected = expected.toString();
    actual = actual.toString();
  }
  var errorMessage = expected.toString() + " expected, but was " + actual.toString();
  assert(errorMessage, expected === actual);
}

function compare_arrays(first, second) {

}

function assert_throws(msg, func) {
  var success = true;
  try {
    func();
    success = false;
  }
  catch (e) {
  }

  assert(msg, success);
}

function forEach(arr, callback) {
  for (var i = 0, len = arr.length; i < len; i++) {
    callback(arr[i]);
  }
}

for (var test in tests) {
  if (/test/.test(test)) {
    try {
      if(tests.setup) {
        tests.setup();
      }
      tests[test]();
      log('.');
    }
    catch (e) {
      log(test + " failed: " + e);
    }
  }
}
