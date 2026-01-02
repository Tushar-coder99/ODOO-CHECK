const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products'); // <--- ADD THIS

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// Use Routes
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute); // <--- ADD THIS

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});