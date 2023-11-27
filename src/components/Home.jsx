import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="diff diff w-60 h-12">
            <div className="diff-item-1">
              <div className="bg-primary text-primary-content text-2xl font-black grid place-content-center">
                UTILIDADES WEB
              </div>
            </div>
            <div className="diff-item-2">
              <div className="bg-base-200 text-2xl font-black grid place-content-center">
                UTILIDADES WEB
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/App"} className="font-bold">
                Tu Presupuesto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <h1 className="text-3xl font-bold self-start mt-10 ">
          ¡Bienvenido/a a Utilidades Web!
        </h1>

        <main className="text-center">
          <p className="text-lg mb-4">
            ¡Hola y bienvenido/a a nuestra plataforma de Utilidades Web! Aquí,
            te ayudamos a crear herramientas impactantes con facilidad y
            creatividad.
          </p>
          <p className="text-lg mb-4">
            Nuestro propósito es simple: facilitarte las herramientas web. Desde
            la creación de tu primer proyecto hasta la personalización avanzada,
            te ofrecemos herramientas intuitivas y recursos prácticos para que
            tu visión se convierta en realidad digital.
          </p>
          <p className="text-lg">
            ¡Comienza tu viaje en el mundo de las utilidades web hoy mismo y
            descubre cómo hacer que tus proyectos en línea sean únicos,
            memorables y efectivos!
          </p>
        </main>
      </div>
      <div className="hero min-h-screen bg-base-200 m-1">
        <h2 className="text-3xl font-bold self-start ">
          Como funciona...
        </h2>
        <ul className="steps steps-vertical">
          <li className="step ">
            Ves tres opciones representadas como casillas
          </li>
          <li className="step ">
            Si eliges la opción de hacer una página web, puedes acceder a una
            sección donde puedes personalizar el número de páginas y de idiomas
            para la web.
          </li>
          <li className="step">
            hay una opción para generar múltiples presupuestos.
          </li>
          <li className="step">
            Puedes ingresar el nombre del presupuesto y del cliente/a,
            seleccionar los servicios y ver el coste total calculado.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
