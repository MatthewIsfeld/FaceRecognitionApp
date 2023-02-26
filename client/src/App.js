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
      imageUrl: "",
      box: {}
    }
  }

  calculateFaceLocation(data) {
    //const face = data.outputs.[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('targetImage')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)
    /*
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
    */
  }

  displayBox(boxVals) {
    this.setState({box: boxVals})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = (event) => {
    this.setState({imageUrl: this.state.input})
    /*
    const retVal = this.calculateFaceLocation(this.state.input)
    this.displayBox(retVal)
    */
  }

  render() {
    return (
      <div>
        <ParticlesBg className="particles" bg={true}></ParticlesBg>
        <Navigation></Navigation>
        <Logo></Logo>
        <Rank></Rank>
        <ImageLinkForm inputChange={this.onInputChange} onSubmit={this.onSubmit}></ImageLinkForm>
        <FaceRecognition image={this.state.imageUrl} box={this.state.box}></FaceRecognition>
      </div>
    );
  }
}

export default App;
