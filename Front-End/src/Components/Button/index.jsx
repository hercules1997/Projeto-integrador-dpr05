import { ComponentButton } from "./styleButton";

// eslint-disable-next-line react/prop-types
export function Button({ children, ...rest }) {
  return <ComponentButton {...rest}>{children}</ComponentButton>;
}
