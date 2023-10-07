document.addEventListener("DOMContentLoaded", function() {
  let currentNode = 0;

  function moveToNode(node) {
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    currentNode = node;
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  window.moveToNode = moveToNode;

  moveToNode(0);  // Initialize to start node
});
