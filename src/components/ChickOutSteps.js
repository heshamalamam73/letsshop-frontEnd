import React from "react";

function ChickOutSteps(props) {
  return (
    <div className="checkout-steps ">
      <div className={props.step1 ? "active" : ""}>signin</div>
      <div className={props.step2 ? "active" : ""}>shipping</div>
      <div className={props.step3 ? "active" : ""}>payment</div>
      <div className={props.step4 ? "active" : ""}>place order</div>
    </div>
  );
}

export default ChickOutSteps;
