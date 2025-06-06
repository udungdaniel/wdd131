const input = document.querySelector('#verse');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Corrected selector

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {

        // Create a li element
        const li = document.createElement('li');

        // Populate the li element with the input value
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Add event listener to delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Append the delete button to the li
        li.appendChild(deleteButton);

        // Append the li to the list
        list.appendChild(li);

        // Clear the input field
        input.value = '';
        input.focus();
    }
});
