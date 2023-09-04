import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductContextProvider from "./Context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <ProductList/>
    </ProductContextProvider>
  )
}

export default App;
