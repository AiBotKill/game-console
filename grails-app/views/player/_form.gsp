<%@ page import="botkill.gameconsole.Player" %>



<div class="fieldcontain ${hasErrors(bean: playerInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="player.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="name" required="" value="${playerInstance?.name}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: playerInstance, field: 'team', 'error')} required">
	<label for="team">
		<g:message code="player.team.label" default="Team" />
	</label>
	${playerInstance?.team}

</div>

