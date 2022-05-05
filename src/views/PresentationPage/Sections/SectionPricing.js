import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
// import Store from "@material-ui/icons/Store";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/presentationSections/pricingStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            md={8}
            sm={10}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <h2 className={classes.title}>
              Sign up for VSN Drones to get new info
            </h2>
            <Link to="/signup">
              <Button color={"primary"} target="_blank" round>
                <ArticleIcon className={classes.icons} /> Sign Up Now
              </Button>
            </Link>
            {/* <Button
              href="sherzberg.com/signup"
              color={"white"}
              target="_blank"
              round
            >
              <Store className={classes.icons} /> Check Free Demo 
            </Button> */}
          </GridItem>
          <div className={classes.socialLine}>
            <div className={classes.container}>
              {/* <GridContainer>
                <GridItem md={12}>
                  <h4 className={classes.title}>Thank you for sharing!</h4>
                  <Button color="twitter" href="#pablo" round>
                    <i className={"fab fa-twitter " + classes.marginRight} />
                    Twitter
                  </Button>
                  <Button color="facebook" href="#pablo" round>
                    <i className={"fab fa-facebook " + classes.marginRight} />
                    Facebook
                  </Button>
                  <Button color="google" href="#pablo" round>
                    <i className={"fab fa-google " + classes.marginRight} />
                    Google
                  </Button>
                </GridItem>
              </GridContainer> */}
            </div>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
