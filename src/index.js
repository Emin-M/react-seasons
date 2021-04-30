import React from "react";
import ReactDom from "react-dom";
import SD from "./SeasonDisplay";
import Spinner from "./Spinnner"
import "./SeasonDisplay.css";

class App extends React.Component {
    state = {lat: null, errMes: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMes: err.message})
        );
    }

    renderContent(){
        if(this.state.lat && !this.state.errMes){
            return <SD lat={this.state.lat}/>
        }
        if(!this.state.lat && this.state.errMes){
            return <div>Error: {this.state.errMes}</div>
        }
        return <div><Spinner /><span className="spinner-border-2">Waiting...</span></div>
    }

    render() {
          return (
            <div className="red">{this.renderContent()}</div>
          );
    }
}

ReactDom.render(<App /> ,document.querySelector('#root'));