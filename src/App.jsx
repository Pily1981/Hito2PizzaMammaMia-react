import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/NavBar';
//import Home from './componentes/Home';
import Footer from './componentes/Footer';
//import Register from './componentes/Register';
import Login from './componentes/Login';


function App() {
  
  return (
    <>      
     <Navbar/>
    {/*<Home/>*/}
    {/*<Register/>*/}
     <Login/>
     <Footer/>
    </>

  );
}

export default App;