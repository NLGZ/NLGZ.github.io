document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("img");

  function moveImage() {
    const maxX = window.innerWidth - image.width;
    const maxY = window.innerHeight - image.height;

    const targetX = Math.floor(Math.random() * maxX);
    const targetY = Math.floor(Math.random() * maxY);

    animate({
      duration: 2000, // 애니메이션 지속 시간 (필요에 따라 조정)
      timing: function (timeFraction) {
        return timeFraction < 0.5
          ? 2 * timeFraction * timeFraction
          : -1 + (4 - 2 * timeFraction) * timeFraction; // easeInOutQuad
      },
      draw: function (progress) {
        const currentX =
          progress * (targetX - parseFloat(image.style.left)) +
          parseFloat(image.style.left);
        const currentY =
          progress * (targetY - parseFloat(image.style.top)) +
          parseFloat(image.style.top);

        image.style.left = `${currentX}px`;
        image.style.top = `${currentY}px`;
      },
    });

    function animate({ duration, timing, draw }) {
      let start = performance.now();

      function animateFrame() {
        let timeFraction = (performance.now() - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        const progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animateFrame);
        }
      }

      requestAnimationFrame(animateFrame);
    }

    requestAnimationFrame(moveImage);
  }

  moveImage(); // 페이지 로드 시 움직임 시작
});
