import {useState} from "react"
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const [color, setColor] = useState("#F397D6");

  const COLOR = [
    "#B8B8F3",
    "#D7B8F3",
    "#F397D6",
    "#F42272",
    "#232E21",
    "#000000",
    "#D2691E",
    "#228B22",
    "#0000CD",
    "#FFC0CB",
    "#FF6347",
    "#FF0000"
  ]

  const changeColor = () => {
    let randNum = Math.floor(Math.random() * COLOR.length);
    console.log(randNum)
    let color = COLOR[randNum];

    localStorage.setItem("color", color);
    setColor(color);
  }


  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="main">
      <div className="centre">
            <h2>
              <a className="social" href="https://munnaportfolio.ml/">Munna Kumar</a>
              <a className="social" href="https://www.facebook.com/Munnakumar27" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
              <a className="social" href="https://www.linkedin.com/in/munnakumar27/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
              <a className="social" href="https://www.instagram.com/munnakumar_27/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
              <a className="social" href="https://github.com/MunnaKumar27"><i class="bi bi-github" target="_blank"></i></a>
            </h2>
        </div>
        <div className="bg-color">
          <h1>Background Color: {color}</h1>
        </div>
        <div className="button" onClick={()=>changeColor()}>
          Click me
        </div>
      </div>
    </div>
  );
}

export default App;