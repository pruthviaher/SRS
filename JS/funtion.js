// Ensure the video resolution is responsive to the screen size
const video = document.getElementById('video');
window.addEventListener('resize', () => {
    video.style.width = '100%';
    video.style.height = '100%';
});

// Optional: Add smooth scroll behavior
document.addEventListener('scroll', function () {
    const videoSection = document.getElementById('video-section');
    const scrollY = window.scrollY;

    // Fade out the video as the user scrolls down
    const opacity = 1 - scrollY / videoSection.clientHeight;
    videoSection.style.opacity = opacity;

    // Once the video is fully out of view, stop any interaction with it
    if (scrollY > videoSection.clientHeight) {
        videoSection.style.pointerEvents = 'none';
    } else {
        videoSection.style.pointerEvents = 'auto';
    }
});
