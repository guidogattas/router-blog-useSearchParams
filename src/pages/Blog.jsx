import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

const Blog = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    // useEffect(() => {
    //     console.log("SEARCHPARAMS: ", searchParams.get('name'))
    // },
    //     [searchParams]);

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (loading) return <p>Loading data...</p>
    if (error) return <p>Error: {error.message} </p>

    const handleChange = (e) => {
        let filter = e.target.value
        // setSearchParams(prevState => ({ ...prevState, filter }));
        filter ? setSearchParams({ filter }) : setSearchParams({});
    }



    return (
        <>
            <h1>Blog</h1>
            <input
                type="text"
                value={searchParams.get('filter') || ""}
                onChange={handleChange}
                className="form-control my-3"
            />
            <ul className="list-group">
                {
                    data
                        .filter((item) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            let name = item.title.toLowerCase();
                            return name.includes(filter.toLowerCase());
                        })
                        .map((item) => (
                            <Link className="list-group-item" to={`/blog/${item.id}`} key={item.id}>
                                {item.title}
                            </Link>
                        ))}
            </ul>
        </>
    )

}


export default Blog
