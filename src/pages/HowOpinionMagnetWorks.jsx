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
        <div className="max-w-[800px] ">
          <p className="text-white text-xl leading-relaxed font-raleway">
            We want to share with our esteemed customers how you can make the most of the services we offer. To begin, please install the `npm install react-opinion-magnet`` package from `https://www.npmjs.com/package/react-opinion-magnet`` and configure the necessary pre-installations in your app.js file. Customize the package content to match the style of your current page,including adjustments such as measurements.
            We aggregate all comments from relevant pages on the data page and provide their analyses on our website. Access to these analyses requires logging in with an access token. Should you wish to discuss your opinions and strategic plans based on the analysis reports with our experts, you can conveniently arrange online meetings. For any technical assistance you may need, feel free to reach out to us through the help desk button.
          </p>
        </div>
      </section >
      <Footer />
    </div >
  )
}

export default HowOpinionMagnetWorks
