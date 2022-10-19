/* eslint-disable no-unused-vars */
import "../../Styles/Login.css";
import KobaWallpaper from "../../Images/kobawallpaper.jpg";

const Login = () => {
  return (
    <div className={`body`}>
      <section className={`left-form`}></section>
      <section className={`right-form`}>
        <form action="" method="post">
          <h2>Acceso Login</h2>
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" />
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" />
          <div className={`check`}>
            <input type="checkbox" name="" id="" />
            <span>Recordar</span>
          </div>
          <input type="submit" value="Ingresar" />
        </form>
      </section>
    </div>
  );
};

export default Login;
