import express from 'express'
import ProductManager from './ProductManager.js'


const app = express()
const puerto = 8080;

const manager = new ProductManager()

app.use(express.json());


app.get('/products', async (req, res) => {
    try {
        let limit = req.query.limit
        const products = await manager.getProducts();
        if (limit) {
            
            return res.send(products.slice(0, limit))            
        } else {
            return res.send(products);
        }
    } catch (error) {
        res.status(500).json({ error: 'no se encontraron los productos' });
    }
});

app.get('/products/:id', async (req, res)=>{
    let id = req.params.id
    let producto = await manager.getProductById(Number(id))
    if(!producto){
        return res.send({producto})
    }
    res.send({producto})

})

app.listen(puerto, () => {
    console.log(`el servidor funciona`);
});