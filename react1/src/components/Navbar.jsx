import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div class="navgition navgition-transparent">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">
                  <img
                    src="https://preview.uideck.com/items/start/assets/images/logo.svg"
                    alt="Logo"
                  />
                </a>

                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                      <a class="page-scroll" href="#home">
                        HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#service">
                        SERVICES
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#pricing">
                        PRICING
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
