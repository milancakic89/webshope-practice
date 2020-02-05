const Product = require('../models/Product');


exports.getShop = (req, res, next) =>{
    Product.findAll()
    .then(products=>{
        res.render('shop/shop',{
            pageTitle: 'Shop',
            pageHeader: 'Welcome to Shop',
            products: products,
            productAmount: products.length,
            cartCount: 0
        })
    })
    .catch(error=>{
        console.log('not going good');
    })
   
} 
exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        pageHeader: "Shop Cart",
        pageTitle: "Cart",
        cartCount: 5
    })
}
exports.postShop=(req,res,next)=>{
    const search = req.body.category;
    if(search === "All"){
        res.redirect('/');
    }else{

        Product.findAll({where:{category: search}})
        .then(searched=>{
            res.render('shop/shop',{
                pageHeader: "Shop Cart",
                pageTitle: "Cart",
                products: searched,
                cartCount: 5,
                productAmount: searched.length
            })
        }).catch(error => console.log('not good'));
    
    }
 
}