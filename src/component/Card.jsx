const Card = ({title, children}) =>{
    return(
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md hover:cursor-pointer hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
    )
}
export default Card;