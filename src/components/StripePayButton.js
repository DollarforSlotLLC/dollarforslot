import { loadStripe } from "@stripe/stripe-js";

// TEMP DEV MODE: Hardcoded test key (do not use in production)
const stripePromise = loadStripe("pk_test_51RZJc6Ej65vMkhZL37huCvyA77Zwe0JYru9eU81IrKi3U0TEutaOjeAaUP6Fkg7BbOHh1K0pRFVfGUQaRAJDfc0I00ADOlPx0c");

export default function StripePayButton({ priceId }) {
  const handleClick = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("❌ Stripe failed to initialize.");
      alert("Stripe is not configured correctly. Please try again later.");
      return;
    }

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    const session = await response.json();
    console.log("✅ Stripe session created:", session);

    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error("❌ Stripe redirect error:", result.error.message);
      alert(result.error.message);
    }
  };

  return <button onClick={handleClick}>Enter Now</button>;
}
