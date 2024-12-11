import React from "react";
import { menu } from "../utils/constants";
import Link from "./Link";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column align-items-center p-2  vh-100 bg-info"
      style={{ width: "15%" }}
    >
      <div
        className="d-flex rounded-circle bg-secondary justify-content-center align-items-center"
        style={{ width: "60px", height: "60px" }}
      >
        <p>BB</p>
      </div>

      <nav className="d-flex flex-column">
        {menu.map((menuItem) => (
          <Link
            key={menuItem.id}
            Icon={menuItem.Icon}
            path={menuItem.path}
            name={menuItem.name}
          />
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
