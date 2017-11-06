import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";

import headerBackground from "../assets/image.jpg";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Associazione Python Italia"
      meta={[
        {
          name: "description",
          content:
            "Python Italia è un’organizzazione no-profit che si occupa di diffondere Python in Italia"
        }
      ]}
    />
    <Header background={headerBackground} />
    <div className="content">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
