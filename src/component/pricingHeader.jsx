import CustomButton from "./CustomButton";

const PricingHeader = () => (
  <nav className="fixed top-0 flex w-full text-white items-center justify-between bg-black px-40 py-4 border-b border-gray-800">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-white"></div>
        <p className="text-2xl font-semibold">Linear</p>
      </div>
      <div className="hidden lg:flex w-full justify-evenly px-20 ml-8 text-gray-500 font-semibold">
        <CustomButton title={"Products"} className={"text-gray-500 text-[17px] hover:bg-neutral-900 hover:text-white px-4 py-2"} />
        <CustomButton title={"Solutions"} className={"text-gray-500 text-[17px] hover:bg-neutral-900 hover:text-white px-4 py-2"} />
        <CustomButton title={"Developers"} className={"text-gray-500 text-[17px] hover:bg-neutral-900 hover:text-white px-4 py-2"} />
        <CustomButton title={"Resources"} className={"text-gray-500 text-[17px] hover:bg-neutral-900 hover:text-white px-4 py-2"} />
        <CustomButton title={"Pricing"} className={"text-gray-500 text-[17px] hover:bg-neutral-900 hover:text-white px-4 py-2"} />
      </div>
      <div className="flex items-center space-x-4 whitespace-nowrap">
        <CustomButton title={"Log in"} className={"text-gray-500 text-[17px] hover:bg-neutral-900 hover:text-white px-4 py-2"} />
        <CustomButton title={"Sign up"} className={"bg-white text-black px-4 py-2 text-[17px]"} />
        <button className="lg:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export default PricingHeader;
