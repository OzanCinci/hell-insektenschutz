import React from 'react'
import styled from 'styled-components';
import ManagerIcon from '../../images/account/manager.png'


const SingleItem = styled.div`
    margin: 9px 0px 0px 30px;
    cursor: pointer;
    text-align: left;
    width: fit-content;
    padding: 2px 5px 2px 5px;
    cursor: pointer;
    color: black;
    font-weight: 500;

    position: relative;

    &:hover {
        &::after {
            transform: translateX(50%);
        }
    }

    &::after {
        content: ">";
        position: absolute;
        left: 100%;
        bottom: 42%;
        width: 30px;
        height: 20px;
        font-size: 22px;
        transform: translateX(0%);
        transition: transform 150ms ease-in;
  }
`;

const TitleText = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: white;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    pading-top: 10px;
    padding-bottom: 20px;
`;

const ImageContainer = styled.div`
    background-image: linear-gradient(to right, #db5424, #debe40);
    padding-bottom: 20px;
`;

const Container = styled.div`
    .accordion-button:not(.collapsed) {
        color: white;
        background: #f59f4c;
        border: none;
        font-weight: bold;
    }

    .accordion-item {
        border: 1px solid #db5424;
        border: none;
        border-bottom: 1px solid grey;
        border-radius: 0px;
    }

    .accordion-button:focus {
        box-shadow: inherit;
    }

    .accordion-button:not(.collapsed)::after{
        filter: brightness(0%) invert(100%);
    }
`;

function Collapsable() {
  return (
    <Container>
        <ImageContainer>
            <ImageWrapper>
                <img src={ManagerIcon} alt='manager-icon' height='120px'/>
                <div>
                    <TitleText>Hakan</TitleText>
                    <TitleText>Aydin</TitleText>
                </div>
            </ImageWrapper>
            <TitleText>Role: Manager</TitleText>
        </ImageContainer>


        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div>Orders</div>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                    <div>
                        <SingleItem>Active Orders</SingleItem>
                        <SingleItem>Completed Orders</SingleItem>
                    </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <div>Reviews</div>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                        <div>
                            <SingleItem>Pending Reviews</SingleItem>
                            <SingleItem>Approved Reviews</SingleItem>
                        </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <div>Users</div>
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                    <div>
                        <SingleItem>All Users</SingleItem>
                        <SingleItem>Change Role</SingleItem>
                    </div>
                </div>
                </div>
            </div>
        </div>









        





    </Container>
  )
}

export default Collapsable