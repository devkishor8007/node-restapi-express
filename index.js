const express = require('express');
const app = express();
require('./db');

app.use(express.json());

app.use('/', require('./routers/getROute'),);

const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`Server is running at the port ${port}`);
});