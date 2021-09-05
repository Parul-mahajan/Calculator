// clear input field
str = "";
function clr() {
  $("#res").val("");
}
function addinput(x) {
  $("#res").val($("#res").val() + x);
}
function percent() {
  num = eval($("#res").val());
  num = Number(num) / 100;
  $("#res").val(num);
  num = "";
}

function result() {
  $("#res").val(eval($("#res").val()));
}
function back() {
  str += $("#res").val();
  str = str.slice(0, str.length - 1);
  $("#res").val(str);
  str = "";
}
