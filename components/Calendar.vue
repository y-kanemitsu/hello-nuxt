<template>
    <FullCalendar
        default-view="dayGridMonth"
        :locale="locale"
        :header="calendarHeader"
        :weekends="calendarWeekends"
        :plugins="calendarPlugins"
        :events="calendarEvents"
        @dateClick="handleDateClick"
    />
    
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import jaLocale from '@fullcalendar/core/locales/ja' // 日本語化用
import calendarEvents from '~/assets/json/schedule.json'

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data () {
        return {
            calendarEvents: calendarEvents,
            locale: jaLocale, // 日本語化
            // カレンダーヘッダーのデザイン
            calendarHeader: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            calendarWeekends: true, // 土日を表示するか
            // カレンダーで使用するプラグイン
            calendarPlugins: [ 
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin
            ],
        }
    },
    methods: {
        handleDateClick (arg) {
            if (confirm('新しいスケジュールを' + arg.dateStr + 'に追加しますか ?')) {
                this.calendarEvents.push({ // add new event data
                    title: '新規スケジュール',
                    start: arg.date,
                    allDay: arg.allDay
                })
            }
        }
    }
}
</script>

<style>
    @import '~/node_modules/@fullcalendar/core/main.css';
    @import '~/node_modules/@fullcalendar/daygrid/main.css';
    @import '~/node_modules/@fullcalendar/timegrid/main.css';
</style>