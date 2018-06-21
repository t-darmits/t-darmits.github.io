var DatePicker = function() {
    this.lang = !!lang ? lang : 'ru';
    this.$datePickers = false;
    this.defaultOptions = {
        language: this.lang,
        todayHighlight: true,
        startDate: new Date(),
        autoclose: true,
        format:'dd.mm.yyyy'
        // format:'yyyy-mm-dd'
    };
    this.monthNames = lang == "ru" ? [ "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"] :
                                     [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.enableClampDate = false;
};

DatePicker.prototype.init  = function(){
    this.initPickers();
};

DatePicker.prototype.initPickers  = function() {
    var self = this;
    this.$datePickers = $('.my-datepicker');

    this.$datePickers.each(function( index ) {
        var $this = $( this );
        var options = self.defaultOptions;

        if(!!$this.attr('data-container')){
            options.container = $this.attr('data-container');
        }

        $this.datepicker(options).on('changeDate', function(e) {

            self.changeDate(e, $(this))

        }).on('show', function(e) {

            self.show(e, $(this))

        }).on('hide', function(e) {

            self.hide(e, $(this))
            $('.reserve-block_in, .reserve-block_out').removeClass('open');

        });

        var $startDatepicker = $this.find('.booking-start-date'),
            $endDatepicker = $this.find('.booking-end-date');

        $startDatepicker.datepicker('setDate', "+1d");
        var myDate = $endDatepicker.datepicker('getDate');
        myDate.setDate(myDate.getDate());

        $endDatepicker.datepicker('setDate', myDate);
    });
};

DatePicker.prototype.changeDate  = function(event, $picker) {

    var $target = $(event.target),
        $parent = $target.parent();

    if( !!event && !!event.date ) {
        if($parent.find('.date-day').length > 0){
            $parent.find('.date-day').html(event.date.getDate());
        }

        if($parent.find('.date-month').length > 0){
            $parent.find('.date-month').html(this.monthNames[event.date.getMonth()]);
        }

        if($parent.find('.date-year').length > 0){
            $parent.find('.date-year').html(event.date.getFullYear());
        }

        if($target.hasClass('booking-start-date') && this.enableClampDate){

            var start_date = $('.booking-start-date');
            var end_date = $('.booking-end-date');
            var myDate = end_date.datepicker('getDate');

            if(start_date.datepicker('getDate').getDate() == end_date.datepicker('getDate').getDate()){
                myDate.setDate(myDate.getDate()+1);
                end_date.datepicker('setDate', myDate);
            }
        }
        var date_in = $('.booking-start-date').val(),
            date_out= $('.booking-end-date').val(),
            from = date_in.split('.'),
            to = date_out.split('.'),
            night = getDayDelta( [to[0],to[1],to[2]], [from[0],from[1],from[2]] );
        $("input[name='night']").val(night>1?night:1);
        this.enableClampDate = true;
        this.enableClampDate = true;

    }
};

DatePicker.prototype.show  = function(event, $picker) {
    var $input = $(event.target);

    if(position = $input.attr('data-modal-position')){
        $picker.addClass('position-' + position);
    }
};

DatePicker.prototype.hide  = function(event, $picker) {
    $(event.target).closest('.reserve-block').addClass('flag');
    setTimeout(function(){
        $(event.target).closest('.reserve-block').removeClass('flag');
    },100);
    $picker.removeClass('position-left position-right')
};


function getDayDelta(incomingDate,todayDate){
    var incomingDate = new Date(incomingDate[0],incomingDate[1]-1,incomingDate[2]),
        today = new Date(todayDate[0], todayDate[1]-1, todayDate[2]), delta;
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    delta = incomingDate - today;

    return Math.round(delta / 1000 / 60 / 60/ 24);
}


var lang = "ru";

var DomEvents = function() {};
DomEvents.prototype.init  = function(){
    this.initReserveFormEvents();
};
DomEvents.prototype.initReserveFormEvents  = function() {

    $(document).on('click', '.open-reserve-start-date', function() {
        if ( !$(this).hasClass('open') && !$(this).hasClass('flag')) {
            $(this).find('.booking-start-date').datepicker('show');
            $(this).addClass('open');

        } else {
            $(this).find('.booking-start-date').datepicker('hide');
            $(this).removeClass('open');
        }
    });

    $(document).on('click', '.open-reserve-end-date', function() {
        if ( !$(this).hasClass('open') && !$(this).hasClass('flag')) {
            $(this).find('.booking-end-date').datepicker('show');
            $(this).addClass('open');

        } else {
            $(this).find('.booking-end-date').datepicker('hide');
            $(this).removeClass('open');
        }
    });

};

var AppEvents = {
    INIT_DATE_PICKER: 'init-date-picker',
    INIT_DOM_EVENTS: 'init-dom-events',
};

var App = function() {};

App.prototype.init = function() {
    $(document).trigger(AppEvents.INIT_DATE_PICKER);
    $(document).trigger(AppEvents.INIT_DOM_EVENTS);
};


$(function(){

    $(document).on(AppEvents.INIT_DATE_PICKER, function(){
        datePicker.init();
    });

    $(document).on(AppEvents.INIT_DOM_EVENTS, function(){
        domEvents.init();
    });

    app.init();

});

var app        = new App();
var datePicker = new DatePicker();
var domEvents  = new DomEvents();


$(document).ready(function () {
    // show/ close guest-panel

    $(document).on('click', '.open-select-guest-panel', function() {
        $(this).find('.select-guest-panel').css({display:'block'})
        $('.reserve-guest').addClass('open');
    });

    $(document).click(function(e) {
        var container = $('.open-select-guest-panel');
        if(!container.is(e.target) && container.has(e.target).length === 0){
            $('.select-guest-panel').css({display:'none'});
            $('.reserve-guest').removeClass('open');
        }
    });

    // add guest

    var inputVal;
    var showResult = $('.guest-count');
    var resultSum = 1;
    var resultNew;

    $('.plus').on('click',function(){
        var $qty=$(this).siblings('.num-block').find('.number-filter');
        var currentVal = parseInt($qty.text());

        if (!isNaN(currentVal)) {
            $qty.text(currentVal + 1);

            inputVal = parseInt($qty.text());

            $(this).siblings('input[type=hidden]').val(inputVal);

            resultSum += 1;
        }

        showResult.text(resultSum);

    });
    $('.minus').on('click',function(){
        var $qty=$(this).siblings('.num-block').find('.number-filter');
        var currentVal = parseInt($qty.text());

        if (!isNaN(currentVal) && currentVal > 0) {

            $qty.text(currentVal - 1);

            inputVal = parseInt($qty.text());

            $(this).siblings('input[type=hidden]').val(inputVal);

            resultSum -= 1;
        }

        showResult.text(resultSum);

    });

});