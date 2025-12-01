
// script.js
document.getElementById('addRowBtn').addEventListener('click', function () {
    const table = document.getElementById('dataTable').querySelector('tbody');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="number" value="0"></td>
        <td><input type="number" value="0"></td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    table.appendChild(row);

    row.querySelector('.deleteBtn').addEventListener('click', function () {
        row.remove();
    });
});


document.getElementById('calculateBtn').addEventListener('click', function () {
    const rows = document.querySelectorAll('#dataTable tbody tr');

    let col1Total = 0;
    let col2Total = 0;

    rows.forEach(row => {
        const col1 = parseFloat(row.children[0].querySelector('input').value) || 0;
        const col2 = parseFloat(row.children[1].querySelector('input').value) || 0;

        col1Total += col1;
        col2Total += col2;
    });

    const result = col1Total - col2Total;

    const resultValue = document.getElementById('resultValue');
    resultValue.textContent = result;

    resultValue.classList.remove('green', 'red');
    if (result > 0) {
        resultValue.classList.add('green');
    } else if (result < 0) {
        resultValue.classList.add('red');
    }
});