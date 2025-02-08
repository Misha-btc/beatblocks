class WalletModal {
  constructor() {
      this.injectStyles();
      this.createModal();
      this.initializeEventListeners();
  }

  injectStyles() {
    const styles = `
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 20000;
        }

        .modal-content {
            background-color: #000000;
            margin: 10% auto;
            border: 1px solid #8787876e;
            width: 80%;
            height: 70%;
            max-width: 500px;
            position: relative;
            z-index: 1001;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .winamp-header {
            background: linear-gradient(to right, #232735, #4b4e5c);
            padding: 3px 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 20px;
        }

        .winamp-header .title {
            color: #918d8d;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-weight: thin;
        }

        .close-modal {
            top: 0;
            right: 0;
            font-size: 24px;
            cursor: pointer;
            font-weight: 800;
            font-family: monospace;
            color: #232735;
        }

        .close-modal:hover,
        .close-modal:focus {
            color: #888;
            text-decoration: none;
            cursor: pointer;
        }

        .wallet-options {
            color: #00ff00;
            font-family: monospace;
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            flex: 1;
            gap: 5px;
            padding: 5px;
        }

        .wallet-options::-webkit-scrollbar {
            width: 20px;
            background: #232735;
        }

        .wallet-options::-webkit-scrollbar-thumb {
            background: #4b4e5c;
            border: 2px solid;
            border-color: #666 #333 #333 #666;
            box-shadow: inset 1px 1px rgba(255, 255, 255, 0.2);
        }

        .wallet-options::-webkit-scrollbar-button {
            display: block;
            height: 20px;
            background: #4b4e5c;
            border: 2px solid;
            border-color: #666 #333 #333 #666;
        }

        .wallet-option {
            background: #4C4E5C;
            border: 2px solid;
            border-color: #555 #333 #333 #555;
            color: #00ff00;
            font-family: 'Arial';
            font-size: 15px;
            padding: 5px 10px;
            cursor: pointer;
            text-align: left;
            width: 100%;
            position: relative;
            gap: 10px;
            display: flex;
            align-items: center;
            min-height: 60px;
        }

        .wallet-option:hover {
            background: #4c4e5cda;
        }

        .wallet-option:active {
            background: linear-gradient(to bottom, #232735, #4b4e5c);
            border-color: #333 #555 #555 #333;
            padding: 6px 9px 4px 11px;
        }

        .wallet-option::before {
            content: '►';
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 8px;
            color: #000000;
        }

        .connect-button {
            background: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .connect-button img {
            width: 100px;
            height: 100px;
        }

        #connect-status {
            top: 0;
            color: #00ff00;
            font-family: monospace;
            font-size: 10px;
            margin-top: -20px;
        }

        header {
            position: flex;
            margin-bottom: 20px;
            top: 0;
            left: 0;
            right: 0;
            height: 100px;
            z-index: 1000;
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  createModal() {
    const header = document.createElement('header');
    const connectButton = document.createElement('button');
    connectButton.id = 'connectButton';
    connectButton.className = 'connect-button';
    
    const img = document.createElement('img');
    img.src = 'green_laser.svg';
    img.alt = 'Connect';
    
    const span = document.createElement('span');
    span.id = 'connect-status';
    span.textContent = 'Connect Wallet';
    
    connectButton.appendChild(img);
    connectButton.appendChild(span);
    header.appendChild(connectButton);
    
    const modal = document.createElement('div');
    modal.id = 'walletModal';
    modal.className = 'modal';
      
    modal.innerHTML = `
        <div class="modal-content">
            <div class="winamp-header">
                <div class="title">Choose Wallet</div>
                <span class="close-modal">&times;</span>
            </div>
            <div class="wallet-options">
                <button class="wallet-option" id="xverseButton"><img src="xverse.svg" style="width: 20px; height: 20px;" alt="Xverse"/> Xverse</button>
                <button class="wallet-option" id="oylButton"><img src="oyl.svg" style="width: 25px; height: 25px;" alt="Oyl"/> Oyl</button>
                <button class="wallet-option" id="unisatButton"><img src="uni.svg" style="width: 25px; height: 25px;" alt="Unisat"/> Unisat</button>
                <button class="wallet-option" id="magicEdenButton">MagicEden</button>
                <button class="wallet-option" id="leatherButton">Leather</button>
                <button class="wallet-option">OKX</button>
                <button class="wallet-option">OP_NET</button>
                <button class="wallet-option">Orange</button>
                <button class="wallet-option" id="phantomButton">Phantom</button>
                <button class="wallet-option">Wizz</button>
            </div>
        </div>
    `;

    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(modal);
  }

  initializeEventListeners() {
    const modal = document.getElementById('walletModal');
    const connectButton = document.getElementById('connectButton');
    const closeButton = document.querySelector('.close-modal');

    connectButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const walletButtons = document.querySelectorAll('.wallet-option');
    walletButtons.forEach(button => {
      button.addEventListener('click', () => {
          console.log(`Selected wallet: ${button.textContent.trim()}`);
          modal.style.display = 'none';
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WalletModal();
});