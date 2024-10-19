// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useRef, useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import Hls from 'hls.js';

function App() {
    useEffect(() => {
        const video: HTMLVideoElement = document.getElementById('video') as HTMLVideoElement;
        const videoSrc = 'https://yacshy.github.io/izu/video/index.m3u8';

        if (!video) {
            return;
        }
        //
        // First check for native browser HLS support
        //
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
            //
            // If no native HLS support, check if HLS.js is supported
            //
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
        }
    }, []);
    return (
        <>
            <div className="fuck">
                <video id="video" muted autoPlay controls></video>
            </div>
        </>
    );
}

export default App;
