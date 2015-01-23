<html>
<head>
    <title>${gameInstance}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <asset:stylesheet src="visualization/3d/styles.css"/>
</head>
<body onload="initialization()">
<div id="container">
    <canvas id="gameCanvas"></canvas>
</div>
<div id="assetsPath" style="display:none;">${assetPath(src:'visualization/3d/')}</div>

<asset:javascript src="visualization/3d/keyboard.js"/>
<asset:javascript src="visualization/3d/three.min.js"/>
<asset:javascript src="visualization/3d/GameConstants.js"/>
<asset:javascript src="visualization/3d/ViewController.js"/>
<asset:javascript src="visualization/3d/InputController.js"/>
<asset:javascript src="visualization/3d/View.js"/>
<asset:javascript src="visualization/3d/ViewClient.js"/>
<asset:javascript src="visualization/3d/Util.js"/>
<asset:javascript src="visualization/3d/Main.js"/>
</body>
</html>
