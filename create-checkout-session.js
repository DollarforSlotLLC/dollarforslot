const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'https://dollarforslot.com/success',
      cancel_url: 'https://dollarforslot.com/cancel',
      metadata: {
        prize_pool:
          priceId === 'price_1RZKMlEj65vMkhZLG6WprMVj'
            ? '10K'
            : priceId === 'price_1RZKMxEj65vMkhZLtTDjutV1'
            ? '100K'
            : priceId === 'price_1RZKN9Ej65vMkhZL7A7bcZd9'
            ? '1M'
            : 'unknown'
      }
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
