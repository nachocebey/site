import React from "react";
import { useSpringCarousel } from "react-spring-carousel-js";
import { makeStyles } from "@material-ui/core/styles";
//Yes, definetly not the best way to display images, but i realy wanted to try this springJs-based carousel i found on the internet, sorry i guess

export default function ImagesCarousel(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "10px",
      width: "100%",
      height: "600px",
    },
  }));
  const classes = useStyles();
  let images = [];
  props.images.forEach((element, index) =>
    images.push({
      id: `image-${index}`,
      renderItem: (
        <div
          style={{
            backgroundImage: `url(${element})`,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            cursor: "-webkit-grab",
          }}
        />
      ),
    })
  );
  const { carouselFragment } = useSpringCarousel({
    items: images,
  });
  return <div className={classes.root}>{carouselFragment}</div>;
}
