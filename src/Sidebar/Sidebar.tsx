import clsx from "clsx";
import React from "react";

import { makeStyles } from "../theme";
import { MenuItem, shrunkMenuWidth } from "./MenuItem";
import { BaseSidebarProps } from "./types";

const useStyles = makeStyles(
  (theme) => ({
    expandButton: {
      marginLeft: theme.spacing(1.5),
    },
    float: {
      height: "100vh",
     
      overflowY: "auto",
      overflowX: "hidden",
      paddingBottom: theme.spacing(3),
    },
    logo: {
      display: "block",
      margin: `1px 0 ${theme.spacing(3)} ${theme.spacing(2.5)}`,
      color: "inherit",
    },
    root: {
      transition: "width 0.5s ease",
      width: "237px",
    },
    rootShrink: {
      width: shrunkMenuWidth,
    },
    toolbarContainer: {
      margin: theme.spacing(1, 0, 1, 1.5),
    },
  }),
  {
    name: "SideBar",
  }
);

export interface SidebarProps extends BaseSidebarProps {
  activeId: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeId,
  menuItems,
  toolbar,
  onMenuItemClick,
  logoHref,
  linkComponent,
}) => {
  const classes = useStyles({});
  

  const Link = linkComponent ?? "a";

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootShrink]: false,
      })}
    >
      <div className={classes.float}>
        <Link href={logoHref} className={classes.logo}>
          
        </Link>
        {menuItems.map((menuItem) =>
          linkComponent ? (
            <MenuItem
              activeId={activeId}
              isMenuShrunk={false}
              menuItem={menuItem}
              key={menuItem.ariaLabel}
              linkComponent={linkComponent}
            />
          ) : (
            <MenuItem
              activeId={activeId}
              isMenuShrunk={false}
              menuItem={menuItem}
              onClick={onMenuItemClick}
              key={menuItem.ariaLabel}
            />
          )
        )}
        {toolbar && <div className={classes.toolbarContainer}>{toolbar}</div>}
        
      </div>
    </div>
  );
};

Sidebar.displayName = "SideBar";
