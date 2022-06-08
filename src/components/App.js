import React from "react";
import SearchBar from "./SearchBar";
import "../css/MainScreen.css";
class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <SearchBar />
      </div>
    );
  }
}

export default App;
