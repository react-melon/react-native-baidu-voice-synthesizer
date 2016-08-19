/**
 * @file 百度语音合成 SDK
 * @author leon <lupengyu@baidu.com>
 */

import {NativeModules} from 'react-native';

const Synthesizer = NativeModules.ReactNativeBaiduVoiceSynthesizer;

export function ping(name) {
    Synthesizer.ping(name);
}

/**
 * 配置语音合成SDK
 *
 * @param {Object} options 配置
 */
export async function configure(options) {

}

/**
 * 合成并播放语句
 *
 * @param {string} sentence 语句
 */
export async function speckSentence(sentence) {

}
