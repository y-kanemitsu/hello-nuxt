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

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data () {
        return {
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
            // カレンダーに表示するスケジュール一覧
            calendarEvents:  [
                {
                    title: '報告会',
                    start: '2020-02-20T10:00:00',
                    end : '2020-03-09T12:30:00',
                },
                {
                    title: 'ミーティング',
                    start: '2020-02-12T10:30:00',
                    end : '2020-02-12T12:30:00',
                },
                {
                    title: '打ち合わせ',
                    start: '2020-02-18T13:30:00',
                    end : '2020-02-18T14:30:00',
                },
            ]
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