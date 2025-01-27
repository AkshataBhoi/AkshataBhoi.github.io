document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById("video-player");
    const videoSource = videoPlayer.querySelector("source");
  
    // Get the video file from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const videoFile = urlParams.get("video");
  
    if (videoFile) {
      videoSource.src = decodeURIComponent(videoFile); // Set video source
      videoPlayer.load(); // Load the video
      videoPlayer.play(); // Play the video
    } else {
      alert("No video specified!");
    }
  });
  