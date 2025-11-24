import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    console.log('Liste af Biler');
    res.send('liste af brugte biler') 
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    res.send(`bil detaljer: ${id}`) 
})

export { router as carRouter }

