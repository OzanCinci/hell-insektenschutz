import React from 'react'
import styled from 'styled-components';

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    padding: 20px;
`;

function LoginPopUp() {
  return (
    <div>
        {/* LOGIN POPUP */}
        <button id="loginPopup" style={{display:"none"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test123"></button>
        <div class="modal fade" id="test123" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="test123Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="test123Label">Mehr Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <ModalBody class="modal-body">
                    TEST 123
            </ModalBody>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">schließen</button>
            </div>
            </div>
        </div>
      </div>
      {/* LOGIN POPUP */}
    </div>
  )
}

export default LoginPopUp