import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          Latitude: {this.state.lat} | Longitude: {this.state.long}
        </div>
      );
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
