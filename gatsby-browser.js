import React from "react";
import Layout from "./src/components/Layout";
import "./src/scss/main.scss";

export function wrapPageElement({ element, props }) {
  const renderTitle = () => {
    if (props.path.includes("work")) return "Work";
    else if (props.path.includes("resume")) return "Resume";
    else return null;
  };

  return (
    <Layout {...props} pageTitle={renderTitle()}>
      {element}
    </Layout>
  );
}
