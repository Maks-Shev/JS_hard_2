function addItem() {
    const inputItem = document.querySelector('#inputItem').value.trim();
    const itemList = document.querySelector('#itemList');

    try {
        if (inputItem.length < 3 || inputItem.length > 10) {
            throw new Error('Длинна элемента должна быть от 3 до 10 символов');
        }

        const li = document.createElement('li');
        li.textContent = inputItem;
        itemList.appendChild(li);
        document.getElementById('inputItem').value = '';
    } catch (error) {
        alert(error.message);
        document.getElementById('inputItem').value = '';
        document.getElementById('inputItem').focus();
    }
}


