const loadRecentChildScript = async (t, e = "") => {
    const r = `/r/children/${t}/inscriptions`;
    try {
      const t = await fetch(`${e}${r}`);
      if (!t.ok) throw new Error(`Failed to fetch children inscriptions: ${t.statusText}`);
      const n = (await t.json()).children || [],
        i = (await Promise.all(n.map((async t => {
          const r = t.id;
          try {
            const t = await fetch(`${e}/r/inscription/${r}`);
            if (!t.ok) throw new Error(`Failed to fetch metadata for ${r}: ${t.statusText}`);
            return await t.json()
          } catch (t) {
            return console.error(`Error fetching metadata for child ${r}: ${t.message}`), null
          }
        })))).filter((t => t && "text/javascript" === t.content_type));
      if (0 === i.length) throw new Error("No JavaScript inscriptions found.");
      i.sort(((t, e) => e.number - t.number));
      const o = i[0],
        a = `${e}/content/${o.id}`,
        c = await fetch(a),
        s = await c.text(),
        l = document.createElement("script");
      l.type = "text/javascript", l.textContent = s, document.head.appendChild(l), console.log(`Injected latest inscription script: ${o.id}`)
    } catch (t) {
      throw new Error(`Error loading latest JS inscription: ${t.message}`)
    }
  };