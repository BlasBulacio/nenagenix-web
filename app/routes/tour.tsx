import React from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";

import styles from "~/styles/index.css?url";
import { getTopbarLinkStyles } from "~/styles/components/navigationStyles";
import { topbarLinks } from "~/config/navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Tour - Nenagenix" },
    { name: "description", content: "Próximas fechas de Nenagenix." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function Tour() {
  const location = useLocation();

  return (
    <div className="home-container">
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
        <h1>Próximas Fechas</h1>
        {/* Add your tour dates content here */}
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