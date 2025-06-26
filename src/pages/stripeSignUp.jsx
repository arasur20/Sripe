import InputField from "../component/Inputfield";
import Row from "../component/divisor";
import CustomButton from "../component/CustomButton";
import googleLogo from "../utils/googleLogo.webp";
import CountrySelect from "../component/CountrySelect";
import { useNavigate } from "react-router-dom";

export const countryOptions = [
  { value: "india", label: "India" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
];
const SignUp = () => {
  const navi = useNavigate();
  const navigate = () => {
    navi('/')
  }
  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto flex flex-col justify-between">
      <div
        className="inset-0 z-0 absolute lg:fixed animate-gradient clip-diagonalsignup"
        style={{
          backgroundImage: `linear-gradient(30deg,
            #eb533f,
            #ff6ec4,
            #7873f5,
            #4ADEDE,
            #ff6ec4,
            #cfd445,
            #7873f5,
            #ff6ec4)`,
        }}
      />
      <div className="absolute left-30 top-0 min-h-screen hidden lg:block w-[1px] bg-gray-300" />
      <div className="absolute right-24 top-0 min-h-screen w-[1px] hidden lg:block bg-gray-300" />
      <div className="relative z-10 ">
        <p
          className="tracking-tighter text-3xl border-b border-dashed border-gray-200 pl-6 md:pl-6 lg:pl-36 font-bold lg:h-20 h-24 flex items-center"
          style={{ fontFamily: "revert" }}
        >
          Stripe
        </p>
        <div className="lg:ml-30 flex flex-col lg:flex-row w-full lg:w-fit pb-10 lg:pb-20">
          <div className="lg:w-5/12 relative mt-16 hidden lg:block">
            <div className="pr-20 space-y-6 text-[20px] font-semibold">
              <div className="relative">
                <div className="absolute top-2 bg-blue-600 w-[1px] h-[20px]" />
                <div className="pl-5">
                  <h1>Get started quickly</h1>
                  <p className="text-gray-500">
                    Integrate with developer-friendly APIs or choose low-code or
                    pre-built solutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 bg-blue-600 w-[1px] h-[20px]" />
              <div className="pl-5">
                <h1>
                  Support any business model
                </h1>
                <p className="text-gray-500">
                  Ecommerce, subscriptions, SaaS platforms, marketplaces, and
                  more—all within a unified platform.
                </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 bg-blue-600 w-[1px] h-[20px]" />
                <div className="pl-5">
                <h1>
                  Join millions of businesses
                </h1>
                <p className="text-gray-500">
                  Stripe is trusted by ambitious startups and enterprises of
                  every size.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:mt-0 mt-6 lg:w-7/12 flex justify-center">
            <div className="w-full md:max-w-[480px] sm:w-10/12 lg:max-w-2xl bg-white lg:p-2 mx-3 lg:mr-4 rounded-xl shadow-2xl">
              <h1 className="font-bold text-[33px] text-gray-600 mb-7 mt-8 px-7 lg:px-12">
                Create your Stripe account
              </h1>
              <div className="px-7 lg:px-12 space-y-4">
                <form>
                  <InputField title={"Email"} />
                  <InputField title={"Full name"} />
                  <InputField title={"Password"} />
                  <CountrySelect title={"Country"} options={countryOptions} />
                  <CustomButton
                    className="flex justify-center text-center hover:cursor-pointer bg-[#7864e8] text-white text-[20px] font-bold w-full p-3"
                    title={"Create account"}
                  />
                </form>
                <Row className={"hidden lg:flex"} />
                <CustomButton
                  className="hidden lg:flex justify-center text-center bg-white border border-gray-400 hover:outline-1 text-[20px] font-bold w-full p-3"
                  title={"Sign in with Google"}
                  logo={googleLogo}
                />
              </div>
              <div className="mt-5 mx-2 my-1 lg:mx-0 lg:w-full rounded-lg bg-gray-50 flex justify-center p-6">
                <p className="text-[18px] text-gray-600 font-semibold">
                  Already have an account?{" "}
                  <span className="text-[#7276fc] cursor-pointer hover:text-black" onClick={navigate}>
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 text-[18px] text-white lg:text-gray-500 font-semibold flex space-x-4 ml-7 lg:ml-30 pb-10">
          <div className="hover:cursor-pointer hover:text-black">
          <p><span className="mr-1">&copy;</span>Stripe</p>
          </div>
          <div className="hover:cursor-pointer hover:text-black">
          <p>Privacy & terms</p>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
