import TestimonialSlider from "./TestimonialSlider";
import losh from "/losh.svg";

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-main">
          <div className="testimonial-logo">
            <img className="icon" src={losh} alt="losh icon" />
          </div>
          <div className="testimonial-slider">
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
