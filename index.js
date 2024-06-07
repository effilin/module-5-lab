import express from "express";
const app = express()
const app2 = express()
const port = 80
const port2 = 3000
import calculatorRoutes from "./routes/calculatorRoutes.js";
import friendRoutes from "./routes/friendRoute.js";

app.use('/calculator', calculatorRoutes);
app.use('/friends', friendRoutes);
app.use('/', express.static('public'))
app.use(express.json());


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

app2.listen(port2, () => {
    console.log(`Example is listening at port: ${port2}`)
})