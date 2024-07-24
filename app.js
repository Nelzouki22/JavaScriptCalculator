'use strict';

< !DOCTYPE html >
    <html lang="ar">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>آلة حاسبة</title>
                    <style>
                        body {
                            font - family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #f4f4f4;
        }
                        .calculator {
                            border: 1px solid #ccc;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        background-color: #fff;
                        padding: 20px;
        }
                        .display {
                            width: 100%;
                        height: 50px;
                        margin-bottom: 10px;
                        font-size: 2em;
                        text-align: right;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        padding: 10px;
                        box-sizing: border-box;
        }
                        .button {
                            width: 23%;
                        height: 60px;
                        margin: 1%;
                        font-size: 1.5em;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        background-color: #f1f1f1;
                        cursor: pointer;
                        outline: none;
        }
                        .button.operator {
                            background - color: #fe9241;
                        color: #fff;
        }
                        .button.double {
                            width: 48%;
        }
                    </style>
                </head>
                <body>
                    <div class="calculator">
                        <input type="text" id="display" class="display" disabled>
                            <br>
                                <button class="button" onclick="appendNumber('7')">7</button>
                                <button class="button" onclick="appendNumber('8')">8</button>
                                <button class="button" onclick="appendNumber('9')">9</button>
                                <button class="button operator" onclick="setOperation('/')">/</button>
                                <br>
                                    <button class="button" onclick="appendNumber('4')">4</button>
                                    <button class="button" onclick="appendNumber('5')">5</button>
                                    <button class="button" onclick="appendNumber('6')">6</button>
                                    <button class="button operator" onclick="setOperation('*')">*</button>
                                    <br>
                                        <button class="button" onclick="appendNumber('1')">1</button>
                                        <button class="button" onclick="appendNumber('2')">2</button>
                                        <button class="button" onclick="appendNumber('3')">3</button>
                                        <button class="button operator" onclick="setOperation('-')">-</button>
                                        <br>
                                            <button class="button double" onclick="appendNumber('0')">0</button>
                                            <button class="button" onclick="appendNumber('.')">.</button>
                                            <button class="button operator" onclick="setOperation('+')">+</button>
                                            <button class="button operator" onclick="calculate()">=</button>
                                            <br>
                                                <button class="button double operator" onclick="clearDisplay()">C</button>
                                            </div>

                                            <script>
                                                let currentNumber = '';
                                                let operation = '';
                                                let previousNumber = '';

                                                function appendNumber(number) {
                                                    currentNumber += number;
                                                updateDisplay();
        }

                                                function setOperation(op) {
            if (currentNumber === '') return;
                                                if (previousNumber !== '') {
                                                    calculate();
            }
                                                operation = op;
                                                previousNumber = currentNumber;
                                                currentNumber = '';
        }

                                                function calculate() {
            if (previousNumber === '' || currentNumber === '') return;
                                                let result;
                                                const prev = parseFloat(previousNumber);
                                                const curr = parseFloat(currentNumber);

                                                switch (operation) {
                case '+':
                                                result = prev + curr;
                                                break;
                                                case '-':
                                                result = prev - curr;
                                                break;
                                                case '*':
                                                result = prev * curr;
                                                break;
                                                case '/':
                                                if (curr === 0) {
                                                    alert('لا يمكن القسمة على الصفر');
                                                clearDisplay();
                                                return;
                    }
                                                result = prev / curr;
                                                break;
                                                default:
                                                return;
            }

                                                currentNumber = result.toString();
                                                operation = '';
                                                previousNumber = '';
                                                updateDisplay();
        }

                                                function clearDisplay() {
                                                    currentNumber = '';
                                                operation = '';
                                                previousNumber = '';
                                                updateDisplay();
        }

                                                function updateDisplay() {
                                                    document.getElementById('display').value = currentNumber;
        }
                                            </script>
                                        </body>
                                    </html>
