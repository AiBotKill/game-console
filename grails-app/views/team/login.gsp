
<%@ page import="botkill.gameconsole.Team" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main">
    <title><g:message code="default.login.label" default="Login" /></title>
</head>
<body>
<g:set var="title" value="${message(code: 'default.Login.label', default:'Login')}" scope="request" />

<div id="show-login" class="content scaffold-show" role="main">
    <g:if test="${flash.error}">
        <div class="alert alert-danger" role="status">${flash.error}</div>
    </g:if>
    <g:if test="${flash.message}">
        <div class="alert alert-info" role="status">${flash.message}</div>
    </g:if>

    <g:form url="[controller:'team', action:'login']" method="POST">
        <fieldset class="form">
            <div class="form-group ${hasErrors(bean: teamInstance, field: 'name', 'error')} required">
                <label for="name">
                    <g:message code="team.name.label" default="Name" />
                    <span class="required-indicator">*</span>
                </label>
                <g:textField class="form-control" name="name" required="" value="${teamInstance?.name}"/>

            </div>

            <div class="form-group ${hasErrors(bean: teamInstance, field: 'password', 'error')} required">
                <label for="name">
                    <g:message code="team.password.label" default="Password" />
                    <span class="required-indicator">*</span>
                </label>
                <g:passwordField class="form-control" name="password" required="" value="${teamInstance?.password}"/>

            </div>
        </fieldset>
        <fieldset class="buttons">
            <g:submitButton class="btn btn-success" name="login" value="${g.message(code:'default.button.login.label', default:'Login')}" />
        </fieldset>
    </g:form>
</div>
</body>
</html>
