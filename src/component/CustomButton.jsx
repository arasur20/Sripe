import { motion } from "framer-motion"
const CustomButton = ({title, className, type, onClick, logo,...props}) =>{
    return(
        <motion.button
        className={`text-center rounded-lg font-semibold ${className} flex items-center`}
        type={type}
        onClick={onClick}
        {...props}
        >{
            logo && (<img src={logo} alt="Google Logo" className="w-6 h-6 mr-1"/>)
        }
            {title}
        </motion.button>
    )
}
export default CustomButton;