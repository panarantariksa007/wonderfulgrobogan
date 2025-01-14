
// awal video selayang pandang //

const video = document.querySelector(".video-container video");
const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("mouseenter", () => {
  video.play();
  hoverText.classList.add("active");
});

// akhir video selayang pandang //

//awal destinasi//

video.addEventListener("mouseleave", () => {
  video.pause();
  hoverText.classList.remove("active");
});



//baru//