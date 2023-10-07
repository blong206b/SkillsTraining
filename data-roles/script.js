document.addEventListener("DOMContentLoaded", function() {
  // Initialize currentNode and historyStack
  let currentNode = 0;
  const historyStack = [];

  // Function to move to a new node
  function moveToNode(node) {
    // Hide the current node
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    // Add the current node to history
    historyStack.push(currentNode);
    // Update the currentNode
    currentNode = node;
    // Show the new node
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  // Function to move back to the previous node
  function moveBack() {
    if (historyStack.length === 0) return;
    // Hide the current node
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    // Pop the last node from the history and make it the current node
    currentNode = historyStack.pop();
    // Show the new current node
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  // Function to start over from the beginning
  function startOver() {
    // Hide the current node
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    // Clear the history stack
    historyStack.length = 0;
    // Reset to the starting node
    currentNode = 0;
    // Show the starting node
    document.getElementById(`node-${currentNode}`).classList.add('active');
     // New function to navigate to the specialized roles page
  	function navigateToDetails() {
    window.location.href = 'https://blong206b.github.io/SkillsTraining/specialized-data-roles/';
  }

  // Expose these functions to the global window object
  window.moveToNode = moveToNode;
  window.moveBack = moveBack;
  window.startOver = startOver;
  window.navigateToDetails = navigateToDetails; // Assign new function to window object

  // Initialize to start node
  moveToNode(0);
});
