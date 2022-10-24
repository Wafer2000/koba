/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import "../../Styles/Login.css";
import logo from "../../Images/logo.png";
import image1 from "../../Images/image1.png";
import image2 from "../../Images/image2.png";
import image3 from "../../Images/image3.png";
import { useEffect, useRef, useState } from "react";

const LoginEmple = () => {
  const ref = useRef(null);
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    const main2 = ref.current;
    const toggle_btn = document.querySelectorAll(".toggle");
    const main = document.querySelector("main");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    if (isActive) {
      toggle_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
          setActive(!isActive);
          main.classList.add("sign-up-mode");
        });
      });
    } else if (!isActive) {
      toggle_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
          setActive(!isActive);
          main.classList.remove("sign-up-mode");
        });
      });
    }

    function moveSlider() {
      let index = this.dataset.value;

      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove("show"));
      currentImage.classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      this.classList.add("active");
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  });

  return (
    <div className={`body`}>
      <main>
        <div className={`box`}>
          <div className={`inner-box`}>
            <div className={`forms-wrap`}>
              <form action="#" autoComplete="off" className={`sign-in-form`}>
                <div className={`logo`}>
                  <img src={logo} alt="KOBA" />
                  <h4>KOBA</h4>
                </div>

                <div className={`heading`}>
                  <h2>Welcome Back</h2>
                </div>

                <div className={`actual-form`}>
                  <div className={`select-box`}>
                    <span>Empresa</span>
                    <div className={`select-box__current`} tabIndex="1">
                      <div className={`select-box__value`}>
                        <input
                          className={`select-box__input`}
                          type="radio"
                          id="0"
                          value="1"
                          name="Ben"
                        />
                        <p className={`select-box__input-text`}>Empresa 1</p>
                      </div>
                      <div className={`select-box__value`}>
                        <input
                          className={`select-box__input`}
                          type="radio"
                          id="1"
                          value="2"
                          name="Ben"
                        />
                        <p className={`select-box__input-text`}>Empresa 2</p>
                      </div>
                      <div className={`select-box__value`}>
                        <input
                          className={`select-box__input`}
                          type="radio"
                          id="2"
                          value="3"
                          name="Ben"
                        />
                        <p className={`select-box__input-text`}>Empresa 3</p>
                      </div>
                      <div className={`select-box__value`}>
                        <input
                          className={`select-box__input`}
                          type="radio"
                          id="3"
                          value="4"
                          name="Ben"
                        />
                        <p className={`select-box__input-text`}>Empresa 4</p>
                      </div>
                      <div className={`select-box__value`}>
                        <input
                          className={`select-box__input`}
                          type="radio"
                          id="4"
                          value="5"
                          name="Ben"
                        />
                        <p className={`select-box__input-text`}>Empresa 5</p>
                      </div>
                      <img
                        className="select-box__icon"
                        src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                        alt="Arrow Icon"
                        aria-hidden="true"
                      />
                    </div>
                    <ul className={`select-box__list`}>
                      <li>
                        <label
                          className={`select-box__option`}
                          htmlFor="0"
                          aria-hidden="true"
                        >
                          Empresa 1
                        </label>
                      </li>
                      <li>
                        <label
                          className={`select-box__option`}
                          htmlFor="1"
                          aria-hidden="true"
                        >
                          Empresa 2
                        </label>
                      </li>
                      <li>
                        <label
                          className={`select-box__option`}
                          htmlFor="2"
                          aria-hidden="true"
                        >
                          Empresa 3
                        </label>
                      </li>
                      <li>
                        <label
                          className={`select-box__option`}
                          htmlFor="3"
                          aria-hidden="true"
                        >
                          Empresa 4
                        </label>
                      </li>
                      <li>
                        <label
                          className={`select-box__option`}
                          htmlFor="4"
                          aria-hidden="true"
                        >
                          Empresa 5
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className={`input-wrap`}>
                    <input
                      type="text"
                      minLength="4"
                      autoComplete="off"
                      required
                    />
                    <span>Name</span>
                  </div>

                  <div className={`input-wrap`}>
                    <input
                      type="password"
                      minLength="4"
                      autoComplete="off"
                      required
                    />
                    <span>Password</span>
                  </div>

                  <input type="submit" className={`sign-btn`} value="Sign In" />

                  <p className={`text`}>
                    Forgotten your password or login details? <a>Get help</a>{" "}
                    signing in
                  </p>
                </div>
              </form>
            </div>
            <div className={`carousel`}>
              <div className={`images-wrapper`}>
                <img src={image1} className={`image img-1 show`} alt="" />
                <img src={image2} className={`image img-2`} alt="" />
                <img src={image3} className={`image img-3`} alt="" />
              </div>
              <div className={`text-slider`}>
                <div className={`text-wrap`}>
                  <div className={`text-group`}>
                    <h2>Without worries!</h2>
                    <h2>Manage like your business</h2>
                    <h2>Digitize your company</h2>
                  </div>
                </div>
                <div className={`bullets`}>
                  <span className={`active`} data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginEmple;
