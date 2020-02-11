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
    const product = new Product({
        title: title,
        category: category,
        imageUrl: imageUrl,
        price: price,
        description: description
    });

    product.save()
    res.redirect('/');
  

}

exports.getEditProducts = (req, res, next)=>{
    Product.find()
    .then(products=>{
        res.render('admin/edit-products',{
            pageTitle: 'Edit Products',
            pageHeader: 'Edit Products',
            products: products,
            productAmount: products.length,
            cartCount: 0
        })
    })
    .catch(error=>{
       // console.log('not going good');
    })

}

exports.getEditSingle = (req, res, next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .then(product=>{
        res.render('admin/edit-single',{
            pageTitle: 'Edit Product',
            pageHeader: 'Edit Product',
            product: product,
            productAmount: 5,
            cartCount: 0
        })
    })
    .catch(error=>console.log("not have id: "+ id));
}
exports.postUpdateSingle = (req, res, next)=>{
    const id = req.body.productId;
    const title = req.body.title;
    const category = req.body.category;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.findById(id)
    .then(product=>{
       product.title = title;
       product.category = category;
       product.imageUrl = imageUrl;
       product.price = price;
       product.description = description;
       product.save();
       res.redirect('/edit-products');
    })
    .catch(error=>console.log("not have id: "+ id));
}
