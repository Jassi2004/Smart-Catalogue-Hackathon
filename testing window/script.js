const steamSpans = document.querySelectorAll('.steam span');

steamSpans.forEach(span => {
  const randomRotation = Math.floor(Math.random() * 360);
  span.style.transform = `rotate(${randomRotation}deg)`;
});
