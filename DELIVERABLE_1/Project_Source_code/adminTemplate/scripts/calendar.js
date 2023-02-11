function getcalendar() {
    $.get(xmlFolder + "calendar.xml")
        .success(readcalendarCompleted)
        .error(readcalendarFailed);
}


function readcalendarCompleted(data) {
    var calendar = $(data).find('calendarTitles').text();
    $('#calendars .panel-heading').text(calendar);

    renderCalendar();

}






function readcalendarFailed() {
    var message = "Quick links  Path is Not Found";
    document.write(message);
}




function renderCalendar() {
    var data = [{
        title: 'All Day Event',
        start: '2022-02-01'
    }, {
        title: 'LMS',
        start: '2022-01-06',
        end: '2022-01-08',
        color: '#ff0000'

    }, {
        // id: 999,
        title: 'Repeating Event',
        start: '2015-02-09T16:00:00'
    }, {
        id: 999,
        title: 'Game Design',
        start: '2022-01-19',
        end: '2022-01-21',

    }, {
        title: 'Conference',
        start: '2015-02-11',
        end: '2015-02-13'
    }, {
        title: 'Meeting',
        start: '2015-02-12T10:30:00',
        end: '2015-02-12T12:30:00'
    }, {
        title: 'Lunch',
        start: '2015-02-12T12:00:00'
    }, {
        title: 'Meeting',
        start: '2015-02-12T14:30:00'

    }, {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2015-02-28'
    }];

    var newData = [{
        title: 'stuff',
        start: '2015-03-01'
    }, {
        title: 'stuff',
        start: '2015-03-02'
    }];

    $(document).ready(function() {

        $('#calendar').fullCalendar({
            header: {
                left: 'prev',
                center: ',title',
                right: 'next'
            },
            defaultDate: '2022-01-03',
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: data
        });

        $('#calendar').on('click', '.fc-next-button', function() {
            //alert('clicked');
            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', newData);
        });
        $('#calendar').on('click', '.fc-prev-button', function() {
            //alert('clicked');
            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', data);
        });

    });
}