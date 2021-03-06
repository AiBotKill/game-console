<html>
<head>
    <title>${gameInstance}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/visualization/3d/main.css" >
</head>
<body onload="initialization()">
<div id="container">
    <canvas id="gameCanvas"></canvas>
</div>
<div id="assetsPath" style="display:none;">../../images/visualization/3d/</div>


<g:javascript src="visualization/3d/keyboard.js"/>
<g:javascript src="visualization/3d/three.min.js"/>
<g:javascript src="visualization/3d/ShaderParticles.js"/>
<g:javascript src="visualization/3d/GameConstants.js"/>
<g:javascript src="visualization/3d/CavernController.js"/>
<g:javascript src="visualization/3d/CameraModeFPS.js"/>
<g:javascript src="visualization/3d/CameraModeExternal.js"/>
<g:javascript src="visualization/3d/CameraModeArea.js"/>
<g:javascript src="visualization/3d/ForestController.js"/>
<g:javascript src="visualization/3d/MainController.js"/>
<g:javascript src="visualization/3d/InputController.js"/>
<g:javascript src="visualization/3d/WebSocket.js"/>
<g:javascript src="visualization/3d/View.js"/>
<g:javascript src="visualization/3d/ViewClient.js"/>
<g:javascript src="visualization/3d/Main.js"/>

<div id="websocketPath" style="display:none;">${applicationContext.getServletContext().getContextPath()}/websocket/${gameInstance.id}</div>
</body>
</html>
