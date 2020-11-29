function uid() {
  var date = new Date();
  var year = date.getUTCFullYear();
  var month = 1 + date.getUTCMonth();
  month = ("00" + month).slice(-2);
  var day = date.getUTCDate();
  day = ("00" + day).slice(-2);
  var hours = date.getUTCHours();
  hours = ("00" + hours).slice(-2);
  var minutes = date.getUTCMinutes();
  minutes = ("00" + minutes).slice(-2);
  var seconds = date.getUTCSeconds();
  seconds = ("00" + seconds).slice(-2);
  var milliseconds = date.getUTCMilliseconds();
  milliseconds = ("0000" + milliseconds).slice(-4);
  var num = year + "" + month + "" + day + "" + hours + "" + minutes + "" + seconds + "" + milliseconds;
  return num;
}
