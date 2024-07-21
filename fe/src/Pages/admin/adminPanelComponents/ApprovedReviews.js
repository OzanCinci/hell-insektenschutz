import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { convertDate } from '../../../utils/datetime';
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
        <StyledTableCell align="left">{convertDate(row.approvedAt)}</StyledTableCell>
        <StyledTableCell align="left">{convertDate(row.createdAt)}</StyledTableCell>
        <StyledTableCell align="left">{row.rating}</StyledTableCell>
        <StyledTableCell align="left">
          <div style={{width: "350px"}}>
            {row.comment}
          </div>
        </StyledTableCell>
        <StyledTableCell align="left">{row.userName}</StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
        <StyledTableCell align="left">
          <div style={{width: "250px"}}>
            {row.itemName}--{row.secondaryName}
          </div>
        </StyledTableCell>
        <StyledTableCell align="left">{row.product.name}</StyledTableCell>
        <StyledTableCell align="left">{row.product.rating.toFixed(1)}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Produktdetails
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center">Produktname</StyledTableCell>
                    <StyledTableCell align="center">Anzahl der Bewertungen</StyledTableCell>
                    <StyledTableCell align="center">Gesamtbewertung</StyledTableCell>
                    <StyledTableCell align="center">Kategorie</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell align="left">{row.product.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.numberOfRating}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.rating.toFixed(1)}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.category}</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}



function ApprovedReviews() {
  const [pageNumber,setPageNumber] = useState(0);
  const [url, setUrl] = useState("/api/management/reviews?approved=true");
  const {userInfo} = useSelector(state=>state.login);
  const [config, setConfig] = useState({
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo?.access_token}`
        }
  });
  const {data, loading, error} = useFetch(url,config,pageNumber, true);
  const reviews = data!==null? data.content : null;
  

  return (
    <div>
      {
        error!==null && reviews===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading!==false &&  reviews===null && <CircularProgress color="warning" /> 
      }
      { data!=null && <Paginate data={data} setPageNumber={setPageNumber} pageNumber={pageNumber} PAGE_SIZE={10}/>}
      {   reviews &&
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell />
                      <StyledTableCell />
                        <StyledTableCell>Genehmigt am</StyledTableCell>
                        <StyledTableCell>Erstellt am</StyledTableCell>
                        <StyledTableCell>Bewertung</StyledTableCell>
                        <StyledTableCell>Kommentar</StyledTableCell>
                        <StyledTableCell>Benutzer</StyledTableCell>
                        <StyledTableCell>E-Mail</StyledTableCell>
                        <StyledTableCell>Artikel</StyledTableCell>
                        <StyledTableCell>Produktname</StyledTableCell>
                        <StyledTableCell>Produktbewertung</StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {reviews.map((row,index) => (
                      <Row key={row.id} row={row} />
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
        }
    </div>
  )
}

export default ApprovedReviews