import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, Chip, Typography } from "@material-tailwind/react";
import {
    BookmarkIcon,
    FilmIcon

} from "@heroicons/react/24/outline";

export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | any; // Update with appropriate type for the "belongs_to_collection" property
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MovieProps {
    id?: number;
}


export const HeroMovie = ({ id }: MovieProps) => {
    const [topMovie, setTopMovie] = useState<Movie | null>(null);

    const fetchMovies = async () => {
        try {
            const movieID = 550;
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id || movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&language=en-US`
            );

            const data = await response.json();
            setTopMovie(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [id]);

    useEffect(() => {
        console.log("%c Movie:", "background-color: orange; font-size: 14px; font-weight: bold; color: black;", topMovie);
    }, [topMovie]);

    return (
        <Card style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${topMovie?.backdrop_path})` }} className="flex relative w-full h-[70vh] justify-end overflow-hidden bg-cover bg-[50% 20%]">
            {<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/70 " />}
            <CardBody className="relative flex flex-col md:w-[70%] h-[65%] justify-end sm:w-[100%] gap-1">
                <Typography
                    variant="h2"
                    className="font-[800] text-[1.6rem] leading-[1]  text-[--color-text]"
                >
                    {topMovie?.title}
                </Typography>
                <Typography variant="paragraph" className="text-[.8rem] text-[--color-text] font-semibold">
                    {topMovie?.release_date.split("-").shift()}
                </Typography>
                <Typography variant="paragraph" className="font-medium text-[.8rem] text-[--color-text] leading-tight md:w-[80%] sm:w-[100%]">
                    {topMovie?.overview}
                </Typography>
                <ul className="flex gap-2">
                    {topMovie?.genres.map(({ id, name }) => (
                        <li key={id}>
                            <Chip
                                className="rounded-full font-semibold text-[.5rem] py-1 px-2"
                                color="lime"
                                value={name} />
                        </li>
                    ))}
                </ul>
            </CardBody>

            <CardFooter className="relative flex gap-3 pt-3">
                <Button className="flex items-center gap-2 px-5 py-2.5 text-[.6rem] bg-[--color-primary] shadow-md shadow-[#bd052744] hover:shadow-[#bd052777]">
                    Watch Trailer<FilmIcon strokeWidth={3} className="h-[.8rem] w-[.8rem]" />
                </Button>
                <Button className="flex items-center gap-2 px-5 py-2.5 text-[.6rem] bg-[--color-primary] shadow-md shadow-[#bd052744] hover:shadow-[#bd052777]">
                    Add to Watchlist<BookmarkIcon strokeWidth={3} className="h-[.8rem] w-[.8rem]" />
                </Button>
            </CardFooter>
        </Card>
    );
};