import React, { useState } from 'react';
import { convertDate } from '../../../utils/datetime';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import Paginate from '../../../CustomComponents/Paginate';
import useFetch from '../../../hooks/useFetch';
import { useLocation, useParams } from 'react-router-dom';
import { handleOrderUpdate } from '../adminRequests';
import PositiveNotification from '../../../CustomComponents/Notifications/PositiveNotification';
import NegativeNotification from '../../../CustomComponents/Notifications/NegativeNotification';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b0acac",
    color: "white",
    fontSize: 19,
    verticalAlign: "top",
    textAlign: "left"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    verticalAlign: "top",
    textAlign: "left"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#f3f2f2",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Row({ row, handleButtonClick}) {
  const [open, setOpen] = React.useState(false);
  const [cargoInfo, setCargoInfo] = useState(row.cargoCode);
  const [orderStatus, setOrderStatus] = useState(row.orderStatus);

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
        <StyledTableCell align="left">{`${row.traceCode.slice(0,3)}-${row.traceCode.slice(3,6)}-${row.traceCode.slice(6,9)}`}</StyledTableCell>
        <StyledTableCell align="left">
          <select
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
          >
            <option value="PENDING_PAYMENT">Zahlung ausstehend</option>
            <option value="ACTIVE">AKTIV</option>
            <option value="IN_SHIPPING">In Versand</option>
            <option value="DELIVERED">Zugestellt</option>
          </select>
        </StyledTableCell>
        <StyledTableCell align="left">
          <textarea
            value={cargoInfo}
            onChange={(e) => setCargoInfo(e.target.value)}
          />
        </StyledTableCell>
        <StyledTableCell align="left">
          <Button variant="contained" color='warning' onClick={() => handleButtonClick(row.id, cargoInfo, orderStatus )}>anwenden</Button>
        </StyledTableCell>
        <StyledTableCell align="left">{convertDate(row.createdAt)}</StyledTableCell>
        <StyledTableCell align="left">{convertDate(row.updatedAt)}</StyledTableCell>
        <StyledTableCell align="left">{row.userName}</StyledTableCell>
        <StyledTableCell align="left">{row.userEmail}</StyledTableCell>
        <StyledTableCell align="left">{(row.price + row.shippingPrice).toFixed(2)}€</StyledTableCell>
        <StyledTableCell align="left">{row.shippingPrice.toFixed(2)}€</StyledTableCell>
        <StyledTableCell align="left">{row.paymentMethod}</StyledTableCell>
        <StyledTableCell align="left">
          <div style={{width: "300px"}}>
            {row.street} {row.doorNumber}, {row.city} / {row.state}
          </div>
        </StyledTableCell>
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
                    <StyledTableCell align="center">Kategorie</StyledTableCell>
                    <StyledTableCell align="center">Artikelname</StyledTableCell>
                    <StyledTableCell align="center">Preis pro Produkt</StyledTableCell>
                    <StyledTableCell align="center">Menge</StyledTableCell>
                    <StyledTableCell align="center">Attribute</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.orderItems.map((orderItem, index) => {
                    const attr = orderItem.price > 0 ? JSON.parse(orderItem.attributes): [];
                    //console.log("attr: ",attr);
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">{orderItem.itemName}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.secondaryName}</StyledTableCell>
                        <StyledTableCell align="left">{orderItem.price.toFixed(2)}€</StyledTableCell>
                        <StyledTableCell align="left">
                          <div style={{width: "100px"}}>
                            {`${orderItem.quantity} Stück`} 
                          </div>
                        </StyledTableCell>
  
                        <StyledTableCell align="left">
                          <div style={{width: "300px"}}>
                            {
                              attr.map((a,i)=>{
                                return <li key={i}>{a}</li>
                              })
                            }
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

const ModifiedAlert = styled(Alert)`
  width: 90%;
  font-size: 18px !important;
  text-align: left;
  border: 1px solid black;
`;

function ActiveOrderTable() {
  const [pageNumber, setPageNumber] = useState(0);
  const {status} = useParams();
  const url = `/api/management/orders?orderStatus=${status}`;
  const { userInfo } = useSelector(state => state.login);
  const [config, setConfig] = useState({
    method: "get",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userInfo?.access_token}`
    },
  });
  const { data, loading, error } = useFetch(url, config, pageNumber, true);
  const orderData = data !== null ? data.content : null;

  const handleButtonClick = async (rowId, cargoInfo, orderStatus ) => {
    const result = await handleOrderUpdate(rowId, cargoInfo, orderStatus, userInfo?.access_token);

    if (result) {
      const btn = document.getElementById("order-admin-panel-success-button");
      if (btn)
        setTimeout(()=>btn.click(),0);
    } else {
      const btn = document.getElementById("order-admin-panel-fail-button");
      if (btn)
        setTimeout(()=>btn.click(),0);
    }
  };

  return (
    <div>
      <PositiveNotification buttonId={"order-admin-panel-success-button"} msg={"Aktualisierung erfolgreich"}/>
      <NegativeNotification buttonId={"order-admin-panel-fail-button"} msg={"Aktualisierung fehlgeschlagen"}/>
      {
        error !== null && orderData === null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading && orderData === null && <CircularProgress color="warning" />
      }
      {data != null && <Paginate data={data} setPageNumber={setPageNumber} pageNumber={pageNumber} PAGE_SIZE={10}/>}
      {orderData &&
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell />
                <StyledTableCell>Bestellnummer</StyledTableCell>
                <StyledTableCell>Bestellstatus</StyledTableCell>
                <StyledTableCell>Sendungscode</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Bestelldatum</StyledTableCell>
                <StyledTableCell>Letzte Aktualisierung</StyledTableCell>
                <StyledTableCell>Benutzername</StyledTableCell>
                <StyledTableCell>E-mail</StyledTableCell>
                <StyledTableCell>Gesamtpreis</StyledTableCell>
                <StyledTableCell>Versandkosten</StyledTableCell>
                <StyledTableCell>Zahlungsmethode</StyledTableCell>
                <StyledTableCell>Adresse</StyledTableCell>
                <StyledTableCell>Postleitzahl</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {orderData.map((row) => (
                <Row
                  key={row.id}
                  row={row}
                  handleButtonClick={handleButtonClick}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </div>
  );
}

export default ActiveOrderTable;
