/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
// import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
// import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionCards from "views/PresentationPage/Sections/SectionCards.js";
// import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
// import SectionSections from "views/PresentationPage/Sections/SectionSections.js";
// import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
// import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import SectionWork from "views/LandingPage/Sections/SectionWork";
import { Link } from "react-router-dom";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="VSN Drones"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/bg4.jpg").default}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  VSN Drones
                  {/* <span className={classes.proBadge}>PRO</span> */}
                </h1>
                <h3 className={classes.title}>Facial Recognition in Drones</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionDescription /> */}
        {/* <SectionComponents /> */}
        <SectionCards />
        {/* <SectionContent /> */}
        {/* <SectionSections /> */}
        {/* <SectionExamples /> */}
        {/* <SectionFreeDemo /> */}
        <SectionOverview />
      </div>
      <SectionPricing />

      {/* Where does the section Work Form link to. It doesn't seem to send any messages to anyone as far as I can tell. */}
      <SectionWork />

      <Footer
        theme="white"
        content={
          <div>
            <Link to="/">
              <div className={classes.left}>
                <a target="_blank" className={classes.footerBrand}>
                  VSN Drones
                </a>
              </div>
            </Link>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                {/* <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Placeholder Name
                  </a>
                </ListItem> */}
                <Link to="/about-us" className={classes.block}>
                  <ListItem className={classes.inlineBlock}>
                    <a target="_blank" className={classes.block}>
                      About us
                    </a>
                  </ListItem>
                </Link>
                {/* <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem> */}
                {/* <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem> */}
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/VSNDrones"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://www.instagram.com/vsndrones/"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://www.facebook.com/profile.php?id=100080998720486"
                    target="_blank"
                    color="facebook"
                    justIcon
                    simple
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://www.linkedin.com/in/vsn-drones-b88a03239/"
                    target="_blank"
                    color="linkedin"
                    justIcon
                    simple
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://medium.com/@sherzberg125"
                    target="_blank"
                    color="medium"
                    justIcon
                    simple
                  >
                    <i className="fab fa-medium" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
