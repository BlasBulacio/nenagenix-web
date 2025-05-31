import React from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";

import styles from "~/styles/index.css?url";
import { getTopbarLinkStyles } from "~/styles/components/navigationStyles";
import { topbarLinks, socialLinks } from "~/config/navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Links - Nenagenix" },
    { name: "description", content: "Links y redes sociales de Nenagenix." },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function Links() {
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
        <div className="links-container">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{link.icon}</span>
              {link.title}
            </a>
          ))}
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