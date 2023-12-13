const csvUrl = './search-results.csv';

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok');
        }
        return response.text();
    })
    .then(csvData => {
        const rows = csvData.split('\n'); // split by newline to get rows
        console.log(rows);
    })


const output = document.getElementById('output');
output.innerHTML = "hello world";

