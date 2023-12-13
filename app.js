const express = require('express');
const mongoose = require('mongoose');
const bodyParserMiddleware = require('./middleware/bodyParserMiddleware');
const userRoutes = require('./api/routes/userRoutes');
const thoughtRoutes = require('./api/routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/social_network', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParserMiddleware);

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
