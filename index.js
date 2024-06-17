document.addEventListener("DOMContentLoaded", () => {
    const images = [
        'https://ntvb.tmsimg.com/assets/p15366809_v_h10_aw.jpg?w=960&h=540',
        'https://w0.peakpx.com/wallpaper/908/3/HD-wallpaper-mulan-2020-liu-yifei-afis-sword-poster-red-movie-mulan-warrior-actress-girl-asian-princess.jpg',
        'https://m.media-amazon.com/images/S/pv-target-images/dd1d21a2e4a285e2dbac2dccc0594a308ce650e0a94272c37914e0df66aca307._UR1920,1080_SX720_FMjpg_.jpg',
        'https://lh3.googleusercontent.com/Qb80DFegLu5vOd2_A9WV1ehT0I1xhSCglOm1A6fxZxvCIVgZ01nwU7REolbLLiDZ1Y2t9vnX0Gk=w1280-h720',
        'https://cms.dmpcdn.com/movie/2023/08/11/5f95ca40-382d-11ee-ac0f-0d3fd807c335_webp_original.webp'
    ];

    let currentIndex = 0;
    const slideshowImage = document.getElementById('slideshow-image');

    // Set the first image
    slideshowImage.src = images[currentIndex];

    setInterval(() => {
        // Increment the index
        currentIndex = (currentIndex + 1) % images.length;

        // Set the new image
        slideshowImage.src = images[currentIndex];
    }, 2000);
});
