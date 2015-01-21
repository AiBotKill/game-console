
<%@ page import="botkill.gameconsole.Tournament" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'tournament.label', default: 'Tournament')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<g:set var="title" value="${message(code: 'default.show.label', args: [entityName])}" scope="request" />
		<div id="subnav" role="navigation">
			<ul>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-tournament" class="content scaffold-show" role="main">
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list tournament">
			
				<g:if test="${tournamentInstance?.name}">
				<li class="fieldcontain">
					<span id="name-label" class="property-label"><g:message code="tournament.name.label" default="Name" /></span>
					
						<span class="property-value" aria-labelledby="name-label"><g:fieldValue bean="${tournamentInstance}" field="name"/></span>
					
				</li>
				</g:if>

				<g:if test="${tournamentInstance?.state}">
					<li class="fieldcontain">
						<span id="state-label" class="property-label"><g:message code="tournament.state.label" default="State" /></span>

						<span class="property-value" aria-labelledby="state-label"><g:fieldValue bean="${tournamentInstance}" field="state"/></span>

					</li>
				</g:if>
			
				<g:if test="${tournamentInstance?.teams}">
				<li class="fieldcontain">
					<span id="teams-label" class="property-label"><g:message code="tournament.teams.label" default="Teams" /></span>
					
						<g:each in="${tournamentInstance.teams}" var="t">
						<span class="property-value list-group-item" aria-labelledby="teams-label"><g:link controller="team" action="show" id="${t.id}">${t?.encodeAsHTML()}</g:link></span>
						</g:each>
					
				</li>
				</g:if>
			
				<g:if test="${tournamentInstance?.games}">
				<li class="fieldcontain">
					<span id="games-label" class="property-label"><g:message code="tournament.games.label" default="Games" /></span>
					
						<g:each in="${tournamentInstance.games}" var="g">
						<span class="property-value list-group-item ${g.state == botkill.gameconsole.enums.GameState.FINISHED ? 'list-group-item-success' : ''}" aria-labelledby="games-label">
							<g:link controller="game" action="show" id="${g.id}">${g?.encodeAsHTML()}</g:link>
							<g:if test="${g.state == botkill.gameconsole.enums.GameState.FINISHED}">
								<span class="glyphicon glyphicon-ok pull-right"></span>
							</g:if>
							<g:elseif test="${g.state == botkill.gameconsole.enums.GameState.STARTED}">
								<span class="rotating glyphicon glyphicon-repeat pull-right"></span>
							</g:elseif>
						</span>
						</g:each>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:tournamentInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="btn btn-primary" action="edit" resource="${tournamentInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="btn btn-danger" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
