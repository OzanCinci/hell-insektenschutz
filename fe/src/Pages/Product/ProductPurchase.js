import React, { useState } from 'react'
import styled from 'styled-components';
import Carousel from './Carousel';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import GrauIcon from '../../images/color/grau.png';
import SilberIcon from '../../images/color/silber.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../constants/user';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Container = styled.div`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: flex-start;
  max-width: 1350px;
  margin: auto;
  margin-top: 180px;
  padding-left: 50px;
  padding-right: 50px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
`;

const CarouselWrapper = styled.div`
  width: fit-content;
`;

const SelectionWrapper = styled.div`
  width: 45%;
  height: fit-content;

  @media only screen and (max-width: 1000px) {
    width: 90vw;
    margin-top: -20%;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 21px;
  color: #696984;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Title = styled.div`
  color: #696984;
  font-size: 26px;
`;

const CustomTextField = styled(TextField)`
  width: 120px;
  background-color: white;
`;

const Measurements = styled.div`
  display: flex;
  gap: 20px;
  background-color: #eaeded;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
`;

const MeasurementsWrapper = styled.div`
  background-color: #eaeded;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  padding-left: 5%;
  min-height: 180px;
  margin-top: 60px;
  margin-bottom: 50px;
`;

const CustomInput = styled.input`
    width: 40px;
    text-align: center;
    border: none;
    border-bottom: 1px solid rgba(237, 108, 2, 0.5);
    border-top: 1px solid rgba(237, 108, 2, 0.5);
    color: #696984;
`;

const ButtonGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    @media only screen and (max-width: 800px) {
        margin-top: 10px;
    }
`;

const AddToCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 18%;
`;

const CustomAmountText = styled.div`
    border-bottom: 1px solid black;
    width: 40px;
    text-align: center;
    border-bottom: 1px solid rgba(237, 108, 2, 0.5);
    border-top: 1px solid rgba(237, 108, 2, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: fit-content;
`;

const TotalPrice = styled.div`
    font-size: 22px;

`;

const AddToCardContainer = styled.div`
    box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: fit-content;
    width: 45%;
    gap: 20px;
    min-width: 350px;
`;

const OptionsContainer = styled.div`
`;

const OptionTitle = styled.div`
  color: #696984;
  font-size: 22px;
  text-align: left;
  padding-left: 10%;
`;

const SingleOption = styled.div`
    text-align: left;
    margin-top: 40px;
`;

const ColorWrapper = styled.div`
    display: flex;
    gap: 8%;
    padding: 30px;
    padding-left: 5%;
`;

const Selection = styled.div`
    cursor: pointer;
`;

const ReviewContainer = styled.div`
    padding-left: 60px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    margin-top: 100px;

    @media only screen and (max-width: 1000px) {
      display: none;
    }
`;

const MobileReviewContainer = styled(ReviewContainer)`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
    width: 120%;
    transform: translateX(-15%);
    margin-top: 20px;
  }
`;

const CustomTextArea = styled.textarea`
    width: 145%;
    height: 130px;
    color: #696984;
    padding: 12px;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
