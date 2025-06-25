import InputField from "../component/Inputfield";
import CustomButton from "../component/CustomButton";
import Row from "../component/divisor";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import googleLogo from "../utils/googleLogo.webp"
const SignIn = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto">
      <div
        className="inset-0 z-0 fixed animate-gradient clip-diagonal"
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

      <div className="relative z-10 px-4 py-8 space-y-8">
        <p
          className="tracking-tighter text-3xl ml-4 md:ml-6 lg:ml-30 font-bold text-white"
          style={{
            fontFamily: "revert",
          }}
        >
          Stripe
        </p>

        <div className="flex justify-center">
          <div className="w-full md:max-w-[480px] sm:w-10/12 lg:max-w-2xl bg-white p-2  rounded-xl shadow-xl">
            <h1 className="font-bold text-[33px] text-gray-600 mb-7 mt-8 px-12">
              Sign in to your account
            </h1>
            <div className="px-12 space-y-4">
              <form action="">
              <InputField title={"Email"} />
              <div className="relative">
              <InputField title={"Password"} />
              <p className="absolute right-1 top-0 font-semibold text-blue-500 hover:text-black hover:cursor-pointer text-[18px]">Forgot your password?</p>
              </div>
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg my-3"
                />
                <span className="text-gray-700 text-[18px]">
                  Remember me on this device
                </span>
              </label>
              <CustomButton
                className={
                  "flex justify-center text-center hover:cursor-pointer bg-[#7864e8] text-white text-[20px] font-bold w-full p-3"
                }
                title={"Sign in"}
              />
              </form>
              <Row />
              <CustomButton
                className={
                  "flex justify-center text-center bg-white border border-gray-400 hover:outline-1 text-[20px] font-bold w-full p-3"
                }
                logo={googleLogo}
                title={"Sign in with Google"}
              />
              <CustomButton
                className={
                  "flex justify-center text-center bg-white border border-gray-400 hover:outline-1 text-[20px] font-bold w-full p-3"
                }
                title={"Sign in with passkey"}
              />
              <CustomButton
                className={
                  "flex justify-center text-center bg-white border border-gray-400 hover:outline-1 text-[20px] font-bold w-full p-3"
                }
                title={"Sign in with SSO"}
              />
            </div>
            <div className="mt-5 w-full bg-gray-50 flex justify-center p-6">
              <p className="text-[18px] text-gray-600 font-semibold">
                New to Stripe?{" "}
                <span className="text-[#7276fc] cursor-pointer hover:text-black">
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="w-full flex-row md:max-w-[480px] sm:w-9/12 lg:max-w-2xl flex items-start space-x-2 ml-4">
        <LockClosedIcon className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0"/>
            <p className="text-gray-700 text-[18px] mr-4">Never share your Stripe credentials. If multiple people need access to your account, invite them as team members in settings.</p>
        </div>
        </div>
        <div className="mt-10 text-[18px] text-gray-500 font-semibold flex space-x-4 ml-7 lg:ml-30">
          <div className="hover:cursor-pointer hover:text-black">
          <p><span className="mr-1">&copy;</span>Stripe</p>
          </div>
          <div className="hover:cursor-pointer hover:text-black">
          <p>Privacy & terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
