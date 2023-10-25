import React, { useEffect } from 'react'
import styled from 'styled-components';
import Collapsable from './Collapsable';
import { useDispatch, useSelector } from 'react-redux';
import { activeOrdersAction } from '../../actions/adminActions';
import ActiveOrderTable from './adminPanelComponents/ActiveOrderTable';

const Container = styled.div`
    border: 3px solid black;
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
    height: 100vh;
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
    const dispatch = useDispatch();
    const activeOrders = useSelector(state=>state.activeOrders);
    const {userInfo} = useSelector(state=>state.login);

    const getActiveOrders = ()=>{
        if (!activeOrders && userInfo?.access_token)
            dispatch(activeOrdersAction(userInfo?.access_token))
        console.log("activeOrders: ",activeOrders);
    }


    useEffect(()=>{
        return ()=>getActiveOrders();
    },[activeOrders]);

  return (
    <Container>
        <CollapsableContainer>
            <Collapsable/>
        </CollapsableContainer>
        <BodyModal>
            <div>
                Admin Data
            </div>
            {
                activeOrders && activeOrders.orderData && 
                <ActiveOrderTable rows={activeOrders.orderData}/>
            }
        </BodyModal>
    </Container>
  )
}

export default AdminPanel
