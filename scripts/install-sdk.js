/**
 * @file 安装 SDK
 * @author leon <ludafa@outlook.com>
 */

const host = 'http://boscdn.bpc.baidu.com';
const sdk = require('../package.json').sdk;
const url = `${host}/mms-res/speech-synthesizer-sdk/BDSSpeechSynthesizerSDK-${sdk}.tar.gz`;

const download = require('download');

console.log(`downloading sdk from ${url}`);

download(url, 'ios', {extract: true}).then(function () {
    console.log('done');
}, function (e) {
    console.log(e);
});
