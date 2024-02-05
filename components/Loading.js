import Lottie from "lottie-react";

const Loading = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="flex loading-bg">
      <Lottie
        animationData={require("../public/animations/animation_lkjoz3n5.json")}
        autoPlay
        loop
        style={{ width: "400px" }}
      />
    </div>
  );
};

export default Loading;
