import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logoutAction, refreshAction } from '../actions/authActions';

function ScrollToTop() {
    const location = useLocation();
    const currentPath = location.pathname;
    const dispatch = useDispatch();

    const {userInfo} = useSelector(state=>state.login);
    const  {expirationTime, refresh_token, refreshExpirationTime, access_token} = userInfo ? userInfo : {};

    useLayoutEffect(()=>{
      return () => {
        
        if (expirationTime && refresh_token && refreshExpirationTime) {
          const currentTime = new Date();
          const compareDate = new Date(expirationTime);
          const tmp = new Date(refreshExpirationTime);

          if (currentTime >= tmp) {
            dispatch(logoutAction(access_token))
          } else if (currentTime >= compareDate) {
              dispatch(refreshAction(refresh_token));
          }
        }

        window.scrollTo({
          top: 0,
          behavior: 'instant'
        });
      }
    },[currentPath])
    

  return (
    <></>
  )
}

export default ScrollToTop
