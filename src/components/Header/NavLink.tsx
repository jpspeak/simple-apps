import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

const NavLink: FC<{ to: string }> = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname });
  return (
    <Link to={to}>
      <Text textDecor={match ? "underline" : ""}>{children}</Text>
    </Link>
  );
};

export default NavLink;
