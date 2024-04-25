import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'



const BlogDetails = () => {
    const params = useParams()

    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog">Volver</Link>
        </>
    )
}

export default BlogDetails