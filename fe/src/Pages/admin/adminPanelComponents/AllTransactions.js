import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { convertDateWitDetail } from '../../../utils/datetime';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from '../../../hooks/useFetch';
import Paginate from '../../../CustomComponents/Paginate';


const ModifiedAlert = styled(Alert)`
  width: 90%;
  font-size: 18px !important;
  text-align: left;
  border: 1px solid black;
`;

const ReloadWrapper = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: 20px;
  margin-bottom: 20px;
  width: fit-content;
  cursor: pointer;
`;


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#b0acac",
    color: "white",
    fontSize: 19,
    verticalAlign: 'top' 
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    verticalAlign: 'top' 
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
        <StyledTableCell align="left">{convertDateWitDetail(row.createdAt)}</StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
        <StyledTableCell align="left">{row.traceCode ? `${row.traceCode.slice(0,3)}-${row.traceCode.slice(3,6)}-${row.traceCode.slice(6,9)}`: "-"}</StyledTableCell>
        <StyledTableCell align="left">{row.amount.toFixed(2)}€</StyledTableCell>
        <StyledTableCell align="left">{row.transactionResource}</StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}



function AllTransactions() {
  const [pageNumber,setPageNumber] = useState(0);
  const [url, setUrl] = useState("/api/management/transactions");
  const {userInfo} = useSelector(state=>state.login);
  const [transactions,setTransactions] = useState(null);
  const [config, setConfig] = useState({
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo?.access_token}`
        }
  });
  const {data, loading, error} = useFetch(url,config,pageNumber, true);
  //const transactions = data!==null? data.content : null;

  useEffect(()=>{
    if (data!==null) {
        setTransactions(data.content);
    }
  },[data])

  return (
    <div>
      {
        error!==null && transactions===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading!==false &&  transactions===null && <CircularProgress color="warning" /> 
      }
      { data!=null && <Paginate data={data} setPageNumber={setPageNumber} pageNumber={pageNumber} PAGE_SIZE={20}/>}
      {   transactions &&
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
              <TableHead>
                  <StyledTableRow>
                        <StyledTableCell>Erstellt am (+- 1 Minute)</StyledTableCell>
                        <StyledTableCell>E-mail</StyledTableCell>
                        <StyledTableCell>Bestellnummer</StyledTableCell>
                        <StyledTableCell>Gesamt</StyledTableCell>
                        <StyledTableCell>Ressource</StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {transactions.map((row,index) => (
                      <Row key={row.id} row={row} />
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
        }
    </div>
  )
}

export default AllTransactions;
