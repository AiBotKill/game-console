<!DOCTYPE html>
<html >
<head>
    <meta charset="utf-8">
    <title>${gameInstance}</title>
    <asset:stylesheet rel="stylesheet" src="visualization/2d/main.css" />
</head>
<body>
<div id="maskdiv">
    <div id="scrolldiv" style="position: absolute;left:0;top:0">
        <div id="canvasdiv" style="position:relative">
            <canvas id="terraincanvas" style="position:absolute"></canvas>
            <canvas id="playercanvas" style="position:absolute"></canvas>
            <canvas id="aircanvas" style="position:absolute"></canvas>
            <canvas id="fovcanvas" style="position:absolute"></canvas>
            <canvas id="soundcanvas" style="position:absolute"></canvas>
			<canvas id="hudcanvas" style="position:absolute"></canvas>
        </div>
    </div>
</div>
<div id="assetsPath" style="display:none;">${assetPath(src:'visualization/2d/')}</div>

<g:javascript data-main="../../js/visualization/2d/app" src="lib/require.js" />
</body>
</html>