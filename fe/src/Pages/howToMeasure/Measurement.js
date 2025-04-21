import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './data';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadButton from '../../CustomComponents/DownloadButton';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 170px;

  @media only screen and (max-width: 600px) {
    margin-top: 100px;
  }
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
  gap: 2px;

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

// Define the styled component
const HTMLContentWrapper = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

// Component to render HTML content with dangerouslySetInnerHTML
const HTMLContent = ({ value }) => (
  <HTMLContentWrapper dangerouslySetInnerHTML={{ __html: value }} />
);
const SingleContent = styled.div`
    margin-bottom: 40px;

    @media only screen and (max-width: 800px) {
        margin-bottom: 70px;
    }
`;

const ContentBodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const ImgWrapper = styled.div`
    width: ${props=>props.noRightPart ? "80%" : "55%"};

    @media only screen and (max-width: 800px) {
        width: 90vw;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const BodyWrapper = styled.div`
    width: ${props=>props.noRightPart ? "0%" : "40%"};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: 800px) {
        width: 85vw;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const CustomImg = styled.img`
    height: auto;
    width: 100%;
    align-self: center;
`;

const SectionTitle = styled.div`
    font-size: 21px;
    text-align: left;
    padding-left: 50px;
    font-weight: bold;
    color: #f59f4c;

    @media only screen and (max-width: 800px) {
        padding-left: 0px;
    }
`;

const ContentTitle = styled.div`
    font-size: 19px;
    text-align: left;
    padding-left: 50px;
    color: #696984;
    font-weight: bold;
    margin-top: 20px;

    @media only screen and (max-width: 800px) {
        padding-left: 0px;
    }
`;

const Description = styled.div`
    font-size: 17px;
    text-align: left;
    padding-left: 50px;
    margin-top: 10px;
    @media only screen and (max-width: 800px) {
        padding-left: 0px;
    }
`;

const RightPartImg = styled.img`
    height: auto;
    width: 100%;
    align-self: center;
    margin-top: 10px;
    min-height: 200px;
`;

const TitleList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const LeftColumnTitle = styled.h1`
    font-size: 21px;
    font-weight: bold;
    margin-top: 35px;
    color: #696984;
    text-align: left;

  @media only screen and (max-width: 800px) {
    margin-top: 0px;
  }
`;

const seoMap = {
  "plissee": "Plissees für Ihre Fenster ausmessen - Messanleitung",
  "jalousie": "Jalousien für Ihre Fenster richtig ausmessn - Messanleitung",
  "rollo": "Rollos für Ihre Fenster richtig ausmessen - Anleitung ",
  "lamellenvorhang": "Lamellenvorhang für Ihre Fenster richtig ausmessen - Anleitung"
};

function Measurement() {
  const { category } = useParams();
  const json = data[category];
  const titles = json.map(item => item.id);
  console.log("category: ", category);
  const h1 = seoMap[category];

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
      const yOffset = -120; // Offset for scrolling
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
        <LeftColumnTitle>{h1}</LeftColumnTitle>
        
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
          <LeftColumnTitle>{h1}</LeftColumnTitle>

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
                {
                    section.downloadButton && 
                    <DownloadButton
                        url={section.downloadButton.url}
                        fileName={section.downloadButton.fileName}
                        text="Als PDF herunterladen"
                    />
                }
                {section.data && section.data.map((content, contentIndex) => (
                  <SingleContent key={contentIndex}>
                    <ContentTitle>{content.title}</ContentTitle>
                    <Description>{content.description}</Description>
                    <ContentBodyWrapper>
                      <ImgWrapper noRightPart={content.noRightPart}>
                        <CustomImg alt='installation-image' src={content.image}/>
                      </ImgWrapper>
                      <BodyWrapper noRightPart={content.noRightPart}>
                        {
                          content.noRightPart !== true &&
                          content.rightPart.map((strHtml,i)=> {
                            if (strHtml.type==="html-content")
                              return (<HTMLContent value={strHtml.value} key={i}/>);                            
                            else 
                              return (<div key={i}>
                                <RightPartImg src={strHtml.value} alt={`description-image-for${content.title}`}/>
                              </div>);
                          })
                        }
                      </BodyWrapper>
                    </ContentBodyWrapper>
                  </SingleContent>
                ))}
              </Section>
            ))}
        </RightColumn>
      </Wrapper>
    </Container>
  );
}

export default Measurement;
