import myImage1 from '../assets/images/hero-img01.png'
import myImage2 from '../assets/images/hero-img02.png'
import myImage3 from '../assets/images/hero-img03.png'
import bgImg from "../assets/images/Blur.png"

const Header = () => {
  return (
    <div className="flex justify-evenly p-8 h-full max-lg:flex-col" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="flex flex-[50%] flex-col mx-8  gap-10">
        <div className="text-5xl font-bold mt-[20%] leading-normal pl-10 pr-[10rem] max-xl:text-4xl max-sm:text-4xl sm:pr-[4rem]">We support patients in achieving a healthier and longer life.</div>
        <p className="pl-6 pr-[8rem] text-slate-700 sm:pr-[3rem]">Our application connects patients with doctors for online consultations, providing expert solutions for various diseases and health issues. Access professional medical advice and care from the comfort of your home.</p>

        <div className="flex justify-center mr-6">
          <button className="bg-primaryColor font-bold text-lg rounded-full text-white p-3 px-6">Book an Appointment</button>
        </div>
        <div className="flex flex-1 w-full justify-evenly m-6">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-4xl">30+</p>
            <p className="font-semibold text-xl">Years of Experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-4xl">50+</p>
            <p className="font-semibold text-xl">Docors to help</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-4xl">100%</p>
            <p className="font-semibold text-xl">Patient Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-[50%] gap-8 py-28 px-10">
        <div><img src={myImage1} alt="doctorimg" /></div>
        <div className='flex gap-6 flex-col py-10'>
          <img src={myImage2} alt="doctorimg2" />
          <img src={myImage3} alt="doctorimg3" />
        </div>
      </div>

    </div >
  )
};

export default Header;
