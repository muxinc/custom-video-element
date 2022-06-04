import { fixture, assert, aTimeout } from '@open-wc/testing';
// The custom-video-element JS import is defined in web-test-runner.config.js
// for both an eager and lazy custom element upgrade.

describe('<custom-video>', () => {
  it('is a instance of CustomVideoElement and HTMLElement', async function () {
    const customVideo = await fixture(`<custom-video></custom-video>`);
    assert(customVideo instanceof CustomVideoElement);
    assert(customVideo instanceof HTMLElement);
  });

  it('has a working muted attribute', async function () {
    const customVideo = window.customVideo;

    assert(customVideo.hasAttribute('muted'), 'has muted attribute');
    assert(customVideo.muted, 'has muted=true property');
    assert(customVideo.nativeEl.hasAttribute('muted'), 'nativeEl has muted attribute');
    assert(customVideo.nativeEl.muted, 'nativeEl has muted=true property');

    let playing;
    customVideo.addEventListener('playing', () => (playing = true));

    try {
      await customVideo.play();
    } catch (error) {
      console.warn(error);
    }

    assert(playing, 'playing event fired');
    assert(!customVideo.paused, 'paused prop is false');
  });

  it('has HTMLVideoElement like properties', async function () {
    const customVideo = await fixture(`<custom-video></custom-video>`);
    const CustomVideoElementProps = [
      "addEventListener",
      "addTextTrack",
      "autoplay",
      "buffered",
      "cancelVideoFrameCallback",
      "canPlayType",
      "captureStream",
      "controls",
      "controlsList",
      "crossOrigin",
      "currentSrc",
      "currentTime",
      "defaultMuted",
      "defaultPlaybackRate",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "dispatchEvent",
      "duration",
      "ended",
      "error",
      "getVideoPlaybackQuality",
      "HAVE_CURRENT_DATA",
      "HAVE_ENOUGH_DATA",
      "HAVE_FUTURE_DATA",
      "HAVE_METADATA",
      "HAVE_NOTHING",
      "height",
      "load",
      "loop",
      "mediaKeys",
      "muted",
      "NETWORK_EMPTY",
      "NETWORK_IDLE",
      "NETWORK_LOADING",
      "NETWORK_NO_SOURCE",
      "networkState",
      "onencrypted",
      "onenterpictureinpicture",
      "onleavepictureinpicture",
      "onwaitingforkey",
      "pause",
      "paused",
      "play",
      "playbackRate",
      "played",
      "playsInline",
      "poster",
      "preload",
      "preservesPitch",
      "readyState",
      "remote",
      "removeEventListener",
      "requestPictureInPicture",
      "requestVideoFrameCallback",
      "seekable",
      "seeking",
      "setMediaKeys",
      "setSinkId",
      "sinkId",
      "src",
      "srcObject",
      "textTracks",
      "videoHeight",
      "videoWidth",
      "volume",
      "webkitAudioDecodedByteCount",
      "webkitDecodedFrameCount",
      "webkitDroppedFrameCount",
      "webkitEnterFullScreen",
      "webkitEnterFullscreen",
      "webkitExitFullScreen",
      "webkitExitFullscreen",
      "webkitVideoDecodedByteCount",
      "width",
    ];

    CustomVideoElementProps.forEach((prop) => {
      assert(prop in customVideo, `${prop} exists in an instance of CustomVideoElement`);
    });
  });

});
