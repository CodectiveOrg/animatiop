import { ReactElement } from "react";

import { useLocation, useNavigate } from "react-router";

import { NavLink } from "@mantine/core";

import { IconHome, IconSearch } from "@tabler/icons-react";

export default function NavComponent(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <NavLink
        active={location.pathname === "/"}
        label="Home"
        variant="light"
        leftSection={<IconHome />}
        onClick={() => navigate("/")}
      />
      <NavLink
        active={location.pathname === "/search"}
        label="Search"
        variant="light"
        leftSection={<IconSearch />}
        onClick={() => navigate("/search")}
      />
    </>
  );
}
