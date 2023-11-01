import React, { useEffect } from 'react'
import styled from 'styled-components';
import Collapsable from './Collapsable';
import { useSelector } from 'react-redux';
import {  Outlet } from "react-router-dom";

const Container = styled.div`
    min-height: 600px;
    display: flex;
    flex-direction: row;
    padding-top: 110px;
`;

const CollapsableContainer = styled.div`
    height: 100vh;
    width: 12vw; 
    border-right: 1px solid black;
`;

const BodyModal = styled.div`
    min-height: 100vh;
    width: 88vw;
`;

/*
orders:
    - active orders
    - non-active orders
reviews:
    - pending reviews
    - approved reviews
users:
    - all user list
sales:
    - TODO: sales için liste ekle
*/


function AdminPanel() {
    const {userInfo} = useSelector(state=>state.login);
    

  return (
    <Container>
        <CollapsableContainer>
            <Collapsable/>
        </CollapsableContainer>
        <BodyModal>
            <div>
                Admin DashBoard
            </div>
            <Outlet/>    
        </BodyModal>
    </Container>
  )
}

export default AdminPanel
