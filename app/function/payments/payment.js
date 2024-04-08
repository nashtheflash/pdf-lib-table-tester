/**
 * Interface for payments
 * Right now the only provider is strip but others can easily be added
 * 
 */

export class Payment {
    constructor() {
        this.paymentProvider = null;
    }

    get provider() {
        return this.paymentProvider.provider;
    }
    
    get providerInfo() {
        return this.paymentProvider.providerInfo;
    }

    withPaymentProvider(provider) {
        this.paymentProvider = provider;
        return this;
    }
    
    addProducts(products) {
        this.paymentProvider.addProducts(products);
        return this;
    }

    build() {
        return this
    }
};
