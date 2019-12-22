import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./navigation";

import "./../sass/style.scss"; // adres do głównego pliku SASS

// import img from '../images/cat.jpg';

class App extends React.Component {
  render() {
    return <Navigation />;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById("app")
  );
});
