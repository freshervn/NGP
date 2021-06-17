$('.small-to-big-window .smallWindown ').click(
    function () {
        var item = $(this).clone();
        $('.small-to-big-window  .bigWindown').html(item);
});