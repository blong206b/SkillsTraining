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

  // Making the moveToNode function globally accessible so the HTML can use it
  window.moveToNode = moveToNode;

  // Additional logic can go here, such as analytics tracking or other event-based activities.

  // Initialize to the start node
  moveToNode(0);
});