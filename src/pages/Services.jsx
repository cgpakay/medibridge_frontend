import { services, futureServices } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section className="pt-[35px] pb-[75px]">
      <div className="container ">
        <div className="flex justify-center mb-6">
          <h2 className="heading text-center">Our Current Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] flex-wrap">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="flex justify-center pt-20 mb-6">
          <h2 className="heading text-center">Our Future Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] flex-wrap ">
          {futureServices.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
