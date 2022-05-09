
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './components/Home/Home'
import {ProductDetail} from './components/ProductDetail/ProductDetail'
import {Cart} from './components/Cart/Cart'
function App() {
  return (
   <>
   <Routes>
     <Route>
     <Route path="/" element={<Home />} />
     <Route path="product/" element={<Home />} />
     
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
     </Route>
   </Routes>
   </>
  );
}

export default App;
