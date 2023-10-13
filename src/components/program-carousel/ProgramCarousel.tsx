import { useState } from "react";
import ProgramCard from "../program-card/ProgramCard";
import "./ProgramCarousel.scss";
import { Program } from "../../types/program";
import Button from "../Button";
import nextIcon from "../../assets/next.svg";
import prevIcon from "../../assets/prev.svg";

interface ProgramProps {
  programs: Program[];
}

const ProgramCarousel = ({ programs }: ProgramProps) => {
  const PROGRAMS_PER_PAGE = 6;
  const [visiblePrograms, setVisiblePrograms] = useState({
    startIndex: 0,
    endIndex: PROGRAMS_PER_PAGE,
  });

  const onPrevClick = () => {
    prevPrograms();
  };

  const onNextClick = () => {
    nextPrograms();
  };

  const nextPrograms = () => {
    const newStartIndex = visiblePrograms.startIndex + PROGRAMS_PER_PAGE;
    const newEndIndex = visiblePrograms.endIndex + PROGRAMS_PER_PAGE;

    if (newStartIndex < programs.length) {
      setVisiblePrograms({
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      });
    }
  };

  const prevPrograms = () => {
    const newStartIndex = visiblePrograms.startIndex - PROGRAMS_PER_PAGE;
    const newEndIndex = visiblePrograms.endIndex - PROGRAMS_PER_PAGE;

    if (newStartIndex >= 0) {
      setVisiblePrograms({
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      });
    }
  };

  const currentPrograms = programs.slice(
    visiblePrograms.startIndex,
    visiblePrograms.endIndex
  );

  return (
    <div className="program-carousel-container">
      <div className="program-carousel">
        <Button className="carousel-btn" onClick={onPrevClick}>
          <img src={prevIcon} alt="Previous Icon" />
        </Button>
        <div className="program-carousel-inner">
          {currentPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <Button className="carousel-btn" onClick={onNextClick}>
          <img src={nextIcon} alt="Next Icon" />
        </Button>
      </div>
    </div>
  );
};

export default ProgramCarousel;
