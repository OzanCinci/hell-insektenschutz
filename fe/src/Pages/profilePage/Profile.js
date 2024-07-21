import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserIcon from '../../images/account/user.png';
import LogoutIcon from '../../images/account/logout.png';
import DashBoardIcon from '../../images/account/dashboard.png';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { logoutAction } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';
import ProfileOrders from './ProfileOrders';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ProfileReview from './ProfileReview';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const ModifiedAlert = styled(Alert)`
  width: 90%;
  font-size: 18px !important;
  text-align: left;
`;

const Container = styled.div`
    margin-top: 110px;
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 150px;

    @media only screen and (max-width: 1600px) {
        padding-right: 80px;
    }

    @media only screen and (max-width: 1200px) {
        padding-right: 0px;
        justify-content: center;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        margin-top: 55px;
    }

`;

const LeftColumn = styled.div`
    border-right: 1px solid black;
    width: 30vw;

    @media only screen and (max-width: 1100px) {
        width: 40vw;
    }
    
    @media only screen and (max-width: 900px) {
        width: 100vw;
        margin-bottom: -25px;
    }
`;

const MiddleColumn = styled.div`
    width: 50vw;

    @media only screen and (max-width: 900px) {
        width: 80vw;
    }

    @media only screen and (max-width: 600px) {
        width: 95vw;
    }
`;


const UserImage = styled.img`
    height: 100px;
`;

const LeftColumnWrapper = styled.div`
    margin-bottom: 150px;
    text-align: left;
    padding: 10px 20px 10px 20px;

    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        margin: auto;
    }

    @media only screen and (max-width: 600px) {
        padding-left: 0px;
    }
`;

const LogOutButton = styled.div`
    text-align: right;
    cursor: pointer;
`;

const LogoutImage = styled.img`
    height: 28px;
    margin-left: 8px;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

const ListTitle = styled.div`
    font-size: 22px;
    margin-top: 15px;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

const ToggleButtonWrapper = styled.div`
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 40px;

    @media only screen and (max-width: 600px) {
        width: 100vw;
    }
`;

const CustomToggleButtonGroup = styled(ToggleButtonGroup)`
    width: 100%;
`;

const CustomToggleButton = styled(ToggleButton)`
    color: ${props=>props.didSelect ? "white !important" : "#f59f4c !important"};
    background-color: ${props=>props.didSelect ? "#f59f4c !important" : "white !important"};
    font-size: 18px !important;
    width: 33%;

    @media only screen and (max-width: 1500px) {
        font-size: 12px !important;
    }

    @media only screen and (max-width: 900px) {
        width: 33vw;
    }

    @media only screen and (max-width: 600px) {
        font-size: 12px !important;
    }
`;

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 20px auto;
`;

const DisplayDesktopOnly = styled.div`
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

const DisplayMobileOnly = styled.div`
    @media only screen and (min-width: 900px) {
        display: none;
    }
`;

const titleData = {
    "My Orders": "Meine Bestellungen",
    "User Info": "Nutzerinformationen",
    "My Reviews": "Meine Rezensionen"
}


