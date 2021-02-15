require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food chef random noble arrow gown light army gesture'; 
let testAccounts = [
"0x526882c4ea70101a5ead9f9da52fccdce3053602ccec34ce6c446a0be27c00b0",
"0xfbacbd8ab70c4503586f131e68813578a654bdddf721c6c6cefabbf281006560",
"0x80c94ee833ca4f44b1ad3875da5fd250090c51156422429bb8dad1d55223d694",
"0x3e934882673cf295deaa57f9543f697da4950ef40d8144baa386b5ea7db8d879",
"0x318cab7a84491930ec78e747a24e26c2cfe8e9347873d6cc488ae92867ca74ce",
"0x49a65d9041c390be436eedeaeb369b3bc8d3d7b2df90257fc2c27edb83cb5548",
"0x5059af2c2b7fe7abb799a9a19c6cf5cc9f9767af741e4d050165faa3871badb6",
"0x666a21df942eab6290af86da0bd697bc986ee00c676a7910c40186bf74fc8a4a",
"0x59e0768c7c80cd438eeeabec0cf0e52e3aef948beb4d5ccf162a6a0bba310b79",
"0x9652b469855269699a5ddda761a09784b60a1d65bed60c6f8864583578089147"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
