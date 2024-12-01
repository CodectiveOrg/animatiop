import { ReactElement } from "react";

import { useLocation, useNavigate } from "react-router";

import { NavLink } from "@mantine/core";

import {
  IconArticle,
  IconCategory2,
  IconFlame,
  IconHistory,
  IconHome,
  IconLogout,
  IconSearch,
} from "@tabler/icons-react";

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
        active={location.pathname === "/special-offers"}
        label="Specia Offers"
        variant="light"
        leftSection={<IconFlame />}
        onClick={() => navigate("/special-offers")}
      />
      <NavLink
        active={location.pathname === "/categories"}
        label="Categories"
        variant="light"
        leftSection={<IconCategory2 />}
        onClick={() => navigate("/categories")}
      />
      <NavLink
        active={location.pathname === "/search"}
        label="Search"
        variant="light"
        leftSection={<IconSearch />}
        onClick={() => navigate("/search")}
      />
      <NavLink
        active={location.pathname === "/history"}
        label="History"
        variant="light"
        leftSection={<IconHistory />}
        onClick={() => navigate("/history")}
      />
      <NavLink
        active={location.pathname === "/blog"}
        label="Blog"
        variant="light"
        leftSection={<IconArticle />}
        onClick={() => navigate("/blog")}
      />
      <NavLink
        active={location.pathname === "/sign-out"}
        label="Sign Out"
        color="red"
        variant="light"
        leftSection={<IconLogout />}
        onClick={() => navigate("/sign-out")}
      />
    </>
  );
}
