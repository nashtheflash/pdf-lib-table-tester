'use client';

import React, { useCallback } from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

export function StripePayment({ providerInfo }) {

    const { provider, requestSecret } = providerInfo;
  
    const fetchClientSecret = useCallback(() => {
        return requestSecret();
    }, []);

    const options = {fetchClientSecret};

    return (
        <div id="checkout">
        <EmbeddedCheckoutProvider
            stripe={provider}
            options={options}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
        </div>
    )
}