import { headers } from 'next/headers'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  //Get the header info
  const headersList = headers();
  const origin = headersList.get('origin');

  //get the products that are being sold
  const data = await request.json();
  
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [...data],
      mode: 'payment',
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({clientSecret: session.client_secret})
  
  } catch (err) {
    return Response.json(err.message);
  
  }
}

export async function GET(request) {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
      return Response.json({ status: session.status, customer_email: session.customer_details.email });
    } catch (err) {
      return Response.json(err.message);
  }
}