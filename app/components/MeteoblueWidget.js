// MeteoblueWidget.js
import React from "react";
import styles from "./MeteoblueWidget.module.css"; // Importando o arquivo CSS como um módulo

const MeteoblueWidget = () => {
  return (
    <div className={styles.widgetContainer}>
      <iframe
        src="https://www.meteoblue.com/pt/tempo/widget/three?geoloc=detect&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=black"
        frameBorder="0"
        scrolling="NO"
        allowTransparency="true"
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
      <div>
        {/* DO NOT REMOVE THIS LINK */}
        <a
          href="https://www.meteoblue.com/pt/tempo/semana/index?utm_source=weather_widget&utm_medium=linkus&utm_content=three&utm_campaign=Weather%2BWidget"
          target="_blank"
          rel="noopener"
        ></a>
      </div>
    </div>
  );
};

export default MeteoblueWidget;
