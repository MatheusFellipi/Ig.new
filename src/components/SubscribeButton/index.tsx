import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStriperJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";
interface SubscriberButtonProps {
  priceId: string;
}
export function SubscriberButton({ priceId }: SubscriberButtonProps) {
  const [session] = useSession();
  const router = useRouter();
  async function handleSubscriber() {
    console.log(session);

    if (!session) {
      signIn("github");
      return;
    }

    if (session.userActiveSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("/createchecksessionsubscribe");

      const { sessionId } = response.data;
      console.log(sessionId);

      const stripe = await getStriperJs();
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <button
      type="button"
      onClick={handleSubscriber}
      className={styles.subscriberButton}
    >
      Subscriber now
    </button>
  );
}
