import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImagesList from "./ImagesList";

class App extends React.Component {
  state = { images: [] };
  onSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
