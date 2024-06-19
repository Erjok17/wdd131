document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('main > button');
    const list = document.querySelector('#chapterList');
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    button.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete');
            li.append(deleteButton);

            list.appendChild(li);

            input.value = '';
            input.focus();

            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
            });
        } else {
            input.focus();
        }
    });

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
    });
});