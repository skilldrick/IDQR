#strict on
#include 'qr_library.js'

var tests = {
  setup: function () {
    this.barcode_strings = [];
    this.barcode_strings.push('978-1-906230-16-6\n');
    this.barcode_strings.push('978-0-7858-2744-3');
    this.barcode_strings.push('978-1-907360-19-0');
    this.addon = '52495';
  },

  'test logger': function () {
    log('Testing logger...');
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
