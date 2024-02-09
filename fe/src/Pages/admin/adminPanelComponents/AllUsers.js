import React, { useEffect, useState } from 'react'
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
import useFetch from '../../../hooks/useFetch';
import Paginate from '../../../CustomComponents/Paginate';


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
                  Rezension
                </Typography>
                <Table size="medium" aria-label="purchases">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="left">Genehmigt</StyledTableCell>
                      <StyledTableCell align="left">Kommentar</StyledTableCell>
                      <StyledTableCell align="left">Bewertung der Rezension</StyledTableCell>
                      <StyledTableCell align="left">Produktname</StyledTableCell>
                      <StyledTableCell align="left">Anzahl der Produktbewertungen</StyledTableCell>
                      <StyledTableCell align="left">Produktbewertung</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {row.reviews.map((review,index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell align="left">{review.approved?"Ja":"Nein"}</StyledTableCell>
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
                      Bestellungen
                    </Typography>
                    <Table size="medium" aria-label="purchases">
                    <TableHead>
                        <StyledTableRow>
                          <StyledTableCell align="left">Bestellstatus</StyledTableCell>
                          <StyledTableCell align="left">Gesamtpreis</StyledTableCell>
                          <StyledTableCell align="left">Zahlungsmethode</StyledTableCell>
                          <StyledTableCell align="left">Erstellt am</StyledTableCell>
                          <StyledTableCell align="left">Stadt</StyledTableCell>
                          <StyledTableCell align="left">Adresse</StyledTableCell>
                          <StyledTableCell align="left">Postleitzahl</StyledTableCell>
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
  const [pageNumber,setPageNumber] = useState(0);
  const [url, setUrl] = useState("/api/management/all-users");
  const {userInfo} = useSelector(state=>state.login);
  const [config, setConfig] = useState({
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo?.access_token}`
        }
  });
  const {data, loading, error} = useFetch(url,config,pageNumber);
  const usersData = data!==null? data.content : null;

  return (
    <div>
      {
        error!==null && usersData===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading!==false &&  usersData===null && <CircularProgress color="warning" /> 
      }
      { data!=null && <Paginate data={data} setPageNumber={setPageNumber} pageNumber={pageNumber}/>}
      {   usersData &&
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell />
                      <StyledTableCell />
                        <StyledTableCell>Vorname</StyledTableCell>
                        <StyledTableCell>Nachname</StyledTableCell>
                        <StyledTableCell>E-Mail</StyledTableCell>
                        <StyledTableCell>Erstellt am</StyledTableCell>
                        <StyledTableCell>Telefon</StyledTableCell>
                        <StyledTableCell>Rolle</StyledTableCell>
                        <StyledTableCell>Anzahl der Bewertungen</StyledTableCell>
                        <StyledTableCell>Anzahl der Bestellungen</StyledTableCell>
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