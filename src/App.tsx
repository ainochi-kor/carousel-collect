import "./App.css";
import ImageSlider from "./package/image-slider";
import Carousel from "./package/react-infinite-carousel/Carousel";

const CAROUSEL_IMAGES = [
  "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg",
  "https://img.freepik.com/premium-vector/abstract-pastel-color-background-with-pink-purple-gradient-effect-graphic-design-decoration_120819-463.jpg",
  "https://media.architecturaldigest.com/photos/6080a73d795a7b010f3dd2e0/2:1/w_2700,h_1350,c_limit/GettyImages-1213929929.jpg",
];

function App() {
  return (
    <>
      <div>
        <Carousel carouselList={CAROUSEL_IMAGES} />
      </div>
      <div>
        <ImageSlider carouselList={CAROUSEL_IMAGES} />
      </div>
    </>
  );
}

export default App;
