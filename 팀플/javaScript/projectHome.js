function load() {
  const visible = document.querySelector('.project-menu');

  let isDisplayed = false;

  if (isDisplayed) {
    gsap.to(visible, 0.4, {
      opacity: 0,
      display: 'none',
    });
    isDisplayed = false;
  } else {
    gsap.to(visible, 0.4, {
      opacity: 1,
      display: 'block',
    });
    isDisplayed = true;
  }
}

function cl() {
  const invisible = document.querySelector('.project-menu');

  let isInvisible = false;

  if (isInvisible) {
    gsap.to(invisible, 0.4, {
      opacity: 1,
      display: 'block',
    });
    isInvisible = true;
  } else {
    gsap.to(invisible, 0.4, {
      opacity: 0,
      display: 'none',
    });
    isInvisible = false;
  }
}
