import { StripePayment } from './index';
import { Payment } from '../function';
import { Stripe } from '../integrations';

export function PaymentWrapper({ provider, products }) {
    //swap payment providers here
    const paymentProvider = getPaymentProvider(provider);
    
    //create a payment
    const payment = new Payment().withPaymentProvider(paymentProvider).addProducts(products).build();
    const providerInfo = payment.providerInfo;

    //return the model for that provider
    return(
        <div className="card max-w-96 bg-base-100 shadow-xl">
            <div className="card-body pt-0 pb-3 px-2 w-full">
                {
                    provider === 'stripe' ? <StripePayment providerInfo={providerInfo}/> : 'provider not found'
                }
            </div>
        </div>
    )
}

//use this to select the correct provider option
const getPaymentProvider = (provider) => {
    let paymentProvider;

    switch(provider) {
        case 'stripe': paymentProvider = new Stripe();
    }

    return paymentProvider;
}
