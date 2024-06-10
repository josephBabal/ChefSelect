import styles from "./infoCard.module.css";

type InfoCardProps = {
  title: string;
  description: string;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`${styles.card} flex-col`}>
      <p className="title-text-color text-md-sm semi-bold"> {title} </p>
      <p> {description} </p>
    </div>
  );
};

export default InfoCard;
