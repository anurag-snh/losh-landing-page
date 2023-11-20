import Setting from "./components/Setting";
import Watch from "./components/Watch";
import Testimonials from "./components/Testimonials";
import SignUp from "./components/SignUp";
import "slick-carousel/slick/slick.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <SignUp />

        <Setting />
        <Watch />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
