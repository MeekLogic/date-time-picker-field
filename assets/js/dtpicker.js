jQuery(document).ready(function(){
    jQuery.datetimepicker.setDateFormatter('moment');
	jQuery.datetimepicker.setLocale(datepickeropts.locale);

	if(datepickeropts.preventkeyboard == 'on'){
		jQuery(datepickeropts.selector).focus(function() {
			jQuery( this ).blur();
		});
	}

    jQuery(datepickeropts.selector).datetimepicker({
		//minTime:'08:00 AM',
		//maxTime:'06:00 PM'
        value: datepickeropts.value,
        format:datepickeropts.format,
        formatDate: datepickeropts.dateformat,
		formatTime: datepickeropts.hourformat,
        theme: datepickeropts.theme,
        timepicker: (datepickeropts.timepicker == 'on'),
        datepicker: (datepickeropts.datepicker == 'on'),
        step: parseInt(datepickeropts.step),
        timepickerScrollbar: true,
    });
});


