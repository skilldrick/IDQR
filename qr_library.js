function log(text) {
  $.writeln(text);
}

var QR = function (version) {

  function width() {
    return version * 4 + 25;
  }

  function quietZone(coords) {
    var x = coords[0];
    var y = coords[1];
    return (x < 4 || y < 4 || x >= width() - 4 || y >= width() - 4);
  }

  function get(coords) {
    var x = coords[0];
    var y = coords[1];
    if (x < 0 || y < 0 || x >= width() || y >= width()) {
      throw "Out of bounds";
    }
    if (quietZone(coords)) {
      return 0;
    }
    else {
      return 1;
    }
  }

  return {
    version: version,
    get: get,
    width: width
  };
};

