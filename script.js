function openInvite() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("music").play();

  showAnimation();
}

function showAnimation() {
  const fades = document.querySelectorAll(".fade");
  fades.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 300);
  });
}