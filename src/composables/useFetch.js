// 有自動引入 可省略
// import { ref , reactive } from "vue";

import axios from 'axios';

export const Fetch = () => {
  const ary = ref([]);
  const useName = ref('curry');

  const FetchInit = async url => {
    try {
      const res = await axios.get(url);
      ary.value = res.data.twzip.city;
    } catch (error) {
      console.log(error.message);
    }
  };
  return {
    ary,
    useName,
    FetchInit,
  };
};
