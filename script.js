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
        let lastElementArr = []
        let repeatedValues = [];
        let uniqueValues = [];
        let seenElements = new Set();
        for (let i = 0; i < rows.length; i++){
            let row = rows[i];
            let lastElement = row[row.length - 1];
            lastElementArr.push(lastElement);

            /*let value = lastElement;
            if (seenElements.has(value)) {
                repeatedValues.push(value);
            } else {
                seenElements.add(value);
                uniqueValues.push(value);
            }*/
        }
        console.log("unique values", lastElementArr);
    })


const output = document.getElementById('output');
output.innerHTML = "hello world";

