import React from "react";
import whatsappIcon from "../../Images/whatsapp/whatsp.png";


const WhatsAppButton = () => {
  const phoneNumber = "+919415174046";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      className="btn btn-primary fixed-bottom fixed-end m-4"
      onClick={handleClick}
      style={{
        width: "50px",
        height: "50px",
        backgroundImage: `url(${whatsappIcon})`,
        backgroundSize: "cover",
      }}
    ></button>
  );
};

export default WhatsAppButton;
