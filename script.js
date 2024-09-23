// Get references to DOM elements
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function addItem(e) {
  e.preventDefault(); // Prevent form from submitting

  const newItem = itemInput.value;

  // Input validation: Ensure the input field is not empty
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create a new list item (li) and add the input value as its content
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  // Create the 'remove' button and append it to the list item
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Append the new list item to the item list
  itemList.appendChild(li);

  // Clear the input field after the item has been added
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  // Check if the clicked element is part of a 'remove-item' button
  if (e.target.parentElement.classList.contains('remove-item')) {
    // Remove the list item by navigating to its parent element (li)
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems(e) {
  // While the item list has child elements, remove each one
  while(itemList.firstChild) {
    itemList.firstChild.remove();
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
