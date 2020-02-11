const getDb = require('../utils/database').getDb;

class Product{
    constructor(title, category, imageUrl, price, description){
        this.title = title;
        this.category = category;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save(){
        const db = getDb('shop', (result)=>{
            return result;
        });
        db.collection('products').insertOne(this);
            

    }
}


module.exports = Product;