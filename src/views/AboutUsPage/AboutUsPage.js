/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
// import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
// import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.js";
import SectionContact from "views/AboutUsPage/Sections/SectionContact.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
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
          height: 300,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/dronebg.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              {/* <h1 className={classes.title}>About Us</h1> */}
              {/* <h4>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          {/* <SectionTeam /> */}
          <SectionServices />
          {/* <SectionOffice /> */}
          <SectionContact />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <Link to="/">
                  <ListItem className={classes.inlineBlock}>
                    <a className={classes.block} target="_blank">
                      VSN Drones
                    </a>
                  </ListItem>
                </Link>
                <Link to="/about-us">
                  <ListItem className={classes.inlineBlock}>
                    <a className={classes.block} target="_blank">
                      About us
                    </a>
                  </ListItem>
                </Link>
                {/* <ListItem className={classes.inlineBlock}>
                  <a
                    href="//blog.creative-tim.com/"
                    className={classes.block}
                    target="_blank"
                  >
                    Blog
                  </a>
                </ListItem> */}
                {/* <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    Licenses
                  </a>
                </ListItem> */}
              </List>
            </div>
            {/* <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-about-us"
                target="_blank"
              >
                VSN Drones
              </a>{" "}
              Helping you save time
            </div> */}
          </div>
        }
      />
    </div>
  );
}
