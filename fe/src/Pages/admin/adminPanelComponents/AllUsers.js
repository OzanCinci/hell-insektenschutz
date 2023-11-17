import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allUsersAction } from '../../../actions/adminActions';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { convertDate } from '../../../utils/datetime';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#b0acac",
      color: "white",
      fontSize: 19,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#f3f2f2",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },

}));

const ModifiedAlert = styled(Alert)`
  width: 90%;
  font-size: 18px !important;
  text-align: left;
  border: 1px solid black;
`;

function Row({ row }) {
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' , backgroundColor:"#dbd9d9"} }}>
          <StyledTableCell>
            <IconButton
              aria-label="expand row"
              size="large"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell  align="left">{row.firstname}</StyledTableCell>
          <StyledTableCell  align="left">{row.lastname}</StyledTableCell>
          <StyledTableCell  align="left">{row.email}</StyledTableCell>
          <StyledTableCell  align="left">{convertDate(row.createdAt)}</StyledTableCell>
          <StyledTableCell  align="left">{row.phone}</StyledTableCell>
          <StyledTableCell  align="left">{row.role}</StyledTableCell>
          <StyledTableCell  align="left">{row.reviews.length}</StyledTableCell>
          <StyledTableCell  align="left">{row.orders.length}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell style={{paddingBottom: 0, paddingTop: 0 , backgroundColor: "white"}} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h5" gutterBottom component="div">
                  Reviews
                </Typography>
                <Table size="medium" aria-label="purchases">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="left">Approved</StyledTableCell>
                      <StyledTableCell align="left">Comment</StyledTableCell>
                      <StyledTableCell align="left">Review Rating</StyledTableCell>
                      <StyledTableCell align="left">Product Name</StyledTableCell>
                      <StyledTableCell align="left">Product's Rating Count</StyledTableCell>
                      <StyledTableCell align="left">Product's Rating</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {row.reviews.map((review,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">{review.approved?"Approved":"Not Approved"}</StyledTableCell>
                        <StyledTableCell align="left">{review.comment}</StyledTableCell>
                        <StyledTableCell align="left">{review.rating}</StyledTableCell>
                        <StyledTableCell align="left">{review.product.name}</StyledTableCell>
                        <StyledTableCell align="left">{review.product.numberOfRating}</StyledTableCell>
                        <StyledTableCell align="left">{review.product.rating}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
            <StyledTableCell style={{ paddingBottom: 40, paddingTop: 0 , backgroundColor: "white"}} colSpan={8}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin:1 }}>
                    <Typography variant="h5" gutterBottom component="div">
                    Orders
                    </Typography>
                    <Table size="medium" aria-label="purchases">
                    <TableHead>
                        <StyledTableRow>
                        <StyledTableCell  align="left">Order Status</StyledTableCell>
                        <StyledTableCell  align="left">Total Price</StyledTableCell>
                        <StyledTableCell  align="left">Payment Method</StyledTableCell>
                        <StyledTableCell  align="left">Created At</StyledTableCell>
                        <StyledTableCell  align="left">City</StyledTableCell>
                        <StyledTableCell  align="left">Address</StyledTableCell>
                        <StyledTableCell  align="left">Postal Code</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {row.orders.map((order,index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="left">{order.orderStatus}</StyledTableCell>
                            <StyledTableCell align="left">{order.totalPrice}</StyledTableCell>
                            <StyledTableCell align="left">{order.paymentMethod}</StyledTableCell>
                            <StyledTableCell align="left">{convertDate(order.createdAt)}</StyledTableCell>
                            <StyledTableCell align="left">{order.city}</StyledTableCell>
                            <StyledTableCell align="left">{order.address}</StyledTableCell>
                            <StyledTableCell align="left">{order.postalCode}</StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                    </Table>
                </Box>
                </Collapse>
            </StyledTableCell>
            </StyledTableRow>
      </React.Fragment>
    );
}



function AllUsers() {
    const dispatch = useDispatch();
    const {usersData,loading,error} = useSelector(state=>state.allUsers);
    const {userInfo} = useSelector(state=>state.login);


 

    useEffect(()=>{
      const getAllUsers = () => {
        if (!usersData && userInfo?.access_token){
            console.log("request is made usersData");
            dispatch(allUsersAction(userInfo?.access_token));
        }
        console.log("getAllUsers: ",usersData);
    }

     return () => getAllUsers();
    },[userInfo?.access_token,dispatch,usersData]);

  return (
    <div>
      {
        error!==null && usersData===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading!==false &&  usersData===null && <CircularProgress color="warning" /> 
      }
      {   usersData &&
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell />
                      <StyledTableCell />
                      <StyledTableCell  >First Name</StyledTableCell>
                      <StyledTableCell  >Last Name</StyledTableCell>
                      <StyledTableCell  >E-mail</StyledTableCell>
                      <StyledTableCell  >Created At</StyledTableCell>
                      <StyledTableCell  >Phone</StyledTableCell>
                      <StyledTableCell  >Role</StyledTableCell>
                      <StyledTableCell  >Review Count</StyledTableCell>
                      <StyledTableCell  >Order Count</StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {usersData.map((row,index) => (
                      <Row key={index} row={row} />
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
        }
    </div>
  )
}

export default AllUsers