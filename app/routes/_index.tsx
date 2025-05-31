import React, { useEffect, useState } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import styles from "~/styles/index.css?url";
import { getCrossStyles, getLinkToShopContainerStyles } from "~/styles/components/homeStyles";
import Cross from "~/components/Cross";
import Layout from "~/components/Layout";

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
  }, []); // Only run on mount

  const handleContextMenu = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <div className="content">
        <div className="cross-container">
          <Cross
            style={getCrossStyles(showCross, animationActive)}
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
    </Layout>
  );
}
