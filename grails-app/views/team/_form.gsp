<%@ page import="botkill.gameconsole.Team" %>



<div class="form-group ${hasErrors(bean: teamInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="team.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField class="form-control" name="name" required="" value="${teamInstance?.name}"/>

</div>

<div class="form-group ${hasErrors(bean: teamInstance, field: 'password', 'error')}">
	<label for="name">
		<g:message code="team.password.label" default="Password" />
	</label>
	<g:passwordField class="form-control" name="plainPassword" value=""/>

</div>

<div class="form-group ${hasErrors(bean: teamInstance, field: 'programmingLanguage', 'error')} required">
	<label for="programmingLanguage">
		<g:message code="team.programmingLanguage.label" default="Programming language" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField class="form-control" name="programmingLanguage" required="" value="${teamInstance?.programmingLanguage}"/>

</div>

<div class="form-group ${hasErrors(bean: teamInstance, field: 'players', 'error')} ">
	<h2>
		<g:message code="team.players.label" default="Player names" />
	</h2>

	<g:each var="i" in="${0..(Team.constraints.players.getAppliedConstraint('maxSize').maxSize-1)}">
		<div class="form-group ${hasErrors(bean: teamInstance, field: 'name', 'error')} required">
			<label for="playerName">
				# ${(i+1)}
				<g:if test="${Team.constraints.players.getAppliedConstraint('minSize').minSize > i}">
					<span class="required-indicator">*</span>
				</g:if>
			</label>
			<g:if test="${teamInstance.id && teamInstance.players[i]}">
				${teamInstance?.players[i]?.name}
				<a href="${g.createLink(controller:"team", action:"removePlayer", id:teamInstance.id, params: [playerId:teamInstance.players[i].id])}" class="btn btn-danger">
					<g:message code="default.button.remove.label" default="Remove" /></button>
				</a>
			</g:if>
			<g:else>
				<input type="text" class="form-control" name="playerName" ${Team.constraints.players.getAppliedConstraint('minSize').minSize > i ? 'required=""' : ''} value="${teamInstance?.players[i]?.name}" />
			</g:else>

		</div>
	</g:each>

</div>

