import "./App.css";
import { useState } from "react";
import Add from "./assets/plus.png";
import Trash from "./assets/trash.png";
import dark from "./assets/sun.png";
import sun from "./assets/sun-1.png";

const Mode = () => {
  const handleClick = () => {
    // console.log("click");

    const nameMode = document.getElementsByClassName("nameMode")[0];
    const mode = document.getElementsByTagName("div")[1];
    const mode2 = mode.classList.toggle("section");

    // console.log(nameMode);
    if (mode2) {
      return (nameMode.innerHTML = `<img src=${sun} />`);
    } else {
      return (nameMode.innerHTML = `<img src=${dark} />`);
    }
  };

  return (
    <div className="mode" onClick={handleClick}>
      <p className="nameMode">
        <img src={dark} alt="drakmode" />
      </p>
    </div>
  );
};

const Header = () => {
  const nama = prompt("your name?");

  return (
    <h1 className="header">
      {" "}
      {nama
        ? `Apa yang ingin anda lakukan ${nama} ?`
        : "Apa yang ingin anda lakukan"}{" "}
    </h1>
  );
};

const TasksApp = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();

    setItems([...items, value]);
    setValue("");
  };

  return (
    <>
      {" "}
      {items <= 1 ? (
        ""
      ) : (
        <p className="notif">
          {" "}
          Ada <strong style={{ color: "red" }}>{items.length}</strong> tasks
          yang belum anda selesaikan
        </p>
      )}
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={value}
          placeholder="selesaikan"
          required
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>
          {" "}
          <img src={Add} width={45} alt="Add" />{" "}
        </button>
      </form>
      {items.map((item, index) => {
        return (
          <>
            <div className="section-tasks">
              <span key={index}> {item} </span>

              <button
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setItems(
                    items.filter((_, filterindex) => filterindex !== index),
                  )
                }
              >
                {" "}
                <img src={Trash} width={25} alt="Trash" />
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <TasksApp />
        <Mode />
      </div>
    </div>
  );
}

export default App;
