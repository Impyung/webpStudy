function load() {
  const visible = document.querySelector('.project-menu');

  let isDisplayed = false;

  if (isDisplayed) {
    visible.style.opacity = '0';
    setTimeout(() => {
      visible.style.display = 'none';
    }, 400);
    isDisplayed = false;
  } else {
    visible.style.display = 'block';
    setTimeout(() => {
      visible.style.opacity = '1';
    }, 0);
    isDisplayed = true;
  }
}
