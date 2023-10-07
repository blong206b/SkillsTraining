console.log("Script starting...");
document.addEventListener("DOMContentLoaded", function() {
  let currentNode = 0;
  const historyStack = [];

  function moveToNode(node) {
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    historyStack.push(currentNode);
    currentNode = node;
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  function moveBack() {
    if (historyStack.length === 0) return;
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    currentNode = historyStack.pop();
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  function startOver() {
    document.getElementById(`node-${currentNode}`).classList.remove('active');
    historyStack.length = 0;  // Clear the history stack
    currentNode = 0;  // Reset to the starting node
    document.getElementById(`node-${currentNode}`).classList.add('active');
  }

  function navigateToDetails() {
    window.location.href = 'https://blong206b.github.io/SkillsTraining/specialized-data-roles/';
  }

  window.moveToNode = moveToNode;
  window.moveBack = moveBack;
  window.startOver = startOver;
  window.navigateToDetails = navigateToDetails;  // Don't forget this line

  moveToNode(0);  // Initialize to start node
});
console.log("Script loaded");
