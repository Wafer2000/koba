/* eslint-disable no-unused-vars */
import "../../Styles/Login.css";
import wave from '../../Images/wave.png';
import KobaMARCO from "../../Images/Kobafullbody.png";
import KobaLOGO from "../../Images/KobaMARCO.png";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className={`body`}>
      <img className={`wave`} src={wave} alt="Kobafullbody"/>
      <div className={`container`}>
        <div className={`img`}>
          <img src={KobaMARCO} alt="KobaMARCO"/>
        </div>
        <div className={`login-container`}>
          <form action="#">
            <img src={KobaLOGO} alt="KobaLOGO"/>
            <h2>Welcome</h2>
            <div className={`input-div`}>
              <div className={`i`}>
                <FaUserAlt/>
              </div>
              <div>
                <h5>Username</h5>
                <input className={`input`} type="text"/>
              </div>
            </div>
            <div className={`input-div`}>
              <div className={`i`}>
                <FaLock/>
              </div>
              <div>
                <h5>Password</h5>
                <input className={`input`} type="password"/>
              </div>
            </div>
            <input type="submit" className={`btn`} value="Login"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
