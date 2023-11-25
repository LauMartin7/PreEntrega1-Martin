
const products =[
    {id: '1',
    name: 'Moisés blanco y negro',
    price: 185300,
    category: 'Cunas',
    img: 'https://images.unsplash.com/photo-1458731909820-5850bdcaee0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxfHwlMjBjcmFkbGV8ZW58MHx8fHwxNzAwMjMzNjI1fDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 15,
    description: 'Moisés y móvil de oso de peluche' 
    },
    {id: '2',
    name: 'Silla alta de madera marrón',
    price: 280500,
    category: 'Alimentacion',
    img: 'https://images.unsplash.com/photo-1612200057237-59ff4c861453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwyfHwlMjBiYWJ5JTIwY2hhaXJ8ZW58MHx8fHwxNzAwMjcxODU0fDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 22,
    description: 'Silla con respaldo reclinable' 
    },
    {id: '3',
    name: 'Coche Ultra Compacto azul',
    price: 190000,
    category: 'Coches',
    img: 'https://images.unsplash.com/photo-1636384919179-d936e55c5cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw5fHxzdHJvbGxlcnxlbnwwfHx8fDE3MDAyNzI0MDh8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 8,
    description: 'Coche de plegado con una mano' 
    },
    {id: '4',
    name: 'Oso de peluche',
    price: 19000,
    category: 'Juguetes',
    img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwyfHxiYWJ5JTIwdG95c3xlbnwwfHx8fDE3MDA4NzgwODB8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 11,
    description: 'Osito marrón de plush' 
    },
    {id: '5',
    name: 'Autitos de madera',
    price: 2000,
    category: 'Juguetes',
    img: 'https://images.unsplash.com/photo-1560859251-d563a49c5e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwzfHxiYWJ5JTIwdG95c3xlbnwwfHx8fDE3MDA4NzgwODB8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 6,
    description: 'Pack de 5 autos de carrera de colores variados' 
    },
    {id: '6',
    name: 'Xilofon',
    price: 21000,
    category: 'Juguetes',
    img: 'https://images.unsplash.com/photo-1504484656217-38f8ffc617f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxMHx8YmFieSUyMHRveXN8ZW58MHx8fHwxNzAwODc4MDgwfDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 17,
    description: 'Xilofón multicolor' 
    },
    {id: '7',
    name: 'Enhebrado circular',
    price: 8000,
    category: 'Juguetes',
    img: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw1fHxiYWJ5JTIwdG95c3xlbnwwfHx8fDE3MDA4NzgwODB8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 6,
    description: 'Juguete didáctico enhebrado de madera' 
    },
    {id: '8',
    name: 'Moisés',
    price: 185300,
    category: 'Cunas',
    img: 'https://images.unsplash.com/photo-1513043521002-825353916813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxMHx8JTIwY3JpYnN8ZW58MHx8fHwxNzAwODc4NzQyfDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 7,
    description: 'Moisés gris con corona' 
    },
    {id: '9',
    name: 'Cuna de madera',
    price: 285300,
    category: 'Cunas',
    img: 'https://images.unsplash.com/photo-1587150759783-3e7ba24b8dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwyfHwlMjBjcmlic3xlbnwwfHx8fDE3MDA4Nzg3NDJ8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 15,
    description: 'Cuna blanca de madera con cajonera' 
    },
    {id: '10',
    name: 'Moisés de mimbre',
    price: 170000,
    category: 'Cunas',
    img: 'https://images.unsplash.com/photo-1618480723456-3f86e092e064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw1fHxjcmFkbGV8ZW58MHx8fHwxNzAwODc5MDU4fDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 10,
    description: 'Moisés de mimbre con chichonera' 
    },
    {id: '11',
    name: 'Cuchara y plato',
    price: 8500,
    category: 'Alimentacion',
    img: 'https://images.unsplash.com/photo-1544829832-c8047d6b9d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw5fHwlMjBiYWJ5JTIwYm90dGxlfGVufDB8fHx8MTcwMDg3OTMwOHww&ixlib=rb-4.0.3&q=80&w=400',
    stock: 22,
    description: 'Kit de cuchara y plato de bebé libre de BPA' 
    },
    {id: '12',
    name: 'Chupete anatómico',
    price: 10500,
    category: 'Alimentacion',
    img: 'https://images.unsplash.com/photo-1597178938674-c4660b8843c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw4fHwlMjBiYWJ5JTIwYm90dGxlfGVufDB8fHx8MTcwMDg3OTMwOHww&ixlib=rb-4.0.3&q=400',
    stock: 11,
    description: 'Chupete anatómico Avent' 
    },
    {id: '13',
    name: 'Mamadera 0+',
    price: 7500,
    category: 'Alimentacion',
    img: 'https://images.unsplash.com/photo-1623707430616-d9f956bcac2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxfHwlMjBiYWJ5JTIwYm90dGxlfGVufDB8fHx8MTcwMDg3OTMwOHww&ixlib=rb-4.0.3&q=808',
    stock: 20,
    description: 'Mamadera Avent para recién nacido flujo lento' 
    },
    {id: '14',
    name: 'Coche paraguita',
    price: 190000,
    category: 'Coches',
    img: 'https://images.unsplash.com/photo-1539893147390-a9c1d69f00be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwyfHxzdHJvbGxlcnxlbnwwfHx8fDE3MDA4ODAwMzN8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 9,
    description: 'Coche de acero reforzado plegable' 
    },
    {id: '15',
    name: 'Coche reclinable',
    price: 220000,
    category: 'Coches',
    img: 'https://images.unsplash.com/photo-1559135141-2bea6465fccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwzfHxzdHJvbGxlcnxlbnwwfHx8fDE3MDA4ODAwMzN8MA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 8,
    description: 'Coche totalmente reclinable azul y rojo' 
    },
    {id: '16',
    name: 'Coche con capota',
    price: 300000,
    category: 'Coches',
    img: 'https://images.unsplash.com/photo-1579958217571-e83388321db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxMHx8c3Ryb2xsZXJ8ZW58MHx8fHwxNzAwODgwMDMzfDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 3,
    description: 'Coche con capota y moisés desmontable' 
    },
    {id: '17',
    name: 'Body blanco',
    price: 3000,
    category: 'Indumentaria',
    img: 'https://images.unsplash.com/photo-1622290291165-d341f1938b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2xvdGhlc3xlbnwwfHx8fDE3MDA4ODA3Nzd8MA&ixlib=rb-4.0.3&q=80&w',
    stock: 3,
    description: 'Body blanco manga corta algodón' 
    },
    {id: '18',
    name: 'Enterito estampado',
    price: 8000,
    category: 'Indumentaria',
    img: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw0fHxiYWJ5JTIwY2xvdGhlc3xlbnwwfHx8fDE3MDA4ODA3Nzd8MA&ixlib=rb-4.0.3&q=80&w',
    stock: 8,
    description: 'Enterito con cierre adelante manga larga' 
    },
    {id: '19',
    name: 'Bodys manga corta',
    price: 18000,
    category: 'Indumentaria',
    img: 'https://images.unsplash.com/photo-1569974641446-22542de88536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHw1fHxiYWJ5JTIwY2xvdGhlc3xlbnwwfHx8fDE3MDA4ODA3Nzd8MA&ixlib=rb-4.0.3&q=80&w',
    stock: 3,
    description: 'Pack de 3 bodys de algodón unisex' 
    },
    {id: '20',
    name: 'Enterito abrigado',
    price: 9600,
    category: 'Indumentaria',
    img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjgxODZ8MHwxfHNlYXJjaHwxMHx8YmFieSUyMGNsb3RoZXN8ZW58MHx8fHwxNzAwODgwNzc3fDA&ixlib=rb-4.0.3&q=80&w=400',
    stock: 5,
    description: 'Enterito marrón de polar con orejas de osito' 
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (itemId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500 )
    })

}