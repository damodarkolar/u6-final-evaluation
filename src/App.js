import './App.css';
import { Route, Routes} from "react-router-dom"
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/Cart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
