
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Idea from './pages/Idea';
import Voting from './pages/VotingPage';
import Registration from './pages/RegistrationPage';
import IdeasRang from './pages/IdeasRang'


function App() {
  return (
    <BrowserRouter>
       <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/idea' element={<Idea/>}/>
        <Route path='/voting' element={<Voting/>}/>
        <Route path='/ideas-rang' element={<IdeasRang/>}/>
        
        
        
      </Routes>
       <Footer/>

    </BrowserRouter>
  );
}

export default App;