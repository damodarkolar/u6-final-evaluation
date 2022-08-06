import './App.css';
import { Route, Routes} from "react-router-dom"
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      APP
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
