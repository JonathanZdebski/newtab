import React from "react";
import styles from "./SpotifyEmbed.module.css"; // Certifique-se de que o caminho do arquivo CSS está correto

const SpotifyEmbed = () => {
  return (
    <div className={styles.embedContainer}>
      <iframe
        src="https://open.spotify.com/embed/playlist/5V6Cuf5FqRleCdBPudOT7h?utm_source=oembed"
        className={styles.embedIframe}
        allowFullScreen
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
