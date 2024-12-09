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
    margin-top: 20px;
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
