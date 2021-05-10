import {Link} from 'react-router-dom'
const BlogList = ({ blogs, title, handleDelete }) => {
	// const blogs = props.blogs;
	// const title = props.title;
	// console.log(props);
	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
						<h2>{blog.title}</h2>
						<p>written by {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
