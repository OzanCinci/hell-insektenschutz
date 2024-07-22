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
import { handleLoadContent, handleOrderUpdate } from '../adminRequests';
import PositiveNotification from '../../../CustomComponents/Notifications/PositiveNotification';
import NegativeNotification from '../../../CustomComponents/Notifications/NegativeNotification';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const CustomInput = styled.input`
    width: 90px;
    font-size: 18px;
    text-align: center;
    padding: 0px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;

    &:focus {
        outline: none;
        border-color: #f59f4c;
    }
`;

const TopPartWrapper = styled.div`
    width: 600px;
    margin: auto;
    border: 1px solid grey;
    padding: 20px 40px;
    border-radius: 10px;
    margin-bottom: 40px;
`;

const CustomButton = styled(Button)`
    text-transform: none !important;
    font-size: 17px !important;

    @media only screen and (max-width: 800px) {
        margin-top: 15px !important;
    }    
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    width: fit-content;

     @media only screen and (max-width: 800px) {
        gap: 2px;
    }
`;

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
            <option value="PENDING_PAYMENT">PENDING_PAYMENT</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="IN_SHIPPING">IN_SHIPPING</option>
            <option value="DELIVERED">DELIVERED</option>
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
                    const attr = JSON.parse(orderItem.attributes);
                    console.log("attr: ",attr);
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

function OrderSearch() {
  const { userInfo } = useSelector(state => state.login);
  const [orderData, setOrderData] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(null);
  const config = {
    method: "get",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userInfo?.access_token}`
    },
  };
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleSearch = async (e) => {
      if (input1.length<3 || input2.length<3 || input3.length<3)
          return;

      const code =  input1 + "" + input2 + "" + input3;

      setError(null);
      setLoading(true);
      const {data, status} = await handleLoadContent(code,userInfo?.access_token);
      setLoading(false);

      if (status) {
        setOrderData([data]);
      } else {
        setError("Aktualisierung fehlgeschlagen");
      }
  }

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
        <TopPartWrapper>
            <div style={{margin: "15px auto", textAlign: "left", fontSize: "20px"}}>
                Bitte geben Sie eine 9-stellige Bestellnummer an.
            </div>
            <InputWrapper>
                <CustomInput
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    maxLength={3}
                    placeholder="xxx"
                />
                <HorizontalRuleIcon fontSize='medium'/>
                <CustomInput
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    maxLength={3}
                    placeholder="xxx"
                />
                <HorizontalRuleIcon/>
                <CustomInput
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    maxLength={3}
                    placeholder="xxx"
                />
            </InputWrapper>
            <div style={{width: "100%", textAlign: "right"}}>
                <CustomButton onClick={(e)=>handleSearch(e)} variant='outlined' color='warning'>suchen</CustomButton>
            </div>
        </TopPartWrapper>
      <PositiveNotification buttonId={"order-admin-panel-success-button"} msg={"Aktualisierung erfolgreich"}/>
      <NegativeNotification buttonId={"order-admin-panel-fail-button"} msg={"Aktualisierung fehlgeschlagen"}/>
      {
        error !== null && orderData === null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading && orderData === null && <CircularProgress color="warning" />
      }
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

export default OrderSearch;
