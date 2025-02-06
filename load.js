const loadRemoteScript = e => new Promise(((o, t) => {
    const r = document.createElement("script");
    r.type = "text/javascript", r.src = e, r.onload = () => {
      console.log(`Loaded: ${e}`), o()
    }, r.onerror = () => t(new Error(`Failed to load script: ${e}`)), document.head.appendChild(r)
  }));