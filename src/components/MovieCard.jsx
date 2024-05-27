import { useNavigate } from "react-router-dom";
import imdb from "../assets/imdb.svg";
import { useMovie } from "../context/MovieProvider";

const MovieCard = ({
  id,
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  const navigate = useNavigate();
  const { getMovieDetail,getMovieVideos } = useMovie();
  return (
    <div
      className="group relative block bg-black w-[320px] h-[450px] sm:w-[230px] sm:h-[370px] rounded-md shadow-md shadow-slate-600 cursor-pointer "
      onClick={() => {
        navigate(`/details/${id}`);
        getMovieDetail(id);
        getMovieVideos(id);
      }}
    >
      <img
        alt=""
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        className="rounded-md  absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative  py-5 px-3">
        <div className="  border border-[#1F2937] bg-[#0000005a] rounded-md  pb-3 pt-1 px-3  ">
          <div className="text-sm font-medium uppercase tracking-widest  text-white flex justify-between     items-center gap-2 ">
            <img src={imdb} alt="imdbsvg" className="w-[50px]" />
            <span
              className={
                "px-2 py-1 rounded-md font-semibold " +
                (vote_average > 8
                  ? "bg-green-900"
                  : vote_average > 7
                  ? "bg-green-600"
                  : vote_average > 6
                  ? "bg-yellow-700"
                  : vote_average > 5
                  ? "bg-orange-700"
                  : "bg-red-700")
              }
            >
              {vote_average.toFixed(1)}
            </span>
            <span className="font-semibold">
              {release_date.slice(0, release_date.indexOf("-"))}
            </span>
          </div>
          <p className="text-2xl font-bold text-white sm:text-lg">{title}</p>
        </div>

        <div className="mt-25 sm:mt-18 ">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-[#c0bdbd] border border-[#1F2937] bg-[#0000005a] rounded-md py-3 px-3 max-h-[310px] sm:max-h-[230px]  overflow-auto">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
