import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import { Flex } from 'grid-emotion';

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.greyDark};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: '←';
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
        {isCase ? (
          <React.Fragment>
            <StyledLink to="/">Return to home</StyledLink>
            <div>Contact Us</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              Copyright &copy; {year} by{' '} Joe Spencer based on <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-bella">Bella</a>{'  '}
              </div>
              <div>
              <a href="https://github.com/JoeSpencer">Github</a> &mdash; <a href="https://twitter.com/spencerjoe">Twitter</a> &mdash; 
              {' '}<a href="https://www.linkedin.com/in/joespencer2/">LinkedIn</a>
            </div>
            
          </React.Fragment>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool,
};

Footer.defaultProps = {
  isCase: false,
};
