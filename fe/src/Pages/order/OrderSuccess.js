import React, { useEffect } from 'react';
import styled from 'styled-components';
import SuccessIcon from '../../images/account/success.png';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import { convertDate } from '../../utils/datetime';
import Alert from '@mui/material/Alert';

const Container = styled.div`
    min-height: 400px;
    margin-top: 120px;
    background: white;

    @media only screen and (max-width: 800px) {
        margin-top: 70px;
    }
`;

const ModifiedAlert = styled(Alert)`
    width: 90%;
    font-size: 18px !important;
    text-align: left;
    border: 1px solid black;
    margin: auto;
    max-width: fit-content;
`;

const CustomImg = styled.img`
    margin-top: 10px;
    margin-bottom: -15px;
    height: 150px;
    width: auto;
`;

const Explanation = styled.div`
    padding: 10px 20px;
    font-size: 19px;
    max-width: 800px;
    min-width: 300px;
    margin: auto;
    margin-top: 0px;
    text-align: left;
    color: #696984;

    b {
        color: orange;
    }
`;

const Desc = styled.div`
    padding: 10px 20px;
    font-size: 19px;
    max-width: 600px;
    min-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: left;
    border: 1px solid #ddd;

    @media only screen and (max-width: 800px) {
        margin-top: 0px;
    }

    @media only screen and (max-width: 800px) {
        max-width: 95vw;
        font-size: 17px;
    }

    th {
        padding: 8px;
        text-align: left;
    }

    td {
        padding: 8px;
        text-align: left;
        white-space: pre-wrap; /* CSS property to break long lines */
        word-wrap: break-word; /* CSS property to wrap long words */
        word-break: break-all; /* CSS property to break long words if needed */
    }

    h3 {
        color: #696984;
        font-weight: bold;
    }
`;

const SingleItemBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 25px;
    font-size: 18px;

    .oi-secondary-name {
        font-size: 20px;
        text-align: left;
        font-weight: 600;
        color: #696984;
    }

    .oi-title {
        font-size: 23px;
        text-align: left;
        color: black;
        font-weight: 600;
    }

    @media only screen and (max-width: 800px) {
        width: 95vw;
        padding-bottom: 20px;
    }
`;

const SingleItem = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        align-items: flex-start;
        width: fit-content;
        width: 100%;
    }
`;

const OrderItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    margin: auto;
    gap: 30px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
    max-width: 1350px;
    margin: auto;
    padding: 10px 30px;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        padding: 10px 0px;
    }
`;

const BankingTitle = styled.div`
    font-size: 21px;
    font-weight: bold;
    color: #696984;
    text-decoration: underline;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const config = {
    "method": "get",
    "headers": {
        'Content-Type': 'application/json',
    }
};

const orderStatusMap = {
    ACTIVE: "AKTIV",
    PENDING_PAYMENT: "Zahlung ausstehend",
    IN_SHIPPING: "In Versand",
    DELIVERED: "Zugestellt",
}

