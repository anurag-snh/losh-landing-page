import Slider from "react-slick";

const contents = [
  {
    key: 1,
    header: "Jack F",
    span: "Ex Blackrock PM",
    para: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    key: 2,
    header: "Yash P",
    span: "Research, 3poch Crypto Hedge Fund",
    para: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    key: 3,
    header: "Shiv S",
    span: "Co-Founder Magik Labs",
    para: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though.",
  },
];

function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {contents.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-title">
                <h1>{item.header}</h1>
                <span>{item.span}</span>
              </div>
              <p>{item.para}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TestimonialSlider;
