import React from "react";
import StripePayButton from "../components/StripePayButton";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Dollar For Slot</h1>
      <p>Enter to win real money sweepstakes!</p>

      <h2>$10,000 Prize Pool</h2>
      <StripePayButton priceId="price_1RZKMlEj65vMkhZLG6WprMVj" />

      <h2>$100,000 Prize Pool</h2>
      <StripePayButton priceId="price_1RZKMxEj65vMkhZLtTDjutV1" />

      <h2>$1,000,000 Prize Pool</h2>
      <StripePayButton priceId="price_1RZKN9Ej65vMkhZL7A7bcZd9" />
    </div>
  );
}