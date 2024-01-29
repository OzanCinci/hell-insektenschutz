import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reviewsAction } from '../../../actions/adminActions';
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
import CachedIcon from '@mui/icons-material/Cached';


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
        <StyledTableCell align="left">{convertDate(row.approvedAt)}</StyledTableCell>
        <StyledTableCell align="left">{convertDate(row.createdAt)}</StyledTableCell>
        <StyledTableCell align="left">{row.rating}</StyledTableCell>
        <StyledTableCell align="left">{row.comment}</StyledTableCell>
        <StyledTableCell align="left">{row.userName}</StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
        <StyledTableCell align="left">{row.product.name}</StyledTableCell>
        <StyledTableCell align="left">{row.product.rating.toFixed(1)}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Product Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center">Produktname</StyledTableCell>
                    <StyledTableCell align="center">Anzahl der Bewertungen</StyledTableCell>
                    <StyledTableCell align="center">Gesamtbewertung</StyledTableCell>
                    <StyledTableCell align="center">Kategorie</StyledTableCell>
                    <StyledTableCell align="center">Beschreibung</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell align="left">{row.product.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.numberOfRating}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.rating.toFixed(1)}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.category}</StyledTableCell>
                    <StyledTableCell align="left">{row.product.description}</StyledTableCell>
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
  const {reviews,loading,error} = useSelector(state=>state.reviews);
  const {userInfo} = useSelector(state=>state.login);
  const dispatch = useDispatch();

  const getApprovedReviews = ()=>{
    if (reviews===null && userInfo?.access_token)
        dispatch(reviewsAction(userInfo?.access_token))
    console.log("getApprovedReviews: ",reviews);
  }

  // debouncer
  function debounce(func, delay) {
    let timerId;
  
    return function (...args) {
      clearTimeout(timerId);
  
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const refreshData = () => {
    dispatch(reviewsAction(userInfo?.access_token));
  }

  const debouncedRefreshData = debounce(refreshData, 500);


  useEffect(()=>{
      return ()=>getApprovedReviews();
  },[reviews]);


  return (
    <div>
      {
        error!==null && reviews===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading!==false &&  reviews===null && <CircularProgress color="warning" /> 
      }
      {
        reviews && 
        <ReloadWrapper onClick={()=>debouncedRefreshData()}>
          <CachedIcon fontSize='large'/>
        </ReloadWrapper>
      }
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
                        <StyledTableCell>Produktname</StyledTableCell>
                        <StyledTableCell>Produktbewertung</StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {reviews.map((row,index) => (
                      <Row key={index} row={row} />
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
        }
    </div>
  )
}

export default ApprovedReviews