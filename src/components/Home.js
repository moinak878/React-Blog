//new Home.js file that works with Json-server and custom hook
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
const Home = () => {
    
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
    

    const handleDelete = (id) => {
        alert('Go');
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
