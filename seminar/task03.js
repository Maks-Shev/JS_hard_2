function checkNumber() {
    const input = document.querySelector('#numberInput').value; 
    const messageDiv = document.querySelector('#message');
    try {
        if (isNaN(input) || input.trim() === '') {
            throw new Error('Это не число. Пожалуйста, введите число.');
        }
        messageDiv.textContent = `Вы ввели число ${input}`;
        messageDiv.style.color = 'green';
        document.body.appendChild(messageDiv);
    } catch (error) {
        messageDiv.textContent = error.message;
        messageDiv.style.color ='red';
        document.body.appendChild(messageDiv);
    }
}