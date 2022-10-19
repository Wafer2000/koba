/* eslint-disable jsx-a11y/heading-has-content */
import { makeStyles } from "@mui/styles";
import "./Login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useEffect } from "react";

const Login = () => {
  const classes = useStyles();

  useEffect(() => {
    
  })

  return (
    <div className="root">
      <div className={classes.body}>
        <div className={`container`}>
          <div className={classes.forms_container}>
            <div className={classes.signin_signup}>
              <form action="#" className={`sign-in-form`}>
                <h2 className={classes.title}>Sign In</h2>
                <div className={classes.input_field}>
                  <i className={classes.input_field_i}>
                    <FaUserAlt />
                  </i>
                  <input
                    type="text"
                    placeholder="Username"
                    className={classes.input_field_input}
                  />
                </div>
                <div className={classes.input_field}>
                  <i className={classes.input_field_i}>
                    <FaLock />
                  </i>
                  <input
                    type="password"
                    placeholder="Password"
                    className={classes.input_field_input}
                  />
                </div>
                <input type="submit" value="Login" className={`btn solid`} />
              </form>
            </div>
          </div>
          <div className={`panels-container`}>
            <div className={`panel left-panel`}>
              <div className={`content`}>
                <h3>Bienvenido a Koba</h3>
                <p>Tu programa contable favorito para tus negocios</p>
              </div>

              <img src="login.svg" className={`image`} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},

  body: {
    fontFamily: "Poppins, sans-serif",
  },

  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
    overflow: "hidden",
  },

  forms_container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },

  title: {
    fontSize: "2.2rem",
    color: "#444",
    marginBottom: "10px",
  },

  sign_up_form: {
    opacity: 0,
    zIndex: 1,
  },

  sign_in_form: {
    zIndex: 2,
  },

  input_field: {
    maxWidth: "380px",
    width: "100%",
    height: "55px",
    backgroundColor: "#f0f0f0",
    margin: "10px 0",
    borderRadius: "55px",
    display: "grid",
    gridTemplateColumns: "15% 85%",
    padding: "0 .4rem",
  },

  input_field_i: {
    textAlign: "center",
    lineHeight: "55px",
    color: "#acacac",
    fontSize: "1.1rem",
  },

  input_field_input: {
    background: "none",
    outline: "none",
    border: "none",
    lineHeight: 1,
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "#333",
  },

  signin_signup: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    left: '75%',
    width: '50%',
    transition: '1s 0.7s ease-in-out',
    display: 'grid',
    gridTemplateColumns: '1fr',
    zIndex: 5,
  },

  panels_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    textAlign: 'center',
    zIndex: 7,
  },

  left_panel: {
    pointerEvents: 'all',
    padding: '3rem 17% 2rem 12%',
  },

  right_panel: {
    pointerEvents: 'none',
    padding: '3rem 12% 2 rem 17%',
  },

  panel_content:{
    color: '#fff',
  },

  right_panel_content:{
    color: '#fff',
    transform: 'translateX(800px)',
  },

  panel_h3: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: '1.5rem',
  },

  panel_p: {
    fontSize: '0.95rem',
    padding: '0.7rem 0',
  },

  image: {
    width: "100%",
  },

  right_panel_image: {
    width: "100%",
    transform: 'translateX(800px)',
  }
}));

export default Login;
