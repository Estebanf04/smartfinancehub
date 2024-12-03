export default function Functions() {
  return (
    <section className="md:my-24 max-w-5xl mx-auto p-10 bg-gray-900 rounded-xl">
          <h1 className="text-gray-200 text-xl text-center">Las funcionalidades más destacadas</h1>
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4">
          <div className="card bg-base-100 w-1/3 min-w-full shadow-xl hover:scale-105 hover:rotate-2 transition-all">
            <figure>
              <img
                src="./funcionalidad1.jpeg"
                />
            </figure>
              <div className="card-body">
                  <h2 className="card-title">
                    Obtener análisis avanzados
                  </h2>
                  <p>Utilizamos algoritmos avanzados para predecir tendencias futuras basadas en el comportamiento histórico, como la evolución de los ingresos, el impacto de posibles inversiones o cambios en los mercados.</p>
              </div>
           </div>

           <div className="card bg-base-100 w-1/3 min-w-full shadow-xl hover:scale-105 hover:rotate-2 transition-all">
            <figure>
              <img
                src="./funcionalidad2.jpg"
                />
            </figure>
              <div className="card-body">
                  <h2 className="card-title">
                    Automatizar pagos y cobros
                  </h2>
                  <p>Configura pagos automáticos para tus suscripciones, proveedores y otros compromisos periódicos, eliminando la necesidad de hacer pagos manuales y evitando retrasos.</p>
              </div>
           </div>

           <div className="card bg-base-100 w-1/3 min-w-full shadow-xl hover:scale-105 hover:rotate-2 transition-all">
            <figure>
              <img
                src="./funcionalidad3.jpeg"
              />
            </figure>
              <div className="card-body">
                  <h2 className="card-title">
                    Integración con bancos
                  </h2>
                  <p>Conectamos de forma automática y segura tus cuentas bancarias, tarjetas y productos financieros con nuestra plataforma. Esto te permite centralizar todas tus transacciones, hacer seguimientos de tus saldos y movimientos, y gestionar tu flujo de caja.</p>
              </div>
           </div>
          </div>
        </section>
  )
}
