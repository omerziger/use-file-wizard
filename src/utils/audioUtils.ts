export function decodeAudioFile(file: ArrayBuffer, handleDecodeSuccess: DecodeSuccessCallback) {
    const audioContext = new AudioContext()
    audioContext.decodeAudioData(file, handleDecodeSuccess)
}