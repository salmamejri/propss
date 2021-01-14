import logo from './logo.svg';
import './App.css';
import Profilepic from './profile/profile component/profile picture';
import Fullname from './profile/profile component/fullname';
import Profession from './profile/profile component/profession';
import Bio from './profile/profile component/bio';

function App() {
  const styleobject={backgroundColor:black,color:Red,textaligne:centre}
  
  return (
   <div style={styleobject} >
     <Profilepic></Profilepic>
     <Fullname></Fullname>
     <Profession></Profession>
     <Bio></Bio>
     
     
    </div>
  );
}

export default App;
