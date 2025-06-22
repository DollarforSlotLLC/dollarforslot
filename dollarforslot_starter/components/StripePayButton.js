import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_REPLACE_WITH_YOUR_KEY");

export default function StripePayButton({ priceId, label }) {
  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });

    const session = await response.json();
    if (session.id) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return <button onClick={handleClick}>{label}</button>;
}
