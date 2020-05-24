// Initialize Bootstrap Tooltips
$('document').ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Count up to the number donated to charity
$('document').ready(function () {
  $('.js-counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
      {
        duration: 3000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
  });
});

  // $('document').ready(function () {
  //   $('.js-count').each(function () {
  //     $(this).prop('Counter', 0).animate({
  //       Counter: $(this).text()
  //     }, {
  //       duration: 3000,
  //       easing: 'swing',
  //       step: function (now) {
  //         $(this).text(Math.ceil(now));
  //       }
  //     });
  //   });
  // });
