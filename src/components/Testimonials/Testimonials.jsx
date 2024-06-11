import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* import avatarIcon from "../../assets/images/avatarIcon.png";
import avatarIcon2 from "../../assets/images/avatarIcon2.png";
import avatarIcon3 from "../../assets/images/avatarIcon3.png";
import avatarIcon4 from "../../assets/images/avatarIcon4.png"; */
import avatarIcon from "../../assets/images/avatarIcon.jpg";
import avatarIcon2 from "../../assets/images/avatarIcon2.jpg";
import avatarIcon3 from "../../assets/images/avatarIcon3.jpg";
import avatarIcon4 from "../../assets/images/avatarIcon4.jpg";
import avatarIcon5 from "../../assets/images/avatarIcon5.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      avatar: avatarIcon,
      name: "Michael Scott",
      stars: 4,
      quote:
        "MediBridge has completely changed my life. The personalized care plans and the attention to detail by the doctors have made managing my chronic condition so much easier. I feel truly cared for.",
    },
    {
      avatar: avatarIcon2,
      name: "Hubertus Da Silva",
      stars: 5,
      quote:
        "As someone with a busy schedule, MediBridge's seamless appointment scheduling and virtual visits have been a lifesaver. The quality of care is exceptional, and I always feel listened to.",
    },
    {
      avatar: avatarIcon3,
      name: "Lauren Winter",
      stars: 5,
      quote:
        "I can't say enough good things about MediBridge. The online consultations are incredibly convenient, and the medical team is always professional and compassionate. It's the future of Medicare.",
    },
    {
      avatar: avatarIcon4,
      name: "Lin Chun",
      stars: 4,
      quote:
        "For a long time I was looking for a way to connect with a doctor in an easy way. This has been quite difficult for me in the past and I was really struggling with it. Finally MediBridge can solve this issue for me.",
    },
  ];

  return (
    <div className="bg-white-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        What our patients say
      </h1>
      <div className="container mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={testimonial.avatar}
                alt="testimonial"
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-lg font-bold text-center mb-2">
                {testimonial.name}
              </h3>
              <div className="text-yellow-400 text-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 inline-block"
                    fill={i < testimonial.stars ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.25l-6.472 3.673 1.24-7.224-5.258-5.127 7.262-1.057L12 .75l3.228 6.765 7.262 1.057-5.258 5.127 1.24 7.224z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-center">{testimonial.quote}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
