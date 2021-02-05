// Initialize Bootstrap Tooltips
$('document').ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Count up to the number donated to charity
window.onload = function () {
  var options = {
    useEasing: "swing",
    useGrouping: true,
    separator: ','
  };
  var countDonation = new CountUp("number", 0, 750, 0, 3, options);
  countDonation.start();
};