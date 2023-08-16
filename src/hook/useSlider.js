import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSlider = (product) => {
 const images = product?.images || [];
 const navigate = useNavigate();

 const [currentImage, setCurrentImage] = useState(0);
 const [animateNext, setAnimateNext] = useState(false);
 const [animatePrev, setAnimatePrev] = useState(false);

 const onBack = () => navigate(`/`);
 //*fx para cambiar img
 const go = (dir) => {
  let newImage = currentImage + dir;
  if (newImage >= 0 && newImage < images.length) {
   setCurrentImage(newImage);
  }
 };
 const onNext = (dir) => {
  setAnimateNext(true);
  go(dir);
 };
 const onPrev = (dir) => {
  setAnimatePrev(true);
  go(dir);
 };
 //* al terminar las animaciones se borran las className
 const resetAnimate = () => {
  setAnimateNext(false);
  setAnimatePrev(false);
 };
 //* variables para deshabilitar botones
 const isAtFirstImage = currentImage === 0;
 const isAtLastImage = currentImage === images.length - 1;
 return { images, isAtFirstImage, isAtLastImage, resetAnimate, onPrev, onNext, onBack, currentImage, animateNext, animatePrev }
}
