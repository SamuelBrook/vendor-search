const csvUrl = './search-results.csv';
const columnToUpdate = 'Values';

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
            let splitRow = row.split(',');
            let lastElement = splitRow[splitRow.length - 1];
            lastElementArr.push(lastElement);
        }
        //search for more than one count of elements
        //search for more than one count of elements
        let counter = lastElementArr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});

        let countedOnce = Object.keys(counter).filter(key => counter[key] === 1);

        console.log("splitelementarr", lastElementArr);
        console.log("uniquevalues", uniqueValues);
        console.log("countedonce", countedOnce);

    })


const output = document.getElementById('output');
output.innerHTML = "hello world";

