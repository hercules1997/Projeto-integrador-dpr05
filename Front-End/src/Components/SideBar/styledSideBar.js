import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";
import { LogoutOutlined } from "@mui/icons-material";
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 20px 50px 15px;
  background-color: ${colorsTheme.background};
  box-shadow: 0px 0px 10px #000;
`;

export const ContainerItems = styled.div`
  margin-top: 10px;
  height: 20px;
  margin-bottom: 20px;
`;

export const ContainerLogout = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 40%;
  color: black;
  background: transparent;
  border: none;
  padding-right: 25px;
  font-size: 17px;
  cursor: pointer;

  .iconLogout {

    width: 100%;
    &:hover {
      color: ${colorsTheme.light};
    }
  }

  .iconExit {
    width: 50%;

    transform: rotateY(180deg);
    &:hover {
      color: ${colorsTheme.light};
    }
  }
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 1.5rem;
  border-top-left-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0px;
  background: ${(props) => (props.isActive ? colorsTheme.background : "none")};
  color: ${(props) => (props.isActive ? colorsTheme.light : colorsTheme.black)};
  box-shadow: ${(props) =>
    props.isActive
      ? `0px 2px 3px ${colorsTheme.light}`
      : `0px 2px 2px ${colorsTheme.shadow}`};

  transition: 0.5s;

  &:hover {
    color: ${colorsTheme.black};
    background-color: ${colorsTheme.hover};
    box-shadow: none;
  }
`;
export const ExitButtom = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 1.5rem;
  border-top-left-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0px;
  background: ${(props) => (props.isActive ? colorsTheme.background : "none")};
  color: ${colorsTheme.error};
  transition: 0.5s;

  &:hover {
    color: ${colorsTheme.light};
    background-color: ${colorsTheme.error};
  }
`;

export const ExitIcon = styled(LogoutOutlined)`
  &:hover {
    color: ${colorsTheme.light};
  }
`;
