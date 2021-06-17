// click tang giá trị
$(" button.plush ").click(
    function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        var newVal = parseFloat(oldValue) + 1;
        $button.parent().find("input").val(newVal);
    }
);
// click giam gia tri
$(" button.minus ").click(
    function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if( oldValue >1){
            var newVal = parseFloat(oldValue) - 1;    
            $button.parent().find("input").val(newVal);
        }
    }
);