`;

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ProductPurchase() {
  /// below code for notification popup
  const [open, setOpen] = React.useState(false);
  const vertical = 'top';
  const horizontal = 'right';

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  /// above code for notification popup

  const [breite, setBreite] = useState(400);
  const [tiefe, setTiefe] = useState(300);
  const [quantity,setQuantity] = useState(1);
  const [color, setColor] = useState(0);
  const [brush, setBrush] = useState("Ja");
  const [rating, setRating] = useState(null);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [comment, setComment] = useState("");

  const numberOfItemsInCart = useSelector(state => state.cart)?.numberOfItems;
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart);

  const handleChange = (event) => {
    setBrush(event.target.value);
  };

  const scrollAddReview = (e) => {
    e.preventDefault();
    let review;
    if (window.innerWidth>1000)
      review = document.getElementById("review-title").getBoundingClientRect().top - 150;
    else
      review = document.getElementById("review-title-mobile").getBoundingClientRect().top;
    
      if (review)
      window.scrollTo({ top: review , behavior: 'smooth' });
    return;
  }

  // to help finding the customized item easily later on...
  const generateUniqueCode = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

  const handleAddToCard = (e) => {
    e.preventDefault();
    console.log("add to card!!");
    const uniqueCode = generateUniqueCode();

    const item = {
      measurements: `${breite}x${tiefe}`,
      price: 140, // tekil fiyat
      quantity: 1, // 2 x 140€
      uniqueCode: uniqueCode,
      product: {
          category: "ürün kategorisi",
          description: "ürün hakkında açıklama: ",
          id: 1,
          imageUrl: "url",
          name: "Ürün adı 2",
          rating: 4.8,
          numberOfRating: 12
      }
  }

    dispatch({type:ADD_TO_CART,payload:item});

    const button = document.getElementById('open-notification-button');
    if (button)
      setTimeout(()=>button.click(),300);
  }

  return (
    <Container>
      <div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <button id='open-notification-button' style={{display: "none"}} variant="outlined" onClick={handleClick}>
          </button>
          <Snackbar 
            anchorOrigin={{ vertical, horizontal }}
            open={open} 
            autoHideDuration={6000} 
            onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Das Produkt wurde Ihrem Einkaufswagen hinzugefügt!
              </Alert>
          </Snackbar>
        </Stack>
      </div>
      <div>
        <CarouselWrapper>
          <Carousel/>
        </CarouselWrapper>
        <ReviewContainer>
            <Title id='review-title'>Eine Bewertung hinzufügen</Title>
            <div>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: "20px"
              }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
              <CustomTextArea value={comment} onChange={e=>setComment(e.target.value)} class="resizable-input"></CustomTextArea>
            </div>
            <Button style={{marginTop: "12px"}} variant='outlined' color='warning'>bestätigen</Button>
        </ReviewContainer>
      </div>
      <SelectionWrapper>
        <Title>Lichtschachtabdeckungen</Title>
        <RatingContainer>
          <RatingWrapper>
            <div className='d-flex gap-3'>
              <div>4.8</div>
              <Rating name="read-only" value={4.7} readOnly />
            </div>
            <div style={{textDecoration: "underline", cursor: "pointer"}}>(24 Rezension)</div>
          </RatingWrapper>
          <Button onClick={(e)=>scrollAddReview(e)} variant='outlined' color='warning'>Kommentar hinzufügen</Button>
        </RatingContainer>
        
        <OptionsContainer>
          <SingleOption>
            <Title>Schienenfarbe</Title>
            <hr></hr>
            <ColorWrapper>
              <Selection>
                  <div onClick={()=>setColor(0)}>
                    <img style={{borderRadius: "50%", overflow: "hidden", border: color === 0 ? "3px solid #f59f4c": "none"}} 
                      src={GrauIcon} 
                      height='40px' width='40px' 
                      alt='silber color icon'/>
                  </div>
                  <div style={{fontWeight:  color === 0 ? "bold": "normal", maxWidth:"130px"}}>Grau (mit Glimmer Effekt)</div>
              </Selection>
              <Selection>
                  <div onClick={()=>setColor(1)}>
                    <img style={{borderRadius: "50%", overflow: "hidden", border: color === 1 ? "3px solid #f59f4c": "none"}} 
                      src={SilberIcon} 
                      height='40px' width='40px' 
                      alt='silber color icon'/>
                  </div>
                  <div style={{fontWeight:  color === 1 ? "bold": "normal", maxWidth:"130px"}}>Silber E6/EV1 Eloxal</div>
              </Selection>
            </ColorWrapper>
            <div style={{paddingLeft: "30px", paddingRight: "30px", paddingBottom: "10px", color: "#696984"}}>
              Bitte beachten Sie, dass es aus drucktechnischen Gründen zu Farbabweichungen gegenüber der realen Farbe kommen kann.
              Beachten Sie, dass wir aufgrund verschiedener Herstellerverfahren der Pulverlieferanten keine Haftung bei Farbabweichungen zur ­Farbkarte
              übernehmen können. Zur Beurteilung des dekorativen Aussehens ist für Sichtflächen ein Betrachtungsabstand von 3 m, senkrecht zur
              Oberfläche, bei diffusem Tageslicht einzuhalten.
            </div>
          </SingleOption>


          <SingleOption>
            <Title>die optional Wandanschluss Bürsten </Title>
            <hr></hr>
            <FormControl sx={{ m: 1, minWidth: 120,  }} size="small">
              <InputLabel id="demo-select-small-label">Ihre Wahl</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={brush}
                label="Ihre Wahl"
                onChange={handleChange}
              >
                <MenuItem  value={"Ja"}>Ja</MenuItem>
                <MenuItem value={"Nein"}>Nein</MenuItem>
              </Select>
            </FormControl>
            <div style={{paddingLeft: "30px", paddingRight: "30px", paddingBottom: "10px", color: "#696984", marginTop: "10px"}}>
              Für den Fall, dass Ihre Lichtschachtabdeckung an einer oder mehreren Seiten an eine Wand anschließt, empfiehlt es sich, die optional wählbaren Wandabschlussbürsten anzubringen. Diese sorgen für einen zuverlässigen Schutz und eine sichere Abdichtung.
            </div>
          </SingleOption>

        </OptionsContainer>
        
        <MeasurementsWrapper>
          <Title>Abmessungen</Title>
          <Measurements>
            <CustomTextField 
                value={breite} 
                onChange={e=>setBreite(e.target.value)}
                label="Breite (mm)" 
                variant="outlined" 
                color="warning"/>
            <CustomTextField 
                value={tiefe} 
                onChange={e=>setTiefe(e.target.value)}
                label="Tiefe (mm)" 
                variant="outlined" 
                color="warning"/>
            </Measurements>
        </MeasurementsWrapper>
        
        <AddToCardContainer>

          <AddToCard>
            <QuantityWrapper>
              <div style={{width: "fit-content", fontSize: "20px"}}> 140 €</div>
              <ButtonGroupWrapper>
                  <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                      >
                      <Button style={{borderColor: "rgba(237, 108, 2, 0.5)"}} onClick={e=>setQuantity(prev=>prev>1?prev-1:prev)} variant="outlined" color='warning'>-</Button>
                      <CustomAmountText>
                          <div>
                              {quantity}
                          </div>
                      </CustomAmountText>
                      <Button onClick={e=>setQuantity(prev=>prev+1)} variant="outlined" color='warning'>+</Button>
                  </ButtonGroup>
              </ButtonGroupWrapper>
            </QuantityWrapper>
            <TotalPrice>
              <div>Gesamt:</div>
              <div>{140*quantity} €</div>
            </TotalPrice>
          </AddToCard>
          <Button onClick={e=>handleAddToCard(e)} style={{width: "100%"}} color='warning' variant="contained">In den Warenkorb</Button>
        </AddToCardContainer>

      </SelectionWrapper>

      
      <MobileReviewContainer>
            <Title id='review-title-mobile'>Eine Bewertung hinzufügen</Title>
            <div>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: "20px"
              }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
              <CustomTextArea value={comment} onChange={e=>setComment(e.target.value)} class="resizable-input"></CustomTextArea>
            </div>
            <Button style={{marginTop: "12px"}} variant='outlined' color='warning'>bestätigen</Button>
        </MobileReviewContainer>
    </Container>
  )
}

export default ProductPurchase