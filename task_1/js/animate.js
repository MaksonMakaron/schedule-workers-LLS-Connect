export const showAnimate = (blockAnimate) => {
  blockAnimate.classList.remove('schedule__animate__hidden');
  blockAnimate.classList.add('schedule__animate__show');
};

export const hideAnimate = (blockAnimate, isShow) => {
  if (isShow) {
    blockAnimate.classList.remove('schedule__animate__show');
    blockAnimate.classList.add('schedule__animate__hidden');
    isShow = false;
  }
};
