! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("butterchurn", [], e) : "object" == typeof exports ? exports.butterchurn = e() : t.butterchurn = e()
  }(window, (function() {
    return function(t) {
      var e = {};
  
      function i(s) {
        if (e[s]) return e[s].exports;
        var r = e[s] = {
          i: s,
          l: !1,
          exports: {}
        };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports
      }
      return i.m = t, i.c = e, i.d = function(t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: s
        })
      }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t)
          for (var r in t) i.d(s, r, function(e) {
            return t[e]
          }.bind(null, r));
        return s
      }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
          return t.default
        } : function() {
          return t
        };
        return i.d(e, "a", e), e
      }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }, i.p = "", i(i.s = "./src/index.js")
    }({
      "./node_modules/ecma-proposal-math-extensions/reference-implementation/index.js":
        /*!**************************************************************************************!*\
          !*** ./node_modules/ecma-proposal-math-extensions/reference-implementation/index.js ***!
          \**************************************************************************************/
        /*! no static exports found */
        function(t, e, i) {
          "use strict";
          {
            const t = (t, e) => {
              var i = "function" == typeof e,
                s = "function" == typeof e,
                r = "function" == typeof e;
              Object.defineProperty(Math, t, {
                configurable: i,
                enumerable: r,
                writable: s,
                value: e
              })
            };
            t("DEG_PER_RAD", Math.PI / 180), t("RAD_PER_DEG", 180 / Math.PI);
            const e = new Float32Array(1);
            t("scale", (function(t, e, i, s, r) {
              return 0 === arguments.length || Number.isNaN(t) || Number.isNaN(e) || Number.isNaN(i) || Number.isNaN(s) || Number.isNaN(r) ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (r - s) / (i - e) + s
            })), t("fscale", (function(t, i, s, r, a) {
              return e[0] = Math.scale(t, i, s, r, a), e[0]
            })), t("clamp", (function(t, e, i) {
              return Math.min(i, Math.max(e, t))
            })), t("radians", (function(t) {
              return t * Math.DEG_PER_RAD
            })), t("degrees", (function(t) {
              return t * Math.RAD_PER_DEG
            }))
          }
        },
      "./src/audio/audioLevels.js":
        /*!**********************************!*\
          !*** ./src/audio/audioLevels.js ***!
          \**********************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return r
          }));
          var r = function() {
            function t(e) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.audio = e;
              var i = (this.audio.audioContext ? this.audio.audioContext.sampleRate : 44100) / this.audio.fftSize,
                s = Math.clamp(Math.round(20 / i) - 1, 0, this.audio.numSamps - 1),
                r = Math.clamp(Math.round(320 / i) - 1, 0, this.audio.numSamps - 1),
                a = Math.clamp(Math.round(2800 / i) - 1, 0, this.audio.numSamps - 1),
                h = Math.clamp(Math.round(11025 / i) - 1, 0, this.audio.numSamps - 1);
              this.starts = [s, r, a], this.stops = [r, a, h], this.val = new Float32Array(3), this.imm = new Float32Array(3), this.att = new Float32Array(3), this.avg = new Float32Array(3), this.longAvg = new Float32Array(3), this.att.fill(1), this.avg.fill(1), this.longAvg.fill(1)
            }
            var e, i, r;
            return e = t, r = [{
              key: "isFiniteNumber",
              value: function(t) {
                return Number.isFinite(t) && !Number.isNaN(t)
              }
            }, {
              key: "adjustRateToFPS",
              value: function(t, e, i) {
                return Math.pow(t, e / i)
              }
            }], (i = [{
              key: "updateAudioLevels",
              value: function(e, i) {
                if (this.audio.freqArray.length > 0) {
                  var s = e;
                  !t.isFiniteNumber(s) || s < 15 ? s = 15 : s > 144 && (s = 144), this.imm.fill(0);
                  for (var r = 0; r < 3; r++)
                    for (var a = this.starts[r]; a < this.stops[r]; a++) this.imm[r] += this.audio.freqArray[a];
                  for (var h = 0; h < 3; h++) {
                    var o = void 0;
                    o = this.imm[h] > this.avg[h] ? .2 : .5, o = t.adjustRateToFPS(o, 30, s), this.avg[h] = this.avg[h] * o + this.imm[h] * (1 - o), o = i < 50 ? .9 : .992, o = t.adjustRateToFPS(o, 30, s), this.longAvg[h] = this.longAvg[h] * o + this.imm[h] * (1 - o), this.longAvg[h] < .001 ? (this.val[h] = 1, this.att[h] = 1) : (this.val[h] = this.imm[h] / this.longAvg[h], this.att[h] = this.avg[h] / this.longAvg[h])
                  }
                }
              }
            }, {
              key: "bass",
              get: function() {
                return this.val[0]
              }
            }, {
              key: "bass_att",
              get: function() {
                return this.att[0]
              }
            }, {
              key: "mid",
              get: function() {
                return this.val[1]
              }
            }, {
              key: "mid_att",
              get: function() {
                return this.att[1]
              }
            }, {
              key: "treb",
              get: function() {
                return this.val[2]
              }
            }, {
              key: "treb_att",
              get: function() {
                return this.att[2]
              }
            }]) && s(e.prototype, i), r && s(e, r), t
          }()
        },
      "./src/audio/audioProcessor.js":
        /*!*************************************!*\
          !*** ./src/audio/audioProcessor.js ***!
          \*************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ./fft */ "./src/audio/fft.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.numSamps = 512, this.fftSize = 2 * this.numSamps, this.fft = new s.default(this.fftSize, 512, !0), e && (this.audioContext = e, this.audible = e.createDelay(), this.analyser = e.createAnalyser(), this.analyser.smoothingTimeConstant = 0, this.analyser.fftSize = this.fftSize, this.audible.connect(this.analyser), this.analyserL = e.createAnalyser(), this.analyserL.smoothingTimeConstant = 0, this.analyserL.fftSize = this.fftSize, this.analyserR = e.createAnalyser(), this.analyserR.smoothingTimeConstant = 0, this.analyserR.fftSize = this.fftSize, this.splitter = e.createChannelSplitter(2), this.audible.connect(this.splitter), this.splitter.connect(this.analyserL, 0), this.splitter.connect(this.analyserR, 1)), this.timeByteArray = new Uint8Array(this.fftSize), this.timeByteArrayL = new Uint8Array(this.fftSize), this.timeByteArrayR = new Uint8Array(this.fftSize), this.timeArray = new Int8Array(this.fftSize), this.timeByteArraySignedL = new Int8Array(this.fftSize), this.timeByteArraySignedR = new Int8Array(this.fftSize), this.tempTimeArrayL = new Int8Array(this.fftSize), this.tempTimeArrayR = new Int8Array(this.fftSize), this.timeArrayL = new Int8Array(this.numSamps), this.timeArrayR = new Int8Array(this.numSamps)
            }
            var e, i, a;
            return e = t, (i = [{
              key: "sampleAudio",
              value: function() {
                this.analyser.getByteTimeDomainData(this.timeByteArray), this.analyserL.getByteTimeDomainData(this.timeByteArrayL), this.analyserR.getByteTimeDomainData(this.timeByteArrayR), this.processAudio()
              }
            }, {
              key: "updateAudio",
              value: function(t, e, i) {
                this.timeByteArray.set(t), this.timeByteArrayL.set(e), this.timeByteArrayR.set(i), this.processAudio()
              }
            }, {
              key: "processAudio",
              value: function() {
                for (var t = 0, e = 0, i = 0; t < this.fftSize; t++) this.timeArray[t] = this.timeByteArray[t] - 128, this.timeByteArraySignedL[t] = this.timeByteArrayL[t] - 128, this.timeByteArraySignedR[t] = this.timeByteArrayR[t] - 128, this.tempTimeArrayL[t] = .5 * (this.timeByteArraySignedL[t] + this.timeByteArraySignedL[i]), this.tempTimeArrayR[t] = .5 * (this.timeByteArraySignedR[t] + this.timeByteArraySignedR[i]), t % 2 == 0 && (this.timeArrayL[e] = this.tempTimeArrayL[t], this.timeArrayR[e] = this.tempTimeArrayR[t], e += 1), i = t;
                this.freqArray = this.fft.timeToFrequencyDomain(this.timeArray), this.freqArrayL = this.fft.timeToFrequencyDomain(this.timeByteArraySignedL), this.freqArrayR = this.fft.timeToFrequencyDomain(this.timeByteArraySignedR)
              }
            }, {
              key: "connectAudio",
              value: function(t) {
                t.connect(this.audible)
              }
            }, {
              key: "disconnectAudio",
              value: function(t) {
                t.disconnect(this.audible)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/audio/fft.js":
        /*!**************************!*\
          !*** ./src/audio/fft.js ***!
          \**************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return r
          }));
          var r = function() {
            function t(e, i) {
              var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.samplesIn = e, this.samplesOut = i, this.equalize = s, this.NFREQ = 2 * i, this.equalize && this.initEqualizeTable(), this.initBitRevTable(), this.initCosSinTable()
            }
            var e, i, r;
            return e = t, (i = [{
              key: "initEqualizeTable",
              value: function() {
                this.equalizeArr = new Float32Array(this.samplesOut);
                for (var t = 1 / this.samplesOut, e = 0; e < this.samplesOut; e++) this.equalizeArr[e] = -.02 * Math.log((this.samplesOut - e) * t)
              }
            }, {
              key: "initBitRevTable",
              value: function() {
                this.bitrevtable = new Uint16Array(this.NFREQ);
                for (var t = 0; t < this.NFREQ; t++) this.bitrevtable[t] = t;
                for (var e = 0, i = 0; i < this.NFREQ; i++) {
                  if (e > i) {
                    var s = this.bitrevtable[i];
                    this.bitrevtable[i] = this.bitrevtable[e], this.bitrevtable[e] = s
                  }
                  for (var r = this.NFREQ >> 1; r >= 1 && e >= r;) e -= r, r >>= 1;
                  e += r
                }
              }
            }, {
              key: "initCosSinTable",
              value: function() {
                for (var t = 2, e = 0; t <= this.NFREQ;) e += 1, t <<= 1;
                this.cossintable = [new Float32Array(e), new Float32Array(e)], t = 2;
                for (var i = 0; t <= this.NFREQ;) {
                  var s = -2 * Math.PI / t;
                  this.cossintable[0][i] = Math.cos(s), this.cossintable[1][i] = Math.sin(s), i += 1, t <<= 1
                }
              }
            }, {
              key: "timeToFrequencyDomain",
              value: function(t) {
                for (var e = new Float32Array(this.NFREQ), i = new Float32Array(this.NFREQ), s = 0; s < this.NFREQ; s++) {
                  var r = this.bitrevtable[s];
                  r < this.samplesIn ? e[s] = t[r] : e[s] = 0, i[s] = 0
                }
                for (var a = 2, h = 0; a <= this.NFREQ;) {
                  for (var o = this.cossintable[0][h], n = this.cossintable[1][h], l = 1, u = 0, m = a >> 1, c = 0; c < m; c++) {
                    for (var g = c; g < this.NFREQ; g += a) {
                      var f = g + m,
                        A = l * e[f] - u * i[f],
                        d = l * i[f] + u * e[f];
                      e[f] = e[g] - A, i[f] = i[g] - d, e[g] += A, i[g] += d
                    }
                    var v = l;
                    l = v * o - u * n, u = u * o + v * n
                  }
                  a <<= 1, h += 1
                }
                var p = new Float32Array(this.samplesOut);
                if (this.equalize)
                  for (var _ = 0; _ < this.samplesOut; _++) p[_] = this.equalizeArr[_] * Math.sqrt(e[_] * e[_] + i[_] * i[_]);
                else
                  for (var x = 0; x < this.samplesOut; x++) p[x] = Math.sqrt(e[x] * e[x] + i[x] * i[x]);
                return p
              }
            }]) && s(e.prototype, i), r && s(e, r), t
          }()
        },
      "./src/blankPreset.js":
        /*!****************************!*\
          !*** ./src/blankPreset.js ***!
          \****************************/
        /*! no static exports found */
        function(t, e, i) {
          var s;
          void 0 === (s = function() {
            return {
              baseVals: {
                gammaadj: 1.25,
                wave_g: .5,
                mv_x: 12,
                warpscale: 1,
                brighten: 0,
                mv_y: 9,
                wave_scale: 1,
                echo_alpha: 0,
                additivewave: 0,
                sx: 1,
                sy: 1,
                warp: .01,
                red_blue: 0,
                wave_mode: 0,
                wave_brighten: 0,
                wrap: 0,
                zoomexp: 1,
                fshader: 0,
                wave_r: .5,
                echo_zoom: 1,
                wave_smoothing: .75,
                warpanimspeed: 1,
                wave_dots: 0,
                wave_x: .5,
                wave_y: .5,
                zoom: 1,
                solarize: 0,
                modwavealphabyvolume: 0,
                dx: 0,
                cx: .5,
                dy: 0,
                darken_center: 0,
                cy: .5,
                invert: 0,
                bmotionvectorson: 0,
                rot: 0,
                modwavealphaend: .95,
                wave_mystery: -.2,
                decay: .9,
                wave_a: 1,
                wave_b: .5,
                rating: 5,
                modwavealphastart: .75,
                darken: 0,
                echo_orient: 0,
                ib_r: .5,
                ib_g: .5,
                ib_b: .5,
                ib_a: 0,
                ib_size: 0,
                ob_r: .5,
                ob_g: .5,
                ob_b: .5,
                ob_a: 0,
                ob_size: 0,
                mv_dx: 0,
                mv_dy: 0,
                mv_a: 0,
                mv_r: .5,
                mv_g: .5,
                mv_b: .5,
                mv_l: 0
              },
              init_eqs: function() {
                return {}
              },
              frame_eqs: function(t) {
                return t.rkeys = ["warp"], t.zoom = 1.01 + .02 * t.treb_att, t.warp = .15 + .25 * t.bass_att, t
              },
              pixel_eqs: function(t) {
                return t.warp = t.warp + .15 * t.rad, t
              },
              waves: [{
                baseVals: {
                  a: 1,
                  enabled: 0,
                  b: 1,
                  g: 1,
                  scaling: 1,
                  samples: 512,
                  additive: 0,
                  usedots: 0,
                  spectrum: 0,
                  r: 1,
                  smoothing: .5,
                  thick: 0,
                  sep: 0
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                },
                point_eqs: ""
              }, {
                baseVals: {
                  a: 1,
                  enabled: 0,
                  b: 1,
                  g: 1,
                  scaling: 1,
                  samples: 512,
                  additive: 0,
                  usedots: 0,
                  spectrum: 0,
                  r: 1,
                  smoothing: .5,
                  thick: 0,
                  sep: 0
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                },
                point_eqs: ""
              }, {
                baseVals: {
                  a: 1,
                  enabled: 0,
                  b: 1,
                  g: 1,
                  scaling: 1,
                  samples: 512,
                  additive: 0,
                  usedots: 0,
                  spectrum: 0,
                  r: 1,
                  smoothing: .5,
                  thick: 0,
                  sep: 0
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                },
                point_eqs: ""
              }, {
                baseVals: {
                  a: 1,
                  enabled: 0,
                  b: 1,
                  g: 1,
                  scaling: 1,
                  samples: 512,
                  additive: 0,
                  usedots: 0,
                  spectrum: 0,
                  r: 1,
                  smoothing: .5,
                  thick: 0,
                  sep: 0
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                },
                point_eqs: ""
              }],
              shapes: [{
                baseVals: {
                  r2: 0,
                  a: 1,
                  enabled: 0,
                  b: 0,
                  tex_ang: 0,
                  thickoutline: 0,
                  g: 0,
                  textured: 0,
                  g2: 1,
                  tex_zoom: 1,
                  additive: 0,
                  border_a: .1,
                  border_b: 1,
                  b2: 0,
                  a2: 0,
                  r: 1,
                  border_g: 1,
                  rad: .1,
                  x: .5,
                  y: .5,
                  ang: 0,
                  sides: 4,
                  border_r: 1
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                }
              }, {
                baseVals: {
                  r2: 0,
                  a: 1,
                  enabled: 0,
                  b: 0,
                  tex_ang: 0,
                  thickoutline: 0,
                  g: 0,
                  textured: 0,
                  g2: 1,
                  tex_zoom: 1,
                  additive: 0,
                  border_a: .1,
                  border_b: 1,
                  b2: 0,
                  a2: 0,
                  r: 1,
                  border_g: 1,
                  rad: .1,
                  x: .5,
                  y: .5,
                  ang: 0,
                  sides: 4,
                  border_r: 1
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                }
              }, {
                baseVals: {
                  r2: 0,
                  a: 1,
                  enabled: 0,
                  b: 0,
                  tex_ang: 0,
                  thickoutline: 0,
                  g: 0,
                  textured: 0,
                  g2: 1,
                  tex_zoom: 1,
                  additive: 0,
                  border_a: .1,
                  border_b: 1,
                  b2: 0,
                  a2: 0,
                  r: 1,
                  border_g: 1,
                  rad: .1,
                  x: .5,
                  y: .5,
                  ang: 0,
                  sides: 4,
                  border_r: 1
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                }
              }, {
                baseVals: {
                  r2: 0,
                  a: 1,
                  enabled: 0,
                  b: 0,
                  tex_ang: 0,
                  thickoutline: 0,
                  g: 0,
                  textured: 0,
                  g2: 1,
                  tex_zoom: 1,
                  additive: 0,
                  border_a: .1,
                  border_b: 1,
                  b2: 0,
                  a2: 0,
                  r: 1,
                  border_g: 1,
                  rad: .1,
                  x: .5,
                  y: .5,
                  ang: 0,
                  sides: 4,
                  border_r: 1
                },
                init_eqs: function(t) {
                  return t.rkeys = [], t
                },
                frame_eqs: function(t) {
                  return t
                }
              }],
              warp: "shader_body {\nret = texture2D(sampler_main, uv).rgb;\nret -= 0.004;\n}\n",
              comp: "shader_body {\nret = texture2D(sampler_main, uv).rgb;\nret *= hue_shader;\n}\n"
            }
          }.apply(e, [])) || (t.exports = s)
        },
      "./src/equations/presetEquationRunner.js":
        /*!***********************************************!*\
          !*** ./src/equations/presetEquationRunner.js ***!
          \***********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../utils */ "./src/utils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i, r) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.preset = e, this.texsizeX = r.texsizeX, this.texsizeY = r.texsizeY, this.mesh_width = r.mesh_width, this.mesh_height = r.mesh_height, this.aspectx = r.aspectx, this.aspecty = r.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.qs = s.default.range(1, 33).map((function(t) {
                return "q".concat(t)
              })), this.ts = s.default.range(1, 9).map((function(t) {
                return "t".concat(t)
              })), this.regs = s.default.range(100).map((function(t) {
                return t < 10 ? "reg0".concat(t) : "reg".concat(t)
              })), this.initializeEquations(i)
            }
            var e, i, a;
            return e = t, (i = [{
              key: "initializeEquations",
              value: function(t) {
                this.runVertEQs = "" !== this.preset.pixel_eqs, this.mdVSQInit = null, this.mdVSRegs = null, this.mdVSFrame = null, this.mdVSUserKeys = null, this.mdVSFrameMap = null, this.mdVSShapes = null, this.mdVSUserKeysShapes = null, this.mdVSFrameMapShapes = null, this.mdVSWaves = null, this.mdVSUserKeysWaves = null, this.mdVSFrameMapWaves = null, this.mdVSQAfterFrame = null, this.gmegabuf = new Array(1048576).fill(0);
                var e = {
                  frame: t.frame,
                  time: t.time,
                  fps: t.fps,
                  bass: t.bass,
                  bass_att: t.bass_att,
                  mid: t.mid,
                  mid_att: t.mid_att,
                  treb: t.treb,
                  treb_att: t.treb_att,
                  meshx: this.mesh_width,
                  meshy: this.mesh_height,
                  aspectx: this.invAspectx,
                  aspecty: this.invAspecty,
                  pixelsx: this.texsizeX,
                  pixelsy: this.texsizeY,
                  gmegabuf: this.gmegabuf
                };
                this.mdVS = Object.assign({}, this.preset.baseVals, e), this.mdVS.megabuf = new Array(1048576).fill(0), this.mdVS.rand_start = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]), this.mdVS.rand_preset = new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()]);
                var i = this.qs.concat(this.regs, Object.keys(this.mdVS)),
                  r = this.preset.init_eqs(s.default.cloneVars(this.mdVS));
                this.mdVSQInit = s.default.pick(r, this.qs), this.mdVSRegs = s.default.pick(r, this.regs);
                var a = s.default.pick(r, Object.keys(s.default.omit(r, i)));
                if (a.megabuf = r.megabuf, a.gmegabuf = r.gmegabuf, this.mdVSFrame = this.preset.frame_eqs(Object.assign({}, this.mdVS, this.mdVSQInit, this.mdVSRegs, a)), this.mdVSUserKeys = Object.keys(s.default.omit(this.mdVSFrame, i)), this.mdVSFrameMap = s.default.pick(this.mdVSFrame, this.mdVSUserKeys), this.mdVSQAfterFrame = s.default.pick(this.mdVSFrame, this.qs), this.mdVSRegs = s.default.pick(this.mdVSFrame, this.regs), this.mdVSWaves = [], this.mdVSTWaveInits = [], this.mdVSUserKeysWaves = [], this.mdVSFrameMapWaves = [], this.preset.waves && this.preset.waves.length > 0)
                  for (var h = 0; h < this.preset.waves.length; h++) {
                    var o = this.preset.waves[h],
                      n = o.baseVals;
                    if (0 !== n.enabled) {
                      var l = Object.assign({}, n, e),
                        u = this.qs.concat(this.ts, this.regs, Object.keys(l));
                      Object.assign(l, this.mdVSQAfterFrame, this.mdVSRegs), l.megabuf = new Array(1048576).fill(0), o.init_eqs && (l = o.init_eqs(l), this.mdVSRegs = s.default.pick(l, this.regs), Object.assign(l, n)), this.mdVSWaves.push(l), this.mdVSTWaveInits.push(s.default.pick(l, this.ts)), this.mdVSUserKeysWaves.push(Object.keys(s.default.omit(l, u))), this.mdVSFrameMapWaves.push(s.default.pick(l, this.mdVSUserKeysWaves[h]))
                    } else this.mdVSWaves.push({}), this.mdVSTWaveInits.push({}), this.mdVSUserKeysWaves.push([]), this.mdVSFrameMapWaves.push({})
                  }
                if (this.mdVSShapes = [], this.mdVSTShapeInits = [], this.mdVSUserKeysShapes = [], this.mdVSFrameMapShapes = [], this.preset.shapes && this.preset.shapes.length > 0)
                  for (var m = 0; m < this.preset.shapes.length; m++) {
                    var c = this.preset.shapes[m],
                      g = c.baseVals;
                    if (0 !== g.enabled) {
                      var f = Object.assign({}, g, e),
                        A = this.qs.concat(this.ts, this.regs, Object.keys(f));
                      Object.assign(f, this.mdVSQAfterFrame, this.mdVSRegs), f.megabuf = new Array(1048576).fill(0), c.init_eqs && (f = c.init_eqs(f), this.mdVSRegs = s.default.pick(f, this.regs), Object.assign(f, g)), this.mdVSShapes.push(f), this.mdVSTShapeInits.push(s.default.pick(f, this.ts)), this.mdVSUserKeysShapes.push(Object.keys(s.default.omit(f, A))), this.mdVSFrameMapShapes.push(s.default.pick(f, this.mdVSUserKeysShapes[m]))
                    } else this.mdVSShapes.push({}), this.mdVSTShapeInits.push({}), this.mdVSUserKeysShapes.push([]), this.mdVSFrameMapShapes.push({})
                  }
              }
            }, {
              key: "updatePreset",
              value: function(t, e) {
                this.preset = t, this.initializeEquations(e)
              }
            }, {
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.mesh_width = t.mesh_width, this.mesh_height = t.mesh_height, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty
              }
            }, {
              key: "runFrameEquations",
              value: function(t) {
                this.mdVSFrame = Object.assign({}, this.mdVS, this.mdVSQInit, this.mdVSFrameMap, t), this.mdVSFrame = this.preset.frame_eqs(this.mdVSFrame), this.mdVSFrameMap = s.default.pick(this.mdVSFrame, this.mdVSUserKeys), this.mdVSQAfterFrame = s.default.pick(this.mdVSFrame, this.qs)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/image/imageTextures.js":
        /*!************************************!*\
          !*** ./src/image/imageTextures.js ***!
          \************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return r
          }));
          var r = function() {
            function t(e) {
              var i = this;
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.anisoExt = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.samplers = {}, this.clouds2Image = new Image, this.clouds2Image.onload = function() {
                i.samplers.clouds2 = i.gl.createTexture(), i.bindTexture(i.samplers.clouds2, i.clouds2Image, 128, 128)
              }, this.clouds2Image.src = "data:image/jpeg;base64,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", this.emptyImage = new Image, this.emptyImage.onload = function() {
                i.samplers.empty = i.gl.createTexture(), i.bindTexture(i.samplers.empty, i.emptyImage, 1, 1)
              }, this.emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
            }
            var e, i, r;
            return e = t, (i = [{
              key: "bindTexture",
              value: function(t, e, i, s) {
                if (this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, i, s, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.anisoExt) {
                  var r = this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  this.gl.texParameterf(this.gl.TEXTURE_2D, this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, r)
                }
              }
            }, {
              key: "loadExtraImages",
              value: function(t) {
                var e = this;
                Object.keys(t).forEach((function(i) {
                  var s = t[i],
                    r = s.data,
                    a = s.width,
                    h = s.height;
                  if (!e.samplers[i]) {
                    var o = new Image;
                    o.onload = function() {
                      e.samplers[i] = e.gl.createTexture(), e.bindTexture(e.samplers[i], o, a, h)
                    }, o.src = r
                  }
                }))
              }
            }, {
              key: "getTexture",
              value: function(t) {
                var e = this.samplers[t];
                return e || this.samplers.clouds2
              }
            }]) && s(e.prototype, i), r && s(e, r), t
          }()
        },
      "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          i( /*! ecma-proposal-math-extensions */ "./node_modules/ecma-proposal-math-extensions/reference-implementation/index.js"), i( /*! ./presetBase */ "./src/presetBase.js");
          var s = i( /*! ./visualizer */ "./src/visualizer.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t() {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t)
            }
            var e, i, a;
            return e = t, a = [{
              key: "createVisualizer",
              value: function(t, e, i) {
                return new s.default(t, e, i)
              }
            }], (i = null) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/noise/noise.js":
        /*!****************************!*\
          !*** ./src/noise/noise.js ***!
          \****************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return r
          }));
          var r = function() {
            function t(e) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.anisoExt = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.noiseTexLQ = this.gl.createTexture(), this.noiseTexLQLite = this.gl.createTexture(), this.noiseTexMQ = this.gl.createTexture(), this.noiseTexHQ = this.gl.createTexture(), this.noiseTexVolLQ = this.gl.createTexture(), this.noiseTexVolHQ = this.gl.createTexture(), this.nTexArrLQ = t.createNoiseTex(256, 1), this.nTexArrLQLite = t.createNoiseTex(32, 1), this.nTexArrMQ = t.createNoiseTex(256, 4), this.nTexArrHQ = t.createNoiseTex(256, 8), this.nTexArrVolLQ = t.createNoiseVolTex(32, 1), this.nTexArrVolHQ = t.createNoiseVolTex(32, 4), this.bindTexture(this.noiseTexLQ, this.nTexArrLQ, 256, 256), this.bindTexture(this.noiseTexLQLite, this.nTexArrLQLite, 32, 32), this.bindTexture(this.noiseTexMQ, this.nTexArrMQ, 256, 256), this.bindTexture(this.noiseTexHQ, this.nTexArrHQ, 256, 256), this.bindTexture3D(this.noiseTexVolLQ, this.nTexArrVolLQ, 32, 32, 32), this.bindTexture3D(this.noiseTexVolHQ, this.nTexArrVolHQ, 32, 32, 32), this.noiseTexPointLQ = this.gl.createSampler(), e.samplerParameteri(this.noiseTexPointLQ, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST), e.samplerParameteri(this.noiseTexPointLQ, e.TEXTURE_MAG_FILTER, e.NEAREST), e.samplerParameteri(this.noiseTexPointLQ, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.noiseTexPointLQ, e.TEXTURE_WRAP_T, e.REPEAT)
            }
            var e, i, r;
            return e = t, r = [{
              key: "fCubicInterpolate",
              value: function(t, e, i, s, r) {
                var a = r * r,
                  h = s - i - t + e;
                return h * (r * a) + (t - e - h) * a + (i - t) * r + e
              }
            }, {
              key: "dwCubicInterpolate",
              value: function(e, i, s, r, a) {
                for (var h = [], o = 0; o < 4; o++) {
                  var n = t.fCubicInterpolate(e[o] / 255, i[o] / 255, s[o] / 255, r[o] / 255, a);
                  n = Math.clamp(n, 0, 1), h[o] = 255 * n
                }
                return h
              }
            }, {
              key: "createNoiseVolTex",
              value: function(e, i) {
                for (var s = e * e * e, r = new Uint8Array(4 * s), a = i > 1 ? 216 : 256, h = .5 * a, o = 0; o < s; o++) r[4 * o + 0] = Math.floor(Math.random() * a + h), r[4 * o + 1] = Math.floor(Math.random() * a + h), r[4 * o + 2] = Math.floor(Math.random() * a + h), r[4 * o + 3] = Math.floor(Math.random() * a + h);
                var n = e * e,
                  l = e;
                if (i > 1) {
                  for (var u = 0; u < e; u += i)
                    for (var m = 0; m < e; m += i)
                      for (var c = 0; c < e; c++)
                        if (c % i != 0) {
                          for (var g = Math.floor(c / i) * i + e, f = u * n + m * l, A = [], d = [], v = [], p = [], _ = 0; _ < 4; _++) A[_] = r[4 * f + (g - i) % e * 4 + _], d[_] = r[4 * f + g % e * 4 + _], v[_] = r[4 * f + (g + i) % e * 4 + _], p[_] = r[4 * f + (g + 2 * i) % e * 4 + _];
                          for (var x = c % i / i, b = t.dwCubicInterpolate(A, d, v, p, x), T = 0; T < 4; T++) r[u * n * 4 + m * l * 4 + (4 * c + T)] = b[T]
                        } for (var E = 0; E < e; E += i)
                    for (var P = 0; P < e; P++)
                      for (var R = 0; R < e; R++)
                        if (R % i != 0) {
                          for (var L = Math.floor(R / i) * i + e, S = E * n, y = [], w = [], U = [], M = [], F = 0; F < 4; F++) {
                            var q = 4 * P + 4 * S + F;
                            y[F] = r[(L - i) % e * l * 4 + q], w[F] = r[L % e * l * 4 + q], U[F] = r[(L + i) % e * l * 4 + q], M[F] = r[(L + 2 * i) % e * l * 4 + q]
                          }
                          for (var z = R % i / i, B = t.dwCubicInterpolate(y, w, U, M, z), V = 0; V < 4; V++) r[R * l * 4 + (4 * P + 4 * S + V)] = B[V]
                        } for (var C = 0; C < e; C++)
                    for (var D = 0; D < e; D++)
                      for (var I = 0; I < e; I++)
                        if (I % i != 0) {
                          for (var X = D * l, k = Math.floor(I / i) * i + e, N = [], O = [], W = [], Q = [], j = 0; j < 4; j++) {
                            var Y = 4 * C + 4 * X + j;
                            N[j] = r[(k - i) % e * n * 4 + Y], O[j] = r[k % e * n * 4 + Y], W[j] = r[(k + i) % e * n * 4 + Y], Q[j] = r[(k + 2 * i) % e * n * 4 + Y]
                          }
                          for (var G = D % i / i, H = t.dwCubicInterpolate(N, O, W, Q, G), K = 0; K < 4; K++) r[I * n * 4 + (4 * C + 4 * X + K)] = H[K]
                        }
                }
                return r
              }
            }, {
              key: "createNoiseTex",
              value: function(e, i) {
                for (var s = e * e, r = new Uint8Array(4 * s), a = i > 1 ? 216 : 256, h = .5 * a, o = 0; o < s; o++) r[4 * o + 0] = Math.floor(Math.random() * a + h), r[4 * o + 1] = Math.floor(Math.random() * a + h), r[4 * o + 2] = Math.floor(Math.random() * a + h), r[4 * o + 3] = Math.floor(Math.random() * a + h);
                if (i > 1) {
                  for (var n = 0; n < e; n += i)
                    for (var l = 0; l < e; l++)
                      if (l % i != 0) {
                        for (var u = Math.floor(l / i) * i + e, m = n * e, c = [], g = [], f = [], A = [], d = 0; d < 4; d++) c[d] = r[4 * m + (u - i) % e * 4 + d], g[d] = r[4 * m + u % e * 4 + d], f[d] = r[4 * m + (u + i) % e * 4 + d], A[d] = r[4 * m + (u + 2 * i) % e * 4 + d];
                        for (var v = l % i / i, p = t.dwCubicInterpolate(c, g, f, A, v), _ = 0; _ < 4; _++) r[n * e * 4 + 4 * l + _] = p[_]
                      } for (var x = 0; x < e; x++)
                    for (var b = 0; b < e; b++)
                      if (b % i != 0) {
                        for (var T = Math.floor(b / i) * i + e, E = [], P = [], R = [], L = [], S = 0; S < 4; S++) E[S] = r[(T - i) % e * e * 4 + 4 * x + S], P[S] = r[T % e * e * 4 + 4 * x + S], R[S] = r[(T + i) % e * e * 4 + 4 * x + S], L[S] = r[(T + 2 * i) % e * e * 4 + 4 * x + S];
                        for (var y = b % i / i, w = t.dwCubicInterpolate(E, P, R, L, y), U = 0; U < 4; U++) r[b * e * 4 + 4 * x + U] = w[U]
                      }
                }
                return r
              }
            }], (i = [{
              key: "bindTexture",
              value: function(t, e, i, s) {
                if (this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, i, s, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.anisoExt) {
                  var r = this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  this.gl.texParameterf(this.gl.TEXTURE_2D, this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, r)
                }
              }
            }, {
              key: "bindTexture3D",
              value: function(t, e, i, s, r) {
                if (this.gl.bindTexture(this.gl.TEXTURE_3D, t), this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1), this.gl.texImage3D(this.gl.TEXTURE_3D, 0, this.gl.RGBA, i, s, r, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e), this.gl.generateMipmap(this.gl.TEXTURE_3D), this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_WRAP_R, this.gl.REPEAT), this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR), this.gl.texParameteri(this.gl.TEXTURE_3D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.anisoExt) {
                  var a = this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  this.gl.texParameterf(this.gl.TEXTURE_3D, this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, a)
                }
              }
            }]) && s(e.prototype, i), r && s(e, r), t
          }()
        },
      "./src/presetBase.js":
        /*!***************************!*\
          !*** ./src/presetBase.js ***!
          \***************************/
        /*! no static exports found */
        function(t, e) {
          var i = 1e-5;
          window.sqr = function(t) {
            return t * t
          }, window.sqrt = function(t) {
            return Math.sqrt(Math.abs(t))
          }, window.log10 = function(t) {
            return Math.log(t) * Math.LOG10E
          }, window.sign = function(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
          }, window.rand = function(t) {
            var e = Math.floor(t);
            return e < 1 ? Math.random() : Math.random() * e
          }, window.randint = function(t) {
            return Math.floor(rand(t))
          }, window.bnot = function(t) {
            return Math.abs(t) < i ? 1 : 0
          }, window.pow = function(t, e) {
            var i, s = Math.pow(t, e);
            return i = s, !isFinite(i) || isNaN(i) ? 0 : s
          }, window.div = function(t, e) {
            return 0 === e ? 0 : t / e
          }, window.mod = function(t, e) {
            return 0 === e ? 0 : Math.floor(t) % Math.floor(e)
          }, window.bitor = function(t, e) {
            return Math.floor(t) | Math.floor(e)
          }, window.bitand = function(t, e) {
            return Math.floor(t) & Math.floor(e)
          }, window.sigmoid = function(t, e) {
            var s = 1 + Math.exp(-t * e);
            return Math.abs(s) > i ? 1 / s : 0
          }, window.bor = function(t, e) {
            return Math.abs(t) > i || Math.abs(e) > i ? 1 : 0
          }, window.band = function(t, e) {
            return Math.abs(t) > i && Math.abs(e) > i ? 1 : 0
          }, window.equal = function(t, e) {
            return Math.abs(t - e) < i ? 1 : 0
          }, window.above = function(t, e) {
            return t > e ? 1 : 0
          }, window.below = function(t, e) {
            return t < e ? 1 : 0
          }, window.ifcond = function(t, e, s) {
            return Math.abs(t) > i ? e : s
          }, window.memcpy = function(t, e, i, s) {
            var r = e,
              a = i,
              h = s;
            return a < 0 && (h += a, r -= a, a = 0), r < 0 && (h += r, a -= r, r = 0), h > 0 && t.copyWithin(r, a, h), e
          }
        },
      "./src/rendering/blendPattern.js":
        /*!***************************************!*\
          !*** ./src/rendering/blendPattern.js ***!
          \***************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return r
          }));
          var r = function() {
            function t(e) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.mesh_width = e.mesh_width, this.mesh_height = e.mesh_height, this.aspectx = e.aspectx, this.aspecty = e.aspecty, this.vertInfoA = new Float32Array((this.mesh_width + 1) * (this.mesh_height + 1)), this.vertInfoC = new Float32Array((this.mesh_width + 1) * (this.mesh_height + 1)), this.createBlendPattern()
            }
            var e, i, r;
            return e = t, r = [{
              key: "resizeMatrixValues",
              value: function(t, e, i, s, r) {
                for (var a = new Float32Array((s + 1) * (r + 1)), h = 0, o = 0; o < r + 1; o++)
                  for (var n = 0; n < s + 1; n++) {
                    var l = n / r,
                      u = o / s;
                    l *= e + 1, u *= i + 1, l = Math.clamp(l, 0, e - 1), u = Math.clamp(u, 0, i - 1);
                    var m = Math.floor(l),
                      c = Math.floor(u),
                      g = l - m,
                      f = u - c,
                      A = t[c * (e + 1) + m],
                      d = t[c * (e + 1) + (m + 1)],
                      v = t[(c + 1) * (e + 1) + m],
                      p = t[(c + 1) * (e + 1) + (m + 1)];
                    a[h] = A * (1 - g) * (1 - f) + d * g * (1 - f) + v * (1 - g) * f + p * g * f, h += 1
                  }
                return a
              }
            }], (i = [{
              key: "updateGlobals",
              value: function(e) {
                var i = this.mesh_width,
                  s = this.mesh_height;
                this.mesh_width = e.mesh_width, this.mesh_height = e.mesh_height, this.aspectx = e.aspectx, this.aspecty = e.aspecty, this.mesh_width === i && this.mesh_height === s || (this.vertInfoA = t.resizeMatrixValues(this.vertInfoA, i, s, this.mesh_width, this.mesh_height), this.vertInfoC = t.resizeMatrixValues(this.vertInfoC, i, s, this.mesh_width, this.mesh_height))
              }
            }, {
              key: "genPlasma",
              value: function(t, e, i, s, r) {
                var a = Math.floor((t + e) / 2),
                  h = Math.floor((i + s) / 2),
                  o = this.vertInfoC[i * (this.mesh_width + 1) + t],
                  n = this.vertInfoC[i * (this.mesh_width + 1) + e],
                  l = this.vertInfoC[s * (this.mesh_width + 1) + t],
                  u = this.vertInfoC[s * (this.mesh_width + 1) + e];
                s - i >= 2 && (0 === t && (this.vertInfoC[h * (this.mesh_width + 1) + t] = .5 * (o + l) + (2 * Math.random() - 1) * r * this.aspecty), this.vertInfoC[h * (this.mesh_width + 1) + e] = .5 * (n + u) + (2 * Math.random() - 1) * r * this.aspecty), e - t >= 2 && (0 === i && (this.vertInfoC[i * (this.mesh_width + 1) + a] = .5 * (o + n) + (2 * Math.random() - 1) * r * this.aspectx), this.vertInfoC[s * (this.mesh_width + 1) + a] = .5 * (l + u) + (2 * Math.random() - 1) * r * this.aspectx), s - i >= 2 && e - t >= 2 && (o = this.vertInfoC[h * (this.mesh_width + 1) + t], n = this.vertInfoC[h * (this.mesh_width + 1) + e], l = this.vertInfoC[i * (this.mesh_width + 1) + a], u = this.vertInfoC[s * (this.mesh_width + 1) + a], this.vertInfoC[h * (this.mesh_width + 1) + a] = .25 * (l + u + o + n) + (2 * Math.random() - 1) * r, this.genPlasma(t, a, i, h, .5 * r), this.genPlasma(a, e, i, h, .5 * r), this.genPlasma(t, a, h, s, .5 * r), this.genPlasma(a, e, h, s, .5 * r))
              }
            }, {
              key: "createBlendPattern",
              value: function() {
                var t = 1 + Math.floor(3 * Math.random());
                if (0 === t)
                  for (var e = 0, i = 0; i <= this.mesh_height; i++)
                    for (var s = 0; s <= this.mesh_width; s++) this.vertInfoA[e] = 1, this.vertInfoC[e] = 0, e += 1;
                else if (1 === t)
                  for (var r = 6.28 * Math.random(), a = Math.cos(r), h = Math.sin(r), o = .1 + .2 * Math.random(), n = 1 / o, l = 0, u = 0; u <= this.mesh_height; u++)
                    for (var m = u / this.mesh_height * this.aspecty, c = 0; c <= this.mesh_width; c++) {
                      var g = (c / this.mesh_width * this.aspectx - .5) * a + (m - .5) * h + .5;
                      g = (g - .5) / Math.sqrt(2) + .5, this.vertInfoA[l] = n * (1 + o), this.vertInfoC[l] = n * g - n, l += 1
                    } else if (2 === t) {
                      var f = .12 + .13 * Math.random(),
                        A = 1 / f;
                      this.vertInfoC[0] = Math.random(), this.vertInfoC[this.mesh_width] = Math.random(), this.vertInfoC[this.mesh_height * (this.mesh_width + 1)] = Math.random(), this.vertInfoC[this.mesh_height * (this.mesh_width + 1) + this.mesh_width] = Math.random(), this.genPlasma(0, this.mesh_width, 0, this.mesh_height, .25);
                      for (var d = this.vertInfoC[0], v = this.vertInfoC[0], p = 0, _ = 0; _ <= this.mesh_height; _++)
                        for (var x = 0; x <= this.mesh_width; x++) d > this.vertInfoC[p] && (d = this.vertInfoC[p]), v < this.vertInfoC[p] && (v = this.vertInfoC[p]), p += 1;
                      var b = 1 / (v - d);
                      p = 0;
                      for (var T = 0; T <= this.mesh_height; T++)
                        for (var E = 0; E <= this.mesh_width; E++) {
                          var P = (this.vertInfoC[p] - d) * b;
                          this.vertInfoA[p] = A * (1 + f), this.vertInfoC[p] = A * P - A, p += 1
                        }
                    } else if (3 === t)
                  for (var R = .02 + .14 * Math.random() + .34 * Math.random(), L = 1 / R, S = 2 * Math.floor(2 * Math.random()) - 1, y = 0, w = 0; w <= this.mesh_height; w++)
                    for (var U = (w / this.mesh_height - .5) * this.aspecty, M = 0; M <= this.mesh_width; M++) {
                      var F = (M / this.mesh_width - .5) * this.aspectx,
                        q = 1.41421 * Math.sqrt(F * F + U * U); - 1 === S && (q = 1 - q), this.vertInfoA[y] = L * (1 + R), this.vertInfoC[y] = L * q - L, y += 1
                    }
              }
            }]) && s(e.prototype, i), r && s(e, r), t
          }()
        },
      "./src/rendering/motionVectors/motionVectors.js":
        /*!******************************************************!*\
          !*** ./src/rendering/motionVectors/motionVectors.js ***!
          \******************************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.maxX = 64, this.maxY = 48, this.positions = new Float32Array(this.maxX * this.maxY * 2 * 3), this.texsizeX = i.texsizeX, this.texsizeY = i.texsizeY, this.mesh_width = i.mesh_width, this.mesh_height = i.mesh_height, this.positionVertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.mesh_width = t.mesh_width, this.mesh_height = t.mesh_height
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      in vec3 aPos;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos, 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      out vec4 fragColor;\n                                      uniform vec4 u_color;\n                                      void main(void) {\n                                        fragColor = u_color;\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.aPosLoc = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.colorLoc = this.gl.getUniformLocation(this.shaderProgram, "u_color")
              }
            }, {
              key: "getMotionDir",
              value: function(t, e, i) {
                var s, r, a = Math.floor(i * this.mesh_height),
                  h = i * this.mesh_height - a,
                  o = Math.floor(e * this.mesh_width),
                  n = e * this.mesh_width - o,
                  l = o + 1,
                  u = a + 1,
                  m = this.mesh_width + 1;
                return s = t[2 * (a * m + o) + 0] * (1 - n) * (1 - h), r = t[2 * (a * m + o) + 1] * (1 - n) * (1 - h), s += t[2 * (a * m + l) + 0] * n * (1 - h), r += t[2 * (a * m + l) + 1] * n * (1 - h), s += t[2 * (u * m + o) + 0] * (1 - n) * h, r += t[2 * (u * m + o) + 1] * (1 - n) * h, [s += t[2 * (u * m + l) + 0] * n * h, 1 - (r += t[2 * (u * m + l) + 1] * n * h)]
              }
            }, {
              key: "generateMotionVectors",
              value: function(t, e) {
                var i = t.mv_a,
                  s = Math.floor(t.mv_x),
                  r = Math.floor(t.mv_y);
                if (i > .001 && s > 0 && r > 0) {
                  var a = t.mv_x - s,
                    h = t.mv_y - r;
                  s > this.maxX && (s = this.maxX, a = 0), r > this.maxY && (r = this.maxY, h = 0);
                  var o = t.mv_dx,
                    n = t.mv_dy,
                    l = t.mv_l,
                    u = 1 / this.texsizeX;
                  this.numVecVerts = 0;
                  for (var m = 0; m < r; m++) {
                    var c = (m + .25) / (r + h + .25 - 1);
                    if ((c -= n) > 1e-4 && c < .9999)
                      for (var g = 0; g < s; g++) {
                        var f = (g + .25) / (s + a + .25 - 1);
                        if ((f += o) > 1e-4 && f < .9999) {
                          var A = this.getMotionDir(e, f, c),
                            d = A[0],
                            v = A[1],
                            p = d - f,
                            _ = v - c;
                          p *= l, _ *= l;
                          var x = Math.sqrt(p * p + _ * _);
                          x < u && x > 1e-8 ? (p *= x = u / x, _ *= x) : (p = u, p = u);
                          var b = 2 * f - 1,
                            T = 2 * c - 1,
                            E = 2 * (d = f + p) - 1,
                            P = 2 * (v = c + _) - 1;
                          this.positions[3 * this.numVecVerts + 0] = b, this.positions[3 * this.numVecVerts + 1] = T, this.positions[3 * this.numVecVerts + 2] = 0, this.positions[3 * (this.numVecVerts + 1) + 0] = E, this.positions[3 * (this.numVecVerts + 1) + 1] = P, this.positions[3 * (this.numVecVerts + 1) + 2] = 0, this.numVecVerts += 2
                        }
                      }
                  }
                  if (this.numVecVerts > 0) return this.color = [t.mv_r, t.mv_g, t.mv_b, i], !0
                }
                return !1
              }
            }, {
              key: "drawMotionVectors",
              value: function(t, e) {
                this.generateMotionVectors(t, e) && (this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLoc), this.gl.uniform4fv(this.colorLoc, this.color), this.gl.lineWidth(1), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.LINES, 0, this.numVecVerts))
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/renderer.js":
        /*!***********************************!*\
          !*** ./src/rendering/renderer.js ***!
          \***********************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return P
          }));
          var s = i( /*! ../audio/audioLevels */ "./src/audio/audioLevels.js"),
            r = i( /*! ../blankPreset */ "./src/blankPreset.js"),
            a = i.n(r),
            h = i( /*! ../equations/presetEquationRunner */ "./src/equations/presetEquationRunner.js"),
            o = i( /*! ./waves/basicWaveform */ "./src/rendering/waves/basicWaveform.js"),
            n = i( /*! ./waves/customWaveform */ "./src/rendering/waves/customWaveform.js"),
            l = i( /*! ./shapes/customShape */ "./src/rendering/shapes/customShape.js"),
            u = i( /*! ./sprites/border */ "./src/rendering/sprites/border.js"),
            m = i( /*! ./sprites/darkenCenter */ "./src/rendering/sprites/darkenCenter.js"),
            c = i( /*! ./motionVectors/motionVectors */ "./src/rendering/motionVectors/motionVectors.js"),
            g = i( /*! ./shaders/warp */ "./src/rendering/shaders/warp.js"),
            f = i( /*! ./shaders/comp */ "./src/rendering/shaders/comp.js"),
            A = i( /*! ./shaders/output */ "./src/rendering/shaders/output.js"),
            d = i( /*! ./shaders/resample */ "./src/rendering/shaders/resample.js"),
            v = i( /*! ./shaders/blur/blur */ "./src/rendering/shaders/blur/blur.js"),
            p = i( /*! ../noise/noise */ "./src/noise/noise.js"),
            _ = i( /*! ../image/imageTextures */ "./src/image/imageTextures.js"),
            x = i( /*! ./text/titleText */ "./src/rendering/text/titleText.js"),
            b = i( /*! ./blendPattern */ "./src/rendering/blendPattern.js"),
            T = i( /*! ../utils */ "./src/utils.js");
  
          function E(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var P = function() {
            function t(e, i, r) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.audio = i, this.frameNum = 0, this.fps = 30, this.time = 0, this.presetTime = 0, this.lastTime = performance.now(), this.timeHist = [0], this.timeHistMax = 120, this.blending = !1, this.blendStartTime = 0, this.blendProgress = 0, this.blendDuration = 0, this.width = r.width || 1200, this.height = r.height || 900, this.mesh_width = r.meshWidth || 48, this.mesh_height = r.meshHeight || 36, this.pixelRatio = r.pixelRatio || window.devicePixelRatio || 1, this.textureRatio = r.textureRatio || 1, this.outputFXAA = r.outputFXAA || !1, this.texsizeX = this.width * this.pixelRatio * this.textureRatio, this.texsizeY = this.height * this.pixelRatio * this.textureRatio, this.aspectx = this.texsizeY > this.texsizeX ? this.texsizeX / this.texsizeY : 1, this.aspecty = this.texsizeX > this.texsizeY ? this.texsizeY / this.texsizeX : 1, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.qs = T.default.range(1, 33).map((function(t) {
                return "q".concat(t)
              })), this.ts = T.default.range(1, 9).map((function(t) {
                return "t".concat(t)
              })), this.regs = T.default.range(0, 100).map((function(t) {
                return t < 10 ? "reg0".concat(t) : "reg".concat(t)
              })), this.blurRatios = [
                [.5, .25],
                [.125, .125],
                [.0625, .0625]
              ], this.audioLevels = new s.default(this.audio), this.prevFrameBuffer = this.gl.createFramebuffer(), this.targetFrameBuffer = this.gl.createFramebuffer(), this.prevTexture = this.gl.createTexture(), this.targetTexture = this.gl.createTexture(), this.compFrameBuffer = this.gl.createFramebuffer(), this.compTexture = this.gl.createTexture(), this.anisoExt = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.bindFrameBufferTexture(this.prevFrameBuffer, this.prevTexture), this.bindFrameBufferTexture(this.targetFrameBuffer, this.targetTexture), this.bindFrameBufferTexture(this.compFrameBuffer, this.compTexture);
              var E = {
                pixelRatio: this.pixelRatio,
                textureRatio: this.textureRatio,
                texsizeX: this.texsizeX,
                texsizeY: this.texsizeY,
                mesh_width: this.mesh_width,
                mesh_height: this.mesh_height,
                aspectx: this.aspectx,
                aspecty: this.aspecty
              };
              this.noise = new p.default(e), this.image = new _.default(e), this.warpShader = new g.default(e, this.noise, this.image, E), this.compShader = new f.default(e, this.noise, this.image, E), this.outputShader = new A.default(e, E), this.prevWarpShader = new g.default(e, this.noise, this.image, E), this.prevCompShader = new f.default(e, this.noise, this.image, E), this.numBlurPasses = 0, this.blurShader1 = new v.default(0, this.blurRatios, e, E), this.blurShader2 = new v.default(1, this.blurRatios, e, E), this.blurShader3 = new v.default(2, this.blurRatios, e, E), this.blurTexture1 = this.blurShader1.blurVerticalTexture, this.blurTexture2 = this.blurShader2.blurVerticalTexture, this.blurTexture3 = this.blurShader3.blurVerticalTexture, this.basicWaveform = new o.default(e, E), this.customWaveforms = T.default.range(4).map((function(t) {
                return new n.default(t, e, E)
              })), this.customShapes = T.default.range(4).map((function(t) {
                return new l.default(t, e, E)
              })), this.prevCustomWaveforms = T.default.range(4).map((function(t) {
                return new n.default(t, e, E)
              })), this.prevCustomShapes = T.default.range(4).map((function(t) {
                return new l.default(t, e, E)
              })), this.darkenCenter = new m.default(e, E), this.innerBorder = new u.default(e, E), this.outerBorder = new u.default(e, E), this.motionVectors = new c.default(e, E), this.titleText = new x.default(e, E), this.blendPattern = new b.default(E), this.resampleShader = new d.default(e), this.supertext = {
                startTime: -1
              }, this.warpUVs = new Float32Array((this.mesh_width + 1) * (this.mesh_height + 1) * 2), this.warpColor = new Float32Array((this.mesh_width + 1) * (this.mesh_height + 1) * 4), this.gl.clearColor(0, 0, 0, 1), this.blankPreset = a.a;
              var P = {
                frame: 0,
                time: 0,
                fps: 45,
                bass: 1,
                bass_att: 1,
                mid: 1,
                mid_att: 1,
                treb: 1,
                treb_att: 1
              };
              this.preset = a.a, this.prevPreset = this.preset, this.presetEquationRunner = new h.default(this.preset, P, E), this.prevPresetEquationRunner = new h.default(this.prevPreset, P, E), this.regVars = this.presetEquationRunner.mdVSRegs
            }
            var e, i, r;
            return e = t, i = [{
              key: "loadPreset",
              value: function(e, i) {
                this.blendPattern.createBlendPattern(), this.blending = !0, this.blendStartTime = this.time, this.blendDuration = i, this.blendProgress = 0, this.prevPresetEquationRunner = this.presetEquationRunner, this.prevPreset = this.preset, this.preset = e, this.preset.baseVals.old_wave_mode = this.prevPreset.baseVals.wave_mode, this.presetTime = this.time;
                var s = {
                    frame: this.frameNum,
                    time: this.time,
                    fps: this.fps,
                    bass: this.audioLevels.bass,
                    bass_att: this.audioLevels.bass_att,
                    mid: this.audioLevels.mid,
                    mid_att: this.audioLevels.mid_att,
                    treb: this.audioLevels.treb,
                    treb_att: this.audioLevels.treb_att
                  },
                  r = {
                    pixelRatio: this.pixelRatio,
                    textureRatio: this.textureRatio,
                    texsizeX: this.texsizeX,
                    texsizeY: this.texsizeY,
                    mesh_width: this.mesh_width,
                    mesh_height: this.mesh_height,
                    aspectx: this.aspectx,
                    aspecty: this.aspecty
                  };
                this.presetEquationRunner = new h.default(this.preset, s, r), this.regVars = this.presetEquationRunner.mdVSRegs;
                var a = this.prevWarpShader;
                this.prevWarpShader = this.warpShader, this.warpShader = a;
                var o = this.prevCompShader;
                this.prevCompShader = this.compShader, this.compShader = o;
                var n = this.preset.warp.trim(),
                  l = this.preset.comp.trim();
                this.warpShader.updateShader(n), this.compShader.updateShader(l), 0 === n.length ? this.numBlurPasses = 0 : this.numBlurPasses = t.getHighestBlur(n), 0 !== l.length && (this.numBlurPasses = Math.max(this.numBlurPasses, t.getHighestBlur(l)))
              }
            }, {
              key: "loadExtraImages",
              value: function(t) {
                this.image.loadExtraImages(t)
              }
            }, {
              key: "setRendererSize",
              value: function(t, e, i) {
                var s = this.texsizeX,
                  r = this.texsizeY;
                if (this.width = t, this.height = e, this.mesh_width = i.meshWidth || this.mesh_width, this.mesh_height = i.meshHeight || this.mesh_height, this.pixelRatio = i.pixelRatio || this.pixelRatio, this.textureRatio = i.textureRatio || this.textureRatio, this.texsizeX = t * this.pixelRatio * this.textureRatio, this.texsizeY = e * this.pixelRatio * this.textureRatio, this.aspectx = this.texsizeY > this.texsizeX ? this.texsizeX / this.texsizeY : 1, this.aspecty = this.texsizeX > this.texsizeY ? this.texsizeY / this.texsizeX : 1, this.texsizeX !== s || this.texsizeY !== r) {
                  var a = this.gl.createTexture();
                  this.bindFrameBufferTexture(this.targetFrameBuffer, a), this.bindFrambufferAndSetViewport(this.targetFrameBuffer, this.texsizeX, this.texsizeY), this.resampleShader.renderQuadTexture(this.targetTexture), this.targetTexture = a, this.bindFrameBufferTexture(this.prevFrameBuffer, this.prevTexture), this.bindFrameBufferTexture(this.compFrameBuffer, this.compTexture)
                }
                this.updateGlobals(), this.frameNum > 0 && this.renderToScreen()
              }
            }, {
              key: "setInternalMeshSize",
              value: function(t, e) {
                this.mesh_width = t, this.mesh_height = e, this.updateGlobals()
              }
            }, {
              key: "setOutputAA",
              value: function(t) {
                this.outputFXAA = t
              }
            }, {
              key: "updateGlobals",
              value: function() {
                var t = {
                  pixelRatio: this.pixelRatio,
                  textureRatio: this.textureRatio,
                  texsizeX: this.texsizeX,
                  texsizeY: this.texsizeY,
                  mesh_width: this.mesh_width,
                  mesh_height: this.mesh_height,
                  aspectx: this.aspectx,
                  aspecty: this.aspecty
                };
                this.presetEquationRunner.updateGlobals(t), this.prevPresetEquationRunner.updateGlobals(t), this.warpShader.updateGlobals(t), this.prevWarpShader.updateGlobals(t), this.compShader.updateGlobals(t), this.prevCompShader.updateGlobals(t), this.outputShader.updateGlobals(t), this.blurShader1.updateGlobals(t), this.blurShader2.updateGlobals(t), this.blurShader3.updateGlobals(t), this.basicWaveform.updateGlobals(t), this.customWaveforms.forEach((function(e) {
                  return e.updateGlobals(t)
                })), this.customShapes.forEach((function(e) {
                  return e.updateGlobals(t)
                })), this.prevCustomWaveforms.forEach((function(e) {
                  return e.updateGlobals(t)
                })), this.prevCustomShapes.forEach((function(e) {
                  return e.updateGlobals(t)
                })), this.darkenCenter.updateGlobals(t), this.innerBorder.updateGlobals(t), this.outerBorder.updateGlobals(t), this.motionVectors.updateGlobals(t), this.titleText.updateGlobals(t), this.blendPattern.updateGlobals(t), this.warpUVs = new Float32Array((this.mesh_width + 1) * (this.mesh_height + 1) * 2), this.warpColor = new Float32Array((this.mesh_width + 1) * (this.mesh_height + 1) * 4)
              }
            }, {
              key: "calcTimeAndFPS",
              value: function(t) {
                var e;
                if (t) e = t;
                else {
                  var i = performance.now();
                  ((e = (i - this.lastTime) / 1e3) > 1 || e < 0 || this.frame < 2) && (e = 1 / 30), this.lastTime = i
                }
                this.time += 1 / this.fps, this.blending && (this.blendProgress = (this.time - this.blendStartTime) / this.blendDuration, this.blendProgress > 1 && (this.blending = !1));
                var s = this.timeHist[this.timeHist.length - 1] + e;
                this.timeHist.push(s), this.timeHist.length > this.timeHistMax && this.timeHist.shift();
                var r = this.timeHist.length / (s - this.timeHist[0]);
                Math.abs(r - this.fps) > 3 && this.frame > this.timeHistMax ? this.fps = r : this.fps = .93 * this.fps + (1 - .93) * r
              }
            }, {
              key: "runPixelEquations",
              value: function(t, e, i, s) {
                for (var r = this.mesh_width, a = this.mesh_height, h = r + 1, o = a + 1, n = this.time * e.warpanimspeed, l = 1 / e.warpscale, u = 11.68 + 4 * Math.cos(1.413 * n + 10), m = 8.77 + 3 * Math.cos(1.113 * n + 7), c = 10.54 + 3 * Math.cos(1.233 * n + 3), g = 11.49 + 4 * Math.cos(.933 * n + 5), f = 0 / this.texsizeX, A = 0 / this.texsizeY, d = this.aspectx, v = this.aspecty, p = T.default.cloneVars(e), _ = 0, x = 0, b = 0; b < o; b++)
                  for (var E = 0; E < h; E++) {
                    var P = E / r * 2 - 1,
                      R = b / a * 2 - 1,
                      L = Math.sqrt(P * P * d * d + R * R * v * v);
                    if (i) {
                      var S = void 0;
                      S = b === a / 2 && E === r / 2 ? 0 : T.default.atan2(R * v, P * d), p.x = .5 * P * d + .5, p.y = -.5 * R * v + .5, p.rad = L, p.ang = S, p.zoom = e.zoom, p.zoomexp = e.zoomexp, p.rot = e.rot, p.warp = e.warp, p.cx = e.cx, p.cy = e.cy, p.dx = e.dx, p.dy = e.dy, p.sx = e.sx, p.sy = e.sy, p = t.pixel_eqs(p)
                    }
                    var y = p.warp,
                      w = p.zoom,
                      U = p.zoomexp,
                      M = p.cx,
                      F = p.cy,
                      q = p.sx,
                      z = p.sy,
                      B = p.dx,
                      V = p.dy,
                      C = p.rot,
                      D = 1 / Math.pow(w, Math.pow(U, 2 * L - 1)),
                      I = .5 * P * d * D + .5,
                      X = .5 * -R * v * D + .5;
                    I = (I - M) / q + M, X = (X - F) / z + F, 0 !== y && (I += .0035 * y * Math.sin(.333 * n + l * (P * u - R * g)), X += .0035 * y * Math.cos(.375 * n - l * (P * c + R * m)), I += .0035 * y * Math.cos(.753 * n - l * (P * m - R * c)), X += .0035 * y * Math.sin(.825 * n + l * (P * u + R * g)));
                    var k = I - M,
                      N = X - F,
                      O = Math.cos(C),
                      W = Math.sin(C);
                    if (I = k * O - N * W + M, X = k * W + N * O + F, I = ((I -= B) - .5) / d + .5, X = ((X -= V) - .5) / v + .5, I += f, X += A, s) {
                      var Q = this.blendPattern.vertInfoA[_ / 2] * this.blendProgress + this.blendPattern.vertInfoC[_ / 2];
                      Q = Math.clamp(Q, 0, 1), this.warpUVs[_] = this.warpUVs[_] * Q + I * (1 - Q), this.warpUVs[_ + 1] = this.warpUVs[_ + 1] * Q + X * (1 - Q), this.warpColor[x + 0] = 1, this.warpColor[x + 1] = 1, this.warpColor[x + 2] = 1, this.warpColor[x + 3] = Q
                    } else this.warpUVs[_] = I, this.warpUVs[_ + 1] = X, this.warpColor[x + 0] = 1, this.warpColor[x + 1] = 1, this.warpColor[x + 2] = 1, this.warpColor[x + 3] = 1;
                    _ += 2, x += 4
                  }
                this.mdVSVertex = p
              }
            }, {
              key: "bindFrambufferAndSetViewport",
              value: function(t, e, i) {
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.viewport(0, 0, e, i)
              }
            }, {
              key: "bindFrameBufferTexture",
              value: function(t, e) {
                if (this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.texsizeX, this.texsizeY, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array(this.texsizeX * this.texsizeY * 4)), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.anisoExt) {
                  var i = this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  this.gl.texParameterf(this.gl.TEXTURE_2D, this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, i)
                }
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, e, 0)
              }
            }, {
              key: "render",
              value: function() {
                var e = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  s = i.audioLevels,
                  r = i.elapsedTime;
                this.calcTimeAndFPS(r), this.frameNum += 1, s ? this.audio.updateAudio(s.timeByteArray, s.timeByteArrayL, s.timeByteArrayR) : this.audio.sampleAudio(), this.audioLevels.updateAudioLevels(this.fps, this.frameNum);
                var a = {
                    frame: this.frameNum,
                    time: this.time,
                    fps: this.fps,
                    bass: this.audioLevels.bass,
                    bass_att: this.audioLevels.bass_att,
                    mid: this.audioLevels.mid,
                    mid_att: this.audioLevels.mid_att,
                    treb: this.audioLevels.treb,
                    treb_att: this.audioLevels.treb_att,
                    meshx: this.mesh_width,
                    meshy: this.mesh_height,
                    aspectx: this.invAspectx,
                    aspecty: this.invAspecty,
                    pixelsx: this.texsizeX,
                    pixelsy: this.texsizeY
                  },
                  h = Object.assign({}, a);
                h.gmegabuf = this.prevPresetEquationRunner.gmegabuf, a.gmegabuf = this.presetEquationRunner.gmegabuf, Object.assign(a, this.regVars), this.presetEquationRunner.runFrameEquations(a);
                var o, n = this.presetEquationRunner.mdVSFrame;
                this.runPixelEquations(this.presetEquationRunner.preset, n, this.presetEquationRunner.runVertEQs, !1), Object.assign(this.regVars, T.default.pick(this.mdVSVertex, this.regs)), Object.assign(a, this.regVars), this.blending ? (this.prevPresetEquationRunner.runFrameEquations(h), this.runPixelEquations(this.prevPresetEquationRunner.preset, this.prevPresetEquationRunner.mdVSFrame, this.prevPresetEquationRunner.runVertEQs, !0), o = t.mixFrameEquations(this.blendProgress, n, this.prevPresetEquationRunner.mdVSFrame)) : o = n;
                var l = this.targetTexture;
                this.targetTexture = this.prevTexture, this.prevTexture = l;
                var u = this.targetFrameBuffer;
                this.targetFrameBuffer = this.prevFrameBuffer, this.prevFrameBuffer = u, this.gl.bindTexture(this.gl.TEXTURE_2D, this.prevTexture), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.bindFrambufferAndSetViewport(this.targetFrameBuffer, this.texsizeX, this.texsizeY), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.enable(this.gl.BLEND), this.gl.blendEquation(this.gl.FUNC_ADD), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                var m = t.getBlurValues(o),
                  c = m.blurMins,
                  g = m.blurMaxs;
                this.blending ? (this.prevWarpShader.renderQuadTexture(!1, this.prevTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, c, g, this.prevPresetEquationRunner.mdVSFrame, this.warpUVs, this.warpColor), this.warpShader.renderQuadTexture(!0, this.prevTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, c, g, o, this.warpUVs, this.warpColor)) : this.warpShader.renderQuadTexture(!1, this.prevTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, c, g, n, this.warpUVs, this.warpColor), this.numBlurPasses > 0 && (this.blurShader1.renderBlurTexture(this.targetTexture, n, c, g), this.numBlurPasses > 1 && (this.blurShader2.renderBlurTexture(this.blurTexture1, n, c, g), this.numBlurPasses > 2 && this.blurShader3.renderBlurTexture(this.blurTexture2, n, c, g)), this.bindFrambufferAndSetViewport(this.targetFrameBuffer, this.texsizeX, this.texsizeY)), this.motionVectors.drawMotionVectors(o, this.warpUVs), this.preset.shapes && this.preset.shapes.length > 0 && this.customShapes.forEach((function(t, i) {
                  t.drawCustomShape(e.blending ? e.blendProgress : 1, a, e.presetEquationRunner, e.preset.shapes[i], e.prevTexture)
                })), this.preset.waves && this.preset.waves.length > 0 && this.customWaveforms.forEach((function(t, i) {
                  t.drawCustomWaveform(e.blending ? e.blendProgress : 1, e.audio.timeArrayL, e.audio.timeArrayR, e.audio.freqArrayL, e.audio.freqArrayR, a, e.presetEquationRunner, e.preset.waves[i])
                })), this.blending && (this.prevPreset.shapes && this.prevPreset.shapes.length > 0 && this.prevCustomShapes.forEach((function(t, i) {
                  t.drawCustomShape(1 - e.blendProgress, h, e.prevPresetEquationRunner, e.prevPreset.shapes[i], e.prevTexture)
                })), this.prevPreset.waves && this.prevPreset.waves.length > 0 && this.prevCustomWaveforms.forEach((function(t, i) {
                  t.drawCustomWaveform(1 - e.blendProgress, e.audio.timeArrayL, e.audio.timeArrayR, e.audio.freqArrayL, e.audio.freqArrayR, h, e.prevPresetEquationRunner, e.prevPreset.waves[i])
                }))), this.basicWaveform.drawBasicWaveform(this.blending, this.blendProgress, this.audio.timeArrayL, this.audio.timeArrayR, o), this.darkenCenter.drawDarkenCenter(o);
                var f = [o.ob_r, o.ob_g, o.ob_b, o.ob_a];
                this.outerBorder.drawBorder(f, o.ob_size, 0);
                var A = [o.ib_r, o.ib_g, o.ib_b, o.ib_a];
                if (this.innerBorder.drawBorder(A, o.ib_size, o.ob_size), this.supertext.startTime >= 0) {
                  var d = (this.time - this.supertext.startTime) / this.supertext.duration;
                  d >= 1 && this.titleText.renderTitle(d, !0, a)
                }
                this.globalVars = a, this.mdVSFrame = n, this.mdVSFrameMixed = o, this.renderToScreen()
              }
            }, {
              key: "renderToScreen",
              value: function() {
                this.outputFXAA ? this.bindFrambufferAndSetViewport(this.compFrameBuffer, this.texsizeX, this.texsizeY) : this.bindFrambufferAndSetViewport(null, this.width, this.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.enable(this.gl.BLEND), this.gl.blendEquation(this.gl.FUNC_ADD), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                var e = t.getBlurValues(this.mdVSFrameMixed),
                  i = e.blurMins,
                  s = e.blurMaxs;
                if (this.blending ? (this.prevCompShader.renderQuadTexture(!1, this.targetTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, i, s, this.prevPresetEquationRunner.mdVSFrame, this.warpColor), this.compShader.renderQuadTexture(!0, this.targetTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, i, s, this.mdVSFrameMixed, this.warpColor)) : this.compShader.renderQuadTexture(!1, this.targetTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, i, s, this.mdVSFrame, this.warpColor), this.supertext.startTime >= 0) {
                  var r = (this.time - this.supertext.startTime) / this.supertext.duration;
                  this.titleText.renderTitle(r, !1, this.globalVars), r >= 1 && (this.supertext.startTime = -1)
                }
                this.outputFXAA && (this.gl.bindTexture(this.gl.TEXTURE_2D, this.compTexture), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.bindFrambufferAndSetViewport(null, this.width, this.height), this.outputShader.renderQuadTexture(this.compTexture))
              }
            }, {
              key: "launchSongTitleAnim",
              value: function(t) {
                this.supertext = {
                  startTime: this.time,
                  duration: 1.7
                }, this.titleText.generateTitleTexture(t)
              }
            }, {
              key: "toDataURL",
              value: function() {
                var e = this,
                  i = new Uint8Array(this.texsizeX * this.texsizeY * 4),
                  s = this.gl.createFramebuffer(),
                  r = this.gl.createTexture();
                this.bindFrameBufferTexture(s, r);
                var a = t.getBlurValues(this.mdVSFrameMixed),
                  h = a.blurMins,
                  o = a.blurMaxs;
                this.compShader.renderQuadTexture(!1, this.targetTexture, this.blurTexture1, this.blurTexture2, this.blurTexture3, h, o, this.mdVSFrame, this.warpColor), this.gl.readPixels(0, 0, this.texsizeX, this.texsizeY, this.gl.RGBA, this.gl.UNSIGNED_BYTE, i), Array.from({
                  length: this.texsizeY
                }, (function(t, s) {
                  return i.slice(s * e.texsizeX * 4, (s + 1) * e.texsizeX * 4)
                })).forEach((function(t, s) {
                  return i.set(t, (e.texsizeY - s - 1) * e.texsizeX * 4)
                }));
                var n = document.createElement("canvas");
                n.width = this.texsizeX, n.height = this.texsizeY;
                var l = n.getContext("2d"),
                  u = l.createImageData(this.texsizeX, this.texsizeY);
                return u.data.set(i), l.putImageData(u, 0, 0), this.gl.deleteTexture(r), this.gl.deleteFramebuffer(s), n.toDataURL()
              }
            }, {
              key: "warpBufferToDataURL",
              value: function() {
                var t = new Uint8Array(this.texsizeX * this.texsizeY * 4);
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.targetFrameBuffer), this.gl.readPixels(0, 0, this.texsizeX, this.texsizeY, this.gl.RGBA, this.gl.UNSIGNED_BYTE, t);
                var e = document.createElement("canvas");
                e.width = this.texsizeX, e.height = this.texsizeY;
                var i = e.getContext("2d"),
                  s = i.createImageData(this.texsizeX, this.texsizeY);
                return s.data.set(t), i.putImageData(s, 0, 0), e.toDataURL()
              }
            }], r = [{
              key: "getHighestBlur",
              value: function(t) {
                return /sampler_blur3/.test(t) ? 3 : /sampler_blur2/.test(t) ? 2 : /sampler_blur1/.test(t) ? 1 : 0
              }
            }, {
              key: "mixFrameEquations",
              value: function(t, e, i) {
                var s = .5 - .5 * Math.cos(t * Math.PI),
                  r = 1 - s,
                  a = .5,
                  h = T.default.cloneVars(e);
                return h.decay = s * e.decay + r * i.decay, h.wave_a = s * e.wave_a + r * i.wave_a, h.wave_r = s * e.wave_r + r * i.wave_r, h.wave_g = s * e.wave_g + r * i.wave_g, h.wave_b = s * e.wave_b + r * i.wave_b, h.wave_x = s * e.wave_x + r * i.wave_x, h.wave_y = s * e.wave_y + r * i.wave_y, h.wave_mystery = s * e.wave_mystery + r * i.wave_mystery, h.ob_size = s * e.ob_size + r * i.ob_size, h.ob_r = s * e.ob_r + r * i.ob_r, h.ob_g = s * e.ob_g + r * i.ob_g, h.ob_b = s * e.ob_b + r * i.ob_b, h.ob_a = s * e.ob_a + r * i.ob_a, h.ib_size = s * e.ib_size + r * i.ib_size, h.ib_r = s * e.ib_r + r * i.ib_r, h.ib_g = s * e.ib_g + r * i.ib_g, h.ib_b = s * e.ib_b + r * i.ib_b, h.ib_a = s * e.ib_a + r * i.ib_a, h.mv_x = s * e.mv_x + r * i.mv_x, h.mv_y = s * e.mv_y + r * i.mv_y, h.mv_dx = s * e.mv_dx + r * i.mv_dx, h.mv_dy = s * e.mv_dy + r * i.mv_dy, h.mv_l = s * e.mv_l + r * i.mv_l, h.mv_r = s * e.mv_r + r * i.mv_r, h.mv_g = s * e.mv_g + r * i.mv_g, h.mv_b = s * e.mv_b + r * i.mv_b, h.mv_a = s * e.mv_a + r * i.mv_a, h.echo_zoom = s * e.echo_zoom + r * i.echo_zoom, h.echo_alpha = s * e.echo_alpha + r * i.echo_alpha, h.echo_orient = s * e.echo_orient + r * i.echo_orient, h.wave_dots = s < a ? i.wave_dots : e.wave_dots, h.wave_thick = s < a ? i.wave_thick : e.wave_thick, h.additivewave = s < a ? i.additivewave : e.additivewave, h.wave_brighten = s < a ? i.wave_brighten : e.wave_brighten, h.darken_center = s < a ? i.darken_center : e.darken_center, h.gammaadj = s < a ? i.gammaadj : e.gammaadj, h.wrap = s < a ? i.wrap : e.wrap, h.invert = s < a ? i.invert : e.invert, h.brighten = s < a ? i.brighten : e.brighten, h.darken = s < a ? i.darken : e.darken, h.solarize = s < a ? i.brighten : e.solarize, h.b1n = s * e.b1n + r * i.b1n, h.b2n = s * e.b2n + r * i.b2n, h.b3n = s * e.b3n + r * i.b3n, h.b1x = s * e.b1x + r * i.b1x, h.b2x = s * e.b2x + r * i.b2x, h.b3x = s * e.b3x + r * i.b3x, h.b1ed = s * e.b1ed + r * i.b1ed, h
              }
            }, {
              key: "getBlurValues",
              value: function(t) {
                var e = t.b1n,
                  i = t.b2n,
                  s = t.b3n,
                  r = t.b1x,
                  a = t.b2x,
                  h = t.b3x,
                  o = .1;
                if (r - e < o) {
                  var n = .5 * (e + r);
                  e = n - .05, r = n - .05
                }
                if ((a = Math.min(r, a)) - (i = Math.max(e, i)) < o) {
                  var l = .5 * (i + a);
                  i = l - .05, a = l - .05
                }
                if ((h = Math.min(a, h)) - (s = Math.max(i, s)) < o) {
                  var u = .5 * (s + h);
                  s = u - .05, h = u - .05
                }
                return {
                  blurMins: [e, i, s],
                  blurMaxs: [r, a, h]
                }
              }
            }], i && E(e.prototype, i), r && E(e, r), t
          }()
        },
      "./src/rendering/shaders/blur/blur.js":
        /*!********************************************!*\
          !*** ./src/rendering/shaders/blur/blur.js ***!
          \********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return h
          }));
          var s = i( /*! ./blurVertical */ "./src/rendering/shaders/blur/blurVertical.js"),
            r = i( /*! ./blurHorizontal */ "./src/rendering/shaders/blur/blurHorizontal.js");
  
          function a(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var h = function() {
            function t(e, i, a) {
              var h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.blurLevel = e, this.blurRatios = i, this.gl = a, this.texsizeX = h.texsizeX, this.texsizeY = h.texsizeY, this.anisoExt = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.blurHorizontalFrameBuffer = this.gl.createFramebuffer(), this.blurVerticalFrameBuffer = this.gl.createFramebuffer(), this.blurHorizontalTexture = this.gl.createTexture(), this.blurVerticalTexture = this.gl.createTexture(), this.setupFrameBufferTextures(), this.blurHorizontal = new r.default(a, this.blurLevel, h), this.blurVertical = new s.default(a, this.blurLevel, h)
            }
            var e, i, h;
            return e = t, (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.setupFrameBufferTextures()
              }
            }, {
              key: "getTextureSize",
              value: function(t) {
                var e = Math.max(this.texsizeX * t, 16);
                e = 16 * Math.floor((e + 3) / 16);
                var i = Math.max(this.texsizeY * t, 16);
                return [e, i = 4 * Math.floor((i + 3) / 4)]
              }
            }, {
              key: "setupFrameBufferTextures",
              value: function() {
                var t = this.blurLevel > 0 ? this.blurRatios[this.blurLevel - 1] : [1, 1],
                  e = this.blurRatios[this.blurLevel],
                  i = this.getTextureSize(t[1]),
                  s = this.getTextureSize(e[0]);
                this.bindFrameBufferTexture(this.blurHorizontalFrameBuffer, this.blurHorizontalTexture, s);
                var r = s,
                  a = this.getTextureSize(e[1]);
                this.bindFrameBufferTexture(this.blurVerticalFrameBuffer, this.blurVerticalTexture, a), this.horizontalTexsizes = [i, s], this.verticalTexsizes = [r, a]
              }
            }, {
              key: "bindFrambufferAndSetViewport",
              value: function(t, e) {
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.viewport(0, 0, e[0], e[1])
              }
            }, {
              key: "bindFrameBufferTexture",
              value: function(t, e, i) {
                if (this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, i[0], i[1], 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array(i[0] * i[1] * 4)), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.anisoExt) {
                  var s = this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  this.gl.texParameterf(this.gl.TEXTURE_2D, this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, s)
                }
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, e, 0)
              }
            }, {
              key: "renderBlurTexture",
              value: function(t, e, i, s) {
                this.bindFrambufferAndSetViewport(this.blurHorizontalFrameBuffer, this.horizontalTexsizes[1]), this.blurHorizontal.renderQuadTexture(t, e, i, s, this.horizontalTexsizes[0]), this.gl.bindTexture(this.gl.TEXTURE_2D, this.blurHorizontalTexture), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.bindFrambufferAndSetViewport(this.blurVerticalFrameBuffer, this.verticalTexsizes[1]), this.blurVertical.renderQuadTexture(this.blurHorizontalTexture, e, this.verticalTexsizes[0]), this.gl.bindTexture(this.gl.TEXTURE_2D, this.blurVerticalTexture), this.gl.generateMipmap(this.gl.TEXTURE_2D)
              }
            }]) && a(e.prototype, i), h && a(e, h), t
          }()
        },
      "./src/rendering/shaders/blur/blurHorizontal.js":
        /*!******************************************************!*\
          !*** ./src/rendering/shaders/blur/blurHorizontal.js ***!
          \******************************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.blurLevel = i;
              var r = [4, 3.8, 3.5, 2.9, 1.9, 1.2, .7, .3],
                a = r[0] + r[1],
                h = r[2] + r[3],
                o = r[4] + r[5],
                n = r[6] + r[7],
                l = 0 + 2 * r[1] / a,
                u = 2 + 2 * r[3] / h,
                m = 4 + 2 * r[5] / o,
                c = 6 + 2 * r[7] / n;
              this.ws = new Float32Array([a, h, o, n]), this.ds = new Float32Array([l, u, m, c]), this.wDiv = .5 / (a + h + o + n), this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), this.vertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      const vec2 halfmad = vec2(0.5);\n                                      in vec2 aPos;\n                                      out vec2 uv;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos, 0.0, 1.0);\n                                        uv = aPos * halfmad + halfmad;\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n       precision ".concat(this.floatPrecision, " float;\n       precision highp int;\n       precision mediump sampler2D;\n\n       in vec2 uv;\n       out vec4 fragColor;\n       uniform sampler2D uTexture;\n       uniform vec4 texsize;\n       uniform float scale;\n       uniform float bias;\n       uniform vec4 ws;\n       uniform vec4 ds;\n       uniform float wdiv;\n\n       void main(void) {\n         float w1 = ws[0];\n         float w2 = ws[1];\n         float w3 = ws[2];\n         float w4 = ws[3];\n         float d1 = ds[0];\n         float d2 = ds[1];\n         float d3 = ds[2];\n         float d4 = ds[3];\n\n         vec2 uv2 = uv.xy;\n\n         vec3 blur =\n           ( texture(uTexture, uv2 + vec2( d1 * texsize.z,0.0) ).xyz\n           + texture(uTexture, uv2 + vec2(-d1 * texsize.z,0.0) ).xyz) * w1 +\n           ( texture(uTexture, uv2 + vec2( d2 * texsize.z,0.0) ).xyz\n           + texture(uTexture, uv2 + vec2(-d2 * texsize.z,0.0) ).xyz) * w2 +\n           ( texture(uTexture, uv2 + vec2( d3 * texsize.z,0.0) ).xyz\n           + texture(uTexture, uv2 + vec2(-d3 * texsize.z,0.0) ).xyz) * w3 +\n           ( texture(uTexture, uv2 + vec2( d4 * texsize.z,0.0) ).xyz\n           + texture(uTexture, uv2 + vec2(-d4 * texsize.z,0.0) ).xyz) * w4;\n\n         blur.xyz *= wdiv;\n         blur.xyz = blur.xyz * scale + bias;\n\n         fragColor = vec4(blur, 1.0);\n       }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture"), this.texsizeLocation = this.gl.getUniformLocation(this.shaderProgram, "texsize"), this.scaleLoc = this.gl.getUniformLocation(this.shaderProgram, "scale"), this.biasLoc = this.gl.getUniformLocation(this.shaderProgram, "bias"), this.wsLoc = this.gl.getUniformLocation(this.shaderProgram, "ws"), this.dsLocation = this.gl.getUniformLocation(this.shaderProgram, "ds"), this.wdivLoc = this.gl.getUniformLocation(this.shaderProgram, "wdiv")
              }
            }, {
              key: "getScaleAndBias",
              value: function(t, e) {
                var i, s, r = [1, 1, 1],
                  a = [0, 0, 0];
                return r[0] = 1 / (e[0] - t[0]), a[0] = -t[0] * r[0], i = (t[1] - t[0]) / (e[0] - t[0]), s = (e[1] - t[0]) / (e[0] - t[0]), r[1] = 1 / (s - i), a[1] = -i * r[1], i = (t[2] - t[1]) / (e[1] - t[1]), s = (e[2] - t[1]) / (e[1] - t[1]), r[2] = 1 / (s - i), a[2] = -i * r[2], {
                  scale: r[this.blurLevel],
                  bias: a[this.blurLevel]
                }
              }
            }, {
              key: "renderQuadTexture",
              value: function(t, e, i, s, r) {
                this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.uniform1i(this.textureLoc, 0);
                var a = this.getScaleAndBias(i, s),
                  h = a.scale,
                  o = a.bias;
                this.gl.uniform4fv(this.texsizeLocation, [r[0], r[1], 1 / r[0], 1 / r[1]]), this.gl.uniform1f(this.scaleLoc, h), this.gl.uniform1f(this.biasLoc, o), this.gl.uniform4fv(this.wsLoc, this.ws), this.gl.uniform4fv(this.dsLocation, this.ds), this.gl.uniform1f(this.wdivLoc, this.wDiv), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/shaders/blur/blurVertical.js":
        /*!****************************************************!*\
          !*** ./src/rendering/shaders/blur/blurVertical.js ***!
          \****************************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.blurLevel = i;
              var r = [4, 3.8, 3.5, 2.9, 1.9, 1.2, .7, .3],
                a = r[0] + r[1] + r[2] + r[3],
                h = r[4] + r[5] + r[6] + r[7],
                o = 0 + (r[2] + r[3]) / a * 2,
                n = 2 + (r[6] + r[7]) / h * 2;
              this.wds = new Float32Array([a, h, o, n]), this.wDiv = 1 / (2 * (a + h)), this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), this.vertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      const vec2 halfmad = vec2(0.5);\n                                      in vec2 aPos;\n                                      out vec2 uv;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos, 0.0, 1.0);\n                                        uv = aPos * halfmad + halfmad;\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n       precision ".concat(this.floatPrecision, " float;\n       precision highp int;\n       precision mediump sampler2D;\n\n       in vec2 uv;\n       out vec4 fragColor;\n       uniform sampler2D uTexture;\n       uniform vec4 texsize;\n       uniform float ed1;\n       uniform float ed2;\n       uniform float ed3;\n       uniform vec4 wds;\n       uniform float wdiv;\n\n       void main(void) {\n         float w1 = wds[0];\n         float w2 = wds[1];\n         float d1 = wds[2];\n         float d2 = wds[3];\n\n         vec2 uv2 = uv.xy;\n\n         vec3 blur =\n           ( texture(uTexture, uv2 + vec2(0.0, d1 * texsize.w) ).xyz\n           + texture(uTexture, uv2 + vec2(0.0,-d1 * texsize.w) ).xyz) * w1 +\n           ( texture(uTexture, uv2 + vec2(0.0, d2 * texsize.w) ).xyz\n           + texture(uTexture, uv2 + vec2(0.0,-d2 * texsize.w) ).xyz) * w2;\n\n         blur.xyz *= wdiv;\n\n         float t = min(min(uv.x, uv.y), 1.0 - max(uv.x, uv.y));\n         t = sqrt(t);\n         t = ed1 + ed2 * clamp(t * ed3, 0.0, 1.0);\n         blur.xyz *= t;\n\n         fragColor = vec4(blur, 1.0);\n       }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture"), this.texsizeLocation = this.gl.getUniformLocation(this.shaderProgram, "texsize"), this.ed1Loc = this.gl.getUniformLocation(this.shaderProgram, "ed1"), this.ed2Loc = this.gl.getUniformLocation(this.shaderProgram, "ed2"), this.ed3Loc = this.gl.getUniformLocation(this.shaderProgram, "ed3"), this.wdsLocation = this.gl.getUniformLocation(this.shaderProgram, "wds"), this.wdivLoc = this.gl.getUniformLocation(this.shaderProgram, "wdiv")
              }
            }, {
              key: "renderQuadTexture",
              value: function(t, e, i) {
                this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.uniform1i(this.textureLoc, 0);
                var s = 0 === this.blurLevel ? e.b1ed : 0;
                this.gl.uniform4fv(this.texsizeLocation, [i[0], i[1], 1 / i[0], 1 / i[1]]), this.gl.uniform1f(this.ed1Loc, 1 - s), this.gl.uniform1f(this.ed2Loc, s), this.gl.uniform1f(this.ed3Loc, 5), this.gl.uniform4fv(this.wdsLocation, this.wds), this.gl.uniform1f(this.wdivLoc, this.wDiv), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/shaders/comp.js":
        /*!***************************************!*\
          !*** ./src/rendering/shaders/comp.js ***!
          \***************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ./shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i, r) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.noise = i, this.image = r, this.mesh_width = a.mesh_width, this.mesh_height = a.mesh_height, this.texsizeX = a.texsizeX, this.texsizeY = a.texsizeY, this.aspectx = a.aspectx, this.aspecty = a.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.compWidth = 32, this.compHeight = 24, this.buildPositions(), this.indexBuf = e.createBuffer(), this.positionVertexBuf = this.gl.createBuffer(), this.compColorVertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader(), this.mainSampler = this.gl.createSampler(), this.mainSamplerFW = this.gl.createSampler(), this.mainSamplerFC = this.gl.createSampler(), this.mainSamplerPW = this.gl.createSampler(), this.mainSamplerPC = this.gl.createSampler(), e.samplerParameteri(this.mainSampler, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.samplerParameteri(this.mainSampler, e.TEXTURE_MAG_FILTER, e.LINEAR), e.samplerParameteri(this.mainSampler, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.mainSampler, e.TEXTURE_WRAP_T, e.REPEAT), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_MAG_FILTER, e.LINEAR), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_WRAP_T, e.REPEAT), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_MAG_FILTER, e.LINEAR), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_MAG_FILTER, e.NEAREST), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_WRAP_T, e.REPEAT), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_MAG_FILTER, e.NEAREST), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
            }
            var e, i, a;
            return e = t, i = [{
              key: "buildPositions",
              value: function() {
                for (var t = this.compWidth, e = this.compHeight, i = t + 1, s = e + 1, r = 2 / t, a = 2 / e, h = [], o = 0; o < s; o++)
                  for (var n = o * a - 1, l = 0; l < i; l++) {
                    var u = l * r - 1;
                    h.push(u, -n, 0)
                  }
                for (var m = [], c = 0; c < e; c++)
                  for (var g = 0; g < t; g++) {
                    var f = g + i * c,
                      A = g + i * (c + 1),
                      d = g + 1 + i * (c + 1),
                      v = g + 1 + i * c;
                    m.push(f, A, v), m.push(A, d, v)
                  }
                this.vertices = new Float32Array(h), this.indices = new Uint16Array(m)
              }
            }, {
              key: "updateGlobals",
              value: function(t) {
                this.mesh_width = t.mesh_width, this.mesh_height = t.mesh_height, this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.buildPositions()
              }
            }, {
              key: "createShader",
              value: function() {
                var t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (0 === i.length) t = "float orient_horiz = mod(echo_orientation, 2.0);\n                        float orient_x = (orient_horiz != 0.0) ? -1.0 : 1.0;\n                        float orient_y = (echo_orientation >= 2.0) ? -1.0 : 1.0;\n                        vec2 uv_echo = ((uv - 0.5) *\n                                        (1.0 / echo_zoom) *\n                                        vec2(orient_x, orient_y)) + 0.5;\n\n                        ret = mix(texture(sampler_main, uv).rgb,\n                                  texture(sampler_main, uv_echo).rgb,\n                                  echo_alpha);\n\n                        ret *= gammaAdj;\n\n                        if(fShader >= 1.0) {\n                          ret *= hue_shader;\n                        } else if(fShader > 0.001) {\n                          ret *= (1.0 - fShader) + (fShader * hue_shader);\n                        }\n\n                        if(brighten != 0) ret = sqrt(ret);\n                        if(darken != 0) ret = ret*ret;\n                        if(solarize != 0) ret = ret * (1.0 - ret) * 4.0;\n                        if(invert != 0) ret = 1.0 - ret;", e = "";
                else {
                  var r = s.default.getShaderParts(i);
                  e = r[0], t = r[1]
                }
                t = (t = t.replace(/texture2D/g, "texture")).replace(/texture3D/g, "texture"), this.userTextures = s.default.getUserSamplers(e), this.shaderProgram = this.gl.createProgram();
                var a = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(a, "#version 300 es\n                                      const vec2 halfmad = vec2(0.5);\n                                      in vec2 aPos;\n                                      in vec4 aCompColor;\n                                      out vec2 vUv;\n                                      out vec4 vColor;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos, 0.0, 1.0);\n                                        vUv = aPos * halfmad + halfmad;\n                                        vColor = aCompColor;\n                                      }"), this.gl.compileShader(a);
                var h = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(h, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      precision mediump sampler3D;\n\n                                      vec3 lum(vec3 v){\n                                          return vec3(dot(v, vec3(0.32,0.49,0.29)));\n                                      }\n\n                                      in vec2 vUv;\n                                      in vec4 vColor;\n                                      out vec4 fragColor;\n                                      uniform sampler2D sampler_main;\n                                      uniform sampler2D sampler_fw_main;\n                                      uniform sampler2D sampler_fc_main;\n                                      uniform sampler2D sampler_pw_main;\n                                      uniform sampler2D sampler_pc_main;\n                                      uniform sampler2D sampler_blur1;\n                                      uniform sampler2D sampler_blur2;\n                                      uniform sampler2D sampler_blur3;\n                                      uniform sampler2D sampler_noise_lq;\n                                      uniform sampler2D sampler_noise_lq_lite;\n                                      uniform sampler2D sampler_noise_mq;\n                                      uniform sampler2D sampler_noise_hq;\n                                      uniform sampler2D sampler_pw_noise_lq;\n                                      uniform sampler3D sampler_noisevol_lq;\n                                      uniform sampler3D sampler_noisevol_hq;\n\n                                      uniform float time;\n                                      uniform float gammaAdj;\n                                      uniform float echo_zoom;\n                                      uniform float echo_alpha;\n                                      uniform float echo_orientation;\n                                      uniform int invert;\n                                      uniform int brighten;\n                                      uniform int darken;\n                                      uniform int solarize;\n                                      uniform vec2 resolution;\n                                      uniform vec4 aspect;\n                                      uniform vec4 texsize;\n                                      uniform vec4 texsize_noise_lq;\n                                      uniform vec4 texsize_noise_mq;\n                                      uniform vec4 texsize_noise_hq;\n                                      uniform vec4 texsize_noise_lq_lite;\n                                      uniform vec4 texsize_noisevol_lq;\n                                      uniform vec4 texsize_noisevol_hq;\n\n                                      uniform float bass;\n                                      uniform float mid;\n                                      uniform float treb;\n                                      uniform float vol;\n                                      uniform float bass_att;\n                                      uniform float mid_att;\n                                      uniform float treb_att;\n                                      uniform float vol_att;\n\n                                      uniform float frame;\n                                      uniform float fps;\n\n                                      uniform vec4 _qa;\n                                      uniform vec4 _qb;\n                                      uniform vec4 _qc;\n                                      uniform vec4 _qd;\n                                      uniform vec4 _qe;\n                                      uniform vec4 _qf;\n                                      uniform vec4 _qg;\n                                      uniform vec4 _qh;\n\n                                      #define q1 _qa.x\n                                      #define q2 _qa.y\n                                      #define q3 _qa.z\n                                      #define q4 _qa.w\n                                      #define q5 _qb.x\n                                      #define q6 _qb.y\n                                      #define q7 _qb.z\n                                      #define q8 _qb.w\n                                      #define q9 _qc.x\n                                      #define q10 _qc.y\n                                      #define q11 _qc.z\n                                      #define q12 _qc.w\n                                      #define q13 _qd.x\n                                      #define q14 _qd.y\n                                      #define q15 _qd.z\n                                      #define q16 _qd.w\n                                      #define q17 _qe.x\n                                      #define q18 _qe.y\n                                      #define q19 _qe.z\n                                      #define q20 _qe.w\n                                      #define q21 _qf.x\n                                      #define q22 _qf.y\n                                      #define q23 _qf.z\n                                      #define q24 _qf.w\n                                      #define q25 _qg.x\n                                      #define q26 _qg.y\n                                      #define q27 _qg.z\n                                      #define q28 _qg.w\n                                      #define q29 _qh.x\n                                      #define q30 _qh.y\n                                      #define q31 _qh.z\n                                      #define q32 _qh.w\n\n                                      uniform vec4 slow_roam_cos;\n                                      uniform vec4 roam_cos;\n                                      uniform vec4 slow_roam_sin;\n                                      uniform vec4 roam_sin;\n\n                                      uniform float blur1_min;\n                                      uniform float blur1_max;\n                                      uniform float blur2_min;\n                                      uniform float blur2_max;\n                                      uniform float blur3_min;\n                                      uniform float blur3_max;\n\n                                      uniform float scale1;\n                                      uniform float scale2;\n                                      uniform float scale3;\n                                      uniform float bias1;\n                                      uniform float bias2;\n                                      uniform float bias3;\n\n                                      uniform vec4 rand_frame;\n                                      uniform vec4 rand_preset;\n\n                                      uniform float fShader;\n\n                                      float PI = ").concat(Math.PI, ";\n\n                                      ").concat(e, "\n\n                                      void main(void) {\n                                        vec3 ret;\n                                        vec2 uv = vUv;\n                                        vec2 uv_orig = vUv;\n                                        uv.y = 1.0 - uv.y;\n                                        uv_orig.y = 1.0 - uv_orig.y;\n                                        float rad = length(uv - 0.5);\n                                        float ang = atan(uv.x - 0.5, uv.y - 0.5);\n                                        vec3 hue_shader = vColor.rgb;\n\n                                        ").concat(t, "\n\n                                        fragColor = vec4(ret, vColor.a);\n                                      }")), this.gl.compileShader(h), this.gl.attachShader(this.shaderProgram, a), this.gl.attachShader(this.shaderProgram, h), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.compColorLocation = this.gl.getAttribLocation(this.shaderProgram, "aCompColor"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_main"), this.textureFWLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_fw_main"), this.textureFCLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_fc_main"), this.texturePWLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_pw_main"), this.texturePCLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_pc_main"), this.blurTexture1Loc = this.gl.getUniformLocation(this.shaderProgram, "sampler_blur1"), this.blurTexture2Loc = this.gl.getUniformLocation(this.shaderProgram, "sampler_blur2"), this.blurTexture3Loc = this.gl.getUniformLocation(this.shaderProgram, "sampler_blur3"), this.noiseLQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_lq"), this.noiseMQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_mq"), this.noiseHQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_hq"), this.noiseLQLiteLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_lq_lite"), this.noisePointLQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_pw_noise_lq"), this.noiseVolLQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noisevol_lq"), this.noiseVolHQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noisevol_hq"), this.timeLoc = this.gl.getUniformLocation(this.shaderProgram, "time"), this.gammaAdjLoc = this.gl.getUniformLocation(this.shaderProgram, "gammaAdj"), this.echoZoomLoc = this.gl.getUniformLocation(this.shaderProgram, "echo_zoom"), this.echoAlphaLoc = this.gl.getUniformLocation(this.shaderProgram, "echo_alpha"), this.echoOrientationLoc = this.gl.getUniformLocation(this.shaderProgram, "echo_orientation"), this.invertLoc = this.gl.getUniformLocation(this.shaderProgram, "invert"), this.brightenLoc = this.gl.getUniformLocation(this.shaderProgram, "brighten"), this.darkenLoc = this.gl.getUniformLocation(this.shaderProgram, "darken"), this.solarizeLoc = this.gl.getUniformLocation(this.shaderProgram, "solarize"), this.texsizeLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize"), this.texsizeNoiseLQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_lq"), this.texsizeNoiseMQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_mq"), this.texsizeNoiseHQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_hq"), this.texsizeNoiseLQLiteLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_lq_lite"), this.texsizeNoiseVolLQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noisevol_lq"), this.texsizeNoiseVolHQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noisevol_hq"), this.resolutionLoc = this.gl.getUniformLocation(this.shaderProgram, "resolution"), this.aspectLoc = this.gl.getUniformLocation(this.shaderProgram, "aspect"), this.bassLoc = this.gl.getUniformLocation(this.shaderProgram, "bass"), this.midLoc = this.gl.getUniformLocation(this.shaderProgram, "mid"), this.trebLoc = this.gl.getUniformLocation(this.shaderProgram, "treb"), this.volLoc = this.gl.getUniformLocation(this.shaderProgram, "vol"), this.bassAttLoc = this.gl.getUniformLocation(this.shaderProgram, "bass_att"), this.midAttLoc = this.gl.getUniformLocation(this.shaderProgram, "mid_att"), this.trebAttLoc = this.gl.getUniformLocation(this.shaderProgram, "treb_att"), this.volAttLoc = this.gl.getUniformLocation(this.shaderProgram, "vol_att"), this.frameLoc = this.gl.getUniformLocation(this.shaderProgram, "frame"), this.fpsLoc = this.gl.getUniformLocation(this.shaderProgram, "fps"), this.blur1MinLoc = this.gl.getUniformLocation(this.shaderProgram, "blur1_min"), this.blur1MaxLoc = this.gl.getUniformLocation(this.shaderProgram, "blur1_max"), this.blur2MinLoc = this.gl.getUniformLocation(this.shaderProgram, "blur2_min"), this.blur2MaxLoc = this.gl.getUniformLocation(this.shaderProgram, "blur2_max"), this.blur3MinLoc = this.gl.getUniformLocation(this.shaderProgram, "blur3_min"), this.blur3MaxLoc = this.gl.getUniformLocation(this.shaderProgram, "blur3_max"), this.scale1Loc = this.gl.getUniformLocation(this.shaderProgram, "scale1"), this.scale2Loc = this.gl.getUniformLocation(this.shaderProgram, "scale2"), this.scale3Loc = this.gl.getUniformLocation(this.shaderProgram, "scale3"), this.bias1Loc = this.gl.getUniformLocation(this.shaderProgram, "bias1"), this.bias2Loc = this.gl.getUniformLocation(this.shaderProgram, "bias2"), this.bias3Loc = this.gl.getUniformLocation(this.shaderProgram, "bias3"), this.randPresetLoc = this.gl.getUniformLocation(this.shaderProgram, "rand_preset"), this.randFrameLoc = this.gl.getUniformLocation(this.shaderProgram, "rand_frame"), this.fShaderLoc = this.gl.getUniformLocation(this.shaderProgram, "fShader"), this.qaLoc = this.gl.getUniformLocation(this.shaderProgram, "_qa"), this.qbLoc = this.gl.getUniformLocation(this.shaderProgram, "_qb"), this.qcLoc = this.gl.getUniformLocation(this.shaderProgram, "_qc"), this.qdLoc = this.gl.getUniformLocation(this.shaderProgram, "_qd"), this.qeLoc = this.gl.getUniformLocation(this.shaderProgram, "_qe"), this.qfLoc = this.gl.getUniformLocation(this.shaderProgram, "_qf"), this.qgLoc = this.gl.getUniformLocation(this.shaderProgram, "_qg"), this.qhLoc = this.gl.getUniformLocation(this.shaderProgram, "_qh"), this.slowRoamCosLoc = this.gl.getUniformLocation(this.shaderProgram, "slow_roam_cos"), this.roamCosLoc = this.gl.getUniformLocation(this.shaderProgram, "roam_cos"), this.slowRoamSinLoc = this.gl.getUniformLocation(this.shaderProgram, "slow_roam_sin"), this.roamSinLoc = this.gl.getUniformLocation(this.shaderProgram, "roam_sin");
                for (var o = 0; o < this.userTextures.length; o++) {
                  var n = this.userTextures[o];
                  n.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_".concat(n.sampler))
                }
              }
            }, {
              key: "updateShader",
              value: function(t) {
                this.createShader(t)
              }
            }, {
              key: "bindBlurVals",
              value: function(t, e) {
                var i = t[0],
                  s = t[1],
                  r = t[2],
                  a = e[0],
                  h = e[1],
                  o = e[2],
                  n = a - i,
                  l = i,
                  u = h - s,
                  m = s,
                  c = o - r,
                  g = r;
                this.gl.uniform1f(this.blur1MinLoc, i), this.gl.uniform1f(this.blur1MaxLoc, a), this.gl.uniform1f(this.blur2MinLoc, s), this.gl.uniform1f(this.blur2MaxLoc, h), this.gl.uniform1f(this.blur3MinLoc, r), this.gl.uniform1f(this.blur3MaxLoc, o), this.gl.uniform1f(this.scale1Loc, n), this.gl.uniform1f(this.scale2Loc, u), this.gl.uniform1f(this.scale3Loc, c), this.gl.uniform1f(this.bias1Loc, l), this.gl.uniform1f(this.bias2Loc, m), this.gl.uniform1f(this.bias3Loc, g)
              }
            }, {
              key: "generateCompColors",
              value: function(e, i, s) {
                for (var r = t.generateHueBase(i), a = this.compWidth + 1, h = this.compHeight + 1, o = new Float32Array(a * h * 4), n = 0, l = 0; l < h; l++)
                  for (var u = 0; u < a; u++) {
                    for (var m = u / this.compWidth, c = l / this.compHeight, g = [1, 1, 1], f = 0; f < 3; f++) g[f] = r[0 + f] * m * c + r[3 + f] * (1 - m) * c + r[6 + f] * m * (1 - c) + r[9 + f] * (1 - m) * (1 - c);
                    var A = 1;
                    if (e) {
                      m *= this.mesh_width + 1, c *= this.mesh_height + 1, m = Math.clamp(m, 0, this.mesh_width - 1), c = Math.clamp(c, 0, this.mesh_height - 1);
                      var d = Math.floor(m),
                        v = Math.floor(c),
                        p = m - d,
                        _ = c - v;
                      A = s[4 * (v * (this.mesh_width + 1) + d) + 3] * (1 - p) * (1 - _) + s[4 * (v * (this.mesh_width + 1) + (d + 1)) + 3] * p * (1 - _) + s[4 * ((v + 1) * (this.mesh_width + 1) + d) + 3] * (1 - p) * _ + s[4 * ((v + 1) * (this.mesh_width + 1) + (d + 1)) + 3] * p * _
                    }
                    o[n + 0] = g[0], o[n + 1] = g[1], o[n + 2] = g[2], o[n + 3] = A, n += 4
                  }
                return o
              }
            }, {
              key: "renderQuadTexture",
              value: function(t, e, i, s, r, a, h, o, n) {
                var l = this.generateCompColors(t, o, n);
                this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuf), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.indices, this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertices, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.compColorVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, l, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.compColorLocation, 4, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.compColorLocation);
                var u = 0 !== o.wrap ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
                this.gl.samplerParameteri(this.mainSampler, this.gl.TEXTURE_WRAP_S, u), this.gl.samplerParameteri(this.mainSampler, this.gl.TEXTURE_WRAP_T, u), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(0, this.mainSampler), this.gl.uniform1i(this.textureLoc, 0), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(1, this.mainSamplerFW), this.gl.uniform1i(this.textureFWLoc, 1), this.gl.activeTexture(this.gl.TEXTURE2), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(2, this.mainSamplerFC), this.gl.uniform1i(this.textureFCLoc, 2), this.gl.activeTexture(this.gl.TEXTURE3), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(3, this.mainSamplerPW), this.gl.uniform1i(this.texturePWLoc, 3), this.gl.activeTexture(this.gl.TEXTURE4), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(4, this.mainSamplerPC), this.gl.uniform1i(this.texturePCLoc, 4), this.gl.activeTexture(this.gl.TEXTURE5), this.gl.bindTexture(this.gl.TEXTURE_2D, i), this.gl.uniform1i(this.blurTexture1Loc, 5), this.gl.activeTexture(this.gl.TEXTURE6), this.gl.bindTexture(this.gl.TEXTURE_2D, s), this.gl.uniform1i(this.blurTexture2Loc, 6), this.gl.activeTexture(this.gl.TEXTURE7), this.gl.bindTexture(this.gl.TEXTURE_2D, r), this.gl.uniform1i(this.blurTexture3Loc, 7), this.gl.activeTexture(this.gl.TEXTURE8), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ), this.gl.uniform1i(this.noiseLQLoc, 8), this.gl.activeTexture(this.gl.TEXTURE9), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexMQ), this.gl.uniform1i(this.noiseMQLoc, 9), this.gl.activeTexture(this.gl.TEXTURE10), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexHQ), this.gl.uniform1i(this.noiseHQLoc, 10), this.gl.activeTexture(this.gl.TEXTURE11), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQLite), this.gl.uniform1i(this.noiseLQLiteLoc, 11), this.gl.activeTexture(this.gl.TEXTURE12), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ), this.gl.bindSampler(12, this.noise.noiseTexPointLQ), this.gl.uniform1i(this.noisePointLQLoc, 12), this.gl.activeTexture(this.gl.TEXTURE13), this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolLQ), this.gl.uniform1i(this.noiseVolLQLoc, 13), this.gl.activeTexture(this.gl.TEXTURE14), this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolHQ), this.gl.uniform1i(this.noiseVolHQLoc, 14);
                for (var m = 0; m < this.userTextures.length; m++) {
                  var c = this.userTextures[m];
                  this.gl.activeTexture(this.gl.TEXTURE15 + m), this.gl.bindTexture(this.gl.TEXTURE_2D, this.image.getTexture(c.sampler)), this.gl.uniform1i(c.textureLoc, 15 + m)
                }
                this.gl.uniform1f(this.timeLoc, o.time), this.gl.uniform1f(this.gammaAdjLoc, o.gammaadj), this.gl.uniform1f(this.echoZoomLoc, o.echo_zoom), this.gl.uniform1f(this.echoAlphaLoc, o.echo_alpha), this.gl.uniform1f(this.echoOrientationLoc, o.echo_orient), this.gl.uniform1i(this.invertLoc, o.invert), this.gl.uniform1i(this.brightenLoc, o.brighten), this.gl.uniform1i(this.darkenLoc, o.darken), this.gl.uniform1i(this.solarizeLoc, o.solarize), this.gl.uniform2fv(this.resolutionLoc, [this.texsizeX, this.texsizeY]), this.gl.uniform4fv(this.aspectLoc, [this.aspectx, this.aspecty, this.invAspectx, this.invAspecty]), this.gl.uniform4fv(this.texsizeLoc, new Float32Array([this.texsizeX, this.texsizeY, 1 / this.texsizeX, 1 / this.texsizeY])), this.gl.uniform4fv(this.texsizeNoiseLQLoc, [256, 256, 1 / 256, 1 / 256]), this.gl.uniform4fv(this.texsizeNoiseMQLoc, [256, 256, 1 / 256, 1 / 256]), this.gl.uniform4fv(this.texsizeNoiseHQLoc, [256, 256, 1 / 256, 1 / 256]), this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc, [32, 32, 1 / 32, 1 / 32]), this.gl.uniform4fv(this.texsizeNoiseVolLQLoc, [32, 32, 1 / 32, 1 / 32]), this.gl.uniform4fv(this.texsizeNoiseVolHQLoc, [32, 32, 1 / 32, 1 / 32]), this.gl.uniform1f(this.bassLoc, o.bass), this.gl.uniform1f(this.midLoc, o.mid), this.gl.uniform1f(this.trebLoc, o.treb), this.gl.uniform1f(this.volLoc, (o.bass + o.mid + o.treb) / 3), this.gl.uniform1f(this.bassAttLoc, o.bass_att), this.gl.uniform1f(this.midAttLoc, o.mid_att), this.gl.uniform1f(this.trebAttLoc, o.treb_att), this.gl.uniform1f(this.volAttLoc, (o.bass_att + o.mid_att + o.treb_att) / 3), this.gl.uniform1f(this.frameLoc, o.frame), this.gl.uniform1f(this.fpsLoc, o.fps), this.gl.uniform4fv(this.randPresetLoc, o.rand_preset), this.gl.uniform4fv(this.randFrameLoc, new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()])), this.gl.uniform1f(this.fShaderLoc, o.fshader), this.gl.uniform4fv(this.qaLoc, new Float32Array([o.q1 || 0, o.q2 || 0, o.q3 || 0, o.q4 || 0])), this.gl.uniform4fv(this.qbLoc, new Float32Array([o.q5 || 0, o.q6 || 0, o.q7 || 0, o.q8 || 0])), this.gl.uniform4fv(this.qcLoc, new Float32Array([o.q9 || 0, o.q10 || 0, o.q11 || 0, o.q12 || 0])), this.gl.uniform4fv(this.qdLoc, new Float32Array([o.q13 || 0, o.q14 || 0, o.q15 || 0, o.q16 || 0])), this.gl.uniform4fv(this.qeLoc, new Float32Array([o.q17 || 0, o.q18 || 0, o.q19 || 0, o.q20 || 0])), this.gl.uniform4fv(this.qfLoc, new Float32Array([o.q21 || 0, o.q22 || 0, o.q23 || 0, o.q24 || 0])), this.gl.uniform4fv(this.qgLoc, new Float32Array([o.q25 || 0, o.q26 || 0, o.q27 || 0, o.q28 || 0])), this.gl.uniform4fv(this.qhLoc, new Float32Array([o.q29 || 0, o.q30 || 0, o.q31 || 0, o.q32 || 0])), this.gl.uniform4fv(this.slowRoamCosLoc, [.5 + .5 * Math.cos(.005 * o.time), .5 + .5 * Math.cos(.008 * o.time), .5 + .5 * Math.cos(.013 * o.time), .5 + .5 * Math.cos(.022 * o.time)]), this.gl.uniform4fv(this.roamCosLoc, [.5 + .5 * Math.cos(.3 * o.time), .5 + .5 * Math.cos(1.3 * o.time), .5 + .5 * Math.cos(5 * o.time), .5 + .5 * Math.cos(20 * o.time)]), this.gl.uniform4fv(this.slowRoamSinLoc, [.5 + .5 * Math.sin(.005 * o.time), .5 + .5 * Math.sin(.008 * o.time), .5 + .5 * Math.sin(.013 * o.time), .5 + .5 * Math.sin(.022 * o.time)]), this.gl.uniform4fv(this.roamSinLoc, [.5 + .5 * Math.sin(.3 * o.time), .5 + .5 * Math.sin(1.3 * o.time), .5 + .5 * Math.sin(5 * o.time), .5 + .5 * Math.sin(20 * o.time)]), this.bindBlurVals(a, h), t ? this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.disable(this.gl.BLEND), this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_SHORT, 0), t || this.gl.enable(this.gl.BLEND)
              }
            }], a = [{
              key: "generateHueBase",
              value: function(t) {
                for (var e = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), i = 0; i < 4; i++) {
                  e[3 * i + 0] = .6 + .3 * Math.sin(30 * t.time * .0143 + 3 + 21 * i + t.rand_start[3]), e[3 * i + 1] = .6 + .3 * Math.sin(30 * t.time * .0107 + 1 + 13 * i + t.rand_start[1]), e[3 * i + 2] = .6 + .3 * Math.sin(30 * t.time * .0129 + 6 + 9 * i + t.rand_start[2]);
                  for (var s = Math.max(e[3 * i], e[3 * i + 1], e[3 * i + 2]), r = 0; r < 3; r++) e[3 * i + r] = e[3 * i + r] / s, e[3 * i + r] = .5 + .5 * e[3 * i + r]
                }
                return e
              }
            }], i && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/shaders/output.js":
        /*!*****************************************!*\
          !*** ./src/rendering/shaders/output.js ***!
          \*****************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ./shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.textureRatio = i.textureRatio, this.texsizeX = i.texsizeX, this.texsizeY = i.texsizeY, this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), this.vertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.useFXAA() ? this.createFXAAShader() : this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "useFXAA",
              value: function() {
                return this.textureRatio <= 1
              }
            }, {
              key: "updateGlobals",
              value: function(t) {
                this.textureRatio = t.textureRatio, this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.gl.deleteProgram(this.shaderProgram), this.useFXAA() ? this.createFXAAShader() : this.createShader()
              }
            }, {
              key: "createFXAAShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n       const vec2 halfmad = vec2(0.5);\n       in vec2 aPos;\n       out vec2 v_rgbM;\n       out vec2 v_rgbNW;\n       out vec2 v_rgbNE;\n       out vec2 v_rgbSW;\n       out vec2 v_rgbSE;\n       uniform vec4 texsize;\n       void main(void) {\n         gl_Position = vec4(aPos, 0.0, 1.0);\n\n         v_rgbM = aPos * halfmad + halfmad;\n         v_rgbNW = v_rgbM + (vec2(-1.0, -1.0) * texsize.zx);\n         v_rgbNE = v_rgbM + (vec2(1.0, -1.0) * texsize.zx);\n         v_rgbSW = v_rgbM + (vec2(-1.0, 1.0) * texsize.zx);\n         v_rgbSE = v_rgbM + (vec2(1.0, 1.0) * texsize.zx);\n       }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n       precision ".concat(this.floatPrecision, " float;\n       precision highp int;\n       precision mediump sampler2D;\n\n       in vec2 v_rgbM;\n       in vec2 v_rgbNW;\n       in vec2 v_rgbNE;\n       in vec2 v_rgbSW;\n       in vec2 v_rgbSE;\n       out vec4 fragColor;\n       uniform vec4 texsize;\n       uniform sampler2D uTexture;\n\n       #ifndef FXAA_REDUCE_MIN\n         #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n       #endif\n       #ifndef FXAA_REDUCE_MUL\n         #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n       #endif\n       #ifndef FXAA_SPAN_MAX\n         #define FXAA_SPAN_MAX     8.0\n       #endif\n\n       void main(void) {\n         vec4 color;\n         vec3 rgbNW = textureLod(uTexture, v_rgbNW, 0.0).xyz;\n         vec3 rgbNE = textureLod(uTexture, v_rgbNE, 0.0).xyz;\n         vec3 rgbSW = textureLod(uTexture, v_rgbSW, 0.0).xyz;\n         vec3 rgbSE = textureLod(uTexture, v_rgbSE, 0.0).xyz;\n         vec3 rgbM  = textureLod(uTexture, v_rgbM, 0.0).xyz;\n         vec3 luma = vec3(0.299, 0.587, 0.114);\n         float lumaNW = dot(rgbNW, luma);\n         float lumaNE = dot(rgbNE, luma);\n         float lumaSW = dot(rgbSW, luma);\n         float lumaSE = dot(rgbSE, luma);\n         float lumaM  = dot(rgbM,  luma);\n         float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n         float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n         mediump vec2 dir;\n         dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n         dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n         float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                               (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n         float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n         dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n                   max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                   dir * rcpDirMin)) * texsize.zw;\n\n         vec3 rgbA = 0.5 * (\n             textureLod(uTexture, v_rgbM + dir * (1.0 / 3.0 - 0.5), 0.0).xyz +\n             textureLod(uTexture, v_rgbM + dir * (2.0 / 3.0 - 0.5), 0.0).xyz);\n         vec3 rgbB = rgbA * 0.5 + 0.25 * (\n             textureLod(uTexture, v_rgbM + dir * -0.5, 0.0).xyz +\n             textureLod(uTexture, v_rgbM + dir * 0.5, 0.0).xyz);\n\n         float lumaB = dot(rgbB, luma);\n         if ((lumaB < lumaMin) || (lumaB > lumaMax))\n           color = vec4(rgbA, 1.0);\n         else\n           color = vec4(rgbB, 1.0);\n\n         fragColor = color;\n       }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture"), this.texsizeLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize")
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n       const vec2 halfmad = vec2(0.5);\n       in vec2 aPos;\n       out vec2 uv;\n       void main(void) {\n         gl_Position = vec4(aPos, 0.0, 1.0);\n         uv = aPos * halfmad + halfmad;\n       }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n       precision ".concat(this.floatPrecision, " float;\n       precision highp int;\n       precision mediump sampler2D;\n\n       in vec2 uv;\n       out vec4 fragColor;\n       uniform sampler2D uTexture;\n\n       void main(void) {\n         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);\n       }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture")
              }
            }, {
              key: "renderQuadTexture",
              value: function(t) {
                this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.uniform1i(this.textureLoc, 0), this.useFXAA() && this.gl.uniform4fv(this.texsizeLoc, new Float32Array([this.texsizeX, this.texsizeY, 1 / this.texsizeX, 1 / this.texsizeY])), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/shaders/resample.js":
        /*!*******************************************!*\
          !*** ./src/rendering/shaders/resample.js ***!
          \*******************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ./shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), this.vertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n       const vec2 halfmad = vec2(0.5);\n       in vec2 aPos;\n       out vec2 uv;\n       void main(void) {\n         gl_Position = vec4(aPos, 0.0, 1.0);\n         uv = aPos * halfmad + halfmad;\n       }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n       precision ".concat(this.floatPrecision, " float;\n       precision highp int;\n       precision mediump sampler2D;\n\n       in vec2 uv;\n       out vec4 fragColor;\n       uniform sampler2D uTexture;\n\n       void main(void) {\n         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);\n       }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture")
              }
            }, {
              key: "renderQuadTexture",
              value: function(t) {
                this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.uniform1i(this.textureLoc, 0), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/shaders/shaderUtils.js":
        /*!**********************************************!*\
          !*** ./src/rendering/shaders/shaderUtils.js ***!
          \**********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return h
          }));
          var r = /uniform sampler2D sampler_(?:.+?);/g,
            a = /uniform sampler2D sampler_(.+?);/,
            h = function() {
              function t() {
                ! function(t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
              }
              var e, i, h;
              return e = t, h = [{
                key: "getShaderParts",
                value: function(t) {
                  var e = t.indexOf("shader_body");
                  if (t && e > -1) {
                    var i = t.substring(0, e),
                      s = t.substring(e),
                      r = s.indexOf("{"),
                      a = s.lastIndexOf("}");
                    return [i, s.substring(r + 1, a)]
                  }
                  return ["", t]
                }
              }, {
                key: "getFragmentFloatPrecision",
                value: function(t) {
                  return t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0 ? "highp" : t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
                }
              }, {
                key: "getUserSamplers",
                value: function(t) {
                  var e = [],
                    i = t.match(r);
                  if (i && i.length > 0)
                    for (var s = 0; s < i.length; s++) {
                      var h = i[s].match(a);
                      if (h && h.length > 0) {
                        var o = h[1];
                        e.push({
                          sampler: o
                        })
                      }
                    }
                  return e
                }
              }], (i = null) && s(e.prototype, i), h && s(e, h), t
            }()
        },
      "./src/rendering/shaders/warp.js":
        /*!***************************************!*\
          !*** ./src/rendering/shaders/warp.js ***!
          \***************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ./shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i, r) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.noise = i, this.image = r, this.texsizeX = a.texsizeX, this.texsizeY = a.texsizeY, this.mesh_width = a.mesh_width, this.mesh_height = a.mesh_height, this.aspectx = a.aspectx, this.aspecty = a.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.buildPositions(), this.indexBuf = e.createBuffer(), this.positionVertexBuf = this.gl.createBuffer(), this.warpUvVertexBuf = this.gl.createBuffer(), this.warpColorVertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader(), this.mainSampler = this.gl.createSampler(), this.mainSamplerFW = this.gl.createSampler(), this.mainSamplerFC = this.gl.createSampler(), this.mainSamplerPW = this.gl.createSampler(), this.mainSamplerPC = this.gl.createSampler(), e.samplerParameteri(this.mainSampler, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.samplerParameteri(this.mainSampler, e.TEXTURE_MAG_FILTER, e.LINEAR), e.samplerParameteri(this.mainSampler, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.mainSampler, e.TEXTURE_WRAP_T, e.REPEAT), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_MAG_FILTER, e.LINEAR), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.mainSamplerFW, e.TEXTURE_WRAP_T, e.REPEAT), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_MAG_FILTER, e.LINEAR), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.samplerParameteri(this.mainSamplerFC, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_MAG_FILTER, e.NEAREST), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_WRAP_S, e.REPEAT), e.samplerParameteri(this.mainSamplerPW, e.TEXTURE_WRAP_T, e.REPEAT), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_MIN_FILTER, e.NEAREST_MIPMAP_NEAREST), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_MAG_FILTER, e.NEAREST), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.samplerParameteri(this.mainSamplerPC, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
            }
            var e, i, a;
            return e = t, i = [{
              key: "buildPositions",
              value: function() {
                for (var t = this.mesh_width, e = this.mesh_height, i = t + 1, s = e + 1, r = 2 / t, a = 2 / e, h = [], o = 0; o < s; o++)
                  for (var n = o * a - 1, l = 0; l < i; l++) {
                    var u = l * r - 1;
                    h.push(u, -n, 0)
                  }
                for (var m = [], c = 0; c < e; c++)
                  for (var g = 0; g < t; g++) {
                    var f = g + i * c,
                      A = g + i * (c + 1),
                      d = g + 1 + i * (c + 1),
                      v = g + 1 + i * c;
                    m.push(f, A, v), m.push(A, d, v)
                  }
                this.vertices = new Float32Array(h), this.indices = new Uint16Array(m)
              }
            }, {
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.mesh_width = t.mesh_width, this.mesh_height = t.mesh_height, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.buildPositions()
              }
            }, {
              key: "createShader",
              value: function() {
                var t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (0 === i.length) t = "ret = texture(sampler_main, uv).rgb * decay;", e = "";
                else {
                  var r = s.default.getShaderParts(i);
                  e = r[0], t = r[1]
                }
                t = (t = t.replace(/texture2D/g, "texture")).replace(/texture3D/g, "texture"), this.userTextures = s.default.getUserSamplers(e), this.shaderProgram = this.gl.createProgram();
                var a = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(a, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      const vec2 halfmad = vec2(0.5);\n                                      in vec2 aPos;\n                                      in vec2 aWarpUv;\n                                      in vec4 aWarpColor;\n                                      out vec2 uv;\n                                      out vec2 uv_orig;\n                                      out vec4 vColor;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos, 0.0, 1.0);\n                                        uv_orig = aPos * halfmad + halfmad;\n                                        uv = aWarpUv;\n                                        vColor = aWarpColor;\n                                      }")), this.gl.compileShader(a);
                var h = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(h, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      precision mediump sampler3D;\n\n                                      in vec2 uv;\n                                      in vec2 uv_orig;\n                                      in vec4 vColor;\n                                      out vec4 fragColor;\n                                      uniform sampler2D sampler_main;\n                                      uniform sampler2D sampler_fw_main;\n                                      uniform sampler2D sampler_fc_main;\n                                      uniform sampler2D sampler_pw_main;\n                                      uniform sampler2D sampler_pc_main;\n                                      uniform sampler2D sampler_blur1;\n                                      uniform sampler2D sampler_blur2;\n                                      uniform sampler2D sampler_blur3;\n                                      uniform sampler2D sampler_noise_lq;\n                                      uniform sampler2D sampler_noise_lq_lite;\n                                      uniform sampler2D sampler_noise_mq;\n                                      uniform sampler2D sampler_noise_hq;\n                                      uniform sampler2D sampler_pw_noise_lq;\n                                      uniform sampler3D sampler_noisevol_lq;\n                                      uniform sampler3D sampler_noisevol_hq;\n                                      uniform float time;\n                                      uniform float decay;\n                                      uniform vec2 resolution;\n                                      uniform vec4 aspect;\n                                      uniform vec4 texsize;\n                                      uniform vec4 texsize_noise_lq;\n                                      uniform vec4 texsize_noise_mq;\n                                      uniform vec4 texsize_noise_hq;\n                                      uniform vec4 texsize_noise_lq_lite;\n                                      uniform vec4 texsize_noisevol_lq;\n                                      uniform vec4 texsize_noisevol_hq;\n\n                                      uniform float bass;\n                                      uniform float mid;\n                                      uniform float treb;\n                                      uniform float vol;\n                                      uniform float bass_att;\n                                      uniform float mid_att;\n                                      uniform float treb_att;\n                                      uniform float vol_att;\n\n                                      uniform float frame;\n                                      uniform float fps;\n\n                                      uniform vec4 _qa;\n                                      uniform vec4 _qb;\n                                      uniform vec4 _qc;\n                                      uniform vec4 _qd;\n                                      uniform vec4 _qe;\n                                      uniform vec4 _qf;\n                                      uniform vec4 _qg;\n                                      uniform vec4 _qh;\n\n                                      #define q1 _qa.x\n                                      #define q2 _qa.y\n                                      #define q3 _qa.z\n                                      #define q4 _qa.w\n                                      #define q5 _qb.x\n                                      #define q6 _qb.y\n                                      #define q7 _qb.z\n                                      #define q8 _qb.w\n                                      #define q9 _qc.x\n                                      #define q10 _qc.y\n                                      #define q11 _qc.z\n                                      #define q12 _qc.w\n                                      #define q13 _qd.x\n                                      #define q14 _qd.y\n                                      #define q15 _qd.z\n                                      #define q16 _qd.w\n                                      #define q17 _qe.x\n                                      #define q18 _qe.y\n                                      #define q19 _qe.z\n                                      #define q20 _qe.w\n                                      #define q21 _qf.x\n                                      #define q22 _qf.y\n                                      #define q23 _qf.z\n                                      #define q24 _qf.w\n                                      #define q25 _qg.x\n                                      #define q26 _qg.y\n                                      #define q27 _qg.z\n                                      #define q28 _qg.w\n                                      #define q29 _qh.x\n                                      #define q30 _qh.y\n                                      #define q31 _qh.z\n                                      #define q32 _qh.w\n\n                                      uniform vec4 slow_roam_cos;\n                                      uniform vec4 roam_cos;\n                                      uniform vec4 slow_roam_sin;\n                                      uniform vec4 roam_sin;\n\n                                      uniform float blur1_min;\n                                      uniform float blur1_max;\n                                      uniform float blur2_min;\n                                      uniform float blur2_max;\n                                      uniform float blur3_min;\n                                      uniform float blur3_max;\n\n                                      uniform float scale1;\n                                      uniform float scale2;\n                                      uniform float scale3;\n                                      uniform float bias1;\n                                      uniform float bias2;\n                                      uniform float bias3;\n\n                                      uniform vec4 rand_frame;\n                                      uniform vec4 rand_preset;\n\n                                      float PI = ").concat(Math.PI, ";\n\n                                      ").concat(e, "\n\n                                      void main(void) {\n                                        vec3 ret;\n                                        float rad = length(uv_orig - 0.5);\n                                        float ang = atan(uv_orig.x - 0.5, uv_orig.y - 0.5);\n\n                                        ").concat(t, "\n\n                                        fragColor = vec4(ret, 1.0) * vColor;\n                                      }")), this.gl.compileShader(h), this.gl.attachShader(this.shaderProgram, a), this.gl.attachShader(this.shaderProgram, h), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.warpUvLocation = this.gl.getAttribLocation(this.shaderProgram, "aWarpUv"), this.warpColorLocation = this.gl.getAttribLocation(this.shaderProgram, "aWarpColor"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_main"), this.textureFWLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_fw_main"), this.textureFCLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_fc_main"), this.texturePWLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_pw_main"), this.texturePCLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_pc_main"), this.blurTexture1Loc = this.gl.getUniformLocation(this.shaderProgram, "sampler_blur1"), this.blurTexture2Loc = this.gl.getUniformLocation(this.shaderProgram, "sampler_blur2"), this.blurTexture3Loc = this.gl.getUniformLocation(this.shaderProgram, "sampler_blur3"), this.noiseLQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_lq"), this.noiseMQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_mq"), this.noiseHQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_hq"), this.noiseLQLiteLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noise_lq_lite"), this.noisePointLQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_pw_noise_lq"), this.noiseVolLQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noisevol_lq"), this.noiseVolHQLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_noisevol_hq"), this.decayLoc = this.gl.getUniformLocation(this.shaderProgram, "decay"), this.texsizeLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize"), this.texsizeNoiseLQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_lq"), this.texsizeNoiseMQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_mq"), this.texsizeNoiseHQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_hq"), this.texsizeNoiseLQLiteLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noise_lq_lite"), this.texsizeNoiseVolLQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noisevol_lq"), this.texsizeNoiseVolHQLoc = this.gl.getUniformLocation(this.shaderProgram, "texsize_noisevol_hq"), this.resolutionLoc = this.gl.getUniformLocation(this.shaderProgram, "resolution"), this.aspectLoc = this.gl.getUniformLocation(this.shaderProgram, "aspect"), this.bassLoc = this.gl.getUniformLocation(this.shaderProgram, "bass"), this.midLoc = this.gl.getUniformLocation(this.shaderProgram, "mid"), this.trebLoc = this.gl.getUniformLocation(this.shaderProgram, "treb"), this.volLoc = this.gl.getUniformLocation(this.shaderProgram, "vol"), this.bassAttLoc = this.gl.getUniformLocation(this.shaderProgram, "bass_att"), this.midAttLoc = this.gl.getUniformLocation(this.shaderProgram, "mid_att"), this.trebAttLoc = this.gl.getUniformLocation(this.shaderProgram, "treb_att"), this.volAttLoc = this.gl.getUniformLocation(this.shaderProgram, "vol_att"), this.timeLoc = this.gl.getUniformLocation(this.shaderProgram, "time"), this.frameLoc = this.gl.getUniformLocation(this.shaderProgram, "frame"), this.fpsLoc = this.gl.getUniformLocation(this.shaderProgram, "fps"), this.blur1MinLoc = this.gl.getUniformLocation(this.shaderProgram, "blur1_min"), this.blur1MaxLoc = this.gl.getUniformLocation(this.shaderProgram, "blur1_max"), this.blur2MinLoc = this.gl.getUniformLocation(this.shaderProgram, "blur2_min"), this.blur2MaxLoc = this.gl.getUniformLocation(this.shaderProgram, "blur2_max"), this.blur3MinLoc = this.gl.getUniformLocation(this.shaderProgram, "blur3_min"), this.blur3MaxLoc = this.gl.getUniformLocation(this.shaderProgram, "blur3_max"), this.scale1Loc = this.gl.getUniformLocation(this.shaderProgram, "scale1"), this.scale2Loc = this.gl.getUniformLocation(this.shaderProgram, "scale2"), this.scale3Loc = this.gl.getUniformLocation(this.shaderProgram, "scale3"), this.bias1Loc = this.gl.getUniformLocation(this.shaderProgram, "bias1"), this.bias2Loc = this.gl.getUniformLocation(this.shaderProgram, "bias2"), this.bias3Loc = this.gl.getUniformLocation(this.shaderProgram, "bias3"), this.randPresetLoc = this.gl.getUniformLocation(this.shaderProgram, "rand_preset"), this.randFrameLoc = this.gl.getUniformLocation(this.shaderProgram, "rand_frame"), this.qaLoc = this.gl.getUniformLocation(this.shaderProgram, "_qa"), this.qbLoc = this.gl.getUniformLocation(this.shaderProgram, "_qb"), this.qcLoc = this.gl.getUniformLocation(this.shaderProgram, "_qc"), this.qdLoc = this.gl.getUniformLocation(this.shaderProgram, "_qd"), this.qeLoc = this.gl.getUniformLocation(this.shaderProgram, "_qe"), this.qfLoc = this.gl.getUniformLocation(this.shaderProgram, "_qf"), this.qgLoc = this.gl.getUniformLocation(this.shaderProgram, "_qg"), this.qhLoc = this.gl.getUniformLocation(this.shaderProgram, "_qh"), this.slowRoamCosLoc = this.gl.getUniformLocation(this.shaderProgram, "slow_roam_cos"), this.roamCosLoc = this.gl.getUniformLocation(this.shaderProgram, "roam_cos"), this.slowRoamSinLoc = this.gl.getUniformLocation(this.shaderProgram, "slow_roam_sin"), this.roamSinLoc = this.gl.getUniformLocation(this.shaderProgram, "roam_sin");
                for (var o = 0; o < this.userTextures.length; o++) {
                  var n = this.userTextures[o];
                  n.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "sampler_".concat(n.sampler))
                }
              }
            }, {
              key: "updateShader",
              value: function(t) {
                this.createShader(t)
              }
            }, {
              key: "bindBlurVals",
              value: function(t, e) {
                var i = t[0],
                  s = t[1],
                  r = t[2],
                  a = e[0],
                  h = e[1],
                  o = e[2],
                  n = a - i,
                  l = i,
                  u = h - s,
                  m = s,
                  c = o - r,
                  g = r;
                this.gl.uniform1f(this.blur1MinLoc, i), this.gl.uniform1f(this.blur1MaxLoc, a), this.gl.uniform1f(this.blur2MinLoc, s), this.gl.uniform1f(this.blur2MaxLoc, h), this.gl.uniform1f(this.blur3MinLoc, r), this.gl.uniform1f(this.blur3MaxLoc, o), this.gl.uniform1f(this.scale1Loc, n), this.gl.uniform1f(this.scale2Loc, u), this.gl.uniform1f(this.scale3Loc, c), this.gl.uniform1f(this.bias1Loc, l), this.gl.uniform1f(this.bias2Loc, m), this.gl.uniform1f(this.bias3Loc, g)
              }
            }, {
              key: "renderQuadTexture",
              value: function(t, e, i, s, r, a, h, o, n, l) {
                this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuf), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.indices, this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertices, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.warpUvVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, n, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.warpUvLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.warpUvLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.warpColorVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, l, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.warpColorLocation, 4, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.warpColorLocation);
                var u = 0 !== o.wrap ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
                this.gl.samplerParameteri(this.mainSampler, this.gl.TEXTURE_WRAP_S, u), this.gl.samplerParameteri(this.mainSampler, this.gl.TEXTURE_WRAP_T, u), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(0, this.mainSampler), this.gl.uniform1i(this.textureLoc, 0), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(1, this.mainSamplerFW), this.gl.uniform1i(this.textureFWLoc, 1), this.gl.activeTexture(this.gl.TEXTURE2), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(2, this.mainSamplerFC), this.gl.uniform1i(this.textureFCLoc, 2), this.gl.activeTexture(this.gl.TEXTURE3), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(3, this.mainSamplerPW), this.gl.uniform1i(this.texturePWLoc, 3), this.gl.activeTexture(this.gl.TEXTURE4), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.bindSampler(4, this.mainSamplerPC), this.gl.uniform1i(this.texturePCLoc, 4), this.gl.activeTexture(this.gl.TEXTURE5), this.gl.bindTexture(this.gl.TEXTURE_2D, i), this.gl.uniform1i(this.blurTexture1Loc, 5), this.gl.activeTexture(this.gl.TEXTURE6), this.gl.bindTexture(this.gl.TEXTURE_2D, s), this.gl.uniform1i(this.blurTexture2Loc, 6), this.gl.activeTexture(this.gl.TEXTURE7), this.gl.bindTexture(this.gl.TEXTURE_2D, r), this.gl.uniform1i(this.blurTexture3Loc, 7), this.gl.activeTexture(this.gl.TEXTURE8), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ), this.gl.uniform1i(this.noiseLQLoc, 8), this.gl.activeTexture(this.gl.TEXTURE9), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexMQ), this.gl.uniform1i(this.noiseMQLoc, 9), this.gl.activeTexture(this.gl.TEXTURE10), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexHQ), this.gl.uniform1i(this.noiseHQLoc, 10), this.gl.activeTexture(this.gl.TEXTURE11), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQLite), this.gl.uniform1i(this.noiseLQLiteLoc, 11), this.gl.activeTexture(this.gl.TEXTURE12), this.gl.bindTexture(this.gl.TEXTURE_2D, this.noise.noiseTexLQ), this.gl.bindSampler(12, this.noise.noiseTexPointLQ), this.gl.uniform1i(this.noisePointLQLoc, 12), this.gl.activeTexture(this.gl.TEXTURE13), this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolLQ), this.gl.uniform1i(this.noiseVolLQLoc, 13), this.gl.activeTexture(this.gl.TEXTURE14), this.gl.bindTexture(this.gl.TEXTURE_3D, this.noise.noiseTexVolHQ), this.gl.uniform1i(this.noiseVolHQLoc, 14);
                for (var m = 0; m < this.userTextures.length; m++) {
                  var c = this.userTextures[m];
                  this.gl.activeTexture(this.gl.TEXTURE15 + m), this.gl.bindTexture(this.gl.TEXTURE_2D, this.image.getTexture(c.sampler)), this.gl.uniform1i(c.textureLoc, 15 + m)
                }
                this.gl.uniform1f(this.decayLoc, o.decay), this.gl.uniform2fv(this.resolutionLoc, [this.texsizeX, this.texsizeY]), this.gl.uniform4fv(this.aspectLoc, [this.aspectx, this.aspecty, this.invAspectx, this.invAspecty]), this.gl.uniform4fv(this.texsizeLoc, [this.texsizeX, this.texsizeY, 1 / this.texsizeX, 1 / this.texsizeY]), this.gl.uniform4fv(this.texsizeNoiseLQLoc, [256, 256, 1 / 256, 1 / 256]), this.gl.uniform4fv(this.texsizeNoiseMQLoc, [256, 256, 1 / 256, 1 / 256]), this.gl.uniform4fv(this.texsizeNoiseHQLoc, [256, 256, 1 / 256, 1 / 256]), this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc, [32, 32, 1 / 32, 1 / 32]), this.gl.uniform4fv(this.texsizeNoiseVolLQLoc, [32, 32, 1 / 32, 1 / 32]), this.gl.uniform4fv(this.texsizeNoiseVolHQLoc, [32, 32, 1 / 32, 1 / 32]), this.gl.uniform1f(this.bassLoc, o.bass), this.gl.uniform1f(this.midLoc, o.mid), this.gl.uniform1f(this.trebLoc, o.treb), this.gl.uniform1f(this.volLoc, (o.bass + o.mid + o.treb) / 3), this.gl.uniform1f(this.bassAttLoc, o.bass_att), this.gl.uniform1f(this.midAttLoc, o.mid_att), this.gl.uniform1f(this.trebAttLoc, o.treb_att), this.gl.uniform1f(this.volAttLoc, (o.bass_att + o.mid_att + o.treb_att) / 3), this.gl.uniform1f(this.timeLoc, o.time), this.gl.uniform1f(this.frameLoc, o.frame), this.gl.uniform1f(this.fpsLoc, o.fps), this.gl.uniform4fv(this.randPresetLoc, o.rand_preset), this.gl.uniform4fv(this.randFrameLoc, new Float32Array([Math.random(), Math.random(), Math.random(), Math.random()])), this.gl.uniform4fv(this.qaLoc, new Float32Array([o.q1 || 0, o.q2 || 0, o.q3 || 0, o.q4 || 0])), this.gl.uniform4fv(this.qbLoc, new Float32Array([o.q5 || 0, o.q6 || 0, o.q7 || 0, o.q8 || 0])), this.gl.uniform4fv(this.qcLoc, new Float32Array([o.q9 || 0, o.q10 || 0, o.q11 || 0, o.q12 || 0])), this.gl.uniform4fv(this.qdLoc, new Float32Array([o.q13 || 0, o.q14 || 0, o.q15 || 0, o.q16 || 0])), this.gl.uniform4fv(this.qeLoc, new Float32Array([o.q17 || 0, o.q18 || 0, o.q19 || 0, o.q20 || 0])), this.gl.uniform4fv(this.qfLoc, new Float32Array([o.q21 || 0, o.q22 || 0, o.q23 || 0, o.q24 || 0])), this.gl.uniform4fv(this.qgLoc, new Float32Array([o.q25 || 0, o.q26 || 0, o.q27 || 0, o.q28 || 0])), this.gl.uniform4fv(this.qhLoc, new Float32Array([o.q29 || 0, o.q30 || 0, o.q31 || 0, o.q32 || 0])), this.gl.uniform4fv(this.slowRoamCosLoc, [.5 + .5 * Math.cos(.005 * o.time), .5 + .5 * Math.cos(.008 * o.time), .5 + .5 * Math.cos(.013 * o.time), .5 + .5 * Math.cos(.022 * o.time)]), this.gl.uniform4fv(this.roamCosLoc, [.5 + .5 * Math.cos(.3 * o.time), .5 + .5 * Math.cos(1.3 * o.time), .5 + .5 * Math.cos(5 * o.time), .5 + .5 * Math.cos(20 * o.time)]), this.gl.uniform4fv(this.slowRoamSinLoc, [.5 + .5 * Math.sin(.005 * o.time), .5 + .5 * Math.sin(.008 * o.time), .5 + .5 * Math.sin(.013 * o.time), .5 + .5 * Math.sin(.022 * o.time)]), this.gl.uniform4fv(this.roamSinLoc, [.5 + .5 * Math.sin(.3 * o.time), .5 + .5 * Math.sin(1.3 * o.time), .5 + .5 * Math.sin(5 * o.time), .5 + .5 * Math.sin(20 * o.time)]), this.bindBlurVals(a, h), t ? this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.disable(this.gl.BLEND), this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_SHORT, 0), t || this.gl.enable(this.gl.BLEND)
              }
            }], i && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/shapes/customShape.js":
        /*!*********************************************!*\
          !*** ./src/rendering/shapes/customShape.js ***!
          \*********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return h
          }));
          var s = i( /*! ../../utils */ "./src/utils.js"),
            r = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function a(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var h = function() {
            function t(e, i, s) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.index = e, this.gl = i;
              this.positions = new Float32Array(309), this.colors = new Float32Array(412), this.uvs = new Float32Array(206), this.borderPositions = new Float32Array(306), this.texsizeX = s.texsizeX, this.texsizeY = s.texsizeY, this.mesh_width = s.mesh_width, this.mesh_height = s.mesh_height, this.aspectx = s.aspectx, this.aspecty = s.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.positionVertexBuf = this.gl.createBuffer(), this.colorVertexBuf = this.gl.createBuffer(), this.uvVertexBuf = this.gl.createBuffer(), this.borderPositionVertexBuf = this.gl.createBuffer(), this.floatPrecision = r.default.getFragmentFloatPrecision(this.gl), this.createShader(), this.createBorderShader(), this.mainSampler = this.gl.createSampler(), i.samplerParameteri(this.mainSampler, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR), i.samplerParameteri(this.mainSampler, i.TEXTURE_MAG_FILTER, i.LINEAR), i.samplerParameteri(this.mainSampler, i.TEXTURE_WRAP_S, i.REPEAT), i.samplerParameteri(this.mainSampler, i.TEXTURE_WRAP_T, i.REPEAT)
            }
            var e, i, h;
            return e = t, (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.mesh_width = t.mesh_width, this.mesh_height = t.mesh_height, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      in vec3 aPos;\n                                      in vec4 aColor;\n                                      in vec2 aUv;\n                                      out vec4 vColor;\n                                      out vec2 vUv;\n                                      void main(void) {\n                                        vColor = aColor;\n                                        vUv = aUv;\n                                        gl_Position = vec4(aPos, 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      uniform sampler2D uTexture;\n                                      uniform float uTextured;\n                                      in vec4 vColor;\n                                      in vec2 vUv;\n                                      out vec4 fragColor;\n                                      void main(void) {\n                                        if (uTextured != 0.0) {\n                                          fragColor = texture(uTexture, vUv) * vColor;\n                                        } else {\n                                          fragColor = vColor;\n                                        }\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.aPosLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.aColorLocation = this.gl.getAttribLocation(this.shaderProgram, "aColor"), this.aUvLocation = this.gl.getAttribLocation(this.shaderProgram, "aUv"), this.texturedLoc = this.gl.getUniformLocation(this.shaderProgram, "uTextured"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture")
              }
            }, {
              key: "createBorderShader",
              value: function() {
                this.borderShaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      in vec3 aBorderPos;\n                                      uniform vec2 thickOffset;\n                                      void main(void) {\n                                        gl_Position = vec4(aBorderPos +\n                                                           vec3(thickOffset, 0.0), 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      out vec4 fragColor;\n                                      uniform vec4 uBorderColor;\n                                      void main(void) {\n                                        fragColor = uBorderColor;\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.borderShaderProgram, t), this.gl.attachShader(this.borderShaderProgram, e), this.gl.linkProgram(this.borderShaderProgram), this.aBorderPosLoc = this.gl.getAttribLocation(this.borderShaderProgram, "aBorderPos"), this.uBorderColorLoc = this.gl.getUniformLocation(this.borderShaderProgram, "uBorderColor"), this.thickOffsetLoc = this.gl.getUniformLocation(this.shaderProgram, "thickOffset")
              }
            }, {
              key: "drawCustomShape",
              value: function(t, e, i, r, a) {
                if (0 !== r.baseVals.enabled) {
                  this.setupShapeBuffers(i.mdVSFrame);
                  for (var h = Object.assign({}, i.mdVSShapes[this.index], i.mdVSFrameMapShapes[this.index], i.mdVSQAfterFrame, i.mdVSTShapeInits[this.index], e), o = s.default.cloneVars(h), n = Math.clamp(h.num_inst, 1, 1024), l = 0; l < n; l++) {
                    h.instance = l, h.x = o.x, h.y = o.y, h.rad = o.rad, h.ang = o.ang, h.r = o.r, h.g = o.g, h.b = o.b, h.a = o.a, h.r2 = o.r2, h.g2 = o.g2, h.b2 = o.b2, h.a2 = o.a2, h.border_r = o.border_r, h.border_g = o.border_g, h.border_b = o.border_b, h.border_a = o.border_a, h.thickoutline = o.thickoutline, h.textured = o.textured, h.tex_zoom = o.tex_zoom, h.tex_ang = o.tex_ang, h.additive = o.additive;
                    var u = r.frame_eqs(h),
                      m = u.sides;
                    m = Math.clamp(m, 3, 100), m = Math.floor(m);
                    var c = u.rad,
                      g = u.ang,
                      f = 2 * u.x - 1,
                      A = -2 * u.y + 1,
                      d = u.r,
                      v = u.g,
                      p = u.b,
                      _ = u.a,
                      x = u.r2,
                      b = u.g2,
                      T = u.b2,
                      E = u.a2,
                      P = u.border_r,
                      R = u.border_g,
                      L = u.border_b,
                      S = u.border_a;
                    this.borderColor = [P, R, L, S * t];
                    var y = u.thickoutline,
                      w = u.textured,
                      U = u.tex_zoom,
                      M = u.tex_ang,
                      F = u.additive,
                      q = this.borderColor[3] > 0,
                      z = Math.abs(w) >= 1,
                      B = Math.abs(y) >= 1,
                      V = Math.abs(F) >= 1;
                    this.positions[0] = f, this.positions[1] = A, this.positions[2] = 0, this.colors[0] = d, this.colors[1] = v, this.colors[2] = p, this.colors[3] = _ * t, z && (this.uvs[0] = .5, this.uvs[1] = .5);
                    for (var C = .25 * Math.PI, D = 1; D <= m + 1; D++) {
                      var I = (D - 1) / m * 2 * Math.PI,
                        X = I + g + C;
                      if (this.positions[3 * D + 0] = f + c * Math.cos(X) * this.aspecty, this.positions[3 * D + 1] = A + c * Math.sin(X), this.positions[3 * D + 2] = 0, this.colors[4 * D + 0] = x, this.colors[4 * D + 1] = b, this.colors[4 * D + 2] = T, this.colors[4 * D + 3] = E * t, z) {
                        var k = I + M + C;
                        this.uvs[2 * D + 0] = .5 + .5 * Math.cos(k) / U * this.aspecty, this.uvs[2 * D + 1] = .5 + .5 * Math.sin(k) / U
                      }
                      q && (this.borderPositions[3 * (D - 1) + 0] = this.positions[3 * D + 0], this.borderPositions[3 * (D - 1) + 1] = this.positions[3 * D + 1], this.borderPositions[3 * (D - 1) + 2] = this.positions[3 * D + 2])
                    }
                    this.mdVSShapeFrame = u, this.drawCustomShapeInstance(a, m, z, q, B, V)
                  }
                  var N = i.mdVSUserKeysShapes[this.index],
                    O = s.default.pick(this.mdVSShapeFrame, N);
                  i.mdVSFrameMapShapes[this.index] = O
                }
              }
            }, {
              key: "setupShapeBuffers",
              value: function(t) {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.DYNAMIC_DRAW), this.gl.vertexAttribPointer(this.aPosLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.colors, this.gl.DYNAMIC_DRAW), this.gl.vertexAttribPointer(this.aColorLocation, 4, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aColorLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.uvVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.uvs, this.gl.DYNAMIC_DRAW), this.gl.vertexAttribPointer(this.aUvLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aUvLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.borderPositionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.borderPositions, this.gl.DYNAMIC_DRAW), this.gl.vertexAttribPointer(this.aBorderPosLoc, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aBorderPosLoc);
                var e = 0 !== t.wrap ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
                this.gl.samplerParameteri(this.mainSampler, this.gl.TEXTURE_WRAP_S, e), this.gl.samplerParameteri(this.mainSampler, this.gl.TEXTURE_WRAP_T, e)
              }
            }, {
              key: "drawCustomShapeInstance",
              value: function(t, e, i, s, r, a) {
                this.gl.useProgram(this.shaderProgram);
                var h = new Float32Array(this.positions.buffer, 0, 3 * (e + 2));
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, h), this.gl.vertexAttribPointer(this.aPosLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLocation);
                var o = new Float32Array(this.colors.buffer, 0, 4 * (e + 2));
                if (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, o), this.gl.vertexAttribPointer(this.aColorLocation, 4, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aColorLocation), i) {
                  var n = new Float32Array(this.uvs.buffer, 0, 2 * (e + 2));
                  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.uvVertexBuf), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, n), this.gl.vertexAttribPointer(this.aUvLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aUvLocation)
                }
                if (this.gl.uniform1f(this.texturedLoc, i ? 1 : 0), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, t), this.gl.bindSampler(0, this.mainSampler), this.gl.uniform1i(this.textureLoc, 0), a ? this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE) : this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, e + 2), s) {
                  this.gl.useProgram(this.borderShaderProgram);
                  var l = new Float32Array(this.borderPositions.buffer, 0, 3 * (e + 1));
                  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.borderPositionVertexBuf), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, l), this.gl.vertexAttribPointer(this.aBorderPosLoc, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aBorderPosLoc), this.gl.uniform4fv(this.uBorderColorLoc, this.borderColor);
                  for (var u = r ? 4 : 1, m = 0; m < u; m++) 0 === m ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]) : 1 === m ? this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 0]) : 2 === m ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 2 / this.texsizeY]) : 3 === m && this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 2 / this.texsizeY]), this.gl.drawArrays(this.gl.LINE_STRIP, 0, e + 1)
                }
              }
            }]) && a(e.prototype, i), h && a(e, h), t
          }()
        },
      "./src/rendering/sprites/border.js":
        /*!*****************************************!*\
          !*** ./src/rendering/sprites/border.js ***!
          \*****************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.positions = new Float32Array(72), this.aspectx = i.aspectx, this.aspecty = i.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader(), this.vertexBuf = this.gl.createBuffer()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      in vec3 aPos;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos, 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      out vec4 fragColor;\n                                      uniform vec4 u_color;\n                                      void main(void) {\n                                        fragColor = u_color;\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.aPosLoc = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.colorLoc = this.gl.getUniformLocation(this.shaderProgram, "u_color")
              }
            }, {
              key: "addTriangle",
              value: function(t, e, i, s) {
                this.positions[t + 0] = e[0], this.positions[t + 1] = e[1], this.positions[t + 2] = e[2], this.positions[t + 3] = i[0], this.positions[t + 4] = i[1], this.positions[t + 5] = i[2], this.positions[t + 6] = s[0], this.positions[t + 7] = s[1], this.positions[t + 8] = s[2]
              }
            }, {
              key: "generateBorder",
              value: function(t, e, i) {
                if (e > 0 && t[3] > 0) {
                  var s = i / 2,
                    r = e / 2 + s,
                    a = 2 * s,
                    h = 2 * s,
                    o = 2 * r,
                    n = 2 * r,
                    l = [-1 + a, -1 + n, 0],
                    u = [-1 + a, 1 - n, 0],
                    m = [-1 + o, 1 - n, 0],
                    c = [-1 + o, -1 + n, 0];
                  return this.addTriangle(0, c, u, l), this.addTriangle(9, c, m, u), l = [1 - a, -1 + n, 0], u = [1 - a, 1 - n, 0], m = [1 - o, 1 - n, 0], c = [1 - o, -1 + n, 0], this.addTriangle(18, l, u, c), this.addTriangle(27, u, m, c), l = [-1 + a, -1 + h, 0], u = [-1 + a, n - 1, 0], m = [1 - a, n - 1, 0], c = [1 - a, -1 + h, 0], this.addTriangle(36, c, u, l), this.addTriangle(45, c, m, u), l = [-1 + a, 1 - h, 0], u = [-1 + a, 1 - n, 0], m = [1 - a, 1 - n, 0], c = [1 - a, 1 - h, 0], this.addTriangle(54, l, u, c), this.addTriangle(63, u, m, c), !0
                }
                return !1
              }
            }, {
              key: "drawBorder",
              value: function(t, e, i) {
                this.generateBorder(t, e, i) && (this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLoc), this.gl.uniform4fv(this.colorLoc, t), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLES, 0, this.positions.length / 3))
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/sprites/darkenCenter.js":
        /*!***********************************************!*\
          !*** ./src/rendering/sprites/darkenCenter.js ***!
          \***********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e, i) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.aspectx = i.aspectx, this.aspecty = i.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.generatePositions(), this.colors = new Float32Array([0, 0, 0, 3 / 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), this.positionVertexBuf = this.gl.createBuffer(), this.colorVertexBuf = this.gl.createBuffer(), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.generatePositions()
              }
            }, {
              key: "generatePositions",
              value: function() {
                var t = .05;
                this.positions = new Float32Array([0, 0, 0, -.05 * this.aspecty, 0, 0, 0, -.05, 0, t * this.aspecty, 0, 0, 0, t, 0, -.05 * this.aspecty, 0, 0])
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      in vec3 aPos;\n                                      in vec4 aColor;\n                                      out vec4 vColor;\n                                      void main(void) {\n                                        vColor = aColor;\n                                        gl_Position = vec4(aPos, 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      in vec4 vColor;\n                                      out vec4 fragColor;\n                                      void main(void) {\n                                        fragColor = vColor;\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.aPosLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.aColorLocation = this.gl.getAttribLocation(this.shaderProgram, "aColor")
              }
            }, {
              key: "drawDarkenCenter",
              value: function(t) {
                0 !== t.darken_center && (this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.positions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aPosLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.colors, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aColorLocation, 4, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aColorLocation), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, this.positions.length / 3))
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/text/titleText.js":
        /*!*****************************************!*\
          !*** ./src/rendering/text/titleText.js ***!
          \*****************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var s = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js");
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var a = function() {
            function t(e) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e, this.texsizeX = i.texsizeX, this.texsizeY = i.texsizeY, this.aspectx = i.aspectx, this.aspecty = i.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.buildPositions(), this.textTexture = this.gl.createTexture(), this.indexBuf = e.createBuffer(), this.positionVertexBuf = this.gl.createBuffer(), this.vertexBuf = this.gl.createBuffer(), this.canvas = document.createElement("canvas"), this.canvas.width = this.texsizeX, this.canvas.height = this.texsizeY, this.context2D = this.canvas.getContext("2d"), this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, a;
            return e = t, (i = [{
              key: "generateTitleTexture",
              value: function(t) {
                this.context2D.clearRect(0, 0, this.texsizeX, this.texsizeY), this.fontSize = Math.floor(this.texsizeX / 256 * 16), this.fontSize = Math.max(this.fontSize, 6), this.context2D.font = "italic ".concat(this.fontSize, "px Times New Roman");
                var e = t,
                  i = this.context2D.measureText(e).width;
                if (i > this.texsizeX) {
                  var s = this.texsizeX / i * .91;
                  e = "".concat(e.substring(0, Math.floor(e.length * s)), "..."), i = this.context2D.measureText(e).width
                }
                this.context2D.fillStyle = "#FFFFFF", this.context2D.fillText(e, (this.texsizeX - i) / 2, this.texsizeY / 2);
                var r = new Uint8Array(this.context2D.getImageData(0, 0, this.texsizeX, this.texsizeY).data.buffer);
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.textTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.texsizeX, this.texsizeY, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, r), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.generateMipmap(this.gl.TEXTURE_2D), this.gl.bindTexture(this.gl.TEXTURE_2D, null)
              }
            }, {
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.canvas.width = this.texsizeX, this.canvas.height = this.texsizeY
              }
            }, {
              key: "buildPositions",
              value: function() {
                for (var t = [], e = 0; e < 8; e++)
                  for (var i = .2857142857142857 * e - 1, s = 0; s < 16; s++) {
                    var r = .13333333333333333 * s - 1;
                    t.push(r, -i, 0)
                  }
                for (var a = [], h = 0; h < 7; h++)
                  for (var o = 0; o < 15; o++) {
                    var n = o + 16 * h,
                      l = o + 16 * (h + 1),
                      u = o + 1 + 16 * (h + 1),
                      m = o + 1 + 16 * h;
                    a.push(n, l, m), a.push(l, u, m)
                  }
                this.vertices = new Float32Array(t), this.indices = new Uint16Array(a)
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n       const vec2 halfmad = vec2(0.5);\n       in vec2 aPos;\n       in vec2 aUv;\n       out vec2 uv_orig;\n       out vec2 uv;\n       void main(void) {\n         gl_Position = vec4(aPos, 0.0, 1.0);\n         uv_orig = aPos * halfmad + halfmad;\n         uv = aUv;\n       }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n       precision ".concat(this.floatPrecision, " float;\n       precision highp int;\n       precision mediump sampler2D;\n\n       in vec2 uv_orig;\n       in vec2 uv;\n       out vec4 fragColor;\n       uniform sampler2D uTexture;\n       uniform float textColor;\n\n       void main(void) {\n         fragColor = texture(uTexture, uv) * vec4(textColor);\n       }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.positionLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.uvLocation = this.gl.getAttribLocation(this.shaderProgram, "aUv"), this.textureLoc = this.gl.getUniformLocation(this.shaderProgram, "uTexture"), this.textColorLoc = this.gl.getUniformLocation(this.shaderProgram, "textColor")
              }
            }, {
              key: "generateUvs",
              value: function(t, e, i) {
                for (var s = [], r = 0; r < 8; r++)
                  for (var a = 0; a < 16; a++) {
                    var h = a / 15 * 2 - 1,
                      o = 2 * (.75 * (r / 7 - .5) + .5) - 1;
                    t >= 1 && (o += 1 / this.texsizeY), s.push(h, e ? o : -o)
                  }
                for (var n = Math.max(0, 1 - 1.5 * t), l = 1.3 * Math.pow(n, 1.8), u = 0; u < 8; u++)
                  for (var m = 0; m < 16; m++) {
                    var c = 16 * u + m;
                    s[c] += .07 * l * Math.sin(.31 * i.time + .39 * s[c] - 1.94 * s[c + 1]), s[c] += .044 * l * Math.sin(.81 * i.time - 1.91 * s[c] + .27 * s[c + 1]), s[c] += .061 * l * Math.sin(1.31 * i.time + .61 * s[c] + .74 * s[c + 1]), s[c + 1] += .061 * l * Math.sin(.37 * i.time + 1.83 * s[c] + .69 * s[c + 1]), s[c + 1] += .07 * l * Math.sin(.67 * i.time + .42 * s[c] - 1.39 * s[c + 1]), s[c + 1] += .087 * l * Math.sin(1.07 * i.time + 3.55 * s[c] + .89 * s[c + 1])
                  }
                for (var g = 1.01 / (Math.pow(t, .21) + .01), f = 0; f < s.length / 2; f++) s[2 * f] *= g, s[2 * f + 1] *= g * this.invAspecty, s[2 * f] = (s[2 * f] + 1) / 2, s[2 * f + 1] = (s[2 * f + 1] + 1) / 2;
                return new Float32Array(s)
              }
            }, {
              key: "renderTitle",
              value: function(t, e, i) {
                this.gl.useProgram(this.shaderProgram);
                var s = this.generateUvs(t, e, i);
                this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuf), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.indices, this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertices, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.positionLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.positionLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, s, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.uvLocation, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.uvLocation), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.textTexture), this.gl.uniform1i(this.textureLoc, 0), this.gl.uniform1f(this.textColorLoc, Math.pow(t, .3)), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_SHORT, 0)
              }
            }]) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/rendering/waves/basicWaveform.js":
        /*!**********************************************!*\
          !*** ./src/rendering/waves/basicWaveform.js ***!
          \**********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return h
          }));
          var s = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js"),
            r = i( /*! ./waveUtils */ "./src/rendering/waves/waveUtils.js");
  
          function a(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var h = function() {
            function t(e) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.gl = e;
              this.positions = new Float32Array(1536), this.positions2 = new Float32Array(1536), this.oldPositions = new Float32Array(1536), this.oldPositions2 = new Float32Array(1536), this.smoothedPositions = new Float32Array(3069), this.smoothedPositions2 = new Float32Array(3069), this.color = [0, 0, 0, 1], this.texsizeX = i.texsizeX, this.texsizeY = i.texsizeY, this.aspectx = i.aspectx, this.aspecty = i.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.floatPrecision = s.default.getFragmentFloatPrecision(this.gl), this.createShader(), this.vertexBuf = this.gl.createBuffer()
            }
            var e, i, h;
            return e = t, h = [{
              key: "processWaveform",
              value: function(t, e) {
                var i = [],
                  s = e.wave_scale / 128,
                  r = e.wave_smoothing,
                  a = s * (1 - r);
                i.push(t[0] * s);
                for (var h = 1; h < t.length; h++) i.push(t[h] * a + i[h - 1] * r);
                return i
              }
            }], (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      in vec3 aPos;\n                                      uniform vec2 thickOffset;\n                                      void main(void) {\n                                        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      out vec4 fragColor;\n                                      uniform vec4 u_color;\n                                      void main(void) {\n                                        fragColor = u_color;\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.aPosLoc = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.colorLoc = this.gl.getUniformLocation(this.shaderProgram, "u_color"), this.thickOffsetLoc = this.gl.getUniformLocation(this.shaderProgram, "thickOffset")
              }
            }, {
              key: "generateWaveform",
              value: function(e, i, s, a, h) {
                var o = h.wave_a,
                  n = (h.bass + h.mid + h.treb) / 3;
                if (n > -.01 && o > .001 && s.length > 0) {
                  var l = t.processWaveform(s, h),
                    u = t.processWaveform(a, h),
                    m = Math.floor(h.wave_mode) % 8,
                    c = Math.floor(h.old_wave_mode) % 8,
                    g = 2 * h.wave_x - 1,
                    f = 2 * h.wave_y - 1;
                  this.numVert = 0, this.oldNumVert = 0;
                  for (var A = e && m !== c ? 2 : 1, d = 0; d < A; d++) {
                    var v = 0 === d ? m : c,
                      p = h.wave_mystery;
                    0 !== v && 1 !== v && 4 !== v || !(p < -1 || p > 1) || (p = .5 * p + .5, p -= Math.floor(p), p = 2 * (p = Math.abs(p)) - 1);
                    var _ = void 0,
                      x = void 0,
                      b = void 0;
                    if (0 === d ? (x = this.positions, b = this.positions2) : (x = this.oldPositions, b = this.oldPositions2), o = h.wave_a, 0 === v) {
                      if (h.modwavealphabyvolume > 0) {
                        var T = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / T
                      }
                      o = Math.clamp(o, 0, 1);
                      for (var E = 1 / ((_ = Math.floor(l.length / 2) + 1) - 1), P = Math.floor((l.length - _) / 2), R = 0; R < _ - 1; R++) {
                        var L = .5 + .4 * u[R + P] + p,
                          S = R * E * 2 * Math.PI + .2 * h.time;
                        if (R < _ / 10) {
                          var y = R / (.1 * _);
                          L = (1 - (y = .5 - .5 * Math.cos(y * Math.PI))) * (.5 + .4 * u[R + _ + P] + p) + L * y
                        }
                        x[3 * R + 0] = L * Math.cos(S) * this.aspecty + g, x[3 * R + 1] = L * Math.sin(S) * this.aspectx + f, x[3 * R + 2] = 0
                      }
                      x[3 * (_ - 1) + 0] = x[0], x[3 * (_ - 1) + 1] = x[1], x[3 * (_ - 1) + 2] = 0
                    } else if (1 === v) {
                      if (o *= 1.25, h.modwavealphabyvolume > 0) {
                        var w = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / w
                      }
                      o = Math.clamp(o, 0, 1), _ = Math.floor(l.length / 2);
                      for (var U = 0; U < _; U++) {
                        var M = .53 + .43 * u[U] + p,
                          F = .5 * l[U + 32] * Math.PI + 2.3 * h.time;
                        x[3 * U + 0] = M * Math.cos(F) * this.aspecty + g, x[3 * U + 1] = M * Math.sin(F) * this.aspectx + f, x[3 * U + 2] = 0
                      }
                    } else if (2 === v) {
                      if (this.texsizeX < 1024 ? o *= .09 : this.texsizeX >= 1024 && this.texsizeX < 2048 ? o *= .11 : o *= .13, h.modwavealphabyvolume > 0) {
                        var q = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / q
                      }
                      o = Math.clamp(o, 0, 1), _ = l.length;
                      for (var z = 0; z < l.length; z++) x[3 * z + 0] = u[z] * this.aspecty + g, x[3 * z + 1] = l[(z + 32) % l.length] * this.aspectx + f, x[3 * z + 2] = 0
                    } else if (3 === v) {
                      if (this.texsizeX < 1024 ? o *= .15 : this.texsizeX >= 1024 && this.texsizeX < 2048 ? o *= .22 : o *= .33, o *= 1.3, o *= h.treb * h.treb, h.modwavealphabyvolume > 0) {
                        var B = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / B
                      }
                      o = Math.clamp(o, 0, 1), _ = l.length;
                      for (var V = 0; V < l.length; V++) x[3 * V + 0] = u[V] * this.aspecty + g, x[3 * V + 1] = l[(V + 32) % l.length] * this.aspectx + f, x[3 * V + 2] = 0
                    } else if (4 === v) {
                      if (h.modwavealphabyvolume > 0) {
                        var C = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / C
                      }
                      o = Math.clamp(o, 0, 1), (_ = l.length) > this.texsizeX / 3 && (_ = Math.floor(this.texsizeX / 3));
                      for (var D = 1 / _, I = Math.floor((l.length - _) / 2), X = .45 + .5 * (.5 * p + .5), k = 1 - X, N = 0; N < _; N++) {
                        var O = 2 * N * D + (g - 1) + .44 * u[(N + 25 + I) % l.length],
                          W = .47 * l[N + I] + f;
                        N > 1 && (O = O * k + X * (2 * x[3 * (N - 1) + 0] - x[3 * (N - 2) + 0]), W = W * k + X * (2 * x[3 * (N - 1) + 1] - x[3 * (N - 2) + 1])), x[3 * N + 0] = O, x[3 * N + 1] = W, x[3 * N + 2] = 0
                      }
                    } else if (5 === v) {
                      if (this.texsizeX < 1024 ? o *= .09 : this.texsizeX >= 1024 && this.texsizeX < 2048 ? o *= .11 : o *= .13, h.modwavealphabyvolume > 0) {
                        var Q = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / Q
                      }
                      o = Math.clamp(o, 0, 1);
                      var j = Math.cos(.3 * h.time),
                        Y = Math.sin(.3 * h.time);
                      _ = l.length;
                      for (var G = 0; G < l.length; G++) {
                        var H = (G + 32) % l.length,
                          K = u[G] * l[H] + l[G] * u[H],
                          J = u[G] * u[G] - l[H] * l[H];
                        x[3 * G + 0] = (K * j - J * Y) * (this.aspecty + g), x[3 * G + 1] = (K * Y + J * j) * (this.aspectx + f), x[3 * G + 2] = 0
                      }
                    } else if (6 === v || 7 === v) {
                      if (h.modwavealphabyvolume > 0) {
                        var Z = h.modwavealphaend - h.modwavealphastart;
                        o *= (n - h.modwavealphastart) / Z
                      }
                      o = Math.clamp(o, 0, 1), (_ = Math.floor(l.length / 2)) > this.texsizeX / 3 && (_ = Math.floor(this.texsizeX / 3));
                      for (var $ = Math.floor((l.length - _) / 2), tt = .5 * Math.PI * p, et = Math.cos(tt), it = Math.sin(tt), st = [g * Math.cos(tt + .5 * Math.PI) - 3 * et, g * Math.cos(tt + .5 * Math.PI) + 3 * et], rt = [g * Math.sin(tt + .5 * Math.PI) - 3 * it, g * Math.sin(tt + .5 * Math.PI) + 3 * it], at = 0; at < 2; at++)
                        for (var ht = 0; ht < 4; ht++) {
                          var ot = void 0,
                            nt = !1;
                          switch (ht) {
                            case 0:
                              st[at] > 1.1 && (ot = (1.1 - st[1 - at]) / (st[at] - st[1 - at]), nt = !0);
                              break;
                            case 1:
                              st[at] < -1.1 && (ot = (-1.1 - st[1 - at]) / (st[at] - st[1 - at]), nt = !0);
                              break;
                            case 2:
                              rt[at] > 1.1 && (ot = (1.1 - rt[1 - at]) / (rt[at] - rt[1 - at]), nt = !0);
                              break;
                            case 3:
                              rt[at] < -1.1 && (ot = (-1.1 - rt[1 - at]) / (rt[at] - rt[1 - at]), nt = !0)
                          }
                          if (nt) {
                            var lt = st[at] - st[1 - at],
                              ut = rt[at] - rt[1 - at];
                            st[at] = st[1 - at] + lt * ot, rt[at] = rt[1 - at] + ut * ot
                          }
                        }
                      et = (st[1] - st[0]) / _, it = (rt[1] - rt[0]) / _;
                      var mt = Math.atan2(it, et),
                        ct = Math.cos(mt + .5 * Math.PI),
                        gt = Math.sin(mt + .5 * Math.PI);
                      if (6 === v)
                        for (var ft = 0; ft < _; ft++) {
                          var At = l[ft + $];
                          x[3 * ft + 0] = st[0] + et * ft + .25 * ct * At, x[3 * ft + 1] = rt[0] + it * ft + .25 * gt * At, x[3 * ft + 2] = 0
                        } else if (7 === v) {
                          for (var dt = Math.pow(.5 * f + .5, 2), vt = 0; vt < _; vt++) {
                            var pt = l[vt + $];
                            x[3 * vt + 0] = st[0] + et * vt + ct * (.25 * pt + dt), x[3 * vt + 1] = rt[0] + it * vt + gt * (.25 * pt + dt), x[3 * vt + 2] = 0
                          }
                          for (var _t = 0; _t < _; _t++) {
                            var xt = u[_t + $];
                            b[3 * _t + 0] = st[0] + et * _t + ct * (.25 * xt - dt), b[3 * _t + 1] = rt[0] + it * _t + gt * (.25 * xt - dt), b[3 * _t + 2] = 0
                          }
                        }
                    }
                    0 === d ? (this.positions = x, this.positions2 = b, this.numVert = _, this.alpha = o) : (this.oldPositions = x, this.oldPositions2 = b, this.oldNumVert = _, this.oldAlpha = o)
                  }
                  var bt = .5 - .5 * Math.cos(i * Math.PI),
                    Tt = 1 - bt;
                  this.oldNumVert > 0 && (o = bt * this.alpha + Tt * this.oldAlpha);
                  var Et = Math.clamp(h.wave_r, 0, 1),
                    Pt = Math.clamp(h.wave_g, 0, 1),
                    Rt = Math.clamp(h.wave_b, 0, 1);
                  if (0 !== h.wave_brighten) {
                    var Lt = Math.max(Et, Pt, Rt);
                    Lt > .01 && (Et /= Lt, Pt /= Lt, Rt /= Lt)
                  }
                  if (this.color = [Et, Pt, Rt, o], this.oldNumVert > 0)
                    if (7 === m) {
                      for (var St = (this.oldNumVert - 1) / (2 * this.numVert), yt = 0; yt < this.numVert; yt++) {
                        var wt = yt * St,
                          Ut = Math.floor(wt),
                          Mt = wt - Ut,
                          Ft = this.oldPositions[3 * Ut + 0] * (1 - Mt) + this.oldPositions[3 * (Ut + 1) + 0] * Mt,
                          qt = this.oldPositions[3 * Ut + 1] * (1 - Mt) + this.oldPositions[3 * (Ut + 1) + 1] * Mt;
                        this.positions[3 * yt + 0] = this.positions[3 * yt + 0] * bt + Ft * Tt, this.positions[3 * yt + 1] = this.positions[3 * yt + 1] * bt + qt * Tt, this.positions[3 * yt + 2] = 0
                      }
                      for (var zt = 0; zt < this.numVert; zt++) {
                        var Bt = (zt + this.numVert) * St,
                          Vt = Math.floor(Bt),
                          Ct = Bt - Vt,
                          Dt = this.oldPositions[3 * Vt + 0] * (1 - Ct) + this.oldPositions[3 * (Vt + 1) + 0] * Ct,
                          It = this.oldPositions[3 * Vt + 1] * (1 - Ct) + this.oldPositions[3 * (Vt + 1) + 1] * Ct;
                        this.positions2[3 * zt + 0] = this.positions2[3 * zt + 0] * bt + Dt * Tt, this.positions2[3 * zt + 1] = this.positions2[3 * zt + 1] * bt + It * Tt, this.positions2[3 * zt + 2] = 0
                      }
                    } else if (7 === c) {
                    for (var Xt = this.numVert / 2, kt = (this.oldNumVert - 1) / Xt, Nt = 0; Nt < Xt; Nt++) {
                      var Ot = Nt * kt,
                        Wt = Math.floor(Ot),
                        Qt = Ot - Wt,
                        jt = this.oldPositions[3 * Wt + 0] * (1 - Qt) + this.oldPositions[3 * (Wt + 1) + 0] * Qt,
                        Yt = this.oldPositions[3 * Wt + 1] * (1 - Qt) + this.oldPositions[3 * (Wt + 1) + 1] * Qt;
                      this.positions[3 * Nt + 0] = this.positions[3 * Nt + 0] * bt + jt * Tt, this.positions[3 * Nt + 1] = this.positions[3 * Nt + 1] * bt + Yt * Tt, this.positions[3 * Nt + 2] = 0
                    }
                    for (var Gt = 0; Gt < Xt; Gt++) {
                      var Ht = Gt * kt,
                        Kt = Math.floor(Ht),
                        Jt = Ht - Kt,
                        Zt = this.oldPositions2[3 * Kt + 0] * (1 - Jt) + this.oldPositions2[3 * (Kt + 1) + 0] * Jt,
                        $t = this.oldPositions2[3 * Kt + 1] * (1 - Jt) + this.oldPositions2[3 * (Kt + 1) + 1] * Jt;
                      this.positions2[3 * Gt + 0] = this.positions[3 * (Gt + Xt) + 0] * bt + Zt * Tt, this.positions2[3 * Gt + 1] = this.positions[3 * (Gt + Xt) + 1] * bt + $t * Tt, this.positions2[3 * Gt + 2] = 0
                    }
                  } else
                    for (var te = (this.oldNumVert - 1) / this.numVert, ee = 0; ee < this.numVert; ee++) {
                      var ie = ee * te,
                        se = Math.floor(ie),
                        re = ie - se,
                        ae = this.oldPositions[3 * se + 0] * (1 - re) + this.oldPositions[3 * (se + 1) + 0] * re,
                        he = this.oldPositions[3 * se + 1] * (1 - re) + this.oldPositions[3 * (se + 1) + 1] * re;
                      this.positions[3 * ee + 0] = this.positions[3 * ee + 0] * bt + ae * Tt, this.positions[3 * ee + 1] = this.positions[3 * ee + 1] * bt + he * Tt, this.positions[3 * ee + 2] = 0
                    }
                  for (var oe = 0; oe < this.numVert; oe++) this.positions[3 * oe + 1] = -this.positions[3 * oe + 1];
                  if (this.smoothedNumVert = 2 * this.numVert - 1, r.default.smoothWave(this.positions, this.smoothedPositions, this.numVert), 7 === m || 7 === c) {
                    for (var ne = 0; ne < this.numVert; ne++) this.positions2[3 * ne + 1] = -this.positions2[3 * ne + 1];
                    r.default.smoothWave(this.positions2, this.smoothedPositions2, this.numVert)
                  }
                  return !0
                }
                return !1
              }
            }, {
              key: "drawBasicWaveform",
              value: function(t, e, i, s, r) {
                if (this.generateWaveform(t, e, i, s, r)) {
                  this.gl.useProgram(this.shaderProgram), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.smoothedPositions, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLoc), this.gl.uniform4fv(this.colorLoc, this.color);
                  var a = 1;
                  0 === r.wave_thick && 0 === r.wave_dots || (a = 4), 0 !== r.additivewave ? this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE) : this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                  for (var h = 0 !== r.wave_dots ? this.gl.POINTS : this.gl.LINE_STRIP, o = 0; o < a; o++) 0 === o ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]) : 1 === o ? this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 0]) : 2 === o ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 2 / this.texsizeY]) : 3 === o && this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 2 / this.texsizeY]), this.gl.drawArrays(h, 0, this.smoothedNumVert);
                  if (7 == Math.floor(r.wave_mode) % 8) {
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.smoothedPositions2, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aPosLoc, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLoc);
                    for (var n = 0; n < a; n++) 0 === n ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]) : 1 === n ? this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 0]) : 2 === n ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 2 / this.texsizeY]) : 3 === n && this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 2 / this.texsizeY]), this.gl.drawArrays(h, 0, this.smoothedNumVert)
                  }
                }
              }
            }]) && a(e.prototype, i), h && a(e, h), t
          }()
        },
      "./src/rendering/waves/customWaveform.js":
        /*!***********************************************!*\
          !*** ./src/rendering/waves/customWaveform.js ***!
          \***********************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return o
          }));
          var s = i( /*! ../../utils */ "./src/utils.js"),
            r = i( /*! ../shaders/shaderUtils */ "./src/rendering/shaders/shaderUtils.js"),
            a = i( /*! ./waveUtils */ "./src/rendering/waves/waveUtils.js");
  
          function h(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var o = function() {
            function t(e, i, s) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.index = e, this.gl = i;
              var a = 512;
              this.pointsData = [new Float32Array(a), new Float32Array(a)], this.positions = new Float32Array(1536), this.colors = new Float32Array(2048), this.smoothedPositions = new Float32Array(3069), this.smoothedColors = new Float32Array(4092), this.texsizeX = s.texsizeX, this.texsizeY = s.texsizeY, this.mesh_width = s.mesh_width, this.mesh_height = s.mesh_height, this.aspectx = s.aspectx, this.aspecty = s.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty, this.positionVertexBuf = this.gl.createBuffer(), this.colorVertexBuf = this.gl.createBuffer(), this.floatPrecision = r.default.getFragmentFloatPrecision(this.gl), this.createShader()
            }
            var e, i, o;
            return e = t, (i = [{
              key: "updateGlobals",
              value: function(t) {
                this.texsizeX = t.texsizeX, this.texsizeY = t.texsizeY, this.mesh_width = t.mesh_width, this.mesh_height = t.mesh_height, this.aspectx = t.aspectx, this.aspecty = t.aspecty, this.invAspectx = 1 / this.aspectx, this.invAspecty = 1 / this.aspecty
              }
            }, {
              key: "createShader",
              value: function() {
                this.shaderProgram = this.gl.createProgram();
                var t = this.gl.createShader(this.gl.VERTEX_SHADER);
                this.gl.shaderSource(t, "#version 300 es\n                                      uniform float uSize;\n                                      uniform vec2 thickOffset;\n                                      in vec3 aPos;\n                                      in vec4 aColor;\n                                      out vec4 vColor;\n                                      void main(void) {\n                                        vColor = aColor;\n                                        gl_PointSize = uSize;\n                                        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);\n                                      }"), this.gl.compileShader(t);
                var e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                this.gl.shaderSource(e, "#version 300 es\n                                      precision ".concat(this.floatPrecision, " float;\n                                      precision highp int;\n                                      precision mediump sampler2D;\n                                      in vec4 vColor;\n                                      out vec4 fragColor;\n                                      void main(void) {\n                                        fragColor = vColor;\n                                      }")), this.gl.compileShader(e), this.gl.attachShader(this.shaderProgram, t), this.gl.attachShader(this.shaderProgram, e), this.gl.linkProgram(this.shaderProgram), this.aPosLocation = this.gl.getAttribLocation(this.shaderProgram, "aPos"), this.aColorLocation = this.gl.getAttribLocation(this.shaderProgram, "aColor"), this.sizeLoc = this.gl.getUniformLocation(this.shaderProgram, "uSize"), this.thickOffsetLoc = this.gl.getUniformLocation(this.shaderProgram, "thickOffset")
              }
            }, {
              key: "generateWaveform",
              value: function(t, e, i, r, h, o, n, l) {
                if (0 !== n.baseVals.enabled && t.length > 0) {
                  var u = Object.assign({}, o.mdVSWaves[this.index], o.mdVSFrameMapWaves[this.index], o.mdVSQAfterFrame, o.mdVSTWaveInits[this.index], h),
                    m = n.frame_eqs(u),
                    c = 512;
                  Object.prototype.hasOwnProperty.call(m, "samples") ? this.samples = m.samples : this.samples = c, this.samples > c && (this.samples = c), this.samples = Math.floor(this.samples);
                  var g = Math.floor(m.sep),
                    f = m.scaling,
                    A = m.spectrum,
                    d = m.smoothing,
                    v = m.usedots,
                    p = m.r,
                    _ = m.g,
                    x = m.b,
                    b = m.a,
                    T = o.mdVS.wave_scale;
                  if (this.samples -= g, this.samples >= 2 || 0 !== v && this.samples >= 1) {
                    var E = 0 !== A,
                      P = (E ? .15 : .004) * f * T,
                      R = E ? i : t,
                      L = E ? r : e,
                      S = E ? 0 : Math.floor((c - this.samples) / 2 - g / 2),
                      y = E ? 0 : Math.floor((c - this.samples) / 2 + g / 2),
                      w = E ? (c - g) / this.samples : 1,
                      U = Math.pow(.98 * d, .5),
                      M = 1 - U;
                    this.pointsData[0][0] = R[S], this.pointsData[1][0] = L[y];
                    for (var F = 1; F < this.samples; F++) {
                      var q = R[Math.floor(F * w + S)],
                        z = L[Math.floor(F * w + y)];
                      this.pointsData[0][F] = q * M + this.pointsData[0][F - 1] * U, this.pointsData[1][F] = z * M + this.pointsData[1][F - 1] * U
                    }
                    for (var B = this.samples - 2; B >= 0; B--) this.pointsData[0][B] = this.pointsData[0][B] * M + this.pointsData[0][B + 1] * U, this.pointsData[1][B] = this.pointsData[1][B] * M + this.pointsData[1][B + 1] * U;
                    for (var V = 0; V < this.samples; V++) this.pointsData[0][V] *= P, this.pointsData[1][V] *= P;
                    for (var C = 0; C < this.samples; C++) {
                      var D = this.pointsData[0][C],
                        I = this.pointsData[1][C];
                      m.sample = C / (this.samples - 1), m.value1 = D, m.value2 = I, m.x = .5 + D, m.y = .5 + I, m.r = p, m.g = _, m.b = x, m.a = b, "" !== n.point_eqs && (m = n.point_eqs(m));
                      var X = (2 * m.x - 1) * this.invAspectx,
                        k = (-2 * m.y + 1) * this.invAspecty,
                        N = m.r,
                        O = m.g,
                        W = m.b,
                        Q = m.a;
                      this.positions[3 * C + 0] = X, this.positions[3 * C + 1] = k, this.positions[3 * C + 2] = 0, this.colors[4 * C + 0] = N, this.colors[4 * C + 1] = O, this.colors[4 * C + 2] = W, this.colors[4 * C + 3] = Q * l
                    }
                    var j = o.mdVSUserKeysWaves[this.index],
                      Y = s.default.pick(m, j);
                    return o.mdVSFrameMapWaves[this.index] = Y, this.mdVSWaveFrame = m, 0 === v && a.default.smoothWaveAndColor(this.positions, this.colors, this.smoothedPositions, this.smoothedColors, this.samples), !0
                  }
                }
                return !1
              }
            }, {
              key: "drawCustomWaveform",
              value: function(t, e, i, s, r, a, h, o) {
                if (o && this.generateWaveform(e, i, s, r, a, h, o, t)) {
                  this.gl.useProgram(this.shaderProgram);
                  var n, l, u, m = 0 !== this.mdVSWaveFrame.usedots,
                    c = 0 !== this.mdVSWaveFrame.thick,
                    g = 0 !== this.mdVSWaveFrame.additive;
                  m ? (n = this.positions, l = this.colors, u = this.samples) : (n = this.smoothedPositions, l = this.smoothedColors, u = 2 * this.samples - 1), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, n, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aPosLocation, 3, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aPosLocation), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorVertexBuf), this.gl.bufferData(this.gl.ARRAY_BUFFER, l, this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.aColorLocation, 4, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(this.aColorLocation);
                  var f = 1;
                  m ? c ? this.gl.uniform1f(this.sizeLoc, 2 + (this.texsizeX >= 1024 ? 1 : 0)) : this.gl.uniform1f(this.sizeLoc, 1 + (this.texsizeX >= 1024 ? 1 : 0)) : (this.gl.uniform1f(this.sizeLoc, 1), c && (f = 4)), g ? this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE) : this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                  for (var A = m ? this.gl.POINTS : this.gl.LINE_STRIP, d = 0; d < f; d++) 0 === d ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 0]) : 1 === d ? this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 0]) : 2 === d ? this.gl.uniform2fv(this.thickOffsetLoc, [0, 2 / this.texsizeY]) : 3 === d && this.gl.uniform2fv(this.thickOffsetLoc, [2 / this.texsizeX, 2 / this.texsizeY]), this.gl.drawArrays(A, 0, u)
                }
              }
            }]) && h(e.prototype, i), o && h(e, o), t
          }()
        },
      "./src/rendering/waves/waveUtils.js":
        /*!******************************************!*\
          !*** ./src/rendering/waves/waveUtils.js ***!
          \******************************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return r
          }));
          var r = function() {
            function t() {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t)
            }
            var e, i, r;
            return e = t, r = [{
              key: "smoothWave",
              value: function(t, e, i) {
                for (var s, r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = -.15, h = 1.15, o = 1.15, n = -.15, l = 0, u = 0, m = 1, c = 0; c < i - 1; c++) {
                  s = m, m = Math.min(i - 1, c + 2);
                  for (var g = 0; g < 3; g++) e[3 * l + g] = t[3 * c + g];
                  if (r)
                    for (var f = 0; f < 3; f++) e[3 * (l + 1) + f] = .5 * (a * t[3 * u + f] + h * t[3 * c + f] + o * t[3 * s + f] + n * t[3 * m + f]);
                  else {
                    for (var A = 0; A < 2; A++) e[3 * (l + 1) + A] = .5 * (a * t[3 * u + A] + h * t[3 * c + A] + o * t[3 * s + A] + n * t[3 * m + A]);
                    e[3 * (l + 1) + 2] = 0
                  }
                  u = c, l += 2
                }
                for (var d = 0; d < 3; d++) e[3 * l + d] = t[3 * (i - 1) + d]
              }
            }, {
              key: "smoothWaveAndColor",
              value: function(t, e, i, s, r) {
                for (var a, h = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], o = -.15, n = 1.15, l = 1.15, u = -.15, m = 0, c = 0, g = 1, f = 0; f < r - 1; f++) {
                  a = g, g = Math.min(r - 1, f + 2);
                  for (var A = 0; A < 3; A++) i[3 * m + A] = t[3 * f + A];
                  if (h)
                    for (var d = 0; d < 3; d++) i[3 * (m + 1) + d] = .5 * (o * t[3 * c + d] + n * t[3 * f + d] + l * t[3 * a + d] + u * t[3 * g + d]);
                  else {
                    for (var v = 0; v < 2; v++) i[3 * (m + 1) + v] = .5 * (o * t[3 * c + v] + n * t[3 * f + v] + l * t[3 * a + v] + u * t[3 * g + v]);
                    i[3 * (m + 1) + 2] = 0
                  }
                  for (var p = 0; p < 4; p++) s[4 * m + p] = e[4 * f + p], s[4 * (m + 1) + p] = e[4 * f + p];
                  c = f, m += 2
                }
                for (var _ = 0; _ < 3; _++) i[3 * m + _] = t[3 * (r - 1) + _];
                for (var x = 0; x < 4; x++) s[4 * m + x] = e[4 * (r - 1) + x]
              }
            }], (i = null) && s(e.prototype, i), r && s(e, r), t
          }()
        },
      "./src/utils.js":
        /*!**********************!*\
          !*** ./src/utils.js ***!
          \**********************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
  
          function s(t) {
            return function(t) {
              if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
              }
            }(t) || function(t) {
              if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
          }
  
          function r(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          i.r(e), i.d(e, "default", (function() {
            return a
          }));
          var a = function() {
            function t() {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t)
            }
            var e, i, a;
            return e = t, a = [{
              key: "atan2",
              value: function(t, e) {
                var i = Math.atan2(t, e);
                return i < 0 && (i += 2 * Math.PI), i
              }
            }, {
              key: "cloneVars",
              value: function(t) {
                return Object.assign({}, t)
              }
            }, {
              key: "range",
              value: function(t, e) {
                return void 0 === e ? s(Array(t).keys()) : Array.from({
                  length: e - t
                }, (function(e, i) {
                  return i + t
                }))
              }
            }, {
              key: "pick",
              value: function(t, e) {
                for (var i = {}, s = 0; s < e.length; s++) {
                  var r = e[s];
                  i[r] = t[r]
                }
                return i
              }
            }, {
              key: "omit",
              value: function(t, e) {
                for (var i = Object.assign({}, t), s = 0; s < e.length; s++) delete i[e[s]];
                return i
              }
            }], (i = null) && r(e.prototype, i), a && r(e, a), t
          }()
        },
      "./src/visualizer.js":
        /*!***************************!*\
          !*** ./src/visualizer.js ***!
          \***************************/
        /*! exports provided: default */
        function(t, e, i) {
          "use strict";
          i.r(e), i.d(e, "default", (function() {
            return h
          }));
          var s = i( /*! ./audio/audioProcessor */ "./src/audio/audioProcessor.js"),
            r = i( /*! ./rendering/renderer */ "./src/rendering/renderer.js");
  
          function a(t, e) {
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
          }
          var h = function() {
            function t(e, i, a) {
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, t), this.audio = new s.default(e);
              var h = i.getContext("webgl2", {
                alpha: !1,
                antialias: !1,
                depth: !1,
                stencil: !1,
                premultipliedAlpha: !1
              });
              this.baseValsDefaults = {
                decay: .98,
                gammaadj: 2,
                echo_zoom: 2,
                echo_alpha: 0,
                echo_orient: 0,
                red_blue: 0,
                brighten: 0,
                darken: 0,
                wrap: 1,
                darken_center: 0,
                solarize: 0,
                invert: 0,
                fshader: 0,
                b1n: 0,
                b2n: 0,
                b3n: 0,
                b1x: 1,
                b2x: 1,
                b3x: 1,
                b1ed: .25,
                wave_mode: 0,
                additivewave: 0,
                wave_dots: 0,
                wave_thick: 0,
                wave_a: .8,
                wave_scale: 1,
                wave_smoothing: .75,
                wave_mystery: 0,
                modwavealphabyvolume: 0,
                modwavealphastart: .75,
                modwavealphaend: .95,
                wave_r: 1,
                wave_g: 1,
                wave_b: 1,
                wave_x: .5,
                wave_y: .5,
                wave_brighten: 1,
                mv_x: 12,
                mv_y: 9,
                mv_dx: 0,
                mv_dy: 0,
                mv_l: .9,
                mv_r: 1,
                mv_g: 1,
                mv_b: 1,
                mv_a: 1,
                warpanimspeed: 1,
                warpscale: 1,
                zoomexp: 1,
                zoom: 1,
                rot: 0,
                cx: .5,
                cy: .5,
                dx: 0,
                dy: 0,
                warp: 1,
                sx: 1,
                sy: 1,
                ob_size: .01,
                ob_r: 0,
                ob_g: 0,
                ob_b: 0,
                ob_a: 0,
                ib_size: .01,
                ib_r: .25,
                ib_g: .25,
                ib_b: .25,
                ib_a: 0
              }, this.shapeBaseValsDefaults = {
                enabled: 0,
                sides: 4,
                additive: 0,
                thickoutline: 0,
                textured: 0,
                num_inst: 1,
                tex_zoom: 1,
                tex_ang: 0,
                x: .5,
                y: .5,
                rad: .1,
                ang: 0,
                r: 1,
                g: 0,
                b: 0,
                a: 1,
                r2: 0,
                g2: 1,
                b2: 0,
                a2: 0,
                border_r: 1,
                border_g: 1,
                border_b: 1,
                border_a: .1
              }, this.waveBaseValsDefaults = {
                enabled: 0,
                samples: 512,
                sep: 0,
                scaling: 1,
                smoothing: .5,
                r: 1,
                g: 1,
                b: 1,
                a: 1,
                spectrum: 0,
                usedots: 0,
                thick: 0,
                additive: 0
              }, this.renderer = new r.default(h, this.audio, a)
            }
            var e, i, h;
            return e = t, i = [{
              key: "connectAudio",
              value: function(t) {
                this.audioNode = t, this.audio.connectAudio(t)
              }
            }, {
              key: "disconnectAudio",
              value: function(t) {
                this.audio.disconnectAudio(t)
              }
            }, {
              key: "loadPreset",
              value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  i = Object.assign({}, t);
                i.baseVals = Object.assign({}, this.baseValsDefaults, i.baseVals);
                for (var s = 0; s < i.shapes.length; s++) i.shapes[s].baseVals = Object.assign({}, this.shapeBaseValsDefaults, i.shapes[s].baseVals);
                for (var r = 0; r < i.waves.length; r++) i.waves[r].baseVals = Object.assign({}, this.waveBaseValsDefaults, i.waves[r].baseVals);
                if ("function" != typeof i.init_eqs) {
                  i.init_eqs = new Function("a", "".concat(i.init_eqs_str, " return a;")), i.frame_eqs = new Function("a", "".concat(i.frame_eqs_str, " return a;")), i.pixel_eqs_str && "" !== i.pixel_eqs_str ? i.pixel_eqs = new Function("a", "".concat(i.pixel_eqs_str, " return a;")) : i.pixel_eqs = "";
                  for (var a = 0; a < i.shapes.length; a++) 0 !== i.shapes[a].baseVals.enabled && (i.shapes[a] = Object.assign({}, i.shapes[a], {
                    init_eqs: new Function("a", "".concat(i.shapes[a].init_eqs_str, " return a;")),
                    frame_eqs: new Function("a", "".concat(i.shapes[a].frame_eqs_str, " return a;"))
                  }));
                  for (var h = 0; h < i.waves.length; h++)
                    if (0 !== i.waves[h].baseVals.enabled) {
                      var o = {
                        init_eqs: new Function("a", "".concat(i.waves[h].init_eqs_str, " return a;")),
                        frame_eqs: new Function("a", "".concat(i.waves[h].frame_eqs_str, " return a;"))
                      };
                      i.waves[h].point_eqs_str && "" !== i.waves[h].point_eqs_str ? o.point_eqs = new Function("a", "".concat(i.waves[h].point_eqs_str, " return a;")) : o.point_eqs = "", i.waves[h] = Object.assign({}, i.waves[h], o)
                    }
                }
                this.renderer.loadPreset(i, e)
              }
            }, {
              key: "loadExtraImages",
              value: function(t) {
                this.renderer.loadExtraImages(t)
              }
            }, {
              key: "setRendererSize",
              value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.renderer.setRendererSize(t, e, i)
              }
            }, {
              key: "setInternalMeshSize",
              value: function(t, e) {
                this.renderer.setInternalMeshSize(t, e)
              }
            }, {
              key: "setOutputAA",
              value: function(t) {
                this.renderer.setOutputAA(t)
              }
            }, {
              key: "render",
              value: function(t) {
                this.renderer.render(t)
              }
            }, {
              key: "launchSongTitleAnim",
              value: function(t) {
                this.renderer.launchSongTitleAnim(t)
              }
            }, {
              key: "toDataURL",
              value: function() {
                return this.renderer.toDataURL()
              }
            }, {
              key: "warpBufferToDataURL",
              value: function() {
                return this.renderer.warpBufferToDataURL()
              }
            }], i && a(e.prototype, i), h && a(e, h), t
          }()
        }
    })
  }));