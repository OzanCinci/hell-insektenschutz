import React, { useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import UserIcon from '../images/account/user.png';
import LogoutIcon from '../images/account/logout.png';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { logoutAction } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    margin-top: 115px;
    min-height: 50vh;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }

`;

const LeftColumn = styled.div`
    border-right: 1px solid black;
    width: 20vw;
    
    @media only screen and (max-width: 900px) {
        border: 1px solid black;
        width: 80vw;
    }
`;

const MiddleColumn = styled.div`
    border-right: 1px solid black;
    width: 50vw;

    @media only screen and (max-width: 900px) {
        border: 1px solid purple;
        width: 80vw;
    }
`;

const RightColumn = styled.div`
    width: 30vw;

    @media only screen and (max-width: 900px) {
        border: 1px solid orange;
        width: 80vw;
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
        width: 90%;
        margin: auto;
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


function Profile() {
    const {userInfo} = useSelector(state=>state.login);
    const  {
        firstName, lastName, email, phone, access_token, createdAt
    } = userInfo ? userInfo : {};
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


    useEffect(()=>{
        //console.log("createdAt:", createdAt);
        if (!email)
            nav("/");
    },[email,createdAt,nav])


    useLayoutEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])


  return (
    <Container>
        <LeftColumn>
            <LeftColumnWrapper>
                <LogOutButton onClick={()=> handleLogout()}>
                    Logout
                    <LogoutImage src={LogoutIcon} alt='logout-icon-for-users'/>
                </LogOutButton>
                <IconWrapper>
                    <UserImage src={UserIcon}/>
                    <div>{`${firstName} ${lastName}`}</div>
                </IconWrapper>
      
                <TextField className='my-2' disabled label="First Name" defaultValue={firstName}/>
                <TextField className='my-2' disabled label="Last Name" defaultValue={lastName}/>
            
                <TextField className='my-2' disabled label="Email" defaultValue={email}/>
                <TextField className='my-2' disabled label="Telefonnummer" defaultValue={phone}/>
                <TextField className='my-2' disabled label="Joined At" defaultValue={convertDate(createdAt)}/>
                
            </LeftColumnWrapper>
        </LeftColumn>
        <MiddleColumn>
            <div>
                My Orders
            </div>
            <div>
                No order taken
            </div>
            <button>
                See products
            </button>
        </MiddleColumn>
        <RightColumn>
            <div>
                My Reviews
            </div>
            <div>
                No reviews taken
            </div>
            <button>
                Leave a review
            </button>
        </RightColumn>
    </Container>
  )
}

export default Profile