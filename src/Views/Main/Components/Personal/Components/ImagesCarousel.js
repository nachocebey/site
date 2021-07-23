import React from "react";
import { useSpringCarousel } from "react-spring-carousel-js";
import Dummy1 from "../../../../../assets/Images/Dummy1.png";
import { makeStyles } from "@material-ui/core/styles";

export default function ImagesCarousel(props) {
  console.log(props);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // minHeight: "400px",
      // minWidth: "400px",
      padding: "10px",
    },
  }));
  const classes = useStyles();
  const { carouselFragment } = useSpringCarousel({
    items: [
      {
        id: "item-1",
        renderItem: (
          <div
            style={{
              backgroundImage: `url(${Dummy1})`,
              backgroundSize: "100% auto",
              width: "100%",
              height: "500px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              position: "relative",
            }}
          />
        ),
      },
      {
        id: "item-2",
        renderItem: <div>My item 2</div>,
      },
    ],
  });
  return <div className={classes.root}>{carouselFragment}</div>;
}
