import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button'
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from 'react-redux';
import { findUserAction } from '../../../actions/adminActions';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';
import { convertDate } from '../../../utils/datetime';
import { handleManagerSearch, handleRoleChange, handleUserSearchByEmail } from '../adminRequests';
import PositiveNotification from '../../../CustomComponents/Notifications/PositiveNotification';
import NegativeNotification from '../../../CustomComponents/Notifications/NegativeNotification';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Container = styled.div``;

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
  cursor: ${props => props.isChanged ? "pointer" : "not-allowed"};
`;

function Row({ row, initialRole, handleClickSave }) {
  const [role, setRole] = useState(initialRole);
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setRole(e.target.value);

    if (row.role !== e.target.value)
      setIsChanged(true);
    else
      setIsChanged(false);

    return;
  }

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset', backgroundColor: "#dbd9d9", marginBottom: "10px" } }}>
        <StyledTableCell>
        </StyledTableCell>
        <StyledTableCell align="left">
          <SelectionWrapper>
            <FormControl fullWidth>
              <InputLabel color="warning">Rolle</InputLabel>
              <Select
                color="warning"
                value={isChanged ? role : initialRole}
                label="Rolle"
                onChange={e => handleChange(e)}
              >
                <MenuItem value={"MANAGER"}>MANAGER</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                <MenuItem value={"USER"}>NUTZER</MenuItem>
              </Select>
            </FormControl>
            <SaveIconWrapper onClick={(e) => handleClickSave(e,row.id,role)} isChanged={isChanged}>
              <SaveIcon fontSize='large' />
            </SaveIconWrapper>
          </SelectionWrapper>
        </StyledTableCell>
        <StyledTableCell align="left">{row.firstName}</StyledTableCell>
        <StyledTableCell align="left">{row.lastName}</StyledTableCell>
        <StyledTableCell align="left">{row.email}</StyledTableCell>
        <StyledTableCell align="left">{convertDate(row.createdAt)}</StyledTableCell>
        <StyledTableCell align="left">{row.phone || "-"}</StyledTableCell>
        <StyledTableCell align="left">{row.role}</StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

function ChangeRole() {
  const { userInfo } = useSelector(state => state.login);
  const [q, setQ] = useState("");
  const [manuelError, setManuelError] = useState(null);
  const dispatch = useDispatch();
  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleClickSearch = async (e) => {
    e.preventDefault();

    if (q.length < 3) {
      setManuelError("Please search for longer keys");
      return;
    }
  
    setError(null);
    setLoading(true);
    const { status, data } = await handleUserSearchByEmail(q,userInfo?.access_token);
    setLoading(false);

    if (status) {
      //console.log("data: ", data);
      setUserData(data.content);
    } else {
      setError("error");
    }
  };

  const handleMouseDown = (event) => { event.preventDefault(); };

  const handleSearchManagers = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);
    const { status, data } = await handleManagerSearch(userInfo?.access_token);
    setLoading(false);

    if (status) {
      //console.log("data: ", data);
      setUserData(data.content);
    } else {
      setError("error");
    }
  }

  const handleClickSave = async (e, id, newRole) => {
    e.preventDefault();

    setManuelError(null);
    setLoading(true);
    const {status, data} = await handleRoleChange(id,newRole, userInfo?.access_token);
    setLoading(false);

    if (status) {
      const btn = document.getElementById("order-admin-panel-success-button");
      if (btn)
        setTimeout(()=>btn.click(),0);
    } else {
      const btn = document.getElementById("order-admin-panel-fail-button");
      if (btn)
        setTimeout(()=>btn.click(),0);
    }
  }

  return (
    <Container>
      <PositiveNotification buttonId={"order-admin-panel-success-button"} msg={"Aktualisierung erfolgreich"}/>
      <NegativeNotification buttonId={"order-admin-panel-fail-button"} msg={"Aktualisierung fehlgeschlagen"}/>
      <Wrapper>
        {manuelError && <ModifiedAlert className='my-3' severity="error">{manuelError}</ModifiedAlert>}
        <SearchBarWrapper>
          <FormControl sx={{ width: "28.8ch" }} variant="outlined">
            <InputLabel color="warning" htmlFor="search-box">
              E-mail
            </InputLabel>
            <OutlinedInput
              disabled={loading === true}
              value={q} onChange={e => setQ(e.target.value)}
              id="search-box" label="Search for" variant="outlined" color="warning"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickSearch}
                    onMouseDown={handleMouseDown}
                    edge="end"
                    disabled={loading === true}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              } />
          </FormControl>
          <ModifiedButton
            onClick={(e) => handleSearchManagers(e)}
            variant="outlined" color="warning"
            disabled={loading === true}
          >
            Zeige nur Manager
            <ModifiedSearchIcon />
          </ModifiedButton>
        </SearchBarWrapper>
      </Wrapper>

      {
        error !== null && usersData === null && <ModifiedAlert severity="error">{error}</ModifiedAlert>
      }
      {
        loading !== false && usersData === null && <CircularProgress color="warning" />
      }
      {usersData &&
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
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {usersData.map((row) => (
                <Row key={row.email} row={row} initialRole={row.role} handleClickSave={handleClickSave} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </Container>
  )
}

export default ChangeRole;
