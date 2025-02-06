class BeatBlock {
    constructor(t) {
      this.version = "0.0.0-rc1", this.audioContext = t, this.layers = new Map, this.currentSection = 0, this.currentStep = 0, this.isPlaying = !1, this.sectionRepeatCount = 0, this.nextNoteTime = 0, this.bpm = null, this.currentlyPlaying = [], this.stepInterval = null, this.details = null, this.generationConfig = null, this.beatBlockData = null, this.template = null, this.generationConfig = null, this.events = new Map, this.initMasterProcessingChain(), this.emit("info", "beatblock protocol intialized.")
    }
    on(t, e) {
      this.events.has(t) || this.events.set(t, []), this.events.get(t).push(e)
    }
    emit(t, e) {
      this.events.has(t) && this.events.get(t).forEach((t => t(e)))
    }
    initMasterProcessingChain() {
      this.masterCompressor = this.createCompressor({
        threshold: -12,
        knee: 12,
        ratio: 2,
        attack: .003,
        release: .25
      }), this.masterLimiter = this.createCompressor({
        threshold: -3,
        knee: 0,
        ratio: 20,
        attack: .003,
        release: .25
      }), this.masterGain = this.audioContext.createGain(), this.masterGain.gain.value = .7, this.panner = this.audioContext.createStereoPanner(), this.panner.pan.value = 0, this.masterCompressor.connect(this.masterGain), this.masterGain.connect(this.panner), this.panner.connect(this.masterLimiter), this.masterLimiter.connect(this.audioContext.destination)
    }
    createCompressor(t) {
      const e = this.audioContext.createDynamicsCompressor();
      return Object.keys(t).forEach((n => {
        e[n].value = t[n]
      })), e
    }
    async initialize(t) {
      this.emit("info", "initializing beatblock...");
      try {
        await this.addDependencyIfMissing("/content/808b350000597027855b9dbe770d27ab8b7766cb5e3b0b7c4bd4c05e4a164808i0", "ogg-opus-decoder"), await this.addDependencyIfMissing("/content/808b350000597027855b9dbe770d27ab8b7766cb5e3b0b7c4bd4c05e4a164808i1", "lamejs");
        const e = this.generate(t);
        this.beatBlockData = e, this.stop(), this.emit("info", "clearing layers..."), this.layers.clear(), this.emit("info", "loading layers..."), await this.loadLayers(e.layers), this.details = e.details, this.bpm = e.details.bpm, this.arrangement = e.arrangement, this.template = e.template, this.emit("info", "initialization complete")
      } catch (t) {
        this.emit("error", t)
      }
    }
    addDependencyIfMissing(t, e) {
      return window[e] ? (this.emit("info", "have dependency"), Promise.resolve()) : new Promise(((n, i) => {
        const r = document.createElement("script");
        r.src = t, r.async = !0, r.onload = () => {
          this.emit("info", `${e} loaded successfully.`), n()
        }, r.onerror = () => {
          this.emit("error", `Failed to load ${e} from ${t}`), i(new Error(`Failed to load script: ${t}`))
        }, document.head.appendChild(r)
      }))
    }
    async play() {
      try {
        if ("suspended" === this.audioContext.state && (this.emit("audio suspended, resuming audio"), await this.audioContext.resume()), this.isPlaying) return void this.emit("error", "already playing!");
        this.isPlaying = !0, this.nextNoteTime = this.audioContext.currentTime, this.scheduleNextStep()
      } catch (t) {
        console.error(t), this.emit("error", t.message)
      }
    }
    async loadLayers(t) {
      try {
        this.emit("info", `loading ${t.length} layers`);
        const e = document.createElement("audio"),
          n = !!e.canPlayType && "" !== e.canPlayType('audio/ogg; codecs="opus"');
        this.emit("info", `opus support: ${n}`);
        const i = async t => {
          try {
            const e = await fetch(`${t.path}`);
            if (!e.ok) return this.emit("error", `Failed to load layer: ${t.id}`), null;
            const i = await e.arrayBuffer(),
              r = this.detectAudioFormat(i, t.path);
            let s;
            if ("opus" === r && n) s = await this.audioContext.decodeAudioData(i);
            else if ("opus" === r) {
              const e = await this.convertOpusToMp3(t.id, i);
              try {
                const t = await (await fetch(URL.createObjectURL(e))).arrayBuffer();
                s = await this.audioContext.decodeAudioData(t)
              } catch (t) {
                this.emit("error", "Error decoding MP3", t)
              }
            } else ["mp3", "wav", "m4a"].includes(r) || this.emit("info", `Unsupported format for ${t.id}: ${r}, proceeding anyway.`), s = await this.audioContext.decodeAudioData(i);
            return this.layers.set(t.id, s), {
              id: t.id,
              success: !0
            }
          } catch (e) {
            return console.log(e), this.emit("error", e.message), {
              id: t.id,
              success: !1
            }
          }
        };
        this.emit("info", "handling conversions");
        const r = await Promise.all(t.map(i));
        this.emit("info", "stems converted");
        const s = r.filter((t => t && t.success));
        this.emit("info", `Successfully loaded ${s.length} out of ${t.length} layers.`)
      } catch (t) {
        console.error(t), this.emit("error", t)
      }
    }
    async getCachedBlob(t) {
      const e = (await this.openIndexedDB()).transaction("audio-cache", "readonly").objectStore("audio-cache");
      return new Promise(((n, i) => {
        const r = e.get(t);
        r.onsuccess = () => n(r.result), r.onerror = () => i(r.error)
      }))
    }
    async saveBlobToCache(t, e) {
      const n = (await this.openIndexedDB()).transaction("audio-cache", "readwrite").objectStore("audio-cache");
      return new Promise(((i, r) => {
        const s = n.put(e, t);
        s.onsuccess = () => i(), s.onerror = () => r(s.error)
      }))
    }
    openIndexedDB() {
      return new Promise(((t, e) => {
        const n = indexedDB.open("audio-cache-db", 1);
        n.onupgradeneeded = () => {
          const t = n.result;
          t.objectStoreNames.contains("audio-cache") || t.createObjectStore("audio-cache")
        }, n.onsuccess = () => t(n.result), n.onerror = () => e(n.error)
      }))
    }
    async convertOpusToMp3(t, e) {
      const n = `bb-mp3-${t}`,
        i = await this.getCachedBlob(n);
      if (i) return i;
      const r = new window["ogg-opus-decoder"].OggOpusDecoder({
        sampleRate: 48e3
      });
      if (!r) throw new Error("Failed to initialize OggOpusDecoder");
      await r.ready;
      const s = new Uint8Array(e),
        o = await r.decodeFile(s);
      r.free();
      const a = o.channelData.length,
        c = o.sampleRate,
        l = new lamejs.Mp3Encoder(a, c, 320),
        h = [];
      for (let t = 0; t < o.channelData[0].length; t += 1152) {
        const e = [];
        for (let n = 0; n < a; n++) {
          const i = o.channelData[n].subarray(t, t + 1152);
          e[n] = this.floatToInt16(i)
        }
        const n = 1 === a ? l.encodeBuffer(e[0]) : l.encodeBuffer(e[0], e[1]);
        n.length > 0 && h.push(n)
      }
      const u = l.flush();
      u.length > 0 && h.push(u);
      const d = new Blob(h, {
        type: "audio/mpeg"
      });
      return await this.saveBlobToCache(n, d), d
    }
    floatToInt16(t) {
      const e = new Int16Array(t.length);
      for (let n = 0; n < t.length; n++) e[n] = Math.max(-32768, Math.min(32767, 32768 * t[n]));
      return e
    }
    detectAudioFormat(t, e) {
      const n = new Uint8Array(t);
      if (79 === n[0] && 103 === n[1] && 103 === n[2] && 83 === n[3]) return "opus";
      if (73 === n[0] && 68 === n[1] && 51 === n[2]) return "mp3";
      if (82 === n[0] && 73 === n[1] && 70 === n[2] && 70 === n[3]) return "wav";
      if (102 === n[4] && 116 === n[5] && 121 === n[6] && 112 === n[7]) return "m4a";
      return e.split(".").pop().toLowerCase() || "unknown"
    }
    generate(t) {
      if (this.emit("info", `generating arrangement using template & ${t.layers.length} layers..`), t.arrangement && t.arrangement.length > 0) return this.emit("info", "already arranged, bailing"), t;
      this.emit("info", "generating...");
      const e = t.generationConfig || {},
        n = new Set(e.mutexes || []),
        i = new Map,
        r = e.groups || [];
      let s = null;
      r.length > 0 && (s = r[Math.floor(Math.random() * r.length)]), n.forEach((function(e) {
        const n = t.layers.filter((function(t) {
          return t.mutex && t.mutex.includes(e)
        }));
        if (n.length > 0) {
          const t = Math.floor(Math.random() * n.length);
          i.set(e, n[t])
        }
      }));
      const o = t.template.map((function(e) {
        let r = t.layers.slice();
        r = r.filter((t => !s || t.groups && t.groups.includes(s) || void 0 === t.groups || 0 === t.groups.length)), r = r.filter((t => {
          const e = t.mutex?.some((t => i.has(t))),
            n = [...i.values()].some((e => e.id === t.id));
          return !e || n
        }));
        const o = [],
          a = [];
        (e.inclusions || []).map((function(t) {
          if (i.has(t)) return i.get(t);
          const e = r.filter((function(e) {
            return e.mutex && e.mutex.includes(t)
          }));
          if (e.length > 0) {
            return e[Math.floor(Math.random() * e.length)]
          }
          return r.find((function(e) {
            return e.id === t
          }))
        })).filter((function(t) {
          return void 0 !== t
        })).forEach((function(t) {
          o.some((function(e) {
            return e.id === t.id
          })) || (o.push({
            id: t.id,
            loopLength: t.loopLength,
            path: t.path,
            loop: t.loop,
            offset: t.offset,
            volume: t.volume,
            alignment: t.alignment
          }), r.splice(r.indexOf(t), 1))
        }));
        const c = new Set(e.exclusions || []);
        for (r = r.filter((function(t) {
            const e = !!t.mutex && t.mutex.some((function(t) {
              return c.has(t)
            }));
            return !c.has(t.id) && !e
          })); o.length + a.length < e.layerCount && r.length > 0;) {
          const e = r.filter((function(t) {
            const e = t.mutex || [];
            return e.every((function(t) {
              return !n.has(t)
            })) || e.some((function(e) {
              return i.get(e) && i.get(e).id === t.id
            }))
          }));
          if (0 === e.length) break;
          const s = e[Math.floor(Math.random() * e.length)];
          !!s.mutex && s.mutex.some((function(e) {
            return o.some((function(n) {
              const i = t.layers.find((function(t) {
                return t.id === n.id
              }));
              return i && i.mutex && i.mutex.includes(e)
            }))
          })) || (o.push({
            id: s.id,
            loopLength: s.loopLength,
            path: s.path,
            offset: s.offset,
            loop: s.loop,
            volume: s.volume,
            alignment: s.alignment
          }), r = r.filter((function(t) {
            return t.id !== s.id
          })))
        }
        return Object.assign({}, e, {
          layers: a.concat(o)
        })
      }));
      return this.emit("info", "generated!"), Object.assign({}, t, {
        layers: t.layers.map((function(t) {
          const e = t.path.startsWith("/content/");
          return Object.assign({}, t, {
            path: `${e ? "https://ordinals.com" : ""}${t.path}`
          })
        })),
        arrangement: o
      })
    }
    scheduleNextStep() {
      if (!this.isPlaying) return;
      const t = 60 / this.bpm / 4,
        e = this.audioContext.currentTime;
      for (; this.nextNoteTime < e + .5;) this.playStepAt(this.nextNoteTime), this.advanceStep(), this.nextNoteTime += t;
      setTimeout((() => this.scheduleNextStep()), 50)
    }
    playStepAt(t) {
      const e = this.arrangement[this.currentSection],
        n = e.length;
      e.layers.forEach((e => {
        const {
          id: i,
          volume: r,
          offset: s = 0,
          loop: o,
          loopLength: a,
          alignment: c
        } = e, l = 16 * s;
        let h = t;
        const u = s * (60 / this.bpm) * 4,
          d = n * (60 / this.bpm) * 4,
          m = a * (60 / this.bpm) * 4;
        let p = 0;
        "end" === c ? (h = t + d - m, p = d - m) : "center" === c ? (h = t + d / 2, p = d / 2) : "center-end" === c && (h = t + d / 2 - m, p = d / 2 - m);
        let g = h + d - u - p;
        this.currentStep === l && this.playLayerAt(i, h, s, r, o, g)
      }))
    }
    playLayerAt(t, e, n, i, r, s) {
      const o = this.layers.get(t);
      if (!o) return void console.warn(`No buffer found for layer: ${t}`);
      const a = i || 1,
        c = this.audioContext.createBufferSource(),
        l = this.audioContext.createGain();
      c.buffer = o, c.loop = r;
      const h = e + n * (60 / this.bpm) * 4;
      r ? (c.loopStart = 0, c.loopEnd = o.duration, c.start(h), c.stop(s)) : (c.start(h), c.stop(s)), l.gain.value = a, c.connect(l), l.connect(this.masterCompressor), this.currentlyPlaying.push(c), c.onended = () => {
        this.currentlyPlaying = this.currentlyPlaying.filter((t => t !== c))
      }
    }
    getNextSectionStartTime(t) {
      return t + this.arrangement[this.currentSection].length * (60 / this.bpm) * 4
    }
    stop() {
      this.isPlaying && (clearInterval(this.stepInterval), this.stepInterval = null, this.currentlyPlaying.forEach((t => {
        try {
          t.stop()
        } catch (t) {
          console.warn("Error stopping source:", t)
        }
      })), this.currentlyPlaying = [], this.isPlaying = !1, this.currentStep = 0, this.currentSection = 0, this.sectionRepeatCount = 0)
    }
    advanceStep() {
      const t = this.arrangement[this.currentSection];
      this.currentStep++, this.currentStep >= 16 * t.length && (this.currentStep = 0, this.currentSection++, this.currentSection >= this.arrangement.length && (console.log("Reached end of Beat Block. Stopping playback."), this.emit("end", "end of beat block"), this.stop()))
    }
    setBalance(t) {
      this.panner.pan.value = t
    }
    getBeatBlockData() {
      return this.beatBlockData
    }
    getBalance() {
      return this.panner.pan.value
    }
    getAudioNode() {
      return this.masterGain
    }
    getAudioContext() {
      return this.audioContext
    }
    getCurrentStep() {
      return this.currentStep
    }
    getCurrentSection() {
      return this.currentSection
    }
    getTotalSections() {
      return this.arrangement.length
    }
    getDetails() {
      return this.details
    }
    getBpm() {
      return this.bpm
    }
    getCurrentlyPlayingLayers() {
      return this.currentlyPlaying.map((t => t.buffer))
    }
    setMasterVolume(t) {
      this.masterGain.gain.value = t
    }
    getMasterVolume() {
      return this.masterGain.gain.value
    }
    getVersion() {
      return this.version
    }
    getPlaybackProgress() {
      const t = this.arrangement.reduce(((t, e) => t + 16 * e.length), 0);
      return (16 * this.currentSection + this.currentStep) / t * 100
    }
  }
  window.BeatBlock = BeatBlock;