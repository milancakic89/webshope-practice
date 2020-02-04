exports.getShop = (req, res, next) =>{
    res.render('shop/shop',{
        pageTitle: 'Shop',
        pageHeader: 'Welcome to Shop',
        cartCount: 5
    })
} 
exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        pageHeader: "Shop Cart",
        pageTitle: "Cart",
        cartCount: 5
    })
}