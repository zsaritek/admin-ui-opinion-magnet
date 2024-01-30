import { Navbar, Footer } from '../components/landing-components';
import images from '../assets/landing-assets/images'

function HowOpinionMagnetWorks() {
  return (
    <div className='w-full bg-primary-hero-bluecolor'>
      <Navbar />
      <section id="hero-section" className="mt-4 flex flex-col flex-1 justify-center items-center text-center relative z-50">
        <picture className="absolute bottom-0 left-0 -z-50 w-full">
          <source media="(min-width:375px )" srcset={images.BackgroundCurveDesktop} />
          <img src={images.BackgroundCurveMobile} alt="background-image" />
        </picture>
        <div className="max-w-[500px] ">
          <h1 className="text-white text-2xl leading-relaxed font-raleway">
            TEST
          </h1>
        </div>
      </section >
      <Footer />
    </div >
  )
}

export default HowOpinionMagnetWorks
