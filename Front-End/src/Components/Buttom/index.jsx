
import { ComponentButtom } from "./styledButtom"

export const Buttom = ({ children, ...rest }) => {
  return <ComponentButtom {...rest}>{children}</ComponentButtom>;
};
