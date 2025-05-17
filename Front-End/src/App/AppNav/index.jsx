import PropTypes from "prop-types";
import React from "react";

import {
  Container,
  ContainerItems,
  ContainerLeft,
  ContainerRigth,
} from "./styleAppNav";

import { Ticket, Stock, ListTicket, History, StockCharts } from "../index";

import { paths } from "../../constants/paths.js";
import { SideBar } from "../../Components";

function AppNav({ path }) {
  return (
    <Container>
      <ContainerLeft>
        <SideBar path={path} />
      </ContainerLeft>
      <ContainerRigth>
        <ContainerItems>
          {path === paths.Deshboard && <StockCharts path={paths.Deshboard} />}
          {path === paths.NewItem && <Ticket path={paths.NewItem} />}
          {path === paths.Stock && <Stock path={paths.Stock} />}

          {path === paths.ListTicket && <ListTicket path={paths.ListTicket} />}
          {path === paths.History && <History path={paths.History} />}
        </ContainerItems>
      </ContainerRigth>
    </Container>
  );
}

AppNav.propTypes = {
  path: PropTypes.string,
};

export default AppNav;
