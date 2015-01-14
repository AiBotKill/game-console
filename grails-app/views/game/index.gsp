
<%@ page import="botkill.gameconsole.Game" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'game.label', default: 'Game')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-game" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-game" class="content scaffold-list" role="main">
			<h1><g:message code="default.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>
					
						<g:sortableColumn property="darkness" title="${message(code: 'game.darkness.label', default: 'Darkness')}" />
					
						<g:sortableColumn property="rain" title="${message(code: 'game.rain.label', default: 'Rain')}" />
					
						<g:sortableColumn property="rounds" title="${message(code: 'game.rounds.label', default: 'Rounds')}" />
					
						<g:sortableColumn property="roundTime" title="${message(code: 'game.roundTime.label', default: 'Round Time')}" />
					
						<g:sortableColumn property="environment" title="${message(code: 'game.environment.label', default: 'Environment')}" />
					
						<g:sortableColumn property="mode" title="${message(code: 'game.mode.label', default: 'Mode')}" />
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${gameInstanceList}" status="i" var="gameInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${gameInstance.id}">${fieldValue(bean: gameInstance, field: "darkness")}</g:link></td>
					
						<td>${fieldValue(bean: gameInstance, field: "rain")}</td>
					
						<td>${fieldValue(bean: gameInstance, field: "rounds")}</td>
					
						<td>${fieldValue(bean: gameInstance, field: "roundTime")}</td>
					
						<td>${fieldValue(bean: gameInstance, field: "environment")}</td>
					
						<td>${fieldValue(bean: gameInstance, field: "mode")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${gameInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
