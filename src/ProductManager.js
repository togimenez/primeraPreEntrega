const fs = require('fs');
const { json } = require('stream/consumers');

class ProductManager {
    constructor() {
        this.path = path;
        this.products = [];
        this.contador = 1; 
    }
}

function addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
        return;
    }

    if (this.products.some(product => product.code === code)) {
        return;
    }

    const producto = {
        id: this.contador++, 
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
    this.products.push(producto);
    const datosProducto = JSON.stringify(this.products, null, 2)
    fs.writeFileSync(this.path, datosProducto)
}

function getProducts() {
    try {
    const datosProducto = fs.readFileSync(this.path, "utf8");
    return JSON.parse(datosProducto);
    } catch (error) {
    return this.products
    }
}
function getProductById(id) {
    const datosProducto = fs.readFileSync(this.path, 'utf8')
    this.products = JSON.parce(datosProducto)
    const producto = this.products.find(producto => producto.id === id);
    if (producto) {
        return producto
    } else {
        return 'not found'
    }
}

function updateProduct(id, updatedProduct){
    const producto_actualizar= this.getProductById(id)
    if(!producto_actualizar) {
        console.log("No existe este producto")
        return
    }
    Object.assign(producto_actualizar, updateProduct)
    const datosProducto = JSON.stringify(this.products, null, 2)
    fs.writeFileSync(this.path, datosProducto) 
    console.log('Producto actualizado con éxito.');
}

function deleteProduct(id) {
    const eliminar_producto = this.getProductById(id)
    if(!eliminar_producto){
        console.log("No existe este producto")
        return
    }
    const datosProducto = this.getProducts()
    const eliminar_index = this.products.indexOf(eliminar_producto)
    datosProductos.splice(eliminar_index, 1);
    fs.writeFileSync(this.path, JSON.stringify(datosProductos));
    console.log('Producto eliminado con éxito.');
}

const manager = new ProductManager();

manager.addProduct("producto", "este es un producto", 800, "sin imagen", "abc123", 20)
manager.addProduct("producto", "este es un producto", 300, "sin imagen", "abc124", 16)
manager.addProduct("producto", "este es un producto", 450, "sin imagen", "abc125", 35)

console.log(manager.getProductById(2));

export default ProductManager