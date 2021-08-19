import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };
  onSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID GNh0l931hezhme9O79CbYXedeV8cilTCQ1PLsRrCnsg",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <h4>Found: {this.state.images.length} images.</h4>
      </div>
    );
  }
}

export default App;
