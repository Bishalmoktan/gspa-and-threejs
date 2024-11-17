import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousel from "./video-carousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#highlights",
        start: "30% bottom",
      },
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#highlights",
        start: "30% bottom",
      },
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Highlights;
