const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 9999

const app = express();

app.use(express.json()) 
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Gern:Enot2001@cluster0.bubbi.mongodb.net/QuicKey?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start()