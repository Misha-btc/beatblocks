let displayTimeout;
(async () => {
  const PARENT_ID = "49a863510654033b6cdff3471103a632b06303748e481ea300f8ff57dd83fd18i0";
  const BB_LOGO_ID = "766f3508bbb6ec359b91c1e4695fecc293460514a9eee1eb4d943959d7f58310i0"
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === 'beatblocks-lab.vercel.app'
  const BASE_URL = isLocal ? 'https://ordinals.com' : '';
  const audioContext = new AudioContext();
  const beatBlock = new BeatBlock(audioContext);
  window.beatBlock = beatBlock;
  let currentInscriptionId = null;
  const uploadedSongsCache = {};
  let currentIndex = 0;
  let isPlayingPlaylist = false;
  const playButton = document.getElementById('play');
  const stopButton = document.getElementById('stop');
  const fetchButton = document.getElementById('fetch');
  const songDisplay = document.getElementById('songDisplay');
  const playlistItems = document.getElementById('playlistItems');
  const songImage = document.getElementById('songImage');
  const regenerateButton = document.getElementById('regenerate');
  const fileInput = document.getElementById('jsonUpload');
  const volumeSlider = document.getElementById('volumeSlider');
  const balanceSlider = document.getElementById('balanceSlider');
  const toggleVisualizerButton = document.getElementById('toggleVisualizer');
  const toggleAlbumArtButton = document.getElementById('toggleAlbumArt');
  const songImageContainer = document.getElementById('songImageContainer');
  const version = document.getElementById('version');
  const VERSION = beatBlock.getVersion();
  const messageQueue = [];
  let isDisplayingMessage = false;

  version.innerText = "v" + VERSION;


  regenerateButton.disabled = true;
  const playlist = await getInitialPlaylist();

  setSlidersDisabled(true);
  await loadPlaylist();
  setupEventListeners();
  monitorPlayback();

  function updateSongDisplayMessage(message, type = 'info') {
    songDisplay.className = `song-display ${type}`;
    songDisplay.innerHTML = message?.replace(/\n/g, '<br/>');

    clearTimeout(displayTimeout);
    displayTimeout = setTimeout(() => {
      updateSongDisplay(beatBlock.getBeatBlockData());
    }, 2000);
  }


  function queueSongDisplayMessage(message, type = 'info') {
    messageQueue.push({
      message,
      type
    });

    if (!isDisplayingMessage) {
      processMessageQueue();
    }
  }

  function processMessageQueue() {
    if (messageQueue.length === 0) {
      isDisplayingMessage = false;
      return;
    }

    isDisplayingMessage = true;
    const {
      message,
      type
    } = messageQueue.shift();

    console.log({
      message
    })

    songDisplay.className = `song-display ${type}`;
    songDisplay.innerHTML = message?.replace(/\n/g, '<br/>');

    clearTimeout(displayTimeout);
    displayTimeout = setTimeout(() => {
      updateSongDisplay(beatBlock.getBeatBlockData());
      processMessageQueue(); // Process the next message after 500ms
    }, 100);
  }


  beatBlock.on('info', (message) => queueSongDisplayMessage(message, 'loading'));
  beatBlock.on('error', (error) => updateSongDisplayMessage(error, 'error'));
  beatBlock.on('end', () => {
    if (isPlayingPlaylist) {
      playNextInPlaylist();
    }
  });


  async function fetchChildrenMetadata(inscriptionId) {
    updateSongDisplayMessage('Fetching children metadata...', 'loading');
    const childrenEndpoint = `/r/children/${inscriptionId}/inscriptions`;

    try {
      const response = await fetch(`${BASE_URL}${childrenEndpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch children inscriptions: ${response.statusText}`);
      }
      const data = await response.json();
      const children = data.children || [];

      const metadataList = await Promise.all(
        children.map(async (child) => {
          const childId = child.id;
          try {
            const metadataResponse = await fetch(`${BASE_URL}/r/inscription/${childId}`);
            if (!metadataResponse.ok) {
              throw new Error(`Failed to fetch metadata for ${childId}: ${metadataResponse.statusText}`);
            }
            return await metadataResponse.json();
          } catch (error) {
            console.error(`Error fetching metadata for child ${childId}: ${error.message}`);
            return null;
          }
        })
      );

      updateSongDisplayMessage('Children metadata fetched successfully.');
      return metadataList.filter((metadata) => metadata !== null);
    } catch (error) {
      updateSongDisplayMessage(`Error fetching children metadata: ${error.message}`, 'error');
      return [];
    }
  }

  async function getInitialPlaylist() {
    updateSongDisplayMessage('Loading initial playlist...', 'loading');
    const response = await fetchChildrenMetadata(PARENT_ID);
    const ids = response.filter((metadata) => metadata.content_type === "application/json").map((metadata) => metadata.id);
    updateSongDisplayMessage('Initial playlist loaded successfully.');
    if (ids.length === 0) {
      updateSongDisplayMessage('No valid inscriptions found.', 'error');
    }
    return ids;
  }

  async function loadPlaylist() {
    updateSongDisplayMessage('Loading playlist items...', 'loading');
    playlistItems.innerHTML = '';
    for (const inscriptionId of playlist) {
      try {
        const songData = await fetchSongData(inscriptionId);
        const listItem = createPlaylistItem(songData, inscriptionId);
        playlistItems.appendChild(listItem);
      } catch (error) {
        console.error(`Error loading playlist item ${inscriptionId}:`, error);
      }
    }
    if (playlist.length === 0) {
      playlistItems.innerHTML = '<li id="nothing-found" style="pointer-events: none;">No valid BeatBlocks found.</li>';
    }
    updateSongDisplayMessage('Playlist loaded successfully.');
  }

  async function fetchSongData(inscriptionId) {
    updateSongDisplayMessage(`fetching song data for iD: ...${inscriptionId.slice(inscriptionId.length - 4, inscriptionId.length)}`, 'loading');
    const url = `${BASE_URL}/content/${inscriptionId}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch song data');
    // updateSongDisplayMessage('Song data fetched successfully.', 'loading');
    return await response.json();
  }

  function createPlaylistItem(songData, inscriptionId) {
    const nothingFound = document.getElementById('nothing-found');
    if (nothingFound) {
      nothingFound.remove();
    }
    const listItem = document.createElement('li');

    const author = songData.details?.author || "Unknown Artist";
    const title = songData.details?.title || "Untitled";

    listItem.textContent = `${author} - ${title}`;
    listItem.classList.add('playlist-item');

    listItem.addEventListener('click', () => selectBeatBlock(inscriptionId));
    return listItem;
  }

  function highlightPlayingTrack(inscriptionId) {
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('playing'));
    const trackIndex = playlist.indexOf(inscriptionId);
    const playlistItemsArray = Array.from(document.querySelectorAll('.playlist-item'));
    if (playlistItemsArray[trackIndex]) {
      playlistItemsArray[trackIndex].classList.add('playing');
    }
  }

  function setPlaylistItemsDisabled(disabled) {
    const items = document.querySelectorAll('.playlist-items li');
    const container = document.querySelectorAll('.slider-container');

    container.forEach(item => {
      if (disabled) {
        item.classList.add('disabled');
      } else {
        item.classList.remove('disabled');
      }
    })


    items.forEach(item => {
      if (disabled) {
        item.classList.add('disabled');
        item.style.pointerEvents = 'none';
        item.style.opacity = '0.5';
      } else {
        item.classList.remove('disabled');
        item.style.pointerEvents = 'auto';
        item.style.opacity = '1';
      }
    });
  }

  async function selectBeatBlock(inscriptionId) {
    try {
      beatBlock.stop();

      updateSongDisplayMessage(`Loading song with ID: ${inscriptionId}...`, 'loading');
      setPlaylistItemsDisabled(true);
      setSlidersDisabled(true);
      isPlayingPlaylist = true;

      let songData;

      if (inscriptionId?.startsWith('local-')) {
        songData = uploadedSongsCache[inscriptionId];
      } else {
        songData = await fetchSongData(inscriptionId);
      }

      currentInscriptionId = inscriptionId;
      originalSongData = songData;

      const newSongData = {
        ...songData,
        layers: songData.layers.map(layer => ({
          ...layer,
          path: `${layer.path.startsWith("https") ? "" : BASE_URL}${layer.path}`,
        })),
      };

      regenerateButton.disabled = newSongData.arrangement || newSongData?.arrangement?.length > 0;

      highlightPlayingTrack(inscriptionId);
      await beatBlock.initialize(newSongData);

      window.changePreset();
      window.visualizer.connectAudio(beatBlock.getAudioNode());
      toggleVisualizerButton.disabled = false;

      await beatBlock.play();

      showVisualizer();
      startVisualizer();
      updateSongDisplayMessage('Now playing.');
      currentIndex = playlist.indexOf(inscriptionId);
    } catch (error) {
      updateSongDisplayMessage(`Error selecting song: ${error.message}`, 'error');
      console.error(`Error selecting beat block ${inscriptionId}:`, error);
      setPlaylistItemsDisabled(false);
      setSlidersDisabled(false);
    } finally {
      setPlaylistItemsDisabled(false);
      setSlidersDisabled(false);
    }
  }


  function updateSongDisplay(songData) {
    if (!songData) return;
    const {
      details
    } = songData;
    const author = details?.author || "Unknown Artist";
    const title = details?.title || "Untitled";
    const bpm = details?.bpm || "N/A";
    const imgId = details?.imgId || BB_LOGO_ID;
    let songLength = "N/A";

    try {
      songLength = calculateSongLengthFormatted(songData.template, bpm);
    } catch (error) {
      console.error("Error calculating song length:", error);
    }

    songDisplay.innerHTML = `
      <span style="color: #00ff00;">
          <div class="song-artist-container">
            <span class="song-artist" id="scrollingArtist">${author}</span>
          </div>
          <div class="song-info-container">
            <span class="song-info" id="scrollingTitle">${title}</span>
          </div>
          <span style="font-size: 8px;">${bpm} bpm</span> - 
          <span style="font-size: 8px;">${songData.layers.length} layers</span><br/>
          <span style="font-size: 8px;">Duration: ${songLength}</span>
      </span>
    `;

    songImage.innerHTML = `<img src='${BASE_URL}/content/${imgId ?? BB_LOGO_ID}' alt='beatblock album art' />`;
    songImageContainer.src = `${BASE_URL}/content/${imgId ?? BB_LOGO_ID}`;

    handleScrollEffect('scrollingArtist', 'song-artist-container');
    handleScrollEffect('scrollingTitle', 'song-info-container');
  }

  function handleScrollEffect(elementId, containerClass) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const containerWidth = document.querySelector(`.${containerClass}`).offsetWidth;
    const elementWidth = element.scrollWidth;

    element.style.transform = 'translateX(0)';
    if (elementWidth > containerWidth) {
      setTimeout(() => {
        element.style.transition = `transform ${(elementWidth / 30)}s linear`;
        element.style.transform = `translateX(-${elementWidth - containerWidth + 10}px)`;
      }, 1000);

      element.addEventListener('transitionend', () => {
        setTimeout(() => {
          element.style.transition = 'none';
          element.style.transform = 'translateX(0)';
          handleScrollEffect(elementId, containerClass);
        }, 2000);
      });
    }
  }

  function calculateSongLengthFormatted(template, bpm) {
    if (!template || template.length === 0 || bpm <= 0) {
      console.error("Invalid template or BPM");
      return "N/A";
    }

    const secondsPerBar = (60 / bpm) * 4;
    let totalLengthInSeconds = 0;

    template.forEach((section) => {
      totalLengthInSeconds += section.length * secondsPerBar;
    });

    const hours = Math.floor(totalLengthInSeconds / 3600);
    const minutes = Math.floor((totalLengthInSeconds % 3600) / 60);
    const seconds = Math.round(totalLengthInSeconds % 60);

    return `${hours > 0 ? hours + 'h ' : ''}${minutes}m ${seconds}s`;
  }

  function setSlidersDisabled(disabled) {
    const sliders = [document.getElementById('volumeSlider'), document.getElementById('balanceSlider')];

    sliders.forEach(slider => {
      slider.disabled = disabled;
      if (disabled) {
        slider.style.opacity = '0.5';
        slider.style.pointerEvents = 'none';
      } else {
        slider.style.opacity = '1';
        slider.style.pointerEvents = 'auto';
      }
    });
  }

  async function playNextInPlaylist() {
    if (currentIndex >= playlist.length) {
      stopPlaylist();
      return;
    }

    currentIndex++;
    const nextInscriptionId = playlist[currentIndex];
    try {
      // await selectBeatBlock(nextInscriptionId);
    } catch (error) {
      console.error(`Error playing next song in playlist: ${error.message}`);
      currentIndex++;
      // Automatically move to the next track if there's an error
      // playNextInPlaylist();
    }
  }

  function stopPlaylist() {
    updateSongDisplayMessage('Playback stopped.');
    isPlayingPlaylist = false;
    beatBlock.stop();
    stopVisualizer()
    showAlbumArt()
  }

  async function prefetchStems(songData) {
    updateSongDisplayMessage('Prefetching audio layers...', 'loading');
    const promises = songData.layers.map(layer => fetch(`${layer.path}`));
    await Promise.all(promises);
    updateSongDisplayMessage('Audio layers prefetched successfully.');
  }

  function updateTemporaryMessage(message) {
    clearTimeout(displayTimeout);
    updateSongDisplayMessage(message);

    displayTimeout = setTimeout(() => {
      if (beatBlock.getDetails()) {
        updateSongDisplay(beatBlock.getBeatBlockData(), playlist[currentIndex]);
      }
    }, 2000);
  }

  function monitorPlayback() {
    setInterval(() => {
      if (isPlayingPlaylist && !beatBlock.isPlaying) {
        // updateSongDisplayMessage('Moving to the next song...', 'loading');
        // playNextInPlaylist();
      }

      if (playlist.length === 0) {
        playButton.disabled = true;
        stopButton.disabled = true;
      } else {
        if (!beatBlock.isPlaying) {
          playButton.disabled = false;
          stopButton.disabled = true;
          showAlbumArt()
        } else {
          playButton.disabled = true;
          stopButton.disabled = false;
        }
      }
    }, 500);
  }

  fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('Please select a JSON file');
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const jsonData = JSON.parse(e.target.result);

        if (!jsonData.details || !jsonData.layers || !jsonData.template) {
          alert('Invalid JSON format');
          return;
        }

        updateSongDisplayMessage('Loading JSON file...', 'loading');

        const updatedSongData = {
          ...jsonData,
          layers: jsonData.layers.map(layer => ({
            ...layer,
            path: `${BASE_URL}${layer.path}`,
          })),
        };

        const fakeInscriptionId = `local-${Date.now()}`;
        uploadedSongsCache[fakeInscriptionId] = updatedSongData;

        const listItem = createPlaylistItem(updatedSongData, fakeInscriptionId);
        playlistItems.appendChild(listItem);
        playlist.push(fakeInscriptionId);

        await prefetchStems(updatedSongData);
        updateSongDisplay(updatedSongData, fakeInscriptionId);
        highlightPlayingTrack(fakeInscriptionId);

        delete updatedSongData.arrangement
        await beatBlock.initialize(updatedSongData);

        window.changePreset();
        window.visualizer.connectAudio(beatBlock.getAudioNode());
        await beatBlock.play();
        showVisualizer();
        startVisualizer();
      };

      reader.readAsText(file);
    } catch (error) {
      console.error('Error reading JSON file:', error);
      updateSongDisplayMessage('Error loading JSON file.', 'error');
    }
  });

  function setupEventListeners() {
    fetchButton.addEventListener('click', async () => {
      const inscriptionId = document.getElementById('inscriptionId').value.trim();
      if (!inscriptionId) {
        alert('Please enter an inscription ID');
        return;
      }

      try {
        const songData = await fetchSongData(inscriptionId);
        const listItem = createPlaylistItem(songData, inscriptionId);
        playlistItems.appendChild(listItem);
        playlist.push(inscriptionId);
      } catch (error) {
        console.error('Error fetching song:', error);
      }
    });

    playButton.addEventListener('click', async () => {
      if (isPlayingPlaylist) {
        stopPlaylist();
      } else {
        isPlayingPlaylist = true;
        currentIndex = 0;
        await selectBeatBlock(currentInscriptionId ?? playlist[currentIndex]);
      }
    });

    stopButton.addEventListener('click', stopPlaylist);
  }


  regenerateButton.addEventListener('click', async () => {
    if (currentInscriptionId) {
      updateSongDisplayMessage("Regenerating...", "loading");
      setTimeout(async () => {
        await selectBeatBlock(currentInscriptionId);
      }, 1000);
    }
  });

  function showVisualizer() {
    songImageContainer.classList.add('hidden');
    userSelectedView = 'visualizer';
    toggleVisualizerButton.disabled = true;
    toggleAlbumArtButton.disabled = false;
  }

  function showAlbumArt() {
    songImageContainer.classList.remove('hidden');
    userSelectedView = 'album';
    toggleVisualizerButton.disabled = false;
    toggleAlbumArtButton.disabled = true;
  }

  toggleVisualizerButton.addEventListener('click', showVisualizer);
  toggleAlbumArtButton.addEventListener('click', showAlbumArt);
  volumeSlider.value = beatBlock.getMasterVolume();

  volumeSlider.addEventListener('input', (event) => {
    const volume = parseFloat(event.target.value);
    beatBlock.setMasterVolume(volume);
    updateTemporaryMessage(`Volume: ${Math.round(volume * 100)}%`);
  });

  balanceSlider.addEventListener('input', (event) => {
    const balance = parseFloat(event.target.value);
    beatBlock.setBalance(balance);
  });
  balanceSlider.addEventListener('input', (event) => {
    const balance = parseFloat(event.target.value);
    beatBlock.setBalance(balance);
    updateTemporaryMessage(`Balance: ${balance.toFixed(2)}`);
  });

})();