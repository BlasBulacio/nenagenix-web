import React from "react";
import { useState } from "react";
import { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/deno";

import styles from "~/styles/index.css?url";
import ITopbarLink from "~/types/TopbarLink";
import { Link, Location, useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nenagenix" },
    { name: "description", content: "Welcome to Nenagenix's official website." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function Index() {
  const [crossClicked, setCrossClicked] = useState<boolean>(false);
  const location: Location = useLocation();

  const topbarLinks: Array<ITopbarLink> = [
    {
      title: 'Home',
      url: '/'
    }
    /*
    {
      title: 'Galería',
      url: '/galeria'
    },
    {
      title: 'Links',
      url: '/links'
    }
    */
  ]

  const onClickCross = () => setCrossClicked(true);

  const onKeyDownCross = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter') {
      onClickCross();
    }
  };

  const crossStyles = (isCrossClicked: boolean): React.CSSProperties => ({
    display: 'inline-block',
    cursor: isCrossClicked ? 'default' : 'pointer',
    width: '190px',
    transition: 'transform .7s ease-in-out',
    transform: isCrossClicked ? 'rotate(0)' : 'rotate(-45deg)',
    WebkitTransform: isCrossClicked ? 'rotate(0)' : 'rotate(-45deg)',
    msTransform: isCrossClicked ? 'rotate(0)' : 'rotate(-45deg)',
  });

  const linkStyles = (link: ITopbarLink, isLast: boolean): React.CSSProperties => ({
    textDecoration: link.url === location.pathname ? 'underline' : 'none',
    marginRight: !isLast ? '10px' : '0',
    color: 'black'
  });

  const linkToShopContainerStyles = (isCrossClicked: boolean): React.CSSProperties => ({
    position: 'absolute',
    bottom: '-55px',
    right: 0,
    left: 0,
    zIndex: 1,
    textAlign: 'center',
    transition: 'opacity 0.5s ease',
    opacity: isCrossClicked ? '1' : '0',
    pointerEvents: isCrossClicked ? 'auto' : 'none',
  });

  return (
    <div className="home-container">
      <div className="topbar">
        {topbarLinks.map((link: ITopbarLink, index: number) =>
          <Link
            key={index}
            to={link.url}
            title=""
            style={linkStyles(link, index === topbarLinks.length)}
          >
            {link.title}
          </Link>
        )}
      </div>
      <div className="content">
        <div
          className="cross-container"
          onClick={onClickCross}
          onKeyDown={onKeyDownCross}
          role="button"
          tabIndex={0}
        >
          <img
            style={crossStyles(crossClicked)}
            src="/resources/cross.svg"
            alt="cross"
          />
          <div
            style={linkToShopContainerStyles(crossClicked)}
          >
            <Link
              className="shop-link"
              to="https://www.tiendanube.com/login"
              title=""
            >
              Lo Más Cercano a Caer <br /> Preventa
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-text-container">
          <p>Nenagenix 2024 ©</p>
          <p>Bohemian Groove Corp ®</p>
        </div>
      </div>
    </div>
  );
}
