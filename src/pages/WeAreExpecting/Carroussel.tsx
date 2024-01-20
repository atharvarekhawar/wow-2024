import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";

interface CardProps{
  element: any;
  index: uuidv4;
}

interface CarrousselProps {
  cardsP: CardProps[];
  offset: number;
  showArrowsP: boolean;
  width: string;
  height: string;
  margin: string;
}

const Carroussel: React.FC<CarrousselProps> = ({cardsP,offset,showArrowsP,width,height,margin}) => {

  const table = cardsP.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(offset);
    setShowArrows(showArrowsP);
  }, [offset, showArrowsP]);

  return (
    <div
      style={{ width: width, height: height, margin: margin}}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}


export default Carroussel;