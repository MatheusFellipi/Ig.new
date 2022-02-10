import { loadStripe } from "@stripe/stripe-js";

export async function getStriperJs() {
  const striperJs = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPER_PUBLIC_KEY
  );
  return striperJs;
}
