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
        let counter = lastElementArr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});

        let oneValues = Object.keys(counter).filter(key => counter[key] === 1);

        
        let csvDataRead= fs.readFileSync(csvFilePath, 'utf8');
        let parsedData = Papa.parse(csvDataRead, {header: true});

        oneValues.forEach(oneValue => {
            parsedData.data.push({[columnToUpdate]: oneValue.toString()});
        });

        let updatedCsv = Papa.unparse(parsedData);
        fs.writeFileSync(csvFilePath, updatedCsv,'utf8');

        console.log("splitelementarr", lastElementArr);
        console.log("uniquevalues", uniqueValues);
        console.log("countedonce", countedOnce);


        const displayCsv = () => {
            let csvFilePath = 'search-results.csv';

            // Read the existing CSV file
            Papa.parse(csvFilePath, {
                header: true,
                complete: function(results) {
                    displayCSV(results.data);
                }
            });

            // Function to display CSV data in a table
            function displayCSV(data) {
                let table = document.getElementById('csvTable');
                
                // Create header row
                let headerRow = table.getElementsByTagName('thead')[0].insertRow(0);
                for (let key in data[0]) {
                    let th = document.createElement('th');
                    th.innerHTML = key;
                    headerRow.appendChild(th);
                }

                // Create data rows
                for (let i = 0; i < data.length; i++) {
                    let row = table.getElementsByTagName('tbody')[0].insertRow(i);
                    for (let key in data[i]) {
                        let cell = row.insertCell(-1);
                        cell.innerHTML = data[i][key];
                    }
                }
            }
        }
        displayCsv();
    })


const output = document.getElementById('output');
output.innerHTML = "hello world";

