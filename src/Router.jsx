import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layout/Layout';
import { HomeFactory } from './pages/Home/HomeFactory';
import NoMatch from './pages/NoMatch';

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
				path: "*",
				element: <NoMatch />,
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
