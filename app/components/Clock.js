import { useState, useEffect } from "react";
import styles from "./Clock.module.css"; // Certifique-se de que o caminho do arquivo CSS está correto

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Inicializa o estado com um valor padrão para evitar discrepâncias
    setTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Sao_Paulo",
      })
    );

    // Define um intervalo para atualizar o estado a cada segundo
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/Sao_Paulo",
        })
      );
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <div>{time}</div>
    </div>
  );
};

export default Clock;
