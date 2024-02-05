type Props = {
  circleColor: string;
  title: string;
  desc: string;
};

const DashboardCard = ({ circleColor, title, desc }: Props) => {
  return (
    <div className="flex card">
      <div className={`bg-${circleColor} flex circle-icon`}>
        <i className="bx bx-receipt"></i>
      </div>

      <div className="card-text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
