import React from "react";
import { useState } from "react";
import { LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/deno";

import styles from "~/styles/index.css?url";
import ITopbarLink from "~/types/TopbarLink";
import { Location, useLocation } from "@remix-run/react";

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
  const location: Location = useLocation();
  const [crossClicked, setCrossClicked] = useState<boolean>(false);
  console.log(location);

  const onClickCross = () => setCrossClicked(true);
  console.log(location);

  const onKeyDownCross = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter') {
      onClickCross();
    }
  };

  const showText = (isCrossClicked: boolean) => isCrossClicked ? 'show-text' : '';

  const crossStyles = (isCrossClicked: boolean): React.CSSProperties => ({
    display: 'inline-block',
    cursor: 'pointer',
    width: '150px',
    height: '150px',
    transition: 'transform .7s ease-in-out',
    transform: isCrossClicked ? 'rotate(-45deg)' : 'rotate(0)',
    WebkitTransform: isCrossClicked ? 'rotate(-45deg)' : 'rotate(0)',
    msTransform: isCrossClicked ? 'rotate(-45deg)' : 'rotate(0)',
  });

  const linkStyles = (link: ITopbarLink, isLast: boolean): React.CSSProperties => {
    return ({
      textDecoration: link.url === location.pathname ? 'underline' : 'none',
      marginRight: !isLast ? '10px' : '0',
      color: 'black'
    });
  };

  const topbarLinks: Array<ITopbarLink> = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Galería',
      url: '/galeria'
    },
    {
      title: 'Links',
      url: '/links'
    }
  ]

  return (
    <div className="home-container">
      <div className="topbar">
        {topbarLinks.map((link: ITopbarLink, index: number) =>
          <a key={index} className="small-text" style={linkStyles(link, index === topbarLinks.length)} href={link.url}>{link.title}</a>
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
          <p className={`cross-text small-text hide-text ${showText(crossClicked)}`}> Adquiri tu CD </p>
        </div>
      </div>
      <div className="footer">
        <div className="text-container">
          <p className="small-text">Nenagenix 2024</p>
          <p className="small-text">Bohemian Groove Corp</p>
        </div>
      </div>
    </div>
  );
}
