
<%@ page import="botkill.gameconsole.enums.GameState; botkill.gameconsole.Tournament" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'tournament.label', default: 'Tournament')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<g:set var="title" value="${message(code: 'default.list.label', args: [entityName])}" scope="request" />
		<div id="subnav" role="navigation">
			<ul>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-tournament" class="content scaffold-list" role="main">
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table class="table">
			<thead>
					<tr>
					
						<g:sortableColumn property="name" title="${message(code: 'tournament.name.label', default: 'Name')}" />

						<g:sortableColumn property="dateCreated" title="${message(code: 'tournament.dateCreated.label', default: 'Date Created')}" />
					
						<g:sortableColumn property="state" title="${message(code: 'tournament.state.label', default: 'State')}" />

						<th><g:message code="default.action.label" default="Action" /></th>
					</tr>
				</thead>
				<tbody>
				<g:each in="${tournamentInstanceList}" status="i" var="tournamentInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					
						<td><g:link action="show" id="${tournamentInstance.id}">${fieldValue(bean: tournamentInstance, field: "name")}</g:link></td>

						<td><g:formatDate date="${tournamentInstance.dateCreated}" /></td>

						<td>${fieldValue(bean: tournamentInstance, field: "state")}</td>

						<td>
							<g:if test="${tournamentInstance.state == GameState.CREATED}">
								<a href="${g.createLink(controller: 'tournament', action: 'start', id: tournamentInstance.id)}">
									<button class="btn btn-success"><g:message code="tournament.start.label" default="Start tournament" /></button>
								</a>
							</g:if>
							<g:elseif test="${tournamentInstance.state == GameState.STARTED}">
								<a href="${g.createLink(controller: 'visualize', action: '2d', id: tournamentInstance.currentGame.id, params:['tournamentId':tournamentInstance.id])}">
									<button class="btn btn-success"><g:message code="tournament.view.label" default="View 2D" /></button>
								</a>
								<a href="${g.createLink(controller: 'visualize', action: '3d', id: tournamentInstance.currentGame.id, params:['tournamentId':tournamentInstance.id])}">
									<button class="btn btn-primary"><g:message code="tournament.view.label" default="View 3D" /></button>
								</a>
							</g:elseif>
							<g:elseif test="${tournamentInstance.state == GameState.FINISHED}">
								<a href="#TODO">
									<button class="btn btn-success"><g:message code="tournament.view.label" default="View tournament" /></button>
								</a>
							</g:elseif>
						</td>
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${tournamentInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
