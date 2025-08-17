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
import PrivacyPolicy from './components/privacy/Privacy';

function App() {
  return <>
  <FirstScreen/>
  <LearnFirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <ThirdScreen/>
  {/* <ForthScreen/> */}
<PrivacyPolicy 
  ownerName="ירדן כהן" 
  email="yarden6860@gmail.com" 
  phone="+972 50-444-8596" 
  domain="yardencohen.co.il" 
/>
<ByMe/>
  </>
}

export default App;
