<%@ page import="botkill.gameconsole.enums.GameEnvironment; botkill.gameconsole.enums.GameMode; botkill.gameconsole.Team; botkill.gameconsole.enums.TeamColor; botkill.gameconsole.Game" %>

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
	<g:select class="form-control" name="environment" from="${GameEnvironment?.values()}" keys="${GameEnvironment.values()*.name()}" required="" value="${gameInstance?.environment?.name()}" />
</div>

<div class="form-group ${hasErrors(bean: gameInstance, field: 'mode', 'error')} required">
	<label for="mode">
		<g:message code="game.mode.label" default="Mode" />
		<span class="required-indicator">*</span>
	</label>
	<g:select class="form-control" id="mode" name="mode" from="${GameMode?.values()}" keys="${GameMode.values()*.name()}" required="" value="${gameInstance?.mode?.name()}" />
</div>

<div class="pull-left" style="width:45%">
	<h2><g:message code="game.onlineais.label" default="AIs" /></h2>
	<div id="ai" class="list-group ${hasErrors(bean: tournamentInstance, field: 'teams', 'error')} ">
		<g:each in="${Team.list()}" var="teamInstance">
			<span id="team-${teamInstance.id}" style="cursor:move" class="list-group-item">${teamInstance.name}</span>
		</g:each>
		</ul>
	</div>
</div>
<div id="teamsContainer" class="pull-right" style="width:45%">
	<h2><g:message code="game.teams.label" default="Teams" /></h2>
	<g:each status="i" in="${gameInstance.gameTeams}" var="gameTeamInstance">
		<div class="panel panel-default">
			<div class="panel-heading color-${TeamColor.values()[i].toString().toLowerCase()}">
				<h3 class="panel-title"><g:message code="game.team.label" default="Team" /> ${(i+1)}</h3>
			</div>
			<ul class="list-group ai-team-list" id="ai-team-${(i+1)}">
				<g:if test="${gameTeamInstance.teams?.size() > 0}">
					<g:each status="j" in="${gameTeamInstance.teams}" var="teamInstance">
							<li class="list-group-item" id="ai-${(j+1)}">
								${teamInstance.name}
								<button onclick="removeAi(${(i+1)},${(j+1)})" type="button" class="close" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<g:hiddenField name="teamAssignments" value="${teamInstance.id}:${(i+1)}" />
							</li>
					</g:each>
				</g:if>
				<g:else>
					<li class="list-group-item placeholder"><strong><g:message code="game.teams.placeholder" default="Drag AIs here" /></strong></li>
				</g:else>
			</ul>
		</div>
	</g:each>
</div>

<span class="hidden" id="placeholderText"><g:message code="game.teams.placeholder" default="Drag AIs here" /></span>
<g:each status="i" in="${TeamColor.values()}" var="color">
	<span id="color-${i}" class="hidden">${color.toString().toLowerCase()}</span>
</g:each>


<asset:javascript src="game.js"/>