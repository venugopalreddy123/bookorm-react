import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./Api/Youtube";

import { SearchBar, VideoDetails } from "./Components";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAQXgqu1aGD6FhT3Q0OwIbLX3tAKKdfcYQ",
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
              <Grid item xs={8}>
                <VideoDetails video={this.state.selectedVideo} />
                <Grid item xs={4}>
                  {/* Video list*/}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default App;
