import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useNavigate, useLocation} from 'react-router-dom';
import '../styles/pages-styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';



//Defining the Titles/Header of the Table
const columns = [

  { id: 'ID', label: 'ID', minWidth: 170 },
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'color',
    label: 'Color',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'size',
    label: 'Size',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, ID, name, description, color, size) {
  return { id, ID, name, description, color, size };
}



export default function ViewProducts() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Navigate to the add product page

 const handleNavToAddPRoduct=()=>{
    navigate('/add-product')
 }


 /*
 Handle GET request here to read all products
 */

  const [error, setError] = useState(null);
  const [rows, setRows] = useState([]);

  //For the Alert Dialog
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/store/product/')
      .then(function (response) {
        // Request was successful

        const responseData = response.data;
        const processedRows = responseData.map((item) =>
          createData(item.id, item.ID, item.name, item.description, item.color, item.size)
        ).reverse()
        setRows(processedRows);
      })
      .catch(function (error) {
        // An error occurred
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!rows) {
    return <div>Loading...</div>;
  }

  //Navigate to the detail page of the product
  const handleProductClick=(id)=>{

    // Navigate to another page with props
    navigate('/view-product', { state: { prop: id} });
  }


  let successValue = ''
  let failureValue = ''
  try{
    const { successMessage, failureMessage } = location.state;
    successValue = successMessage
    failureValue = failureMessage
  }
  catch(e){

  }



  return (
    <div>
      {successValue &&
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            severity='success'
          >
          {successValue}
          </Alert>
        </Collapse>
      </Box>
      }

      {failureValue &&
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            severity='error'
          >
          {failureValue}
          </Alert>
        </Collapse>
      </Box>
      }


      <div className='view-products-container' >
          <h3>View Products</h3>
          <br />
          <hr style={{'opacity':'0.12'}} />
          <br />
          <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer  sx={{ maxHeight: 340 }}>
                  <Table stickyHeader aria-label="sticky table">
                  <TableHead >
                      <TableRow style={{'color':'red'}}>
                      {columns.map((column) => (
                          <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                          >
                          {column.label}
                          </TableCell>
                      ))}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                          return (
                          <TableRow onClick={()=>handleProductClick(row.id)} hover role="checkbox" tabIndex={-1} key={row.code}>
                              {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                  <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                              );
                              })}
                          </TableRow>
                          );
                      })}
                  </TableBody>
                  </Table>
              </TableContainer>
              <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
              />

          </Paper>
          <Button onClick={handleNavToAddPRoduct} className="btn-add-product" variant="contained">Add Product</Button>

      </div>
    </div>

    );
}