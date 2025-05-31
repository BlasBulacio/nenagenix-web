import React from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "~/styles/index.css?url";
import Layout from "~/components/Layout";

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
  return (
    <Layout>
      <div className="content">
        <h1>Próximas Fechas</h1>
        {/* Add your tour dates content here */}
      </div>
    </Layout>
  );
} 