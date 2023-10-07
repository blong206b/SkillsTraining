document.addEventListener("DOMContentLoaded", function() {
  let currentNode = 0;

  function moveToNode(node) {
    // Remove the 'active' class from the current node
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    
    // Update the current node to the next node
    currentNode = node;

    // Add the 'active' class to the new current node
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  // Make the moveToNode function globally accessible so the HTML can use it
  window.moveToNode = moveToNode;

  // Initialize to the start node
  moveToNode(0);
 console.log('Script loaded');
});
