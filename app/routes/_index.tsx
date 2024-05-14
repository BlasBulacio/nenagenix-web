import type { MetaFunction } from "@remix-run/deno";

import styles from "~/styles/index.css?url";
import { LinksFunction } from "@remix-run/node";

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
  return (
    <div className="home-container">
      <div className="cross-container">
        <img className="cross" src="/resources/cross.svg" alt="cross" />
      </div>
      <div className="text-container">
        <p className="infoText">Nenagenix 2024</p>
        <p className="infoText">Bohemian Groove Corp</p>
      </div>
    </div>
  );
}
