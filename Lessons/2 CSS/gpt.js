function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '200px' ? '0' : '200px';
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);
    const targetColumn = event.target.closest('.column');
    targetColumn.appendChild(draggedElement);
  }
  