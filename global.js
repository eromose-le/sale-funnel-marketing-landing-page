window.ENV_VAR = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

const navLinkEls = document.querySelectorAll(".nav__link");
const windowPathname = window.location.pathname;

navLinkEls.forEach((navLinkEl) => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;
  if (navLinkPathname === windowPathname) {
    navLinkEl.classList.add("nav__link--active");
  }
});

const videoEls = document.querySelectorAll(".video");

videoEls.forEach((videoEl) => {
  const videoPlayerEl = videoEl.querySelector(".video__player");
  const videoPosterEl = videoEl.querySelector(".video__poster");
  const videoPlayButtonEl = videoEl.querySelector(".video__play-button");
  const videoPauseButtonEl = videoEl.querySelector(".video__pause-button");

  if (videoPlayerEl) {
    videoPlayerEl.controls = true;
  }

  if (videoPlayerEl?.paused) {
    videoPlayButtonEl?.classList?.remove("hidden");
    videoPauseButtonEl?.classList?.add("hidden");
  } else {
    videoPlayButtonEl?.classList?.add("hidden");
    videoPauseButtonEl?.classList?.remove("hidden");
  }

  videoPlayerEl?.addEventListener("playing", function handlePlaying(e) {
    videoEl?.classList?.add("video--playing");
    videoPosterEl?.classList?.add("hidden");
  });

  videoPlayerEl?.addEventListener("waiting", function handleWaiting(e) {
    videoEl?.classList?.remove("video--playing");
  });

  videoPlayerEl?.addEventListener("play", function handlePlay(e) {
    videoPlayButtonEl?.classList?.add("hidden");
    videoPauseButtonEl?.classList?.remove("hidden");
  });

  videoPlayerEl?.addEventListener("pause", function handlePause(e) {
    videoPlayButtonEl?.classList?.remove("hidden");
    videoPauseButtonEl?.classList?.add("hidden");
    videoEl?.classList?.remove("video--playing");
  });

  videoPlayButtonEl?.addEventListener("click", function handlePlayClick() {
    videoPlayerEl?.play();
  });

  videoPauseButtonEl?.addEventListener("click", function handlePauseClick() {
    videoPlayerEl?.pause();
  });
});
