import React from 'react'
import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      imageUrl: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = (event) => {
    this.setState({imageUrl: this.state.input})
  }

  render() {
    return (
      <div>
        <ParticlesBg className="particles" bg={true}></ParticlesBg>
        <Navigation></Navigation>
        <Logo></Logo>
        <Rank></Rank>
        <ImageLinkForm inputChange={this.onInputChange} onSubmit={this.onSubmit}></ImageLinkForm>
        <FaceRecognition image={this.state.imageUrl}></FaceRecognition>
      </div>
    );
  }
}

export default App;
