! function(a, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("butterchurnPresetsMinimal", [], e) : "object" == typeof exports ? exports.butterchurnPresetsMinimal = e() : a.butterchurnPresetsMinimal = e()
  }("undefined" != typeof self ? self : this, function() {
    return function(a) {
      var e = {};
  
      function t(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return a[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
      }
      return t.m = a, t.c = e, t.d = function(a, e, n) {
        t.o(a, e) || Object.defineProperty(a, e, {
          configurable: !1,
          enumerable: !0,
          get: n
        })
      }, t.n = function(a) {
        var e = a && a.__esModule ? function() {
          return a.default
        } : function() {
          return a
        };
        return t.d(e, "a", e), e
      }, t.o = function(a, e) {
        return Object.prototype.hasOwnProperty.call(a, e)
      }, t.p = "", t(t.s = 419)
    }({
      0: function(a, e, t) {
        a.exports = !t(5)(function() {
          return 7 != Object.defineProperty({}, "a", {
            get: function() {
              return 7
            }
          }).a
        })
      },
      1: function(a, e) {
        a.exports = function(a) {
          return "object" == typeof a ? null !== a : "function" == typeof a
        }
      },
      10: function(a, e, t) {
        var n = t(11);
        n(n.S + n.F * !t(0), "Object", {
          defineProperty: t(4).f
        })
      },
      100: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 4,
            gammaadj: 1.98,
            decay: .5,
            echo_zoom: 1,
            echo_alpha: .5,
            echo_orient: 3,
            wave_mode: 4,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: .527,
            wave_smoothing: .45,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: .8,
            wave_g: .49,
            ob_size: .015,
            ob_a: 1,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: 1.85,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0,
            b2x: .3,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              samples: 506,
              sep: 116,
              spectrum: 1,
              thick: 1,
              scaling: 1.07408,
              smoothing: 0,
              a: .7
            },
            init_eqs_str: "a.n=0;a.m=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.n=Math.floor((a.reg00+.5)*a.sample);a.m=30001+div(a.n,div(a.reg00,a.reg01));a.gmegabuf[Math.floor(a.m)]=a.value1+a.value2;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"
          }, {
            baseVals: {
              enabled: 1,
              samples: 506,
              thick: 1,
              scaling: .89152,
              smoothing: .82
            },
            init_eqs_str: "a.n=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.n=Math.floor((a.reg00+.5)*a.sample)+a.reg00;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"
          }, {
            baseVals: {
              enabled: 1,
              samples: 506,
              thick: 1,
              scaling: .89152,
              smoothing: .82
            },
            init_eqs_str: "a.n=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.n=Math.floor((a.reg00+.5)*a.sample)+2*a.reg00;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"
          }, {
            baseVals: {
              enabled: 1,
              samples: 506,
              spectrum: 1,
              thick: 1
            },
            init_eqs_str: "a.n=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.n=Math.floor((a.reg00-.5)*a.sample)+3*a.reg00;a.x=a.gmegabuf[Math.floor(1E4+a.n)];a.y=a.gmegabuf[Math.floor(15E3+a.n)];a.a=a.gmegabuf[Math.floor(2E4+a.n)];a.b=Math.min(Math.max(a.gmegabuf[Math.floor(25E3+a.n)],0),1);a.r=1-a.b;a.g=.5;"
          }],
          init_eqs_str: "a.xang=0;a.fov=0;a.hell=0;a.cbeat=0;a.index2=0;a.bindex=0;a.ran4=0;a.index=0;a.dec_v=0;a.yang=0;a.q29=0;a.q6=0;a.amp_=0;a.xlen=0;a.smooth=0;a.q1=0;a.dec_med=0;a.sum=0;a.q5=0;a.dec_f=0;a.trely=0;a.flen=0;a.reg01=0;a.my=0;a.oz=0;a.imag=0;a.is_beat=0;a.yind=0;a.oy0a=0;a.dec_slow=0;a.ran2=0;a.ind=0;a.z0=0;a.ylen=0;a.real=0;a.ran4_=0;a.ran3=0;a.q4=0;a.mz=0;a.oy0=0;a.amp=0;a.tc0=0;a.oy=0;a.avg=0;a.mx=0;a.vol=0;a.ran2_=0;a.peak=0;a.decc=0;a.q2=0;a.bd_bt=0;a.zang=0;a.q3=0;a.reg00=0;\na.trelz=0;a.q32=0;a.ran3_=0;a.q28=0;a.trelx=0;a.q30=0;a.ox=0;a.xind=0;for(var b=a.index=0;7E4>b;b++)a.megabuf[Math.floor(a.index)]=0,a.gmegabuf[Math.floor(a.index)]=0,a.index+=1;a.zang=1;a.yang=0;a.zang=2;",
          frame_eqs_str: "a.xlen=45;a.ylen=45;a.flen=30;a.reg00=div(a.xlen*a.ylen,4);a.reg01=div(a.reg00,4);a.dec_med=1-div(.06*30,a.fps);a.dec_slow=1-div(.6,a.fps);a.dec_f=pow(.8,div(30,a.fps));a.q30=a.dec_slow;a.smooth=Math.max(1,pow(6,div(a.fps,30))-2);a.cbeat=a.bass+a.mid+a.treb;a.decc=.00001<Math.abs(a.vol>a.cbeat?1:0)?.8:a.dec_med;a.vol=a.vol*a.decc+(1-a.decc)*a.cbeat;a.avg=a.avg*a.dec_slow+a.cbeat*(1-a.dec_slow);a.is_beat=above(a.cbeat,1.5*a.avg)*above(a.time,a.tc0+.2);a.tc0=.00001<Math.abs(bor(a.is_beat,\na.bd_bt))?a.time:a.tc0;a.peak=.00001<Math.abs(a.is_beat)?a.cbeat:a.peak*a.dec_med;a.ind=0;a.sum=0;a.amp=.01;for(var b=0;b<a.reg01;b++)a.sum+=div(a.gmegabuf[Math.floor(a.ind+3E4)],a.reg01),a.amp+=pow(a.gmegabuf[Math.floor(a.ind+3E4)],2),a.ind+=1;a.ind=0;a.amp_=a.amp_*a.dec_med+600*div((1-a.dec_med)*sqrt(a.amp),a.reg01);for(b=0;b<a.reg01;b++)a.megabuf[Math.floor(a.ind+3E4)]=div(a.gmegabuf[Math.floor(a.ind+3E4)]-a.sum,a.amp_),a.ind+=1;for(b=a.index2=0;b<a.flen;b++){a.index=0;a.real=0;for(var c=a.imag=\n0;c<a.flen;c++)a.real+=Math.cos(6.28*div(a.index,a.flen)*a.index2)*a.megabuf[Math.floor(div(a.index*a.reg01,8)+30002)],a.imag+=Math.sin(6.28*div(a.index,a.flen)*a.index2)*a.megabuf[Math.floor(div(a.index*a.reg01,8)+30002)],a.index+=1;a.megabuf[Math.floor(1E4+a.index2)]=a.megabuf[Math.floor(1E4+a.index2)]*a.dec_f+a.real;a.megabuf[Math.floor(15E3+a.index2)]=a.megabuf[Math.floor(15E3+a.index2)]*a.dec_f+a.imag;a.index2+=1}a.ind=1;for(b=0;b<div(a.flen,2);b++){a.cx=a.megabuf[Math.floor(1E4+a.ind)];a.cy=\na.megabuf[Math.floor(15E3+a.ind)];a.yind=-1;for(c=0;3>c;c++){a.xind=-1;for(var d=0;3>d;d++)a.ox=mod((a.cx+.5)*a.xlen+a.xind,a.xlen),a.oy=mod((a.cy+.5)*a.ylen+a.yind,a.ylen),a.amp=3*(a.cx*a.cx+a.cy*a.cy),a.megabuf[Math.floor(a.oy*a.ylen+a.ox)]-=div(div(60,a.fps)*sqrt(a.amp)*above(a.amp,.02),1+a.xind*a.xind+a.yind*a.yind),a.xind+=1;a.yind+=1}a.ind+=1}for(b=a.yind=0;b<a.ylen;b++){for(c=a.xind=0;c<a.xlen;c++)a.megabuf[Math.floor(a.yind*a.ylen+a.xind+5E3)]=a.dec_med*(div(a.gmegabuf[Math.floor(a.yind*a.ylen+\nmod(a.xind+1,a.xlen))]+a.gmegabuf[Math.floor(a.yind*a.ylen+mod(a.xlen+a.xind-1,a.xlen))]+a.gmegabuf[Math.floor(mod(a.yind+1,a.ylen)*a.ylen+a.xind)]+a.gmegabuf[Math.floor(mod(a.yind+a.ylen-1,a.ylen)*a.ylen+a.xind)]+a.gmegabuf[Math.floor(a.yind*a.ylen+a.xind)]*a.smooth*4,2+2*a.smooth)-a.megabuf[Math.floor(a.yind*a.ylen+a.xind)]),a.xind+=1;a.yind+=1}a.bindex+=a.is_beat;.00001<Math.abs(a.is_beat&&.00001>Math.abs(mod(a.bindex,4)-0)?1:0)?a.ran2=div(randint(100)-30,60):0;.00001<Math.abs(a.is_beat&&.00001>\nMath.abs(mod(a.bindex,4)-2)?1:0)?a.ran3=div(randint(100)-30,60):0;.00001<Math.abs(a.is_beat&&.00001>Math.abs(mod(a.bindex,6)-2)?1:0)?a.ran4=div(randint(100)-30,60):0;a.dec_v=Math.min(Math.max(0,1-div(8*a.vol,a.fps)),a.dec_slow);a.ran2_=a.ran2_*a.dec_v+(1-a.dec_v)*a.ran2;a.ran3_=a.ran3_*a.dec_v+(1-a.dec_v)*a.ran3;a.ran4_=a.ran4_*a.dec_v+(1-a.dec_v)*a.ran4;a.trelx+=div(div(a.ran2_,a.fps),7);a.trely+=div(div(a.ran3_,a.fps),2);a.trelz+=div(div(a.ran4_,a.fps),6);a.zang=6*Math.sin(a.trelz);a.xang=6*Math.sin(div(a.zang,\n5)+a.trelx);a.yang=6*Math.sin(0*div(a.zang,3)+a.trely);a.q1=Math.cos(a.xang);a.q2=Math.sin(a.xang);a.q3=Math.cos(a.yang);a.q4=Math.sin(a.yang);a.q5=Math.cos(a.zang);a.q6=Math.sin(a.zang);a.fov=1;for(b=a.yind=0;b<a.ylen;b++){for(c=a.xind=0;c<a.xlen;c++)a.ind=a.yind*a.ylen+a.xind,a.megabuf[Math.floor(a.ind)]=a.gmegabuf[Math.floor(a.ind)],a.gmegabuf[Math.floor(a.ind)]=a.megabuf[Math.floor(a.ind+5E3)],a.oz=a.yind-div(a.ylen,2),a.ox=.00001<Math.abs(bnot(mod(a.yind,2)))?a.xind:a.xlen-a.xind-1,a.oy0a=div(a.oy0+\na.oy0a,2.5),a.oy=a.gmegabuf[Math.floor(a.yind*a.ylen+a.ox)],a.oy0=a.oy,a.ox-=div(a.xlen,2),a.mx=a.ox*a.q5-a.oy*a.q6,a.my=a.ox*a.q6+a.oy*a.q5,a.ox=a.mx,a.oy=a.my,a.mx=a.ox*a.q3+a.oz*a.q4,a.mz=-a.ox*a.q4+a.oz*a.q3,a.ox=a.mx,a.oz=a.mz,a.my=a.oy*a.q1-a.oz*a.q2,a.mz=a.oy*a.q2+a.oz*a.q1,a.z0=90+40*Math.sin(14*a.trelz),a.oy=a.my,a.oz=a.mz+a.z0,a.gmegabuf[Math.floor(1E4+a.ind)]=div(a.fov*a.ox,a.oz)+.5,a.gmegabuf[Math.floor(15E3+a.ind)]=div(a.fov*a.oy,a.oz)+.5,a.hell=Math.max(Math.min(.5+div(a.oy0,4),1),.1),\na.gmegabuf[Math.floor(2E4+a.ind)]=Math.max(Math.min(a.hell*(.5+.1*(a.oy0a-a.oy0)),1),.1),a.gmegabuf[Math.floor(25E3+a.ind)]=div(a.oy0,16)+.5,a.xind+=1;a.yind+=1}a.q29=div(50*a.fov,a.z0);a.q32=a.aspecty;a.q28=Math.min(div(a.vol,3)-.3,1);a.monitor=a.is_beat;",
          pixel_eqs_str: "a.rot=0;a.zoom=1.1;a.warp=0;a.dy=.02;",
          warp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  tmpvar_1.xyz = vec3(0.0, 0.0, 0.0);\n  ret = tmpvar_1.xyz;\n }",
          comp: "vec3 xlat_mutablecol;\n shader_body { \n  vec2 uv_1;\n  uv_1 = uv;\n  int iter_3;\n  vec3 ret_4;\n  ret_4 = texture (sampler_main, uv).xyz;\n  iter_3 = int((clamp (q29, 0.0, 1.0) * 8.0));\n  for (int n_2 = 1; n_2 < iter_3; n_2++) {\n    vec2 tmpvar_5;\n    tmpvar_5.y = 0.0;\n    tmpvar_5.x = float(n_2);\n    vec2 tmpvar_6;\n    tmpvar_6.y = 0.0;\n    tmpvar_6.x = float(n_2);\n    ret_4 = max (max (ret_4, texture (sampler_main, (uv_1 - \n      (texsize.zw * tmpvar_5)\n    )).xyz), texture (sampler_main, (uv_1 + (texsize.zw * tmpvar_6))).xyz);\n  };\n  float tmpvar_7;\n  tmpvar_7 = clamp ((1.0 - (2.0 * \n    dot (ret_4, vec3(0.32, 0.49, 0.29))\n  )), 0.0, 1.0);\n  float tmpvar_8;\n  float tmpvar_9;\n  tmpvar_9 = (uv.x - 0.5);\n  tmpvar_8 = (0.5 / ((\n    (uv.y + ((tmpvar_9 * 1.4) * (q5 * q3)))\n   - 0.4) + (0.3 * q4)));\n  vec2 tmpvar_10;\n  tmpvar_10.x = (tmpvar_8 * tmpvar_9);\n  tmpvar_10.y = tmpvar_8;\n  vec3 tmpvar_11;\n  tmpvar_11.x = q2;\n  tmpvar_11.y = q4;\n  tmpvar_11.z = q6;\n  xlat_mutablecol = (0.5 + (0.5 * tmpvar_11));\n  float x_12;\n  x_12 = ((uv.x - (\n    dot (ret_4, vec3(0.32, 0.49, 0.29))\n   * 5.0)) + 0.5);\n  ret_4 = (ret_4 * (q28 + (\n    ((6.0 * (0.05 / sqrt(\n      (x_12 * x_12)\n    ))) * (1.0 + xlat_mutablecol))\n   / 2.0)));\n  vec2 tmpvar_13;\n  tmpvar_13.x = q1;\n  tmpvar_13.y = (q3 + time);\n  float tmpvar_14;\n  tmpvar_14 = (((\n    (texture (sampler_noise_lq, (tmpvar_10 + tmpvar_13)).x * tmpvar_7)\n   * \n    float((tmpvar_8 > 0.0))\n  ) * 0.2) * min (1.0, (1.0/(tmpvar_8))));\n  ret_4 = (ret_4 + tmpvar_14);\n  ret_4 = (ret_4 + ((\n    (sin((12.0 * q2)) * tmpvar_7)\n   * tmpvar_14) * dot (\n    (12.0 * ((texture (sampler_blur1, (tmpvar_10 - vec2(-0.5, 0.3))).xyz * scale1) + bias1))\n  , vec3(0.32, 0.49, 0.29))));\n  ret_4 = (ret_4 + ((\n    ((0.5 / abs(tmpvar_8)) * normalize(xlat_mutablecol))\n   * \n    float((tmpvar_8 < 0.0))\n  ) * tmpvar_7));\n  vec4 tmpvar_15;\n  tmpvar_15.w = 1.0;\n  tmpvar_15.xyz = ret_4;\n  ret = tmpvar_15.xyz;\n }"
        }
      },
      101: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1.980001,
            decay: .5,
            echo_zoom: .999998,
            echo_alpha: .5,
            echo_orient: 3,
            modwavealphabyvolume: 1,
            darken: 1,
            wave_a: .001,
            wave_scale: 10.437056,
            wave_smoothing: .45,
            wave_mystery: .08,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 1.4595,
            warpscale: 2.0067,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: 0,
            wave_g: .99,
            ob_size: 0,
            ob_r: 1,
            ob_g: 1,
            ob_b: 1,
            ib_size: 0,
            mv_x: 64,
            mv_y: 48,
            mv_l: 1.85,
            mv_r: .4999,
            mv_g: .4999,
            mv_b: .4999,
            mv_a: 0,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              rad: .048958,
              tex_ang: 1.00531,
              tex_zoom: 1.531168,
              r: .5,
              g: 1,
              b: .9,
              r2: .83,
              g2: .93,
              b2: .8,
              a2: 1,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.trel=0;a.q20=0;a.q28=0;a.q26=0;",
            frame_eqs_str: "a.trel=div(a.time,2)+a.q20;a.x=.5+Math.sin(2*a.trel);a.y=.5+Math.cos(1.3*a.trel+div(a.q28,3));a.a=div(a.q26,4)+.2;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              x: .503,
              rad: .038857,
              tex_zoom: .609857,
              g: .1,
              a: .9,
              r2: 1,
              b2: 1,
              border_r: .5,
              border_g: .5,
              border_b: .5,
              border_a: 0
            },
            init_eqs_str: "a.is_beat=0;a.t0=0;a.q21=0;",
            frame_eqs_str: "a.x=div(randint(10),10);a.y=div(randint(10),10);a.r=div(randint(4),3);a.g=div(randint(4),3);a.b=div(randint(4),3);a.is_beat=above(a.time,a.t0+.03);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.a=Math.min(div(a.q21,2),.9)*a.is_beat;a.rad=div(a.a*a.a,3);"
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              sep: 120,
              additive: 1,
              scaling: .891519,
              smoothing: .82,
              a: .6
            },
            init_eqs_str: "a.k1=0;a.k2=0;a.xi=0;a.yi=0;a.dx=0;a.dy=0;a.q22=0;a.t2=0;a.t1=1+.3*(.01*randint(101)-.01*randint(101));a.t2=1+.3*(.01*randint(101)-.01*randint(101));a.t3=1+.3*(.01*randint(101)-.01*randint(101));a.t4=1+.3*(.01*randint(101)-.01*randint(101));a.t5=1+.3*(.01*randint(101)-.01*randint(101));a.t6=1+.3*(.01*randint(101)-.01*randint(101));a.t7=1+.3*(.01*randint(101)-.01*randint(101));a.t8=1+.3*(.01*randint(101)-.01*randint(101));",
            frame_eqs_str: "a.t2+=a.bass_att;",
            point_eqs_str: "a.k1=mod(100*a.sample,8);a.k2=bnot(a.k1);a.xi=a.value1*a.k2+a.xi*(1-a.k2);a.yi=a.value2*(1-a.k2)+a.yi*a.k2;a.dx=.99*a.dx+a.xi;a.dy=.99*a.dy+a.yi;a.x=.5+div(a.xi,2);a.y=.5+div(a.yi,2);a.a=div(a.q22,8);a.a=Math.min(a.a,.2);"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.index=0;a.q22=0;a.q21=0;a.fade=0;a.q1=0;a.dec_med=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q32=0;a.q20=0;a.fade=.5;",
          frame_eqs_str: "a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.5+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.k1=a.is_beat*equal(a.index,0);a.p1=\na.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.14159265358*a.p2,2);a.q27=a.index+1;a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.zoom=1;a.rot=-0*a.index;a.fade=a.fade*a.dec_med+pow(.996,div(30,a.fps))*(1-a.dec_med);a.q32=a.fade;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec2 zz_1;\n  mat2 tmpvar_2;\n  tmpvar_2[uint(0)] = _qa.xy;\n  tmpvar_2[1u] = _qa.zw;\n  zz_1 = (((\n    (uv - vec2(0.5, 0.5))\n   * texsize.xy) * (0.015 * q27)) * tmpvar_2);\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = (((q32 * texture (sampler_main, \n    (uv + ((clamp (\n      (sin(zz_1) / cos(zz_1))\n    , vec2(-20.0, -20.0), vec2(20.0, 20.0)) * texsize.zw) * 8.0))\n  ).xyz) + (\n    (0.03 * texture (sampler_noise_lq, ((uv * 0.3) + (0.01 * rand_frame).xy)))\n  .xyz * \n    (1.0 - ((texture (sampler_blur1, uv).xyz * scale1) + bias1))\n  )) - 0.02);\n  ret = tmpvar_3.xyz;\n }",
          comp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1 = texture (sampler_main, uv);\n  vec4 tmpvar_2;\n  tmpvar_2.w = 1.0;\n  tmpvar_2.xyz = ((tmpvar_1.xyz + clamp (\n    (3.0 * (((texture (sampler_blur1, \n      (uv - (0.01 * tmpvar_1.xyz).xy)\n    ).xyz * scale1) + bias1) - vec3(0.1, 0.1, 0.2)))\n  , 0.0, 1.0)) * 1.3);\n  ret = tmpvar_2.xyz;\n }"
        }
      },
      104: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 3,
            gammaadj: 1.98,
            decay: .5,
            echo_zoom: 1,
            echo_alpha: .5,
            echo_orient: 3,
            wave_mode: 6,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: .527,
            wave_smoothing: .09,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: .8,
            wave_g: .49,
            ob_a: 1,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: 1.85,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0,
            b2x: .7,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 12,
              num_inst: 1024,
              rad: .03632,
              tex_ang: 1.00531,
              tex_zoom: 1.53117,
              b: 1,
              a: 0,
              g2: 0,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.fov=0;a.n=0;a.x0=0;a.y0=0;a.z0=0;a.q32=0;a.t1=0;",
            frame_eqs_str: "a.fov=a.reg03;a.n=a.instance*a.reg00;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)]+a.reg02;a.x=div(a.x0,a.z0)*a.fov+.5;a.y=div(a.y0,a.z0)*a.q32*a.fov+.5;a.r=a.gmegabuf[Math.floor(a.n+3)];a.g=a.gmegabuf[Math.floor(a.n+4)];a.b=a.gmegabuf[Math.floor(a.n+5)];a.r2=div(a.r,2);a.g2=div(a.g,2);a.b2=div(a.b2,2);a.a=div(a.instance,1024);a.a2=.5*a.a;a.rad=Math.min(div(.02,a.z0),.5)*(0<a.z0?1:0)*2.5*sqrt(a.a);a.rad*=a.gmegabuf[Math.floor(a.n+\n6)];--a.t1;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              scaling: 2.15542,
              smoothing: .2,
              r: 0,
              a: .7
            },
            init_eqs_str: "a.fov=0;a.n=0;a.t1=0;a.x0=0;a.y0=0;a.z0=0;a.k1=0;a.t2=0;",
            frame_eqs_str: "a.t1=1023;a.t2=0;",
            point_eqs_str: "a.fov=a.reg03;a.n=a.t1*a.reg00;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)]+a.reg02;a.x=div(a.x0,a.z0)*a.fov+.5;a.y=div(a.y0,a.z0)*a.fov+.5;a.a=Math.max(0,div(a.t1,1024));a.k1=a.reg01+a.t1;a.r=a.gmegabuf[Math.floor(a.n+3)];a.g=a.gmegabuf[Math.floor(a.n+4)];a.b=a.gmegabuf[Math.floor(a.n+5)];a.a=div(div(a.t1,1024)*(.5<=a.z0?1:0),2);--a.t1;a.gmegabuf[Math.floor(1E4+a.t2)]=Math.abs(a.value1+a.value2);a.t2+=1;"
          }, {
            baseVals: {
              enabled: 1,
              scaling: .89152,
              smoothing: .82,
              r: 0,
              a: .1
            },
            init_eqs_str: "a.fov=0;a.n=0;a.t1=0;a.x0=0;a.y0=0;a.z0=0;",
            frame_eqs_str: "a.t1=512;",
            point_eqs_str: "a.fov=a.reg03;a.n=a.t1*a.reg00;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)]+a.reg02;a.x=div(a.x0,a.z0)*a.fov+.5;a.y=div(a.y0,a.z0)*a.fov+.5;a.r=a.gmegabuf[Math.floor(a.n+3)];a.g=a.gmegabuf[Math.floor(a.n+4)];a.b=a.gmegabuf[Math.floor(a.n+5)];a.a=div(div(a.t1,1024)*(.5<=a.z0?1:0),2);--a.t1;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: 'a.xang=0;a.n=0;a.fov=0;a.index2=0;a.ran9=0;a.ran5_=0;a.right=0;a.ran4=0;a.index=0;a.q12=0;a.yang=0;a.q6=0;a.y0=0;a.ran8=0;a.q1=0;a.r1=0;a.q5=0;a.ran1_=0;a.points=0;a.dt1=0;a.dec_f=0;a.x0=0;a["new"]=0;a.dec_s=0;a.k3=0;a.reg01=0;a.my=0;a.oz=0;a.is_beat=0;a.k1=0;a.ran2=0;a.q11=0;a.z0=0;a.q10=0;a.ran4_=0;a.ran9_=0;a.ran3=0;a.ran5=0;a.dec_m=0;a.ran7=0;a.k2=0;a.mz=0;a.ran8_=0;a.ddy=0;a.ran6=0;a.dec2=0;a.ran6_=0;a.oy=0;a.rsum=0;a.mx=0;a.beat=0;a.vol=0;a.ran2_=0;a.peak=0;a.ddx=0;a.q2=\n0;a.zang=0;a.trel1=0;a.ran7_=0;a.t0=0;a.dec=0;a.m=0;a.ran1=0;a.q32=0;a.ran3_=0;a.left=0;a.pk=0;a.recsize=0;a.ox=0;a.zofs=0;for(var b=a.index=0;1E5>b;b++)a.megabuf[Math.floor(a.index)]=0,a.gmegabuf[Math.floor(a.index)]=0,a.index+=1;a.recsize=8;a.reg00=a.recsize;a.points=1024;a.reg01=0;a.zofs=1+2*div(randint(100),100);a.reg02=a.zofs;a.fov=.3;a.reg03=a.fov;',
          frame_eqs_str: 'a.dec_f=pow(.3,div(30,a.fps));a.dec_m=pow(.85,div(30,a.fps));a.dec_s=pow(.95,div(30,a.fps));a.beat=a.bass+a.mid+a.treb-(a.bass_att+a.mid_att+a.treb_att)+(a.bass+a.mid+a.treb);a.beat/=3;a.peak=a.peak*a.dec_m+(1-a.dec_m)*pow(a.beat-1,1)*(1<a.beat?1:0)*4;a.is_beat=above(a.beat,1)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);.00001<Math.abs(a.is_beat)?(a.ran1=div(randint(100),50)-\n1,a.ran2=div(randint(100),50)-1,a.ran3=div(randint(100),50)-1):0;a.ran1_=a.dec_m*a.ran1_+(1-a.dec_m)*a.ran1;a.ran2_=a.dec_m*a.ran2_+(1-a.dec_m)*a.ran2;a.ran3_=a.dec_m*a.ran3_+(1-a.dec_m)*a.ran3;a.rsum=sqrt(a.ran1_*a.ran1_+a.ran2_*a.ran2_+a.ran3_*a.ran3_);.00001<Math.abs(a.is_beat*(.00001>Math.abs(a.index-2)?1:0))?(a.ran4=div(randint(100),50)-1,a.ran5=div(randint(100),50)-1,a.ran6=div(randint(100),50)-1):0;a.ran4_=a.dec_m*a.ran4_+(1-a.dec_m)*a.ran4;a.ran5_=a.dec_m*a.ran5_+(1-a.dec_m)*a.ran5;a.ran6_=\na.dec_m*a.ran6_+(1-a.dec_m)*a.ran6;.00001<Math.abs(a.is_beat*(.00001>Math.abs(a.index-6)?1:0))?(a.ran7=div(randint(100),50)-1,a.ran8=div(randint(100),50)-1,a.ran9=div(randint(100),50)-1):0;a.ran7_=a.dec_m*a.ran7_+(1-a.dec_m)*a.ran7;a.ran8_=a.dec_m*a.ran8_+(1-a.dec_m)*a.ran8;a.ran9_=a.dec_m*a.ran9_+(1-a.dec_m)*a.ran9;a.pk=sqrt(a.peak+.1);a["new"]=Math.floor(12*(a.ran4-a.ran5)*a.pk-div(12*(a.ran3-a.ran1),a.pk));a["new"]=Math.max(Math.min(a["new"],20),2);a.reg01+=a["new"];a.dec=a.dec_m;a.n=a.recsize*\na.points;a.m=0;a.dt1=div(div(.00001<Math.abs(0<a.ran1?1:0)?4*a.pk:div(4,a.pk),a.fps)*a["new"],6);a.vol=Math.max(a.ran1+a.ran2,.2)*a.pk*2;for(var b=0;b<a["new"];b++)a.trel1+=a.dt1,a.x0=a.x0*a.dec+(1-a.dec)*(Math.sin(a.trel1+6*a.ran3)*a.vol+a.ran1),a.y0=a.y0*a.dec+(1-a.dec)*(Math.sin(a.trel1+6*a.ran2)*a.vol+a.ran2),a.z0=a.z0*a.dec+(1-a.dec)*(Math.sin(a.trel1+6*a.ran1)*a.vol+a.ran3),a.gmegabuf[Math.floor(a.n)]=a.x0,a.gmegabuf[Math.floor(a.n+1)]=a.y0,a.gmegabuf[Math.floor(a.n+2)]=a.z0,a.gmegabuf[Math.floor(a.n+\n3)]=div(div(a.ran1_,a.rsum),3)+.5,a.gmegabuf[Math.floor(a.n+4)]=div(div(a.ran2_,a.rsum),3)+.5,a.gmegabuf[Math.floor(a.n+5)]=div(div(a.ran3_,a.rsum),3)+.5,a.gmegabuf[Math.floor(a.n+6)]=0*a.gmegabuf[Math.floor(1E4+a.m)]+1,a.n+=a.recsize,a.m+=1;for(b=a.n=0;b<a.recsize*a.points;b++)a.gmegabuf[Math.floor(a.n)]=a.gmegabuf[Math.floor(a.n+a["new"]*a.recsize)],a.n+=1;a.xang=div(a.ran4_,a.fps);a.yang=div(a.ran5_,a.fps);a.zang=div(a.ran6_,a.fps);a.ddx=Math.min(Math.max(a.ddx+div(a.yang,a.fps),-1),1);a.ddy=Math.min(Math.max(a.ddy+\ndiv(a.xang,a.fps),-1),1);a.q1=2*a.ddx;a.q2=2*a.ddy;for(b=a.n=0;b<a.points;b++)a.ox=a.gmegabuf[Math.floor(a.n)],a.oy=a.gmegabuf[Math.floor(a.n+1)],a.oz=a.gmegabuf[Math.floor(a.n+2)],a.mx=a.ox*Math.cos(a.zang)-a.oy*Math.sin(a.zang),a.my=a.ox*Math.sin(a.zang)+a.oy*Math.cos(a.zang),a.ox=a.mx,a.oy=a.my,a.mx=a.ox*Math.cos(a.yang)+a.oz*Math.sin(a.yang),a.mz=-a.ox*Math.sin(a.yang)+a.oz*Math.cos(a.yang),a.ox=a.mx,a.oz=a.mz,a.my=a.oy*Math.cos(a.xang)-a.oz*Math.sin(a.xang),a.mz=a.oy*Math.sin(a.xang)+a.oz*Math.cos(a.xang),\na.oy=a.my,a.oz=a.mz,a.gmegabuf[Math.floor(a.n)]=a.ox,a.gmegabuf[Math.floor(a.n+1)]=a.oy,a.gmegabuf[Math.floor(a.n+2)]=a.oz,a.n+=a.recsize;a.k1=div(div(a.ran7_,a.fps),2);a.k2=div(div(a.ran8_,a.fps),2);a.k3=div(Math.abs(a.ran9_),a.fps);a.dec=.4+.6*a.ran5_;a.dec2=1-a.dec;a.r1=.5+.3*a.ran4_;for(b=a.n=0;b<a.points-1;b++)a.m=a.n*a.recsize,a.left=mod(a.n-1+a.points,a.points)*a.recsize,a.right=mod(a.n+1+a.points,a.points)*a.recsize,a.gmegabuf[Math.floor(a.m)]=a.dec*a.gmegabuf[Math.floor(a.m)]+a.dec2*(a.gmegabuf[Math.floor(a.left)]*\na.r1+a.gmegabuf[Math.floor(a.right)]*(1-a.r1)+a.k1),a.gmegabuf[Math.floor(a.m+1)]=a.dec*a.gmegabuf[Math.floor(a.m+1)]+a.dec2*(a.gmegabuf[Math.floor(a.left+1)]*a.r1+a.gmegabuf[Math.floor(a.right+1)]*(1-a.r1)+a.k2),a.n+=1;a.m=mod(a.frame,a.points);a.m=Math.max(0,Math.floor(1024+200*(a.t0-a.time)));a.n=a.m*a.recsize;a.q5=div(a.gmegabuf[Math.floor(a.n)],a.gmegabuf[Math.floor(a.n+2)]+a.zofs)*a.fov;a.q6=div(-a.gmegabuf[Math.floor(a.n+1)],a.gmegabuf[Math.floor(a.n+2)]+a.zofs)*a.fov;a.q10=sqrt(a.gmegabuf[Math.floor(a.n+\n3)]);a.q11=sqrt(a.gmegabuf[Math.floor(a.n+4)]);a.q12=sqrt(a.gmegabuf[Math.floor(a.n+5)]);a.monitor=a.m;a.q32=a.aspecty;',
          pixel_eqs_str: "a.rot=0;a.zoom=1;a.warp=0;a.dy=0;a.dx=-0;",
          warp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  tmpvar_1.xyz = vec3(0.0, 0.0, 0.0);\n  ret = tmpvar_1.xyz;\n }",
          comp: "float xlat_mutablesmask;\nvec2 xlat_mutableuv1;\nvec2 xlat_mutableuv2;\nvec2 xlat_mutableuv3;\nvec2 xlat_mutableuv4;\n shader_body { \n  float flash_1;\n  float dist_2;\n  float stars_3;\n  vec3 ret_4;\n  xlat_mutableuv1 = ((uv - 0.5) * aspect.xy);\n  float tmpvar_5;\n  tmpvar_5 = (0.1 * time);\n  float tmpvar_6;\n  tmpvar_6 = (0.2 * rad);\n  dist_2 = ((1.0 - fract(\n    (0.3333333 + tmpvar_5)\n  )) * (1.0 - tmpvar_6));\n  vec2 tmpvar_7;\n  tmpvar_7.x = q1;\n  tmpvar_7.y = q2;\n  xlat_mutableuv3 = (xlat_mutableuv1 + tmpvar_7);\n  xlat_mutableuv4 = ((32.0 * dist_2) * xlat_mutableuv3);\n  xlat_mutablesmask = (texture (sampler_pw_noise_lq, (xlat_mutableuv4 / 256.0)).y - 0.9);\n  vec2 tmpvar_8;\n  tmpvar_8 = abs((fract(xlat_mutableuv4) - 0.5));\n  stars_3 = max (0.0, clamp ((\n    (1.0 - dist_2)\n   * \n    ((0.1 / sqrt(dot (tmpvar_8, tmpvar_8))) * xlat_mutablesmask)\n  ), 0.0, 1.0));\n  dist_2 = ((1.0 - fract(\n    (0.6666667 + tmpvar_5)\n  )) * (1.0 - tmpvar_6));\n  vec2 tmpvar_9;\n  tmpvar_9.x = q1;\n  tmpvar_9.y = q2;\n  xlat_mutableuv3 = (xlat_mutableuv1 + tmpvar_9);\n  xlat_mutableuv4 = ((32.0 * dist_2) * xlat_mutableuv3);\n  xlat_mutablesmask = (texture (sampler_pw_noise_lq, (xlat_mutableuv4 / 256.0)).y - 0.9);\n  vec2 tmpvar_10;\n  tmpvar_10 = abs((fract(xlat_mutableuv4) - 0.5));\n  stars_3 = (stars_3 + max (stars_3, clamp (\n    ((1.0 - dist_2) * ((0.1 / sqrt(\n      dot (tmpvar_10, tmpvar_10)\n    )) * xlat_mutablesmask))\n  , 0.0, 1.0)));\n  dist_2 = ((1.0 - fract(\n    (1.0 + tmpvar_5)\n  )) * (1.0 - tmpvar_6));\n  vec2 tmpvar_11;\n  tmpvar_11.x = q1;\n  tmpvar_11.y = q2;\n  xlat_mutableuv3 = (xlat_mutableuv1 + tmpvar_11);\n  xlat_mutableuv4 = ((32.0 * dist_2) * xlat_mutableuv3);\n  xlat_mutablesmask = (texture (sampler_pw_noise_lq, (xlat_mutableuv4 / 256.0)).y - 0.9);\n  vec2 tmpvar_12;\n  tmpvar_12 = abs((fract(xlat_mutableuv4) - 0.5));\n  stars_3 = (stars_3 + max (stars_3, clamp (\n    ((1.0 - dist_2) * ((0.1 / sqrt(\n      dot (tmpvar_12, tmpvar_12)\n    )) * xlat_mutablesmask))\n  , 0.0, 1.0)));\n  vec2 tmpvar_13;\n  tmpvar_13.x = q5;\n  tmpvar_13.y = q6;\n  xlat_mutableuv2 = (xlat_mutableuv1 - tmpvar_13);\n  float tmpvar_14;\n  tmpvar_14 = ((0.01 / sqrt(\n    dot (xlat_mutableuv2, xlat_mutableuv2)\n  )) * min (3.0, (\n    ((mid - 0.5) * float((mid > 0.5)))\n   * 2.0)));\n  flash_1 = tmpvar_14;\n  float angle_15;\n  float tmpvar_16;\n  tmpvar_16 = abs(xlat_mutableuv2.x);\n  if ((xlat_mutableuv2.y >= 0.0)) {\n    angle_15 = (1.0 - ((xlat_mutableuv2.y - tmpvar_16) / (xlat_mutableuv2.y + tmpvar_16)));\n  } else {\n    angle_15 = (3.0 - ((xlat_mutableuv2.y + tmpvar_16) / (tmpvar_16 - xlat_mutableuv2.y)));\n  };\n  angle_15 = (angle_15 * 0.25);\n  float tmpvar_17;\n  if ((xlat_mutableuv2.x < 0.0)) {\n    tmpvar_17 = -(angle_15);\n  } else {\n    tmpvar_17 = angle_15;\n  };\n  flash_1 = (tmpvar_14 * (tmpvar_14 / (\n    abs((fract((\n      (3.0 * tmpvar_17)\n     + \n      (time * 2.0)\n    )) - 0.5))\n   + 0.18)));\n  vec3 tmpvar_18;\n  tmpvar_18 = max ((texture (sampler_main, uv).xyz * 2.0), ((\n    (texture (sampler_blur2, uv).xyz * scale2)\n   + bias2) * 2.0));\n  vec2 tmpvar_19;\n  tmpvar_19 = sin(xlat_mutableuv3);\n  ret_4 = (clamp ((0.025 / \n    sqrt(dot (tmpvar_19, tmpvar_19))\n  ), 0.0, 1.0) * vec3(0.4, 0.1, 1.0));\n  ret_4 = (ret_4 + clamp ((stars_3 * stars_3), 0.0, 1.0));\n  ret_4 = (ret_4 * clamp ((1.0 - \n    (2.0 * dot (tmpvar_18, vec3(0.32, 0.49, 0.29)))\n  ), 0.0, 1.0));\n  ret_4 = (ret_4 + tmpvar_18);\n  vec3 tmpvar_20;\n  tmpvar_20.x = q10;\n  tmpvar_20.y = q11;\n  tmpvar_20.z = q12;\n  ret_4 = (ret_4 + ((2.0 * \n    clamp (flash_1, 0.0, 1.0)\n  ) * tmpvar_20));\n  vec4 tmpvar_21;\n  tmpvar_21.w = 1.0;\n  tmpvar_21.xyz = ret_4;\n  ret = tmpvar_21.xyz;\n }"
        }
      },
      105: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 4,
            gammaadj: 1.98,
            decay: .5,
            echo_zoom: 1,
            echo_alpha: .5,
            echo_orient: 3,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            darken: 1,
            wave_a: .001,
            wave_scale: .133,
            wave_smoothing: 0,
            wave_mystery: -1,
            modwavealphastart: 1,
            modwavealphaend: 1.3,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: .5,
            wave_g: .5,
            wave_b: .5,
            ob_size: .015,
            ob_b: 1,
            ib_size: .26,
            mv_a: 0,
            b2x: .3,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 40,
              thickoutline: 1,
              rad: .06623,
              tex_zoom: 1.79845,
              r: 0,
              a: .1,
              g2: 0,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.vol=0;a.bob=0;a.border_1=0;a.ro=0;a.sp=0;a.red=0;a.spi=0;a.tm=0;a.bob=1.5;a.ro=0;a.red=randint(20);",
            frame_eqs_str: "a.vol=1+.2*div(a.bass_att+a.treb_att+a.mid_att,3);a.bob=a.bob*above(a.bob,.01)-.01+(1-above(a.bob,.01));a.bob=.4+.4*Math.sin(.8*a.time);a.bob*=a.vol;a.border_1=.4;a.sides=30;a.ro+=.02;a.ang=a.ro;a.sp=.025*a.red;a.spi=.5-a.sp;a.tm=.1*a.time;a.border_r=.5+a.sp*Math.sin(.6*a.tm)+a.spi*Math.cos(1.46*a.tm);a.border_g=.5+a.sp*Math.sin(1.294*a.tm)+a.spi*Math.cos(.87*a.tm);a.border_b=.5+a.sp*Math.sin(1.418*a.tm)+a.spi*Math.cos(.76*a.tm);"
          }, {
            baseVals: {
              enabled: 1,
              sides: 40,
              additive: 1,
              num_inst: 4,
              g: 1,
              b: 1,
              g2: 0,
              border_a: 0
            },
            init_eqs_str: "",
            frame_eqs_str: "a.x=.5+.225*Math.sin(.7*div(a.time,a.instance));a.y=.5+.3*Math.cos(.7*div(a.time,a.instance));a.x-=.4*a.x*Math.sin(a.time);a.y-=.4*a.y*Math.cos(a.time);a.rad*=a.mid_att;a.r=.5+.5*Math.sin(.5*a.frame);a.b=.5+.5*Math.sin(.5*a.frame+2.094);a.g=.5+.5*Math.sin(.5*a.frame+4.188);"
          }, {
            baseVals: {
              enabled: 1,
              sides: 40,
              additive: 1,
              g: 1,
              b: 1,
              g2: 0,
              border_a: 0
            },
            init_eqs_str: "",
            frame_eqs_str: "a.x=.5+.5*(.3*Math.sin(1.1*a.time)+.7*Math.sin(.5*a.time));a.x=.5+.225*Math.sin(a.time+2.09);a.y=.5+.3*Math.cos(a.time+2.09);a.rad*=a.bass_att;a.r=.5+.5*Math.sin(.5*a.frame);a.b=.5+.5*Math.sin(.5*a.frame+2.094);a.g=.5+.5*Math.sin(.5*a.frame+4.188);"
          }, {
            baseVals: {
              enabled: 1,
              sides: 40,
              additive: 1,
              num_inst: 5,
              rad: .07419,
              g: 1,
              b: 1,
              g2: 0,
              border_a: 0
            },
            init_eqs_str: "",
            frame_eqs_str: "a.x=.5+.225*Math.sin(div(a.time,a.instance));a.y=.5+.3*Math.cos(div(a.time,a.instance));a.x+=.4*a.x*Math.sin(a.time);a.y+=.4*a.y*Math.cos(a.time);a.rad*=a.treb_att;a.r=.5+.5*Math.sin(.5*a.frame);a.b=.5+.5*Math.sin(.5*a.frame+2.094);a.g=.5+.5*Math.sin(.5*a.frame+4.188);"
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.index2=0;a.index=0;a.q22=0;a.q21=0;a.q1=0;a.dec_med=0;a.ps=0;a.rott=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.avg=0;a.beat=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.q28=0;a.q20=0;",
          frame_eqs_str: "a.dec_med=pow(.7,div(30,a.fps));a.dec_slow=pow(.99,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),2);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.ps=.9*a.ps+.1*a.q22;a.q23=a.ps;a.q24=a.is_beat;\na.q26=a.bass_att+a.mid_att+a.treb_att;a.q27=a.index+1;a.q28=a.index2;a.k1=a.is_beat*equal(mod(a.index,2),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;",
          pixel_eqs_str: "a.zoom=1.05;",
          warp: " shader_body { \n  vec2 uv_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (uv - vec2(0.5, 0.5));\n  vec4 tmpvar_3;\n  tmpvar_3.w = 0.0;\n  vec4 tmpvar_4;\n  tmpvar_4 = texture (sampler_blur1, uv);\n  tmpvar_3.xyz = ((tmpvar_4.xyz * scale1) + bias1);\n  float tmpvar_5;\n  tmpvar_5 = (dot (tmpvar_3, roam_sin) * 16.0);\n  mat2 tmpvar_6;\n  tmpvar_6[uint(0)].x = cos(tmpvar_5);\n  tmpvar_6[uint(0)].y = -(sin(tmpvar_5));\n  tmpvar_6[1u].x = sin(tmpvar_5);\n  tmpvar_6[1u].y = cos(tmpvar_5);\n  uv_1 = ((tmpvar_2 + (\n    (0.2 * dot (((tmpvar_4.xyz * scale1) + bias1), vec3(0.32, 0.49, 0.29)))\n   * \n    (tmpvar_2 * tmpvar_6)\n  )) - 0.5);\n  vec2 tmpvar_7;\n  tmpvar_7 = ((uv_1 * texsize.xy) * 0.02);\n  vec2 tmpvar_8;\n  tmpvar_8.x = (cos((tmpvar_7.y * q1)) * sin(-(tmpvar_7.y)));\n  tmpvar_8.y = (sin(tmpvar_7.x) * cos((tmpvar_7.y * q2)));\n  uv_1 = (uv_1 - ((tmpvar_8 * texsize.zw) * 12.0));\n  vec4 tmpvar_9;\n  tmpvar_9.w = 1.0;\n  tmpvar_9.xyz = ((texture (sampler_main, uv_1).xyz * 0.98) - 0.02);\n  ret = tmpvar_9.xyz;\n }",
          comp: "vec3 xlat_mutableret1;\nvec2 xlat_mutablers;\nvec2 xlat_mutableuv1;\nfloat xlat_mutablez;\n shader_body { \n  xlat_mutableuv1 = (uv - 0.5);\n  xlat_mutablez = (0.2 / abs(xlat_mutableuv1.y));\n  xlat_mutablers.x = (xlat_mutableuv1.x * xlat_mutablez);\n  xlat_mutablers.y = ((xlat_mutablez / 2.0) + (time * 4.0));\n  vec4 tmpvar_1;\n  tmpvar_1 = texture (sampler_noise_hq, xlat_mutablers);\n  xlat_mutableret1 = ((tmpvar_1.xyz * vec3(\n    greaterThanEqual (tmpvar_1.xyz, vec3(0.0, 0.0, 0.0))\n  )) - 0.6);\n  float tmpvar_2;\n  tmpvar_2 = clamp ((128.0 * xlat_mutableuv1.y), 0.0, 1.0);\n  vec2 tmpvar_3;\n  tmpvar_3 = fract(((\n    (xlat_mutableuv1 * (1.0 - abs(xlat_mutableuv1.x)))\n   - 0.5) - (\n    (xlat_mutableret1 * 0.05)\n   * tmpvar_2).xy));\n  float x_4;\n  x_4 = (tmpvar_3.y - 0.52);\n  vec3 tmpvar_5;\n  tmpvar_5 = (texture (sampler_main, tmpvar_3) + ((0.02 / \n    (0.02 + sqrt((x_4 * x_4)))\n  ) * slow_roam_sin)).xyz;\n  xlat_mutableret1 = tmpvar_5;\n  vec2 tmpvar_6;\n  tmpvar_6 = (32.0 * ((\n    (uv * mat2(0.6, -0.8, 0.8, 0.6))\n   + \n    (tmpvar_5 * 0.1)\n  .xy) + (time / 64.0)));\n  vec2 tmpvar_7;\n  tmpvar_7 = abs((fract(tmpvar_6) - 0.5));\n  vec3 tmpvar_8;\n  tmpvar_8 = clamp (((0.25 / \n    sqrt(dot (tmpvar_7, tmpvar_7))\n  ) * vec3((texture (sampler_pw_noise_lq, \n    (tmpvar_6 / 256.0)\n  ).y - 0.9))), 0.0, 1.0);\n  vec4 tmpvar_9;\n  tmpvar_9.w = 1.0;\n  tmpvar_9.xyz = (tmpvar_5 + ((\n    (tmpvar_8.x * tmpvar_8.x)\n   + \n    ((rand_preset * (0.5 - uv.y)).xyz * vec3(0.0, 0.0, 1.0))\n  ) * (1.0 - tmpvar_2)));\n  ret = tmpvar_9.xyz;\n }"
        }
      },
      107: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 3,
            wave_mode: 4,
            additivewave: 1,
            wave_dots: 1,
            modwavealphabyvolume: 1,
            wave_a: .331,
            wave_scale: .898,
            wave_smoothing: .108,
            wave_mystery: .1,
            modwavealphastart: .72,
            modwavealphaend: 1.28,
            zoom: 1.3345,
            wave_r: 0,
            wave_g: .5,
            wave_b: .5,
            wave_y: .54,
            mv_x: 24.8,
            mv_dy: .16,
            mv_l: 1.5,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              samples: 352,
              usedots: 1,
              additive: 1,
              scaling: .03856,
              smoothing: .2,
              g: 0
            },
            init_eqs_str: "a.t02=0;a.q1=0;a.ratio=0;a.ampl=0;a.x1=0;a.y1=0;",
            frame_eqs_str: "a.q1=a.bass_att;",
            point_eqs_str: "a.r=Math.abs(Math.sin(div(a.frame,38)));a.g=.5*Math.abs(Math.cos(div(a.frame,45)));a.b=.5*Math.abs(Math.sin(div(a.frame,133)));a.a=.3;a.t02+=div(a.q1,10);a.ratio=Math.sin(div(a.frame,49));a.ampl=.01+.4*sqr(Math.sin(div(a.frame,18))*Math.cos(div(a.frame,123)));a.x1=div(a.r-.5,15)+.5+a.ampl*Math.sin(6.28*a.sample);a.y1=div(a.b-.5,15)+.5+a.ampl*Math.cos(6.28*a.sample);a.x=a.x1+.2*(a.ampl+a.ratio)*Math.sin(6.28*a.sample*a.ratio*7.3);a.y=a.y1+.2*(a.ampl+a.ratio)*Math.cos(37.68*a.sample);\n"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.oldshift=0;a.shift=0;a.normalframez=0;a.crash=0;a.nex=0;a.rshift=0;a.q1=0;a.zoom1=0;",
          frame_eqs_str: "a.dx=0;a.oldshift=a.shift;a.normalframez+=1;a.shift=above(a.bass_att,1)*above(a.treb_att,.9);a.crash=Math.abs(a.oldshift-a.shift);a.nex=1*equal(a.rshift,0)+2*equal(a.rshift,1);a.rshift=.00001<Math.abs(a.crash)?a.nex:a.rshift;a.monitor=a.rshift;a.wave_r=div(Math.floor(randint(200)),200);a.wave_g=div(Math.floor(randint(200)),200);a.wave_b=div(Math.floor(randint(200)),200);a.warp=0;a.q1=above(a.bass_att,1.3);a.zoom1=a.zoom+.15-.3*mod(a.normalframez,2);a.zoom=.00001<Math.abs(a.shift)?\na.zoom1:1;a.rot=a.rot-.1+.1*a.rshift;",
          pixel_eqs_str: "a.dy=.007*-below(a.y,.4)+.007*above(a.y,.6);",
          warp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  tmpvar_1.xyz = ((texture (sampler_main, (uv_orig + \n    ((uv - uv_orig) * dot (texture (sampler_main, uv).xyz, vec3(0.32, 0.49, 0.29)))\n  )).xyz * 0.99) - 0.002);\n  ret = tmpvar_1.xyz;\n }",
          comp: " shader_body { \n  vec3 ret_1;\n  ret_1 = (texture (sampler_main, uv).xyz * 2.0);\n  ret_1 = (ret_1 * (1.0 - ret_1));\n  ret_1 = (((1.0 - \n    pow (clamp (ret_1, 0.0, 1.0), vec3(0.5, 0.5, 0.5))\n  ) * 1.5) - 0.75);\n  vec4 tmpvar_2;\n  tmpvar_2.w = 1.0;\n  tmpvar_2.xyz = ret_1;\n  ret = tmpvar_2.xyz;\n }"
        }
      },
      11: function(a, e, t) {
        var n = t(2),
          r = t(3),
          s = t(12),
          _ = t(14),
          v = function(a, e, t) {
            var m, i, o, l = a & v.F,
              p = a & v.G,
              b = a & v.S,
              x = a & v.P,
              d = a & v.B,
              u = a & v.W,
              c = p ? r : r[e] || (r[e] = {}),
              h = c.prototype,
              g = p ? n : b ? n[e] : (n[e] || {}).prototype;
            for (m in p && (t = e), t)(i = !l && g && void 0 !== g[m]) && m in c || (o = i ? g[m] : t[m], c[m] = p && "function" != typeof g[m] ? t[m] : d && i ? s(o, n) : u && g[m] == o ? function(a) {
              var e = function(e, t, n) {
                if (this instanceof a) {
                  switch (arguments.length) {
                    case 0:
                      return new a;
                    case 1:
                      return new a(e);
                    case 2:
                      return new a(e, t)
                  }
                  return new a(e, t, n)
                }
                return a.apply(this, arguments)
              };
              return e.prototype = a.prototype, e
            }(o) : x && "function" == typeof o ? s(Function.call, o) : o, x && ((c.virtual || (c.virtual = {}))[m] = o, a & v.R && h && !h[m] && _(h, m, o)))
          };
        v.F = 1, v.G = 2, v.S = 4, v.P = 8, v.B = 16, v.W = 32, v.U = 64, v.R = 128, a.exports = v
      },
      114: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1,
            decay: 1,
            echo_zoom: 1,
            echo_orient: 1,
            wave_thick: 1,
            wave_brighten: 0,
            wrap: 0,
            brighten: 1,
            wave_a: .401,
            wave_scale: 3.177,
            wave_smoothing: 0,
            wave_mystery: -.4,
            modwavealphastart: 1,
            modwavealphaend: 1,
            warpanimspeed: 2.289,
            warpscale: 5.472,
            zoomexp: .01,
            zoom: .9901,
            warp: 1.8566,
            ob_size: .005,
            ob_a: 1,
            ib_size: 0,
            ib_r: 1,
            ib_g: 0,
            ib_b: 0,
            ib_a: 1,
            mv_x: 64,
            mv_y: 48,
            mv_l: 0,
            mv_b: 0,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 12,
              additive: 1,
              num_inst: 512,
              y: .55,
              rad: .034,
              tex_zoom: .7874,
              g: .45,
              g2: 0,
              border_a: 0
            },
            init_eqs_str: "a.my_z=0;a.d=0;a.y3=0;a.z2=0;a.y1=0;a.w=0;a.w2=0;a.t1=0;a.x1=0;a.rnd2=0;a.zoom=0;a.p=0;a.q1=0;a.q5=0;a.z3=0;a.w3=0;a.t3=0;a.my_x=0;a.x3=0;a.wv=0;a.my_y=0;a.q4=0;a.t=0;a.w1=0;a.i=0;a.x2=0;a.t2=0;a.l=0;a.y2=0;a.rnd4=0;a.wh=0;a.q2=0;a.z1=0;a.rnd3=0;a.rnd1=0;a.q3=0;a.t4=0;a.started=0;a.t1=.412;a.t2=.4563;a.t3=.6452;a.t4=.2565;",
            frame_eqs_str: "a.rnd1=.00001<Math.abs(equal(a.instance,0))?a.t1:a.rnd1;a.rnd2=.00001<Math.abs(equal(a.instance,0))?a.t2:a.rnd2;a.rnd3=.00001<Math.abs(equal(a.instance,0))?a.t3:a.rnd3;a.rnd4=.00001<Math.abs(equal(a.instance,0))?a.t4:a.rnd4;a.rnd1=4*a.rnd1*(1-a.rnd1);a.rnd2=4*a.rnd2*(1-a.rnd2);a.rnd3=4*a.rnd3*(1-a.rnd3);a.rnd4=4*a.rnd4*(1-a.rnd4);a.t=.6;a.t=a.rnd1+a.time*a.t-Math.floor(a.rnd1+a.time*a.t);a.t+=.1*a.rnd2;a.wh=a.rnd4*Math.asin(1)*4;a.wv=.25+.1*a.rnd3;a.d=1.4;a.zoom=1;a.l=1;a.w1=\na.q3;a.w2=a.q4;a.w3=a.q5;a.i=a.instance;a.my_x=a.t*Math.cos(a.wh)*Math.sin(a.wv)*a.l;a.my_y=(-.5+(a.t-.75)*(a.t-.75))*Math.cos(a.wv)*a.l;a.my_z=a.t*Math.sin(a.wh)*Math.sin(a.wv)*a.l;a.x1=Math.cos(a.w1)*a.my_x+Math.sin(a.w1)*a.my_y;a.y1=-Math.sin(a.w1)*a.my_x+Math.cos(a.w1)*a.my_y;a.z1=a.my_z;a.x2=Math.cos(a.w2)*a.x1+Math.sin(a.w2)*a.z1;a.z2=-Math.sin(a.w2)*a.x1+Math.cos(a.w2)*a.z1;a.y2=a.y1;a.y3=Math.cos(a.w3)*a.y2+Math.sin(a.w3)*a.z2;a.z3=-Math.sin(a.w3)*a.y2+Math.cos(a.w3)*a.z2;a.x3=a.x2;a.l=sqrt(a.x3*\na.x3+a.y3*a.y3);a.w=Math.atan2(a.x3,a.y3);a.p=Math.tan(Math.asin(1)+Math.atan2(a.d+a.z3,a.l));a.d=sqrt(a.x3*a.x3+a.y3*a.y3+(a.z3+a.d)*(a.z3+a.d));a.rad=div(a.rad,a.d);a.my_x=a.zoom*Math.sin(a.w)*a.p;a.my_y=a.zoom*Math.cos(a.w)*a.p;a.x=.5+a.my_x;a.y=.5+a.my_y;a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.q1=0;a.q2=0;a.b=0;a.m=0;a.t=0;a.q3=0;a.q4=0;a.q5=0;",
          frame_eqs_str: "a.wave_a=0;a.q1=a.aspectx;a.q2=a.aspecty;a.b+=a.bass*a.bass*.85;a.m+=a.mid*a.mid*.85;a.t+=a.treb*a.treb*.85;a.q3=.012*a.b;a.q4=.012*a.m;a.q5=.012*a.t;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec2 my_uv_1;\n  vec3 ret_2;\n  vec2 tmpvar_3;\n  tmpvar_3 = (vec2(1280.0, 1024.0) * texsize.zw);\n  float tmpvar_4;\n  vec2 tmpvar_5;\n  tmpvar_5 = (uv + vec2(0.005, 0.0));\n  vec2 tmpvar_6;\n  tmpvar_6 = (uv - vec2(0.005, 0.0));\n  tmpvar_4 = (((\n    (texture (sampler_blur2, tmpvar_5).xyz * scale2)\n   + bias2) - (\n    (texture (sampler_blur2, tmpvar_6).xyz * scale2)\n   + bias2)).x * tmpvar_3.x);\n  float tmpvar_7;\n  vec2 tmpvar_8;\n  tmpvar_8 = (uv + vec2(0.0, 0.005));\n  vec2 tmpvar_9;\n  tmpvar_9 = (uv - vec2(0.0, 0.005));\n  tmpvar_7 = (((\n    (texture (sampler_blur2, tmpvar_8).xyz * scale2)\n   + bias2) - (\n    (texture (sampler_blur2, tmpvar_9).xyz * scale2)\n   + bias2)).x * tmpvar_3.y);\n  vec2 tmpvar_10;\n  tmpvar_10.x = tmpvar_4;\n  tmpvar_10.y = tmpvar_7;\n  vec2 tmpvar_11;\n  tmpvar_11.x = (((\n    (texture (sampler_blur2, tmpvar_5).xyz * scale2)\n   + bias2) - (\n    (texture (sampler_blur2, tmpvar_6).xyz * scale2)\n   + bias2)).x * tmpvar_3.x);\n  tmpvar_11.y = (((\n    (texture (sampler_blur2, tmpvar_8).xyz * scale2)\n   + bias2) - (\n    (texture (sampler_blur2, tmpvar_9).xyz * scale2)\n   + bias2)).x * tmpvar_3.y);\n  ret_2.x = texture (sampler_fw_main, ((uv - (tmpvar_10 * 0.01)) + (tmpvar_11 * 0.003))).x;\n  vec4 tmpvar_12;\n  tmpvar_12 = texture (sampler_blur3, uv);\n  ret_2.x = (ret_2.x + ((ret_2.x - \n    ((tmpvar_12.xyz * scale3) + bias3)\n  .x) * 0.1));\n  ret_2.x = (ret_2.x + 0.004);\n  vec2 tmpvar_13;\n  tmpvar_13.x = tmpvar_7;\n  tmpvar_13.y = -(tmpvar_4);\n  my_uv_1 = (uv + ((tmpvar_13 * 0.05) * (1.2 - \n    ((tmpvar_12.xyz * scale3) + bias3)\n  .y)));\n  ret_2.z = texture (sampler_fw_main, my_uv_1).z;\n  vec2 x_14;\n  x_14 = (my_uv_1 - uv);\n  ret_2.z = (ret_2.z + ((\n    ((ret_2.z - ((texture (sampler_blur1, uv).xyz * scale1) + bias1).z) * sqrt(dot (x_14, x_14)))\n   * 180.0) / sqrt(\n    dot (tmpvar_3, tmpvar_3)\n  )));\n  ret_2.z = (ret_2.z * 0.8);\n  ret_2.z = (ret_2.z + 0.004);\n  vec2 tmpvar_15;\n  tmpvar_15.x = -(tmpvar_7);\n  tmpvar_15.y = tmpvar_4;\n  my_uv_1 = (tmpvar_15 * 0.045);\n  vec2 tmpvar_16;\n  tmpvar_16.x = (((\n    (texture (sampler_blur2, (uv + vec2(0.01, 0.0))).xyz * scale2)\n   + bias2) - (\n    (texture (sampler_blur2, (uv - vec2(0.01, 0.0))).xyz * scale2)\n   + bias2)).y * tmpvar_3.x);\n  tmpvar_16.y = (((\n    (texture (sampler_blur2, (uv + vec2(0.0, 0.01))).xyz * scale2)\n   + bias2) - (\n    (texture (sampler_blur2, (uv - vec2(0.0, 0.01))).xyz * scale2)\n   + bias2)).y * tmpvar_3.y);\n  my_uv_1 = (my_uv_1 + (uv - (tmpvar_16 * 0.03)));\n  ret_2.y = texture (sampler_fw_main, my_uv_1).y;\n  ret_2.y = (ret_2.y + ((\n    (ret_2.y - ((texture (sampler_blur3, my_uv_1).xyz * scale3) + bias3).y)\n   * 0.1) + 0.01));\n  vec4 tmpvar_17;\n  tmpvar_17.w = 1.0;\n  tmpvar_17.xyz = ret_2;\n  ret = tmpvar_17.xyz;\n }",
          comp: " shader_body { \n  vec2 uv1_1;\n  vec3 tmpvar_2;\n  tmpvar_2 = texture (sampler_main, uv).xyz;\n  vec2 tmpvar_3;\n  tmpvar_3.y = 0.0;\n  tmpvar_3.x = texsize.z;\n  vec2 tmpvar_4;\n  tmpvar_4.x = 0.0;\n  tmpvar_4.y = texsize.w;\n  vec2 tmpvar_5;\n  tmpvar_5.x = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;\n  tmpvar_5.y = (texture (sampler_main, (uv - tmpvar_4)).xyz - texture (sampler_main, (uv + tmpvar_4)).xyz).x;\n  uv1_1 = ((0.3 * cos(\n    (((uv - 0.5) * 2.0) + 1.7)\n  )) - (2.0 * tmpvar_5));\n  vec4 tmpvar_6;\n  tmpvar_6.w = 1.0;\n  tmpvar_6.xyz = ((-(tmpvar_2) / 4.0) + ((6.0 * vec3(\n    clamp ((0.03 / sqrt(dot (uv1_1, uv1_1))), 0.0, 1.0)\n  )) * (-0.08 + tmpvar_2)));\n  ret = tmpvar_6.xyz;\n }"
        }
      },
      118: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 3,
            wave_mode: 2,
            wrap: 0,
            wave_a: .001,
            wave_scale: 5.819,
            wave_mystery: -.38,
            wave_r: .5,
            wave_g: .5,
            wave_b: .5,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              thick: 1
            },
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: "a.y=a.sample;a.x=.003*(a.value1+a.value2);a.a=.1*(a.value1+a.value2);a.r=.5+.3*Math.sin(10*a.sample+a.time);a.g=.5+.3*Math.cos(10*a.sample-1.334*a.time);a.b=.5+.3*Math.sin(10*a.sample+.998*a.time);"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "",
          frame_eqs_str: "a.warp=0;a.wave_r=a.wave_r+.4*Math.sin(.333*a.time)+.2*a.bass_att;a.wave_g=a.wave_g+.4*Math.sin(.555*a.time)+.2*a.treb_att;a.wave_b=a.wave_b+.4*Math.sin(.444*a.time)+.2*a.mid_att;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec2 muv_1;\n  vec3 ret_2;\n  float tmpvar_3;\n  tmpvar_3 = (2.0 * bass_att);\n  muv_1.x = (uv.x - ((\n    ((0.01 * cos((\n      (uv.x * (5.0 + tmpvar_3))\n     + time))) + (0.01 * cos((\n      (uv.y * (5.0 + tmpvar_3))\n     + time))))\n   * 0.5) * treb_att));\n  float tmpvar_4;\n  tmpvar_4 = (2.0 * mid_att);\n  muv_1.y = (uv.y + ((\n    ((0.01 * sin((\n      (uv.x * (5.0 + tmpvar_4))\n     + time))) - (0.01 * cos((\n      (uv.y * (5.0 + tmpvar_4))\n     + time))))\n   * 0.5) * bass_att));\n  vec3 tmpvar_5;\n  tmpvar_5 = ((texture (sampler_blur2, muv_1).xyz * scale2) + bias2);\n  vec4 tmpvar_6;\n  tmpvar_6 = texture (sampler_pw_main, muv_1);\n  ret_2.x = (tmpvar_6.x + (tmpvar_5.x * (bass_att * 0.05)));\n  ret_2.y = (tmpvar_6.y + (tmpvar_5.y * (treb_att * 0.05)));\n  ret_2.z = (tmpvar_6.z + (tmpvar_5.z * (mid_att * 0.05)));\n  if ((ret_2.x > 0.9)) {\n    ret_2.x = 0.0;\n  };\n  if ((ret_2.y > 0.9)) {\n    ret_2.y = 0.0;\n  };\n  if ((ret_2.z > 0.9)) {\n    ret_2.z = 0.0;\n  };\n  vec4 tmpvar_7;\n  tmpvar_7.w = 1.0;\n  tmpvar_7.xyz = ret_2;\n  ret = tmpvar_7.xyz;\n }",
          comp: " shader_body { \n  vec3 ret1_1;\n  vec2 uv1_2;\n  vec3 ret_3;\n  vec4 tmpvar_4;\n  tmpvar_4 = texture (sampler_main, uv);\n  ret_3 = (tmpvar_4.xyz * (0.6 + (0.3 * \n    sin(((uv.x * 10.0) + time))\n  )));\n  vec2 tmpvar_5;\n  tmpvar_5.x = (texture (sampler_main, (uv - vec2(0.001, 0.0))).xyz - texture (sampler_main, (uv + vec2(0.001, 0.0))).xyz).x;\n  tmpvar_5.y = (texture (sampler_main, (uv - vec2(0.0, 0.001))).xyz - texture (sampler_main, (uv + vec2(0.0, 0.001))).xyz).x;\n  uv1_2 = ((0.5 * cos(\n    (((uv - 0.5) * 1.5) + 1.6)\n  )) - (3.0 * tmpvar_5));\n  ret1_1 = ((0.3 * dot (tmpvar_4.xyz, vec3(0.32, 0.49, 0.29))) + ((\n    clamp ((0.01 / sqrt(dot (uv1_2, uv1_2))), 0.0, 1.0)\n   * \n    mix (vec3(dot (((texture (sampler_blur2, uv).xyz * scale2) + bias2), vec3(0.32, 0.49, 0.29))), ret_3, pow (ret_3, vec3((0.05 + (mid_att * 0.03)))))\n  ) * (\n    (4.0 + bass)\n   + \n    (mid + treb_att)\n  )));\n  ret_3 = ret1_1;\n  vec4 tmpvar_6;\n  tmpvar_6.w = 1.0;\n  tmpvar_6.xyz = ret1_1;\n  ret = tmpvar_6.xyz;\n }"
        }
      },
      12: function(a, e, t) {
        var n = t(13);
        a.exports = function(a, e, t) {
          if (n(a), void 0 === e) return a;
          switch (t) {
            case 1:
              return function(t) {
                return a.call(e, t)
              };
            case 2:
              return function(t, n) {
                return a.call(e, t, n)
              };
            case 3:
              return function(t, n, r) {
                return a.call(e, t, n, r)
              }
          }
          return function() {
            return a.apply(e, arguments)
          }
        }
      },
      13: function(a, e) {
        a.exports = function(a) {
          if ("function" != typeof a) throw TypeError(a + " is not a function!");
          return a
        }
      },
      14: function(a, e, t) {
        var n = t(4),
          r = t(19);
        a.exports = t(0) ? function(a, e, t) {
          return n.f(a, e, r(1, t))
        } : function(a, e, t) {
          return a[e] = t, a
        }
      },
      15: function(a, e, t) {
        var n = t(1);
        a.exports = function(a) {
          if (!n(a)) throw TypeError(a + " is not an object!");
          return a
        }
      },
      16: function(a, e, t) {
        a.exports = !t(0) && !t(5)(function() {
          return 7 != Object.defineProperty(t(17)("div"), "a", {
            get: function() {
              return 7
            }
          }).a
        })
      },
      17: function(a, e, t) {
        var n = t(1),
          r = t(2).document,
          s = n(r) && n(r.createElement);
        a.exports = function(a) {
          return s ? r.createElement(a) : {}
        }
      },
      18: function(a, e, t) {
        var n = t(1);
        a.exports = function(a, e) {
          if (!n(a)) return a;
          var t, r;
          if (e && "function" == typeof(t = a.toString) && !n(r = t.call(a))) return r;
          if ("function" == typeof(t = a.valueOf) && !n(r = t.call(a))) return r;
          if (!e && "function" == typeof(t = a.toString) && !n(r = t.call(a))) return r;
          throw TypeError("Can't convert object to primitive value")
        }
      },
      19: function(a, e) {
        a.exports = function(a, e) {
          return {
            enumerable: !(1 & a),
            configurable: !(2 & a),
            writable: !(4 & a),
            value: e
          }
        }
      },
      2: function(a, e) {
        var t = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
      },
      22: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 0,
            gammaadj: 1,
            decay: .96,
            echo_zoom: .99663,
            echo_orient: 1,
            wave_mode: 2,
            wave_dots: 1,
            wave_brighten: 0,
            wrap: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: .011726,
            wave_smoothing: .9,
            warpanimspeed: .010284,
            warpscale: .01,
            warp: .01,
            wave_r: .5,
            wave_g: .4,
            wave_b: .3,
            ob_size: 0,
            ob_r: .11,
            ob_b: .1,
            ib_size: 0,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            mv_x: 64,
            mv_y: 48,
            mv_l: 5,
            mv_r: 0,
            mv_g: 0,
            mv_b: 0,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 32,
              additive: 1,
              rad: .194774,
              r: 0,
              b: 1,
              a: 1e-6,
              r2: .63,
              g2: .7,
              b2: 1,
              a2: .07,
              border_a: 0
            },
            init_eqs_str: "a.lens_scale=0;a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.pos_scale=0;a.cubesize=0;a.xq=0;a.sang=0;a.flip=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;a.flip=1;",
            frame_eqs_str: "a.flip=-a.flip;a.lens_scale=.5*a.flip+.5;a.lens_scale=1+2.4*a.lens_scale;a.pos_scale=.00001<Math.abs(equal(a.flip,-1))?.5:a.lens_scale;a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),\na.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(-a.xp,a.zp)*a.pos_scale+.5;a.y=div(-a.yp,a.zp)*a.pos_scale*1.333+.5;a.rad=a.rad*(1+div(a.q8,\n3))*a.lens_scale;"
          }, {
            baseVals: {
              enabled: 1,
              sides: 6,
              rad: .043785,
              r: .3,
              g: .6,
              b: 1,
              g2: 0,
              b2: 1,
              border_a: 0
            },
            init_eqs_str: "a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;",
            frame_eqs_str: "a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);\na.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;a.a=Math.min(a.a+div(a.q8,2),1);a.r=Math.min(a.r*(1+a.q8),1);a.g=Math.min(a.g*(1+a.q8),1);a.r2=Math.min(div(a.q8,2),1);a.g2=Math.min(div(a.q8,4),1);a.rad*=1+div(a.q8,7);"
          }, {
            baseVals: {
              enabled: 1,
              sides: 36,
              rad: .284278,
              r: 0,
              a: 0,
              r2: .23,
              g2: .54,
              b2: 1,
              a2: .05,
              border_g: .8,
              border_b: .4,
              border_a: .45
            },
            init_eqs_str: "a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;",
            frame_eqs_str: "a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);\na.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;a.a2=Math.min(a.a2*(1+div(a.q8,2)),1);a.r2=Math.min(a.r2*(1+div(a.q8,4)),1);a.g2=Math.min(a.g2*(1+div(a.q8,3)),1);a.border_a=Math.min(a.border_a*(1+a.q8),1);"
          }, {
            baseVals: {
              enabled: 1,
              sides: 6,
              additive: 1,
              rad: .158045,
              r: .3,
              g: .6,
              b: 1,
              a: .140001,
              r2: .4,
              g2: .5,
              b2: 1,
              border_a: 0
            },
            init_eqs_str: "a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.tm=0;a.zp=0;a.q2=0;a.sample=0;a.q8=0;",
            frame_eqs_str: "a.t1=.25*a.q1;a.sample=1;a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);\na.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;a.a=Math.min(a.a*a.q8,1);a.rad*=1+a.q8;"
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              thick: 1,
              additive: 1,
              r: .05,
              g: .09
            },
            init_eqs_str: "a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.ang=0;a.tm=0;a.zp=0;a.q2=0;",
            frame_eqs_str: "a.t1=.25*a.q1;",
            point_eqs_str: "a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.tm=4*a.q1+4*a.sample;a.xp=Math.sin(a.tm)*Math.cos(3*a.tm)*.5+.5;a.yp=Math.sin(1.1*a.tm)*Math.sin(4.1*a.tm)*.5+.5;a.zp=Math.sin(2.9*a.tm)*Math.cos(1.77*a.tm)*.5+.5;a.xp=div(Math.floor(a.xp*a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(Math.floor(a.yp*a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(Math.floor(a.zp*a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp*a.sang+a.zp*\na.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              usedots: 1,
              thick: 1
            },
            init_eqs_str: "a.cang=0;a.n=0;a.yq=0;a.xp=0;a.fix=0;a.yp=0;a.t1=0;a.q1=0;a.cubesize=0;a.xq=0;a.sang=0;a.zq=0;a.ang=0;a.zp=0;a.q2=0;",
            frame_eqs_str: "a.t1=.25*a.q1;",
            point_eqs_str: "a.n=6.283*a.sample;a.cubesize=a.q2;a.fix=.5*div(1,a.cubesize);a.xp=div(randint(a.cubesize),a.cubesize)-.5+a.fix;a.yp=div(randint(a.cubesize),a.cubesize)-.5+a.fix;a.zp=div(randint(a.cubesize),a.cubesize)-.5+a.fix;a.ang=a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp*a.sang+a.zp*a.cang;a.yq=a.yp;a.zq=a.xp*a.cang-a.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.ang=.75*a.t1;a.sang=Math.sin(a.ang);a.cang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sang+a.zp*a.cang;a.zq=a.yp*a.cang-\na.zp*a.sang;a.xp=a.xq;a.yp=a.yq;a.zp=a.zq;a.zp+=2;a.x=div(a.xp,a.zp)+.5;a.y=1.333*div(a.yp,a.zp)+.5;"
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.q1=0;a.beat=0;a.vol=0;a.bc=0;a.size=0;a.q2=0;a.trigger=0;a.q7=0;a.mtime=0;a.q8=0;a.mv_x=64;a.mv_y=48;a.nut=0;a.stp=0;a.stq=0;a.rtp=0;a.rtq=0;a.wvr=0;a.decay=0;a.dcsp=0;a.size=4;a.bc=0;",
          frame_eqs_str: "a.decay=.95;a.zoom=1.005;a.vol=.25*(a.bass+a.mid+a.treb);a.vol*=a.vol;a.q8=a.vol;a.mtime+=.01*a.vol*div(75,a.fps);a.q7=a.mtime;a.monitor=div(512,8);a.warp=0;a.q1=.9*a.mtime;a.beat=above(a.vol,1);a.bc=Math.max(a.bc,0);a.bc=.00001<Math.abs(equal(a.bc,0))?a.bc+a.beat:a.bc-div(div(1,a.fps),4);a.trigger=equal(a.bc,1);a.monitor=a.size;a.size+=a.trigger;a.size=.00001<Math.abs(above(a.size,10))?4:a.size;a.q2=Math.floor(a.size);",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: "",
          comp: ""
        }
      },
      25: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1,
            decay: .999,
            echo_zoom: 1.006596,
            echo_alpha: .5,
            echo_orient: 3,
            wave_mode: 2,
            additivewave: 1,
            wave_dots: 1,
            wave_thick: 1,
            wave_a: 4.099998,
            wave_scale: 1.18647,
            wave_smoothing: .63,
            wave_mystery: -.2,
            modwavealphastart: .71,
            modwavealphaend: 1.28,
            warpscale: 1.331,
            zoom: .999514,
            warp: .01,
            wave_r: .3,
            wave_g: .6,
            ob_size: .005,
            ob_r: .4999,
            ob_b: 1,
            ob_a: 1,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: .2,
            mv_r: 0,
            mv_g: 0,
            mv_b: 0,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }],
          init_eqs_str: "a.new_mid=0;a.q6=0;a.q1=0;a.q5=0;a.treb_c=0;a.vol_att=0;a.zoome=0;a.mid_c=0;a.new_treb=0;a.q4=0;a.rad_cycle=0;a.vol_c=0;a.bass_c=0;a.rote=0;a.vol=0;a.new_bass=0;a.q2=0;a.q3=0;a.q7=0;a.q8=0;",
          frame_eqs_str: "a.vol_att=.25*a.treb_att+.25*a.mid_att+div(.25*a.bass_att+.5*Math.sin(a.vol),a.vol);a.vol=a.bass+a.treb+a.mid;a.new_bass=.25*a.bass+.5*Math.sin(.25*a.bass_att);a.new_treb=.25*a.treb+.5*Math.sin(.25*a.treb_att);a.new_mid=.25*a.mid+.4*Math.sin(.25*a.mid_att);a.bass_c=a.q1-Math.sin(bitand(a.bass_att,.54*a.time));a.treb_c=a.q2-Math.sin(bitand(a.treb_att,.44*a.time));a.mid_c=a.q3-Math.sin(bitand(a.mid_att,.24*a.time));a.vol_c=a.q4-Math.sin(bitand(a.vol_att,.64*a.time));a.q1=Math.sin(bitand(a.bass-\na.new_bass,.63*a.time));a.q2=Math.sin(bitand(a.treb-a.new_treb,.43*a.time));a.q3=Math.sin(bitand(a.mid-a.new_mid,.23*a.time));a.q4=Math.sin(bitand(a.vol,.65*a.time));a.q5=a.bass_c;a.q6=a.treb_c;a.q7=a.mid_c;a.q8=a.vol_c;a.wave_mystery=a.bass_att-1;a.wave_r+=.2*Math.sin(.43*a.time);a.wave_b-=.2*Math.sin(.54*a.time);a.wave_g-=.4*Math.sin(.34*a.time);a.ob_a=0;",
          pixel_eqs_str: "a.rad_cycle=a.rad*a.rad*a.x*60*a.rad*Math.sin(a.q6);a.rote=a.rot+.1*Math.sin(a.rad_cycle*Math.sin(3.14*a.rad))+.01*Math.sin(a.q1)*Math.tan(a.rad);a.zoome=a.zoom+.1*Math.sin(3.14*a.rad*Math.sin(3.14*a.ang)*Math.sin(a.q2)-a.rote);a.zoom=a.zoome+.05*Math.sin(3.14*a.rad*a.q2)*Math.sin(a.q4);a.rot=a.rote*a.rad+div(div(a.ang,2)*Math.sin(a.q3)*Math.sin(3.14*a.ang*Math.sin(a.q3)*Math.sin(a.q4)),2)+.1*Math.sin(3.14*a.ang)*Math.sin(a.q1);",
          warp: "",
          comp: ""
        }
      },
      26: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 0,
            decay: 1,
            echo_zoom: 1,
            wave_mode: 1,
            wave_brighten: 0,
            wave_a: 1,
            wave_scale: .504218,
            wave_mystery: .24,
            warpanimspeed: 9.8608,
            warpscale: 16.2174,
            zoomexp: 1.503744,
            zoom: 1.0201,
            warp: .819544,
            wave_r: .5,
            wave_g: .5,
            wave_b: .5,
            ob_size: .005,
            ob_a: .2,
            ib_size: .005,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            ib_a: .06,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }],
          init_eqs_str: "a.xpos=0;a.yamptarg=0;a.ydir=0;a.zoom_exp=0;a.yaccel=0;a.xamptarg=0;a.xamp=0;a.xspeed=0;a.ypos=0;a.xaccel=0;a.att=0;a.vol=0;a.yamp=0;a.xdir=0;a.yspeed=0;",
          frame_eqs_str: "a.dx=-.0005;a.dy=-.0005;a.vol=div(a.bass+a.mid+a.att,6);a.xamptarg=.00001<Math.abs(equal(mod(a.frame,15),0))?Math.min(.5*a.vol*a.bass_att,.5):a.xamptarg;a.xamp+=.5*(a.xamptarg-a.xamp);a.xdir=.00001<Math.abs(above(Math.abs(a.xpos),a.xamp))?-sign(a.xpos):.00001<Math.abs(below(Math.abs(a.xspeed),.1))?2*above(a.xpos,0)-1:a.xdir;a.xaccel=a.xdir*a.xamp-a.xpos-.055*a.xspeed*below(Math.abs(a.xpos),a.xamp);a.xspeed=a.xspeed+a.xdir*a.xamp-a.xpos-.055*a.xspeed*below(Math.abs(a.xpos),a.xamp);\na.xpos+=.001*a.xspeed;a.wave_x=a.xpos+.5;a.yamptarg=.00001<Math.abs(equal(mod(a.frame,15),0))?Math.min(.3*a.vol*a.treb_att,.5):a.yamptarg;a.yamp+=.5*(a.yamptarg-a.yamp);a.ydir=.00001<Math.abs(above(Math.abs(a.ypos),a.yamp))?-sign(a.ypos):.00001<Math.abs(below(Math.abs(a.yspeed),.1))?2*above(a.ypos,0)-1:a.ydir;a.yaccel=a.ydir*a.yamp-a.ypos-.055*a.yspeed*below(Math.abs(a.ypos),a.yamp);a.yspeed=a.yspeed+a.ydir*a.yamp-a.ypos-.055*a.yspeed*below(Math.abs(a.ypos),a.yamp);a.ypos+=.001*a.yspeed;a.wave_y=\na.ypos+.5;a.wave_r+=.35*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.35*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.35*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.rot+=.03*(.6*Math.sin(.381*a.time)+.4*Math.sin(.479*a.time));a.cx+=.41*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.41*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.wave_mystery+=.15*(.6*Math.sin(.629*a.time)+.4*Math.sin(1.826*a.time));a.warp*=a.vol;a.zoom-=.02*a.zoom*\na.bass_att;a.zoom_exp=1.5*(.6*Math.sin(.381*a.time)+.4*Math.sin(.479*a.time));a.ob_a=1-2*a.vol;a.monitor=a.zoom_exp;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: "",
          comp: ""
        }
      },
      3: function(a, e) {
        var t = a.exports = {
          version: "2.5.3"
        };
        "number" == typeof __e && (__e = t)
      },
      30: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 0,
            gammaadj: 1,
            decay: 1,
            echo_zoom: 1,
            wave_mode: 7,
            additivewave: 1,
            wave_thick: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: 100,
            wave_scale: .438649,
            wave_smoothing: .5,
            modwavealphastart: .5,
            modwavealphaend: 1,
            zoomexp: .999996,
            fshader: 1,
            dx: 1e-5,
            dy: 1e-5,
            warp: .01,
            wave_y: .976,
            ob_size: .005,
            ob_r: .4,
            ob_g: .3,
            ob_a: 1,
            ib_r: 1,
            ib_g: .6,
            ib_b: 0,
            ib_a: 1,
            mv_x: 24.959999,
            mv_y: 19.199999,
            mv_l: .85,
            mv_r: .4999,
            mv_g: .4999,
            mv_b: .4999,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }],
          init_eqs_str: "a.q1=0;a.thresh=0;a.dx_r=0;a.dy_r=0;",
          frame_eqs_str: "a.warp=0;a.wave_r=.5+.5*Math.sin(.894*a.time);a.wave_g=.5+.5*Math.sin(1.14*a.time);a.wave_b=.5+.5*Math.sin(3-a.bass_att);a.thresh=2*above(a.bass_att,a.thresh)+(1-above(a.bass_att,a.thresh))*((a.thresh-1.3)*(.9+.1*Math.sin(2.8*a.time))+1.3);a.dx_r=.004*equal(a.thresh,2)*Math.sin(5*a.time)+(1-equal(a.thresh,2))*a.dx_r;a.dy_r=.004*equal(a.thresh,2)*Math.sin(6*a.time)+(1-equal(a.thresh,2))*a.dy_r;a.q1=a.thresh;a.dx=1.1*a.dx_r;a.dy=1.1*a.dy_r;a.dx+=.00001<Math.abs(above(a.bass,1.35))?\n31*a.dx_r:0;a.dy=.00001<Math.abs(above(a.bass,1.3))?0:a.dy;a.decay=.995+.004*Math.sin(.369*a.time)+.001*Math.sin(1.54*a.time);",
          pixel_eqs_str: "a.zoom-=.01*a.q1*a.rad;a.zoomexp=1+.2*(a.rad-.2*a.q1);a.sx-=Math.cos(a.y*(6.28+3.14*Math.sin(a.time)))*(.009+.003*Math.sin(2.18*a.time))*Math.sin(.3*a.time);a.rot=.001*Math.sin(3.14*a.x)*Math.sin(.67*a.time);",
          warp: "",
          comp: ""
        }
      },
      31: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1,
            decay: .94,
            echo_zoom: .9998,
            echo_alpha: .4999,
            echo_orient: 3,
            wave_mode: 1,
            additivewave: 1,
            wave_dots: 1,
            wave_brighten: 0,
            wave_a: 1.254574,
            wave_scale: .45029,
            wave_smoothing: 0,
            zoomexp: 1.008151,
            zoom: .659411,
            warp: .01,
            wave_r: .5,
            wave_g: .5,
            wave_b: .5,
            ob_size: .005,
            ob_r: 1,
            ob_a: 1,
            ib_size: .005,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            ib_a: .9,
            mv_x: 64,
            mv_y: 48,
            mv_l: 0,
            mv_r: 0,
            mv_g: .7,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.bblock=0;a.grid=0;a.q6=0;a.q1=0;a.q5=0;a.tth=0;a.tblock=0;a.bpulse=0;a.pulse=0;a.mblock=0;a.q4=0;a.mpulse=0;a.mod_state=0;a.bth=0;a.mres=0;a.tpulse=0;a.tres=0;a.le=0;a.ccl=0;a.q2=0;a.bres=0;a.q3=0;a.mth=0;a.q7=0;a.q8=0;",
          frame_eqs_str: "a.warp=0;a.le=1.5+2*Math.sin(a.bass_att);a.bpulse=band(above(a.le,a.bth),above(a.le-a.bth,a.bblock));a.bblock=a.le-a.bth;a.bth=.00001<Math.abs(above(a.le,a.bth))?a.le+div(114,a.le+10)-7.407:a.bth+div(.07*a.bth,a.bth-12)+.1*below(a.bth,2.7)*(2.7-a.bth);a.bth=.00001<Math.abs(above(a.bth,6))?6:a.bth;a.bres=a.bpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.bpulse)*a.bres;a.le=1.5+2*Math.sin(a.treb_att);a.tpulse=band(above(a.le,a.tth),above(a.le-a.tth,a.tblock));a.tblock=a.le-a.tth;a.tth=\n.00001<Math.abs(above(a.le,a.tth))?a.le+div(114,a.le+10)-7.407:a.tth+div(.07*a.tth,a.tth-12)+.1*below(a.tth,2.7)*(2.7-a.tth);a.tth=.00001<Math.abs(above(a.tth,6))?6:a.tth;a.tres=a.tpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.tpulse)*a.tres;a.le=1.5+2*Math.sin(a.mid_att);a.mpulse=band(above(a.le,a.mth),above(a.le-a.mth,a.mblock));a.mblock=a.le-a.mth;a.mth=.00001<Math.abs(above(a.le,a.mth))?a.le+div(114,a.le+10)-7.407:a.mth+div(.07*a.mth,a.mth-12)+.1*below(a.mth,2.7)*(2.7-a.mth);a.mth=.00001<Math.abs(above(a.mth,\n6))?6:a.mth;a.mres=a.mpulse*Math.sin(a.pulse+.5*a.le)+bnot(a.mpulse)*a.mres;a.pulse=.00001<Math.abs(above(Math.abs(a.pulse),3.14))?-3.14:a.pulse+.003*(a.bth+a.mth+a.tth);a.q1=a.bres;a.q2=a.tres;a.q3=a.mres;a.q4=Math.sin(a.pulse);a.mod_state=(above(a.q1,0)+above(a.q2,0)+above(a.q3,0))*(1+above(a.q4,0));a.ccl=a.ccl+a.tpulse+a.mpulse-a.bpulse;a.q5=Math.cos(a.pulse*(.5+.1*a.mod_state));a.q6=Math.sin(a.pulse*(.5+pow(.25,a.mod_state)));a.q7=a.mod_state;a.q8=a.ccl;a.ob_r=.5+.5*Math.cos(a.q1+a.q7);a.ob_g=\n.5+.5*Math.cos(3.14*a.q2+a.q7);a.ob_b=.5+.5*Math.cos(2*a.q3+Math.sin(.0816*a.time));a.ib_size=.025+.02*a.q2;a.ob_size=.03+.02*a.q3-.002*a.q7;a.wave_r=.5+.5*Math.sin(a.q1*a.q7+2.183*a.time);a.wave_g=.5+.5*Math.sin(3*a.q2+1.211*a.time);a.wave_b=.5+.5*Math.sin(a.q3+1.541*a.time);a.ob_a=.8+.2*a.q2;a.zoom+=.01*a.q4;",
          pixel_eqs_str: "a.grid=mod(pow(2*Math.sin(a.rad*a.q6*a.q2+a.x*a.y*a.q6*a.q3),1+mod(a.q7,5)),2);a.rot=bnot(a.grid)+a.grid*a.q4;a.sx+=.003*Math.sin((a.q2+.5)*a.x);a.sy+=.003*Math.sin((a.q1+3.4)*a.y);a.zoom+=.11*Math.cos(3.14*a.rad)*a.q4;",
          warp: "",
          comp: ""
        }
      },
      33: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 4.990001,
            decay: 1,
            echo_zoom: 10.784553,
            wave_mode: 7,
            additivewave: 1,
            wave_dots: 1,
            wave_brighten: 0,
            wrap: 0,
            wave_a: .997938,
            wave_scale: 1.990516,
            wave_smoothing: 0,
            wave_mystery: -1,
            modwavealphastart: .5,
            modwavealphaend: 1,
            warpscale: .999998,
            zoomexp: .999985,
            fshader: 1,
            zoom: .9999,
            dy: 1e-5,
            warp: .01,
            wave_r: .400001,
            wave_g: .4,
            wave_y: 1,
            ob_size: 0,
            ob_r: .300001,
            ob_g: 1,
            ob_b: .3,
            ob_a: .100001,
            ib_size: .005,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            ib_a: .5,
            mv_x: 8.960042,
            mv_y: 12.960033,
            mv_dx: -.26,
            mv_dy: .44,
            mv_l: 5,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }, {
            baseVals: {},
            init_eqs_str: "",
            frame_eqs_str: "",
            point_eqs_str: ""
          }],
          init_eqs_str: "a.maxdbass=0;a.f=0;a.ttan1=0;a.avgbass=0;a.dbass=0;a.q1=0;a.prevavgbass=0;a.amt=0;a.cheat=0;a.totx=0;a.flip=0;a.lastbeat=0;a.ttan2=0;a.bpm=0;a.pctg=0;a.prevrot=0;a.interval=0;a.q4=0;a.pbass=0;a.toty=0;a.beat=0;a.vol=0;a.q2=0;a.dist=0;a.lastflip=0;a.prevvol=0;a.q3=0;a.isleftytonosy=0;a.sure=0;a.flip=-1;",
          frame_eqs_str: "a.warp=0;a.decay=1;a.vol=div(.75*(a.bass_att+a.mid_att+a.treb_att),3)+.25*a.prevvol;a.prevavgbass=a.avgbass;a.avgbass+=.01*(a.bass-a.avgbass);a.q4=Math.max(1.001*a.avgbass-.999*a.prevavgbass,0);a.q4=Math.min(a.q4,.006);a.sure=.00001<Math.abs(equal(a.sure,0))?.6:a.sure;a.interval=.00001<Math.abs(equal(a.interval,0))?40:a.interval;a.lastbeat=.00001<Math.abs(equal(a.lastbeat,0))?a.frame-a.fps:a.lastbeat;a.dbass=div(a.bass-a.pbass,a.fps);a.beat=above(a.dbass,.6*a.maxdbass)*above(a.frame-\na.lastbeat,div(a.fps,3));a.sure=.00001<Math.abs(a.beat*below(Math.abs(a.frame-(a.interval+a.lastbeat)),div(a.fps,5)))?Math.min(.095+a.sure,1):a.beat*(a.sure-.095)+(1-a.beat)*a.sure*.9996;a.sure=Math.max(.5,a.sure);a.cheat=.00001<Math.abs(above(a.frame,a.lastbeat+a.interval+Math.floor(div(a.fps,10)))*above(a.sure,.91))?1:a.cheat;a.beat=.00001<Math.abs(a.cheat)?1:a.beat;a.sure=.00001<Math.abs(a.cheat)?.95*a.sure:a.sure;a.maxdbass=Math.max(.999*a.maxdbass,a.dbass);a.maxdbass=Math.max(.012,a.maxdbass);\na.maxdbass=Math.min(.02,a.maxdbass);a.interval=.00001<Math.abs(a.beat)?a.frame-a.lastbeat:a.interval;a.lastbeat=.00001<Math.abs(a.beat)?a.frame-a.cheat*Math.floor(div(a.fps,10)):a.lastbeat;a.cheat=0;a.pbass=a.bass;a.lastflip=.00001<Math.abs(above(div(a.bass,a.avgbass),2)*above(a.frame-a.lastflip,100)*a.beat)?a.frame:a.lastflip;a.flip=.00001<Math.abs(equal(a.frame,a.lastflip))?Math.abs(a.flip)-1:a.flip;a.wave_mystery=a.flip;a.ob_size=div(.08*below(a.frame-a.lastbeat,div(a.fps,8))*(a.frame-a.lastbeat),\na.fps);a.f=Math.abs(Math.cos(div(a.time,8)+.54+Math.sin(div(a.time,3)+1.075)));a.ob_r=1*a.f+(1-a.f);a.ob_g=.3*a.f+(1-a.f);a.ob_b=.3*a.f+.3*(1-a.f);a.f=div(a.frame-a.lastbeat,a.interval);a.f*=above(a.f,.8)*below(a.f,1);a.f=Math.max(0,a.f);a.f=Math.min(a.f,1);a.wave_g=.4+.6*a.f;a.wave_b=.4+.6*(1-a.f);a.q1=div(3.1416*(a.wave_mystery+1),2);a.q2=.25*Math.cos(a.time+Math.abs(2*Math.sin(2*a.time+2.311)*(a.vol-a.amt))*Math.sin(7.45*a.time+.876));a.q3=-a.q2;a.amt+=.05*(a.vol-a.amt);a.prevvol=a.vol;a.bpm+=\n.01*(div(60*a.fps,a.interval)-a.bpm);a.monitor=0*a.pctg+1*a.bpm;",
          pixel_eqs_str: "a.x-=.5;a.y=-(a.y-.5);a.ttan1=Math.tan(a.q1+1.5708)*(a.x-a.q3)-a.y+a.q2;a.ttan2=Math.tan(a.q1+1.5708);a.isleftytonosy=above(a.ttan1*sign(3.1416-a.q1),0);a.dist=div(Math.abs(a.ttan1),sqrt(a.ttan2*a.ttan2+1));a.totx=div(.5*Math.cos(a.q1)*sign(a.isleftytonosy-.5)*sqr(a.dist),.5-a.q2);a.toty=div(-.5*Math.sin(a.q1)*sign(a.isleftytonosy-.5)*sqr(a.dist),.5-a.q2);a.dx+=a.totx;a.dy+=a.toty;a.prevrot=a.q1;a.zoom=1-div(25*a.q4*sqrt(pow(.5-a.dist,3)),Math.abs(.5-a.q2));",
          warp: "",
          comp: ""
        }
      },
      35: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 3,
            decay: .5,
            echo_zoom: 1,
            echo_alpha: .5,
            echo_orient: 3,
            wrap: 0,
            darken_center: 1,
            solarize: 1,
            wave_a: .001,
            zoom: .97,
            rot: -6.27999,
            warp: 52e-5,
            wave_r: 0,
            wave_g: 0,
            wave_b: 0,
            ob_r: 1,
            ob_g: 1,
            ob_b: 1,
            mv_r: .8,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              textured: 1,
              x: .25,
              y: .75,
              rad: 4.44708,
              tex_zoom: .22746,
              r: 0,
              a: .1,
              g2: 0,
              a2: .2,
              border_r: 0,
              border_g: 0,
              border_a: 0
            },
            init_eqs_str: "a.q1=0;a.tex_capture=0;a.q3=0;a.tex_saw=.4;",
            frame_eqs_str: "a.ang=.2*a.q1;a.tex_capture=above(a.q3,1);a.tex_zoom=.6;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              thick: 1,
              smoothing: 0
            },
            init_eqs_str: "a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.12*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.r=.5*Math.sin(1.22*a.time)+.6;a.g=.4+.4*Math.sin(1.307*a.time+2*a.y);a.b=.4+.4*Math.sin(1.959*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?0:a.xs;a.ys=.00001<Math.abs(above(a.ys,\n1E3))?0:a.ys;"
          }, {
            baseVals: {
              enabled: 1,
              thick: 1,
              smoothing: 0
            },
            init_eqs_str: "a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.14*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.x=.6*a.x+.2;a.y=.6*a.y+.2;a.r=.5*Math.sin(1.322*a.time)+.6;a.g=.4+.4*Math.sin(1.5407*a.time+2*a.y);a.b=.4+.4*Math.sin(1.759*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?0:a.xs;\na.ys=.00001<Math.abs(above(a.ys,1E3))?0:a.ys;"
          }, {
            baseVals: {
              enabled: 1,
              thick: 1,
              smoothing: 0
            },
            init_eqs_str: "a.q1=0;a.speed=0;a.v=0;a.xs=0;a.ys=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.q1=0;a.speed=.8*a.bass_att;a.v=1E6*a.sample+a.value2*a.bass*.1;a.xs+=Math.sin(a.v)*a.speed*Math.atan(1.51*a.v);a.ys+=Math.sin(a.v)*a.speed*Math.atan(10*a.v);a.x=.5+.5*Math.sin(.1*a.xs)*Math.cos(.2*a.time+a.xs);a.y=.5+.5*Math.sin(.14*a.ys)*Math.cos(.1*a.time+a.xs);a.x=.8*a.x+.1;a.y=.8*a.y+.1;a.x=.25*a.x+.375;a.y=.25*a.y+.375;a.r=.5*Math.sin(1.622*a.time)+.6;a.g=.4+.4*Math.sin(1.2407*a.time+2*a.y);a.b=.4+.4*Math.sin(1.359*a.time+2*a.x);a.xs=.00001<Math.abs(above(a.xs,1E3))?\n0:a.xs;a.ys=.00001<Math.abs(above(a.ys,1E3))?0:a.ys;"
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.basstime=0;a.stickybit=0;a.volavg2=0;a.q1=0;a.decay_r=0;a.sample1=0;a.difftime=0;a.diff=0;a.decay_b=0;a.edge=0;a.volavg=0;a.bit2=0;a.vol=0;a.q2=0;a.q3=0;a.basssum=0;a.decay_g=0;a.sample2=0;",
          frame_eqs_str: "a.basstime+=.03*a.bass;a.q1=4*a.basstime;a.basstime=.00001<Math.abs(below(a.basstime,1E3))?1E3:a.basstime;a.basstime+=.03*a.bass_att;a.vol=pow(a.bass+a.mid+a.treb,2);a.basssum=a.vol;a.stickybit=mod(a.time,2);a.volavg+=a.vol*equal(a.stickybit,1);a.sample1+=equal(a.stickybit,1);a.volavg2+=a.vol*equal(a.stickybit,0);a.sample2+=equal(a.stickybit,0);a.edge=bnot(equal(a.bit2,a.stickybit));a.volavg-=a.volavg*a.edge*a.stickybit;a.volavg2-=a.volavg2*a.edge*equal(a.stickybit,0);a.sample1-=\na.sample1*a.edge*a.stickybit;a.sample2-=a.sample2*a.edge*equal(a.stickybit,0);a.diff=.00001<Math.abs(equal(a.stickybit,1))?div(a.basssum,div(a.volavg2,a.sample2)):0;a.diff=.00001<Math.abs(equal(a.stickybit,0))?div(a.basssum,div(a.volavg,a.sample1)):a.diff;a.q3=a.diff;a.bit2=mod(a.time,2);a.difftime+=.03*a.diff;a.q2=a.difftime;a.difftime=.00001<Math.abs(above(a.difftime,2E3))?0:a.difftime;a.monitor=3.14*Math.abs(Math.cos(a.time));a.mv_a=above(a.diff,10);",
          pixel_eqs_str: "a.zoom=1+.05*a.q3*a.rad;a.decay_r=.2*a.rad*Math.sin(.35*a.q2)+.85+.1*Math.sin(a.q2);a.decay_g=.2*a.rad*Math.sin(.5*a.q2)+.85+.1*Math.sin(.7*a.q2);a.decay_b=.2*a.rad*Math.sin(.4*a.q2)+.85+.1*Math.sin(.8*a.q2);a.rot=0;",
          warp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (vec2(1.0, 0.0) * texsize.z);\n  vec2 tmpvar_3;\n  tmpvar_3 = (vec2(0.0, 1.0) * texsize.z);\n  ret_1 = (((\n    (texture (sampler_main, (uv + tmpvar_2)).xyz + texture (sampler_main, (uv + tmpvar_2)).xyz)\n   * 0.5) + (\n    (texture (sampler_main, (uv + tmpvar_3)).xyz + texture (sampler_main, (uv + tmpvar_3)).xyz)\n   * 0.5)) - texture (sampler_main, ((\n    (uv - 0.5)\n   * 0.9) + 0.5)).xyz);\n  ret_1 = (ret_1 - 0.4);\n  vec4 tmpvar_4;\n  tmpvar_4.w = 1.0;\n  tmpvar_4.xyz = ret_1;\n  ret = tmpvar_4.xyz;\n }",
          comp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = ((0.5 - uv) + 0.5);\n  ret_1 = (mix (texture (sampler_main, uv).xyz, texture (sampler_main, tmpvar_2).xyz, vec3(0.5, 0.5, 0.5)) * 2.0);\n  ret_1 = (((\n    ((texture (sampler_blur3, uv).xyz * scale3) + bias3)\n   * 2.0) + (\n    ((texture (sampler_blur3, tmpvar_2).xyz * scale3) + bias3)\n   * 2.0)) + ret_1);\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = ret_1;\n  ret = tmpvar_3.xyz;\n }"
        }
      },
      37: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 2,
            gammaadj: 1,
            wave_mode: 7,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            wave_a: .001,
            wave_scale: .958,
            wave_smoothing: .45,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 30.965,
            warpscale: 2.572,
            zoom: 1.00901,
            warp: 54e-5,
            wave_r: 0,
            wave_g: 0,
            wave_b: 0,
            mv_x: 25.6,
            mv_y: 9.6,
            mv_l: 0,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;a.rg=0;a.q9=0;",
          frame_eqs_str: "a.wave_r=.85+.25*Math.sin(.437*a.time+1);a.wave_g=.85+.25*Math.sin(.544*a.time+2);a.wave_b=.85+.25*Math.sin(.751*a.time+3);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=\na.dx_residual;a.dy+=a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;a.rg=Math.max(.77*a.rg,.02+.5*Math.min(2,1.3*Math.max(0,a.mid_att-\n1)));a.q9=a.rg;a.zoom+=.1*a.q9;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec3 ret_1;\n  ret_1 = texture (sampler_main, uv).xyz;\n  ret_1 = (ret_1 + ((ret_1 - \n    ((((\n      (texture (sampler_blur1, uv).xyz * scale1)\n     + bias1) * 0.3) + ((\n      (texture (sampler_blur2, uv).xyz * scale2)\n     + bias2) * 0.4)) + (((texture (sampler_blur3, uv).xyz * scale3) + bias3) * 0.3))\n  ) * 0.3));\n  ret_1 = (ret_1 * 0.9);\n  ret_1 = (ret_1 + ((\n    ((texture (sampler_noise_lq, ((\n      (uv_orig * texsize.xy)\n     * \n      (texsize_noise_lq.zw * 0.4)\n    ) + rand_frame.xy)).xyz - 0.5) / 256.0)\n   * 122.0) * (\n    (clamp ((treb_att - 1.0), 0.0, 1.0) * 0.4)\n   + 0.3)));\n  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n  vec4 tmpvar_2;\n  tmpvar_2.w = 1.0;\n  tmpvar_2.xyz = ret_1;\n  ret = tmpvar_2.xyz;\n }",
          comp: "vec2 xlat_mutabledz;\nvec3 xlat_mutableret1;\nvec2 xlat_mutableuv3;\n shader_body { \n  vec2 tmpvar_1;\n  tmpvar_1.y = 0.0;\n  tmpvar_1.x = texsize.z;\n  vec2 tmpvar_2;\n  tmpvar_2.x = 0.0;\n  tmpvar_2.y = texsize.w;\n  vec2 uv_3;\n  float inten_4;\n  float dist_5;\n  vec2 uv1_6;\n  vec3 ret_7;\n  vec2 tmpvar_8;\n  tmpvar_8 = ((uv - 0.5) * aspect.xy);\n  float tmpvar_9;\n  tmpvar_9 = (time / 18.0);\n  dist_5 = (1.0 - fract((0.25 + tmpvar_9)));\n  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);\n  uv_3 = (tmpvar_8 * aspect.yx);\n  xlat_mutableuv3 = (vec2(0.51, 0.55) + (uv_3 * dist_5));\n  xlat_mutabledz.x = (inten_4 * ((2.0 * \n    dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29))\n  ) - (2.0 * \n    dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29))\n  )));\n  xlat_mutabledz.y = (inten_4 * ((2.0 * \n    dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29))\n  ) - (2.0 * \n    dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29))\n  )));\n  xlat_mutableret1 = max (vec3(0.0, 0.0, 0.0), (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));\n  dist_5 = (1.0 - fract((0.5 + tmpvar_9)));\n  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);\n  uv_3 = (tmpvar_8 * aspect.yx);\n  xlat_mutableuv3 = (vec2(0.49, 0.55) + (uv_3 * dist_5));\n  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (\n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))\n   - \n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))\n  )));\n  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (\n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))\n   - \n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))\n  )));\n  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));\n  dist_5 = (1.0 - fract((0.75 + tmpvar_9)));\n  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);\n  uv_3 = (tmpvar_8 * aspect.yx);\n  xlat_mutableuv3 = (vec2(0.51, 0.55) + (uv_3 * dist_5));\n  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (\n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))\n   - \n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))\n  )));\n  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (\n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))\n   - \n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))\n  )));\n  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));\n  dist_5 = (1.0 - fract((1.0 + tmpvar_9)));\n  inten_4 = ((sqrt(dist_5) * (1.0 - dist_5)) * 4.0);\n  uv_3 = (tmpvar_8 * aspect.yx);\n  xlat_mutableuv3 = (vec2(0.49, 0.55) + (uv_3 * dist_5));\n  xlat_mutabledz.x = (xlat_mutabledz.x + (inten_4 * (\n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))\n   - \n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_1)).xyz, vec3(0.32, 0.49, 0.29)))\n  )));\n  xlat_mutabledz.y = (xlat_mutabledz.y + (inten_4 * (\n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 + tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))\n   - \n    (2.0 * dot (texture (sampler_main, (xlat_mutableuv3 - tmpvar_2)).xyz, vec3(0.32, 0.49, 0.29)))\n  )));\n  xlat_mutableret1 = max (xlat_mutableret1, (texture (sampler_main, xlat_mutableuv3).xyz * inten_4));\n  xlat_mutabledz = (xlat_mutabledz * (0.5 + rand_preset.z));\n  vec2 tmpvar_10;\n  tmpvar_10 = (2.0 * (rand_preset.xy - 0.5));\n  uv1_6 = (4.0 * tmpvar_8);\n  vec2 tmpvar_11;\n  tmpvar_11 = sin(((uv1_6 + xlat_mutabledz) + tmpvar_10));\n  vec2 tmpvar_12;\n  tmpvar_12 = sin(((uv1_6 + \n    (xlat_mutabledz * 1.4)\n  ) + tmpvar_10));\n  vec2 tmpvar_13;\n  tmpvar_13 = sin(((uv1_6 + \n    (xlat_mutabledz * 1.8)\n  ) + tmpvar_10));\n  vec3 tmpvar_14;\n  tmpvar_14.x = inversesqrt(dot (tmpvar_11, tmpvar_11));\n  tmpvar_14.y = inversesqrt(dot (tmpvar_12, tmpvar_12));\n  tmpvar_14.z = inversesqrt(dot (tmpvar_13, tmpvar_13));\n  ret_7 = (((\n    (tmpvar_14 * ((vec3(0.01, 0.01, 0.01) * (1.0 + \n      (rand_preset.xyz / 2.0)\n    )) * (0.5 + rand_preset.y)))\n   * \n    ((((rand_preset.x - 0.5) * 4.0) * xlat_mutableret1) + (8.0 * (1.0 + rand_preset)).xyz)\n  ) - (xlat_mutableret1.x * 0.5)) + ((xlat_mutableret1.y + xlat_mutableret1.z) / 3.0));\n  ret_7 = (ret_7 - ((slow_roam_sin.wzy * roam_cos.zxy) * 0.4));\n  ret_7 = (ret_7 * (1.0 + ret_7));\n  vec4 tmpvar_15;\n  tmpvar_15.w = 1.0;\n  tmpvar_15.xyz = ret_7;\n  ret = tmpvar_15.xyz;\n }"
        }
      },
      4: function(a, e, t) {
        var n = t(15),
          r = t(16),
          s = t(18),
          _ = Object.defineProperty;
        e.f = t(0) ? Object.defineProperty : function(a, e, t) {
          if (n(a), e = s(e, !0), n(t), r) try {
            return _(a, e, t)
          } catch (a) {}
          if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
          return "value" in t && (a[e] = t.value), a
        }
      },
      419: function(a, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = s(t(6)),
          r = s(t(7));
  
        function s(a) {
          return a && a.__esModule ? a : {
            default: a
          }
        }
        var _ = {};
        _["$$$ Royal - Mashup (197)"] = t(35), _["$$$ Royal - Mashup (431)"] = t(37), _._Mig_085 = t(43), _["An AdamFX n Martin Infusion 2 flexi - Why The Sky Looks Diffrent Today - AdamFx n Martin Infusion - Tack Tile Disfunction B"] = t(47), _["Eo.S. + Phat - cubetrace - v2"] = t(22), _["Flexi - alien fish pond"] = t(59), _["flexi - bouncing balls [double mindblob neon mix]"] = t(61), _["Flexi - mindblob [shiny mix]"] = t(63), _["Flexi, fishbrain, Geiss + Martin - tokamak witchery"] = t(72), _["Flexi, martin + geiss - dedicated to the sherwin maxawow"] = t(73), _["Geiss - Cauldron - painterly 2 (saturation remix)"] = t(76), _["Geiss - Reaction Diffusion 2"] = t(77), _["Geiss - Thumb Drum"] = t(79), _["Idiot - Star Of Annon"] = t(25), _["Krash + Illusion - Spiral Movement"] = t(26), _["Martin - acid wiring"] = t(84), _["martin - chain breaker"] = t(89), _["martin - extreme heat"] = t(92), _["martin - mandelbox explorer - high speed demo version"] = t(98), _["Martin - QBikal - Surface Turbulence IIb"] = t(100), _["martin - reflections on black tiles"] = t(101), _["martin - witchcraft reloaded"] = t(104), _["martin [shadow harlequins shape code] - fata morgana"] = t(105), _["Milk Artist At our Best - FED - SlowFast Ft AdamFX n Martin - HD CosmoFX"] = t(107), _["suksma - uninitialized variabowl (hydroponic chronic)"] = t(114), _["Unchained & Rovastar - Wormhole Pillars (Hall of Shadows mix)"] = t(30), _["Unchained - Rewop"] = t(31), _["yin - 191 - Temporal singularities"] = t(33), _["Zylot - Paint Spill (Music Reactive Paint Mix)"] = t(118);
        var v = function() {
          function a() {
            (0, n.default)(this, a)
          }
          return (0, r.default)(a, null, [{
            key: "getPresets",
            value: function() {
              return _
            }
          }]), a
        }();
        e.default = v, a.exports = v
      },
      43: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1.7,
            echo_zoom: 1.16936,
            wave_mode: 2,
            wave_dots: 1,
            wave_brighten: 0,
            wave_a: .001,
            wave_scale: .011726,
            wave_smoothing: .9,
            zoom: .999902,
            warp: .01,
            wave_r: .5,
            wave_g: .4,
            wave_b: .3,
            ob_size: .0065,
            ib_size: .26,
            mv_x: 0,
            mv_y: 43.199997,
            mv_l: 1,
            mv_g: .91,
            mv_b: .71,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              r: .1,
              b: .7
            },
            init_eqs_str: "a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.r1=0;a.g2=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.r2=0;a.ang=0;a.sinang=0;a.tm=0;a.b2=0;a.t2=0;a.zp=0;a.g1=0;a.t4=0;a.b1=0;a.q8=0;",
            frame_eqs_str: "a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;",
            point_eqs_str: "a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5);a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.xq=a.xp;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;a.ang=3.14+1.5*\nMath.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-.5;\na.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.b+=.3*pow(1-a.sample,2);a.r1=a.t1;a.g1=a.t2;a.b1=a.t3;a.r2=a.t4;a.g2=a.t5;a.b2=a.t6;a.r=a.r1*a.flip+a.r2*(1-a.flip);a.g=a.g1*a.flip+a.g2*(1-a.flip);a.b=a.b1*a.flip+a.b2*(1-a.flip);"
          }, {
            baseVals: {
              enabled: 1,
              r: .2,
              b: .6
            },
            init_eqs_str: "a.n=0;a.yq=0;a.xp=0;a.t5=0;a.xs=0;a.yp=0;a.t1=0;a.q1=0;a.cosang=0;a.r1=0;a.g2=0;a.xq=0;a.t3=0;a.flip=0;a.t6=0;a.ys=0;a.zq=0;a.phs=0;a.r2=0;a.ang=0;a.sinang=0;a.tm=0;a.b2=0;a.t2=0;a.zp=0;a.g1=0;a.t4=0;a.b1=0;a.q8=0;",
            frame_eqs_str: "a.t1=.5*Math.sin(a.time)+.5;a.t2=.5*Math.sin(a.time+2.1)+.5;a.t3=.5*Math.sin(a.time+4.2)+.5;a.t4=.5*Math.sin(a.time+1.1)+.5;a.t5=.5*Math.sin(a.time+3.1)+.5;a.t6=.5*Math.sin(a.time+5.2)+.5;",
            point_eqs_str: "a.n=6.283*a.sample;a.phs=.2*-a.sample;a.tm=a.q1+a.phs;a.flip+=1;a.flip*=below(a.flip,2);a.xp=0;a.yp=.1*a.flip+.2*(.5*Math.sin(a.tm)+.5)+.1;a.yp=-a.yp;a.zp=0;a.ang=.5*Math.sin(2*a.tm)+.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.yq=a.yp;a.zq=a.zp;a.ang=8*a.tm;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.3;\na.ang=3.14+1.5*Math.sin(2*a.tm-.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp;a.yq=a.yp*a.sinang+a.zp*a.cosang;a.zq=a.yp*a.cosang-a.zp*a.sinang;a.ang=-1+Math.cos(3.1*a.tm+.5);a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq*a.sinang+a.yq*a.cosang;a.yp=a.xq*a.cosang-a.yq*a.sinang;a.zp=a.zq;a.zp-=.35;a.ang=1.75*Math.cos(2.3*a.tm)-1.05;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xq=a.xp*a.sinang+a.zp*a.cosang;a.yq=a.yp;a.zq=a.xp*a.cosang-a.zp*a.sinang;a.ang=.5*Math.cos(a.tm)-\n.5;a.sinang=Math.sin(a.ang);a.cosang=Math.cos(a.ang);a.xp=a.xq;a.yp=a.yq*a.cosang-a.zq*a.sinang;a.zp=a.yq*a.sinang+a.zq*a.cosang;a.zp+=2;a.xs=div(a.xp,a.zp);a.ys=div(a.yp,a.zp);a.x=a.xs+.5;a.y=1.3*a.ys+.5;a.a=.00001<Math.abs(equal(a.q8,1))?1-a.sample:a.sample;a.a*=a.a;a.b+=.3*pow(1-a.sample,2);a.r1=a.t1;a.g1=a.t2;a.b1=a.t3;a.r2=a.t4;a.g2=a.t5;a.b2=a.t6;a.r=a.r1*a.flip+a.r2*(1-a.flip);a.g=a.g1*a.flip+a.g2*(1-a.flip);a.b=a.b1*a.flip+a.b2*(1-a.flip);"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.movement=0;a.q1=0;",
          frame_eqs_str: "a.movement=a.movement+.01*(a.bass+a.bass_att)+.001*pow(a.bass+1,3);a.q1=a.movement;a.monitor=a.q1;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec3 ret_1;\n  ret_1 = texture (sampler_main, uv).xyz;\n  vec2 tmpvar_2;\n  tmpvar_2 = (normalize((uv - uv_orig)) * texsize.zw);\n  vec4 tmpvar_3;\n  tmpvar_3.w = 0.0;\n  tmpvar_3.xyz = ret_1;\n  vec4 tmpvar_4;\n  tmpvar_4.w = 0.0;\n  tmpvar_4.xyz = max (tmpvar_3, (texture (sampler_main, (uv - tmpvar_2)) * 0.9)).xyz;\n  vec4 tmpvar_5;\n  tmpvar_5.w = 0.0;\n  tmpvar_5.xyz = max (tmpvar_4, (texture (sampler_main, (uv + tmpvar_2)) * 0.97)).xyz;\n  vec4 tmpvar_6;\n  tmpvar_6.w = 0.0;\n  tmpvar_6.xyz = max (tmpvar_5, (texture (sampler_main, (uv + \n    (tmpvar_2 * 2.0)\n  )) * 0.97)).xyz;\n  ret_1 = (max (tmpvar_6, (texture (sampler_main, \n    (uv + (tmpvar_2 * 3.0))\n  ) * 0.9)).xyz * 0.92);\n  vec4 tmpvar_7;\n  tmpvar_7.w = 1.0;\n  tmpvar_7.xyz = ret_1;\n  ret = tmpvar_7.xyz;\n }",
          comp: " shader_body { \n  vec2 uv_1;\n  vec3 ret_2;\n  uv_1 = (0.05 + (0.9 * uv));\n  ret_2 = (abs((\n    ((texture (sampler_blur1, uv_1).xyz * scale1) + bias1)\n   - texture (sampler_main, uv_1).xyz)) * 6.0);\n  ret_2 = (ret_2 * 1.333);\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = ret_2;\n  ret = tmpvar_3.xyz;\n }"
        }
      },
      47: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 4,
            gammaadj: 1,
            decay: 1,
            echo_zoom: 1,
            echo_alpha: .5,
            additivewave: 1,
            modwavealphabyvolume: 1,
            wave_a: .009,
            wave_scale: 2.713,
            wave_smoothing: 0,
            modwavealphastart: 1.2,
            modwavealphaend: 1.2,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: .44,
            wave_g: .4,
            ob_size: .015,
            ob_b: 1,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: .85,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 3,
              additive: 1,
              num_inst: 175,
              rad: .20065,
              ang: .75398,
              tex_ang: 3.14159,
              tex_zoom: .99979,
              r: 0,
              g2: 0,
              border_r: .01,
              border_g: 0,
              border_a: 1
            },
            init_eqs_str: "a.my_z=0;a.d=0;a.y3=0;a.z2=0;a.y1=0;a.w=0;a.q12=0;a.w2=0;a.x1=0;a.q13=0;a.q15=0;a.dy1=0;a.zoom=0;a.p=0;a.q5=0;a.dz1=0;a.z3=0;a.w3=0;a.my_x=0;a.x3=0;a.my_y=0;a.q11=0;a.dd=0;a.q4=0;a.yy1=0;a.q16=0;a.w1=0;a.x2=0;a.q17=0;a.l=0;a.y2=0;a.dx1=0;a.zz1=0;a.q14=0;a.z1=0;a.q3=0;a.q32=0;a.xx1=0;",
            frame_eqs_str: "a.xx1=.00001<Math.abs(equal(a.instance,0))?a.q11:a.xx1;a.yy1=.00001<Math.abs(equal(a.instance,0))?a.q12:a.yy1;a.zz1=.00001<Math.abs(equal(a.instance,0))?a.q13:a.zz1;a.dx1=a.q14*(a.yy1-a.xx1);a.dy1=a.xx1*(a.q15-a.zz1)-a.yy1;a.dz1=a.xx1*a.yy1-a.q16*a.zz1;a.dd=sqrt(a.dx1*a.dx1+a.dy1*a.dy1+a.dz1*a.dz1);a.xx1+=div(a.q17*a.dx1,a.dd);a.yy1+=div(a.q17*a.dy1,a.dd);a.zz1+=div(a.q17*a.dz1,a.dd);a.my_x=.1*a.xx1;a.my_y=.1*a.yy1;a.my_z=.1*a.zz1-3;a.d=4.75;a.zoom=.55+.25*Math.sin(.5*a.q32);\na.w1=a.q3;a.w2=a.q4;a.w3=a.q5;a.x1=Math.cos(a.w1)*a.my_x+Math.sin(a.w1)*a.my_y;a.y1=-Math.sin(a.w1)*a.my_x+Math.cos(a.w1)*a.my_y;a.z1=a.my_z;a.x2=Math.cos(a.w2)*a.x1+Math.sin(a.w2)*a.z1;a.z2=-Math.sin(a.w2)*a.x1+Math.cos(a.w2)*a.z1;a.y2=a.y1;a.y3=Math.cos(a.w3)*a.y2+Math.sin(a.w3)*a.z2;a.z3=-Math.sin(a.w3)*a.y2+Math.cos(a.w3)*a.z2;a.x3=a.x2;a.l=sqrt(a.x3*a.x3+a.y3*a.y3);a.w=Math.atan2(a.x3,a.y3);a.p=Math.tan(Math.asin(1)+Math.atan2(a.d+a.z3,a.l));a.d=sqrt(a.x3*a.x3+a.y3*a.y3+(a.z3+a.d)*(a.z3+a.d));\na.my_x=a.zoom*Math.sin(a.w)*a.p;a.my_y=a.zoom*Math.cos(a.w)*a.p;a.x=.5+a.my_x;a.y=.5+a.my_y;a.rad=div(a.rad,a.d);a.ang-=div(a.instance,a.num_inst)*Math.asin(1)*8;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.index2=0;a.index=0;a.q12=0;a.q22=0;a.q21=0;a.q13=0;a.q6=0;a.q1=0;a.dec_med=0;a.q5=0;a.movz=0;a.trel=0;a.q9=0;a.rott=0;a.vol__=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.trel_=0;a.vx=0;a.dec_slow=0;a.q11=0;a.q10=0;a.vy=0;a.q4=0;a.dir=0;a.dir_=0;a.p2=0;a.avg=0;a.trig=0;a.beat=0;a.vol=0;a.p1=0;a.peak=0;a.dec_fast=0;a.q2=0;a.q27=0;a.q3=0;a.t0=0;a.vol_=0;a.q7=0;a.q28=0;a.q20=0;a.q8=0;a.step=0;",
          frame_eqs_str: "a.dec_med=pow(.9,div(30,a.fps));a.dec_slow=pow(.96,div(30,a.fps));a.dec_fast=pow(.6,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,0+a.avg+a.peak)*above(a.time,a.t0+.1);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,16);a.index2=mod(a.index2+a.is_beat*bnot(a.index),8);a.q20=a.avg;a.q21=a.beat;a.q22=a.peak;a.q24=a.is_beat;\na.vol=a.bass_att+a.mid_att+a.treb_att;a.vol_=a.dec_med*a.vol_+(1-a.dec_med)*a.vol;a.vol__=a.dec_med*a.vol__+(1-a.dec_med)*a.vol_;a.q27=a.index+1;a.q28=a.index2+1;a.q23=a.q22-div(.1,a.q22);a.q23=Math.max(a.q23,1);a.k1=a.is_beat*equal(mod(a.index,8),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_fast*a.p2+(1-a.dec_fast)*a.p1;a.rott=div(3.1416*a.p2,4);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.trig=a.q24*bnot(mod(a.index,2));a.vx=a.vx*bnot(a.trig)+a.trig*(div(Math.floor(randint(100)),\n100)-.5);a.vy=a.vy*bnot(a.trig)+a.trig*(div(Math.floor(randint(100)),100)-.5);a.q10=.2+a.vy*a.vy*2;a.q11=div(Math.sin(div(a.time,9)),2)+.4;a.movz-=div(1,a.fps)*(.3+a.vx);a.q9=a.movz;a.q12=2*Math.min(a.q22,6);a.q13=Math.min(2,1+Math.abs(8*a.vy*a.vx));a.dir_=a.bass-1;a.trig=bnot(mod(a.index,4))*a.q24;a.dir=bnot(a.trig)*a.dir+a.trig*(Math.floor(randint(10))-5);a.trel+=div(.1,a.fps)*a.dir;a.trel_=a.dec_med*a.trel_+(1-a.dec_med)*a.trel;a.q5=Math.cos(a.trel_);a.q6=Math.sin(a.trel_+0*a.q27*mod(a.q28,2));\na.q7=-a.q6;a.q8=a.q5;a.zoom=1.02;a.rot=.5*Math.sin(bnot(mod(a.q28,2))*a.q28);a.rot=0*Math.sin(div(a.time,3));a.dx=0;a.monitor=a.q11;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec2 tmpvar_1;\n  tmpvar_1 = ((uv * texsize.xy) * 0.08);\n  vec3 tmpvar_2;\n  tmpvar_2 = (texture (sampler_main, (uv - (\n    ((sin(tmpvar_1) / cos(tmpvar_1)) * texsize.zw)\n   * 3.0))).xyz + (vec3(dot (texture (sampler_noise_lq, \n    ((((texsize.xy * texsize_noise_lq.zw).x * uv) * 0.02) + (0.1 * rand_frame).xy)\n  ), vec4(0.32, 0.49, 0.29, 0.0))) / 30.0));\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = ((mix (tmpvar_2, \n    (1.0 - tmpvar_2.zyx)\n  , vec3(0.01, 0.01, 0.01)) - 0.03) - (0.2 * pow (\n    (1.0 - rad)\n  , 18.0)));\n  ret = tmpvar_3.xyz;\n }",
          comp: "vec3 xlat_mutableneu;\nvec2 xlat_mutablers0;\nvec2 xlat_mutablerss;\nvec2 xlat_mutableuv2;\n shader_body { \n  vec2 uv_1;\n  vec2 ofs_2;\n  vec3 ret1_3;\n  uv_1 = ((uv - 0.5) * aspect.xy);\n  vec2 tmpvar_4;\n  tmpvar_4.x = q5;\n  tmpvar_4.y = q6;\n  uv_1 = (uv_1 + (tmpvar_4 / 4.0));\n  mat2 tmpvar_5;\n  tmpvar_5[uint(0)] = _qb.xy;\n  tmpvar_5[1u] = _qb.zw;\n  uv_1 = (uv_1 * tmpvar_5);\n  float tmpvar_6;\n  float tmpvar_7;\n  tmpvar_7 = (min (abs(\n    (uv_1.y / uv_1.x)\n  ), 1.0) / max (abs(\n    (uv_1.y / uv_1.x)\n  ), 1.0));\n  float tmpvar_8;\n  tmpvar_8 = (tmpvar_7 * tmpvar_7);\n  tmpvar_8 = (((\n    ((((\n      ((((-0.01213232 * tmpvar_8) + 0.05368138) * tmpvar_8) - 0.1173503)\n     * tmpvar_8) + 0.1938925) * tmpvar_8) - 0.3326756)\n   * tmpvar_8) + 0.9999793) * tmpvar_7);\n  tmpvar_8 = (tmpvar_8 + (float(\n    (abs((uv_1.y / uv_1.x)) > 1.0)\n  ) * (\n    (tmpvar_8 * -2.0)\n   + 1.570796)));\n  tmpvar_6 = (tmpvar_8 * sign((uv_1.y / uv_1.x)));\n  if ((abs(uv_1.x) > (1e-08 * abs(uv_1.y)))) {\n    if ((uv_1.x < 0.0)) {\n      if ((uv_1.y >= 0.0)) {\n        tmpvar_6 += 3.141593;\n      } else {\n        tmpvar_6 = (tmpvar_6 - 3.141593);\n      };\n    };\n  } else {\n    tmpvar_6 = (sign(uv_1.y) * 1.570796);\n  };\n  xlat_mutablers0.x = (((tmpvar_6 / 3.1416) * 6.0) * q28);\n  xlat_mutablers0.y = inversesqrt(dot (uv_1, uv_1));\n  vec2 tmpvar_9;\n  tmpvar_9.x = (xlat_mutablers0.x + (q9 * 8.0));\n  tmpvar_9.y = (xlat_mutablers0.y + ((q9 * q28) * 4.0));\n  xlat_mutablerss = (tmpvar_9 / 12.0);\n  vec2 tmpvar_10;\n  tmpvar_10.x = q5;\n  tmpvar_10.y = q6;\n  ofs_2 = (0.1 * tmpvar_10.yx);\n  float tmpvar_11;\n  float tmpvar_12;\n  tmpvar_12 = -(q9);\n  tmpvar_11 = fract(tmpvar_12);\n  mat2 tmpvar_13;\n  tmpvar_13[uint(0)].x = 1.0;\n  tmpvar_13[uint(0)].y = -0.0;\n  tmpvar_13[1u].x = 0.0;\n  tmpvar_13[1u].y = 1.0;\n  xlat_mutableuv2 = ((uv_1 * (\n    (q13 * tmpvar_11)\n   * tmpvar_13)) * aspect.yx);\n  vec2 tmpvar_14;\n  tmpvar_14 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));\n  xlat_mutableneu = (texture (sampler_main, tmpvar_14).xyz + ((texture (sampler_blur1, tmpvar_14).xyz * scale1) + bias1));\n  ret1_3 = max (vec3(0.0, 0.0, 0.0), ((xlat_mutableneu * \n    (1.0 - (tmpvar_11 * tmpvar_11))\n  ) * 2.0));\n  float tmpvar_15;\n  tmpvar_15 = fract((tmpvar_12 + 0.3333333));\n  mat2 tmpvar_16;\n  tmpvar_16[uint(0)].x = -0.4990803;\n  tmpvar_16[uint(0)].y = -0.8665558;\n  tmpvar_16[1u].x = 0.8665558;\n  tmpvar_16[1u].y = -0.4990803;\n  xlat_mutableuv2 = ((uv_1 * (\n    (q13 * tmpvar_15)\n   * tmpvar_16)) * aspect.yx);\n  vec2 tmpvar_17;\n  tmpvar_17 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));\n  xlat_mutableneu = (texture (sampler_main, tmpvar_17).xyz + ((texture (sampler_blur1, tmpvar_17).xyz * scale1) + bias1));\n  ret1_3 = max (ret1_3, ((xlat_mutableneu * \n    (1.0 - (tmpvar_15 * tmpvar_15))\n  ) * 2.0));\n  float tmpvar_18;\n  tmpvar_18 = fract((tmpvar_12 + 0.6666667));\n  mat2 tmpvar_19;\n  tmpvar_19[uint(0)].x = -0.5018377;\n  tmpvar_19[uint(0)].y = 0.8649619;\n  tmpvar_19[1u].x = -0.8649619;\n  tmpvar_19[1u].y = -0.5018377;\n  xlat_mutableuv2 = ((uv_1 * (\n    (q13 * tmpvar_18)\n   * tmpvar_19)) * aspect.yx);\n  vec2 tmpvar_20;\n  tmpvar_20 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));\n  xlat_mutableneu = (texture (sampler_main, tmpvar_20).xyz + ((texture (sampler_blur1, tmpvar_20).xyz * scale1) + bias1));\n  ret1_3 = max (ret1_3, ((xlat_mutableneu * \n    (1.0 - (tmpvar_18 * tmpvar_18))\n  ) * 2.0));\n  float tmpvar_21;\n  tmpvar_21 = fract((tmpvar_12 + 1.0));\n  mat2 tmpvar_22;\n  tmpvar_22[uint(0)].x = 0.9999949;\n  tmpvar_22[uint(0)].y = 0.003185092;\n  tmpvar_22[1u].x = -0.003185092;\n  tmpvar_22[1u].y = 0.9999949;\n  xlat_mutableuv2 = ((uv_1 * (\n    (q13 * tmpvar_21)\n   * tmpvar_22)) * aspect.yx);\n  vec2 tmpvar_23;\n  tmpvar_23 = fract(((xlat_mutableuv2 + 0.5) + ofs_2));\n  xlat_mutableneu = (texture (sampler_main, tmpvar_23).xyz + ((texture (sampler_blur1, tmpvar_23).xyz * scale1) + bias1));\n  ret1_3 = max (ret1_3, ((xlat_mutableneu * \n    (1.0 - (tmpvar_21 * tmpvar_21))\n  ) * 2.0));\n  vec2 tmpvar_24;\n  tmpvar_24.x = (ret1_3.x + ret1_3.z);\n  tmpvar_24.y = (ret1_3.x - ret1_3.y);\n  vec4 tmpvar_25;\n  tmpvar_25.w = 1.0;\n  tmpvar_25.xyz = ((ret1_3 + (\n    ((bass_att * 0.004) / sqrt(dot (uv_1, uv_1)))\n   * roam_sin).xyz) + ((2.0 * \n    (bass_att * ((texture (sampler_blur1, fract(\n      (xlat_mutablerss + (tmpvar_24 / 2.0))\n    )).xyz * scale1) + bias1).zxy)\n  ) * clamp (\n    (1.0 - (ret1_3 * 4.0))\n  , 0.0, 1.0)));\n  ret = tmpvar_25.xyz;\n }"
        }
      },
      5: function(a, e) {
        a.exports = function(a) {
          try {
            return !!a()
          } catch (a) {
            return !0
          }
        }
      },
      59: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 4,
            gammaadj: 1,
            wave_thick: 1,
            wrap: 0,
            wave_a: .004,
            wave_scale: 9.731,
            wave_smoothing: 0,
            wave_mystery: 1,
            modwavealphastart: 1,
            modwavealphaend: 1,
            warpanimspeed: .442,
            warpscale: 7.315,
            zoomexp: 1.50374,
            warp: .08563,
            wave_y: .04,
            ob_size: 0,
            ob_g: 1,
            ob_a: 1,
            ib_size: 0,
            ib_r: 1,
            ib_g: 0,
            ib_b: .75,
            ib_a: 1,
            mv_x: 64,
            mv_y: 48,
            mv_l: 0,
            mv_b: 0,
            mv_a: 0,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              sides: 3,
              additive: 1,
              num_inst: 400,
              rad: .16283,
              tex_zoom: .73458,
              g: 1,
              b: 1,
              a: .5,
              g2: 0,
              border_a: 0
            },
            init_eqs_str: "a.bending=0;a.ppo=0;a.index=0;a.i3=0;a.dir=0;a.i4=0;a.size=0;a.q2=0;a.q32=0;a.sample=0;a.i3=0;a.i4=0;",
            frame_eqs_str: "a.i3=.00001<Math.abs(equal(a.instance,0))?0:a.i3;a.i4=.00001<Math.abs(equal(a.instance,0))?0:a.i4;a.ppo=8;a.index=a.i4*a.q32;a.sample=mod(a.i3,a.ppo);a.size=40*a.gmegabuf[Math.floor(a.index+4)];a.x=a.gmegabuf[Math.floor(a.index)];a.y=a.gmegabuf[Math.floor(a.index+1)];a.ang=a.gmegabuf[Math.floor(a.index+9)];a.rad=.05*a.size;a.r=a.gmegabuf[Math.floor(a.index+5)];a.g=a.gmegabuf[Math.floor(a.index+6)];a.b=a.gmegabuf[Math.floor(a.index+7)];a.sample=div(a.sample,a.ppo);a.bending=\n5*a.gmegabuf[Math.floor(a.index+12)]+5*a.gmegabuf[Math.floor(a.index+10)];a.dir=-a.ang+(a.sample-.4)*a.bending;a.ang=1.5*Math.asin(1)-a.dir+.05*a.bending;a.x+=.06*(a.sample-.3)*Math.cos(a.dir)*a.size+Math.sin(a.dir)*a.size*a.bending*.01;a.y+=.06*(a.sample-.3)*Math.sin(a.dir)*a.size-Math.cos(a.dir)*a.size*a.bending*.01;a.x=.5+div(a.x-.5,a.q2);a.rad=1.5*a.rad-.05*a.sample*a.size;a.i3+=1;a.i4=.00001<Math.abs(equal(mod(a.i3,a.ppo),0))?a.i4+1:a.i4;"
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              samples: 65,
              spectrum: 1,
              usedots: 1,
              thick: 1,
              additive: 1,
              scaling: .33408,
              smoothing: 0,
              a: 0
            },
            init_eqs_str: "a.d=0;a.q32=0;a.t8=0;a.t1=0;a.t2=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",
            frame_eqs_str: "a.t8=1;a.t1=.5;a.t2=.9;",
            point_eqs_str: "a.d=0;a.y=.2+a.value1+a.value2;a.x=.9-.8*a.sample;a.gmegabuf[Math.floor((64*a.sample-1)*a.q32+14)]=a.value1+a.value2;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.fric=0;a.d=0;a.nliststart=0;a.w=0;a.random=0;a.index2=0;a.index=0;a.w2=0;a.rotatefactor=0;a.ref_ang=0;a.smaller=0;a.dt=0;a.q1=0;a.j=0;a.v=0;a.count=0;a.shock=0;a.nn=0;a.vrr=0;a.check=0;a.gravity=0;a.vr2=0;a.direction=0;a.bouncefactor=0;a.smallestfind=0;a.distance=0;a.bounce=0;a.vr=0;a.vv1=0;a.vv2=0;a.vrr2=0;a.w1=0;a.attributes=0;a.i=0;a.m2=0;a.hit=0;a.q2=0;a.m1=0;a.h=0;a.v1=0;a.acceleration=0;a.findindex=0;a.friction=0;a.pi2=0;a.sample=0;a.v2=0;a.dampening=0;for(var b=a.i=\n0;1048576>b;b++)a.gmegabuf[Math.floor(a.i)]=0,a.i+=1;a.count=50;a.attributes=32;a.nliststart=24;a.minradius=.004;a.maxradius=.04;a.v=0;for(b=a.index=0;b<a.count;b++)a.gmegabuf[Math.floor(a.index*a.attributes)]=div(randint(1E3),1E3),a.gmegabuf[Math.floor(a.index*a.attributes+1)]=div(randint(1E3),1E3),a.gmegabuf[Math.floor(a.index*a.attributes+2)]=a.v*(div(randint(1E3),1E3)-.5),a.gmegabuf[Math.floor(a.index*a.attributes+3)]=a.v*(div(randint(1E3),1E3)-.5),a.gmegabuf[Math.floor(a.index*a.attributes+4)]=\na.minradius+div((a.maxradius-a.minradius)*(a.index+1),a.count),a.gmegabuf[Math.floor(a.index*a.attributes+5)]=0,a.gmegabuf[Math.floor(a.index*a.attributes+6)]=1,a.gmegabuf[Math.floor(a.index*a.attributes+7)]=1,a.gmegabuf[Math.floor(a.index*a.attributes+8)]=pow(a.gmegabuf[Math.floor(a.index*a.attributes+4)],3),a.gmegabuf[Math.floor(a.index*a.attributes+9)]=div(4*Math.asin(1)*randint(1E3),1E3),a.gmegabuf[Math.floor(a.index*a.attributes+10)]=0,a.gmegabuf[Math.floor(a.index*a.attributes+13)]=div(a.index,\na.count-1),a.gmegabuf[Math.floor(a.index*a.attributes+14)]=0,a.index+=1;a.q30=a.nliststart;a.q31=a.count;a.q32=a.attributes;",
          frame_eqs_str: "a.dt=div(1,a.fps);a.warp=0;a.zoom=1;a.wave_a=0;a.gravity=0*a.dt;a.dampening=0;a.friction=2048*a.dt;a.shock=.002;a.pi2=Math.asin(1);a.nn=3;a.check=2;a.bouncefactor=.1;a.rotatefactor=0;a.h=.5*(a.aspecty-1);a.w=.5*(a.aspectx-1);a.index=0;for(var c=a.index2=0;c<a.count;c++){a.random=div(randint(1E3),1E3);a.sample=a.gmegabuf[Math.floor(a.index+13)];a.gmegabuf[Math.floor(a.index+11)]=.92*a.gmegabuf[Math.floor(a.index+11)]-4*a.gmegabuf[Math.floor(a.index+12)]*a.dt+2*(a.random-.5)*\na.dt*a.gmegabuf[Math.floor(a.index+14)];a.gmegabuf[Math.floor(a.index+12)]+=60*a.gmegabuf[Math.floor(a.index+11)]*a.dt;a.v=sqrt(sqr(a.gmegabuf[Math.floor(a.index+2)])+sqr(a.gmegabuf[Math.floor(a.index+3)]));a.fric=Math.max(0,1-sqr(a.v*a.friction)-2*a.v);a.gmegabuf[Math.floor(a.index+2)]*=a.fric;a.gmegabuf[Math.floor(a.index+3)]*=a.fric;a.gmegabuf[Math.floor(a.index+10)]=a.gmegabuf[Math.floor(a.index+10)]*a.fric+a.v*a.gmegabuf[Math.floor(a.index+12)]*0;a.acceleration=0*a.random+.003*Math.abs(a.gmegabuf[Math.floor(a.index+\n11)]);a.direction=a.gmegabuf[Math.floor(a.index+9)]-a.pi2;a.gmegabuf[Math.floor(a.index+2)]+=Math.sin(a.direction)*a.acceleration;a.gmegabuf[Math.floor(a.index+3)]+=Math.cos(a.direction)*a.acceleration;a.gmegabuf[Math.floor(a.index)]+=60*a.gmegabuf[Math.floor(a.index+2)]*a.dt;a.gmegabuf[Math.floor(a.index+1)]+=60*a.gmegabuf[Math.floor(a.index+3)]*a.dt;a.gmegabuf[Math.floor(a.index+9)]+=.5*a.gmegabuf[Math.floor(a.index+10)];a.gmegabuf[Math.floor(a.index+3)]-=a.gravity;a.vr=Math.sin(a.gmegabuf[Math.floor(a.index+\n10)])*a.gmegabuf[Math.floor(a.index+4)];a.bounce=above(a.gmegabuf[Math.floor(a.index+1)],1-a.gmegabuf[Math.floor(a.index+4)]+a.w);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+2)]+(a.vr+a.gmegabuf[Math.floor(a.index+2)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?-Math.abs(a.gmegabuf[Math.floor(a.index+3)])*a.dampening-a.shock:a.gmegabuf[Math.floor(a.index+3)];a.vr=.00001<Math.abs(a.bounce)?\na.vr-(a.gmegabuf[Math.floor(a.index+2)]+a.vr)*(1-a.rotatefactor):a.vr;a.bounce=below(a.gmegabuf[Math.floor(a.index+1)],a.gmegabuf[Math.floor(a.index+4)]-a.w);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+2)]+(a.vr-a.gmegabuf[Math.floor(a.index+2)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?Math.abs(a.gmegabuf[Math.floor(a.index+3)])*a.dampening+a.shock:a.gmegabuf[Math.floor(a.index+3)];a.vr=\n.00001<Math.abs(a.bounce)?a.vr+(a.gmegabuf[Math.floor(a.index+2)]-a.vr)*(1-a.rotatefactor):a.vr;a.bounce=above(a.gmegabuf[Math.floor(a.index)],1-a.gmegabuf[Math.floor(a.index+4)]+a.h);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?-Math.abs(a.gmegabuf[Math.floor(a.index+2)])*a.dampening-a.shock:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+3)]+(a.vr-a.gmegabuf[Math.floor(a.index+3)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+\n3)];a.vr=.00001<Math.abs(a.bounce)?a.vr+(a.gmegabuf[Math.floor(a.index+3)]-a.vr)*(1-a.rotatefactor):a.vr;a.bounce=below(a.gmegabuf[Math.floor(a.index)],a.gmegabuf[Math.floor(a.index+4)]-a.h);a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.bounce)?Math.abs(a.gmegabuf[Math.floor(a.index+2)])*a.dampening+a.shock:a.gmegabuf[Math.floor(a.index+2)];a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.bounce)?a.gmegabuf[Math.floor(a.index+3)]-(a.vr+a.gmegabuf[Math.floor(a.index+3)])*a.rotatefactor:a.gmegabuf[Math.floor(a.index+\n3)];a.vr=.00001<Math.abs(a.bounce)?a.vr-(a.gmegabuf[Math.floor(a.index+3)]+a.vr)*(1-a.rotatefactor):a.vr;a.gmegabuf[Math.floor(a.index+10)]=Math.asin(div(a.vr,a.gmegabuf[Math.floor(a.index+4)]));a.i=0;for(var b=a.j=0;b<a.count;b++)a.d=sqrt(sqr(a.gmegabuf[Math.floor(a.index)]-a.gmegabuf[Math.floor(a.i)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.i+1)])),a.d=.00001<Math.abs(equal(a.d,0))?10:a.d,a.d-=.5*(a.gmegabuf[Math.floor(a.index+4)]+a.gmegabuf[Math.floor(a.i+4)]),a.megabuf[Math.floor(a.j)]=\na.i,a.megabuf[Math.floor(a.j+1)]=a.d,a.j+=2,a.i+=a.attributes;for(b=a.i=0;b<a.nn;b++){a.j=a.i;a.smallestfind=10;a.findindex=-1;for(var d=0;d<a.count-a.j;d++)a.distance=a.megabuf[Math.floor(2*a.j+1)],a.smaller=above(a.smallestfind,a.distance),a.smallestfind=.00001<Math.abs(a.smaller)?a.distance:a.smallestfind,a.findindex=.00001<Math.abs(a.smaller)?2*a.j:a.findindex,a.j+=1;a.j=a.megabuf[Math.floor(2*a.i)];a.d=a.megabuf[Math.floor(2*a.i+1)];a.megabuf[Math.floor(2*a.i)]=a.megabuf[Math.floor(a.findindex)];\na.megabuf[Math.floor(2*a.i+1)]=a.megabuf[Math.floor(a.findindex+1)];a.megabuf[Math.floor(a.findindex)]=a.j;a.megabuf[Math.floor(a.findindex+1)]=a.d;a.i+=1}for(b=a.i=0;b<a.nn;b++)a.gmegabuf[Math.floor(a.index+a.nliststart+a.i)]=a.megabuf[Math.floor(2*a.i)],a.i+=1;for(b=a.i=0;b<a.check;b++)a.index2=a.megabuf[Math.floor(a.i)],a.hit=below(sqrt(sqr(a.gmegabuf[Math.floor(a.index)]-a.gmegabuf[Math.floor(a.index2)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.index2+1)])),a.gmegabuf[Math.floor(a.index+\n4)]+a.gmegabuf[Math.floor(a.index2+4)])*above(sqrt(sqr(a.gmegabuf[Math.floor(a.index)]-a.gmegabuf[Math.floor(a.index2)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.index2+1)])),sqrt(sqr(a.gmegabuf[Math.floor(a.index+0)]-a.gmegabuf[Math.floor(a.index2+0)]+a.gmegabuf[Math.floor(a.index+2)]-a.gmegabuf[Math.floor(a.index2+2)])+sqr(a.gmegabuf[Math.floor(a.index+1)]-a.gmegabuf[Math.floor(a.index2+1)]+a.gmegabuf[Math.floor(a.index+3)]-a.gmegabuf[Math.floor(a.index2+3)]))),a.ref_ang=Math.atan2(a.gmegabuf[Math.floor(a.index2)]-\na.gmegabuf[Math.floor(a.index)],a.gmegabuf[Math.floor(a.index2+1)]-a.gmegabuf[Math.floor(a.index+1)])+a.pi2,a.v1=sqrt(sqr(a.gmegabuf[Math.floor(a.index+2)])+sqr(a.gmegabuf[Math.floor(a.index+3)])),a.v2=sqrt(sqr(a.gmegabuf[Math.floor(a.index2+2)])+sqr(a.gmegabuf[Math.floor(a.index2+3)])),a.w1=Math.atan2(a.gmegabuf[Math.floor(a.index+2)],a.gmegabuf[Math.floor(a.index+3)]),a.w2=Math.atan2(a.gmegabuf[Math.floor(a.index2+2)],a.gmegabuf[Math.floor(a.index2+3)]),a.vr2=Math.sin(a.gmegabuf[Math.floor(a.index2+\n10)])*a.gmegabuf[Math.floor(a.index2+4)],a.m1=a.gmegabuf[Math.floor(a.index+8)],a.m2=a.gmegabuf[Math.floor(a.index2+8)],a.vv1=div((a.m1-a.m2)*a.v1+2*a.m2*a.v2,a.m1+a.m2),a.vv2=div((a.m2-a.m1)*a.v2+2*a.m1*a.v1,a.m1+a.m2),a.vrr=div((a.m1-a.m2)*a.vr+2*a.m2*a.vr2,a.m1+a.m2),a.vrr2=div((a.m2-a.m1)*a.vr2+2*a.m1*a.vr,a.m1+a.m2),a.gmegabuf[Math.floor(a.index+2)]=.00001<Math.abs(a.hit)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.vr2-Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))+Math.cos(a.ref_ang)*\na.vv1*Math.sin(a.w2-a.ref_ang):a.gmegabuf[Math.floor(a.index+2)],a.gmegabuf[Math.floor(a.index+3)]=.00001<Math.abs(a.hit)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+.1*(a.vr-a.vr2-Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang))-Math.sin(a.ref_ang)*a.vv1*Math.sin(a.w2-a.ref_ang):a.gmegabuf[Math.floor(a.index+3)],a.gmegabuf[Math.floor(a.index2+2)]=.00001<Math.abs(a.hit)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.vr2-a.vr-Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))+Math.cos(a.ref_ang)*\na.vv2*Math.sin(a.w1-a.ref_ang):a.gmegabuf[Math.floor(a.index2+2)],a.gmegabuf[Math.floor(a.index2+3)]=.00001<Math.abs(a.hit)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+.1*(a.vr2-a.vr-Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang))-Math.sin(a.ref_ang)*a.vv2*Math.sin(a.w1-a.ref_ang):a.gmegabuf[Math.floor(a.index2+3)],a.vr=.00001<Math.abs(a.hit)?a.vr+(Math.cos(a.w1-a.ref_ang)*(a.v1-a.v2)-a.vr):a.vr,a.gmegabuf[Math.floor(a.index+10)]=Math.asin(div(a.vr,a.gmegabuf[Math.floor(a.index+4)])),a.vr2=\n.00001<Math.abs(a.hit)?a.vr2+(Math.cos(a.w2-a.ref_ang)*(a.v2-a.v1)-a.vr2):a.vr2,a.gmegabuf[Math.floor(a.index2+10)]=Math.asin(div(a.vr2,a.gmegabuf[Math.floor(a.index2+4)])),a.i+=2;a.index+=a.attributes}a.q1=a.aspectx;a.q2=a.aspecty;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec3 ret_1;\n  ret_1.z = (texture (sampler_main, uv).z * 0.5);\n  vec2 tmpvar_2;\n  tmpvar_2 = ((uv_orig * texsize.xy) * texsize_noise_lq.zw);\n  vec2 tmpvar_3;\n  tmpvar_3 = (texsize.zw * 4.0);\n  vec2 tmpvar_4;\n  tmpvar_4.x = (((2.0 * \n    ((texture (sampler_blur1, (uv_orig + (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)\n  ) - (2.0 * \n    ((texture (sampler_blur1, (uv_orig - (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)\n  )).y * 0.5);\n  tmpvar_4.y = (((2.0 * \n    ((texture (sampler_blur1, (uv_orig + (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)\n  ) - (2.0 * \n    ((texture (sampler_blur1, (uv_orig - (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)\n  )).y * 0.5);\n  ret_1.y = texture (sampler_fw_main, clamp ((uv_orig + (\n    (tmpvar_4 * texsize.zw)\n   * 4.0)), 0.0, 1.0)).y;\n  ret_1.y = (ret_1.y + ((\n    (ret_1 - ((texture (sampler_blur1, uv_orig).xyz * scale1) + bias1))\n  .y * 0.025) + -0.014));\n  ret_1.y = (ret_1.y + ((texture (sampler_noise_lq, tmpvar_2).y - 0.5) * 0.02));\n  vec2 tmpvar_5;\n  tmpvar_5.x = (((2.0 * \n    ((texture (sampler_blur1, (uv_orig + (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)\n  ) - (2.0 * \n    ((texture (sampler_blur1, (uv_orig - (vec2(1.0, 0.0) * tmpvar_3))).xyz * scale1) + bias1)\n  )).x * 0.5);\n  tmpvar_5.y = (((2.0 * \n    ((texture (sampler_blur1, (uv_orig + (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)\n  ) - (2.0 * \n    ((texture (sampler_blur1, (uv_orig - (vec2(0.0, 1.0) * tmpvar_3))).xyz * scale1) + bias1)\n  )).x * 0.5);\n  ret_1.x = ((texture (sampler_main, (uv - \n    ((tmpvar_5 * texsize.zw) * 4.0)\n  )).x - (ret_1.y * 0.01)) + 0.004);\n  ret_1.x = (ret_1.x + ((\n    (texture (sampler_noise_lq, tmpvar_2).x - 0.5)\n   * 0.01) + (ret_1.z * 0.14)));\n  vec4 tmpvar_6;\n  tmpvar_6.w = 1.0;\n  tmpvar_6.xyz = ret_1;\n  ret = tmpvar_6.xyz;\n }",
          comp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (texsize.zw * 4.0);\n  vec2 tmpvar_3;\n  tmpvar_3.x = (((2.0 * \n    ((texture (sampler_blur1, (uv + (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1) + bias1)\n  ) - (2.0 * \n    ((texture (sampler_blur1, (uv - (vec2(1.0, 0.0) * tmpvar_2))).xyz * scale1) + bias1)\n  )) * 0.5).y;\n  tmpvar_3.y = (((2.0 * \n    ((texture (sampler_blur1, (uv + (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1) + bias1)\n  ) - (2.0 * \n    ((texture (sampler_blur1, (uv - (vec2(0.0, 1.0) * tmpvar_2))).xyz * scale1) + bias1)\n  )) * 0.5).y;\n  vec2 tmpvar_4;\n  tmpvar_4 = (uv - ((tmpvar_3 * texsize.zw) * 128.0));\n  vec4 tmpvar_5;\n  tmpvar_5 = texture (sampler_main, uv);\n  ret_1 = (((\n    ((texture (sampler_blur2, tmpvar_4).xyz * scale2) + bias2)\n  .x * \n    clamp ((1.0 - tmpvar_5.y), 0.0, 1.0)\n  ) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);\n  ret_1 = (mix (mix (ret_1, \n    (pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0)) * 1.4)\n  , vec3(\n    ((texture (sampler_main, tmpvar_4).x * 0.8) + ((texture (sampler_blur1, tmpvar_4).xyz * scale1) + bias1).x)\n  )), vec3(1.0, 1.0, 1.0), (\n    (pow (hue_shader, vec3(8.0, 8.0, 8.0)) * texture (sampler_main, clamp (uv, 0.0, 1.0)).y)\n   * 1.2)) * clamp ((1.0 - tmpvar_5.z), 0.0, 1.0));\n  vec4 tmpvar_6;\n  tmpvar_6.w = 1.0;\n  tmpvar_6.xyz = ret_1;\n  ret = tmpvar_6.xyz;\n }"
        }
      },
      6: function(a, e, t) {
        "use strict";
        e.__esModule = !0, e.default = function(a, e) {
          if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
      },
      61: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1,
            decay: .995,
            echo_zoom: 1.007,
            echo_orient: 3,
            additivewave: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            wrap: 0,
            wave_a: 1.413,
            wave_scale: .418,
            wave_smoothing: 0,
            wave_mystery: -.66,
            modwavealphastart: 2,
            modwavealphaend: 2,
            warpanimspeed: .626,
            warpscale: 8.642,
            zoomexp: 7.10084,
            zoom: .99951,
            warp: .09014,
            wave_r: 0,
            wave_g: 0,
            wave_x: .24,
            wave_y: .44,
            ob_size: 0,
            ob_a: 1,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: 0,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 48,
              additive: 1,
              rad: .0277,
              ang: 6.03186,
              tex_ang: 6.03186,
              tex_zoom: .6839,
              r: 0,
              g: 1,
              a2: 1,
              border_r: 0,
              border_g: 0,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.q3=0;a.q4=0;a.q5=0;a.q2=0;a.q1=0;",
            frame_eqs_str: "a.x=a.q3;a.y=a.q4;a.rad=a.q5;a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"
          }, {
            baseVals: {
              enabled: 1,
              sides: 48,
              additive: 1,
              rad: .0277,
              ang: 6.03186,
              tex_ang: 6.03186,
              tex_zoom: .6839,
              r: 0,
              b: 1,
              g2: 0,
              b2: 1,
              a2: 1,
              border_r: 0,
              border_g: 0,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.q6=0;a.q7=0;a.q8=0;a.q2=0;a.q1=0;",
            frame_eqs_str: "a.x=a.q6;a.y=a.q7;a.rad=a.q8;a.x=.5+div(a.x-.5,a.q2);a.y=.5+div(a.y-.5,a.q1);"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              thick: 1,
              additive: 1,
              scaling: 2.0231,
              smoothing: 0,
              g: 0,
              b: 0
            },
            init_eqs_str: "a.d=0;a.tt2=0;a.res=0;a.tt1=0;a.diff=0;a.tt3=0;a.beat=0;a.vol=0;a.m=0;a.monitor=0;a.t2=0;a.t3=0;a.t4=0;a.cl=0;",
            frame_eqs_str: "a.vol=8*a.bass+5*a.mid+3*a.treb;a.m=.97*a.m+.08*a.vol;a.monitor=a.vol;a.beat=above(a.vol,a.res)*above(a.vol,a.m)*above(a.vol,16);a.diff=(1-a.beat)*a.diff+a.beat*(a.vol-a.res);a.res=a.beat*(a.vol+.04*a.m)+(1-a.beat)*(a.res-div(60*(.1+.02*a.diff),a.fps));a.res=Math.max(0,a.res);a.a=a.beat;",
            point_eqs_str: "a.tt3=.6*a.tt3+1*a.value1;a.tt2=.7*a.tt2+.2*a.tt3;a.tt1=.8*a.tt1+.1*a.tt2;a.d=.9*a.d+.2*a.tt1;a.y=.5+a.d*a.sample*(1-a.sample)*2;a.x=-.05+1.1*a.sample;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.y3=0;a.y1=0;a.xx=0;a.q12=0;a.w2=0;a.ref_ang=0;a.q18=0;a.x1=0;a.vx3=0;a.q13=0;a.q15=0;a.q6=0;a.q1=0;a.q5=0;a.q9=0;a.d1=0;a.si1=0;a.vx1=0;a.vx4=0;a.x3=0;a.d2=0;a.q11=0;a.q10=0;a.q4=0;a.vy4=0;a.dir=0;a.bounce=0;a.q16=0;a.x4=0;a.w1=0;a.r=0;a.x2=0;a.q17=0;a.vy2=0;a.y2=0;a.vy1=0;a.q2=0;a.m1=0;a.q14=0;a.si2=0;a.v1=0;a.vx2=0;a.q3=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.v2=0;a.b1=0;a.q8=0;a.x1=.5;a.x2=.51;a.y2=.9;a.y1=.7;a.x3=.8;a.y3=.5;a.x4=.2;a.y4=.5;a.ax1=0;a.ay1=0;a.ax2=0;a.ay2=0;a.ax3=\n0;a.ay3=0;a.vx1=0;a.vx2=0;",
          frame_eqs_str: "a.zoom=1.002;a.warp=.2;a.wave_a=0;a.r=.04+.008*Math.max(a.bass_att,a.treb_att);a.bounce=below(a.y1,a.r);a.y1+=a.vy1;a.vy1=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy1)+.1*(a.r-a.y1):a.vy1-div(.018,a.fps);a.bounce=below(a.x1,a.r);a.x1+=a.vx1;a.vx1=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx1)+.1*(a.r-a.x1):a.vx1;a.bounce=above(a.x1,1-a.r);a.vx1=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx1)+.04*(1-a.r-a.x1):a.vx1;a.bounce=below(a.y2,a.r);a.y2+=a.vy2;a.vy2=.00001<Math.abs(a.bounce)?\n.94*Math.abs(a.vy2)+.1*(a.r-a.y2):a.vy2-div(.018,a.fps);a.bounce=below(a.x2,a.r);a.x2+=a.vx2;a.vx2=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx2)+.1*(a.r-a.x2):a.vx2;a.bounce=above(a.x2,1-a.r);a.vx2=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx2)+.1*(1-a.r-a.x2):a.vx2;a.bounce=below(a.y3,a.r);a.y3+=a.vy3;a.vy3=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy3)+.1*(a.r-a.y3):a.vy3-div(.018,a.fps);a.bounce=below(a.x3,a.r);a.x3+=a.vx3;a.vx3=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx3)+.1*(a.r-a.x3):a.vx3;\na.bounce=above(a.x3,1-a.r);a.vx3=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx3)+.1*(1-a.r-a.x3):a.vx3;a.bounce=below(a.y4,a.r);a.y4+=a.vy4;a.vy4=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vy4)+.1*(a.r-a.y4):a.vy4-div(.018,a.fps);a.bounce=below(a.x4,a.r);a.x4+=a.vx4;a.vx4=.00001<Math.abs(a.bounce)?.94*Math.abs(a.vx4)+.1*(a.r-a.x4):a.vx4;a.bounce=above(a.x4,1-a.r);a.vx4=.00001<Math.abs(a.bounce)?.94*-Math.abs(a.vx4)+.1*(1-a.r-a.x4):a.vx4;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x2-a.vx2)+sqr(a.y1+a.vy1-a.y2-\na.vy2)),2*a.r);a.ref_ang=Math.atan2(a.x2-a.x1,a.y2-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx2,a.vy2);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-\nMath.asin(1)):a.vy1;a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy2;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x3-a.vx3)+sqr(a.y1+a.vy1-a.y3-a.vy3)),2*a.r);a.ref_ang=Math.atan2(a.x3-a.x1,a.y3-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*\na.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx3,a.vy3);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-\na.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.bounce=below(sqrt(sqr(a.x2+a.vx2-a.x3-a.vx3)+sqr(a.y2+a.vy2-a.y3-a.vy3)),2*a.r);a.ref_ang=Math.atan2(a.x3-a.x2,a.y3-a.y2)+Math.asin(1);a.v1=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.v2=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.w1=Math.atan2(a.vx2,a.vy2);a.w2=Math.atan2(a.vx3,\na.vy3);a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy2;a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=\n.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy3;a.bounce=below(sqrt(sqr(a.x1+a.vx1-a.x4-a.vx4)+sqr(a.y1+a.vy1-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x1,a.y4-a.y1)+Math.asin(1);a.v1=sqrt(a.vx1*a.vx1+a.vy1*a.vy1);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx1,a.vy1);a.w2=Math.atan2(a.vx4,a.vy4);a.vx1=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+\nMath.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx1;a.vy1=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy1;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+\nMath.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.bounce=below(sqrt(sqr(a.x2+a.vx2-a.x4-a.vx4)+sqr(a.y2+a.vy2-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x2,a.y4-a.y2)+Math.asin(1);a.v1=sqrt(a.vx2*a.vx2+a.vy2*a.vy2);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx2,a.vy2);a.w2=Math.atan2(a.vx4,a.vy4);a.vx2=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx2;a.vy2=.00001<\nMath.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy2;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.bounce=below(sqrt(sqr(a.x3+\na.vx3-a.x4-a.vx4)+sqr(a.y3+a.vy3-a.y4-a.vy4)),2*a.r);a.ref_ang=Math.atan2(a.x4-a.x3,a.y4-a.y3)+Math.asin(1);a.v1=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);a.v2=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.w1=Math.atan2(a.vx3,a.vy3);a.w2=Math.atan2(a.vx4,a.vy4);a.vx3=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vx3;a.vy3=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v1*Math.cos(a.w1-a.ref_ang)+Math.cos(a.ref_ang+\nMath.asin(1))*a.v2*Math.cos(a.w2-a.ref_ang-Math.asin(1)):a.vy3;a.vx4=.00001<Math.abs(a.bounce)?Math.sin(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.sin(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vx4;a.vy4=.00001<Math.abs(a.bounce)?Math.cos(a.ref_ang)*a.v2*Math.cos(a.w2-a.ref_ang)+Math.cos(a.ref_ang+Math.asin(1))*a.v1*Math.cos(a.w1-a.ref_ang-Math.asin(1)):a.vy4;a.q1=a.aspectx;a.q2=a.aspecty;a.q3=a.x1;a.q4=a.y1;a.q5=2*a.r;a.q6=a.x2;a.q7=a.y2;a.q8=2*a.r;a.q9=a.x3;a.q10=a.y3;\na.q11=2*a.r;a.q12=a.x4;a.q13=a.y4;a.q14=2*a.r;a.q15=Math.atan2(a.vx4,a.vy4);a.q16=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);a.q17=Math.atan2(a.vx3,a.vy3);a.q18=sqrt(a.vx3*a.vx3+a.vy3*a.vy3);",
          pixel_eqs_str: "a.x=.5+(a.x-.5)*a.q2;a.y=.5+(a.y-.5)*a.q1;a.dir=-a.q15+Math.asin(1);a.b1=.075;a.m1=25*a.q16;a.xx=a.q12;a.yy=1-a.q13;a.x1=a.xx-Math.sin(a.dir)*a.b1;a.y1=a.yy-Math.cos(a.dir)*a.b1;a.x2=a.xx+Math.sin(a.dir)*a.b1;a.y2=a.yy+Math.cos(a.dir)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si1=sigmoid(-a.d1,1E3);a.si2=sigmoid(-a.d2,1E3);a.dx=3*(a.si1*Math.sin(a.y1-a.y)*a.m1*a.d1-a.si2*Math.sin(a.y2-a.y)*\na.m1*a.d2)*a.q1;a.dy=3*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2)*a.q2;a.dir=-a.q17+Math.asin(1);a.m1=25*a.q18;a.xx=a.q9;a.yy=1-a.q10;a.x1=a.xx-Math.sin(a.dir)*a.b1;a.y1=a.yy-Math.cos(a.dir)*a.b1;a.x2=a.xx+Math.sin(a.dir)*a.b1;a.y2=a.yy+Math.cos(a.dir)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si1=sigmoid(-a.d1,1E3);a.si2=sigmoid(-a.d2,1E3);a.dx+=3*(a.si1*Math.sin(a.y1-a.y)*a.m1*\na.d1-a.si2*Math.sin(a.y2-a.y)*a.m1*a.d2)*a.q1;a.dy+=3*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2)*a.q2;",
          warp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (texsize.zw * 8.0);\n  vec3 tmpvar_3;\n  tmpvar_3 = (((texture (sampler_blur1, \n    (uv + (vec2(1.0, 0.0) * tmpvar_2))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(1.0, 0.0) * tmpvar_2))\n  ).xyz * scale1) + bias1));\n  vec3 tmpvar_4;\n  tmpvar_4 = (((texture (sampler_blur1, \n    (uv + (vec2(0.0, 1.0) * tmpvar_2))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(0.0, 1.0) * tmpvar_2))\n  ).xyz * scale1) + bias1));\n  vec2 tmpvar_5;\n  tmpvar_5.x = tmpvar_3.z;\n  tmpvar_5.y = tmpvar_4.z;\n  vec2 tmpvar_6;\n  tmpvar_6 = (uv + ((tmpvar_5 * texsize.zw) * 4.0));\n  ret_1.z = (((texture (sampler_main, tmpvar_6).z - \n    ((texture (sampler_main, tmpvar_6).z - ((texture (sampler_blur3, tmpvar_6).xyz * scale3) + bias3).z) * 0.02)\n  ) - 0.008) + ((texture (sampler_noise_lq, \n    (((uv_orig * texsize.xy) * texsize_noise_lq.zw) + rand_frame.xy)\n  ).xyz - 0.5) * 0.1)).x;\n  vec2 tmpvar_7;\n  tmpvar_7.x = tmpvar_3.x;\n  tmpvar_7.y = tmpvar_4.x;\n  vec2 tmpvar_8;\n  tmpvar_8 = ((0.5 + (uv - 0.5)) - (tmpvar_7 * texsize.zw));\n  ret_1.x = texture (sampler_main, tmpvar_8).x;\n  ret_1.x = (ret_1.x + ((\n    (ret_1.x - ((texture (sampler_blur3, tmpvar_8).xyz * scale3) + bias3))\n  .x * 0.4) + 0.006));\n  vec2 tmpvar_9;\n  tmpvar_9.x = tmpvar_3.x;\n  tmpvar_9.y = tmpvar_4.x;\n  vec2 tmpvar_10;\n  tmpvar_10.x = tmpvar_3.y;\n  tmpvar_10.y = tmpvar_4.y;\n  vec2 tmpvar_11;\n  tmpvar_11.x = tmpvar_3.z;\n  tmpvar_11.y = tmpvar_4.z;\n  ret_1.y = texture (sampler_fc_main, (((uv - \n    ((tmpvar_9 * texsize.zw) * 8.0)\n  ) + (\n    (tmpvar_10 * texsize.zw)\n   * 4.0)) + ((tmpvar_11 * texsize.zw) * 8.0))).y;\n  ret_1.y = (ret_1.y * (1.0 + (ret_1.x * 0.1)));\n  ret_1.y = (ret_1.y - (0.004 + (\n    clamp (ret_1.z, 0.0, 1.0)\n   * 0.04)));\n  vec4 tmpvar_12;\n  tmpvar_12.w = 1.0;\n  tmpvar_12.xyz = ret_1;\n  ret = tmpvar_12.xyz;\n }",
          comp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (texsize.zw * 4.0);\n  vec3 tmpvar_3;\n  tmpvar_3 = (((texture (sampler_blur1, \n    (uv + (vec2(1.0, 0.0) * tmpvar_2))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(1.0, 0.0) * tmpvar_2))\n  ).xyz * scale1) + bias1));\n  vec3 tmpvar_4;\n  tmpvar_4 = (((texture (sampler_blur1, \n    (uv + (vec2(0.0, 1.0) * tmpvar_2))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(0.0, 1.0) * tmpvar_2))\n  ).xyz * scale1) + bias1));\n  vec2 tmpvar_5;\n  tmpvar_5.x = tmpvar_3.z;\n  tmpvar_5.y = tmpvar_4.z;\n  vec2 tmpvar_6;\n  tmpvar_6.x = tmpvar_3.y;\n  tmpvar_6.y = tmpvar_4.y;\n  vec2 tmpvar_7;\n  tmpvar_7 = ((uv - (tmpvar_5 * 0.1)) + (tmpvar_6 * 0.06));\n  vec4 tmpvar_8;\n  tmpvar_8 = texture (sampler_main, uv);\n  ret_1 = (((\n    ((texture (sampler_blur2, tmpvar_7).xyz * scale2) + bias2)\n  .x * \n    clamp ((1.0 - tmpvar_8.z), 0.0, 1.0)\n  ) * pow (hue_shader.yxz, vec3(8.0, 8.0, 8.0))) * 3.0);\n  ret_1 = (mix (ret_1, (\n    pow (hue_shader.yzx, vec3(8.0, 8.0, 8.0))\n   * 1.4), vec3((\n    (texture (sampler_main, tmpvar_7).x * 0.8)\n   + \n    ((texture (sampler_blur1, tmpvar_7).xyz * scale1) + bias1)\n  .x))) * clamp ((1.0 - \n    (((texture (sampler_blur1, uv).xyz * scale1) + bias1).y * 4.0)\n  ), 0.0, 1.0));\n  vec2 tmpvar_9;\n  tmpvar_9.x = tmpvar_3.y;\n  tmpvar_9.y = tmpvar_4.y;\n  vec3 tmpvar_10;\n  vec3 tmpvar_11;\n  tmpvar_11 = pow (hue_shader, vec3(8.0, 8.0, 8.0));\n  tmpvar_10 = mix (mix (ret_1, vec3(1.0, 1.0, 1.0), (\n    (tmpvar_11 * texture (sampler_main, clamp ((uv - (tmpvar_9 * 2.0)), 0.0, 1.0)).z)\n   * 1.2)), (tmpvar_11.zxy * 1.8), tmpvar_8.yyy);\n  ret_1 = tmpvar_10;\n  vec4 tmpvar_12;\n  tmpvar_12.w = 1.0;\n  tmpvar_12.xyz = tmpvar_10;\n  ret = tmpvar_12.xyz;\n }"
        }
      },
      63: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 1,
            gammaadj: 1,
            decay: 1,
            echo_zoom: 1,
            echo_alpha: .5,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            wave_a: 2.789,
            wave_scale: .292,
            wave_smoothing: 0,
            wave_mystery: .12,
            modwavealphastart: 1,
            modwavealphaend: 1,
            warpanimspeed: .01,
            warpscale: 100,
            zoomexp: .92178,
            zoom: .9901,
            warp: .01,
            wave_g: 0,
            ob_size: 0,
            ob_r: .2,
            ob_a: .1,
            ib_size: 0,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            ib_a: 1,
            mv_x: 64,
            mv_y: 48,
            mv_l: 0,
            mv_b: 0,
            mv_a: 0,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              sides: 100,
              additive: 1,
              thickoutline: 1,
              x: .43,
              y: .42,
              rad: .15799,
              ang: .1885,
              tex_zoom: .87865,
              r: 0,
              g: 1,
              g2: 0,
              border_a: 0
            },
            init_eqs_str: "a.q4=0;a.q8=0;",
            frame_eqs_str: "a.x=a.q4;a.y=a.q8;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.y3=0;a.y1=0;a.xx=0;a.si3=0;a.t1=0;a.x1=0;a.vx3=0;a.q6=0;a.dt=0;a.q1=0;a.q5=0;a.d1=0;a.si1=0;a.vx4=0;a.grav=0;a.x3=0;a.d2=0;a.xx2=0;a.q4=0;a.yy1=0;a.vy4=0;a.dir=0;a.bounce=0;a.x4=0;a.x2=0;a.vy2=0;a.y2=0;a.q2=0;a.m1=0;a.spring=0;a.si2=0;a.vx2=0;a.q3=0;a.resist=0;a.yy=0;a.y4=0;a.q7=0;a.vy3=0;a.xx1=0;a.b1=0;a.q8=0;a.x1=.9;a.y1=.5;a.x2=.5;a.y2=.5;a.x3=.5;a.y3=.5;a.x4=.5;a.y4=.5;",
          frame_eqs_str: "a.decay=1;a.xx1=.9*a.xx1+.01*a.bass;a.xx2=.9*a.xx2+.01*a.treb;a.yy1=.94*a.yy1+.0075*(a.treb+a.bass);a.x1=.5+a.xx1-a.xx2;a.y1=.5+a.yy1;a.spring=18;a.grav=1;a.resist=.2;a.bounce=.9;a.dt=.0003;a.vx2=a.vx2*(1-a.resist*a.dt)+a.dt*(a.x1+a.x3-2*a.x2)*a.spring;a.vy2=a.vy2*(1-a.resist*a.dt)+a.dt*((a.y1+a.y3-2*a.y2)*a.spring-a.grav);a.vx3=a.vx3*(1-a.resist*a.dt)+a.dt*(a.x2+a.x4-2*a.x3)*a.spring;a.vy3=a.vy3*(1-a.resist*a.dt)+a.dt*((a.y2+a.y4-2*a.y3)*a.spring-a.grav);a.vx4=a.vx4*(1-a.resist*\na.dt)+a.dt*(a.x3-a.x4)*a.spring;a.vy4=a.vy4*(1-a.resist*a.dt)+a.dt*((a.y3-a.y4)*a.spring-a.grav);a.x2+=a.vx2;a.y2+=a.vy2;a.x3+=a.vx3;a.y3+=a.vy3;a.x4+=a.vx4;a.y4+=a.vy4;a.vx2=.00001<Math.abs(above(a.x2,0))?a.vx2:Math.abs(a.vx2)*a.bounce;a.vx2=.00001<Math.abs(below(a.x2,1))?a.vx2:-Math.abs(a.vx2)*a.bounce;a.vx3=.00001<Math.abs(above(a.x3,0))?a.vx3:Math.abs(a.vx3)*a.bounce;a.vx3=.00001<Math.abs(below(a.x3,1))?a.vx3:-Math.abs(a.vx3)*a.bounce;a.vx4=.00001<Math.abs(above(a.x4,0))?a.vx4:Math.abs(a.vx4)*\na.bounce;a.vx4=.00001<Math.abs(below(a.x4,1))?a.vx4:-Math.abs(a.vx4)*a.bounce;a.vy2=.00001<Math.abs(above(a.y2,0))?a.vy2:Math.abs(a.vy2)*a.bounce;a.vy2=.00001<Math.abs(below(a.y2,1))?a.vy2:-Math.abs(a.vy2)*a.bounce;a.vy3=.00001<Math.abs(above(a.y3,0))?a.vy3:Math.abs(a.vy3)*a.bounce;a.vy3=.00001<Math.abs(below(a.y3,1))?a.vy3:-Math.abs(a.vy3)*a.bounce;a.vy4=.00001<Math.abs(above(a.y4,0))?a.vy4:Math.abs(a.vy4)*a.bounce;a.vy4=.00001<Math.abs(below(a.y4,1))?a.vy4:-Math.abs(a.vy4)*a.bounce;a.q1=a.x1;a.q2=\na.x2;a.q3=a.x3;a.q4=a.x4;a.q5=a.y1;a.q6=a.y2;a.q7=a.y3;a.q8=a.y4;a.zoom=1.004;a.q6=Math.atan2(a.vx4,a.vy4);a.q5=sqrt(a.vx4*a.vx4+a.vy4*a.vy4);",
          pixel_eqs_str: "a.dir=-a.q6+Math.asin(1);a.b1=.08;a.m1=45*a.q5;a.t1=.5;a.xx=.5+div(a.q4-.5,a.aspectx);a.yy=1-(.5+div(a.q8-.5,a.aspecty));a.x1=a.xx+Math.cos(a.dir+1.5708)*a.b1;a.y1=a.yy-Math.sin(a.dir+1.5708)*a.b1;a.x2=a.xx-Math.cos(a.dir+1.5708)*a.b1;a.y2=a.yy+Math.sin(a.dir+1.5708)*a.b1;a.d1=sqrt((a.x1-a.x)*(a.x1-a.x)+(a.y1-a.y)*(a.y1-a.y))-2*a.b1;a.si1=1-div(1,1+pow(2,100*-a.d1));a.d2=sqrt((a.x2-a.x)*(a.x2-a.x)+(a.y2-a.y)*(a.y2-a.y))-2*a.b1;a.si2=1-div(1,1+pow(2,100*-a.d2));a.si3=0*-pow(a.q5,\n3);a.dx=div(2*(a.si1*Math.sin(a.y1-a.y)*a.m1*a.d1-a.si2*Math.sin(a.y2-a.y)*a.m1*a.d2+a.si3*Math.cos(a.dir)*a.t1),a.aspectx);a.dy=div(2*(-a.si1*Math.sin(a.x1-a.x)*a.m1*a.d1+a.si2*Math.sin(a.x2-a.x)*a.m1*a.d2-a.si3*Math.sin(a.dir)*a.t1),a.aspecty);",
          warp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (texsize.zw * 8.0);\n  vec2 tmpvar_3;\n  tmpvar_3.x = (((texture (sampler_blur1, \n    (uv + (vec2(1.0, 0.0) * tmpvar_2))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(1.0, 0.0) * tmpvar_2))\n  ).xyz * scale1) + bias1)).x;\n  tmpvar_3.y = (((texture (sampler_blur1, \n    (uv + (vec2(0.0, 1.0) * tmpvar_2))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(0.0, 1.0) * tmpvar_2))\n  ).xyz * scale1) + bias1)).x;\n  vec2 tmpvar_4;\n  tmpvar_4 = (uv - ((tmpvar_3 * texsize.zw) * 0.5));\n  ret_1.x = texture (sampler_fw_main, tmpvar_4).x;\n  ret_1.x = (ret_1.x + ((\n    (ret_1.x - ((texture (sampler_blur3, tmpvar_4).xyz * scale3) + bias3).x)\n   * 0.2) - 0.004));\n  ret_1.y = ((texture (sampler_fw_main, uv_orig).y * 0.98) - 0.004);\n  vec4 tmpvar_5;\n  tmpvar_5.w = 1.0;\n  tmpvar_5.xyz = ret_1;\n  ret = tmpvar_5.xyz;\n }",
          comp: " shader_body { \n  vec2 tmpvar_1;\n  tmpvar_1 = (texsize.zw * 4.0);\n  vec2 tmpvar_2;\n  tmpvar_2.x = (((texture (sampler_blur1, \n    (uv + (vec2(1.0, 0.0) * tmpvar_1))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(1.0, 0.0) * tmpvar_1))\n  ).xyz * scale1) + bias1)).x;\n  tmpvar_2.y = (((texture (sampler_blur1, \n    (uv + (vec2(0.0, 1.0) * tmpvar_1))\n  ).xyz * scale1) + bias1) - ((texture (sampler_blur1, \n    (uv - (vec2(0.0, 1.0) * tmpvar_1))\n  ).xyz * scale1) + bias1)).x;\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = mix ((vec3(0.0, 0.0, 1.0) * texture (sampler_main, uv).x), vec3(1.0, 0.0, 0.0), texture (sampler_main, (uv - tmpvar_2)).yyy);\n  ret = tmpvar_3.xyz;\n }"
        }
      },
      7: function(a, e, t) {
        "use strict";
        e.__esModule = !0;
        var n, r = t(8),
          s = (n = r) && n.__esModule ? n : {
            default: n
          };
        e.default = function() {
          function a(a, e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, s.default)(a, n.key, n)
            }
          }
          return function(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
          }
        }()
      },
      72: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1.56,
            decay: 1,
            echo_zoom: .362,
            echo_orient: 1,
            wave_mode: 7,
            additivewave: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: 1.286,
            wave_smoothing: .63,
            modwavealphastart: .71,
            modwavealphaend: 1.3,
            warpscale: 1.331,
            fshader: 1,
            zoom: 1.004,
            warp: .19788,
            sx: .99967,
            sy: .9999,
            wave_g: .65,
            wave_b: .65,
            ob_size: 0,
            ob_a: 1,
            mv_x: 64,
            mv_y: 48,
            mv_l: 0,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              thick: 1,
              r: 0,
              g: .3,
              b: .75
            },
            init_eqs_str: "a.ma=0;a.mx=0;a.my=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.ma+=3.1415*above(a.bass,1)*.01*a.bass;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0002*Math.cos(a.ma);a.my+=.0002*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.8);"
          }, {
            baseVals: {
              enabled: 1,
              thick: 1,
              r: 0,
              b: 0
            },
            init_eqs_str: "a.ma=0;a.mx=0;a.my=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.ma+=3.1415*above(a.bass,1)*.05*a.bass;a.ma-=3.1415*above(a.mid,1)*.05*a.mid;a.mx+=.0001*Math.cos(a.ma);a.my+=.0001*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.1);"
          }, {
            baseVals: {
              enabled: 1,
              thick: 1,
              g: .5,
              b: 0
            },
            init_eqs_str: "a.ma=0;a.mx=0;a.my=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.ma+=3.1415*above(a.mid,1)*.01*a.mid;a.ma-=3.1415*above(a.treb,1)*.01*a.treb;a.mx+=.0004*Math.cos(a.ma);a.my+=.0004*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.3);"
          }, {
            baseVals: {
              enabled: 1,
              thick: 1,
              r: .4,
              g: 0,
              b: .6
            },
            init_eqs_str: "a.ma=0;a.mx=0;a.my=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.ma+=3.1415*above(a.bass,.5)*.02*a.bass;a.ma-=3.1415*above(a.treb,.5)*.02*a.treb;a.mx+=.0008*Math.cos(a.ma);a.my+=.0008*Math.sin(a.ma);a.mx=.00001<Math.abs(above(a.mx,.9))?.9-a.mx:a.mx;a.my=.00001<Math.abs(above(a.my,.9))?.9-a.my:a.my;a.mx=.00001<Math.abs(below(a.mx,.1))?.9+a.mx:a.mx;a.my=.00001<Math.abs(below(a.my,.1))?.9+a.my:a.my;a.x=a.mx;a.y=a.my;a.a=above(a.bass+a.mid+a.treb,.2);"
          }],
          init_eqs_str: "a.du=0;a.q1=0;a.mm=0;a.tt=0;a.mult=0;a.ang2=0;a.dv=0;a.mx=0;a.mn=0;a.bb=0;a.q2=0;a.dist=0;",
          frame_eqs_str: "a.wave_r+=.2*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.2*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.2*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.q1=2*a.cx-1+.6*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.q2=2*a.cy-1+.6*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.warp=0;a.zoom=1;a.bb=.99*a.bb+.02*a.bass;a.mm=.99*a.mm+.02*a.mid;a.tt=.99*a.tt+.02*a.treb;a.mx=Math.max(Math.max(a.bb,a.mm),a.tt);a.mn=Math.min(Math.min(a.bb,\na.mm),a.tt);a.ob_r=div(a.bb-a.mn,a.mx-a.mn);a.ob_b=div(a.mm-a.mn,a.mx-a.mn);a.ob_g=div(a.tt-a.mn,a.mx-a.mn);",
          pixel_eqs_str: "a.du=2*a.x-1-a.q1;a.dv=2*a.y-1-a.q2;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv)+.15*a.time;a.mult=.05*Math.sin(.05*a.dist);a.dx=a.mult*Math.sin(2*a.ang2-1.5);a.dy=a.mult*Math.cos(2*a.ang2-1.5);",
          warp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  vec4 tmpvar_2;\n  tmpvar_2 = texture (sampler_main, uv);\n  tmpvar_1.xyz = ((texture (sampler_main, clamp (\n    (uv - (((vec2(0.0, 64.0) * texsize.zw) * dot (\n      (tmpvar_2.xyz - 0.35)\n    , vec3(0.32, 0.49, 0.29))) * (dot (tmpvar_2.xyz, vec3(0.32, 0.49, 0.29)) - 0.4)))\n  , 0.0, 1.0)).xyz - 0.0011) + ((texture (sampler_noise_lq, \n    (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 1.5)) + rand_frame.xy)\n  ) - 0.5) * 0.0038).xyz);\n  ret = tmpvar_1.xyz;\n }",
          comp: " shader_body { \n  vec2 uv1_1;\n  vec2 tmpvar_2;\n  tmpvar_2.y = 0.0;\n  tmpvar_2.x = texsize.z;\n  vec2 tmpvar_3;\n  tmpvar_3.x = 0.0;\n  tmpvar_3.y = texsize.w;\n  vec2 tmpvar_4;\n  tmpvar_4.x = (texture (sampler_main, (uv - tmpvar_2)).xyz - texture (sampler_main, (uv + tmpvar_2)).xyz).x;\n  tmpvar_4.y = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;\n  uv1_1 = ((0.3 * cos(\n    ((uv - 0.5) * 2.0)\n  )) - tmpvar_4);\n  float tmpvar_5;\n  tmpvar_5 = clamp ((0.04 / sqrt(\n    dot (uv1_1, uv1_1)\n  )), 0.0, 1.0);\n  uv1_1 = ((0.3 * cos(\n    (uv1_1 * 12.0)\n  )) - (9.0 * tmpvar_4));\n  vec4 tmpvar_6;\n  tmpvar_6.w = 1.0;\n  tmpvar_6.xyz = (tmpvar_5 + ((texture (sampler_main, uv).xyz * 12.0) * vec3(clamp (\n    (0.04 / sqrt(dot (uv1_1, uv1_1)))\n  , 0.0, 1.0))));\n  ret = tmpvar_6.xyz;\n }"
        }
      },
      73: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 3,
            gammaadj: 1.56,
            decay: 1,
            echo_zoom: .362,
            echo_orient: 1,
            wave_thick: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: 1.599,
            wave_smoothing: 0,
            wave_mystery: -.5,
            modwavealphastart: 2,
            modwavealphaend: 2,
            warpscale: .107,
            zoomexp: .1584,
            fshader: 1,
            warp: .01,
            wave_r: .51,
            wave_g: .5,
            ob_size: 0,
            ob_a: 1,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            ib_a: 1,
            mv_x: 64,
            mv_y: 48,
            mv_l: .5,
            mv_r: 0,
            mv_g: 0,
            mv_b: 0,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.d=0;a.cx1=0;a.y3=0;a.y1=0;a.cy1=0;a.x1=0;a.x3=0;a.dir=0;a.r=0;a.x2=0;a.y2=0;",
          frame_eqs_str: "a.ib_r=.3*Math.sin(5*a.time)+.7;a.ib_g=.3*Math.sin(4*a.time)+.3;a.ib_b=.5*Math.sin(4*div(a.time,3))+.5;a.wave_r=1-a.ib_r;a.wave_g=1-a.ib_g;a.wave_b=1-a.ib_b;a.wave_x=.5+.3*Math.sin(3*a.time);a.wave_y=.5+.3*Math.cos(2.187*a.time);",
          pixel_eqs_str: "a.r=div(a.bass,4);a.cx1=.5+.2*Math.sin(.618*a.time);a.cy1=.5+.2*Math.cos(1.618*a.time);a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=a.bass*(a.r*a.r-a.d*a.d)*.3;a.x1=.00001<Math.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y1=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.cx1=.5+.3*Math.sin(2.618*a.time);a.cy1=.5+.3*Math.cos(3.14*a.time);a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=-a.mid*(a.r*a.r-a.d*a.d)*.3;a.x2=.00001<\nMath.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y2=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.cx1=.5+.4*Math.sin(2.618*-a.time);a.cy1=.5+.4*Math.cos(1.14*-a.time);a.d=sqrt((a.x-a.cx1)*(a.x-a.cx1)+(a.y-a.cy1)*(a.y-a.cy1));a.dir=-a.treb*(a.r*a.r-a.d*a.d)*.3;a.x3=.00001<Math.abs(above(a.d,a.r))?0:Math.sin(a.y-a.cy1)*a.dir;a.y3=.00001<Math.abs(above(a.d,a.r))?0:-Math.sin(a.x-a.cx1)*a.dir;a.dx=a.x1+a.x2+a.x3;a.dy=a.y1+a.y2+a.y3;",
          warp: " shader_body { \n  vec2 uv_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = (((uv_orig * texsize.xy) * (texsize_noise_lq.zw * 2.0)) + rand_frame.xy);\n  uv_1 = (uv + ((texture (sampler_noise_lq, tmpvar_2).xy - 0.5) * texsize.zw));\n  vec2 tmpvar_3;\n  tmpvar_3.x = bass;\n  tmpvar_3.y = treb;\n  vec4 tmpvar_4;\n  tmpvar_4.w = 1.0;\n  tmpvar_4.xyz = (texture (sampler_main, (uv_1 + (\n    (texture (sampler_main, (mix (uv_1, uv_orig, vec2(-1.0, -1.0)) + texsize.zw)).xy - 0.4)\n   * \n    (-0.004 + (0.04 * clamp ((tmpvar_3 - 1.0), 0.0, 1.0)))\n  ))).xyz - (0.0008 + (\n    (texture (sampler_noise_lq, tmpvar_2) - 0.5)\n   * 0.02)).xyz);\n  ret = tmpvar_4.xyz;\n }",
          comp: " shader_body { \n  vec2 uv1_1;\n  vec2 tmpvar_2;\n  tmpvar_2.y = 0.0;\n  tmpvar_2.x = texsize.z;\n  vec2 tmpvar_3;\n  tmpvar_3.x = 0.0;\n  tmpvar_3.y = texsize.w;\n  vec2 tmpvar_4;\n  tmpvar_4.x = (texture (sampler_main, (uv - tmpvar_2)).xyz - texture (sampler_main, (uv + tmpvar_2)).xyz).x;\n  tmpvar_4.y = (texture (sampler_main, (uv - tmpvar_3)).xyz - texture (sampler_main, (uv + tmpvar_3)).xyz).x;\n  uv1_1 = ((0.3 * cos(\n    ((uv - 0.5) * 2.0)\n  )) - tmpvar_4);\n  float tmpvar_5;\n  tmpvar_5 = clamp ((0.04 / sqrt(\n    dot (uv1_1, uv1_1)\n  )), 0.0, 1.0);\n  uv1_1 = ((0.3 * cos(\n    (uv1_1 * 12.0)\n  )) - (9.0 * tmpvar_4));\n  vec4 tmpvar_6;\n  tmpvar_6.w = 1.0;\n  tmpvar_6.xyz = (tmpvar_5 + ((texture (sampler_main, uv).xyz * 12.0) * vec3(clamp (\n    (0.04 / sqrt(dot (uv1_1, uv1_1)))\n  , 0.0, 1.0))));\n  ret = tmpvar_6.xyz;\n }"
        }
      },
      76: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 2,
            gammaadj: 2.7,
            wave_mode: 1,
            modwavealphabyvolume: 1,
            wave_a: 2.707,
            wave_scale: 1.025,
            wave_smoothing: .1,
            modwavealphastart: .77,
            modwavealphaend: 1.01,
            warpscale: 1.331,
            zoom: 1.014,
            warp: .21786,
            wave_r: .65,
            wave_g: .65,
            wave_b: .65,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "",
          frame_eqs_str: "a.wave_r+=.35*(.6*Math.sin(3.98*a.time)+.4*Math.sin(11.047*a.time));a.wave_g+=.35*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.35*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.cx+=.11*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.11*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.005*(.6*Math.sin(.173*a.time)+.4*Math.sin(.223*a.time));a.decay-=.01*equal(mod(a.frame,20),0);",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  tmpvar_1.xyz = (texture (sampler_main, (uv + (\n    (texture (sampler_main, (mix (uv, uv_orig, vec2(-1.0, -1.0)) + texsize.zw)).xy - 0.37)\n   * 0.01))).xyz - 0.004);\n  ret = tmpvar_1.xyz;\n }",
          comp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1 = texture (sampler_main, uv);\n  vec4 tmpvar_2;\n  tmpvar_2.w = 1.0;\n  tmpvar_2.xyz = mix (vec3(dot (tmpvar_1.xyz, vec3(0.3333, 0.3333, 0.3333))), tmpvar_1.xyz, vec3(3.0, 3.0, 3.0));\n  ret = tmpvar_2.xyz;\n }"
        }
      },
      77: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 0,
            gammaadj: 1.9,
            echo_zoom: 1.16936,
            wave_mode: 7,
            modwavealphabyvolume: 1,
            wave_a: 0,
            wave_scale: 1.015009,
            wave_smoothing: .522,
            modwavealphastart: .83,
            modwavealphaend: 1.31,
            warpscale: 3.138,
            zoom: 1.009006,
            warp: 536e-6,
            wave_r: .5,
            wave_g: .5,
            wave_b: .5,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.dx_residual=0;a.dy_residual=0;a.bass_thresh=0;",
          frame_eqs_str: "a.wave_r=.85+.25*Math.sin(.437*a.time+1);a.wave_g=.85+.25*Math.sin(.544*a.time+2);a.wave_b=.85+.25*Math.sin(.751*a.time+3);a.rot+=.01*(.6*Math.sin(.381*a.time)+.4*Math.sin(.579*a.time));a.cx+=.21*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.cy+=.21*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.dx+=.003*(.6*Math.sin(.234*a.time)+.4*Math.sin(.277*a.time));a.dy+=.003*(.6*Math.sin(.284*a.time)+.4*Math.sin(.247*a.time));a.decay-=.01*equal(mod(a.frame,6),0);a.dx+=\na.dx_residual;a.dy+=a.dy_residual;a.bass_thresh=2*above(a.bass_att,a.bass_thresh)+(1-above(a.bass_att,a.bass_thresh))*(.96*(a.bass_thresh-1.3)+1.3);a.dx_residual=.016*equal(a.bass_thresh,2.13)*Math.sin(7*a.time)+(1-equal(a.bass_thresh,2.13))*a.dx_residual;a.dy_residual=.012*equal(a.bass_thresh,2.13)*Math.sin(9*a.time)+(1-equal(a.bass_thresh,2.13))*a.dy_residual;a.wave_x-=7*a.dx_residual;a.wave_y-=7*a.dy_residual;a.wave_mystery=.03*a.time;a.zoom+=.005*(.6*Math.sin(.1934*a.time+3)+.4*Math.sin(.307*\na.time+9));a.zoom+=.4*Math.max(0,a.bass_att-1.1);",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec3 ret_1;\n  ret_1 = texture (sampler_main, uv).xyz;\n  ret_1 = (ret_1 + ((ret_1 - \n    ((texture (sampler_blur2, uv).xyz * scale2) + bias2)\n  ) * 0.3));\n  ret_1 = (ret_1 * 0.9);\n  ret_1 = (ret_1 + ((\n    ((texture (sampler_noise_lq, ((\n      (uv_orig * texsize.xy)\n     * \n      (texsize_noise_lq.zw * 0.4)\n    ) + rand_frame.xy)).xyz - 0.5) / 256.0)\n   * 122.0) * clamp (\n    (treb_att - 1.0)\n  , 0.0, 1.0)));\n  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n  vec4 tmpvar_2;\n  tmpvar_2.w = 1.0;\n  tmpvar_2.xyz = ret_1;\n  ret = tmpvar_2.xyz;\n }",
          comp: " shader_body { \n  vec3 ret_1;\n  ret_1 = (texture (sampler_main, uv).xyz + ((\n    (texture (sampler_blur1, uv).xyz * scale1)\n   + bias1) * 0.4));\n  vec3 tmpvar_2;\n  tmpvar_2 = pow (ret_1, vec3(0.5, 0.8, 1.7));\n  ret_1 = tmpvar_2;\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = tmpvar_2;\n  ret = tmpvar_3.xyz;\n }"
        }
      },
      79: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1.9,
            echo_zoom: 1.16936,
            wave_mode: 5,
            additivewave: 1,
            wave_a: 0,
            wave_scale: .899719,
            wave_smoothing: .63,
            wave_mystery: 1,
            modwavealphastart: 2,
            modwavealphaend: 2,
            warpscale: 2.593743,
            zoom: 1.00496,
            warp: .278033,
            sx: .999666,
            sy: .9999,
            wave_r: .65,
            wave_g: .65,
            wave_b: .65,
            mv_x: 0,
            mv_y: 48,
            mv_dx: -.941273,
            mv_dy: .426319,
            mv_l: 5,
            mv_r: .315997,
            mv_g: .078173,
            mv_b: .941976,
            mv_a: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.du=0;a.q1=0;a.rg=0;a.q9=0;a.mult=0;a.ang2=0;a.dv=0;a.q4=0;a.q2=0;a.dist=0;a.q3=0;a.rg=0;",
          frame_eqs_str: "a.wave_r+=.35*(.6*Math.sin(.98*a.time)+.4*Math.sin(1.047*a.time));a.wave_g+=.35*(.6*Math.sin(.835*a.time)+.4*Math.sin(1.081*a.time));a.wave_b+=.35*(.6*Math.sin(.814*a.time)+.4*Math.sin(1.011*a.time));a.q1=2*a.cx-1+.52*(.6*Math.sin(.374*a.time)+.4*Math.sin(.294*a.time));a.q2=2*a.cy-1+.52*(.6*Math.sin(.393*a.time)+.4*Math.sin(.223*a.time));a.q3=2*a.cx-1+.52*(.6*Math.sin(.174*-a.time)+.4*Math.sin(.364*a.time));a.q4=2*a.cy-1+.52*(.6*Math.sin(.234*a.time)+.4*Math.sin(.271*-a.time));\na.decay-=.01*equal(mod(a.frame,5),0);a.rg=Math.max(.95*a.rg,.3+.5*Math.min(2,1.3*Math.max(0,a.mid_att-1)));a.q9=a.rg;",
          pixel_eqs_str: "a.du=2*a.x-1-a.q1;a.dv=2*a.y-1-a.q2;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv);a.mult=div(.008,a.dist+.4);a.dx=a.mult*Math.sin(a.ang2-1.5);a.dy=a.mult*Math.cos(a.ang2-1.5);a.du=2*a.x-1-a.q3;a.dv=2*a.y-1-a.q4;a.dist=sqrt(a.du*a.du+a.dv*a.dv);a.ang2=Math.atan2(a.du,a.dv);a.mult=div(.008,a.dist+.4);a.dx+=a.mult*Math.sin(a.ang2+1.5);a.dy+=a.mult*Math.cos(a.ang2+1.5);",
          warp: " shader_body { \n  vec3 ret_1;\n  vec2 tmpvar_2;\n  tmpvar_2 = mix (uv_orig, uv, vec2(q9));\n  ret_1 = texture (sampler_main, tmpvar_2).xyz;\n  ret_1 = (ret_1 + ((ret_1 - \n    ((texture (sampler_blur1, tmpvar_2).xyz * scale1) + bias1)\n  ) * 0.3));\n  ret_1 = (ret_1 * 0.9);\n  ret_1 = (ret_1 + ((\n    ((texture (sampler_noise_lq, ((\n      (uv_orig * texsize.xy)\n     * \n      (texsize_noise_lq.zw * 0.4)\n    ) + rand_frame.xy)).xyz - 0.5) / 256.0)\n   * 122.0) * clamp (\n    (treb_att - 1.0)\n  , 0.0, 1.0)));\n  ret_1 = mix (ret_1, vec3(dot (ret_1, vec3(0.32, 0.49, 0.29))), vec3(0.2, 0.2, 0.2));\n  vec4 tmpvar_3;\n  tmpvar_3.w = 1.0;\n  tmpvar_3.xyz = ret_1;\n  ret = tmpvar_3.xyz;\n }",
          comp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  tmpvar_1.xyz = (0.3 + (0.4 * vec3(dot (texture (sampler_main, uv).xyz, vec3(0.32, 0.49, 0.29)))));\n  ret = tmpvar_1.xyz;\n }"
        }
      },
      8: function(a, e, t) {
        a.exports = {
          default: t(9),
          __esModule: !0
        }
      },
      84: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 0,
            gammaadj: 1.980001,
            decay: .5,
            echo_zoom: .999998,
            echo_alpha: .5,
            echo_orient: 3,
            wave_mode: 4,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            darken_center: 1,
            darken: 1,
            wave_a: .001,
            wave_scale: .527429,
            wave_smoothing: .45,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: .442,
            warpscale: .498,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: .8,
            wave_g: .49,
            ob_size: 0,
            ob_r: 1,
            ob_g: 1,
            ob_b: 1,
            ob_a: .05,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: 1.85,
            mv_r: .4999,
            mv_g: .4999,
            mv_b: .4999,
            mv_a: 0,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              thickoutline: 1,
              textured: 1,
              x: .26,
              y: .2,
              rad: .393173,
              tex_zoom: 1.392831,
              r: 0,
              g: .55,
              b: .5,
              a: .9,
              g2: .4,
              b2: .4,
              border_r: .3,
              border_g: .7,
              border_b: .8,
              border_a: .2
            },
            init_eqs_str: "a.g0=0;a.y0=0;a.q1=0;a.x0=0;a.q24=0;a.q26=0;a.r0=0;a.trig=0;a.q2=0;a.b0=0;a.rad0=0;",
            frame_eqs_str: "a.trig=a.q24;a.textured=1;a.x0=a.x0*bnot(a.trig)+a.trig*(.2+div(randint(100),200));a.y0=a.y0*bnot(a.trig)+a.trig*(.2+div(randint(100),200));a.x0+=div(.03*a.q1*(3+a.q26),a.fps);a.y0+=div(.03*a.q2*(3+a.q26),a.fps);a.x0-=Math.floor(a.x0);a.y0-=Math.floor(a.y0);a.tex_ang=a.time;a.ang=a.time*a.q2;a.x=a.x0;a.y=a.y0;a.rad0=a.rad0*bnot(a.trig)+div(a.trig*randint(100),200);a.rad=a.rad0;a.r0=a.r0*bnot(a.trig)+div(a.trig*randint(10),10);a.b0=a.b0*bnot(a.trig)+div(a.trig*randint(10),10);\na.g0=a.g0*bnot(a.trig)+div(a.trig*randint(10),10);a.border_r=a.r0;a.border_g=a.g0;a.border_b=a.b0;a.r=a.r0;a.b=a.b0;a.g=a.g0;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.rm=0;a.ampl=0;a.index2=0;a.index=0;a.q18=0;a.q22=0;a.q21=0;a.movex=0;a.q1=0;a.dec_med=0;a.index3=0;a.trel=0;a.rott=0;a.ava=0;a.is_beat=0;a.q23=0;a.k1=0;a.q24=0;a.dec_slow=0;a.q4=0;a.q26=0;a.p2=0;a.mov=0;a.avg=0;a.movez=0;a.q19=0;a.beat=0;a.q17=0;a.p1=0;a.peak=0;a.q2=0;a.q27=0;a.movey=0;a.q3=0;a.t0=0;a.q28=0;a.q30=0;a.q20=0;a.dirx=1;",
          frame_eqs_str: "a.dec_med=pow(.6,div(30,a.fps));a.dec_slow=pow(.9,div(30,a.fps));a.beat=Math.max(Math.max(a.bass,a.mid),a.treb);a.avg=a.avg*a.dec_slow+a.beat*(1-a.dec_slow);a.is_beat=above(a.beat,.2+a.avg+a.peak)*above(a.time,a.t0+.2);a.t0=a.is_beat*a.time+(1-a.is_beat)*a.t0;a.peak=a.is_beat*a.beat+(1-a.is_beat)*a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,8);a.index2=mod(a.index2+a.is_beat*bnot(a.index),4);a.index3=mod(a.index3+a.is_beat*bnot(a.index)*bnot(a.index2),3);a.q20=a.avg;a.q21=\na.beat;a.q22=a.peak;a.q23=a.index;a.q24=a.is_beat;a.q26=a.bass+a.mid+a.treb;a.ava=a.ava*a.dec_slow+a.q26*(1-a.dec_slow);a.k1=a.is_beat*equal(mod(a.index,2),0);a.p1=a.k1*(a.p1+1)+(1-a.k1)*a.p1;a.p2=a.dec_med*a.p2+(1-a.dec_med)*a.p1;a.rott=div(3.1416*a.p2,2);a.q1=Math.cos(a.rott);a.q2=Math.sin(a.rott);a.q3=-a.q2;a.q4=a.q1;a.q27=8-a.index;a.q28=.5+div(Math.sin(div(a.time,7)),10);a.rm=Math.min(a.q26-1.5*a.ava,2);a.mov=a.is_beat*a.rm+(1-a.is_beat)*a.mov;a.movez+=div(.4,a.fps)*a.mov;a.q30=a.movez;a.ampl=\ndiv(a.q26,8);a.movex+=div(.2,a.fps)*Math.sin(a.rott);a.movey+=div(.2,a.fps)*Math.cos(a.rott);a.q18=a.movex;a.q19=a.movey;a.trel=a.trel+div(1,a.fps)+a.q24;a.q17=2*Math.sin(div(a.trel,4));",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec2 uv_1;\n  vec2 uv6_2;\n  vec2 tmpvar_3;\n  tmpvar_3 = ((uv - 0.5) * aspect.xy);\n  float tmpvar_4;\n  tmpvar_4 = (((q28 * 2.0) * sqrt(\n    dot (tmpvar_3, tmpvar_3)\n  )) + (rand_frame * 64.0)).x;\n  uv_1 = (uv + (clamp (\n    ((sin(tmpvar_4) / cos(tmpvar_4)) * normalize(tmpvar_3))\n  , vec2(-16.0, -16.0), vec2(16.0, 16.0)) / 20.0));\n  uv6_2 = (0.4 * sin((tmpvar_3 * 12.0)));\n  vec4 tmpvar_5;\n  tmpvar_5.w = 1.0;\n  tmpvar_5.xyz = (((q24 * \n    (((texture (sampler_main, uv_1).xyz - (\n      ((texture (sampler_blur1, fract(uv_1)).xyz * scale1) + bias1)\n     * 0.04)) + (0.15 * (vec3(\n      (0.1 / sqrt(dot (uv6_2, uv6_2)))\n    ) * roam_cos.xyz))) - 0.04)\n  ) * 0.98) + ((1.0 - q24) * texture (sampler_main, uv_orig).xyz));\n  ret = tmpvar_5.xyz;\n }",
          comp: "vec3 xlat_mutableneu;\nvec3 xlat_mutableret1;\nvec2 xlat_mutablers2;\n shader_body { \n  vec2 uv_1;\n  float inten_3;\n  float dist_4;\n  float ang2_5;\n  vec2 uv2_6;\n  uv_1 = (uv - 0.5);\n  uv_1 = (uv_1 * aspect.xy);\n  dist_4 = 1.0;\n  inten_3 = 1.0;\n  xlat_mutableret1 = vec3(0.0, 0.0, 0.0);\n  for (float n_2 = 0.0; n_2 <= 4.0; n_2 += 1.0) {\n    vec2 uv3_7;\n    ang2_5 = ((6.28 * n_2) / 4.0);\n    float tmpvar_8;\n    tmpvar_8 = cos(ang2_5);\n    float tmpvar_9;\n    tmpvar_9 = sin(ang2_5);\n    uv2_6.x = ((uv_1.x * tmpvar_8) - (uv_1.y * tmpvar_9));\n    uv2_6.y = ((uv_1.x * tmpvar_9) + (uv_1.y * tmpvar_8));\n    uv2_6 = (uv2_6 * aspect.yx);\n    dist_4 = (1.0 - fract((\n      (0.25 * n_2)\n     + q30)));\n    inten_3 = ((sqrt(dist_4) * (1.0 - dist_4)) * 4.0);\n    vec2 tmpvar_10;\n    tmpvar_10.x = tmpvar_8;\n    tmpvar_10.y = tmpvar_9;\n    uv3_7 = (fract((\n      ((3.0 * uv2_6) * dist_4)\n     + \n      (0.3 * q27)\n    )) + (q17 * tmpvar_10));\n    xlat_mutableneu = (texture (sampler_main, uv3_7).xyz - ((texture (sampler_blur2, \n      ((uv3_7 * 1.02) * q1)\n    ).xyz * scale2) + bias2));\n    xlat_mutableneu = (xlat_mutableneu * vec3(greaterThanEqual (xlat_mutableneu, vec3(0.0, 0.0, 0.0))));\n    xlat_mutableret1 = max (xlat_mutableret1, (xlat_mutableneu * inten_3));\n  };\n  xlat_mutablers2 = ((0.4 * cos(\n    ((uv_1 * 13.0) + time)\n  )) - dot (xlat_mutableret1, vec3(0.32, 0.49, 0.29)));\n  vec4 tmpvar_11;\n  tmpvar_11.w = 1.0;\n  tmpvar_11.xyz = (xlat_mutableret1 + ((\n    ((0.05 / sqrt(dot (xlat_mutablers2, xlat_mutablers2))) * q26)\n   / 4.0) * hue_shader));\n  ret = tmpvar_11.xyz;\n }"
        }
      },
      89: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 4,
            gammaadj: 1.98,
            decay: .5,
            echo_zoom: 1,
            echo_alpha: .5,
            echo_orient: 3,
            additivewave: 1,
            wave_dots: 1,
            wave_thick: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: .527,
            wave_smoothing: 0,
            wave_mystery: .6,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_g: .49,
            ob_a: 1,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: 1.85,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0,
            b2x: .6,
            b3x: .4,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 1,
              sides: 5,
              additive: 1,
              num_inst: 256,
              x: .26,
              y: .2,
              rad: .39317,
              tex_zoom: .9355,
              g2: 0,
              a2: .2,
              border_g: 0,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.n=0;a.w=0;a.high=0;a.q12=0;a.arg=0;a.q13=0;a.y0=0;a.flen=0;a.x0=0;a.k1=0;a.q11=0;a.z0=0;a.exc=0;a.p2=0;a.p1=0;a.a0=0;a.q2=0;a.slen=0;a.q14=0;a.q3=0;a.q32=0;a.rad0=0;",
            frame_eqs_str: "a.n=a.instance;a.flen=a.reg00;a.slen=div(a.reg00,2);a.z0=10;a.y0=div(a.gmegabuf[Math.floor(2E3+a.n+a.flen)],a.z0);a.x0=div(a.gmegabuf[Math.floor(2E3+a.n)],a.z0);a.a0=a.gmegabuf[Math.floor(a.n+1E4)];a.k1=div(a.instance,a.num_inst)-.5;a.x=.5+a.x0+Math.sin(8*a.k1*Math.sin(.07*a.q12))*Math.sin(.13*a.q11)*a.q3*.7;a.y=.5+a.q32*(a.y0+Math.sin(8*a.k1*Math.sin(.1*a.q14))*Math.sin(.2*a.q13)*a.q3*.7);a.arg=div(a.q2,8);a.high=Math.exp(-500*pow(a.arg+.5-div(a.instance,a.num_inst),2));a.high+=\nMath.exp(-500*pow(-a.arg+.5-div(a.instance,a.num_inst),2));a.exc=sqrt(pow(a.x-.5,2)+pow(a.y-.5,2));a.rad0=above(a.z0,0)*Math.min(.1,div(a.a0,60))+.005;a.rad0=a.rad0*(1+2*a.exc)*(1+a.high);a.p1=.5+div(Math.sin(a.q12),2);a.p2=.5+div(Math.sin(1.4*a.q13),2);a.exc=pow(a.x-a.p1,2)+pow(a.y-a.p2,2);a.rad=Math.min(a.rad0*(1+div(.004*a.q3,Math.abs(a.exc))),1);a.a=Math.min(8*a.a0+.4,1);a.k1=5*div(a.instance,a.num_inst)+a.high;a.w=1-Math.exp(div(-a.treb_att,2)-.5);a.g=a.w+(1-a.w)*Math.sin(a.k1);a.r=a.w+(1-a.w)*\nMath.sin(a.k1-div(6.28,3));a.b=a.w+(1-a.w)*Math.sin(a.k1-div(12.56,3));a.a2=div(a.a,4);a.g2=0*a.g;a.b2=0*a.b;a.r2=0*a.r;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              sep: 120,
              spectrum: 1,
              additive: 1,
              scaling: 7.52386,
              smoothing: 0,
              r: 0,
              a: .7
            },
            init_eqs_str: "a.flen=0;a.n=0;a.vol=0;a.chg=0;a.dec=0;a.q1=0;a.q2=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.flen=a.reg00;a.n=Math.floor(a.sample*a.flen);a.vol=(a.value1+a.value2)*(1+div(.1,a.sample+.03));a.chg=Math.min(Math.max(a.vol-a.gmegabuf[Math.floor(a.n)],-1),1);a.dec=.00001<Math.abs(0<a.chg?1:0)?1-.3*a.chg:1+.2*a.chg;a.chg=a.q1-a.q2;a.dec=.94-Math.abs(a.chg)*(.00001<Math.abs(0<a.chg?1:0)?.2:.1);a.dec=Math.min(Math.max(a.dec,0),1);a.gmegabuf[Math.floor(a.n)]=a.gmegabuf[Math.floor(a.n)]*a.dec+a.vol*(1-a.dec);a.dec=div(a.q2,4);a.dec=Math.max(Math.min(a.dec,1),.1);a.gmegabuf[Math.floor(a.n)]=\na.gmegabuf[Math.floor(a.n)]*a.dec+a.gmegabuf[Math.floor(a.n+(.8>a.q2?1:0))]*(1-a.dec);a.gmegabuf[Math.floor(a.n+1E4)]=.2*a.gmegabuf[Math.floor(a.n+1E4)]+div(.8*a.vol,3);a.a=0;a.x=a.sample;a.y=.2+.23*a.gmegabuf[Math.floor(a.n+0)];"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.n=0;a.sw2=0;a.in1=0;a.q12=0;a.q13=0;a.sw3=0;a.dif=0;a.q1=0;a.lev3=0;a.flen=0;a.lev4=0;a.in2=0;a.lev1=0;a.k1=0;a.q11=0;a.ofs=0;a.dec_m=0;a.i=0;a.k=0;a.m2=0;a.vol=0;a.q2=0;a.slen=0;a.m1=0;a.q14=0;a.sw1=0;a.lev2=0;a.q3=0;a.reg00=0;a.vol_=0;a.dec=0;a.q32=0;a.sw4=0;for(var b=a.n=0;5E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.sw1=randint(8);a.sw2=randint(8);a.sw3=randint(8);a.sw4=randint(8);",
          frame_eqs_str: "a.flen=512;a.reg00=a.flen;a.slen=div(a.flen,2);a.dec_m=pow(.94,div(30,a.fps));a.n=0;for(var b=a.vol=0;b<a.slen;b++)a.vol+=div(pow(a.gmegabuf[Math.floor(a.n)],2),a.flen),a.n+=1;a.vol=div(sqrt(a.vol),2);a.vol_=a.vol_*a.dec_m+(1-a.dec_m)*a.vol;a.lev1=a.lev1*a.dec_m+(1-a.dec_m)*a.gmegabuf[1];a.lev2=a.lev2*a.dec_m+(1-a.dec_m)*a.gmegabuf[20];a.lev3=a.lev3*a.dec_m+(1-a.dec_m)*a.gmegabuf[50];a.lev4=a.lev4*a.dec_m+(1-a.dec_m)*a.gmegabuf[100];a.sw1+=div(0<a.lev1-a.gmegabuf[1]?1:0,a.fps);\na.sw2+=div(0<a.lev2-a.gmegabuf[20]?1:0,a.fps);a.sw3+=div(0<a.lev3-a.gmegabuf[50]?1:0,a.fps);a.sw4+=div(0<a.lev4-a.gmegabuf[100]?1:0,a.fps);a.dif=16*(1+Math.sin(div(a.sw3,4)))+2;a.ofs=8*Math.sin(div(a.sw2,3));a.n=0;a.k1=0*a.frame;for(b=0;b<a.slen;b++)a.m1=mod(a.n,a.slen),a.m2=mod(a.n+a.ofs,a.slen),a.k=mod(a.m1+a.dif,a.slen),a.i=mod(a.slen+a.m2-a.dif,a.slen),a.in1=1.2*div(a.gmegabuf[Math.floor(a.m1)]-a.gmegabuf[Math.floor(a.k)],pow(a.vol_+.03,.8)),a.in2=1.2*div(a.gmegabuf[Math.floor(a.m2)]-a.gmegabuf[Math.floor(a.i)],\npow(a.vol_+.03,.8)),a.dec=.00001<Math.abs(pow(a.gmegabuf[Math.floor(2E3+a.n)],2)+pow(a.gmegabuf[Math.floor(2E3+a.flen+a.n)],2)>a.in1*a.in1+a.in2*a.in2?1:0)?.8:.94,a.dec=pow(a.dec,div(30,a.fps)),a.gmegabuf[Math.floor(2E3+a.n)]=a.gmegabuf[Math.floor(2E3+a.n)]*a.dec+(1-a.dec)*a.in1,a.gmegabuf[Math.floor(2E3+a.flen+a.n)]=a.gmegabuf[Math.floor(2E3+a.flen+a.n)]*a.dec+(1-a.dec)*a.in2,a.n+=1;a.q1=div(a.bass+a.treb+a.mid,3);a.q2=div(a.bass_att+a.treb_att+a.mid_att,3);a.q3=a.vol_;a.q11=a.sw1;a.q12=a.sw2;a.q13=\na.sw3;a.q14=a.sw4;a.rot=0;a.zoom=.98;a.warp=.3;a.rot=0;a.q32=a.aspecty;a.monitor=a.dif;",
          pixel_eqs_str: "",
          pixel_eqs: "",
          warp: " shader_body { \n  vec4 tmpvar_1;\n  tmpvar_1.w = 1.0;\n  tmpvar_1.xyz = ((texture (sampler_main, uv).xyz * clamp (\n    (q1 - 0.8)\n  , 0.0, 1.0)) * 0.92);\n  ret = tmpvar_1.xyz;\n }",
          comp: " shader_body { \n  vec3 ret_1;\n  ret_1 = (texture (sampler_main, uv).xyz + ((texture (sampler_blur2, uv).xyz * scale2) + bias2));\n  ret_1 = (ret_1 + ((0.8 * \n    (hue_shader - 0.8)\n  ) * (1.0 - uv.y)));\n  vec4 tmpvar_2;\n  tmpvar_2.w = 1.0;\n  tmpvar_2.xyz = ret_1;\n  ret = tmpvar_2.xyz;\n }"
        }
      },
      9: function(a, e, t) {
        t(10);
        var n = t(3).Object;
        a.exports = function(a, e, t) {
          return n.defineProperty(a, e, t)
        }
      },
      92: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 5,
            gammaadj: 1.98,
            decay: .5,
            echo_zoom: .952,
            echo_alpha: .5,
            echo_orient: 3,
            wave_mode: 5,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: .474,
            wave_smoothing: .45,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: .8,
            wave_g: .49,
            ob_size: 0,
            ob_a: .3,
            ib_size: .26,
            mv_x: 64,
            mv_y: 48,
            mv_l: 1.85,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0,
            b1x: .8,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 1,
              sides: 7,
              additive: 1,
              num_inst: 1024,
              rad: .04896,
              tex_ang: 1.00531,
              tex_zoom: 1.53117,
              r: 0,
              g: 1,
              b: 1,
              a: 0,
              g2: 0,
              border_b: 0,
              border_a: 0
            },
            init_eqs_str: "a.max_age=0;a.n=0;a.x0=0;a.y0=0;a.z0=0;a.rad0=0;",
            frame_eqs_str: "a.max_age=a.reg00;a.n=12*a.instance;a.x0=a.gmegabuf[Math.floor(a.n)];a.y0=a.gmegabuf[Math.floor(a.n+1)];a.z0=a.gmegabuf[Math.floor(a.n+2)];.00001<Math.abs(-100>a.z0?1:0)?(a.rad=0,a.gmegabuf[Math.floor(a.n+8)]=a.max_age):(a.rad0=div(pow(1-div(a.gmegabuf[Math.floor(a.n+8)],a.max_age),.2),a.z0)*a.gmegabuf[Math.floor(a.n+7)]+.01,a.rad=.032*Math.abs(a.rad0),a.x=.5+div(a.x0,a.z0),a.y=.5+div(a.y0,a.z0));a.a=1;a.a2=.2;a.g=.8;a.g2=0;a.b=.2*(3<randint(10)?1:0)+.2*(0>a.z0?1:0);a.b2=0;\n"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 1,
              samples: 160,
              sep: 20,
              usedots: 1,
              additive: 1,
              scaling: 7.858,
              smoothing: .1,
              r: .2,
              g: .3,
              a: .6
            },
            init_eqs_str: "a.q32=0;",
            frame_eqs_str: "",
            point_eqs_str: "a.x=div(randint(100),100);a.y=.5-div(1-.7,a.q32)-.15*(div(randint(100),100)-.5);a.a=.15;a.r=0;a.b=1;a.g=0;"
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: 'a.max_age=0;a.ind2=0;a.n=0;a.free=0;a.high=0;a.index=0;a.tht=0;a.v00=0;a.yobf=0;a.dt=0;a.y0=0;a.q1=0;a.dec_med=0;a.q5=0;a.ran1_=0;a["new"]=0;a.push=0;a.new1=0;a.is_beat=0;a.q24=0;a.vol_alt=0;a.dec_slow=0;a.ran2=0;a.ind1=0;a.q10=0;a.v0=0;a.med=0;a.beat=0;a.vol=0;a.peak=0;a.dec_fast=0;a.q27=0;a.bass1=0;a.q3=0;a.t0=0;a.vol_=0;a.dec=0;a.m=0;a.ran1=0;a.q32=0;a.phi=0;a.air=0;a.max_age=4.5;a.reg00=a.max_age;for(var b=a.n=0;12288>b;b++)a.gmegabuf[Math.floor(a.n)]=a.max_age-1+randint(2),\na.n+=1;a.q9=2*(randint(25)-10);a.q3=div(randint(100),100);a.q4=div(randint(100),100);',
          frame_eqs_str: 'a.dec_fast=1-div(8.8,a.fps);a.dec_med=1-div(6,a.fps);a.dec_slow=1-div(1.6,a.fps);a.vol=div(a.bass+a.med+a.treb,3);a.vol_=a.vol_*a.dec_slow+(1-a.dec_slow)*a.vol;a.beat=a.vol;a.is_beat=above(a.beat,1+4*a.peak)*above(a.time,a.t0+.2);a.t0=.00001<Math.abs(a.is_beat)?a.time:a.t0;a.peak=.00001<Math.abs(a.is_beat)?a.beat:a.peak*a.dec_med;a.index=mod(a.index+a.is_beat,1024);a.ind1=a.ind1*a.dec_med+(1-a.dec_fast)*a.index;a.ind2=a.ind2*a.dec_med+(1-a.dec_fast)*a.ind1;a.q27=a.ind2;a.q24=\na.is_beat;a.ran1=.00001<Math.abs(a.is_beat)?div(randint(100),100)-.5:a.ran1;a.ran2=.00001<Math.abs(a.is_beat)?div(randint(100),50)+1:a.ran2;a.ran1_=a.dec_med*a.ran1_+(1-a.dec_med)*a.ran1;a.high=2.9<a.ran2?1:0;a.q5=a.ran1_;a.n=0;a.push=Math.max(0,a.vol-a.vol_alt)*a.vol_;a.air=.1*a.dt;a.dt=div(1,a.fps);a.v00=pow(a.push,.25)+.4;a.free=512;a["new"]=0;a.y0=-.68;a.yobf=a.y0+.1;for(var b=0;512>b;b++)a.megabuf[Math.floor(a.n)]=a.gmegabuf[Math.floor(a.n)],a.megabuf[Math.floor(a.n+1)]=a.gmegabuf[Math.floor(a.n+\n1)],a.megabuf[Math.floor(a.n+2)]=a.gmegabuf[Math.floor(a.n+2)],.00001<Math.abs(a.gmegabuf[Math.floor(a.n+8)]>a.max_age?1:0)?.00001<Math.abs(band(a.push>=10*a.dt*bnot(a.high)?1:0,200>a["new"]?1:0))?(--a.free,a["new"]+=1,a.tht=div(randint(100),500)*(1+1.5*a.high),a.phi=randint(12),a.v0=a.v00*(1+div(randint(10),40)),a.gmegabuf[Math.floor(a.n)]=1.7*a.ran1,a.gmegabuf[Math.floor(a.n+1)]=a.y0+2.2*a.high,a.gmegabuf[Math.floor(a.n+2)]=2,a.gmegabuf[Math.floor(a.n+3)]=a.v0*Math.sin(a.tht)*Math.cos(a.phi),a.gmegabuf[Math.floor(a.n+\n4)]=a.v0*Math.cos(4*a.tht)*(1-1.5*a.high),a.gmegabuf[Math.floor(a.n+5)]=a.v0*Math.sin(a.tht)*Math.sin(a.phi)*1.5*a.vol,a.gmegabuf[Math.floor(a.n+7)]=0,a.gmegabuf[Math.floor(a.n+8)]=div(randint(100),100)):0:(--a.free,a.gmegabuf[Math.floor(a.n)]+=a.gmegabuf[Math.floor(a.n+3)]*a.dt,a.gmegabuf[Math.floor(a.n+1)]+=a.gmegabuf[Math.floor(a.n+4)]*a.dt,a.gmegabuf[Math.floor(a.n+2)]+=a.gmegabuf[Math.floor(a.n+5)]*a.dt,a.gmegabuf[Math.floor(a.n+3)]*=1-a.air,a.gmegabuf[Math.floor(a.n+4)]*=1-a.air,a.gmegabuf[Math.floor(a.n+\n4)]-=.8*a.dt,a.gmegabuf[Math.floor(a.n+5)]*=1-a.air,a.gmegabuf[Math.floor(a.n+7)]=(a.gmegabuf[Math.floor(a.n+1)]>a.yobf?1:0)*Math.min(1,18*(a.gmegabuf[Math.floor(a.n+1)]-a.yobf)),.00001<Math.abs(band(a.gmegabuf[Math.floor(a.n+1)]<a.yobf?1:0,0>a.gmegabuf[Math.floor(a.n+4)]?1:0))?a.gmegabuf[8]=a.max_age:0,a.gmegabuf[Math.floor(a.n+8)]+=a.dt),a.n+=12;for(b=a.n=0;512>b;b++)a.m=6132+a.n,a.gmegabuf[Math.floor(a.m)]=div(a.gmegabuf[Math.floor(a.n)]+a.megabuf[Math.floor(a.n)],2),a.gmegabuf[Math.floor(a.m+\n1)]=div(a.gmegabuf[Math.floor(a.n+1)]+a.megabuf[Math.floor(a.n+1)],2),a.gmegabuf[Math.floor(a.m+2)]=div(a.gmegabuf[Math.floor(a.n+2)]+a.megabuf[Math.floor(a.n+2)],2),a.gmegabuf[Math.floor(a.m+7)]=a.gmegabuf[Math.floor(a.n+7)],a.gmegabuf[Math.floor(a.m+8)]=a.gmegabuf[Math.floor(a.n+8)],a.n+=12;a.dec=.00001<Math.abs(a.bass>a.bass1?1:0)?.5:.9;a.bass1=a.bass1*a.dec+a.bass*(1-a.dec);a.q1=Math.min(1,Math.max(0,a.bass1-1.5)*Math.abs(a.q3-.5)*3);a.q10=Math.max(a.vol_-.1,.1);a.vol_alt=a.vol;a.q32=a.aspecty;\na.new1=.00001<Math.abs(0<a["new"]?1:0)?a["new"]:a.new1;a.monitor=a.new1;',
          pixel_eqs_str: "a.dy=-.007*a.y;a.warp=0;a.rot=div(.025*Math.sin(a.q27+7*a.x+0*a.y)*.2,Math.abs(a.y-.7)+.1)*a.q10;a.zoom=1.003+.2*Math.max(0,a.y-.7);",
          warp: "vec2 ver;\nfloat xlat_mutablecloud;\nvec2 xlat_mutabledz;\nvec2 xlat_mutableuv1;\nvec2 xlat_mutableuv2;\nfloat xlat_mutablez;\n shader_body { \n  vec2 tmpvar_1;\n  tmpvar_1.y = 0.0;\n  tmpvar_1.x = texsize.z;\n  vec2 tmpvar_2;\n  tmpvar_2.x = 0.0;\n  tmpvar_2.y = texsize.w;\n  ver = (tmpvar_2 * 2.0);\n  vec3 ret_3;\n  xlat_mutabledz.x = (2.0 * dot (vec3((texture (sampler_main, \n    (uv + tmpvar_1)\n  ).z - texture (sampler_main, \n    (uv - tmpvar_1)\n  ).z)), vec3(0.32, 0.49, 0.29)));\n  xlat_mutabledz.y = (2.0 * dot (vec3((texture (sampler_main, \n    (uv + ver)\n  ).z - texture (sampler_main, \n    (uv - ver)\n  ).z)), vec3(0.32, 0.49, 0.29)));\n  vec2 tmpvar_4;\n  tmpvar_4.x = q3;\n  tmpvar_4.y = (0.4 + (q4 * 0.4));\n  xlat_mutableuv1 = (uv_orig - tmpvar_4);\n  vec4 tmpvar_5;\n  tmpvar_5 = texture (sampler_main, uv_orig);\n  xlat_mutablez = ((0.8 * (xlat_mutableuv1.y - 0.4)) - (mix (tmpvar_5.x, \n    ((texture (sampler_blur1, uv_orig).xyz * scale1) + bias1)\n  .x, 0.5) * 0.03));\n  vec2 tmpvar_6;\n  tmpvar_6.x = (xlat_mutableuv1.x * xlat_mutablez);\n  tmpvar_6.y = xlat_mutablez;\n  vec2 tmpvar_7;\n  tmpvar_7.x = 0.0;\n  tmpvar_7.y = (-(time) * 0.014);\n  xlat_mutableuv2 = (tmpvar_6 + tmpvar_7);\n  vec2 tmpvar_8;\n  tmpvar_8.x = 0.0;\n  tmpvar_8.y = (time * 0.004);\n  vec2 uvi_9;\n  uvi_9 = ((xlat_mutableuv2 * 1.5) + tmpvar_8);\n  float zv_10;\n  zv_10 = (0.002 * time);\n  xlat_mutablecloud = (1.0 - (1.5 * abs(\n    (texture (sampler_noise_hq, ((xlat_mutableuv2 + (0.07 * \n      abs((((\n        (dot (texture (sampler_noise_hq, uvi_9), vec4(0.32, 0.49, 0.29, 0.0)) + (dot (texture (sampler_noise_hq, (\n          (uvi_9 * 2.0)\n         + zv_10)), vec4(0.32, 0.49, 0.29, 0.0)) / 2.0))\n       + \n        (dot (texture (sampler_noise_hq, ((uvi_9 * 4.0) + zv_10)), vec4(0.32, 0.49, 0.29, 0.0)) / 4.0)\n      ) + (\n        dot (texture (sampler_noise_hq, ((uvi_9 * 8.0) + zv_10)), vec4(0.32, 0.49, 0.29, 0.0))\n       / -8.0)) - 1.0))\n    )) / 2.0)) - 0.5)\n  ))).x;\n  xlat_mutablecloud = (xlat_mutablecloud * clamp ((\n    (texture (sampler_noise_hq, (xlat_mutableuv2 * vec2(2.0, 0.5))).x + 0.5)\n   - \n    (3.0 * abs(xlat_mutableuv2.x))\n  ), 0.0, 1.0));\n  vec2 tmpvar_11;\n  tmpvar_11.x = 0.0;\n  tmpvar_11.y = ((-0.01 * time) * (0.125 * float(\n    int((8.0 * pow (xlat_mutablecloud, 4.0)))\n  )));\n  float tmpvar_12;\n  tmpvar_12 = (texture (sampler_noise_hq, (18.0 * (\n    (xlat_mutableuv2 + (0.05 * xlat_mutablecloud))\n   + tmpvar_11))) - 0.75).x;\n  xlat_mutablecloud = (xlat_mutablecloud * (1.0 + (\n    (0.2 * tmpvar_12)\n   * \n    (xlat_mutablecloud * xlat_mutablecloud)\n  )));\n  ret_3.x = ((0.3 * xlat_mutablecloud) + (0.7 * tmpvar_5.xyz)).x;\n  xlat_mutableuv1 = (uv - vec2(0.0, 0.71));\n  vec4 tmpvar_13;\n  tmpvar_13 = texture (sampler_blur1, uv);\n  float tmpvar_14;\n  tmpvar_14 = clamp (((12.0 * \n    (((10.0 * xlat_mutableuv1.y) + ((\n      (tmpvar_13.xyz * scale1)\n     + bias1).x / 2.0)) - 1.0)\n  ) + tmpvar_12), 0.0, 1.0);\n  xlat_mutableuv1 = (uv - 0.7);\n  ret_3.z = (((\n    ((((4.0 * tmpvar_14) * (1.0 - tmpvar_14)) * clamp ((tmpvar_5.x - 0.2), 0.0, 1.0)) + texture (sampler_main, (uv + (xlat_mutabledz * 0.003))).z)\n   - \n    (0.03 * sqrt(dot (xlat_mutabledz, xlat_mutabledz)))\n  ) - (\n    pow (((tmpvar_13.xyz * scale1) + bias1).z, 8.0)\n   * 0.2)) - 0.01);\n  ret_3.y = (texture (sampler_main, mix (uv, uv_orig, vec2(0.5, 0.5))).y * (0.85 - (0.2 * \n    ((tmpvar_13.xyz * scale1) + bias1)\n  .y)));\n  ret_3.x = (ret_3.x + ((texture (sampler_noise_lq, \n    (2.0 * xlat_mutableuv2)\n  ) * 0.08) * clamp (\n    (1.0 - (3.0 * ret_3.x))\n  , 0.0, 1.0)).x);\n  vec4 tmpvar_15;\n  tmpvar_15.w = 1.0;\n  tmpvar_15.xyz = ret_3;\n  ret = tmpvar_15.xyz;\n }",
          comp: "float dunk;\nfloat xlat_mutablenoise;\nvec2 xlat_mutablers;\nvec2 xlat_mutablers0;\nfloat xlat_mutablesmask;\nfloat xlat_mutablesmoke;\nvec2 xlat_mutableuv1;\nfloat xlat_mutablez;\n shader_body { \n  vec2 tmpvar_1;\n  tmpvar_1.y = 0.0;\n  tmpvar_1.x = texsize.z;\n  dunk = ((rand_preset.x * 0.3) + 0.1);\n  vec2 uv_2;\n  vec3 ret_3;\n  uv_2 = (uv + (texsize.zw / 2.0));\n  xlat_mutableuv1 = (uv_2 - vec2(0.0, 0.7));\n  xlat_mutablesmask = (((10.0 * xlat_mutableuv1.y) + (\n    ((texture (sampler_blur1, uv_2).xyz * scale1) + bias1)\n  .x / 2.0)) - 1.0);\n  float tmpvar_4;\n  tmpvar_4 = clamp (((2.0 * xlat_mutablesmask) + 0.3), 0.0, 1.0);\n  xlat_mutablenoise = ((3.0 * (1.0 - tmpvar_4)) * texture (sampler_noise_lq, ((xlat_mutableuv1 * 1.5) + (rand_frame * 0.2).xy)).x);\n  float tmpvar_5;\n  tmpvar_5 = clamp (((12.0 * xlat_mutablesmask) + (xlat_mutablenoise / 2.0)), 0.0, 1.0);\n  xlat_mutablez = ((0.35 / xlat_mutableuv1.y) + (xlat_mutablenoise / 2.0));\n  xlat_mutablers0.x = (xlat_mutableuv1.x * xlat_mutablez);\n  xlat_mutablers0.y = xlat_mutablez;\n  vec2 tmpvar_6;\n  tmpvar_6.x = (xlat_mutablers0.x + (time / 4.0));\n  tmpvar_6.y = (xlat_mutablez + (time * 0.21));\n  xlat_mutablers = (tmpvar_6 * tmpvar_5);\n  float t_7;\n  t_7 = ((texture (sampler_main, uv_2).x - dunk) * (1.0 - (tmpvar_5 * \n    pow (uv_2.y, 4.0)\n  )));\n  float tmpvar_8;\n  tmpvar_8 = clamp (((1.2 * t_7) - 0.2), 0.0, 1.0);\n  t_7 = tmpvar_8;\n  vec3 tmpvar_9;\n  tmpvar_9.x = tmpvar_8;\n  tmpvar_9.y = (tmpvar_8 * tmpvar_8);\n  tmpvar_9.z = pow (tmpvar_8, 8.0);\n  vec3 tmpvar_10;\n  tmpvar_10 = clamp ((tmpvar_9 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);\n  float t_11;\n  t_11 = ((texture (sampler_blur2, (uv_2 + 0.03)).xyz * scale2) + bias2).x;\n  float tmpvar_12;\n  tmpvar_12 = clamp (((1.2 * t_11) - 0.2), 0.0, 1.0);\n  t_11 = tmpvar_12;\n  vec3 tmpvar_13;\n  tmpvar_13.x = tmpvar_12;\n  tmpvar_13.y = (tmpvar_12 * tmpvar_12);\n  tmpvar_13.z = pow (tmpvar_12, 8.0);\n  vec3 tmpvar_14;\n  tmpvar_14 = clamp ((tmpvar_13 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);\n  ret_3 = ((tmpvar_10 * (tmpvar_10 * \n    (3.0 - (2.0 * tmpvar_10))\n  )) + ((\n    (((1.0 - texture (sampler_main, uv_2).x) * (1.0 - tmpvar_5)) * abs((texture (sampler_main, (uv_2 - tmpvar_1)).x - texture (sampler_main, (uv_2 + tmpvar_1)).x)))\n   * \n    (tmpvar_14 * (tmpvar_14 * (3.0 - (2.0 * tmpvar_14))))\n  ) * q9));\n  xlat_mutablesmoke = ((texture (sampler_blur1, uv_2).xyz * scale1) + bias1).z;\n  vec2 tmpvar_15;\n  tmpvar_15.x = uv_2.x;\n  tmpvar_15.y = ((0.85 - xlat_mutableuv1.y) + ((\n    ((texture (sampler_noise_hq, xlat_mutablers) + texture (sampler_noise_hq, ((xlat_mutablers / 4.0) - (time / 8.0)))) - 1.0)\n  .x * 0.2) * q10));\n  float t_16;\n  t_16 = ((texture (sampler_main, tmpvar_15).x + texture (sampler_main, tmpvar_15).y) - dunk);\n  float tmpvar_17;\n  tmpvar_17 = clamp (((1.2 * t_16) - 0.2), 0.0, 1.0);\n  t_16 = tmpvar_17;\n  vec3 tmpvar_18;\n  tmpvar_18.x = tmpvar_17;\n  tmpvar_18.y = (tmpvar_17 * tmpvar_17);\n  tmpvar_18.z = pow (tmpvar_17, 8.0);\n  vec3 tmpvar_19;\n  tmpvar_19 = clamp ((tmpvar_18 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);\n  ret_3 = (ret_3 + ((\n    (tmpvar_19 * (tmpvar_19 * (3.0 - (2.0 * tmpvar_19))))\n   * tmpvar_5) * 0.85));\n  float tmpvar_20;\n  tmpvar_20 = ((3.6 * tmpvar_4) * (1.0 - tmpvar_4));\n  ret_3 = (ret_3 * (clamp (\n    (1.0 - (xlat_mutablesmoke * (1.0 - tmpvar_20)))\n  , 0.0, 1.0) * clamp (\n    (1.0 - (tmpvar_20 * float((rand_preset.x > 0.5))))\n  , 0.0, 1.0)));\n  vec3 tmpvar_21;\n  tmpvar_21.z = 0.0;\n  tmpvar_21.xy = (((texture (sampler_blur3, uv_2).xyz * scale3) + bias3).xy * vec2(3.0, 5.0));\n  ret_3 = (ret_3 + ((xlat_mutablesmoke * \n    dot (tmpvar_21, vec3(0.32, 0.49, 0.29))\n  ) * vec3(1.0, 0.84, 0.62)));\n  float tmpvar_22;\n  tmpvar_22 = clamp (((1.2 * \n    clamp (texture (sampler_main, uv_2).y, 0.0, 1.0)\n  ) - 0.2), 0.0, 1.0);\n  vec3 tmpvar_23;\n  tmpvar_23.x = tmpvar_22;\n  tmpvar_23.y = (tmpvar_22 * tmpvar_22);\n  tmpvar_23.z = pow (tmpvar_22, 8.0);\n  vec3 tmpvar_24;\n  tmpvar_24 = clamp ((tmpvar_23 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);\n  ret_3 = (ret_3 + (tmpvar_24 * (tmpvar_24 * \n    (3.0 - (2.0 * tmpvar_24))\n  )));\n  float tmpvar_25;\n  tmpvar_25 = clamp (0.52, 0.0, 1.0);\n  vec3 tmpvar_26;\n  tmpvar_26.x = tmpvar_25;\n  tmpvar_26.y = (tmpvar_25 * tmpvar_25);\n  tmpvar_26.z = pow (tmpvar_25, 8.0);\n  vec3 tmpvar_27;\n  tmpvar_27 = clamp ((tmpvar_26 / vec3(0.8, 0.8, 0.8)), 0.0, 1.0);\n  vec3 tmpvar_28;\n  tmpvar_28 = mix (clamp (ret_3, 0.0, 1.0), (tmpvar_27 * (tmpvar_27 * \n    (3.0 - (2.0 * tmpvar_27))\n  )), vec3((pow (\n    ((1.0 - uv_2.y) - ((uv_2.x - 0.5) * (q3 - 0.5)))\n  , 4.0) * q1)));\n  ret_3 = tmpvar_28;\n  vec4 tmpvar_29;\n  tmpvar_29.w = 1.0;\n  tmpvar_29.xyz = tmpvar_28;\n  ret = tmpvar_29.xyz;\n }"
        }
      },
      98: function(a, e) {
        a.exports = {
          baseVals: {
            rating: 3,
            gammaadj: 1.98,
            decay: .5,
            echo_zoom: 1,
            echo_alpha: .5,
            echo_orient: 3,
            wave_mode: 7,
            additivewave: 1,
            wave_thick: 1,
            modwavealphabyvolume: 1,
            wave_brighten: 0,
            wrap: 0,
            darken: 1,
            wave_a: .001,
            wave_scale: .958,
            wave_smoothing: .45,
            modwavealphastart: 0,
            modwavealphaend: 1.32,
            warpanimspeed: 1.459,
            warpscale: 2.007,
            zoom: .9999,
            warp: .01,
            sx: .9999,
            wave_r: 0,
            wave_g: 0,
            wave_b: 0,
            ob_size: .05,
            ob_g: .1,
            ob_b: 1,
            ob_a: 1,
            ib_size: 0,
            ib_r: 0,
            ib_g: 0,
            ib_b: 0,
            mv_x: 25.6,
            mv_y: 9.6,
            mv_l: 0,
            mv_r: .5,
            mv_g: .5,
            mv_b: .5,
            mv_a: 0,
            b1ed: 0
          },
          shapes: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          waves: [{
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }, {
            baseVals: {
              enabled: 0
            }
          }],
          init_eqs_str: "a.look=0;a.n=0;a.reg26=0;a.uvx0=0;a.reg34=0;a.reg28=0;a.reg23=0;a.q25=0;a.angchg=0;a.reg20=0;a.reg15=0;a.reg10=0;a.q12=0;a.v3=0;a.q22=0;a.q21=0;a.diry=0;a.q13=0;a.q6=0;a.posx=0;a.fps_=0;a.reg25=0;a.uvx=0;a.q1=0;a.travel=0;a.posz=0;a.q5=0;a.dirz=0;a.dec_s=0;a.reg16=0;a.slow=0;a.reg36=0;a.reg22=0;a.uvy=0;a.rotz=0;a.ly=0;a.dist_=0;a.q23=0;a.q24=0;a.reg24=0;a.cran0=0;a.ran2=0;a.q11=0;a.q10=0;a.reg14=0;a.posy=0;a.reg31=0;a.dirx=0;a.q4=0;a.start=0;a.reg12=0;a.reg13=0;a.c2=0;a.reg37=\n0;a.s3=0;a.yslope=0;a.lampy=0;a.q16=0;a.xslope=0;a.q26=0;a.reg38=0;a.reg35=0;a.reg11=0;a.tx=0;a.avg=0;a.uvz=0;a.c3=0;a.uvy0=0;a.reg27=0;a.q19=0;a.beat=0;a.reg32=0;a.lx=0;a.reg21=0;a.uvz0=0;a.len=0;a.reg18=0;a.reg30=0;a.q2=0;a.q27=0;a.slen=0;a.q14=0;a.dist=0;a.reg17=0;a.v1=0;a.speed=0;a.s1=0;a.t0=0;a.s2=0;a.ran1=0;a.reg33=0;a.q7=0;a.ds=0;a.q28=0;a.lampx=0;a.ty=0;a.c1=0;a.v2=0;a.q20=0;a.q8=0;a.avg=.01;a.q7=.25;a.q8=randint(2)-1;a.q16=1+randint(2);a.q18=randint(.8)+.1;a.q30=1;a.q31=128;a.start=1;a.travel=\n0;a.rotz=0;a.look=0;a.slow=0;a.t0=a.time+3;a.lampx=.5;a.lampy=.5;a.cran0=randint(1);for(var b=a.n=0;1E4>b;b++)a.gmegabuf[Math.floor(a.n)]=0,a.n+=1;for(b=a.n=0;1E4>b;b++)a.megabuf[Math.floor(a.n)]=0,a.n+=1;a.trelx=0;a.trely=0;a.trelz=0;a.reg20=1;a.reg21=0;a.reg22=0;a.reg23=0;a.reg24=1;a.reg25=0;a.reg26=0;a.reg27=0;a.reg28=1;b=0;do{b+=1;var c;a.ran1=div(randint(800),100);a.ran2=div(randint(800),100);a.ran3=div(randint(800),100);a.posx=randint(5)-2;a.posy=randint(5)-2;a.posz=randint(5)-2;a.c1=Math.cos(a.ran1);\na.c2=Math.cos(a.ran2);a.c3=Math.cos(a.ran3);a.s1=Math.sin(a.ran1);a.s2=Math.sin(a.ran2);a.s3=Math.sin(a.ran3);a.reg20=a.c2*a.c1;a.reg21=a.c2*a.s1;a.reg22=-a.s2;a.reg23=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg24=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg25=a.s3*a.c2;a.reg26=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg27=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg28=a.c3*a.c2;a.dist=.001;var d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;a.uvx=8*(div(a.uvx,\n8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?-2-a.uvz:a.uvz,a.slen=\na.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.05;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<Math.abs(c)&&1048576>\nd);d=.06>a.dist?1:0}while(.00001<Math.abs(d)&&1048576>b);",
          frame_eqs_str: "a.fps_=0*a.fps_+1*(.00001<Math.abs(25>=a.fps?1:0)?a.fps:25+.5*(a.fps-25));a.dec_s=1-div(.06*30,a.fps_);a.beat=a.time>a.t0+3?1:0;a.t0=.00001<Math.abs(a.beat)?a.time:a.t0;a.speed=div(Math.min(.2,a.dist_-.02)*(1+2*a.avg)*(1-0*a.slow)*.7,a.q7);a.ds=a.ds*a.dec_s+div((1-a.dec_s)*a.speed*.25,a.fps_);a.rotz=.00001<Math.abs(.00001>Math.abs(a.rotz-0)?1:0)?a.beat*(randint(100)<20*a.travel?1:0)*(div(randint(10),10)-.3):bnot(a.beat*(30>randint(100)?1:0))*a.rotz;a.slow=.00001<Math.abs(bnot(a.slow))?\na.beat*(6>randint(1E3*a.avg)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.look=.00001<Math.abs(bnot(a.look))?a.beat*(12>randint(1E3*a.speed)?1:0):bnot(a.beat*(50>randint(100)?1:0));a.lx=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.lx;a.ly=.00001<Math.abs(a.beat)?div(randint(150),200)+.15:a.ly;a.lampx=a.lampx*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.lx:.5);a.lampy=a.lampy*a.dec_s+(1-a.dec_s)*(.00001<Math.abs(a.look)?a.ly:.5);a.q1=a.lampx;a.q2=a.lampy;a.dirx=a.reg26;a.diry=a.reg27;a.dirz=\na.reg28;a.posx+=a.ds*a.dirx;a.posy+=a.ds*a.diry;a.posz+=a.ds*a.dirz;a.q4=a.posx;a.q5=a.posy;a.q6=a.posz;a.angchg=(.2-a.dist_)*(.2>a.dist_?1:0)*2;a.travel=.00001<Math.abs(0<a.angchg?1:0)?0:a.travel+a.ds;a.v1=a.v1*a.dec_s+(1-a.dec_s)*a.rotz*a.ds;a.v2=a.v2*a.dec_s+div((1-a.dec_s)*a.angchg*a.xslope,a.fps_);a.v3=a.v3*a.dec_s+(1-a.dec_s)*(div(a.angchg*a.yslope,a.fps_)+2*a.v1*Math.sin(.1*a.time));a.reg30=a.reg20;a.reg31=a.reg21;a.reg32=a.reg22;a.reg33=a.reg23;a.reg34=a.reg24;a.reg35=a.reg25;a.reg36=a.reg26;\na.reg37=a.reg27;a.reg38=a.reg28;a.n=0;for(var b=a.avg=0;5>b;b++){a.n+=1;a.ran1=div(randint(100),100);a.ran2=div(randint(100),200)-.25;a.tx=Math.cos(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.ty=Math.sin(1.57*a.n+a.ran2)*(4>=a.n?1:0)*a.ran1;a.c1=Math.cos(a.v1);a.c2=Math.cos(a.v2+a.ty);a.c3=Math.cos(a.v3+a.tx);a.s1=Math.sin(a.v1);a.s2=Math.sin(a.v2+a.ty);a.s3=Math.sin(a.v3+a.tx);a.reg10=a.c2*a.c1;a.reg11=a.c2*a.s1;a.reg12=-a.s2;a.reg13=a.s3*a.s2*a.c1-a.c3*a.s1;a.reg14=a.s3*a.s2*a.s1+a.c3*a.c1;a.reg15=a.s3*\na.c2;a.reg16=a.c3*a.s2*a.c1+a.s3*a.s1;a.reg17=a.c3*a.s2*a.s1-a.s3*a.c1;a.reg18=a.c3*a.c2;a.reg20=a.reg30;a.reg21=a.reg31;a.reg22=a.reg32;a.reg23=a.reg33;a.reg24=a.reg34;a.reg25=a.reg35;a.reg26=a.reg36;a.reg27=a.reg37;a.reg28=a.reg38;a.q20=a.reg10*a.reg20+a.reg11*a.reg23+a.reg12*a.reg26;a.q21=a.reg10*a.reg21+a.reg11*a.reg24+a.reg12*a.reg27;a.q22=a.reg10*a.reg22+a.reg11*a.reg25+a.reg12*a.reg28;a.q23=a.reg13*a.reg20+a.reg14*a.reg23+a.reg15*a.reg26;a.q24=a.reg13*a.reg21+a.reg14*a.reg24+a.reg15*a.reg27;\na.q25=a.reg13*a.reg22+a.reg14*a.reg25+a.reg15*a.reg28;a.q26=a.reg16*a.reg20+a.reg17*a.reg23+a.reg18*a.reg26;a.q27=a.reg16*a.reg21+a.reg17*a.reg24+a.reg18*a.reg27;a.q28=a.reg16*a.reg22+a.reg17*a.reg25+a.reg18*a.reg28;a.reg20=a.q20;a.reg21=a.q21;a.reg22=a.q22;a.reg23=a.q23;a.reg24=a.q24;a.reg25=a.q25;a.reg26=a.q26;a.reg27=a.q27;a.reg28=a.q28;a.dist=.002;var c,d=0;do{d+=1;a.uvx=div(a.reg26*a.dist,a.q7);a.uvy=div(a.reg27*a.dist,a.q7);a.uvz=div(a.reg28*a.dist,a.q7);a.uvx+=a.posx;a.uvy+=a.posy;a.uvz+=a.posz;\na.uvx=8*(div(a.uvx,8)+30.5-Math.floor(div(a.uvx,8)+30.5)-.5);a.uvy=8*(div(a.uvy,8)+30.5-Math.floor(div(a.uvy,8)+30.5)-.5);a.uvz=8*(div(a.uvz,8)+30.5-Math.floor(div(a.uvz,8)+30.5)-.5);a.uvx0=a.uvx+a.q8;a.uvy0=a.uvy+a.q8;a.uvz0=a.uvz+a.q8;for(c=0;8>c;c++)a.uvx=.00001<Math.abs(1<a.uvx?1:0)?2-a.uvx:.00001<Math.abs(-1>a.uvx?1:0)?-2-a.uvx:a.uvx,a.uvy=.00001<Math.abs(1<a.uvy?1:0)?2-a.uvy:.00001<Math.abs(-1>a.uvy?1:0)?-2-a.uvy:a.uvy,a.uvz=.00001<Math.abs(1<a.uvz?1:0)?2-a.uvz:.00001<Math.abs(-1>a.uvz?1:0)?\n-2-a.uvz:a.uvz,a.slen=a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz,a.uvx=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvx:.00001<Math.abs(1>a.slen?1:0)?div(a.uvx,a.slen):a.uvx)+a.uvx0,a.uvy=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvy:.00001<Math.abs(1>a.slen?1:0)?div(a.uvy,a.slen):a.uvy)+a.uvy0,a.uvz=2.6*(.00001<Math.abs(.25>a.slen?1:0)?4*a.uvz:.00001<Math.abs(1>a.slen?1:0)?div(a.uvz,a.slen):a.uvz)+a.uvz0;a.len=sqrt(a.uvx*a.uvx+a.uvy*a.uvy+a.uvz*a.uvz);a.dist*=1.1;c=(.6>a.dist?1:0)*(30<a.len?1:0)}while(.00001<\nMath.abs(c)&&1048576>d);a.megabuf[Math.floor(a.n)]=a.megabuf[Math.floor(a.n)]*a.dec_s+(1-a.dec_s)*a.dist;a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5))}a.n=0;for(b=a.avg=0;5>b;b++)a.n+=1,a.avg+=Math.abs(div(a.megabuf[Math.floor(a.n)],5));a.xslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[1]-a.megabuf[3]),-3),3);a.yslope=Math.min(Math.max(div(2,a.avg)*(a.megabuf[4]-a.megabuf[2]),-3),3);a.monitor=a.avg;a.dist_=a.dist_*a.dec_s+(1-a.dec_s)*a.dist;a.q10=a.ds*a.q7;a.q14=Math.abs(a.ds)+2*(Math.abs(a.v1)+\nMath.abs(a.v2)+Math.abs(a.v3))+div(1,255)+.05*a.start;a.q19=.6+.4*Math.sin(.02*a.time+6*a.cran0);a.start*=.9;a.q11=a.v1;a.q12=a.v2;a.q13=a.v3;a.monitor=a.q16;",
          pixel_eqs_str: "a.warp=0;a.zoom=1;a.dx=div(-a.q12,a.q16)*(1+0*pow(a.x-.5,2));a.dy=div(a.q13,a.q16)*(1+0*pow(a.y-.5,2));a.rot=a.q11;",
          warp: "float sustain;\nfloat xlat_mutabledist;\nfloat xlat_mutablestruc;\nvec2 xlat_mutableuv1;\nvec3 xlat_mutableuv2;\n shader_body { \n  mat3 tmpvar_1;\n  tmpvar_1[uint(0)].x = q20;\n  tmpvar_1[uint(0)].y = q23;\n  tmpvar_1[uint(0)].z = q26;\n  tmpvar_1[1u].x = q21;\n  tmpvar_1[1u].y = q24;\n  tmpvar_1[1u].z = q27;\n  tmpvar_1[2u].x = q22;\n  tmpvar_1[2u].y = q25;\n  tmpvar_1[2u].z = q28;\n  vec3 tmpvar_2;\n  tmpvar_2.x = q4;\n  tmpvar_2.y = q5;\n  tmpvar_2.z = q6;\n  sustain = (0.98 - q14);\n  vec2 uv_3;\n  vec3 ret_4;\n  vec2 tmpvar_5;\n  tmpvar_5 = (uv - 0.5);\n  xlat_mutableuv1 = ((tmpvar_5 * aspect.xy) * q16);\n  vec4 tmpvar_6;\n  tmpvar_6 = texture (sampler_pc_main, uv);\n  uv_3 = ((tmpvar_5 * (1.0 - \n    (q10 / (1.0 - ((tmpvar_6.z + \n      (0.003921569 * tmpvar_6.y)\n    ) + (q10 * 0.7))))\n  )) + 0.5);\n  vec4 tmpvar_7;\n  tmpvar_7 = fract((8.0 * texture (sampler_noise_lq, (uv_3 + rand_frame.yz))));\n  xlat_mutabledist = tmpvar_7.x;\n  if ((tmpvar_7.y > 0.2)) {\n    vec3 tmpvar_8;\n    tmpvar_8 = (tmpvar_7.xyz - vec3(0.4, 0.5, 0.5));\n    vec2 uvi_9;\n    uvi_9 = ((tmpvar_8.zy * 0.003) + uv_3);\n    vec2 pix_10;\n    vec4 nb2_11;\n    vec4 nb_12;\n    vec2 x_13;\n    x_13 = (uvi_9 - 0.5);\n    pix_10 = (texsize.zw * (1.0 + (\n      sqrt(dot (x_13, x_13))\n     * 8.0)));\n    float tmpvar_14;\n    tmpvar_14 = (q10 * 0.7);\n    vec4 tmpvar_15;\n    tmpvar_15 = texture (sampler_pc_main, (uvi_9 - pix_10));\n    nb_12.x = (1.0 - ((tmpvar_15.z + \n      (0.003921569 * tmpvar_15.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_16;\n    tmpvar_16 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(1.0, -1.0))));\n    nb_12.y = (1.0 - ((tmpvar_16.z + \n      (0.003921569 * tmpvar_16.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_17;\n    tmpvar_17 = texture (sampler_pc_main, (uvi_9 + pix_10));\n    nb_12.z = (1.0 - ((tmpvar_17.z + \n      (0.003921569 * tmpvar_17.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_18;\n    tmpvar_18 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(-1.0, 1.0))));\n    nb_12.w = (1.0 - ((tmpvar_18.z + \n      (0.003921569 * tmpvar_18.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_19;\n    tmpvar_19 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(0.0, -1.0))));\n    nb2_11.x = (1.0 - ((tmpvar_19.z + \n      (0.003921569 * tmpvar_19.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_20;\n    tmpvar_20 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(1.0, 0.0))));\n    nb2_11.y = (1.0 - ((tmpvar_20.z + \n      (0.003921569 * tmpvar_20.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_21;\n    tmpvar_21 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(0.0, 1.0))));\n    nb2_11.z = (1.0 - ((tmpvar_21.z + \n      (0.003921569 * tmpvar_21.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_22;\n    tmpvar_22 = texture (sampler_pc_main, (uvi_9 + (pix_10 * vec2(-1.0, 0.0))));\n    nb2_11.w = (1.0 - ((tmpvar_22.z + \n      (0.003921569 * tmpvar_22.y)\n    ) + tmpvar_14));\n    vec4 tmpvar_23;\n    tmpvar_23 = min (nb_12, nb2_11);\n    nb_12.zw = tmpvar_23.zw;\n    nb_12.xy = min (tmpvar_23.xy, tmpvar_23.zw);\n    xlat_mutabledist = (min (nb_12.x, nb_12.y) + ((0.008 * tmpvar_8.x) * abs(tmpvar_8.y)));\n  };\n  vec4 tmpvar_24;\n  tmpvar_24 = texture (sampler_pc_main, uv_3);\n  float tmpvar_25;\n  tmpvar_25 = min (xlat_mutabledist, (1.0 - (\n    (tmpvar_24.z + (0.003921569 * tmpvar_24.y))\n   + \n    (q10 * 0.7)\n  )));\n  xlat_mutabledist = tmpvar_25;\n  float tmpvar_26;\n  tmpvar_26 = (tmpvar_25 + pow (tmpvar_25, 3.0));\n  vec3 tmpvar_27;\n  tmpvar_27.xy = (xlat_mutableuv1 * tmpvar_26);\n  tmpvar_27.z = tmpvar_26;\n  xlat_mutableuv2 = (((tmpvar_27 / q7) * tmpvar_1) + tmpvar_2);\n  xlat_mutableuv2 = ((fract(\n    ((xlat_mutableuv2 / 8.0) + 0.5)\n  ) - 0.5) * 8.0);\n  float li_28;\n  vec3 zz0_29;\n  vec3 zz_30;\n  zz0_29 = (xlat_mutableuv2 + q8);\n  li_28 = 0.0;\n  zz_30 = ((2.0 * clamp (xlat_mutableuv2, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - xlat_mutableuv2);\n  float tmpvar_31;\n  tmpvar_31 = dot (zz_30, zz_30);\n  if ((tmpvar_31 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_31 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_31);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_32;\n  tmpvar_32 = dot (zz_30, zz_30);\n  if ((tmpvar_32 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_32 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_32);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_33;\n  tmpvar_33 = dot (zz_30, zz_30);\n  if ((tmpvar_33 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_33 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_33);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_34;\n  tmpvar_34 = dot (zz_30, zz_30);\n  if ((tmpvar_34 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_34 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_34);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_35;\n  tmpvar_35 = dot (zz_30, zz_30);\n  if ((tmpvar_35 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_35 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_35);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_36;\n  tmpvar_36 = dot (zz_30, zz_30);\n  if ((tmpvar_36 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_36 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_36);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_37;\n  tmpvar_37 = dot (zz_30, zz_30);\n  if ((tmpvar_37 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_37 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_37);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  zz_30 = ((2.0 * clamp (zz_30, vec3(-1.0, -1.0, -1.0), vec3(1.0, 1.0, 1.0))) - zz_30);\n  float tmpvar_38;\n  tmpvar_38 = dot (zz_30, zz_30);\n  if ((tmpvar_38 <= 0.25)) {\n    zz_30 = (zz_30 * 4.0);\n    li_28 = 24.0;\n  } else {\n    if ((tmpvar_38 <= 1.0)) {\n      zz_30 = (zz_30 / tmpvar_38);\n    };\n  };\n  zz_30 = ((2.6 * zz_30) + zz0_29);\n  vec4 tmpvar_39;\n  tmpvar_39.xyz = zz_30;\n  tmpvar_39.w = li_28;\n  float tmpvar_40;\n  tmpvar_40 = sqrt(dot (zz_30, zz_30));\n  xlat_mutablestruc = (sqrt(dot (tmpvar_39.xyw, tmpvar_39.xyw)) / 24.0);\n  vec4 tmpvar_41;\n  tmpvar_41 = texture (sampler_pc_main, uv_3);\n  float tmpvar_42;\n  float tmpvar_43;\n  tmpvar_43 = (q10 * 0.7);\n  tmpvar_42 = ((log(\n    (1.0 + (tmpvar_40 / 24.0))\n  ) * 0.02) * (1.0 - (1.0 - \n    ((tmpvar_41.z + (0.003921569 * tmpvar_41.y)) + tmpvar_43)\n  )));\n  float tmpvar_44;\n  vec4 tmpvar_45;\n  tmpvar_45 = texture (sampler_pc_main, uv_3);\n  tmpvar_44 = (1.0 - ((tmpvar_45.z + \n    (0.003921569 * tmpvar_45.y)\n  ) + tmpvar_43));\n  if ((((tmpvar_25 <= tmpvar_44) && (tmpvar_40 < 24.0)) && (tmpvar_25 > 0.005))) {\n    ret_4.x = (((1.0 - sustain) * xlat_mutablestruc) + (sustain * mix (texture (sampler_main, uv_3).xyz, \n      ((texture (sampler_blur1, uv_3).xyz * scale1) + bias1)\n    , vec3(\n      (q14 * 4.0)\n    )).x));\n    float x_46;\n    x_46 = ((1.0 - tmpvar_25) * 255.0);\n    float ip_47;\n    ip_47 = float(int(x_46));\n    vec2 tmpvar_48;\n    tmpvar_48.x = (x_46 - ip_47);\n    tmpvar_48.y = (ip_47 / 255.0);\n    ret_4.yz = tmpvar_48;\n  } else {\n    vec3 tmpvar_49;\n    tmpvar_49.y = 0.0;\n    tmpvar_49.x = sustain;\n    tmpvar_49.z = (1.0 - tmpvar_42);\n    vec3 tmpvar_50;\n    tmpvar_50.xy = vec2(0.003921569, 0.0);\n    tmpvar_50.z = (q14 / 6.0);\n    ret_4 = ((texture (sampler_fc_main, uv_3).xyz * tmpvar_49) - tmpvar_50);\n  };\n  vec4 tmpvar_51;\n  tmpvar_51.w = 1.0;\n  tmpvar_51.xyz = ret_4;\n  ret = tmpvar_51.xyz;\n }",
          comp: " shader_body { \n  vec3 tmpvar_1;\n  tmpvar_1.x = q4;\n  tmpvar_1.y = q5;\n  tmpvar_1.z = q6;\n  mat3 tmpvar_2;\n  tmpvar_2[uint(0)].x = q20;\n  tmpvar_2[uint(0)].y = q23;\n  tmpvar_2[uint(0)].z = q26;\n  tmpvar_2[1u].x = q21;\n  tmpvar_2[1u].y = q24;\n  tmpvar_2[1u].z = q27;\n  tmpvar_2[2u].x = q22;\n  tmpvar_2[2u].y = q25;\n  tmpvar_2[2u].z = q28;\n  vec2 tmpvar_3;\n  tmpvar_3.x = q1;\n  tmpvar_3.y = q2;\n  vec2 uv_4;\n  vec3 ret_5;\n  uv_4 = (((uv - 0.5) * 0.9) + 0.5);\n  vec3 tmpvar_6;\n  tmpvar_6.xy = ((uv_4 - 0.5) * min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - \n    ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2)\n  .z)));\n  tmpvar_6.z = min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - (\n    (texture (sampler_blur2, uv_4).xyz * scale2)\n   + bias2).z));\n  float tmpvar_7;\n  tmpvar_7 = clamp ((abs(\n    ((1.0 - ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2).z) - clamp ((1.0 - (\n      (texture (sampler_blur2, tmpvar_3).xyz * scale2)\n     + bias2).z), 0.1, 0.4))\n  ) + 0.2), 0.0, 1.0);\n  float tmpvar_8;\n  tmpvar_8 = clamp (((1.0 - \n    exp(-(((texture (sampler_blur1, uv_4).xyz * scale1) + bias1).x))\n  ) - 0.2), 0.0, 1.0);\n  ret_5 = ((mix (texture (sampler_main, uv_4).xyz, \n    ((texture (sampler_blur1, uv_4).xyz * scale1) + bias1)\n  , vec3(tmpvar_7)).x * (0.2 + \n    ((1.0 - tmpvar_7) * (1.0 - min ((1.0 - texture (sampler_main, uv_4).z), (1.0 - \n      ((texture (sampler_blur2, uv_4).xyz * scale2) + bias2)\n    .z))))\n  )) * (1.0 + (0.5 * \n    sin((((tmpvar_6 / q7) * tmpvar_2) + tmpvar_1))\n  )));\n  vec3 tmpvar_9;\n  tmpvar_9.xy = vec2(0.0, 1.0);\n  tmpvar_9.z = (tmpvar_8 * 3.0);\n  ret_5 = (mix (ret_5, tmpvar_9, vec3(tmpvar_8)) + ((\n    pow ((1.0 - mix (texture (sampler_main, uv_4).xyz, (\n      (texture (sampler_blur1, uv_4).xyz * scale1)\n     + bias1), vec3(0.8, 0.8, 0.8)).z), 3.0)\n   * \n    (0.5 + (0.5 * slow_roam_cos))\n  ) * q19).xyz);\n  ret_5 = (1.0 - exp((-2.0 * ret_5)));\n  vec4 tmpvar_10;\n  tmpvar_10.w = 1.0;\n  tmpvar_10.xyz = ret_5;\n  ret = tmpvar_10.xyz;\n }"
        }
      }
    })
  });
  