import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

const app = function() {

	const HomePage = function() {
		return (
			<div className="homepage">
				<div className="l-wrapper">
					<Header />
					<Attribution />
					<Tree />
				</div>
			</div>
		)
	}

	const Header = function() {
		return (
			<header className="header">
				<a className="header__logo" href="https://facebook.github.io/react/" target="_blank">
					<img src="img/react-logo.svg" alt="React" />
				</a>
				<h1 className="header__title">React<br/>App Kit</h1>
				<p className="header__kicker">Ground zero for your next React app.</p>
				<a className="header__download" href="https://github.com/BuckyMaler/react-app-kit/archive/master.zip">Download Now</a>
				<a className="header__fork" href="https://github.com/BuckyMaler/react-app-kit">Fork Me on GitHub</a>
			</header>
		)
	}

	const Attribution = function() {
		return (
			<article className="attribution">
				<p className="attribution__statement">Brought to you by</p>
				<div className="attribution__label">
					<img className="attribution__label-avatar" src="img/avatar.jpg" alt="Bucky Maler"/>
					<div className="attribution__label-el">
						<p className="name">Bucky Maler</p>
						<a className="twitter" href="https://twitter.com/BuckyMaler">@BuckyMaler</a>
					</div>
				</div>
			</article>
		)
	}

	const Tree = function() {
		return (
			<pre className="tree">
				React-App-Kit<br/>
		    | -- src/<br/>
		    |   | -- assets/<br/>
				|   |   | -- css/<br/>
				|   |   |   | -- 1-base/<br/>
				|   |   |   |   | -- body-element.sass<br/>
				|   |   |   |   | -- fonts.scss<br/>
				|   |   |   |   | -- links.sass<br/>
				|   |   |   |   | -- normalize.scss<br/>
				|   |   |   |   | -- selection-colors.sass<br/>
				|   |   |   |   | -- typography.sass<br/>
				|   |   |   |   | -- vars.sass<br/>
				|   |   |   | -- 2-layout/<br/>
				|   |   |   |   | -- grid.sass<br/>
				|   |   |   | -- 3-modules/<br/>
				|   |   |   |   | -- attribution.sass<br/>
				|   |   |   |   | -- header.sass<br/>
				|   |   |   |   | -- tree.sass<br/>
				|   |   | -- img/<br/>
				|   |   |   | -- avatar.jpg/<br/>
				|   |   | -- js/<br/>
				|   |   |   | -- app.js<br/>
				|   | -- views/<br/>
				|		|   | -- index.html<br/>
			</pre>
		)
	}

	render(<HomePage />, document.querySelector('#root'))

}

app()
