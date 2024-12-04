import { Link } from "react-router-dom";

export default function Hero() {
  return (
      <section className="flex flex-col justify-center items-start md:items-center px-2 max-w-4xl mx-auto gap-7">
            <h1 className="text-5xl md:text-7xl font-bold md:text-center px-2">
                Gestiona tu negocio, 
                <br />
                crece sin límites.
            </h1>

            <p className="text-md px-2 md:text-center text-gray-500">
                Una solución en la nube para gestionar tus finanzas y administración, 
                <br /> 
                mejorando el control y la toma de decisiones.
            </p>
            
            <Link 
            to={'/contact'} 
            className="bg-cyan-500 hover:scale-105 hover:bg-cyan-600 transition-all text-white text-center px-4 py-2 rounded-3xl max-w-max font-bold">
                Prueba la plataforma
            </Link>
      </section>
  )
}
