import express from 'express';
const app = express();

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Running on Port  ${PORT}`);
});

const userRoute = require('./src/routes/user');
const commentRoute = require('./src/routes/comment');
app.use('/user', userRoute);
app.use('/comment', commentRoute);