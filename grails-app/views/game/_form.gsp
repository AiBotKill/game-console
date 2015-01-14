<%@ page import="botkill.gameconsole.Game" %>



<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'gameTeams', 'error')} ">
	<label for="gameTeams">
		<g:message code="game.gameTeams.label" default="Game Teams" />
		
	</label>
	
<ul class="one-to-many">
<g:each in="${gameInstance?.gameTeams?}" var="g">
    <li><g:link controller="gameTeam" action="show" id="${g.id}">${g?.encodeAsHTML()}</g:link></li>
</g:each>
<li class="add">
<g:link controller="gameTeam" action="create" params="['game.id': gameInstance?.id]">${message(code: 'default.add.label', args: [message(code: 'gameTeam.label', default: 'GameTeam')])}</g:link>
</li>
</ul>


</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'darkness', 'error')} required">
	<label for="darkness">
		<g:message code="game.darkness.label" default="Darkness" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="darkness" value="${fieldValue(bean: gameInstance, field: 'darkness')}" required=""/>

</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'rain', 'error')} required">
	<label for="rain">
		<g:message code="game.rain.label" default="Rain" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="rain" value="${fieldValue(bean: gameInstance, field: 'rain')}" required=""/>

</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'rounds', 'error')} required">
	<label for="rounds">
		<g:message code="game.rounds.label" default="Rounds" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="rounds" type="number" min="1" max="10" value="${gameInstance.rounds}" required=""/>

</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'roundTime', 'error')} required">
	<label for="roundTime">
		<g:message code="game.roundTime.label" default="Round Time" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="roundTime" type="number" min="1" max="600" value="${gameInstance.roundTime}" required=""/>

</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'environment', 'error')} required">
	<label for="environment">
		<g:message code="game.environment.label" default="Environment" />
		<span class="required-indicator">*</span>
	</label>
	<g:select name="environment" from="${botkill.gameconsole.enums.GameEnvironment?.values()}" keys="${botkill.gameconsole.enums.GameEnvironment.values()*.name()}" required="" value="${gameInstance?.environment?.name()}" />

</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'mode', 'error')} required">
	<label for="mode">
		<g:message code="game.mode.label" default="Mode" />
		<span class="required-indicator">*</span>
	</label>
	<g:select name="mode" from="${botkill.gameconsole.enums.GameMode?.values()}" keys="${botkill.gameconsole.enums.GameMode.values()*.name()}" required="" value="${gameInstance?.mode?.name()}" />

</div>

<div class="fieldcontain ${hasErrors(bean: gameInstance, field: 'state', 'error')} required">
	<label for="state">
		<g:message code="game.state.label" default="State" />
		<span class="required-indicator">*</span>
	</label>
	<g:select name="state" from="${botkill.gameconsole.enums.GameState?.values()}" keys="${botkill.gameconsole.enums.GameState.values()*.name()}" required="" value="${gameInstance?.state?.name()}" />

</div>

