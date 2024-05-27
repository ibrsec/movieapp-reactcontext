import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/MovieProvider";
import Spinners from "../components/Spinners";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { movieDetail, movieVideos, loading } = useMovie();
  console.log("movieDetail = ", movieDetail);
  console.log("movieVideos = ", movieVideos);
  return (
    <div sx={{background:`url(https://image.tmdb.org/t/p/w1280${movieDetail?.backdrop_path})`}}>
      <div className="max-w-[1200px] mx-auto my-5 ">
        {loading ? (
          <Spinners />
        ) : (
          <div className="border border-1">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movieDetail?.poster_path}`}
              alt=""
            />
            <img
              src={`https://image.tmdb.org/t/p/w1280${movieDetail?.backdrop_path}`}
              alt=""
            />
            <h3>{movieDetail?.title}</h3>
          </div>
        )}

        <div>
          <button
            className=" bg-slate-600 text-white p-3 rounded-xl m-5"
            onClick={() => navigate("/")}
          >
            home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
