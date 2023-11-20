import InfiniteCarousel from "./InfiniteCarousel";
import bell from "/bell.svg";

function Setting() {
  return (
    <>
      <section className="setting">
        <div className="setting-text">
          <img src={bell} alt="bell icon" />
          <h1>Get notified when a highly correlated whale makes a move</h1>
          <p>
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="setting-corousel">
          <InfiniteCarousel />
        </div>
      </section>
    </>
  );
}

export default Setting;
