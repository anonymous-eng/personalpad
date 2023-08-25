import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
import tree_left from "./images/tree-left.png";
import tree_right from "./images/tree-right.png";
import gate_left from "./images/gate-left.png";
import gate_right from "./images/gate-right.png";
import grass from "./images/grass.png";


function LandingPage({ history }) {

  const parallax = React.useRef(null);

  React.useEffect(() => {
    function scrollHandler() {
      let treeLeft = document.getElementById('tree-left');
      let treeRight = document.getElementById('tree-right');
      let gateLeft = document.getElementById('gate-left');
      let gateRight = document.getElementById('gate-right');

      let value = window.scrollY;

        treeLeft.style.left = value * -1.5 + 'px';
        treeRight.style.left = value * 1.5 + 'px';
        gateLeft.style.left = value * 0.5 + 'px';
        gateRight.style.left = value * -0.5 + 'px';
    }
    window.addEventListener('scroll', scrollHandler)
    
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
      <section class="parallax" onScroll={parallax}>
          <img src={tree_left} id="tree-left"/>
          <img src={tree_right} id="tree-right"/>
          <img src={gate_left} id="gate-left"/>
          <img src={gate_right} id="gate-right"/>
          <img src={grass} id="grass"/>
          <div className="buttonContainerLeft">
              <Link to="/login">
                <Button size="lg" className="btn btn-primary btn-lg">
                  Login
                </Button>
              </Link>
          </div>
          <div className="buttonContainerRight">
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="btn btn-primary btn-lg"
                >
                  Signup
                </Button>
              </Link>
            </div>
      </section>
  );
}

export default LandingPage;
