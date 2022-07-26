const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');
const userRoutes = require('./routes/userRoute');
const questRoutes = require('./routes/questionRoutes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

// Routes
app.use('/api', userRoutes);
app.use('/api', questRoutes);

app.all('*', (req, res) => {
  res.status(400).json({ error: 'page not found' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
