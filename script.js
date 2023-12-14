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
        for (let i = 0; i < rows.length; i++){ // loop through the rows, split by CSV column and save the last elements (the product codes) to an array
            let row = rows[i];
            let splitRow = row.split(',');
            let lastElement = splitRow[splitRow.length - 1];
            lastElementArr.push(lastElement);
        } 
        // return object with unique elements as keys and counts as values
        let counter = lastElementArr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        // extract an array of the keys (unique elements) from the counter object
        let countedOnce = Object.keys(counter).filter(key => counter[key] === 1);

        console.log("splitelementarr", lastElementArr);
        console.log("countedoncecheck", countedOnce);

    })


const output = document.getElementById('output');
output.innerHTML = "hello world";

