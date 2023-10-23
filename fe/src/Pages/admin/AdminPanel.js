import React from 'react'
import styled from 'styled-components';
import Collapsable from './Collapsable';

const Container = styled.div`
    border: 3px solid black;
    min-height: 600px;
    display: flex;
    flex-direction: row;
    padding-top: 110px;
`;

const CollapsableContainer = styled.div`
    height: 100vh;
    width: 15vw; 
    border-right: 1px solid black;
`;

const BodyModal = styled.div`
    height: 100vh;
    width: 85vw;
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
            Admin Data
        </BodyModal>
    </Container>
  )
}

export default AdminPanel
