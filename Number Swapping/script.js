
        function swapNumbers() {
            const num1Input = document.getElementById('number1');
            const num2Input = document.getElementById('number2');
            const resultDiv = document.getElementById('result');

            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (isNaN(num1) || isNaN(num2)) {
                resultDiv.innerText = "Please enter valid numbers.";
                return;
            }

            // Swapping numbers
            [num1, num2] = [num2, num1];

            // Displaying results
            resultDiv.innerText = `After swapping: First Number = ${num1}, Second Number = ${num2}`;

            // Updating input fields to reflect swapped values
            num1Input.value = num1;
            num2Input.value = num2;
        }
    