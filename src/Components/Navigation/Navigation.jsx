import React from "react";
import styled from "styled-components";
import avatar from "../../assets/img/avatar1.png";
import { menuItems } from "../../utils/menuItems";
import { ExitToAppRounded } from "@mui/icons-material";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-content">
        <img src={avatar} alt="" />
        <div className="basic-user-info">
          <h2>Johnny</h2>
          <p>Your current account value</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((menuItem, index) => {
          return (
            <li
              key={menuItem.id}
              index={index}
              className={active === menuItem.id ? "active" : ""}
              onClick={() => setActive(menuItem.id)}
            >
              {menuItem.icon}
              <span>{menuItem.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>
          <ExitToAppRounded />
          Sign Out
        </li>
      </div>
    </NavStyled>
  );
}

const colors = {
  primary: "rgba(35, 35, 97, 2)",
  secondary: "rgba(35, 35, 97, 0.6)",
  background: "#fcf3f8",
  white: "#ffffff",
};

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid ${colors.white};
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-content {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
      background: ${colors.background};
      border: 3px solid ${colors.white};
      padding: 0.2rem;
      box-shadow: 2px 3px 19px rgba(0, 0, 0, 0.6);
    }
    h2 {
      color: ${colors.primary};
    }
    p {
      color: ${colors.secondary};
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: ${colors.secondary};
      padding-left: 1rem;
      position: relative;
      i {
        color: ;
        font-size: 1.4rem;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  .active {
    color: ${colors.primary}!important;
    i {
      color: ${colors.primary}!important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background: #222260;
      border-radius: 0 12px 12px 0;
    }
  }
`;

export default Navigation;
