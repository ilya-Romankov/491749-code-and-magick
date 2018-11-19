'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var  STEP = 50;
var GOT = 2;
var START_NAMES = 100;
var START_GIST = 100;
var START_VALUE = 100;
var names = ['Вы', 'Кекс', 'Игорь', 'Катя'];
var times = [2725, 4025, 1244, 1339];
var maxValueColor = 255;
var minValueColor = 0;
var resultValuecolor;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, x,y, message, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(message, x, y);
};

var randomColor = function (minColor, maxColor) {
  return Math.floor(Math.random() * (maxColor - minColor) + minColor);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};



window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');
  renderText(ctx, 150, 30, 'Ура вы победили!', '16px PT Mono', '#000000');
  renderText(ctx, 150, 50, 'Список результатов:', '16px PT Mono', '#000000'); // Цвет и шрифт в параметрах для большей гибкости

  //ctx.fillStyle = '#000';
  //ctx.fillText('Вы', 150, 260);
  //ctx.fillRect(150, 90, 40, 150);
  var maxis = getMaxElement(times);
  for (var i = 0; i < names.length ; i++) {
    ctx.fillStyle= "#000";
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      resultValuecolor = randomColor(minValueColor , maxValueColor);
      ctx.fillStyle = 'rgb(0,0,'+ resultValuecolor +')';
    }

    if (times[i] == maxis) {
    var  hightGist = 150;
    } else {
      var hightGist = (150 * ((times[i] * 100)/ maxis)) / 100;//Сначала находится процент от максимального времени. А потом находится по найденному проценту число от 150
    }
    ctx.fillText(Math.floor(times[i]), START_VALUE = START_VALUE + 50,  CLOUD_HEIGHT - hightGist - 40);
    ctx.fillText(names[i], START_NAMES = START_NAMES + STEP + GOT, 260);
    ctx.fillRect(START_GIST = START_GIST + STEP, CLOUD_HEIGHT - hightGist - 30, 40, hightGist);
  }
};
