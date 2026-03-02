import { useCheckout } from "../check-in-out/useCheckout";
import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      {isCheckingOut ? "Checking out..." : "Check out"}
    </Button>
  );
}

export default CheckoutButton;