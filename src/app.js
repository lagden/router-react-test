import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './modules/app'
import Home from './modules/home'
import About from './modules/about'
import Repos from './modules/repos'
import Repo from './modules/repo'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/repos" component={Repos}>
				<Route path="/repos/:userName/:repoName" component={Repo}/>
			</Route>
			<Route path="/about" component={About}/>
		</Route>
	</Router>
), document.getElementById('app'))
