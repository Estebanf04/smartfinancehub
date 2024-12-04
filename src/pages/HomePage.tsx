import ImagePresentation from "../components/ImagePresentation";
import Companies from "../components/Companies";
import Functions from "../components/Functions";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Header from "../layouts/components/Header";
import Footer from "../layouts/components/Footer";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

export default function HomePage() {
  return (
    <>
        <Header/>
            <div className="my-14 sm:my-24 px-4">
                <Hero/>
                <ImagePresentation/>
                <Companies/>
                <Functions/>
                <Pricing/>
                <Testimonials/>
                <FrequentlyAskedQuestions/>
            </div>
        <Footer/>
    </>
    
  )
}
