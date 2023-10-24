import React from "react";
import styled from "styled-components";
import avatar from "../../assets/img/avatar1.png";
function Navigation() {
  return (
    <NavStyled>
      <div className="user-content">
        <img src="{avatar}" alt="" />
        <div className="basic-user-info">
          <h2>Johnny</h2>
          <p>Your current account value</p>
        </div>
      </div>
      <ul className="menu-items"></ul>
    </NavStyled>
  );
}

const NavStyled = styled.nav``;

export default Navigation;
