// Initialize Bootstrap Tooltips
$("document").ready(function(){$('[data-toggle="tooltip"]').tooltip()}),
// Countdown Clock used for highlighting deadline for contest entries
$("document").ready(function(){function u(e){var t=Date.parse(e)-Date.parse(new Date),o=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),n=Math.floor(t/36e5%24),a;return{total:t,days:Math.floor(t/864e5),hours:n,minutes:r,seconds:o}}function e(e,t){function o(){var e=u(t);n.innerHTML=e.days,a.innerHTML=("0"+e.hours).slice(-2),c.innerHTML=("0"+e.minutes).slice(-2),l.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(s)}var r=document.getElementById(e),n=r.querySelector(".days"),a=r.querySelector(".hours"),c=r.querySelector(".minutes"),l=r.querySelector(".seconds");o();var s=setInterval(o,1e3)}
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var t;e("clockdiv","January 25 2019 23:59:59 GMT-0800")});