function Profile() {
    const [alignment, setAlignment] = useState(null);
    const {userInfo} = useSelector(state=>state.login);
    const  {firstName, lastName, email, phone, access_token, createdAt, role, expirationTime} = userInfo ? userInfo : {};
    const {userDetail,loading,error} = useSelector(state=>state.userProfileDetail);

    const dispatch = useDispatch();
    const nav = useNavigate();

    function handleLogout(){
        // confirm to logout
        const result = window.confirm("Bestätigen Sie die Abmeldung");
        if (!result) return;
        dispatch(logoutAction(access_token));
    }

    function convertDate(date){
        if (!date) return;

        // Format the date into a human-readable string
        const parsedDate = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('de-DE', options).format(parsedDate);
        return formattedDate;
    }

    const handleChange = (event, newAlignment) => {
        if ( "User Info"===newAlignment && window.innerWidth > 900)
            return

        if (!newAlignment || alignment===newAlignment)
            return;
        
        setAlignment(newAlignment);
    };


    useEffect(()=>{
        if (!email)
            nav("/");

        /*

        const getDetailData = () => {
            if (access_token && loading===false && userDetail===null && selfID){
                console.log("user detail request is being made!");
                dispatch(userProfileDetailAction(access_token,selfID));
            }
            console.log("userDetail: ",userDetail);
        };

        return () => getDetailData();
        */
    },[email,nav])

    useEffect(()=>{
        if (window.innerWidth <= 900)
            setAlignment("User Info");
        else
            setAlignment("My Orders");
    },[]);


  return (
    <Container>
        <LeftColumn>
            <LeftColumnWrapper>
                <ToggleButtonWrapper>
                    <CustomToggleButtonGroup
                        color="warning"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        >
                        <CustomToggleButton didSelect={"User Info"===alignment} value="User Info">Nutzer</CustomToggleButton>
                        <CustomToggleButton didSelect={"My Orders"===alignment} value="My Orders">Bestellungen</CustomToggleButton>
                        <CustomToggleButton didSelect={"My Reviews"===alignment} value="My Reviews">Rezension</CustomToggleButton>
                    </CustomToggleButtonGroup>
                </ToggleButtonWrapper>
                <DisplayDesktopOnly>
                    <LogOutButton onClick={()=> handleLogout()}>
                        Ausloggen
                        <LogoutImage src={LogoutIcon} alt='logout-icon-for-users'/>
                    </LogOutButton>
                    {
                        role!=="USER" &&
                        <LogOutButton className='my-2' onClick={()=> nav('/admin-panel')}>
                            Admin Dashboard
                            <LogoutImage src={DashBoardIcon} alt='admin-icon-for-users'/>
                        </LogOutButton>
                    }
                    <UserInfoWrapper>
                        <IconWrapper>
                            <UserImage src={UserIcon}/>
                            <div>{`${firstName} ${lastName}`}</div>
                        </IconWrapper>
            
                        <TextField className='my-2' disabled label="Name" defaultValue={firstName}/>
                        <TextField className='my-2' disabled label="Nachname" defaultValue={lastName}/>
                    
                        <TextField className='my-2' disabled label="Email" defaultValue={email}/>
                        <TextField className='my-2' disabled label="Telefonnummer" defaultValue={phone}/>
                        <TextField className='my-2' disabled label="Beigetreten bei" defaultValue={convertDate(createdAt)}/>
                    </UserInfoWrapper>
                </DisplayDesktopOnly>
                
            </LeftColumnWrapper>
        </LeftColumn>
        <MiddleColumn>
            <ListTitle>
                {titleData[alignment]}
            </ListTitle>
            {
                error!==null && userDetail===null && <ModifiedAlert severity="error">error</ModifiedAlert>
            }
            {
                loading!==false &&  userDetail===null && <CircularProgress color="warning" /> 
            }
            {
                alignment==="My Orders" && <ProfileOrders token={access_token}/>
            }
            {
                alignment==="My Reviews" && <ProfileReview token={access_token}/>
            }
            {
                alignment==="User Info" && 
                <DisplayMobileOnly>
                    <LogOutButton onClick={()=> handleLogout()}>
                        Logout
                        <LogoutImage src={LogoutIcon} alt='logout-icon-for-users'/>
                    </LogOutButton>
                    {
                        role!=="USER" &&
                        <LogOutButton className='my-2' onClick={()=> nav('/admin-panel')}>
                            Admin Dashboard
                            <LogoutImage src={DashBoardIcon} alt='admin-icon-for-users'/>
                        </LogOutButton>
                    }
                    <UserInfoWrapper>
                        <IconWrapper>
                            <UserImage src={UserIcon}/>
                            <div>{`${firstName} ${lastName}`}</div>
                        </IconWrapper>
            
                        <TextField className='my-2' disabled label="First Name" defaultValue={firstName}/>
                        <TextField className='my-2' disabled label="Last Name" defaultValue={lastName}/>
                    
                        <TextField className='my-2' disabled label="Email" defaultValue={email}/>
                        <TextField className='my-2' disabled label="Telefonnummer" defaultValue={phone}/>
                        <TextField className='my-2' disabled label="Joined At" defaultValue={convertDate(createdAt)}/>
                    </UserInfoWrapper>
                </DisplayMobileOnly>
            }
        </MiddleColumn>
    </Container>
  )
}

export default Profile