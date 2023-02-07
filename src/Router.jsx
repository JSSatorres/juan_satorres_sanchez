import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import { HomeFactory } from './pages/home/HomeFactory';
import NoMatch from './pages/noMatch';
import AboutMe from './pages/aboutMe';
import Contact from "./pages/contact";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element:HomeFactory.create(),
			},
			{
				path: "aboutme",
				element: <AboutMe />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "projects",
				element: <Projects />,
			},
			{
				path: "*",
				element: <NoMatch />,
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
