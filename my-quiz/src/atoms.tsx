import { atom } from "recoil";

export const CountState = atom({
  key: "count",
  default: 1,
});

export const CorrectState = atom({
  key: "correct",
  default: 0,
});
export const AnswerState = atom({
  key: "answer",
  default: "",
});

export const TimeState = atom({
  key: "time",
  default: 0,
});

export const FlagState = atom({
  key: "flag",
  default: false,
});
