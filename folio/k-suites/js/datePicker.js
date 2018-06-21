var DatePicker = function() {
    this.lang = !!lang ? lang : 'ru';
    this.$datePickers = false;
    this.defaultOptions = {
        language: this.lang,
        todayHighlight: true,
        startDate: new Date(),
        autoclose: true,
        format:'dd.mm.yyyy'
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
            console.log('changeDate');
            self.changeDate(e, $(this))
        }).on('show', function(e) {
            self.show(e, $(this))

            if ($('.my-datepicker').hasClass('position-left')) {
                $('.reserve-block_in').addClass('open');
            }

            if ($('.my-datepicker').hasClass('position-right')) {
                $('.reserve-block_out').addClass('open');
            }

        }).on('hide', function(e) {
            self.hide(e, $(this))
            $('.reserve-block_in, .reserve-block_out').removeClass('open');
        });

        var $startDatepicker = $this.find('.booking-start-date'),
            $endDatepicker = $this.find('.booking-end-date');

        $startDatepicker.datepicker('setDate', $startDatepicker.data('date'));
        $endDatepicker.datepicker('setDate', $endDatepicker.data('date'));
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

        if($target.hasClass('booking-start-date') && this.enableClampDate){
            $('.booking-end-date').datepicker('setStartDate',event.date);
        }

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
    $picker.removeClass('position-left position-right')
};