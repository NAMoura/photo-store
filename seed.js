const Stripe = require('stripe')
const products = require ('./products')


const stripe = Stripe('process.env.STRIPE_SECRET_KEY');


//verify stripe API docs for node.js
(async () => {
    for(const product of products){
        await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price,
            },
            images: [product.image],
          });
    }   
})()

//run node seed.js