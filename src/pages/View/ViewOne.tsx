import { useState } from "react";


// Type
import { DummyType } from "../../Type/DataType";

// CSS
import classes from "./ViewOne.module.sass";

// Components
import {RocketIcon, ChangeIcon} from "../../components/Common/Icons/IconList";
import CapsulModal from "../../components/Common/Modal/CapsulModal";
import Button from "../../components/Common/Button/Button";

interface Props {
  onChangePathLocation: (location:string) => void;
  selectedPlanet:DummyType
  DUMMY_PLANET:DummyType[]
  handleSelectedPlanet:(plnaet:DummyType) => void;
}

const ViewOne = (props: Props) => {
  const [activityModal, setActivityModal] = useState(false);

  // 행성 리스트 모달 출력 여부
  const handleClickModal = () => setActivityModal((prev) => !prev);

  // 다음 페이지
  const onNextPage = () => props.onChangePathLocation("2")

  return (
    <div className={classes["view-one"]}>
      <RocketIcon />
      <div className={classes["view-one__title"]}>타임 캡슐을 보낼</div>
      <div className={classes["view-one__desc"]}>별을 선택해주세요</div>
      <CapsulModal activityModal={activityModal} onClick={handleClickModal} handleSelectedPlanet={props.handleSelectedPlanet} selectedPlanet={props.selectedPlanet} DUMMY_PLANET={props.DUMMY_PLANET} />
      <div className={classes["view_footer--btn"]}>
        <span className={classes["planet-change__btn"]}>
          <ChangeIcon/>
        </span>
        <Button title="다른 행성 고르기" onClick={handleClickModal} className="change_planet" />
        <div>
          <Button title="다음" onClick={onNextPage} className="next_btn" />
        </div>
      </div>
    </div>
  );
};

export default ViewOne;
