import express from 'express';

const app = express();


app.get('/get', (req, res) => {
    res.send("gingri!");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
