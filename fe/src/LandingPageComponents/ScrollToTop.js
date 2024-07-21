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
          //console.log("currentTime: ",currentTime);
          const compareDate = new Date(expirationTime);
          //console.log("expirationTime: ",compareDate);
          const tmp = new Date(refreshExpirationTime);
          //console.log("refreshExpirationTime: ",tmp);

          if (currentTime >= tmp) {
            dispatch(logoutAction(access_token))
          } else if (currentTime >= compareDate) {
              // time to refresh the token!
              dispatch(refreshAction(refresh_token));
          } else {
              console.log("Not expired yet!");
          }
        
        }

        window.scrollTo({
          top: 0,
          behavior: 'instant'
        });
        console.log("RENDERED!");
      }
    },[currentPath])
    

  return (
    <></>
  )
}

export default ScrollToTop