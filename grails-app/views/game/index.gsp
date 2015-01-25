
<%@ page import="botkill.gameconsole.enums.GameState; botkill.gameconsole.Game" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'game.label', default: 'Game')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<g:set var="title" value="${message(code: 'default.list.label', args: [entityName])}" scope="request" />
		<div id="subnav" role="navigation">
			<ul>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-game" class="content scaffold-list" role="main">
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table class="table">
			<thead>
					<tr>
						<g:sortableColumn property="id" title="${message(code: 'game.id.label', default: 'Id')}" />

						<g:sortableColumn property="gameTeams" title="${message(code: 'game.gameTeams.label', default: 'Game Teams')}" />

						<g:sortableColumn property="dateCreated" title="${message(code: 'game.dateCreated.label', default: 'Date created')}" />

						<g:sortableColumn property="state" title="${message(code: 'game.state.label', default: 'State')}" />

						<th><g:message code="default.action.label" default="Action" /></th>
					</tr>
				</thead>
				<tbody>
				<g:each in="${gameInstanceList}" status="i" var="gameInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
						<td><g:link action="show" id="${gameInstance.id}">${fieldValue(bean: gameInstance, field: "id")}</g:link></td>

						<td>
							<ul>
								<g:if test="${gameInstance.state == GameState.FINISHED}">
									<g:each in="${gameInstance.results}">
									<li>${it}</li>
									</g:each>
								</g:if>
								<g:else>
									<g:each in="${gameInstance.gameTeams}">
										<li>${it}</li>
									</g:each>
								</g:else>
							</ul>
						</td>

						<td><g:formatDate date="${gameInstance.dateCreated}" /></td>

						<td>${fieldValue(bean: gameInstance, field: "state")}</td>

						<td>
							<g:if test="${gameInstance.state == GameState.CREATED}">
								<a href="${g.createLink(controller: 'game', action: 'start', id: gameInstance.id)}">
									<button class="btn btn-success"><g:message code="default.start.label" default="Start game" /></button>
								</a>
							</g:if>
							<g:elseif test="${gameInstance.state == GameState.STARTED}">
								<a href="${g.createLink(controller: 'visualize', action: '2d', id: gameInstance.id)}">
									<button class="btn btn-success"><g:message code="default.view.label" default="View 2D" /></button>
								</a>
								<a href="${g.createLink(controller: 'visualize', action: '3d', id: gameInstance.id)}">
									<button class="btn btn-primary"><g:message code="default.view.label" default="View 3D" /></button>
								</a>
								<a href="${g.createLink(controller: 'game', action: 'end', id: gameInstance.id)}">
									<button class="btn btn-danger"><g:message code="default.view.label" default="End game" /></button>
								</a>
							</g:elseif>
							<g:elseif test="${gameInstance.state == GameState.FINISHED}">
								<a href="${g.createLink(controller: 'visualize', action: '2d', id: gameInstance.id)}">
									<button class="btn btn-success"><g:message code="default.view.label" default="View 2D" /></button>
								</a>
							</g:elseif>
						</td>
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
