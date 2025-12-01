// script.js
let col1Values = [0];
let col2Values = [0];
let realtimeMode = false;

function rebuildTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';
    const maxLen = Math.max(col1Values.length, col2Values.length);

    /*
        for (let i = 0; i < maxLen; i++) {
            const row = document.createElement('tr');

            const col1 = col1Values[i] !== undefined 
            ? `<input type=\"number\" class=\"col1\" data-index=\"${i}\" value=\"${col1Values[i]}\"> 
            <button class=\"del1\" data-index=\"${i}\">X</button>` 
            : '';

            const col2 = col2Values[i] !== undefined 
            ? `<input type=\"number\" class=\"col2\" data-index=\"${i}\" value=\"${col2Values[i]}\"> <button class=\"del2\" data-index=\"${i}\">X</button>` 
            : '';

            row.innerHTML = `<td>${col1}</td><td>${col2}</td>`;

            tbody.appendChild(row);
        }
    */

// script.js (rebuildTable portion updated)
for (let i = 0; i < maxLen; i++) {
    const row = document.createElement('tr');

    const col1 = col1Values[i] !== undefined
    ? `<div class="data_input_field"><input type="number" class="col1" data-index="${i}" value="${col1Values[i]}">
    <button class="del1 kib_col_delete_btn" data-index="${i}">X</button></div>`
    : '';

    const col2 = col2Values[i] !== undefined
    ? `<div class="data_input_field"><input type="number" class="col2" data-index="${i}" value="${col2Values[i]}">
    <button class="del2 kib_col_delete_btn" data-index="${i}">X</button></div>`
    : '';
    
    row.innerHTML = `<td class="kib_col1_cell">${col1}</td><td class="kib_col2_cell">${col2}</td>`;
    
    row.classList.add('kib_data-row');

    tbody.appendChild(row);
}






    document.querySelectorAll('.del1').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            col1Values.splice(index, 1);
            rebuildTable();
            if (realtimeMode) calculateAndColor();
        });
    });

    document.querySelectorAll('.del2').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            col2Values.splice(index, 1);
            rebuildTable();
            if (realtimeMode) calculateAndColor();
        });
    });

    document.querySelectorAll('.col1').forEach((input, i) => {
        input.addEventListener('input', () => {
            col1Values[i] = parseFloat(input.value) || 0;
            if (realtimeMode) calculateAndColor();
        });
    });

    document.querySelectorAll('.col2').forEach((input, i) => {
        input.addEventListener('input', () => {
            col2Values[i] = parseFloat(input.value) || 0;
            if (realtimeMode) calculateAndColor();
        });
    });
}

function applyRowColors() {
    const rows = document.querySelectorAll('#dataTable tbody tr');
    rows.forEach((row, i) => {
        const diff = (col1Values[i] || 0) - (col2Values[i] || 0);
        row.style.background = diff > 0 ? '#e6ffe6' : diff < 0 ? '#ffe6e6' : '#f2f2f2';
    });
}

function calculateAndColor() {
    let col1Total = col1Values.reduce((a,b)=>a+b,0);
    let col2Total = col2Values.reduce((a,b)=>a+b,0);
    const result = col1Total - col2Total;
    const resultValue = document.getElementById('resultValue');
    resultValue.textContent = result;
    resultValue.classList.remove('green','red');
    if(result>0) resultValue.classList.add('green');
    else if(result<0) resultValue.classList.add('red');
    applyRowColors();
}

// Event Listeners
document.getElementById('addCol1').addEventListener('click', () => { col1Values.push(0); rebuildTable(); if(realtimeMode) calculateAndColor(); });
document.getElementById('addCol2').addEventListener('click', () => { col2Values.push(0); rebuildTable(); if(realtimeMode) calculateAndColor(); });
document.getElementById('calculateBtn').addEventListener('click', calculateAndColor);

document.getElementById('modeToggleCheckbox').addEventListener('change', function(){
    realtimeMode = this.checked;
    document.getElementById('modeLabel').textContent = realtimeMode ? 'Real-Time Mode' : 'After-Calculate Mode';
    document.getElementById('calculateBtn').style.display = realtimeMode ? 'none' : 'inline-block';
    if(realtimeMode) calculateAndColor();
});

rebuildTable();
