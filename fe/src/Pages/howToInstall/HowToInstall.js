import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './data';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadButton from '../../CustomComponents/DownloadButton';
import Button from '@mui/material/Button';


const CustomButton = styled(Button)`
    margin-top: 20px !important;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Column = styled.div``;

const LeftColumn = styled(Column)`
  width: 30%;
  height: fit-content;
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const MobileColumn = styled(Column)`
  width: 80%;
  max-width: 500px;
  position: fixed; /* Make it fixed to the viewport */
  top: 100px; /* Position it at the top */
  left: ${props => (props.show ? '50%' : '-100%')};
  transform: translateX(${props => (props.show ? '-50%' : '0')});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
  background: white;
  padding: 20px 20px;
  -webkit-box-shadow: 0px 3px 15px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 15px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,0.75);
  border-radius: 10px;
  z-index: 1000; /* Ensure it stays on top */
  transition: left 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 100px;
  right: 20px;
  background: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  z-index: 1001; /* Ensure it stays above the MobileColumn */
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const RightColumn = styled(Column)`
  width: 60%;

  @media only screen and (max-width: 800px) {
    width: 90vw;
  }
`;

const Section = styled.div`
  padding: 0px 0;
`;

const Title = styled.div`
  cursor: pointer;
  padding: 7px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;


const SingleContent = styled.div`
    margin-bottom: 150px;

    @media only screen and (max-width: 800px) {
        margin-bottom: 100px;
    }
`;


const SectionTitle = styled.div`
    font-size: 21px;
    text-align: left;
    padding-left: 50px;
    font-weight: bold;
    color: #696984;

    @media only screen and (max-width: 800px) {
        padding-left: 0px;
    }
`;

const TitleList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: -3%;
`;

const LeftColumnTitle = styled.div`
    font-size: 21px;
    font-weight: bold;
    margin-top: 10px;
    color: #696984;
`;

function HowToInstall() {
  const { category } = useParams();
  const json = data[category];
  const titles = json.map(item => item.id);

  const [activeSection, setActiveSection] = useState(titles[0]);
  const sectionRefs = useRef([]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(titles[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [titles]);

  const handleClick = (id) => {
    const section = sectionRefs.current.find((ref) => ref.id === id);
    if (section) {
      const yOffset = -200; // Offset for scrolling
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <Container>
      <ToggleButton onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </ToggleButton>
      <MobileColumn show={showMenu}>
        <LeftColumnTitle>ÜBERSICHT</LeftColumnTitle>
        
        {titles !== null &&
          titles.map((title, index) => (
            <TitleList key={index}>
              <CircleIcon style={{fontSize:"12px", color: "#f59f4c"}}/>
              <Title
                active={activeSection === title}
                onClick={() => handleClick(title)}
              >
                {title}
              </Title>
            </TitleList>
          ))}
      </MobileColumn>
      <Wrapper>
        <LeftColumn>
          <LeftColumnTitle>ÜBERSICHT</LeftColumnTitle>

          {titles !== null &&
            titles.map((title, index) => (
              <TitleList key={index}>
                <CircleIcon style={{fontSize:"12px", color: "#f59f4c"}}/>
                <Title
                  active={activeSection === title}
                  onClick={() => handleClick(title)}
                >
                  {title}
                </Title>
              </TitleList>
            ))}
        </LeftColumn>
        <RightColumn>
          {json !== null &&
            json.map((section, index) => (
              <Section
                key={index}
                id={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <SectionTitle>{section.id}</SectionTitle>
                  <SingleContent>
                        <a style={{textDecoration: "none", width: "100%"}} href={section.link}>
                            <CustomButton variant="outlined" color="warning" onClick={()=>{}}>PDF ansehen</CustomButton>
                        </a>
                        <br/>
                        <DownloadButton url={section.link} fileName={"montageanleitung-"+section.id} text={"Download als PDF"}/>
                  </SingleContent>
              </Section>
            ))}
        </RightColumn>
      </Wrapper>
    </Container>
  );
}

export default HowToInstall;
