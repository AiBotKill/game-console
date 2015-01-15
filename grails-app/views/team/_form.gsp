<%@ page import="botkill.gameconsole.Team" %>



<div class="form-group ${hasErrors(bean: teamInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="team.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField class="form-control" name="name" required="" value="${teamInstance?.name}"/>

</div>

<div class="form-group ${hasErrors(bean: teamInstance, field: 'players', 'error')} ">
	<h2>
		<g:message code="team.players.label" default="Players" />
	</h2>

	<div class="form-group ${hasErrors(bean: teamInstance, field: 'name', 'error')} required">
		<label for="name1">
			#1
			<span class="required-indicator">*</span>
		</label>
		<g:textField class="form-control" name="name1" required="" value="${teamInstance?.players[0]?.name}"/>

	</div>

	<div class="form-group ${hasErrors(bean: teamInstance, field: 'name', 'error')} required">
		<label for="name2">
			#2
		</label>

		<g:textField class="form-control" name="name2" value="${teamInstance?.players[1]?.name}"/>

	</div>

</div>

