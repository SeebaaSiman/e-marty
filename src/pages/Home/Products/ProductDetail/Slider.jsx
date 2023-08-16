import { useSlider } from "../../../../hook/useSlider";
import {
  SliderContainer,
  BgColor,
  SliderContent,
  ControlContainer,
} from "@/ui/page/home/slider.style";
import { ButtonGlowing } from "@/ui/styled-components/ButtonGlowing";
import { ButtonContainer } from "@/ui/page/home/slider.style";

export const Slider = ({ children, product }) => {
  const {
    images,
    isAtFirstImage,
    isAtLastImage,
    resetAnimate,
    onPrev,
    onNext,
    onBack,
    currentImage,
    animateNext,
    animatePrev,
  } = useSlider(product);
  return (
    <SliderContainer>
      <ButtonContainer>
        <ButtonGlowing fn={onBack}>Back</ButtonGlowing>
      </ButtonContainer>
      <BgColor
        images={images}
        currentImage={currentImage}
        onAnimationEnd={resetAnimate}
      >
        <img
          src={images[currentImage] ?? null}
          className={`${animateNext ? "next" : ""} ${
            animatePrev ? "prev" : ""
          }`}
          alt="Product image"
        />
        <p>
          {currentImage + 1}/{images?.length}
        </p>
      </BgColor>
      <SliderContent>{children}</SliderContent>
      <ControlContainer>
        <ButtonGlowing fn={() => onPrev(-1)} disabled={isAtFirstImage}>
          Prev
        </ButtonGlowing>
        <ButtonGlowing fn={() => onNext(1)} disabled={isAtLastImage}>
          Next
        </ButtonGlowing>
      </ControlContainer>
    </SliderContainer>
  );
};
