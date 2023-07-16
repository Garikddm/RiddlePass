var words = ['Enter the password', 'Type the keycode', 'Write something here...'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('p').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});


function showPass(form , e){
  e.preventDefault();
  var pass = form.pwd.value;
  var real_pass = "dione";
  if(pass == real_pass)
  {
      window.location.replace("video.html");
  }
  else{
      window.location.reload()
  }
}
