// Function to ensure video plays and repeats
window.onload = function () {
  const videoElement = document.getElementById("autoPlayVideo");

  if (!videoElement) {
    console.error("Element ya 'autoPlayVideo' ntabwo ibonetse.");
    return;
  }

  // Remove 'muted' if present
  videoElement.muted = false;

  // Set volume to maximum (optional)
  videoElement.volume = 1.0;

  // Ensure the video repeats
  videoElement.loop = true;

  // Attempt to play the video
  videoElement.play().then(() => {
    console.log("Video is playing with sound and will repeat automatically.");
  }).catch((error) => {
    console.error("Autoplay with sound failed:", error);
  });
};
