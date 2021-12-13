const productos = 
[
    {
        id:"1",
        categoria: "Hamburguesas",
        name:"Hamburguesa con queso",
        description:"Hamburguesa completa con doble carne, lechuga, cebolla, queso cheddar y gurmet",
        img:"https://www.hola.com/imagenes/cocina/noticiaslibros/20210528190401/dia-internacional-hamburguesa-recetas-2021/0-957-455/adobe-burger-1-a.jpg",
        precio:" $ 950 ",
    },
    {
        id:"2",
        categoria: "Empanadas",
        name:"Hamburguesa con queso",
        description:"Hamburguesa completa con doble carne, lechuga, cebolla, queso cheddar y gurmet",
        img:"https://comidasparaguayas.com/wp-content/uploads/2019/11/empanada-de-carne-paraguaya_700x465.jpg",
        precio:" $ 950 ",
    },
    {
        id:"3",
        categoria: "Pizza",
        name:"Hamburguesa con queso",
        description:"Hamburguesa completa con doble carne, lechuga, cebolla, queso cheddar y gurmet",
        img:"https://saboresmendoza.com/wp-content/uploads/2019/09/pizza-de-muzzarella.jpg",
        precio:" $ 950 ",
    },
    
]



export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos[0]);
        }, 1000);
    });
};

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const product = productos.find(prod => parseInt(prod.id) === parseInt(id));
        setTimeout(() => resolve(product), 1000);
    });
}


export const getItemByCategory = (categoria) => {
    return new Promise((resolve) => {
        const product = productos.filter(prod => prod.categoria.toLowerCase() === categoria.toLowerCase());
        setTimeout(() => resolve(product), 1000);
    });
}