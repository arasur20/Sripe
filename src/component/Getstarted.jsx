import CustomButton from "./CustomButton";
const GetStarted = ({ title, className, nohover }) => {
    return (
        <CustomButton title={title} className={`${className ? className : "text-white bg-neutral-800"} border-[1px] border-gray-700  w-full flex justify-center px-4 py-3 font-semibold  text-[20px] ${nohover ?"" : "hover:bg-neutral-700 transition-colors duration-300"} hover:cursor-pointer`} />
    )
}
export default GetStarted;