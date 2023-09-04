import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const ViewProduct=()=>{
    const location = useLocation();
    const { prop} = location.state;
    console.log(prop)


   const [productID, setProductID] = useState(null)
   const [productName, setProductName] = useState(null)
   const [productDescription, setProductDescription] = useState(null)
   const [productColor, setProductColor] = useState(null)
   const [productSize, setProductSize] = useState(null)

   const [error, setError] = useState(null);

   const navigate = useNavigate();
   const baseUrl = 'http://165.232.147.254:8083/api/store/product/';
   const url = baseUrl + prop.toString() + "/";

   /*
    Getting Specific Product Information from the api
    */

  useEffect(() => {

    axios.get(url)
      .then(function (response) {
        // Request was successful
        const responseData = response.data;
        setProductID(responseData["ID"])
        setProductName((responseData["name"]))
        setProductDescription(responseData["description"])
        setProductColor(responseData["color"])
        setProductSize(responseData["size"])


      })
      .catch(function (error) {
        // An error occurred
        setError(error);
      });
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!productID) {
    return <div>Loading...</div>;
  }

  /*
  Handle Product Delete
  */
  const handleProductDelete = () => {

    axios.delete(url)
      .then(function (response) {
        // Item was successfully deleted
        console.log('Item deleted')
        console.log('Status Code:', response.status);
        if (response.status === 204){
            navigate('/', {state: { successMessage: "Successfully deleted the product"}})
        }

      })
      .catch(function (error) {
        console.log('Status Code:', error.status);
        navigate('/', {state: { failureMessage: "Something happened, please check your network"}})
      });
  };


    const handleNavToUpdate = (id) => {
        axios.get(url)
            .then(function (response) {
                // Request was successful
                const responseData = response.data;
                navigate('/update-product',
                    { state:
                        {
                            prop1: id,
                            prop2: responseData['ID'],
                            prop3: responseData['name'],
                            prop4: responseData['description'],
                            prop5: responseData['color'],
                            prop6: responseData['size'],

                        }
                    }
                );
            })
            .catch(function (error) {
                console.log(error)
            });

    };

  return (
    <div >
        <li style={{'marginTop':'1.5rem'}}><Link to="/">Home</Link></li>
        <div className='view-product-container'>

            <div className='view-product-card'>
                <div>
                    <h2 style={{'marginBottom':'1rem'}}>Product Details</h2>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>ID</h4>
                    <br />
                    <p>{productID}</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Name</h4>
                    <br />
                    <p>{productName}</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Description</h4>
                    <br />

                    <p>{productDescription}</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Color</h4>
                    <br />
                    <p>{productColor}</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem"}} />

                    <h4 style={{'marginTop':'1rem'}}>Size</h4>
                    <br />
                    <p>{productSize}</p>
                    <hr style={{'opacity':'0.10', 'marginTop':"0.5rem", 'marginBottom':'1rem'}} />
                    <ButtonGroup className='btn-group-class' variant="contained" aria-label="outlined primary button group">
                        <Button onClick={()=>handleNavToUpdate(prop)} className='btn-delete-update'>Update</Button>
                        <Button onClick={handleProductDelete} className='btn-delete-update color' color="error">Delete</Button>
                    </ButtonGroup>

                </div>
            </div>
        </div>
    </div>

  );
}
export default ViewProduct;