import {faker} from '@faker-js/faker'
import {Router} from 'express'
import {Product} from '../../types'

const router = Router();

router.get('/', async (req,res)=>{
  const inputs = [
    {
      label:'Nombre',
      id:'name',
      name:'name',
      placeholder:'Globo terráqueo',
      required:true,
      type:'text'
    },
    {
      label:'Precio',
      id:'price',
      name:'price',
      placeholder:'345.67',
      required:true,
      type:'number',
      step:'0.01'
    },
    {
      label:'Imagen',
      id:'thumbnail',
      name:'thumbnail',
      placeholder:'cdn3.iconfinder.com/icon.png',
      required:true,
      type:'text'
    },
  ]
  const table_headers = ['Imagen','Nombre','Precio'];

  const products = [] as Product[];
  
  res.render('index',{
    inputs,
    table_headers,
    products
  })
})

router.get("/api/product_test", (req, res) => {

    const products = [];
    const table_headers = ['Imagen','Nombre','Precio'];

    for (let i = 0; i < 5; i++) {
        products.push({
            id: i,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.abstract(100,100,true),
        });
    }
    res.render('listProducts.pug', { products, table_headers })
});

export default router;