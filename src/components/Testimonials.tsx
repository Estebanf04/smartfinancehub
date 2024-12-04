
export default function Testimonials() {
  return (
    <>
        <section className="my-16 flex flex-col justifyd-center max-w-6xl mx-auto gap-2">
            <div className="text-center pt-8 text-balance text-lg text-gray-600 tracking-tight">
                <h1>
                    Lo que opinan de nosotros
                </h1>
            </div>
        
            <div className="carousel my-5">
                <div className="carousel-item relative w-full">
                    <div className="card transition-all w-full bg-transparent">
                        <div className="max-w-4xl mx-auto space-y-3 text-center bg-slate-50 border border-gray-300 p-10 rounded-2xl">
                            <p className="text-gray-700 text-xl font-semibold">
                                Thomas Lompson:
                            </p>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-600">
                                    "SmartFinance ha transformado la manera en que gestiono mis finanzas. Es intuitivo, fácil de usar y ofrece reportes claros que me ayudan a tomar decisiones inteligentes."
                                </p>
                            </div>
                            <div className="rating">
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item relative w-full">
                    <div className="card transition-all w-full bg-transparent">
                        <div className="max-w-4xl mx-auto space-y-3 text-center bg-slate-50 border border-gray-300 p-10 rounded-2xl">
                            <p className="text-gray-700 text-xl font-semibold">
                                Sophia Everly:
                            </p>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-600">
                                    "Excelente herramienta para organizar mis finanzas personales. Las funciones de presupuesto y análisis de flujo de caja me permiten mantenerme al día y ahorrar más cada mes."
                                </p>
                            </div>
                            <div className="rating">
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item relative w-full">
                    <div className="card transition-all w-full bg-transparent">
                        <div className="max-w-4xl mx-auto space-y-3 text-center bg-slate-50 border border-gray-300 p-10 rounded-2xl">
                            <p className="text-gray-700 text-xl font-semibold">
                                Isla Montgomery:
                            </p>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-600">
                                    "SmartFinance hace que el seguimiento de mis inversiones y gastos sea sencillo. La interfaz es amigable y la integración con cuentas bancarias es perfecta para mi día a día."
                                </p>
                            </div>
                            <div className="rating">
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item relative w-full">
                    <div className="card transition-all w-full bg-transparent">
                        <div className="max-w-4xl mx-auto space-y-3 text-center bg-slate-50 border border-gray-300 p-10 rounded-2xl">
                            <p className="text-gray-700 text-xl font-semibold">
                                Ethan Blackwood:
                            </p>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-600">
                                    "Desde que empecé a usar SmartFinance, he logrado optimizar mis finanzas. La automatización de pagos y cobros ha ahorrado mucho tiempo y me da mayor tranquilidad."
                                </p>
                            </div>
                            <div className="rating">
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                                <input className="mask mask-star-2 bg-orange-400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
