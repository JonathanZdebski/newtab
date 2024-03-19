import React, { useState } from "react";
import styles from "./MeteoblueWidget.module.css"; // Importando o arquivo CSS como um módulo

const MeteoblueWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.widgetContainer} ${
        isExpanded ? styles.expanded : ""
      }`}
    >
      <iframe
        src="https://www.meteoblue.com/pt/tempo/widget/three?geoloc=detect&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=black"
        frameBorder="0"
        scrolling="NO"
        allowTransparency="true"
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
        style={{
          width: isExpanded ? "30vw" : "100%",
          height: isExpanded ? "60vh" : "100%",
          marginLeft: isExpanded ? "50px" : "0",
          marginTop: isExpanded ? "50px" : "0",
          position: isExpanded ? "fixed" : "static",
          top: isExpanded ? "0" : "auto",
          left: isExpanded ? "0" : "auto",
          zIndex: isExpanded ? "1000" : "auto",
          transform: isExpanded ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      ></iframe>

      <div>
        {/* DO NOT REMOVE THIS LINK */}
        <a
          href="https://www.meteoblue.com/pt/tempo/semana/index?utm_source=weather_widget&utm_medium=linkus&utm_content=three&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener"
        ></a>
      </div>
      <div>
        <button onClick={toggleExpand}>
          {isExpanded ? "Close" : "Expand"}
        </button>
      </div>
    </div>
  );
};

export default MeteoblueWidget;
