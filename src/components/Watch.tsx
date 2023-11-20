import Cohorts from "/cohorts.png";
import eye from "/eye.svg";

function Watch() {
  return (
    <>
      <section className="watch">
        <div className="watch-image">
          <img className="img" src={Cohorts} alt="cohort image" />
        </div>
        <div className="watch-text">
          <img className="icon" src={eye} alt="eye icon" />
          <h1>Watch what the whales are doing</h1>
          <p>
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </section>
    </>
  );
}

export default Watch;
