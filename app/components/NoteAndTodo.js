import React, { useState, useEffect } from "react";
import NoteBlock from "./NoteBlock";
import TodoList from "./TodoList";
import styles from "./NoteAndTodo.module.css"; // Importando os estilos

const NoteAndTodo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Estado para verificar se é dispositivo móvel

  useEffect(() => {
    // Verifica se a largura da janela é menor que 768px
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Chama a função checkMobile quando o componente é montado
    checkMobile();

    // Adiciona um listener para o evento de redimensionamento da janela
    window.addEventListener("resize", checkMobile);

    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const containerStyle = {
    transform: isVisible ? "translate(-50%, -50%)" : "translate(-50%, -100%)",
    transition: "transform 0.3s ease",
  };

  return (
    <>
      {isVisible && (
        <div className={`${styles.container}`} style={containerStyle}>
          {!isMobile && ( // Renderiza o NoteBlock apenas se não for dispositivo móvel
            <div
              style={{
                width: "380px",
                height: "650px",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <NoteBlock />
            </div>
          )}
          <div
            style={{
              width: "380px",
              height: "650px",
              padding: "10px",
            }}
          >
            <TodoList />
          </div>
          <button
            onClick={toggleVisibility}
            className={`${styles.closeButton}`}
            style={{
              padding: "10px 15px",
              fontSize: "15px",
            }}
          >
            Close
          </button>
        </div>
      )}
      {!isVisible && (
        <button onClick={toggleVisibility} className={`${styles.button}`}>
          To-Do-List
        </button>
      )}
    </>
  );
};

export default NoteAndTodo;
