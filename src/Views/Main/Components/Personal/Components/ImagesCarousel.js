import { useSpringCarousel } from "react-spring-carousel-js";

export default function ImagesCarousel(props) {
  let items = [];
  props.images.forEach((element, index) => {
      console.log(element)
    return [
      ...items,
      {
        id: "item" + index,
        renderItem: <img src={element} alt={`personal-${index}`} />,
      },
    ];
  });

  const { carouselFragment } = useSpringCarousel({
    items: items,
  });

  return (
    <div>
      <img src={{ carouselFragment }} alt="Logo" />
    </div>
  );
}
