import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
	// const msg = 'Welcome to the new blog';
	// const link = 'https://www.google.com';
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/create">
						<Create />
					</Route>
					<Route exact path="/blogs/:id">
						<BlogDetails />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
