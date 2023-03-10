import { useEffect, useState } from "react";
import axios from "axios";

const useRewardsData = () => {
  const [data, setData] = useState({ states: [], occupations: [] });
  useEffect(() => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => {
        return setData({ states: res.data.states, occupations: res.data.occupations });

      });
  }, []);

  return data;
};

export default useRewardsData;
