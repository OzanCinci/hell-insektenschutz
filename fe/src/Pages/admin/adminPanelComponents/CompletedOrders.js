import React, { useEffect, useState } from 'react'
import { convertDate } from '../../../utils/datetime';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import { completedOrdersAction } from '../../../actions/adminActions';
import CircularProgress from '@mui/material/CircularProgress';
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
import useFetch from '../../../hooks/useFetch';
import Paginate from '../../../CustomComponents/Paginate';

const ModifiedAlert = styled(Alert)`
  width: 90%;
  font-size: 18px !important;
  text-align: left;
  border: 1px solid black;
`;

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
          <StyledTableCell align="left">{row.id}</StyledTableCell>
          <StyledTableCell align="left">{row.userName}</StyledTableCell>
          <StyledTableCell align="left">{row.userEmail}</StyledTableCell>
          <StyledTableCell align="left">{row.orderStatus}</StyledTableCell>
          <StyledTableCell align="left">{row.totalPrice}</StyledTableCell>
          <StyledTableCell align="left">{row.shippingPrice}</StyledTableCell>
          <StyledTableCell align="left">{row.paymentMethod}</StyledTableCell>
          <StyledTableCell align="left">{convertDate(row.createdAt)}</StyledTableCell>
          <StyledTableCell align="left">{convertDate(row.lastUpdate)}</StyledTableCell>
          <StyledTableCell align="left">{row.country}</StyledTableCell>
          <StyledTableCell align="left">{row.city}</StyledTableCell>
          <StyledTableCell align="left">{row.address}</StyledTableCell>
          <StyledTableCell align="left">{row.postalCode}</StyledTableCell>
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
                      <StyledTableCell align="center">Artikelname</StyledTableCell>
                      <StyledTableCell align="center">Kategorie</StyledTableCell>
                      <StyledTableCell align="center">Gesamtpreis</StyledTableCell>
                      <StyledTableCell align="center">Menge</StyledTableCell>
                      <StyledTableCell align="center">Maße</StyledTableCell>
                      <StyledTableCell align="center">Bewertung</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {row.orderItems.map((orderItem,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">{orderItem.product.name}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.product.category}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.price}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.quantity}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.measurements}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.product.rating}</StyledTableCell>
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


function CompletedOrders() {
    const [pageNumber,setPageNumber] = useState(0);
    const [url, setUrl] = useState("/api/management/orders?orderStatus=DELIVERED");
    const {userInfo} = useSelector(state=>state.login);
    const [config, setConfig] = useState({
      "method": "get",
      "headers": {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo?.access_token}`
          },
      "data":{
          "filter": null,
      }
    });
    const {data, loading, error} = useFetch(url,config,pageNumber);
    const orderData = data!==null? data.content : null;
    
  return (
    <div>
        {
        error!==null && orderData===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
        }
        {
            loading!==null &&  orderData===null && <CircularProgress color="warning" /> 
        }
        { data!=null && <Paginate data={data} setPageNumber={setPageNumber} pageNumber={pageNumber}/>}
        {   orderData &&
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell />
                      <StyledTableCell />
                      <StyledTableCell >Bestellnummer</StyledTableCell>
                      <StyledTableCell >Benutzername</StyledTableCell>
                      <StyledTableCell >E-mail</StyledTableCell>
                      <StyledTableCell >Bestellstatus</StyledTableCell>
                      <StyledTableCell >Gesamtpreis</StyledTableCell>
                      <StyledTableCell >Versandkosten</StyledTableCell>
                      <StyledTableCell >Zahlungsmethode</StyledTableCell>
                      <StyledTableCell >Erstellt am</StyledTableCell>
                      <StyledTableCell >Letzte Aktualisierung</StyledTableCell>
                      <StyledTableCell >Land</StyledTableCell>
                      <StyledTableCell >Stadt</StyledTableCell>
                      <StyledTableCell >Adresse</StyledTableCell>
                      <StyledTableCell >Postleitzahl</StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {orderData.map((row,index) => (
                      <Row key={row.id} row={row} />
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
        }
    </div>
  )
}

export default CompletedOrders
