import app from "./App.module.css";
function App() {
  return (
    <div className={app.mainlayout}>
      <div className={`${app.mainpanel}`}>total</div>
      <div className={app.horizontalpanel}>
        <button className={app.button}>C</button>
        <button className={app.button}>+/-</button>
        <button className={app.button}>%</button>
        <button className={app.button}>/</button>
      </div>
      <div className={app.horizontalpanel}>
        <button className={app.button}>7</button>
        <button className={app.button}>8</button>
        <button className={app.button}>9</button>
        <button className={app.button}>*</button>
      </div>
      <div className={app.horizontalpanel}>
        <button className={app.button}>4</button>
        <button className={app.button}>5</button>
        <button className={app.button}>6</button>
        <button className={app.button}>-</button>
      </div>
      <div className={app.horizontalpanel}>
        <button className={app.button}>1</button>
        <button className={app.button}>2</button>
        <button className={app.button}>3</button>
        <button className={app.button}>+</button>
      </div>
      <div className={app.horizontalpanel}>
        <button className={app.zero}>0</button>
        <button className={app.button}>.</button>
        <button className={app.button}>=</button>
      </div>
    </div>
  );
}

export default App;
