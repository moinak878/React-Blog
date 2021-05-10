const { Link } = require("react-router-dom")

const NotFound = () => {
    return (
        <div className="not-found">
            <h1> Error 404 : Not Found !!!</h1>
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default NotFound;