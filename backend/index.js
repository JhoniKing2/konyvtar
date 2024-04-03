const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use('/kolcsonzesek', require('../backend/routes/kolcsonzesekRoutes'))
app.use('/kolcsonzo', require('../backend/routes/kolcsonzoRoutes'))
app.use('/konyv', require('../backend/routes/konyvekRoutes'))


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

app.get('/', (req, res) => {
    res.json({message: 'Hello'});
});