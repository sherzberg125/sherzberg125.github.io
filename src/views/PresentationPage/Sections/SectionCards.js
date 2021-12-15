import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";

import cardsTest from "assets/img/assets-for-demo/cards-test.png";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={7} sm={7}>
            <div className={classes.imageContainer}>
              <img src={cardsTest} alt="views" />
            </div>
          </GridItem>
          <GridItem md={4} sm={5} className={classes.mlAuto}>
            <div className={classes.sectionDescription}>
              {/* <h3 className={classes.title}>Unconventional Cards</h3>
              <h6 className={classes.description}>
                One Card for Every Problem
              </h6>
              <h5 className={classes.description}>
                A background tool to help you.
              </h5> */}
              <h3 className={classes.title}> Searching the Web Sucks</h3>
              <h6 className={classes.description}> Lets Make it Better</h6>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
