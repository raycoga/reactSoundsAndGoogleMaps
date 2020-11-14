import logo from "./logo.svg";
import "./App.css";
import beepMp3 from "./sounds/tone.wav";
import UIfx from "uifx";
const API_KEY='AIzaSyCoxUG3iO_tHYHg6RcHcJ4YrsE76iv_NSk'
const imagen = [
  {
    id: 1,
    fuente:
    /* `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap` */
      `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Residential Country Villas, Avenida Principal De Las Rosas, Guatire, Miranda, Venezuela"`,
    title: "Google Maps",
  },
];

const bell = new UIfx(beepMp3, {
  //volume:0.2,  number between 0.0 ~ 1.0
  throttleMs: 100,
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <contentBody>
          <button onClick={_ => bell.setVolume(0.9).play()}>Signup</button>
          <googleMaps>
            {/*  Renderizamos el Mapa de Google, dentro de este colocamos cada
            objeto del array 'const imagen' */}
            {imagen.map(item => {
              // Es necesario colocar una 'key' a partir de la versión de React JS 16
              // colocamos el objeto 'id: 1' en <div key={ item.id }

              return (
                <div
                  key={item.id}
              
                >
                  <iframe
                    className="embed-responsive-item"
                    src={item.fuente}
                    title={item.title}
                   style={{width:500,height:500}}
                  />
                </div>
              );
            })}
          </googleMaps>
        </contentBody>
      </header>
    </div>
  );
}

export default App;
