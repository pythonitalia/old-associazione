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
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "36x36",
          href: "/favicons/android-chrome-36x36.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicons/android-chrome-48x48.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "72x72",
          href: "/favicons/android-chrome-72x72.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicons/android-chrome-96x96.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "144x144",
          href: "/favicons/android-chrome-144x144.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "256x256",
          href: "/favicons/android-chrome-256x256.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "384x384",
          href: "/favicons/android-chrome-384x384.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/favicons/android-chrome-512x512.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/favicons/apple-touch-icon-57x57.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/favicons/apple-touch-icon-60x60.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/favicons/apple-touch-icon-72x72.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/favicons/apple-touch-icon-76x76.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/favicons/apple-touch-icon-114x114.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/favicons/apple-touch-icon-120x120.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/favicons/apple-touch-icon-144x144.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/favicons/apple-touch-icon-152x152.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon-180x180.png"
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
