import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function UpNav(props) {
  const [active, setActive] = useState(false);

  return (
    <div className="top-nav">
      <ul classeName="top-nav-item">
        <li>
          <Link to="/all" active>
            All
          </Link>
        </li>
        <li>
          <Link to="/sport" active>
            Sport
          </Link>
        </li>
        <li>
          <Link to="/fashion" active>
            Fashion
          </Link>
        </li>
        <li>
          <Link to="/children" active>
            Children
          </Link>
        </li>
        <li>
          <Link to="/house" active>
            house
          </Link>
        </li>
        <li>
          <Link to="#" active>
            travel
          </Link>
        </li>
        <li>
          <Link to="#" active>
            Occasions
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default UpNav;
