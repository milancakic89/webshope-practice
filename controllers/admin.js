const Product = require('../models/Product');

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        pageHeader: 'Add Product',
        cartCount: 5
    })
}
exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title;
    const category = req.body.category;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.create({
        title: title,
        category: category,
        imageUrl: imageUrl,
        price: price,
        description: description

    })
    .then(result=>{
       res.redirect('/');
        console.log('added to database')
    }).catch(error=>{
        console.log('failed');
        console.log(error);
    });
}