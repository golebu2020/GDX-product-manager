
import Button from '@mui/material/Button';
import { postData } from '../services/api';

const AddProduct=()=>{
    const handlePost = async () => {
        try {
          const data = {
              // Request body data
              name: 'Milk',
              ID: 45609,
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu',
              color:'Red',
              size: 'medium',
          }
          const response = await postData(data);
          console.log(response);
          console.log("Successfully Saved!!")
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div className="form-container">
            <form className="add-product-form" action="">
                <h3>Add Product</h3>
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
                <Button onClick={handlePost} style={{'height':'3rem'}} variant="contained">SAVE</Button>
                <br />

            </form>
        </div>
    )
}

export default AddProduct;