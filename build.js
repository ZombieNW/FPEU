const exe = require('@angablue/exe');
const build = exe({
    entry: './index.js',
    out: './dist/FPEU.exe',
    pkg: ['-C', 'GZip'],
    version: '0.1.0',
    target: 'node16-win-x64',
    icon: './assets/icon.ico',
    properties: {
        FileDescription: 'FFmpeg Powered Explorer Utilities',
        ProductName: 'FPEU',
        LegalCopyright: 'ZombieNW',
        OriginalFilename: 'FPEU.exe'
    }
});
build.then(() => console.log('Build done'));