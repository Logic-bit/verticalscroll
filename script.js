const videoIDs = ['aYHMr1Xs7IE', 'egbIh5aic-k']; // Add your YouTube Shorts video IDs here

function createVideoFrame(videoID) {
    const frame = document.createElement('iframe');
    frame.classList.add('video-frame');
    frame.src = `https://www.youtube.com/embed/${videoID}`;
    frame.frameBorder = "0";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    return frame;
}

const videoContainer = document.getElementById('video-container');
videoIDs.forEach(videoID => {
    const videoFrame = createVideoFrame(videoID);
    videoContainer.appendChild(videoFrame);
});
