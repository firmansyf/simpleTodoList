import "./App.css";
import { useState } from "react";

const Mode = () => {
  const handleClick = () => {
    // console.log("click");

    const nameMode = document.getElementsByClassName("nameMode")[0];
    const mode = document.getElementsByTagName("div")[1];
    const mode2 = mode.classList.toggle("section");

    // console.log(nameMode);
    if (mode2) {
      return (nameMode.innerHTML = "Light");
    } else {
      return (nameMode.innerHTML = "Dark");
    }
  };

  return (
    <div className="mode" onClick={handleClick}>
      <p className="nameMode">Dark</p>
    </div>
  );
};

const Header = ({ title }) => {
  return <h1 className="header"> {title} </h1>;
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
        <button> Tambah </button>
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
                Clear
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
        <Header title="Apa yang ingin anda lakukan ?" />
        <TasksApp />
        <Mode />
      </div>
    </div>
  );
}

export default App;
