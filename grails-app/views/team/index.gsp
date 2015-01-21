
<%@ page import="botkill.gameconsole.Team" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'team.label', default: 'Team')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<g:set var="title" value="${message(code: 'default.list.label', args: [entityName])}" scope="request" />
		<div id="subnav" role="navigation">
			<ul>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-team" class="content scaffold-list" role="main">
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table class="table">
			<thead>
					<tr>
						<g:sortableColumn property="id" title="${message(code: 'team.id.label', default: 'Id')}" />
						<g:sortableColumn property="name" title="${message(code: 'team.name.label', default: 'Name')}" />
						<g:sortableColumn property="programmingLanguage" title="${message(code: 'team.programmingLanguage.label', default: 'Programming language')}" />
						<g:each var="i" in="${1..(Team.constraints.players.getAppliedConstraint('maxSize').maxSize)}">
						<th>Player #${i}</th>
						</g:each>
					</tr>
				</thead>
				<tbody>
				<g:each in="${teamInstanceList}" status="i" var="teamInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">

						<td><g:fieldValue field="id" bean="${teamInstance}" /></td>
						<td><g:link action="show" id="${teamInstance.id}">${fieldValue(bean: teamInstance, field: "name")}</g:link></td>
						<td><g:fieldValue field="programmingLanguage" bean="${teamInstance}" /></td>
						<g:each var="j" in="${0..(Team.constraints.players.getAppliedConstraint('maxSize').maxSize-1)}">
						<td>${teamInstance.players[j]}</td>
						</g:each>
					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${teamInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
