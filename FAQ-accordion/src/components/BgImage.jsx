import { bgDesktop, bgMobile } from "../assets/images";

function BgImage() {
  return (
    <picture className="absolute inset-x-0 top-0 z-10 h-1/3">
      <source media="(min-width:475px)" srcSet={bgDesktop}></source>
      <img
        src={bgMobile}
        className="block size-full object-cover"
        alt="background-image"
        loading="lazy"
      />
    </picture>
  );
}

export default BgImage;
