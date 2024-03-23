import styles from "./newClock.module.css"; // Certifique-se de que o caminho do arquivo CSS está correto
import moment from "moment-timezone";
import { useState, useEffect } from "react";

const Clock = () => {
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const timezoneObject = moment.tz.zone(moment.tz.guess(lat, lon));
          // Extrai o nome do timezone do objeto e define o estado
          setTimezone(timezoneObject.name);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div className={styles.clockContainer}>
      <iframe
        src={`https://widgets.commoninja.com/iframe/ba47e24e-fbbe-4956-8d54-f325d0ce2b09?timezone=${timezone}`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Clock;
