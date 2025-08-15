function setMouseMoveListener(color1, color2, id) {
  function mouseMoveHandler(event) {
    var container = document.getElementById(id);
    var rect = container.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    container.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color1} 20px, ${color2} 120px)`;
  }
  document.removeEventListener('mousemove', document.mouseMoveHandler);
  document.mouseMoveHandler = mouseMoveHandler;
  document.addEventListener('mousemove', mouseMoveHandler);
}

function gradientFallback(color1, color2, id) {
    document.getElementById(id).style.background = `radial-gradient(circle at 0px 0px, ${color1} 20px, ${color2} 120px)`;
}
