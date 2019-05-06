"use strict";
$(document).ready(function () {
    $('#iconsCloseButton').click(function () {
        $('#iconsPanel').addClass('is-hidden');
    });
    $('#showIconsButton').click(function () {
        $('#iconsPanel').removeClass('is-hidden');
    });
    $('#iconsPanelFooter').click(function (e) {
        let index = $(e.target).parent().data('index');
        $(`#iconsPanel .panel[data-index=${index}]`).css('display','flex');
        $(`#iconsPanel .panel:not([data-index=${index}])`).css('display','none');
    })

})