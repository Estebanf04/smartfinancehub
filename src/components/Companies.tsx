
export default function Companies() {
  return (
    <section className="py-10 max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-600">
            Compañías de relevancia que trabajan y han confiado en <span className="font-bold">SmartFinance Hub</span>
        </p>
        <div className="flex justify-center pt-4 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <img src="./comp1.png" className="w-44"/>
                <img src="./comp2.png" className="w-44"/>
                <img src="./comp3.png" className="w-44"/>
                <img src="./comp4.png" className="w-44"/>
          </div>
        </div>
    </section>
  )
}
