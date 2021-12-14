import Vue from 'vue';
import dayjs from 'dayjs';
Vue.filter('dayjs', (value, format = 'MM/DD/YYYY') => {
  if (value) {
    return dayjs(value).add(1, 'day').format(format);
  }
});
