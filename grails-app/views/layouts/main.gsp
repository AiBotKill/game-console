<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="AI Game Console"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
  		<asset:stylesheet src="application.css"/>
		<asset:javascript src="application.js"/>
		<g:layoutHead/>
	</head>
	<body>
		<div id="wrapper">
			<div id="header">
				<div id="logo" role="banner">
					<a href="${g.createLink(controller:'team')}"><asset:image src="logo.png" alt="AI Game Console"/></a>
				</div>
				<nav id="nav">
					<ul>
						<li ${params.controller == 'team' ? 'class=current' : ''}><a href="${g.createLink(controller:'team')}">Teams</a></li>
						<li ${params.controller == 'tournament' ? 'class=current' : ''}><a href="${g.createLink(controller:'tournament')}">Tournaments</a></li>
						<li ${params.controller == 'game' ? 'class=current' : ''}><a href="${g.createLink(controller:'game')}">Games</a></li>
					</ul>
				</nav>
			</div>
			<div id="hero">
				<div id="titlebanner">
					<div id="herobackground">
						<asset:image src="hero.png" alt="AI Game Console"/>
					</div>
					<div class="title">
						<h1>${request.title}</h1>
					</div>
				</div>
			</div>

			<g:layoutBody/>
			<div id="push"></div>
		</div>

		<div id="footer" role="contentinfo"></div>
		<div id="spinner" class="spinner" style="display:none;"><g:message code="spinner.alt" default="Loading&hellip;"/></div>
	</body>
</html>
