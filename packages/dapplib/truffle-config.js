require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food jaguar dash misery method heavy end army gather'; 
let testAccounts = [
"0x85dc14541cbc5db93a1498f9ff23d1c3b29a64d2c69ea89041a4670974787de4",
"0xedc2ee9d792ac7fce9ea420dd8e75d93b6d89f79588586fa61fa5824f0a9a9f9",
"0x0c30fe72b1bc9de9962260467232d19116519298903633bbcc642d854c7b6c72",
"0x95c1943665dc700d6bc227920b2dd6777fe116c1093dabd02a2610627c5cf206",
"0x099577c5d020ec06eb2e20f1152800079e0c5d7961358db45a2ddd7c09d73e15",
"0xa5fa91829c4fa21f7f7b6639276dca551b29d3fded9f7ac0bbe7eb18e35ba1b8",
"0x2e9fb46e838564ae4898f25d34ae912017f9b709cf193231fd9620105da2b6a0",
"0x4eaf99f138f29ab477912e82021eb8a0da7e79bae2d90247ec7d0318e955e2b4",
"0xac2c49711ff2d3841d10d901c45faf8420782208650ff9c42ab688ce2171e6ba",
"0x071460b10fee83cc82a740da599bb77dede637823fb605e1a4d6fc25f54d6919"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


