import React, { useState, useEffect } from "react";
import styles from "./BackgroundManager.module.css";

const BackgroundManager = () => {
  const [background, setBackground] = useState("");
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Recupera o background armazenado em localStorage ou usa o padrão
      const storedBackground = localStorage.getItem("background") || "bg1.jpg";
      setBackground(storedBackground);

      // Aplica o background ao body do documento imediatamente após ser recuperado
      applyBackground(storedBackground);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Armazena o background selecionado em localStorage
      localStorage.setItem("background", background);

      // Aplica o background ao body do documento
      applyBackground(background);
    }
  }, [background]);

  const applyBackground = (bg) => {
    if (bg.startsWith("#")) {
      document.body.style.backgroundColor = bg;
      document.body.style.backgroundImage = "none";
    } else if (bg === "Wallpaper Padrão") {
      document.body.style.backgroundImage = `url(/default-wallpaper.jpg)`;
      document.body.style.backgroundColor = "transparent";
    } else if (bg === "bg2.jpg") {
      document.body.style.backgroundImage = `url(/bg2.jpg)`;
      document.body.style.backgroundColor = "transparent";
    } else if (bg === "bg3.jpg") {
      document.body.style.backgroundImage = `url(/bg3.jpg)`;
      document.body.style.backgroundColor = "transparent";
    } else {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundColor = "transparent";
    }
  };

  const backgrounds = [
    "Wallpaper Padrão",
    "#d3d3d3",
    "#FFDAB9",
    "#f0f0f0",
    "#add8e6",
    "#F5F5DC",
    "#87CEEB",
    "#3CB371",
  ];

  return (
    <div
      style={{ position: "fixed", bottom: "70px", right: "20px", zIndex: 1000 }}
    >
      {!showImages && (
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-edit-2'%3E%3Cpath d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'/%3E%3C/svg%3E"
          alt="Personalize"
          className={styles.editIcon}
          onClick={() => setShowImages(true)}
        />
      )}

      {showImages && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "5px",
            borderRadius: "20px",
            opacity: showImages ? 1 : 0,
            transform: showImages ? "scale(1)" : "scale(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: 10,
              marginRight: 20,
              display: "grid",
              marginLeft: -50,
              gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
              gap: "20px",
              borderRadius: "5px",
            }}
          >
            {backgrounds.map((bg, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setBackground(bg)}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    backgroundColor:
                      bg === "Wallpaper Padrão" ? "transparent" : bg,
                    backgroundImage:
                      bg === "Wallpaper Padrão"
                        ? `url(https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg)`
                        : bg === "bg2.jpg"
                        ? `url(https://m.media-amazon.com/images/I/71RGoav5XdL._SL1500_.jpg)`
                        : bg === "bg3.jpg"
                        ? `url(https://m.media-amazon.com/images/I/814VxtZJHFL._SL1500_.jpg)`
                        : "none",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    marginLeft: "auto",
                  }}
                ></div>
                <span style={{ color: "white", visibility: "hidden" }}>
                  {bg}
                </span>
              </li>
            ))}
          </ul>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cpath d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E"
            alt="Fechar"
            className={styles.closeIcon}
            onClick={() => setShowImages(false)}
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundManager;
