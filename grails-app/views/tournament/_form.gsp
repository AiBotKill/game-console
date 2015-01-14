<%@ page import="botkill.gameconsole.Tournament" %>



<div class="fieldcontain ${hasErrors(bean: tournamentInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="tournament.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="name" required="" value="${tournamentInstance?.name}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: tournamentInstance, field: 'teams', 'error')} ">
	<label for="teams">
		<g:message code="tournament.teams.label" default="Teams" />
		
	</label>
	<g:select name="teams" from="${botkill.gameconsole.Team.list()}" multiple="multiple" optionKey="id" size="5" value="${tournamentInstance?.teams*.id}" class="many-to-many"/>

</div>

<div class="fieldcontain ${hasErrors(bean: tournamentInstance, field: 'games', 'error')} ">
	<label for="games">
		<g:message code="tournament.games.label" default="Games" />
		
	</label>
	<g:select name="games" from="${botkill.gameconsole.Game.list()}" multiple="multiple" optionKey="id" size="5" value="${tournamentInstance?.games*.id}" class="many-to-many"/>

</div>

<div class="fieldcontain ${hasErrors(bean: tournamentInstance, field: 'state', 'error')} required">
	<label for="state">
		<g:message code="tournament.state.label" default="State" />
		<span class="required-indicator">*</span>
	</label>
	<g:select name="state" from="${botkill.gameconsole.enums.GameState?.values()}" keys="${botkill.gameconsole.enums.GameState.values()*.name()}" required="" value="${tournamentInstance?.state?.name()}" />

</div>

