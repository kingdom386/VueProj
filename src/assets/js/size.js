const designW = 750;
const docEl = document.documentElement;
const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
const recalc = () => {
  const clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  docEl.style.fontSize = `${100 * (clientWidth / designW)}px`;
};
if (document.addEventListener) {
  recalc();
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
}

