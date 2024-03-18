"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Clock from "../app/components/Clock";
import DateDisplay from "./components/DateDisplay";
import Icon1 from "../app/icons/icon1.svg";
import Icon2 from "../app/icons/icon2.svg";
import Icon3 from "../app/icons/icon3.svg";
import Icon4 from "../app/icons/icon4.svg";
import Icon5 from "../app/icons/icon5.svg";
import Icon6 from "../app/icons/icon6.svg";
import EditIcon from "../app/icons/EditIcon.svg"; // Importa o ícone SVG de edição
import MeteoblueWidget from "./components/MeteoblueWidget";
import SpotifyEmbed from "./components/SpotifyEmbed";
import BackgroundManager from "./components/BackgroundManager";
import EnterIcon from "../app/icons/EnterIcon.svg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [icon1Url, setIcon1Url] = useState("https://www.example1.com");
  const [icon2Url, setIcon2Url] = useState("https://www.example2.com");
  const [icon3Url, setIcon3Url] = useState("https://www.example3.com");
  const [icon4Url, setIcon4Url] = useState("https://www.example4.com");
  const [icon5Url, setIcon5Url] = useState("https://www.example5.com");
  const [icon6Url, setIcon6Url] = useState("https://www.example6.com");
  const [showIcon1Input, setShowIcon1Input] = useState(true);
  const [showIcon2Input, setShowIcon2Input] = useState(true);
  const [showIcon3Input, setShowIcon3Input] = useState(true);
  const [showIcon4Input, setShowIcon4Input] = useState(true);
  const [showIcon5Input, setShowIcon5Input] = useState(true);
  const [showIcon6Input, setShowIcon6Input] = useState(true);

  // Carregar os links e o estado de visibilidade do localStorage quando a página é carregada
  useEffect(() => {
    const storedIcon1Url = localStorage.getItem("icon1Url");
    const storedIcon2Url = localStorage.getItem("icon2Url");
    const storedIcon3Url = localStorage.getItem("icon3Url");
    const storedIcon4Url = localStorage.getItem("icon4Url");
    const storedIcon5Url = localStorage.getItem("icon5Url");
    const storedIcon6Url = localStorage.getItem("icon6Url");

    const showIcon1Input =
      localStorage.getItem("showIcon1Input") === "false" ? false : true;
    const showIcon2Input =
      localStorage.getItem("showIcon2Input") === "false" ? false : true;
    const showIcon3Input =
      localStorage.getItem("showIcon3Input") === "false" ? false : true;
    const showIcon4Input =
      localStorage.getItem("showIcon4Input") === "false" ? false : true;
    const showIcon5Input =
      localStorage.getItem("showIcon5Input") === "false" ? false : true;
    const showIcon6Input =
      localStorage.getItem("showIcon6Input") === "false" ? false : true;

    if (storedIcon1Url) setIcon1Url(storedIcon1Url);
    if (storedIcon2Url) setIcon2Url(storedIcon2Url);
    if (storedIcon3Url) setIcon3Url(storedIcon3Url);
    if (storedIcon4Url) setIcon4Url(storedIcon4Url);
    if (storedIcon5Url) setIcon5Url(storedIcon5Url);
    if (storedIcon6Url) setIcon6Url(storedIcon6Url);

    setShowIcon1Input(showIcon1Input);
    setShowIcon2Input(showIcon2Input);
    setShowIcon3Input(showIcon3Input);
    setShowIcon4Input(showIcon4Input);
    setShowIcon5Input(showIcon5Input);
    setShowIcon6Input(showIcon6Input);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}`;
    window.open(searchUrl, "_blank");
    setSearchTerm("");
  };

  const handleIconUrlChange = (setIconUrl, event) => {
    setIconUrl(event.target.value);
  };

  const handleKeyPress = (event, setShowInput, inputName) => {
    if (event.key === "Enter") {
      setShowInput(false);
      // Salvar o estado de visibilidade no localStorage
      // Salvar os links no localStorage
      localStorage.setItem("icon1Url", icon1Url);
      localStorage.setItem("icon2Url", icon2Url);
      localStorage.setItem("icon3Url", icon3Url);
      localStorage.setItem("icon4Url", icon4Url);
      localStorage.setItem("icon5Url", icon5Url);
      localStorage.setItem("icon6Url", icon6Url);
      localStorage.setItem(inputName, "false");
    }
  };

  const reopenInput = (setShowInput, inputName) => {
    setShowInput(true);
    // Atualizar o estado de visibilidade no localStorage
    localStorage.setItem(inputName, "true");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search on Google"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
        <div className="buttonContainer">
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
          <button
            type="button"
            className={styles.searchButton}
            onClick={() => window.open("https://chat.openai.com/", "_blank")}
          >
            ChatGPT
          </button>
        </div>
      </form>
      <div className={styles.iconContainer}>
        {[
          {
            icon: Icon1,
            url: icon1Url,
            setUrl: setIcon1Url,
            showInput: showIcon1Input,
            setShowInput: setShowIcon1Input,
            inputName: "showIcon1Input",
          },
          {
            icon: Icon2,
            url: icon2Url,
            setUrl: setIcon2Url,
            showInput: showIcon2Input,
            setShowInput: setShowIcon2Input,
            inputName: "showIcon2Input",
          },
          {
            icon: Icon3,
            url: icon3Url,
            setUrl: setIcon3Url,
            showInput: showIcon3Input,
            setShowInput: setShowIcon3Input,
            inputName: "showIcon3Input",
          },
          {
            icon: Icon4,
            url: icon4Url,
            setUrl: setIcon4Url,
            showInput: showIcon4Input,
            setShowInput: setShowIcon4Input,
            inputName: "showIcon4Input",
          },
          {
            icon: Icon5,
            url: icon5Url,
            setUrl: setIcon5Url,
            showInput: showIcon5Input,
            setShowInput: setShowIcon5Input,
            inputName: "showIcon5Input",
          },
        ].map((iconData, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <a href={iconData.url} target="_blank" rel="noopener noreferrer">
              <iconData.icon className={styles.icon} />
            </a>
            {iconData.showInput && (
              <div className={styles.inputWithIcon}>
                <input
                  type="text"
                  placeholder={`Enter new URL for Icon ${index + 1}`}
                  value={iconData.url}
                  onChange={(event) =>
                    handleIconUrlChange(iconData.setUrl, event)
                  }
                  onKeyPress={(event) =>
                    handleKeyPress(
                      event,
                      iconData.setShowInput,
                      iconData.inputName
                    )
                  }
                  className={`${styles.iconInput} ${styles.roundedInput}`}
                />
                <span
                  onClick={() => {
                    // Simula a pressão da tecla "Enter"
                    const fakeEvent = {
                      key: "Enter",
                      preventDefault: () => {}, // Função vazia para evitar erros
                    };
                    handleKeyPress(
                      fakeEvent,
                      iconData.setShowInput,
                      iconData.inputName
                    );
                  }}
                  className={styles.enterIconWrapper} // Utiliza a classe existente para estilizar o wrapper
                >
                  <EnterIcon className={styles.enterIcon} />{" "}
                  {/* Adicione o ícone "Enter" */}
                </span>
              </div>
            )}

            {!iconData.showInput && (
              <EditIcon
                onClick={() =>
                  reopenInput(iconData.setShowInput, iconData.inputName)
                }
                className={styles.editIcon}
              />
            )}
          </div>
        ))}
      </div>
      <Clock />
      <DateDisplay />
      <MeteoblueWidget />
      <SpotifyEmbed />
      <BackgroundManager />
    </div>
  );
};

export default Home;
