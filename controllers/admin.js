exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        pageHeader: 'Add Product',
        cartCount: 5
    })
}