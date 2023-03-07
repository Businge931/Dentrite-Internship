import React from "react";
import { NavLink } from "react-router-dom";

type linkProps = {
  name: string;
  path: string;
  Icon: any;
};

function Link({ name, path, Icon }: linkProps) {
  return (
    <NavLink className=" text-light text-decoration-none p-2" to={path}>
      <span className="d-flex justify-content-start align-items-center gap-2">
        {Icon}
        {name}
      </span>
    </NavLink>
  );
}

export default Link;
