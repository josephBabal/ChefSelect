import OrderSummaryItem from "./order-summary-item/OrderSummaryItem";
import styles from "./orderSummary.module.css";

type OrderSummaryProps = {
  pricePerServing: string;
  totalPrice: string;
};

const OrderSummary = ({ pricePerServing, totalPrice }: OrderSummaryProps) => {
  return (
    <div className={styles.container}>
      <p className="bold title-text-color"> Order summary </p>

      <OrderSummaryItem label="Price per serving" value={pricePerServing} />
      <OrderSummaryItem label="Total price" value={totalPrice} />
    </div>
  );
};

export default OrderSummary;
