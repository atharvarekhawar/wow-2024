import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

interface CardProps{
  key: any;
  content: JSX.Element;
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



  const table = cardsP.map(({content,key}, index) => {
    return { content, onClick: () => setGoToSlide(index), key };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const [cards] = useState(table);


  const changeSlides = ()=>{
    setGoToSlide((prevIndex) => prevIndex+1)
  }

  useEffect(() => {
    setOffsetRadius(offset);
    setShowArrows(showArrowsP);
  }, [offset, showArrowsP]);

  useEffect(()=>{
    const intervalId = setInterval(changeSlides,5000);
    return () => clearInterval(intervalId);
  },[])

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