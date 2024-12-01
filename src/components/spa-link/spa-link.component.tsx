import * as React from "react";

import Nav from "react-bootstrap/Nav";
import { NavLinkProps as BSNavLinkProps } from "react-bootstrap/NavLink";

import { useHref, useLinkClickHandler, NavLinkProps } from "react-router";

interface Props
  extends BSNavLinkProps,
    Pick<NavLinkProps, "replace" | "state" | "to"> {
  children?: React.ReactNode;
}

const SpaLinkComponent = React.forwardRef<HTMLButtonElement, Props>(
  ({ onClick, replace = false, state, to, ...props }, ref) => {
    const href = useHref(to);
    const handleClick = useLinkClickHandler(to, { replace, state });

    return (
      <Nav.Link
        {...props}
        ref={ref}
        href={href}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            handleClick(event as never);
          }
        }}
      />
    );
  },
);

export default SpaLinkComponent;
