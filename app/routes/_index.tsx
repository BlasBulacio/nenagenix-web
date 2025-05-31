import React, { useEffect, useState } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";

import styles from "~/styles/index.css?url";
import { getCrossStyles, getLinkToShopContainerStyles } from "~/styles/components/homeStyles";
import { getTopbarLinkStyles } from "~/styles/components/navigationStyles";
import { topbarLinks } from "~/config/navigation";

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
  const location = useLocation();
  const [showCross, setShowCross] = useState<boolean>(false);
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  useEffect(() => {
    setShowCross(false);
    setAnimationActive(false);

    // Reset animation states
    const showTimer = setTimeout(() => {
      setShowCross(true);
    }, 100);

    const animationTimer = setTimeout(() => {
      setAnimationActive(true);
    }, 800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(animationTimer);
      setShowCross(false);
      setAnimationActive(false);
    };
  }, [location.pathname]); // Re-run effect when pathname changes

  const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
  };

  return (
    <div className="home-container" key={location.pathname}>
      <div className="topbar">
        {topbarLinks.map((link, index) =>
          <Link
            key={index}
            to={link.url}
            title=""
            style={getTopbarLinkStyles(link, location, index === topbarLinks.length)}
            aria-current={link.url === location.pathname ? "page" : undefined}
          >
            {link.title}
          </Link>
        )}
      </div>
      <div className="content">
        <div className="cross-container">
          <img
            style={getCrossStyles(showCross, animationActive)}
            src="/resources/cross.svg"
            alt="cross"
            onContextMenu={handleContextMenu}
          />
          <div
            style={getLinkToShopContainerStyles(animationActive)}
          >
            <Link
              className="spotify-link"
              to="https://nenagenix.mitiendanube.com/"
              title=""
            >
              <i>Escuchá &quot;Lo Más Cercano a Caer&quot;</i>
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
