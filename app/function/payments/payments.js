class Payments {
    constructor() {
        this.paymentProvider = null;
    }

    set paymentProvider(provider) {
        this.paymentProvider = provider;
    }

    get payentProvider() {
        return this.paymentProvider;
    }

    takePayment(amount) {
        return {'Payment of ${amount} taken'}
    }
}
