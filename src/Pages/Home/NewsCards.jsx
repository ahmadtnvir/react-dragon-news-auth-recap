import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewsCards = ({ news }) => {
  const { author, title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 justify-center items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={author.img} />
            </div>
          </div>
          <div>
            <h3>{author.name}</h3>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <h3 className="text-[#403F3F] text-xl font-bold">{title}</h3>
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <p>
              <Link className="text-red-500 font-bold" to={`/news/${_id}`}>
                Read More
              </Link>
            </p>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};
NewsCards.propTypes = {
  news: PropTypes.object,
};
export default NewsCards;
