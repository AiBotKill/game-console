
<%@ page import="botkill.gameconsole.Player" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'player.label', default: 'Player')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<g:set var="title" value="${message(code: 'default.show.label', args: [entityName])}" scope="request" />
		<div id="subnav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.list.label" args="[g.message(code:'team.label', default: 'Team')]"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-player" class="content scaffold-show" role="main">
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list player">
			
				<g:if test="${playerInstance?.name}">
				<li class="fieldcontain">
					<span id="name-label" class="property-label"><g:message code="player.name.label" default="Name" /></span>
					
						<span class="property-value" aria-labelledby="name-label"><g:fieldValue bean="${playerInstance}" field="name"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${playerInstance?.team}">
				<li class="fieldcontain">
					<span id="team-label" class="property-label"><g:message code="player.team.label" default="Team" /></span>
					
						<span class="property-value" aria-labelledby="team-label"><g:link controller="team" action="show" id="${playerInstance?.team?.id}">${playerInstance?.team?.encodeAsHTML()}</g:link></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:playerInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="btn btn-primary" action="edit" resource="${playerInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="btn btn-danger" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
