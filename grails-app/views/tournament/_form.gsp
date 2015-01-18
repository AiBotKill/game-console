<%@ page import="botkill.gameconsole.Tournament" %>

<div class="form-group ${hasErrors(bean: tournamentInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="tournament.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField class="form-control" name="name" required="" value="${tournamentInstance?.name}"/>
</div>

<h2><g:message code="tournament.teams.label" default="Teams" /></h2>
<g:each in="${botkill.gameconsole.Team.list()}">
	<div class="checkbox ${hasErrors(bean: tournamentInstance, field: 'teams', 'error')} ">
		<g:checkBox name="teams" value="${it.id}" />
		${it.name}
	</div>
</g:each>