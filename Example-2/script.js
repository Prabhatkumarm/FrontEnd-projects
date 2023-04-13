let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

const cells = document.querySelectorAll('td');
cells.forEach(function(cell) {
  cell.addEventListener('dragover', handleDragOver);
  cell.addEventListener('drop', handleDrop);
});

const drags = document.querySelectorAll('.drag');
drags.forEach(function(drag) {
  drag.addEventListener('dragstart', handleDragStart);
});


let dragSrcEl = null;
let currentCell = null;

function handleDragStart(e) {
  dragSrcEl = this;
  currentCell = this.parentElement;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    animateBoxBack(currentCell, this.parentElement);
  }
  return false;
}

function animateBoxBack(fromCell, toCell) {
  const box = toCell.querySelector('.drag');
  const startPos = box.getBoundingClientRect();
  const endPos = fromCell.getBoundingClientRect();
  const deltaX = endPos.left - startPos.left;
  const deltaY = endPos.top - startPos.top;
  const duration = 500; // in milliseconds
  let startTime = null;

  function step(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const progress = timestamp - startTime;
    if (progress < duration) {
      box.style.transform = `translate(${deltaX * progress / duration}px, ${deltaY * progress / duration}px)`;
      window.requestAnimationFrame(step);
    } else {
      box.style.transform = null;
    }
  }

  window.requestAnimationFrame(step);
}

const cells = document.querySelectorAll('td');
cells.forEach(function(cell) {
  cell.addEventListener('dragover', handleDragOver);
  cell.addEventListener('drop', handleDrop);
});

const drags = document.querySelectorAll('.drag');
drags.forEach(function(drag) {
  drag.addEventListener('dragstart', handleDragStart);
});
