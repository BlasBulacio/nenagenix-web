import React, { useEffect } from "react";
import { useState } from "react";
import { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/deno";

import styles from "~/styles/index.css?url";
import ITopbarLink from "~/types/TopbarLink";
import { Link, Location, useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nenagenix" },
    { name: "description", content: "Sitio oficial de Nenagenix." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function Index() {
  const [showCross, setShowCross] = useState<boolean>(false);
  const [animationActive, setAnimationActive] = useState<boolean>(false);


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

  const crossStyles = (showCross: boolean, rotateCross: boolean): React.CSSProperties => ({
    display: 'inline-block',
    width: '182px',
    transition: 'all .7s ease-in-out',
    transform: rotateCross ? 'rotate(0)' : 'rotate(-45deg)',
    WebkitTransform: rotateCross ? 'rotate(0)' : 'rotate(-45deg)',
    msTransform: rotateCross ? 'rotate(0)' : 'rotate(-45deg)',
    opacity: showCross ? '1' : '0',
  });

  const linkToShopContainerStyles = (showText: boolean): React.CSSProperties => ({
    position: 'absolute',
    bottom: '-55px',
    right: 0,
    left: 0,
    zIndex: 1,
    textAlign: 'center',
    transition: 'opacity .7s ease',
    opacity: showText ? '1' : '0',
    pointerEvents: showText ? 'auto' : 'none',
  });

  useEffect(() => {
    setShowCross(true);

    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault(); // Prevent the default right-click context menu
  };


  return (
    <div className="home-container">
      {/*
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
      */}
      <div className="content">
        <div
          className="cross-container"
        >
          <img
            style={crossStyles(showCross, animationActive)}
            src="/resources/cross.svg"
            alt="cross"
            onContextMenu={handleContextMenu}
          />
          <div
            style={linkToShopContainerStyles(animationActive)}
          >
            <Link
              className="shop-link"
              to="https://www.tiendanube.com/login"
              title=""
            >
              Lo Más Cercano a Caer
              <br />
              <b>
                Preventa
              </b>
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
