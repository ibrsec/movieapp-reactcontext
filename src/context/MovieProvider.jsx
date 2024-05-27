import { createContext, useContext, useEffect, useState } from "react";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const MovieContext = createContext();

export const useMovie = () => {
  return useContext(MovieContext);
};

const apikey = process.env.REACT_APP_TMDB_KEY;
const url = "https://api.themoviedb.org/3/discover/movie?page=1";

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieVideos, setMovieVideos] = useState({});
  const [loading, setLoading] = useState(false);

  const { axiosToken } = useAxios();

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await axiosToken("/discover/movie");
      console.log('get movies response =',response);
      setMovies(response?.data?.results);
      

    } catch (error) {
      toastErrorNotify("Getting movies is failed!")
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // getMovies();
    setMovies([
      {
        adult: false,
        backdrop_path: "/otfoeC96neoOdA4HqsX06OWuzE9.jpg",
        genre_ids: [27, 53],
        id: 719221,
        original_language: "en",
        original_title: "Tarot",
        overview:
          "When a group of friends recklessly violates the sacred rule of Tarot readings they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
        popularity: 389.86,
        poster_path: "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
        release_date: "2024-05-01",
        title: "Tarot",
        video: false,
        vote_average: 5.4,
        vote_count: 57,
      },
      {
        adult: false,
        backdrop_path: "/qGJASuD3fs9ZBxuEZoxCLVidVq8.jpg",
        genre_ids: [12, 28, 18],
        id: 845111,
        original_language: "fr",
        original_title: "Les trois mousquetaires : Milady",
        overview:
          "D'Artagnan, on a quest to rescue the abducted Constance, runs into the mysterious Milady de Winter again. The tension between the Catholics and the Protestants finally escalates, as the king declares war — forcing the now four musketeers into battle. But as the war goes on, they are tested physically, mentally and emotionally.",
        popularity: 388.542,
        poster_path: "/rtosxP5sXuoRFPH4sVbMccLIPiV.jpg",
        release_date: "2023-12-13",
        title: "The Three Musketeers: Milady",
        video: false,
        vote_average: 6.5,
        vote_count: 418,
      },
      {
        adult: false,
        backdrop_path: "/zVDJ4cRgSpHlILSm7kGiklHQ6O7.jpg",
        genre_ids: [16, 35, 12, 28],
        id: 1062807,
        original_language: "ja",
        original_title: "劇場版 SPY×FAMILY CODE: White",
        overview:
          "While under the guise of taking his family on a weekend winter getaway, Loid's attempt to make progress on his current mission Operation Strix proves difficult when Anya mistakenly gets involved and triggers events that threaten world peace.",
        popularity: 386.843,
        poster_path: "/xlIQf4y9eB14iYzNN142tROIWON.jpg",
        release_date: "2023-12-22",
        title: "SPY x FAMILY CODE: White",
        video: false,
        vote_average: 7.538,
        vote_count: 92,
      },
      {
        adult: false,
        backdrop_path: "/cEcG1Z32NWJrRKmhmEh13VyPRfk.jpg",
        genre_ids: [35, 18, 10749, 53],
        id: 79474,
        original_language: "es",
        original_title: "Más que amor, frenesí",
        overview:
          "From the land of Almodovar comes a hot new film about drugs, sex &amp; everything else!",
        popularity: 481.549,
        poster_path: "/e843ZAdn3f5R7SFTRIqoV7Ttk91.jpg",
        release_date: "1996-11-15",
        title: "Not Love, Just Frenzy",
        video: false,
        vote_average: 5.583,
        vote_count: 18,
      },
      {
        adult: false,
        backdrop_path: "/v8RgWCgabyym0eVOuQJaxL4GS8p.jpg",
        genre_ids: [37, 53, 28],
        id: 1216299,
        original_language: "en",
        original_title: "The Night They Came Home",
        overview:
          "The combined force of local lawmen and Indian police aim to take down the the Rufus Buck Gang, a cold-heated band of fugitives with vengeance on their minds.",
        popularity: 385.306,
        poster_path: "/6Bd17axAG0qJ6YIU3SoootXV0Cz.jpg",
        release_date: "2024-01-12",
        title: "The Night They Came Home",
        video: false,
        vote_average: 6.105,
        vote_count: 19,
      },
      {
        adult: false,
        backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
        genre_ids: [80, 9648, 53],
        id: 414906,
        original_language: "en",
        original_title: "The Batman",
        overview:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        popularity: 501.431,
        poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        release_date: "2022-03-01",
        title: "The Batman",
        video: false,
        vote_average: 7.678,
        vote_count: 9594,
      },
      {
        adult: false,
        backdrop_path: "/jTWllMddJzCb7hBVNZICtgKhYM9.jpg",
        genre_ids: [35, 14, 10751, 16],
        id: 639720,
        original_language: "en",
        original_title: "IF",
        overview:
          "A girl discovers she can see everyone's imaginary friends and embarks on a magical adventure to reconnect forgotten IFs with their kids.",
        popularity: 387.859,
        poster_path: "/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
        release_date: "2024-05-08",
        title: "IF",
        video: false,
        vote_average: 7.129,
        vote_count: 58,
      },
      {
        adult: false,
        backdrop_path: "/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
        genre_ids: [12, 28, 878],
        id: 11,
        original_language: "en",
        original_title: "Star Wars",
        overview:
          "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        popularity: 411.959,
        poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        release_date: "1977-05-25",
        title: "Star Wars",
        video: false,
        vote_average: 8.203,
        vote_count: 20015,
      },
      {
        adult: false,
        backdrop_path: "/ilK1JRbMjo4sMJtNKLOKnqRf1RH.jpg",
        genre_ids: [10752, 28, 36],
        id: 976906,
        original_language: "en",
        original_title: "Spitfire Over Berlin",
        overview:
          "August 1944. With the American Eighth Air Force poised to strike over Nazi Germany, British Intelligence learns that they could be flying into a deadly trap. With only hours to spare, Flight Lieutenant Edward Barnes must fly a life and death mission over Berlin in his unarmed Spitfire to obtain photographic evidence and save the lives of 1200 men.",
        popularity: 380.533,
        poster_path: "/xtPPOPTad1qopK6uDe3VlYUa22o.jpg",
        release_date: "2022-05-13",
        title: "Spitfire Over Berlin",
        video: false,
        vote_average: 3.85,
        vote_count: 20,
      },
      {
        adult: false,
        backdrop_path: "/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
        genre_ids: [28, 878],
        id: 603,
        original_language: "en",
        original_title: "The Matrix",
        overview:
          "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        popularity: 451.672,
        poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        release_date: "1999-03-31",
        title: "The Matrix",
        video: false,
        vote_average: 8.216,
        vote_count: 24904,
      },
      {
        adult: false,
        backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        genre_ids: [28, 12, 878],
        id: 298618,
        original_language: "en",
        original_title: "The Flash",
        overview:
          "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        popularity: 387.01,
        poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        release_date: "2023-06-13",
        title: "The Flash",
        video: false,
        vote_average: 6.738,
        vote_count: 3894,
      },
      {
        adult: false,
        backdrop_path: "/7IgL9NzlXSSHXyYoZHXVJEKQhkg.jpg",
        genre_ids: [16, 35],
        id: 1284004,
        original_language: "en",
        original_title: "May the 12th Be with You",
        overview:
          "It's Mother's Day and Marge Simpson joins the moms of Disney+ on a special holiday outing that turns into an epic galactic adventure filled with heroes, villains, and Stewie from Family Guy.",
        popularity: 474.698,
        poster_path: "/sHJ2OIgpcpSmhqXkuSWxZ3nwg1S.jpg",
        release_date: "2024-05-09",
        title: "May the 12th Be with You",
        video: false,
        vote_average: 5.2,
        vote_count: 13,
      },
      {
        adult: false,
        backdrop_path: "/m0XCtFisSD0O6P55G1pUHdFccuL.jpg",
        genre_ids: [10749, 35],
        id: 1093231,
        original_language: "en",
        original_title: "Mother of the Bride",
        overview:
          "A doting mom jets off to a tropical island resort for her daughter's wedding — only to discover the groom's father is the ex she hasn't seen in decades.",
        popularity: 318.945,
        poster_path: "/vdTvwykMWvVgdaViBVRh8IFTku5.jpg",
        release_date: "2024-05-08",
        title: "Mother of the Bride",
        video: false,
        vote_average: 5.814,
        vote_count: 121,
      },
      {
        adult: false,
        backdrop_path: "/en971MEXui9diirXlogOrPKmsEn.jpg",
        genre_ids: [28, 12, 35],
        id: 293660,
        original_language: "en",
        original_title: "Deadpool",
        overview:
          "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        popularity: 394.154,
        poster_path: "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
        release_date: "2016-02-09",
        title: "Deadpool",
        video: false,
        vote_average: 7.6,
        vote_count: 29902,
      },
      {
        adult: false,
        backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        genre_ids: [12, 18, 878],
        id: 157336,
        original_language: "en",
        original_title: "Interstellar",
        overview:
          "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        popularity: 361.613,
        poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        release_date: "2014-11-05",
        title: "Interstellar",
        video: false,
        vote_average: 8.434,
        vote_count: 34370,
      },
      {
        adult: false,
        backdrop_path: "/y9Hz04SvfWxUKWYvehZYxRvFoFY.jpg",
        genre_ids: [27, 53],
        id: 1087388,
        original_language: "en",
        original_title: "Sting",
        overview:
          "After raising an unnervingly talented spider in secret, 12-year-old Charlotte must face the truth about her pet and fight for her family's survival.",
        popularity: 571.211,
        poster_path: "/uXUs1fwSuE06LgYETw2mi4JxQvc.jpg",
        release_date: "2024-04-12",
        title: "Sting",
        video: false,
        vote_average: 6.468,
        vote_count: 62,
      },
      {
        adult: false,
        backdrop_path: "/3RWsSQlqzRjsuqSRmoyggy74UA7.jpg",
        genre_ids: [28, 14, 35],
        id: 43074,
        original_language: "en",
        original_title: "Ghostbusters",
        overview:
          "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
        popularity: 462.4,
        poster_path: "/wJmWliwXIgZOCCVOcGRBhce7xPS.jpg",
        release_date: "2016-07-14",
        title: "Ghostbusters",
        video: false,
        vote_average: 5.357,
        vote_count: 6224,
      },
      {
        adult: false,
        backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        genre_ids: [16, 10751, 35, 14],
        id: 508947,
        original_language: "en",
        original_title: "Turning Red",
        overview:
          "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        popularity: 377.764,
        poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        release_date: "2022-03-10",
        title: "Turning Red",
        video: false,
        vote_average: 7.387,
        vote_count: 4953,
      },
      {
        adult: false,
        backdrop_path: "/70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg",
        genre_ids: [27, 53, 9648],
        id: 760104,
        original_language: "en",
        original_title: "X",
        overview:
          "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
        popularity: 423.219,
        poster_path: "/A7YPhQKdcr6XB1kCUdS4tHifYWd.jpg",
        release_date: "2022-03-17",
        title: "X",
        video: false,
        vote_average: 6.729,
        vote_count: 2780,
      },
      {
        adult: false,
        backdrop_path: "/6a3aiSYNqABoV1Fq8n10LMOBxhH.jpg",
        genre_ids: [28, 53],
        id: 821937,
        original_language: "vi",
        original_title: "578: Phát Đạn Của Kẻ Điên",
        overview:
          "A container truck driver, Hùng, lives an idyllic life with his little daughter, An. The father and daughter become the closest companions in every journey with their orange container truck. Life goes on like that until An has to leave her father to go to school. One day, Hùng is informed that An is suffering from severe depression. Relying on his old skills in the past and finding out the truth, Hùng becomes enraged and painful to know that his little girl was kidnapped by a male stranger. Starting his lone and intense journey looking for and chasing after the unknown abuser, Hùng realizes that to hunt down that psychopath he has to counter the massive underground forces behind him.",
        popularity: 373.773,
        poster_path: "/8Nw5v7wPfa2FwbKyx61K2nIBcKa.jpg",
        release_date: "2022-05-20",
        title: "578: Magnum",
        video: false,
        vote_average: 5.6,
        vote_count: 45,
      },
    ]);
  }, []);



  const getMovieDetail = async (movieId) => {
    setLoading(true);
    try {
      const response = await axiosToken("/movie/"+movieId);
      console.log('get movie detail response = ',response);
      setMovieDetail(response?.data);
    

    } catch (error) {
      toastErrorNotify("Getting movie detail is failed!")
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getMovieVideos = async (movieId) => {
    setLoading(true);
    try {
      const response = await axiosToken("/movie/"+movieId+"/videos");
      console.log('get movie videos response = ',response);
      setMovieVideos(response?.data?.results);
    

    } catch (error) {
      toastErrorNotify("Getting movie videos is failed!")
      console.log(error);
    } finally {
      setLoading(false);
    }
  };




  const values = {
    movies,
    loading,
    movieDetail,
    movieVideos,
    getMovieDetail,
    getMovieVideos,
    
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
