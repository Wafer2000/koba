/* eslint-disable no-unused-vars */
import "../../Styles/Login.css";
import logo from "../../Images/logo.png";
import image1 from "../../Images/image1.png";
import image2 from "../../Images/image2.png";
import image3 from "../../Images/image3.png";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const ref = useRef(null);
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    const main2 = ref.current;
    console.log(main2);
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
    } else if(!isActive){
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

      bullets.forEach(bull => bull.classList.remove("active"));
      this.classList.add("active");
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    })
  });

  return (
    <div className={`body`}>
      <main ref={ref}>
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
                  <h6>Not registred yet? </h6>
                  <a href="/#" className={`toggle`}>
                    Sign Up
                  </a>
                </div>

                <div className={`actual-form`}>
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
                    Forgotten your password or login details?{" "}
                    <a href="/#">Get help</a> signing in
                  </p>
                </div>
              </form>

              <form action="#" autoComplete="off" className={`sign-up-form`}>
                <div className={`logo`}>
                  <img src={logo} alt="KOBA" />
                  <h4>KOBA</h4>
                </div>

                <div className={`heading`}>
                  <h2>Get Started</h2>
                  <h6>Already have an account? </h6>
                  <a href="/#" className={`toggle`}>
                    Sign In
                  </a>
                </div>

                <div className={`actual-form`}>
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
                    <input type="email" autoComplete="off" required />
                    <span>Email</span>
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

                  <input type="submit" className={`sign-btn`} value="Sign Up" />

                  <p className={`text`}>
                    By signing up, I agree to the{" "}
                    <a href="/#">Terms of Services</a> and{" "}
                    <a href="/#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>
            <div className={`carousel`}>
              <div className={`images-wrapper`}>
                <img src={image1} className={`image img-1 show`} alt=""/>
                <img src={image2} className={`image img-2`} alt=""/>
                <img src={image3} className={`image img-3`} alt=""/>
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

export default Login;
