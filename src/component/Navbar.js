import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from 'styled-components';
// import styled from "styled-components";
import { ButtonContainer} from './Button'

export default class Navbar extends Component {
  render() {
    return (
      < NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <Link to="/" className="nav-link">
            products
          </Link>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="mr-2">
            <span>
              <i className="fas fa-cart-plus" /> My Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform:capitalize;
}
`;
