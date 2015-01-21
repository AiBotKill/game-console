
<%@ page import="botkill.gameconsole.Game" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'game.label', default: 'Game')}" />
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
		<div id="show-game" class="content scaffold-show" role="main">
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list game">
			
				<g:if test="${gameInstance?.gameTeams}">
				<li class="fieldcontain">
					<span id="gameTeams-label" class="property-label"><g:message code="game.gameTeams.label" default="Game Teams" /></span>
					
						<g:each in="${gameInstance.gameTeams}" var="g">
						<span class="property-value list-group-item" aria-labelledby="gameTeams-label">${g?.encodeAsHTML()}</span>
						</g:each>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.darkness}">
				<li class="fieldcontain">
					<span id="darkness-label" class="property-label"><g:message code="game.darkness.label" default="Darkness" /></span>
					
						<span class="property-value" aria-labelledby="darkness-label"><g:fieldValue bean="${gameInstance}" field="darkness"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.rain}">
				<li class="fieldcontain">
					<span id="rain-label" class="property-label"><g:message code="game.rain.label" default="Rain" /></span>
					
						<span class="property-value" aria-labelledby="rain-label"><g:fieldValue bean="${gameInstance}" field="rain"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.rounds}">
				<li class="fieldcontain">
					<span id="rounds-label" class="property-label"><g:message code="game.rounds.label" default="Rounds" /></span>
					
						<span class="property-value" aria-labelledby="rounds-label"><g:fieldValue bean="${gameInstance}" field="rounds"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.roundTime}">
				<li class="fieldcontain">
					<span id="roundTime-label" class="property-label"><g:message code="game.roundTime.label" default="Round Time" /></span>
					
						<span class="property-value" aria-labelledby="roundTime-label"><g:fieldValue bean="${gameInstance}" field="roundTime"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.environment}">
				<li class="fieldcontain">
					<span id="environment-label" class="property-label"><g:message code="game.environment.label" default="Environment" /></span>
					
						<span class="property-value" aria-labelledby="environment-label"><g:fieldValue bean="${gameInstance}" field="environment"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.mode}">
				<li class="fieldcontain">
					<span id="mode-label" class="property-label"><g:message code="game.mode.label" default="Mode" /></span>
					
						<span class="property-value" aria-labelledby="mode-label"><g:fieldValue bean="${gameInstance}" field="mode"/></span>
					
				</li>
				</g:if>
			
				<g:if test="${gameInstance?.state}">
				<li class="fieldcontain">
					<span id="state-label" class="property-label"><g:message code="game.state.label" default="State" /></span>
					
						<span class="property-value" aria-labelledby="state-label"><g:fieldValue bean="${gameInstance}" field="state"/></span>
					
				</li>
				</g:if>
			
			</ol>
			<g:form url="[resource:gameInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:if test="${gameInstance.state == botkill.gameconsole.enums.GameState.CREATED}">
						<g:link class="btn btn-primary" action="edit" resource="${gameInstance}"><g:message code="default.button.edit.label" default="Edit" /></g:link>
						<g:actionSubmit class="btn btn-danger" action="delete" value="${message(code: 'default.button.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
					</g:if>
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
