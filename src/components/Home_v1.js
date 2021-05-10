import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

	//------------------------------Notes-------------------------------------

	// const handleClick = (name,event) => {
	//     alert("Hello, " + name);
	//     console.log(event);
	// <button onClick={(event) =>handleClick('moinak',event)}>Click Me</button>
	// };

	//------------------------------------------------------------------------------------------

	// let name = 'moinak'; // this variable is not reactive
	// // to make it reactive -> use hook -> useState()
	// const handleClick = () => {
	//     name = 'not moinak';
	//     console.log(name); // the value changes but it is not re-rendered
	// };

	//------------------------------------------------------------------------------------------

	// const [name, setName] = useState('moinak');

	// const handleClick = () => {
	//     setName(!name);
	//     console.log('not moinak');
	// };

	//------------------------------------------------------------------------------------------

	const [blogs, setBlogs] = useState([
		{ title: "blog 1 ", body: "body of blog 1 ", author: "moinak", id: 1 },
		{ title: "blog 2 ", body: "body of blog 2 ", author: "no", id: 2 },
		{ title: "blog 3 ", body: "body of blog 3 ", author: "moinak", id: 3 },
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	//------------------------------Notes-------------------------------------

	// <BlogList blogs={blogs.filter((blog)=>blog.author==='moinak')} title="Moinak's Blogs"/>

	// useEffect(() => {
	// 	console.log("use effect");
	// 	console.log(blogs);

	// 	//testing infinite loop --> Yess :D firefox crashed lol 

	// 	// const newBlogs = blogs.filter((blog) => blog.id !== 2);
	// 	// setBlogs(newBlogs);

	// }); //useEffect hook -> runs for every render

	//Dependencies of useEffect -> for running only for certain renders

	// const [name, setName] = useState('moinak');
	// useEffect(() => {
	// 	console.log('use effect');
	// 	console.log(name);
	// }, [name]);

	// <button onClick={() => setName('ono')}>Change Name</button>
	// 		<p>{name}</p>
	
	//empty dependency array -> only run for first render
	// runs only when name changes -> not for blogs change


	//--------------------------ToDo--------------------------------------
	
	// 1. creating a REST API endpoint
	// 2. connecting to a database
	
	// OR 
	
	// 1. use the JSON server for now - focus on ReactJS solely
	// 2. later implement when u learn MERN stack 

	//-------------------------------------------------------------------------


	return (
		<div className="content">
			<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
		</div>
	);
};

export default Home;
