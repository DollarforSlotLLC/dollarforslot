import StripePayButton from '../components/StripePayButton';

export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Dollar for Slot</h1>
      <p>Select a pool to enter:</p>
      <StripePayButton priceId="price_1RZKMlEj65vMkhZLG6WprMVj" label="$10,000 Pool" />
      <br /><br />
      <StripePayButton priceId="price_1RZKMxEj65vMkhZLtTDjutV1" label="$100,000 Pool" />
      <br /><br />
      <StripePayButton priceId="price_1RZKN9Ej65vMkhZL7A7bcZd9" label="$1,000,000 Pool" />
    </div>
  );
}
