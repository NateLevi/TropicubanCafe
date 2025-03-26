import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
const ReviewCard = ({ name, rating, date, source }) => {
    
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-[#5C3D2E]">
        <h3 className="text-xl font-bold">{name}</h3>

        
        {/*Star Rating Icons */}
        <div className="flex items-center mb-2 text-yellow-300 ">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span className="ml-2 text-sm text-[#5C3D2E]">{date} | {source}</span>
        </div>

        <span></span>
        <p className="text-sm">{rating}</p> 
    </div>
  )
}

export default ReviewCard