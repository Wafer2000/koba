import React from "react";
import logo from "../../Images/KobaLOGO.png";
import BOSSlogo from "../../Images/BOSSlogo.png";
import EMPLElogo from "../../Images/EMPLElogo.png";
import "../../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={`body`}>
      <div className={`container`}>
        <div className={`card`}>
          <div className={`left-column background1-left-column`}>
            <h6>EMPLEADOS</h6>
            <div className={`EMPLElogo`}>
              <img src={EMPLElogo} alt="KOBA" />
            </div>
            <h4 className={`name`}>KOBA</h4>
          </div>

          <div className={`right-column`}>
            <div>
              <h6>Ingresar</h6>
            </div>

            <h2>Ingresa al Koba de tu empresa</h2>
            <p>
              Puedes ingresar con tu cuenta de empleado, a la empresa en que te
              encuentras trabajando actualmente.
            </p>
            <Link className={`link`} to="/loginemple">
              <button className={`button background1-left-column`}>
                Empezar
              </button>
            </Link>
          </div>
        </div>

        <div className={`card`}>
          <div className={`left-column background2-left-column`}>
            <h6>CEO</h6>
            <div className={`BOSSlogo`}>
              <img src={BOSSlogo} alt="KOBA" />
            </div>
            <h4 className={`name`}>KOBA</h4>
          </div>

          <div className={`right-column`}>
            <div>
              <h6>Ingresar - Registrar</h6>
            </div>

            <h2>Crea o Ingresa al Koba de tu empresa</h2>
            <p>
              Digitaliza la contabilidad de tus empresas, para asi llevar un
              correcto seguimiento de su crecimiento o ingresa a tu cuenta, si
              ya estas registrado
            </p>
            <Link className={`link`} to="/loginboss">
              <button className={`button background2-left-column`}>
                Empezar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
