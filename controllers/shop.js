const Product = require('../models/Product');


exports.getShop = (req, res, next) =>{
    Product.findAll()
    .then(products=>{
        res.render('shop/shop',{
            pageTitle: 'Shop',
            pageHeader: 'Shop',
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
                pageHeader: "Result for: "+search.charAt(0).toUpperCase() + search.slice(1),
                pageTitle: "Shop",
                products: searched,
                cartCount: 5,
                productAmount: searched.length
            })
        }).catch(error => console.log('not good'));
    
    }
 
}