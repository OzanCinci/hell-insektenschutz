import React from 'react';
import styled from 'styled-components';
//import { styled } from '@mui/material/styles';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


/* 
const Container = styled.div`
border-top: 1px solid black;
margin-top: 50px;
`;
*/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#b0acac",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
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


function Row({ row }) {
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <StyledTableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell align="right">{row.userName}</StyledTableCell>
          <StyledTableCell align="right">{row.userEmail}</StyledTableCell>
          <StyledTableCell align="right">{row.orderStatus}</StyledTableCell>
          <StyledTableCell align="right">{row.totalPrice}</StyledTableCell>
          <StyledTableCell align="right">{row.shippingPrice}</StyledTableCell>
          <StyledTableCell align="right">{row.paymentMethod}</StyledTableCell>
          <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
          <StyledTableCell align="right">{row.lastUpdate}</StyledTableCell>
          <StyledTableCell align="right">{row.country}</StyledTableCell>
          <StyledTableCell align="right">{row.city}</StyledTableCell>
          <StyledTableCell align="right">{row.address}</StyledTableCell>
          <StyledTableCell align="right">{row.postalCode}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Order Items
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="right">Item Name</StyledTableCell>
                      <StyledTableCell align="right">Category</StyledTableCell>
                      <StyledTableCell align="right">Total Price</StyledTableCell>
                      <StyledTableCell align="right">Quantity</StyledTableCell>
                      <StyledTableCell align="right">Measurements</StyledTableCell>
                      <StyledTableCell align="right">Rating</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {row.orderItems.map((orderItem,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="right">{orderItem.product.name}</StyledTableCell>
                        <StyledTableCell align="right">{orderItem.product.category}</StyledTableCell>
                        <StyledTableCell align="right">{orderItem.price}</StyledTableCell>
                        <StyledTableCell align="right">{orderItem.quantity}</StyledTableCell>
                        <StyledTableCell align="right">{orderItem.measurements}</StyledTableCell>
                        <StyledTableCell align="right">{orderItem.product.rating}</StyledTableCell>
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


function ActiveOrderTable({rows}) {
return (
    <div>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
            <TableHead>
                <StyledTableRow>
                    <StyledTableCell />
                    <StyledTableCell />
                    <StyledTableCell>User Name</StyledTableCell>
                    <StyledTableCell>E-mail</StyledTableCell>
                    <StyledTableCell>Order Status</StyledTableCell>
                    <StyledTableCell>Total Price</StyledTableCell>
                    <StyledTableCell>Shipping Price</StyledTableCell>
                    <StyledTableCell>Payment Method</StyledTableCell>
                    <StyledTableCell>Created At</StyledTableCell>
                    <StyledTableCell>Last Update</StyledTableCell>
                    <StyledTableCell>Country</StyledTableCell>
                    <StyledTableCell>City</StyledTableCell>
                    <StyledTableCell>Address</StyledTableCell>
                    <StyledTableCell>Postal Code</StyledTableCell>
                </StyledTableRow>
            </TableHead>
            <TableBody>
                {rows.map((row,index) => (
                    <Row key={index} row={row} />
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}

export default ActiveOrderTable