function OrderSuccess() {
    const query = useQuery();
    const traceCode = query.get('traceCode');
    const init = query.get('init');
    const pending = query.get('pending');
    const url = `/api/orders/${traceCode}`;
    const { data, loading, error } = useFetch(url, config, 0);

    useEffect(()=>{
        console.log("AAAAA: ", traceCode, init, data?.orderStatus);
    },[traceCode,init]);

    useEffect(()=>{
        console.log("data: ", data);
    },[data]);

  return (
    <>
    {
        data && loading!==true && !error && 
        
            <Container>
                {
                    init==="true" &&
                    <>
                        <CustomImg src={SuccessIcon}/>
                        <Explanation>
                            Vielen Dank für Ihre Bestellung. Eine Kopie der Bestellübersicht wurde an Ihre E-Mail gesendet. Bitte prüfen Sie auch den Spam-Ordner. Wir informieren Sie per E-Mail über den Bestellstatus. Die Details Ihrer Bestellung finden Sie in Ihrem Profil. Wenn Sie kein registrierter Benutzer sind, nutzen Sie die Seite Bestellung. Notieren Sie Ihre <b>Bestellnummer</b> zur Abfrage. Mit dem Sendungscode können Sie Ihre Bestellung auf der Website des Lieferunternehmens nachverfolgen.
                        </Explanation>
                    </>
                }
                {
                    pending==="true" &&
                    <div style={{marginTop: "80px" , padding: "10px 20px"}}>
                        <Explanation>
                            Warnung: Wenn Sie per Banküberweisung bezahlen, wird die Bestellung ohne sofortige Zahlung erstellt. Überweisen Sie den Gesamtbetrag an das angegebene Bankkonto und fügen Sie die <b>Bestellnummer</b> in den <b>Verwendungszweck</b> ein. Eine Bestellbestätigung wurde an Ihre E-Mail gesendet. Prüfen Sie bitte auch den Spam-Ordner. Wir informieren Sie per E-Mail über den Bestellstatus. Bestelldetails finden Sie in Ihrem Profil oder auf der Bestellseite. Notieren Sie Ihre Bestellnummer und den Sendungscode zur Nachverfolgung.
                        </Explanation>
                        <div style={{textAlign: "left", fontSize: "20px", padding: "10px 20px", margin: "auto", minWidth: "300px", maxWidth: "800px"}}>
                            <BankingTitle>Bitte zahlen Sie den Gesamtbetrag an</BankingTitle>
                            <div>Hakan Aydin</div>
                            <div>DE25661900000010661510</div>
                            <div>GENODE61KA1</div>
                            <div>Volksbank pur eG</div>
                        </div>
                    </div>
                }

                <Wrapper>
                    <Desc>
                    <h3>Bestelldetails</h3>
                        <table>
                            <tr>
                                <th>Besitzer:</th>
                                <td>{data.userName}</td>
                            </tr>
                            <tr>
                                <th>Bestellnummer:</th>
                                <td>{`${data.traceCode.slice(0,3)}-${data.traceCode.slice(3,6)}-${data.traceCode.slice(6,9)}`}</td>
                            </tr>
                            <tr>
                                <th>Sendungscode:</th>
                                <td>{data.cargoCode || "-"}</td>
                            </tr>
                            <tr>
                                <th>Bestellstatus:</th>
                                <td>{orderStatusMap[data.orderStatus]}</td>
                            </tr>
                            <tr>
                                <th>Bestelldatum:</th>
                                <td>{convertDate(data.createdAt)}</td>
                            </tr>
                            <tr>
                                <th>Adresse:</th>
                                <td>{data.street} {data.doorNumber}, {data.city} / {data.state} ({data.postalCode})</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{data.userEmail}</td>
                            </tr>
                            <tr>
                                <th>Artikel:</th>
                                <td>{data.price.toFixed(2)}€</td>
                            </tr>
                            <tr>
                                <th>Versand:</th>
                                <td>{data.shippingPrice.toFixed(2)}€</td>
                            </tr>
                            <tr>
                                <th>Gesamt:</th>
                                <td>{(data.shippingPrice + data.price).toFixed(2)}€</td>
                            </tr>
                        </table>
                    </Desc>
                    <OrderItemsWrapper>
                        {
                            data.orderItems.map((oi,index)=>{
                                const attributesArr = JSON.parse(oi.attributes);
                                return (
                                    <SingleItem key={index}>
                                        <img width='200px' height='auto' src={oi.cartImage}/>
                                        <SingleItemBody>
                                            <div className='oi-title'>{oi.itemName}</div>
                                            <div className='oi-secondary-name'>{oi.secondaryName}</div>
                                            <div style={{textAlign: "left"}}>
                                                {
                                                    attributesArr.map((attr,i)=>{
                                                        return (
                                                            <li key={i}>{attr}</li>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='oi-secondary-name my-3'>{`${oi.quantity} x ${oi.price.toFixed(2)}€`}</div>
                                        </SingleItemBody>
                                    </SingleItem>
                                )
                            })
                        }
                    </OrderItemsWrapper>
                </Wrapper>
            </Container>
    }
    {
        loading===true && 
        <div style={{marginTop: "200px"}}>
            <CircularProgress color="warning" /> 
        </div>
    }
    {
        error &&
        <div style={{marginTop: "150px"}}>
            <ModifiedAlert severity="error">{error}</ModifiedAlert>
        </div>
    }
   </> 
  )
}

export default OrderSuccess;
