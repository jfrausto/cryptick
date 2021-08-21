import { TimeIntervalBuckets } from "../../types";

export const timeIntervalArray: TimeIntervalBuckets[] = [
  {
    gran: 60,
    timeDisplay: "1m"
  },
  {
    gran: 300,
    timeDisplay: "5m"
  },
  {
    gran: 900,
    timeDisplay: "15m"
  },
  {
    gran: 3600,
    timeDisplay: "1h"
  },
  {
    gran: 21600,
    timeDisplay: "6h"
  },
  {
    gran: 86400,
    timeDisplay: "1d"
  }
];