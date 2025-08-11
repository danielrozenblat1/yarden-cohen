import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import Timeline from './components/timeline/Steps';
import FifthScreen from './screens/FifthScreen';
import ByMe from './components/ByMe/ByMe';
import LearnFirstScreen from './screens/LearnFirstScreen';

function App() {
  return <>
  <FirstScreen/>
  <LearnFirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <ThirdScreen/>
  {/* <ForthScreen/> */}

  </>
}

export default App;
