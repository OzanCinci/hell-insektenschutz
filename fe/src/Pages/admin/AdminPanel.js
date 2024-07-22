import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Collapsable from './Collapsable';
import {  Outlet } from "react-router-dom";

const Container = styled.div`
    min-height: 600px;
    display: flex;
    flex-direction: row;
    padding-top: 110px;
    padding-left: 60px;
`;

const CollapsableContainer = styled.div`
    height: 100vh;
    width: fit-content; 
`;

const BodyModal = styled.div`
    min-height: 100vh;
    margin: auto;
    margin-left: auto;
    padding-top: 40px;
    width: 94vw;
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
  return (
    <Container>
        <CollapsableContainer>
            <Collapsable/>
        </CollapsableContainer>
        <BodyModal>
            <div>

            </div>
            <Outlet/>    
        </BodyModal>
    </Container>
  )
}

export default AdminPanel
