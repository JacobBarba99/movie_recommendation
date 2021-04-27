import { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { searchFetchApi } from '../../api/movie';
import Movie from "../../components/Movie"
import SkeletonMovie from "../../components/Skeleton/ListMovie"
import { Movie as movieInterface } from '../../interface/movieHomeInterface';


import "./Search.scss"

const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Search = () => {
    const location = useLocation();
    const { search } = location;
    const [list, setList] = useState<movieInterface[]>();

    const search_movie = async (name: string) => {
        const search = await searchFetchApi(name)
        setList(search.results)
    };

    useEffect(() => {

        search_movie(search.replace("?query=", ""))
    }, [search])
    return (
        <div className="search" >
            <div className="search_header">
                <h2>{search.replace("?query=", "")}</h2>
            </div>
            <div className="search_options">
                {list && list?.length !== 0 ?
                    list?.map((item: movieInterface) => (<Movie key={item.id} movie={item} />)) :
                    loading.map((item: number) => <SkeletonMovie key={item} />)}
            </div>
        </div>
    )
}

export default Search
