
import './App.css';
import Title from './Title/Title';
import PLACEList from './PLACEList/PLACEList';
import Footer from './Footer';
import About from './About/About';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import PLACESDetails from './PLACESDetails/PLACESDetails'


function App() {


  return (

    <Router>
      

    <div className="App">
    
      <Title/>
      <Routes>
      <Route path="/" element={<PLACEList/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/details/:id" element={<PLACESDetails/>} />
        
      </Routes>
      <Footer/>
      

      </div>

    
      

      </Router>
        
    
  );
}

export default App;
