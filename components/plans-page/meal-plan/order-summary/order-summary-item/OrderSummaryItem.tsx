import styles from "../orderSummary.module.css";
type OrderSummaryItemProps = {
  label: string;
  value: string;
};

const OrderSummaryItem = ({ label, value }: OrderSummaryItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <p> {label} </p>
      <p className="bold title-text-color"> ${value} </p>
    </div>
  );
};

export default OrderSummaryItem;
