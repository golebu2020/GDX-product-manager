
import Button from '@mui/material/Button';
// import { postData } from '../services/api';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';



const AddProduct=()=>{

    const url = 'http://127.0.0.1:8000/api/store/product/';
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        ID: '',
        name: '',
        description: '',
        color: '',
        size: '',
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "size") {
            const selectedSize = e.target.options[e.target.selectedIndex].value;
            setFormData({
                ...formData,
                [name]: selectedSize
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };



    const handlePost = (e) => {
        e.preventDefault();
        console.log(formData)

        axios.post(url, formData)
          .then(function (response) {
            // Request was successful
            console.log(response.status)
            navigate('/', {state: { successMessage: "Successfully added product to the store"}})
        })
        .catch(function (error) {
            // An error occurred
            console.log('Error:', error);
            navigate('/', {state: { failureMessage: "Something happened, please check your network"}})
        });
    };


    return (
        <div>
            <li style={{'marginTop':'1.5rem', 'listStyle':'none', 'marginLeft':'2rem'}}><Link to="/">Home</Link></li>
            <div className="form-container">
                <form className="add-product-form" action="">
                    <h3>Add Product</h3>
                    <br />
                    <hr style={{'opacity':'0.12'}} />
                    <br />
                    <label className="add-product-label" htmlFor="product-id">ID:</label>
                    <input  className="add-product-input" type="number" name="ID"  id="product-id" placeholder="Product ID"  value={formData.email}
                        onChange={handleInputChange} />

                    <label className="add-product-label" htmlFor="product-name">Name:</label>
                    <input className="add-product-input" type="text" name="name" id="product-name" placeholder="Product Name"  value={formData.email}
                        onChange={handleInputChange}/>

                    <label className="add-product-label" htmlFor="product-description" >Description:</label>
                    <textarea style={{'resize':'vertical'}} className="add-product-input add-product-textarea" type="text" name="description" id="product-description" placeholder="Product Description"  value={formData.email}
                        onChange={handleInputChange}/>

                    <label className="add-product-label" htmlFor="product-color">Color:</label>
                    <input className="add-product-input" type="text" name="color" id="product-color" placeholder="Color, E.g: Red"  value={formData.email}
                        onChange={handleInputChange}/>


                    <label className="add-product-label" htmlFor="product-size">Size:</label>
                    <select className="add-product-input" name="size" id="product-size" value={formData.size}
                        onChange={handleInputChange}>
                        <option value="">Select a size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <br/>
                    <Button onClick={handlePost} style={{'height':'3rem'}} variant="contained">SAVE</Button>
                    <br />

                </form>
            </div>
        </div>

    )
}

export default AddProduct;