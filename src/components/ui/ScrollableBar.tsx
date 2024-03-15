import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 5,
  },
};

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Carousel containerClass="w-full flex gap-2" responsive={responsive}>
        {children}
      </Carousel>
    </>
  );
}
