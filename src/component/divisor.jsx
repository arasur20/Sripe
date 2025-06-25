const Row = ({className})=>{
    return(
        <div className={`flex flex-row mt-5 items-center space-x-3 ${className}`}>
            <div className="w-md h-[1px] bg-gray-300"/>
            <p className="text-gray-400">OR</p>
            <div className="w-md h-[1px] bg-gray-300"/>
          </div>
    )
}
export default Row;