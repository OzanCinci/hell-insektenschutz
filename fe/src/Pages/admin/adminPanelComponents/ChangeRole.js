import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button'
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from 'react-redux';
import { findManagerUserAction, findUserAction } from '../../../actions/adminActions';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';

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

const Container = styled.div`

`;

const Wrapper = styled.div`
    margin: 0px auto;
    margin-top: 20px;
    padding-bottom: 40px;
`;

const SearchBarWrapper = styled.div`
    width: fit-content;
    margin-left: 100px;
`;

const ModifiedAlert = styled(Alert)`
  width: 90%;
  font-size: 18px !important;
  text-align: left;
  border: 1px solid black;
`;

const ModifiedButton = styled(Button)`
    padding: 15px !important;
    margin-left: 40px !important;
`;

const ModifiedSearchIcon = styled(SearchIcon)`
    margin-left: 20px;
    margin-right: -6px;
`;

const SelectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`;

const SaveIconWrapper = styled.div`
    cursor: ${props => props.isChanged? "pointer":"not-allowed"};
`;

function Row({ row, initialRole }) {
    const [open, setOpen] = React.useState(false);
    const [role,setRole] = React.useState(initialRole);
    const [isChanged,setIsChanged] = React.useState(false);
  
    const handleChange = (e) => {
        e.preventDefault();
        setRole(e.target.value);

        if (row.role!==e.target.value)
            setIsChanged(true);
        else
            setIsChanged(false);

        return;
    }

    const handleClickSave = () => {
        // call dispatch to give new rights!!
    }

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
          <StyledTableCell  align="left">

            <SelectionWrapper>
                <FormControl fullWidth>
                    <InputLabel color="warning">Rolle</InputLabel>
                    <Select
                        color="warning"
                        value={isChanged?role:initialRole}
                        label="Rolle"
                        onChange={e=>handleChange(e)}
                        >
                        <MenuItem value={"MANAGER"}>MANAGER</MenuItem>
                        <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                        <MenuItem value={"USER"}>NUTZER</MenuItem>
                    </Select>
                </FormControl>
                <SaveIconWrapper onClick={()=>handleClickSave()} isChanged={isChanged}>
                    <SaveIcon fontSize='large'/>
                </SaveIconWrapper>
            </SelectionWrapper>


          </StyledTableCell>
          <StyledTableCell  align="left">{row.firstname}</StyledTableCell>
          <StyledTableCell  align="left">{row.lastname}</StyledTableCell>
          <StyledTableCell  align="left">{row.email}</StyledTableCell>
          <StyledTableCell  align="left">{convertDate(row.createdAt)}</StyledTableCell>
          <StyledTableCell  align="left">{row.phone}</StyledTableCell>
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




function ChangeRole() {
    const [q,setQ] = useState("");
    const [manuelError,setManuelError] = useState(null);
    const dispatch = useDispatch();
    const {usersData,loading,error} = useSelector(state=>state.findUser);
    const {userInfo} = useSelector(state=>state.login);
  
  
    const handleClickSearch = () => {
        if (q.length<3){
            setManuelError("Please search for longer keys");
            return;
        }
        console.log("Q: ",q);
        console.log("making the request");
        setManuelError(null);
        if (userInfo?.access_token)
            dispatch(findUserAction(userInfo?.access_token,q))
    };
    const handleMouseDown = (event) => {event.preventDefault();};

    const handleSearchManagers = (e) => {
        e.preventDefault();

        setManuelError(null);
        if (userInfo?.access_token)
            dispatch(findManagerUserAction(userInfo?.access_token))
    }
      

  return (
    <Container>
        <Wrapper>
            {manuelError && <ModifiedAlert className='my-3' severity="error">{manuelError}</ModifiedAlert>}
            <SearchBarWrapper>
                <FormControl sx={{ width: "28.8ch" }} variant="outlined">
                <InputLabel color="warning" htmlFor="search-box">
                  Suchbegriff
                </InputLabel>
                <OutlinedInput 
                    disabled={loading===true}
                    value={q} onChange={e=>setQ(e.target.value)}
                    id="search-box" label="Search for" variant="outlined" color="warning"
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickSearch}
                        onMouseDown={handleMouseDown}
                        edge="end"
                        disabled={loading===true}
                        >
                        <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                    }/>
                </FormControl>
                <ModifiedButton 
                  onClick={(e)=>handleSearchManagers(e)} 
                  variant="outlined" color="warning"
                  disabled={loading===true}
                  >
                        Zeige nur Manager 
                    <ModifiedSearchIcon/>
                </ModifiedButton>
            </SearchBarWrapper>
        </Wrapper>

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
                      <Row key={row.email} row={row} initialRole={row.role} />
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
        }
    </Container>
  )
}

export default ChangeRole