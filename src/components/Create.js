import { useState } from 'react'
import {useHistory} from 'react-router-dom'
const Create = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [body, setBody] = useState('');
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, author, body };
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		})
			.then(() => {
				console.log('added');
				//history.go(-1) --> 1 step back
				history.push('/');
			})
	}

	return (
		<div className="create">
			<h2>Add a new blog !!</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title : </label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
						// console.log(title);
					}}
				/>
				<label>Author :</label>
				<input
					type="text"
					required
					value={author}
					onChange={(e)=>setAuthor(e.target.value)}
				/>
				<label>Blog content :</label>
				<textarea
					required
					value={body}
					onChange={(e)=>setBody(e.target.value)}
				></textarea>
				<button>Add Blog</button>
				

			</form>
			<p>{title}</p>
			<p>{author}</p>
			<p>{body}</p>
		</div>
	);
};

export default Create;
