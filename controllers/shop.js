exports.getShop = (req, res, next) =>{
    res.render('shop/shop',{
        pageTitle: 'Shop',
        pageHeader: 'Welcome to Shop'
    })
} 
exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        pageHeader: "Shop Cart",
        pageTitle: "Cart"
    })
}