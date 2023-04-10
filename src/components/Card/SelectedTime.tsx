import React, { useState } from "react";

// CSS
import classes from "./SelectedTime.module.sass";

// Components
import Button from "../Common/Button/Button";

const timeList = [
  {
    id: 1,
    title: "일주일 뒤",
    time: "week",
  },
  {
    id: 2,
    title: "한 달 뒤",
    time: "month",
  },
  {
    id: 3,
    title: "일 년 뒤",
    time: "year",
  },
  {
    id: 4,
    title: "1주일 ~ 1년 랜덤",
    time: "random",
  },
];

interface Props {
  addDaysToDate: (time: string) => void;
  getSelectedDate:(time:string) => void
}

const SelectedTime = (props: Props) => {
  const [choiceTime, setChoiceTime] = useState("");

  //  시간일정 정하는 함수
  const handleClickTime = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (choiceTime === value) return setChoiceTime("");
    setChoiceTime(value);
    props.addDaysToDate(value);
    props.getSelectedDate(value);
  };
  return (
    <div className={classes.SelectedTime_item}>
      {timeList.map((timeData) => {
        const isSelected = timeData.time === choiceTime;
        const className = `${classes[timeData.time]} ${isSelected ? classes.select : ""}`;

        return (
          <Button onClick={handleClickTime} key={timeData.id} value={timeData.time} className={className} title={timeData.title} isSelected={isSelected} />
        );
      })}
    </div>
  );
};

export default SelectedTime;