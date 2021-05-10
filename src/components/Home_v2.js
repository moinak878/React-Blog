//new Home.js file that works with Json-server 
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                if (!res.ok)
                    throw Error('could not fetch');
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            }) // wrap within setTimeout to simulate loading screen
            .catch(e => {
                setIsLoading(false);
                setError(e.message);
            })
    },[]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};
    
	return (
        <div className="content">
            {
                error && <div className ="Error Page">{error}</div>
            }
            {
                isLoading && <div className ="Loading Page">Loading ...</div>
            }
            {
                blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            }
        
		</div>
	);
};

export default Home;
