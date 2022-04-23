// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <> 
     <Navbar title = "Textutils" aboutText = "About Us"/>
     {/* <Navbar/> */}
     <div className="container">
        <TextForm heading = "Enter the text to Analyze"/>
     </div>
    <About/>
    </>
  );
}

export default App;
