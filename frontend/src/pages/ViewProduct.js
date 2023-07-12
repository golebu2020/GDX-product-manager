import * as React from 'react';
import ProductSavedAlert from '../components/ProductSavedAlert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate, Link } from 'react-router-dom';



const ViewProduct=()=>{
    const navigate = useNavigate();
    const handleNavToUpdate = () => {
        navigate('/update-product'); // Replace '/target-page' with the desired path
      };
  return (
    <div >
        <ProductSavedAlert/>
        <li style={{'marginTop':'1.5rem'}}><Link to="/">Home</Link></li>
        <div className='view-product-container'>

            <div className='view-product-card'>
                <div>
                    <h2 style={{'marginBottom':'1rem'}}>Product Details</h2>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Product ID</h4>
                    <br />
                    <p>4567456789</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Product Name</h4>
                    <br />
                    <p>Milk</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Product Description</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Product Color</h4>
                    <br />
                    <p>Red</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Product Size</h4>
                    <br />
                    <p>Medium</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem", 'marginBottom':'1rem'}} />
                    <ButtonGroup className='btn-group-class' variant="contained" aria-label="outlined primary button group">
                        <Button onClick={handleNavToUpdate} className='btn-delete-update'>Update</Button>
                        <Button className='btn-delete-update color' color="error">Delete</Button>
                    </ButtonGroup>

                </div>
            </div>
        </div>
    </div>

  );
}
export default ViewProduct;