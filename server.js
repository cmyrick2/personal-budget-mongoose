const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');


app.use('/', express.static('public'));

// const budget = {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 25
//     },
//     {
//         title: 'Rent',
//         budget: 375
//     },
//     {
//         title: 'Grocery',
//         budget: 110
//     },
//   ]
// };

const budget = JSON.parse(fs.readFileSync('budget-data.json', 'utf8'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

//assign JSON file location to const variable
//const budget = require('budget-data.json')
// app.get('/budget', (req, res) => {
//     res.sendFile(budget);
// });



app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});