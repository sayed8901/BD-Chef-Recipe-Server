const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const chefData = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('Hello from BD chef server...');
});

app.get('/chef', (req, res) => {
    res.send(chefData.chefs);
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(`I need chef data for id#: ${id}`);
    const singleChefData = chefData?.chefs.find(item => item.id === id) || {};
    res.send(singleChefData);
});


app.listen(port, () => {
    console.log(`chefs recipe server is running at ${port} port`);
});