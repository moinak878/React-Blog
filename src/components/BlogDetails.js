import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog } = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();
	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/'+id, {
			method:'DELETE'
		})
		.then(() => {
				history.push('/');
			})
	}
	return (
		<div>
			{blog && (
				<article>
                    <h1>{blog.title}</h1>
                    <h4>by {blog.author}</h4>
					<p>{blog.body}</p>
				</article>
			)}

			<button onClick={handleDelete}>Delete Blog</button>
		</div>
	);
};

export default BlogDetails;
