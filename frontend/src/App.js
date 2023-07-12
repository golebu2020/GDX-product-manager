
import * as React from 'react';
import './styles/pages-styles.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ViewProducts from './pages/ViewProducts';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import ViewProduct from './pages/ViewProduct';

/*
  Defining the different paths of the app:
    - Home Page: http://localhost:3000/
    - Add Product: http://localhost:3000/add-product
    - Update Product: http://localhost:3000/update-product
    - View Product: http://localhost:3000/view-product
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ViewProducts/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/update-product" element={<UpdateProduct/>} />
          <Route path="/view-product" element={<ViewProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;