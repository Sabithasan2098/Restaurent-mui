import { Link } from "react-router-dom";
import "./Home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>My Restaurant</h1>
        <p>Best food in Bangladesh</p>
        <Link to={"/menu"}>
          <button type="button" className="button">
            Check Out <ArrowRightAltIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
