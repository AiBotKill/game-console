<%@ page import="botkill.gameconsole.enums.TeamColor; botkill.gameconsole.Game" %>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'darkness', 'error')} required">
	<label for="darkness">
		<g:message code="game.darkness.label" default="Darkness" />
		<span class="required-indicator">*</span>
	</label>
	<g:field class="form-control" name="darkness" type="number" min="0" max="100" value="${fieldValue(bean: gameInstance, field: 'darkness')}" required=""/>
</div>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'rain', 'error')} required">
	<label for="rain">
		<g:message code="game.rain.label" default="Rain" />
		<span class="required-indicator">*</span>
	</label>
	<g:field class="form-control" name="rain" type="number" min="0" max="100" value="${fieldValue(bean: gameInstance, field: 'rain')}" required=""/>
</div>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'rounds', 'error')} required">
	<label for="rounds">
		<g:message code="game.rounds.label" default="Rounds" />
		<span class="required-indicator">*</span>
	</label>
	<g:field class="form-control" name="rounds" type="number" min="1" max="10" value="${gameInstance.rounds}" required=""/>
</div>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'roundTime', 'error')} required">
	<label for="roundTime">
		<g:message code="game.roundTime.label" default="Round Time (sec)" />
		<span class="required-indicator">*</span>
	</label>
	<g:field class="form-control" name="roundTime" type="number" min="1" max="600" value="${gameInstance.roundTime}" required=""/>
</div>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'environment', 'error')} required">
	<label for="environment">
		<g:message code="game.environment.label" default="Environment" />
		<span class="required-indicator">*</span>
	</label>
	<g:select class="form-control" name="environment" from="${botkill.gameconsole.enums.GameEnvironment?.values()}" keys="${botkill.gameconsole.enums.GameEnvironment.values()*.name()}" required="" value="${gameInstance?.environment?.name()}" />
</div>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'mode', 'error')} required">
	<label for="mode">
		<g:message code="game.mode.label" default="Mode" />
		<span class="required-indicator">*</span>
	</label>
	<g:select class="form-control" id="mode" name="mode" from="${botkill.gameconsole.enums.GameMode?.values()}" keys="${botkill.gameconsole.enums.GameMode.values()*.name()}" required="" value="${gameInstance?.mode?.name()}" />
</div>

<h2><g:message code="game.onlineais.label" default="AIs" /></h2>
<g:each in="${botkill.gameconsole.Team.list()}" var="teamInstance">
	<div class="${hasErrors(bean: tournamentInstance, field: 'teams', 'error')} ">
		<input
				type="checkbox"
				class="participationCheckbox"
				name="teams"
				${gameInstance.mode == botkill.gameconsole.enums.GameMode.TEAM ? "style=display:none" : ''}
				value="${teamInstance.id}"
				${gameInstance.gameTeams?.teams?.id?.flatten()?.contains(teamInstance.id) ? 'checked="checked"' : ''}
				${params?.list("teams")?.contains(teamInstance.id as String) ? 'checked="checked"' : ''} />

		<select
				class="teamSelect img-rounded"
				name="teamAssignments"
				${!gameInstance.id || gameInstance.mode == botkill.gameconsole.enums.GameMode.DEATHMATCH ? "style=display:none" : ""}>
			<option value=""><g:message code="game.notParticipating.label" default="Not participating" /></option>
			<g:each in="${1..botkill.gameconsole.enums.TeamColor.values().length}">
				<option
						value="${teamInstance.id}:${it}"
						${gameInstance.gameTeams?.find{it.teams.contains(teamInstance)}?.color?.ordinal() == (it-1) ? 'selected="selected"' : ''}>
					Team ${it}
				</option>
			</g:each>
		</select>

		${teamInstance.name}
	</div>
</g:each>

<asset:javascript src="game.js"/>