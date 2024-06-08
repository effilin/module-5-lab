import express from "express";
const router = express.Router();
import calculatorController from '../controllers/calculatorController.js'

router.get('/add', (req, res) => {
   calculatorController.addNumbers(req, res)
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})


export default router;