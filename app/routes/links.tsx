import React from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "~/styles/index.css?url";
import { socialLinks } from "~/config/navigation";
import Layout from "~/components/Layout";

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
  return (
    <Layout>
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
    </Layout>
  );
} 