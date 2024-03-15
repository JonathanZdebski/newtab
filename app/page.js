"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Importa js-cookie
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

  useEffect(() => {
    // Carregar os links dos cookies
    const storedIcon1Url = Cookies.get("icon1Url");
    const storedIcon2Url = Cookies.get("icon2Url");
    const storedIcon3Url = Cookies.get("icon3Url");
    const storedIcon4Url = Cookies.get("icon4Url");
    const storedIcon5Url = Cookies.get("icon5Url");
    const storedIcon6Url = Cookies.get("icon6Url");

    if (storedIcon1Url) setIcon1Url(storedIcon1Url);
    if (storedIcon2Url) setIcon2Url(storedIcon2Url);
    if (storedIcon3Url) setIcon3Url(storedIcon3Url);
    if (storedIcon4Url) setIcon4Url(storedIcon4Url);
    if (storedIcon5Url) setIcon5Url(storedIcon5Url);
    if (storedIcon6Url) setIcon6Url(storedIcon6Url);
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

    // Salvar os links como cookies
    Cookies.set("icon1Url", icon1Url);
    Cookies.set("icon2Url", icon2Url);
    Cookies.set("icon3Url", icon3Url);
    Cookies.set("icon4Url", icon4Url);
    Cookies.set("icon5Url", icon5Url);
    Cookies.set("icon6Url", icon6Url);
  };

  const handleIconUrlChange = (setIconUrl, event) => {
    setIconUrl(event.target.value);
  };

  const handleKeyPress = (event, setShowInput) => {
    if (event.key === "Enter") {
      setShowInput(false);
    }
  };

  const reopenInput = (setShowInput) => {
    setShowInput(true);
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
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <div className={styles.iconContainer}>
        {[
          {
            icon: Icon1,
            url: icon1Url,
            setUrl: setIcon1Url,
            showInput: showIcon1Input,
            setShowInput: setShowIcon1Input,
          },
          {
            icon: Icon2,
            url: icon2Url,
            setUrl: setIcon2Url,
            showInput: showIcon2Input,
            setShowInput: setShowIcon2Input,
          },
          {
            icon: Icon3,
            url: icon3Url,
            setUrl: setIcon3Url,
            showInput: showIcon3Input,
            setShowInput: setShowIcon3Input,
          },
          {
            icon: Icon4,
            url: icon4Url,
            setUrl: setIcon4Url,
            showInput: showIcon4Input,
            setShowInput: setShowIcon4Input,
          },
          {
            icon: Icon5,
            url: icon5Url,
            setUrl: setIcon5Url,
            showInput: showIcon5Input,
            setShowInput: setShowIcon5Input,
          },
          {
            icon: Icon6,
            url: icon6Url,
            setUrl: setIcon6Url,
            showInput: showIcon6Input,
            setShowInput: setShowIcon6Input,
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
              <input
                type="text"
                placeholder={`Enter new URL for Icon ${index + 1}`}
                value={iconData.url}
                onChange={(event) =>
                  handleIconUrlChange(iconData.setUrl, event)
                }
                onKeyPress={(event) =>
                  handleKeyPress(event, iconData.setShowInput)
                }
                className={`${styles.iconInput} ${styles.roundedInput}`}
              />
            )}
            {!iconData.showInput && (
              <EditIcon
                onClick={() => reopenInput(iconData.setShowInput)}
                className={styles.editIcon}
              />
            )}
          </div>
        ))}
      </div>
      <Clock />
      <DateDisplay />
    </div>
  );
};

export default Home;
