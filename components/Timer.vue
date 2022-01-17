<template>
  <div>
    <div v-if="loaded">
      <span class="clock-el">
        {{displayDays}}
        <small>روز</small>
      </span>
      :
      <span class="clock-el">
        {{displayHours}}
      <small>ساعت</small>
      </span>
      :
      <span class="clock-el">
        {{displayMinutes}}
      <small>دقیقه</small>
      </span>
      :
      <span class="clock-el">
        {{displaySeconds}}
      <small>ثانیه</small>
      </span>
    </div>
    <h4 v-else>...بارگذاری </h4>
    <h4 v-if="expired">پایان جشنواره!</h4>
  </div>
</template>
<script>
  import moment from 'jalali-moment'

  export default {
    name: 'Timer',
    props: [
      'year',
      'month',
      'date',
      'hour',
      'minute',
      'second',
      'millisecond'
    ],
    data() {
      return {
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        loaded: false,
        expired: false,
        convertedDate: ''
      }
    },
    computed: {
      sec: () => 1000,
      min() {
        return this.sec * 60
      },
      hours() {
        return this.min * 60
      },
      days() {
        return this.hours * 24
      },
      end() {
        return new Date(
          this.convertedDate[0],
          this.convertedDate[1]-1,
          this.convertedDate[2],
          this.hour,
          this.minute,
          this.second,
          this.millisecond
        )
      }
    },
    methods: {
      formatNum(num) {
        return num < 10 ? '0' + num : num
        //  اگه عدد کوچیکتر از ده بود یه صفر بزار کنار
      },
      showRemaining() {
        const timer = setInterval(() => {
          const now = new Date()
          // const end = new Date(2023, 0, 14, 10, 10, 10, 10)
          const distance = this.end.getTime() - now.getTime()
          if (distance < 0) {
            clearInterval(timer)
            this.expired = true
            this.loaded = true
            return
          }
          const days = Math.floor(distance / this.days)
          const hours = Math.floor((distance % this.days) / this.hours)
          const minutes = Math.floor((distance % this.hours) / this.min)
          const seconds = Math.floor((distance % this.min) / this.sec)
          this.displayMinutes = this.formatNum(minutes)
          this.displaySeconds = this.formatNum(seconds)
          this.displayHours = this.formatNum(hours)
          this.displayDays = this.formatNum(days)
          this.loaded = true
          const a = new Date()
        }, 1000)
      },
      jalali_to_gregorian(jy, jm, jd) {
        var sal_a, gy, gm, gd, days
        jy += 1595
        days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186)
        gy = 400 * ~~(days / 146097)
        days %= 146097
        if (days > 36524) {
          gy += 100 * ~~(--days / 36524)
          days %= 36524
          if (days >= 365) days++
        }
        gy += 4 * ~~(days / 1461)
        days %= 1461
        if (days > 365) {
          gy += ~~((days - 1) / 365)
          days = (days - 1) % 365
        }
        gd = days + 1
        sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm]
        return [gy, gm, gd]
      }
    },
    async mounted() {
       this.convertedDate = await this.jalali_to_gregorian(this.year, this.month, this.date)
      this.showRemaining()
      console.log
    }
  }
</script>

<style scoped>
  .clock-el {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
  }

  span {
    font-family: vazirFD;
    font-size: 10px;
  }
</style>
