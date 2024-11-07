import React, {useState} from "react";
import {useSelector} from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { MenuItem, Select } from '@mui/material';
import {convertDate} from "../../../../utils/datetime";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import SaveIcon from '@mui/icons-material/Save';
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from "@mui/material/Button";
import {handleAdminDiscountChange} from "../../adminRequests";
import PositiveNotification from "../../../../CustomComponents/Notifications/PositiveNotification";
import NegativeNotification from "../../../../CustomComponents/Notifications/NegativeNotification";


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


function DiscountManagement({}) {
    const [pageNumber, setPageNumber] = useState(0);
    const { userInfo } = useSelector(state => state.login);
    const [url, setUrl] = useState("/api/management/discounts");
    const config = {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo?.access_token}`
        },
    };
    const {data, loading, error} = useFetch(url,config,pageNumber);
    const discountData = data!==null? data.content : null;

    const tableUpdate = () => {
        setPageNumber(prev=>prev+1);
        setPageNumber(prev=>prev-1);
    }



    if (error!==null && discountData===null) {
        return <ModifiedAlert severity="error">{error}</ModifiedAlert>;
    }

    if (loading!==null &&  discountData===null) {
        return <CircularProgress color="warning" />;
    }

    return (
        <>
            <PositiveNotification buttonId={"order-admin-panel-success-button"} msg={"Aktualisierung erfolgreich"}/>
            <NegativeNotification buttonId={"order-admin-panel-fail-button"} msg={"Aktualisierung fehlgeschlagen"}/>
            <TableContainer style={{maxWidth: "1300px", margin: "auto"}} component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell >Name</StyledTableCell>
                            <StyledTableCell >Prozentsatz</StyledTableCell>
                            <StyledTableCell >Gültig bis</StyledTableCell>
                            <StyledTableCell >Status</StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {discountData.map((row,index) => (
                            <Row key={row.id} row={row} tableUpdater={tableUpdate}/>
                        ))}
                    </TableBody>
                </Table>
        </TableContainer>
        </>
    );
}

export default DiscountManagement;



const percentageMap = {"5%": 0.05, "10%": 0.1, "15%": 0.15, "20%": 0.2, "25%": 0.25, "30%": 0.30, "35%": 0.35, "40%": 0.40, "45%": 0.45, "50%": 0.50,};
const percentageMapKeys = Object.keys(percentageMap);
const selectedStateMap = {"Aktiv": true, "Passiv": false};

function Row({ row, tableUpdater }) {
    const { userInfo } = useSelector(state => state.login);
    const [selectedPercentage, setSelectedPercentage] = React.useState(row.percentage * 100 + "%");
    const [selectedStatus, setSelectedStatus] = React.useState(row.active ? "Aktiv" : "Passiv");

    const handlePercentageChange = (event) => {
        const newPercentage = event.target.value;
        setSelectedPercentage(newPercentage);
    };

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setSelectedStatus(newStatus);
    };

    const handleReset = () => {
        setSelectedPercentage(row.percentage * 100 + "%");
        setSelectedStatus(row.active ? "Aktiv" : "Passiv");
    };

    const handleClickButton = async () => {
        const body = {
            percentage: percentageMap[selectedPercentage],
            active: selectedStateMap[selectedStatus],
        }

        const response = await handleAdminDiscountChange(userInfo?.access_token, row.id, body);
        if (response) {
            const btn = document.getElementById("order-admin-panel-success-button");
            if (btn)
                setTimeout(()=>btn.click(),0);
                tableUpdater();
        } else {
            const btn = document.getElementById("order-admin-panel-fail-button");
            if (btn)
                setTimeout(()=>btn.click(),0);
        }
    }

    return (
        <React.Fragment>
            <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <StyledTableCell component="th" scope="row">
                    {row.user ? row.user.email : "universal"}
                </StyledTableCell>
                <StyledTableCell align="left">
                    <Select
                        value={selectedPercentage}
                        onChange={handlePercentageChange}
                        displayEmpty
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: 100 }}
                    >
                        {percentageMapKeys.map((key) => (
                            <MenuItem key={key} value={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </Select>
                </StyledTableCell>
                <StyledTableCell align="left">
                    {row.validUntil ? convertDate(row.validUntil) : "-"}
                </StyledTableCell>
                <StyledTableCell align="left">
                    <Select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        displayEmpty
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: 100 }}
                    >
                        <MenuItem value="Aktiv">Aktiv</MenuItem>
                        <MenuItem value="Passiv">Passiv</MenuItem>
                    </Select>
                </StyledTableCell>
                <StyledTableCell align="left">
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<SaveIcon />}
                        sx={{ marginRight: 1 }}
                        onClick={handleClickButton}
                    >
                        sparen
                    </Button>
                    {/*
                        <Button
                        variant="outlined"
                        color="error"
                        startIcon={<RefreshIcon />}
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                    */}

                </StyledTableCell>
            </StyledTableRow>
        </React.Fragment>
    );
}