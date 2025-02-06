(async () => {
    try {
      const i = document.getElementById("visualizerCanvas"),
        r = window.beatBlock,
        o = document.getElementById("fullscreen-button");
      let l = !1;
      const c = {
          ...butterchurnPresetsMinimal.getPresets()
        },
        s = Object.keys(c).sort(),
        d = r.getAudioContext(),
        a = e(i, d);
  
      function e(e, t) {
        try {
          const n = butterchurn.default.createVisualizer(t, e, {
            width: e.width,
            height: e.height,
            pixelRatio: window.devicePixelRatio || 1
          });
          return n.loadPreset(c[s[Math.floor(Math.random() * s.length)]], 0), e.width = window.innerWidth, e.height = window.innerHeight, n.setRendererSize(e.width, e.height), e.width = i.width, e.height = i.height, n
        } catch (e) {
          console.error("Error initializing visualizer:", e)
        }
      }
  
      function t() {
        l = !1, i.style.opacity = "0"
      }
  
      function n() {
        l && r.isPlaying ? (a.render(), requestAnimationFrame(n)) : t()
      }
      window.visualizer = a, window.addEventListener("resize", (() => {
        i.width = window.innerWidth, i.height = window.innerHeight, a.setRendererSize(i.width, i.height)
      })), window.changePreset = function() {
        a.loadPreset(c[s[Math.floor(Math.random() * s.length)]], 0)
      }, window.initializeVisualizer = e, window.connectVisualizer = function() {
        try {
          a.connectAudio(r.getAudioNode())
        } catch (e) {
          console.error("Error connecting visualizer to audio:", e)
        }
      }, window.startVisualizer = function() {
        l || (l = !0, i.style.opacity = "1", requestAnimationFrame(n))
      }, window.stopVisualizer = t, o.addEventListener("click", (() => {
        document.fullscreenElement ? document.exitFullscreen().then((() => {
          i.classList.remove("fullscreen"), o.textContent = "Fullscreen"
        })) : i.requestFullscreen().then((() => {
          i.classList.add("fullscreen"), o.textContent = "Fullscreen"
        })).catch((e => {
          console.error("Error attempting fullscreen:", e)
        })), document.addEventListener("fullscreenchange", (() => {
          document.fullscreenElement || (o.textContent = "Fullscreen")
        }))
      }))
    } catch (u) {
      console.error(u)
    }
  })();