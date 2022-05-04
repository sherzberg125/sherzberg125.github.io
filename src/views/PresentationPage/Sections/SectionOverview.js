import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";
// @material-ui icons
// import Grid from "@material-ui/icons/GridOn";
// import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// images
// import Vodafone from "assets/img/assets-for-demo/ourClients/vodafone.jpg";
// import Microsoft from "assets/img/assets-for-demo/ourClients/microsoft.jpg";
// import Harvard from "assets/img/assets-for-demo/ourClients/harvard.jpg";
// import Standford from "assets/img/assets-for-demo/ourClients/stanford.jpg";
// import profilePic1 from "assets/img/assets-for-demo/test1.jpg";
// import profilePic2 from "assets/img/assets-for-demo/test2.jpg";
// import profilePic3 from "assets/img/assets-for-demo/test3.jpg";

import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.js";
import LocalShipping from "@material-ui/icons/LocalShipping";

const useStyles = makeStyles(overviewStyle);

export default function SectionOverview() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div
        className={classes.features5}
        style={{
          backgroundImage: `url(${
            require("assets/img/assets-for-demo/features-5.jpg").default
          })`,
        }}
      >
        <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h2 className={classes.title}>Helping In Many Aspects </h2>
        </GridItem>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Voice Activated"
                description={
                  <p>
                    Safer Delivery. <br />
                  </p>
                }
                icon={LocalShipping}
                // Icon is smaller for some reason and I don't know why
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            {/* <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Always Available"
                description={<p></p>}
                icon={PhoneLink}
                iconColor="gray"
                vertical={true}
              />
            </GridItem> */}
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Worry Free"
                description={
                  <p>
                    You do not have to worry about someone stealing or
                    interacting with any of your packages since every package
                    will be dropped directly to you{" "}
                  </p>
                }
                icon={AccessTime}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Faster"
                description={
                  <p>
                    Depending on the item, delivery time can be much less than
                    if shipped through more traditional methods
                  </p>
                }
                icon={AttachMoney}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* <div className={classes.sectionTestimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <h2 className={classes.title}>Trusted by 330.000+ People</h2>
              <h5 className={classes.description}>
                The UI Kits, Templates and Dashboards that we{"'"}ve created are
                used by
                <b> 330,000+ web developers</b> in over{" "}
                <b> 576.000 Web Projects</b>. This is what some of them think:
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src={profilePic1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic1 + ")",
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic1 + ")",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Khaldi Yass</h4>
                      <p className={classes.cardDescription}>
                        {'"'}As soon as I saw this kit, everything else isn
                        {"'"}t the same anymore, I just can{"'"}t describe it
                        guys! Thank you for this work!{'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src={profilePic2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic2 + ")",
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic2 + ")",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Josh Murray</h4>
                      <p className={classes.cardDescription}>
                        {'"'}Great kit! Used this for a client already and he is
                        over the moon. Keep up the good work Creative Tim! 10/10
                        for design, colours, and the feel of the kit.
                        {'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src={profilePic3} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic3 + ")",
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic3 + ")",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Michael Onubogu</h4>
                      <p className={classes.cardDescription}>
                        {'"'}Damn Daniel!!! This Material UI Kit is fresh AF!
                        Amazing work!{'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <div className={classes.ourClients}>
            <GridContainer justify="center">
              <GridItem md={3} sm={3}>
                <img src={Vodafone} alt="vodafone" />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img src={Microsoft} alt="microsoft" />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img src={Harvard} alt="harvard" />
              </GridItem>
              <GridItem md={3} sm={3}>
                <img src={Standford} alt="stanford" />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div> */}
    </div>
  );
}
