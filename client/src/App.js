import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div>
      <ParticlesBg className="particles" bg={true}></ParticlesBg>
      <Navigation></Navigation>
      <Logo></Logo>
      <Rank></Rank>
      <ImageLinkForm></ImageLinkForm>
    </div>
  );
}

export default App;
