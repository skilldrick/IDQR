function log(text) {
  $.writeln(text);
}

var QR = function () {
  function get(x, y) {
    if (x.length === 2) {
      y = x[1];
      x = x[0];
    }
    return 0;
  }

  return {
    get: get
  };
};

