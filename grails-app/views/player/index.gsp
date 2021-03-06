
<%@ page import="botkill.gameconsole.Player" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'player.label', default: 'Player')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<g:set var="title" value="${message(code: 'default.list.label', args: [entityName])}" scope="request" />
		<div id="subnav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.list.label" args="[g.message(code:'team.label', default: 'Team')]"/></a></li>
			</ul>
		</div>
		<div id="list-player" class="content scaffold-list" role="main">
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table class="table">
			<thead>
					<tr>
					
						<g:sortableColumn property="name" title="${message(code: 'player.name.label', default: 'Name')}" />
					
						<th><g:message code="player.team.label" default="Team" /></th>
					
					</tr>
				</thead>
				<tbody>
				<g:each in="${playerInstanceList}" status="i" var="playerInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${playerInstance.id}">${fieldValue(bean: playerInstance, field: "name")}</g:link></td>
					
						<td>${fieldValue(bean: playerInstance, field: "team")}</td>
					
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${playerInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
