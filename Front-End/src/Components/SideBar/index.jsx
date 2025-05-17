/* eslint-disable jsx-a11y/alt-text */
import { LogoutOutlined } from "@mui/icons-material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

import { paths } from "../../constants/paths.js";
import listMenu from "./listMenu";
import {
  ContainerItems,
  ContainerMenu,
  ListLink,
  ContainerLogout,
  ExitButtom,
} from "./styledSideBar";
import { Logo } from "../Logo";
import { useUser } from "../../Hooks/UserContext";

export const SideBar = ({ path }) => {
  const navigate = useNavigate();
  const { logout } = useUser();
  return (
    <ContainerMenu>
      <Logo />

      {listMenu.map((item) => {
        return (
          <ContainerItems key={item.id}>
            <ListLink to={item.link} isActive={path === item.link}>
              {item.label}
              <item.icon className="icon" to={item.link} />
            </ListLink>
          </ContainerItems>
        );
      })}

      <ContainerLogout
        onClick={() => {
          logout();
          navigate(paths.Login);
        }}
      >
        <ExitButtom className="iconLogout">
          Sair
          <LogoutOutlined className="iconExit" />
        </ExitButtom>
      </ContainerLogout>
    </ContainerMenu>
  );
};

SideBar.propTypes = {
  path: PropTypes.string,
};
