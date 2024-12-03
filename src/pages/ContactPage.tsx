import Footer from '../layouts/components/Footer'
import Header from '../layouts/components/Header'
import Form from '../components/Form'
import Stat from '../components/Stat'

export default function ContactPage() {

  return (
    <>
    <Header/>
      <div className="px-6 my-14 lg:px-8 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-4">

        <div className="mx-auto max-w-xl text-center sm:text-start space-y-6">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Unete a nuestra comunidad y siente lo mismo que nosotros.</h2>
          <p className="mt-2 text-lg/8 text-gray-600 max-w-md">Necesitamos tus datos para verificar si podemos darte acceso al software.</p>
          <Stat/>
        </div> 

        <Form/>
      </div>
    <Footer/>
    </>
  )
}