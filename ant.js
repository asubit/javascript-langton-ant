$( function() {
  // Global vars.
  var grid = $('#grid');
  var ant = $('#ant');
  var angle = 0;
  var nbMove = 0;
  var nbMoveStop = $('#config-nb-move').val();
  var delay = $('#config-delay').val();
  var gridX = $('#config-grid-x').val();
  var gridY = $('#config-grid-y').val();

  // Construct grid.
  constructGrid(gridX,gridY);

  // Place ant on grid center.
  var x = Math.round(gridX/2);
  var y = Math.round(gridY/2);
  placeAnt(x,y);

  // Start "The Langton Ant".
  $('.run').on('click', function(e){
    e.preventDefault();
    // Construct grid.
    var gridX = $('#config-grid-x').val();
    var gridY = $('#config-grid-y').val();
    constructGrid(gridX,gridY);
    // Place ant on grid center.
    var x = Math.round(gridX/2);
    var y = Math.round(gridY/2);
    placeAnt(x,y);
    // Reset ant.
    var angle = 0;
    var nbMove = 0;
    var nbMoveStop = $('#config-nb-move').val();
    var delay = $('#config-delay').val();
    // Move ant.
    while(nbMove < nbMoveStop) {
      (function (x) {
        nbMove++;
        setTimeout(function() {
          moveAnt();
        }, nbMove * delay);
      })(nbMove);
    }
  });

  // Move ant.
  function moveAnt() {
    var color = getAntBoxColor();
    var go = getAntDirection(color);
    if (color == 'white') {
      setAntBoxColor('black');
      angle += 90;
      if (angle == 360) {angle = 0;}
      ant.css('transform','rotate(' + angle + 'deg)');
    }
    if (color == 'black') {
      setAntBoxColor('white');
      angle -= 90;
      if (angle == -360) {angle = 0;}
      ant.css('transform','rotate(' + angle + 'deg)');
    }
    if (go == 'L') {x-=1;}// left
    if (go == 'R') {x+=1;}// right
    if (go == 'D') {y+=1;}// down
    if (go == 'U') {y-=1;}// up
    placeAnt(x,y);
  }

  // Get ant direction.
  function getAntDirection(color) {
    var direction = '';
    if (color == 'white') {
      if (angle==0) {direction = 'R';}// on white color ant go to left
      else if (angle==90 || angle==-270) {direction = 'D';}
      else if (angle==180 || angle==-180) {direction = 'L';}
      else if (angle==270 || angle==-90) {direction = 'U';}
    }
    if (color == 'black') {
      if (angle==0) {direction = 'L';}// on black color ant go to right
      else if (angle==270 || angle==-90) {direction = 'D';}
      else if (angle==180 || angle==-180) {direction = 'R';}
      else if (angle==90 || angle==-270) {direction = 'U';}
    }
    return direction;
  }

  // Get current ant box color.
  function getAntBoxColor() {
    return ant.parent().attr('class');
  }

  // Set new ant box color.
  function setAntBoxColor(color) {
    return ant.parent().attr('class', color);
  }

  // Place ant on grid.
  function placeAnt(x,y) {
    console.log('x('+x+') y('+y+')')
    var box = grid.find('tr:eq('+y+') td:eq('+x+')');
    box.append(ant);
  }

  // Construct he grid.
  function constructGrid(nbRow, nbCol) {
    console.log('construct grid '+nbRow+' / '+nbCol);
    grid.empty();
    var line = 0;
    while (line < nbRow) {
      line++;
      var lineId = 'line'+line;
      grid.append('<tr id="'+lineId+'"></tr>');
      cell = 0;
      while (cell < nbCol) {
        cell++;
        var cellId = lineId+'-cell'+cell;
        $('tr#'+lineId).append('<td id="'+cellId+'" class="white"></td>');
      }
    }
  }
} );