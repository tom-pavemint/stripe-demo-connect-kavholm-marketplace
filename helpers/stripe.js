import stripeNode from 'stripe';

const env = require('dotenv').config({path: './.env'});

const stripe = stripeNode(process.env.STRIPE_SECRET_KEY);

export default stripe;
