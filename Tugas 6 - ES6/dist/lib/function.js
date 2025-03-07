"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sapa = exports.konversi = exports.check = void 0;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
//Tugas 1
var sapa = exports.sapa = function sapa(input) {
  console.log("halo selamat pagi, ".concat(input));
};

//Tugas 2
var konversi = exports.konversi = function konversi(input) {
  var _input = _slicedToArray(input, 3),
    nama = _input[0],
    domisili = _input[1],
    umur = _input[2];
  var tampung = {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
  console.log(tampung);
};

//Tugas 3
var check = exports.check = function check(input) {
  var tampung = input;
  var tampung2 = tampung.toString();
  var tampung3 = tampung2.split(/[:,]/);
  var tampung4 = {};
  for (var index = 0; index < tampung3.length; index += 2) {
    var key = tampung3[index];
    var value = tampung3[index + 1];
    tampung4[key] = value;
  }
  console.log(tampung4);
};