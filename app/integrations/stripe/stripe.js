/**
 * Strip payment interface
 * Must add the keys int he .env to use in a diffrent project later
 */

import {loadStripe} from '@stripe/stripe-js';

export class Stripe {
    constructor() {
        this._provider = 'stripe';
        this._stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        this._clientSecret = null;
        this._products = [];
    }

    get provider() {
        return this._stripe;
    }

    
    get options() {
        return () => {
            return fetch("/api/stripe_checkout_session", {
            method: "POST",
            body: JSON.stringify(this._products),
            })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
        }
    }
    
    get providerInfo() {
        return {
            provider: this.provider,
            requestSecret: this.options,
        }
    }
    
    addProducts(products) {
        console.log('addProducts', products)
        this._products = [...this._products, ...products];
        return this;
    }

    build() {
        return this
    }
};