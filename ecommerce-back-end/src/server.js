const express = require("express");
const env = require("dotenv");
const app = express();
 const mongoose = require('mongoose')

// Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');

// Environment Variable
env.config();

// mongodb connection
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.07cup.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   

  }
).then(() => {
  console.log('Database connected');
})

// app.use(express.json());

app.use(express.json());
app.use('/api' , authRoutes);
app.use('/api' , adminRoutes);
app.use('/api', categoryRoutes);



app.listen(process.env.PORT, () => {
  console.log(`server running on  ${process.env.PORT}`);
});



//cHoWwhZxh3ppsjcH