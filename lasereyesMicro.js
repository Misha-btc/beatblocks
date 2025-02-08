const initializeWalletHandlers = () => {

  //Xverse
  document.getElementById('xverseButton').addEventListener('click', async () => {
    try {
      console.log('Checking btc_providers:', window.btc_providers);

      if (!xverseProvider) {
        console.log('Xverse not found');
        return;
      }

      const provider = window.XverseProviders?.BitcoinProvider;
      console.log('Bitcoin Provider:', provider);

      if (provider) {
        console.log('Xverse Wallet is installed!');
        
        try {
          console.log('Step 1: Connecting to wallet...');
          const connectResult = await provider.request(
            'wallet_connect',
            {
              message: 'Connect to Laser Eyes'
            }
          );
          console.log('Connect result:', connectResult);

          if (connectResult?.result) {
            console.log('Successfully connected!');
            console.log('Connection details:', connectResult.result);
            
            if (connectResult.result.addresses) {
              console.log('Addresses:', connectResult.result.addresses);
            }
          }
        } catch (requestError) {
          console.error('Request error:', requestError);
          console.error('Error stack:', requestError.stack);
        }
      } else {
        console.log('Xverse Wallet is not installed!');
      }
    } catch (e) {
      console.error('Connect error:', e);
      console.error('Error stack:', e.stack);
    }
  });

  //Unisat
  document.getElementById('unisatButton').addEventListener('click', async () => {
    try {
      if (typeof window.unisat !== 'undefined') {
        console.log('UniSat Wallet is installed!');
        console.log(window.unisat);
      } else {
        console.log('UniSat Wallet is not installed!');
      }
      const accounts = await window.unisat.requestAccounts();
      document.getElementById('connect-status').textContent = 'Connected';
      document.getElementById('walletModal').style.display = 'none';
    } catch (e) {
      console.error('Connect error:', e.message);
    }
    try {
      let accounts = await window.unisat.getAccounts();
      console.log('connect success', accounts);
    } catch (e) {
      console.log('connect failed');
    }
  });

  //Oyl
  document.getElementById('oylButton').addEventListener('click', async () => {
    try {
      if (typeof window.oyl !== 'undefined') {
        console.log('Oyl Wallet is installed!');
        const addresses = await window.oyl.getAddresses();
        console.log('addresses', addresses);
      } else {
        console.log('Oyl Wallet is not installed!');
      }
    } catch (e) {
      console.error('Connect error:', e.message);
    }
  });

  //Leather
  document.getElementById('leatherButton').addEventListener('click', async () => {
    try {
      if (typeof window.LeatherProvider !== 'undefined') {
        console.log('Leather Wallet is installed!');
        const response = await window.LeatherProvider?.request("getAddresses");
        console.log("Addresses:", response.result.addresses);
      } else {
        console.log('Leather Wallet is not installed!');
      }
    } catch (e) {
      console.error('Connect error:', e.message);
    }
  });
  //MagicEden (does not work)
  document.getElementById('magicEdenButton').addEventListener('click', async () => {
    try {
      if (typeof window.magicEden.bitcoin !== 'undefined') {
        console.log('MagicEden Wallet is installed!');
        await window.magicEden.bitcoin.getAddresses([{
          params: {
            network: {
              type: "mainnet"
            }
          },
          id: "1"
        }]);
        const accounts = await window.magicEden.bitcoin.accounts;
        console.log('Connected accounts:', accounts);
      } else {
        console.log('MagicEden Wallet is not installed!');
      }
    } catch (e) {
      console.error('Connect error:', e.message);
    }
  });

  //Phantom
  document.getElementById('phantomButton').addEventListener('click', async () => {
    try {
      if (typeof window.phantom !== 'undefined') {
        console.log('Phantom Wallet is installed!');
        const addresses = await window.phantom.bitcoin.requestAccounts();
        console.log('addresses', addresses);
      } else {
        console.log('Phantom Wallet is not installed!');
      }
    } catch (e) {
      console.error('Connect error:', e.message);
    }
  });
};

document.addEventListener('DOMContentLoaded', initializeWalletHandlers);
