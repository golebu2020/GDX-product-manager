
import Button from '@mui/material/Button';
// import ProductSavedAlert from '../components/ProductSavedAlert';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateProduct=()=>{
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        ID: "",
        name: "",
        description: "",
        color: "",
        size: "",
    });

    const location = useLocation();
    const { prop1, prop2, prop3, prop4, prop5, prop6 } = location.state;
    console.log(prop2)
    console.log(prop3)
    console.log(prop4)
    console.log(prop5)
    console.log(prop6)

    useEffect(() => {
        setFormData(prevObject => ({
          ...prevObject,
          ID: prop2,
          name: prop3,
          description: prop4,
          color: prop5,
          size: prop6,
        }));
    }, [prop2, prop3, prop4, prop5, prop6]);


    const handleNavToViewProducts=()=>{
        navigate('/view-product', { state: { prop: prop1} });
    }




    console.log(`this is the prop:${prop1}`)

    const baseUrl = 'http://165.232.147.254:8083/api/store/product/';
    const url = baseUrl + prop1.toString() + "/";


    /*Updating Product Information*/

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

    const handlePut = (e) => {
        e.preventDefault();
        console.log(formData)

        axios.put(url, formData)
          .then(function (response) {
            console.log(response.status)
            navigate('/', {state: { successMessage: "Successfully updated the product"}})

        })
        .catch(function (error) {
            navigate('/', {state: { failureMessage: "Something happened, please check your network"}})
        });
    };

    return (
        <div>
            <li style={{'marginTop':'1.5rem', 'listStyle':'none', 'marginLeft':'2rem'}}><Link to="/">Home</Link></li>
            <div className="form-container">

                <form className="add-product-form" action="">
                    <h3>Update Product Information</h3>
                    <br />
                    <hr style={{'opacity':'0.12'}} />
                    <br />
                    <label className="add-product-label" htmlFor="product-id">ID:</label>
                    <input className="add-product-input" type="number"  name='ID' value={formData.ID}
                     onChange={handleInputChange} id="product-id" placeholder="Product ID"/>

                    <label className="add-product-label" htmlFor="product-name">Name:</label>
                    <input className="add-product-input" type="text" name='name' value={formData.name}
                     onChange={handleInputChange}  id="product-name" placeholder="Product Name"/>

                    <label className="add-product-label" htmlFor="product-description" >Description:</label>
                    <textarea value={formData.description} onChange={handleInputChange}  style={{'resize':'vertical'}} name='description' className="add-product-input add-product-textarea" type="text" id="product-description" placeholder="Product Description"/>

                    <label className="add-product-label" htmlFor="product-color">Color:</label>
                    <input value={formData.color} onChange={handleInputChange}  className="add-product-input" name='color' type="text" id="product-color" placeholder="Color, E.g: Red"/>


                    <label className="add-product-label" htmlFor="product-size">Size:</label>
                    <select value={formData.size} onChange={handleInputChange}  className="add-product-input" name="size" id="product-size">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <br/>
                    <ButtonGroup className='btn-group-class' variant="contained" aria-label="outlined primary button group">
                        <Button onClick={handlePut} className='btn-delete-update'>Save</Button>
                        <Button onClick={handleNavToViewProducts} className='btn-delete-update color' color="error">Cancel</Button>
                    </ButtonGroup>

                    <br />

                </form>
            </div>
        </div>

    )
}

export default UpdateProduct;