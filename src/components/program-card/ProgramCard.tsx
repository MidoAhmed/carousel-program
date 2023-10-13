import { Program } from "../../types/program";
import Button from "../Button";
import "./ProgramCard.scss";
import addIcon from "../../assets/add.svg";
import React from "react";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = React.memo(({ program }: ProgramCardProps) => (
  <div className="program-card">
    <div className="program-thumnail">
      {program.thumnail && (
        <img
          className="thumnail"
          src={program.thumnail.url}
          alt={program.thumnail.alt}
        />
      )}
      <Button className="thumnail-btn">
        <img src={addIcon} alt="Add Icon" />
      </Button>
    </div>
    <span className="program-title">{program.name.slice(0, 20)}</span>
  </div>
));

export default ProgramCard;
