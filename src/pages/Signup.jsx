import { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/avatar-icon.png";
import upLoadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    speciality: "",
    medRegNr: "",
    location: "",
    photo: null,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await upLoadImageToCloudinary(file);

    console.log(data);

    setPreviewURL(data.url);
    setSelectedFile(file);
    setFormData({
      ...formData,
      photo: data.url,
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await response.json();

      if (!response.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    // Handle form submission logic here
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* IMAGE BOX */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* SIGN UP FORM */}
          <div className="rounded-l-lg lg:pl-16 p-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="First Name(s)*"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Last Name*"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password*"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Speciality"
                  name="speciality"
                  value={formData.speciality}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Medical Registration Number*"
                  name="medRegNr"
                  value={formData.medRegNr}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full pr-4 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor cursor-pointer"
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    onChange={handleFileInputChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Files
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white font-bold py-2 rounded-lg"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
