import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import GridItem from '../components/GridItem';
import BeTheHero from '../images/undraw_wall_post_83ul.svg';
import MayTheForce from '../images/undraw_design_process_iqqg.svg';
import Surfboard from '../images/Surfboard.svg';
import TextComponent from '../components/TextComponent';
import TypeIt from 'typeit';

class Type extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    new TypeIt(this.el, this.props);
  }
  
  render(){
      return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
  }
}

const Header = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 90%;
  text-align: center;
  h1 {
    letter-spacing: -0.1rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 70%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const IconImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 5%;
    margin-top: 4rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 5%;
      margin-top: 14rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 15%;
      margin-top: 9rem;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  h4 {
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <React.Fragment>
    <Header>
      <Logo>Joe Spencer</Logo>
      
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
      <IconImage>
      <img src={Surfboard} alt="Surfboard" />
      </IconImage>
        <TextComponent />
        <h3>Based in MPLS</h3>
        
      </Hero>
    </Header>
    <Wrapper p={4} mb={[4, 4, 7]} mx="auto" justifyContent="space-between" flexWrap="wrap">
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          sizes={c.node.data.header_image.localFile.childImageSharp.sizes}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-around" flexWrap="wrap">
          <ServiceImage>
            <img src={BeTheHero} alt="Be The Hero" />
          </ServiceImage>
          <ServiceText>
            <h2>About Me</h2>
            <h3>I’m an experienced UX designer and frontend developer.</h3>
            <p>
            I have 12+ years of experience in agency and internal marketing roles. A motivated learner, I love to immerse myself in everything new in digital. I am a self-starter that can manage a project, but I also enjoy collaboration and working in a team atmosphere</p>
            
            <p>Currently I am working as a consultant for The Creative Group. Click the link below to find out about my availability.
            </p>
            
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-around" flexDirection="row-reverse" flexWrap="wrap">
        
          <ServiceText>
          
            <h2>Skillset</h2>
            <h4>
            <Type 
              strings="UX Design, HTML / CSS / JavaScript, React JS, Vue, Angular, Bootstrap, SASS / SCSS"
              loop={false}
              autoStart={false}
              lifeLike={true}
              speed={100}
            />
          </h4>
          </ServiceText>
          <ServiceText>
          <h2>Systems and Tools</h2>
          <h4>
          <Type 
              strings="Adobe Experience Manager, Adobe Marketing Cloud, Adobe Creative Cloud, HubSpot / HuBL, SiteCore SXA, VS Code, Atom, Sketch"
              loop={false}
              autoStart={false}
              lifeLike={true}
              speed={80}
            />
            </h4>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-around" flexWrap="wrap">
          
          <ServiceText>
            <h2>May the force be with you</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
            <ul>
              <li>Service Super</li>
              <li>Great Offer</li>
            </ul>
          </ServiceText>
          <ServiceImage>
            <img src={MayTheForce} alt="May the Force" />
          </ServiceImage>
        </Flex>
      </Wrapper>
    </PrimaryBG>
    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h1>Say hi!</h1>
      <h3><a href="mailto:joe@joespencer.info">joe@joespencer.info</a></h3>
      
    </Contact>
    <Footer />
  </React.Fragment>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
