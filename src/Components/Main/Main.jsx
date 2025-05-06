import React, { useState } from "react";
import "./Main.css";

function Main() {
  // Bu yerda vazifalar ro'yxatini saqlash uchun useState hookidan foydalanamiz
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Bu yerda vazifani kiritish funksiyasi
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Bu yerda vazifani qo'shish funksiyasi
  const addTask = () => {
    if (inputValue.trim() === "") return; // Bo‘sh qiymatni blok qilish
    setTasks([...tasks, inputValue]); // Yangi vazifani ro‘yxatga qo‘shish
    setInputValue(""); // Input maydonini tozalash
  };

  // O'chirish funksiyasi
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Tanlangan indexdagi vazifani o'chirish
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-container">
          <div className="main-container-left">
            <h1 className="main-title">Vazifalaringizni kiriting!</h1>

            <span>
              <input
                value={inputValue}
                className="main-input"
                type="text"
                placeholder="Vazifa kiritish"
                onChange={handleChange}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
              />

              <button className="main-btn" onClick={addTask}>
                Qo'shish
              </button>
            </span>


            <ul className="main-list">
                {/* Bu yerda har bir vazifani ro'yxatga chiqaramiz */}
              {tasks.map((task, index) => (
                // Har bir vazifani ro'yxatga chiqaramiz
                <li className="main-item" key={index}>
                  {task}

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}>

                    O‘chirish

                  </button>
                </li>
              ))}

            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
