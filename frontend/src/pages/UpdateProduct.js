
import Button from '@mui/material/Button';
import ProductSavedAlert from '../components/ProductSavedAlert';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

const UpdateProduct=()=>{
    const navigate = useNavigate()
    const handleNavToViewProducts=()=>{
        navigate('/')
    }
    const handleNavToCancel=()=>{
        navigate('/view-product')
    }
    return (
        <div>
            <ProductSavedAlert/>
            <div className="form-container">
                <form className="add-product-form" action="">
                    <h3>Update Product Information</h3>
                    <br />
                    <hr style={{'opacity':'0.12'}} />
                    <br />
                    <label className="add-product-label" htmlFor="product-id">ID:</label>
                    <input className="add-product-input" type="number" id="product-id" placeholder="Product ID"/>

                    <label className="add-product-label" htmlFor="product-name">Name:</label>
                    <input className="add-product-input" type="text" id="product-name" placeholder="Product Name"/>

                    <label className="add-product-label" htmlFor="product-description" >Description:</label>
                    <textarea style={{'resize':'vertical'}} className="add-product-input add-product-textarea" type="text" id="product-description" placeholder="Product Description"/>

                    <label className="add-product-label" htmlFor="product-color">Color:</label>
                    <input className="add-product-input" type="text" id="product-color" placeholder="Color, E.g: Red"/>


                    <label className="add-product-label" htmlFor="product-size">Size:</label>
                    <select className="add-product-input" name="" id="product-size">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <br/>
                    <ButtonGroup className='btn-group-class' variant="contained" aria-label="outlined primary button group">
                        <Button onClick={handleNavToViewProducts} className='btn-delete-update'>Save</Button>
                        <Button onClick={handleNavToCancel} className='btn-delete-update color' color="error">Cancel</Button>
                    </ButtonGroup>

                    <br />

                </form>
            </div>
        </div>

    )
}

export default UpdateProduct;