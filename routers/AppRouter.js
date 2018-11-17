import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SignInScreen from '../components/SignInScreen';
import SearchPanel from '../components/SearchPanel';
import NotFoundPage from '../components/NotFoundPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route path="/" component={SignInScreen} exact={true} />
			<Route path="/search" component={SearchPanel} exact={true} />
			<Route component={NotFoundPage} />
		</Switch>
	</Router>
);

export default AppRouter;
