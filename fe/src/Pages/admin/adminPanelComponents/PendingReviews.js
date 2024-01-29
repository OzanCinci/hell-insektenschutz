import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveReview, deleteReview, pendingReviewsAction } from '../../../actions/adminActions';
import { convertDate } from '../../../utils/datetime';
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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state=>state.login);

  const handleApproveSubmit = (reviewID,productID,e)=>{
    e.preventDefault();

    const result = window.confirm("Genehmigung, um den Bewertungsstatus zu ändern");
    if (!result) return;

    if (userInfo?.access_token && reviewID!==null && productID!==null)
      dispatch(approveReview(userInfo?.access_token,reviewID,productID));
  }

  const handleDeleteSubmit = (reviewID,e)=>{
    e.preventDefault();

    const result = window.confirm("Genehmigen Sie, um die Bewertung zu löschen");
    if (!result) return;

    if (userInfo?.access_token && reviewID!==null)
      dispatch(deleteReview(userInfo?.access_token,reviewID));
  }

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
        <StyledTableCell align="left">

            <Stack direction="row" spacing={2}>
              <Button onClick={(e)=> handleApproveSubmit(row.id,row.product.id,e)} color="warning" variant="contained" endIcon={<SendIcon />}>
                Genehmigen
              </Button>
              <IconButton onClick={(e)=> handleDeleteSubmit(row.id,e)} aria-label="delete" size="large">
                <DeleteIcon />
              </IconButton>
            </Stack>

        </StyledTableCell>
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





function PendingReviews() {
  const {reviews,loading,error} = useSelector(state=>state.pendingReviews);
  const {userInfo} = useSelector(state=>state.login);
  const dispatch = useDispatch();

  const getReviews = ()=>{
    if (reviews===null && userInfo?.access_token)
        dispatch(pendingReviewsAction(userInfo?.access_token))
    console.log("getReviews: ",reviews);
}


useEffect(()=>{
    return ()=>getReviews();
},[reviews]);


  return (
    <div>
      {
        error!==null && reviews===null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading!==false &&  reviews===null && <CircularProgress color="warning" /> 
      }
      {   reviews &&
          <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell />
                      <StyledTableCell />
                        <StyledTableCell>Genehmigen</StyledTableCell>
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

export default PendingReviews