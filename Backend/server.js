const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const messRoutes = require('./routes/messRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/mess', messRoutes);
app.use('/api/order', orderRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
