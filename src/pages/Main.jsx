import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/MovieProvider";
// import PaginationComp from "../components/PaginationComp";
import Spinners from "../components/Spinners";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const navigate = useNavigate();
  const { movies, loading } = useMovie();
  console.log(movies);
  return (
    <div className="max-w-[1200px] mx-auto my-5 ">
      {loading ? (
        <Spinners />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-3  place-items-center">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} {...movie} />
            // <img
            //   src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
            //   alt="poster"
            //   width={150}
            // />
          ))}
        </div>
      )}
      <button
        className=" bg-slate-600 text-white p-3 rounded-xl m-5"
        onClick={() => navigate("details/314")}
      >
        Any detail
      </button>
      {/* <PaginationComp/> */}
    </div>
  );
};

export default Main;

//1.59da kaldin - warningleri  temizledim=
//! movie providerda mock data yi unutma
// ? search islemi var



// ? movie detail sayfasi yapilacak
  //* -> movie detailsi cektim
  //* -> movie videosu cektim
  //* -> movie simdi detail overview 
  //* -> movie videos bir veya daha fazla geliyor
  //* -> bi video goster sonraki icin link koyulabilir
  //* -> en sona da google da film adi altyazili ziel google aramali link koyulabilir
// ? pagination aktif edilip sorgu duzenlenecek
// ? button koyup top rated upcomung popular vs eklenecek
// ?
// ?
// ?
// ?
// ?
// ? sonra da filmlere details sayfasinda google da film adi + izle diye aranmis hazir linke yonlendirecek
