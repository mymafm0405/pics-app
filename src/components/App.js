import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImagesList from "./ImagesList";

class App extends React.Component {
  state = { images: [], status: "" };
  onSubmit = async (term) => {
    this.setState({ status: "Loading..." });
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results, status: "" });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.status.length === 0 ? (
          <ImagesList images={this.state.images} />
        ) : (
          <div>{this.state.status}</div>
        )}
      </div>
    );
  }
}

export default App;
