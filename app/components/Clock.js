import styles from "./newClock.module.css"; // Certifique-se de que o caminho do arquivo CSS está correto

const Clock = () => {
  return (
    <div className={styles.clockContainer}>
      <iframe
        src="https://widgets.commoninja.com/iframe/ba47e24e-fbbe-4956-8d54-f325d0ce2b09"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Clock;
