import { useState } from "react";
import ProgramCard from "../program-card/ProgramCard";
import "./ProgramCarousel.scss";
import { Program } from "../../types/program";
import Button from "../Button";
import nextIcon from "../../assets/next.svg";
import prevIcon from "../../assets/prev.svg";
import { DEAFULT_PROGRAMS_PER_PAGE } from "../../constants";
import React from "react";

interface ProgramProps {
  programs: Program[];
  programsPerPage?: number;
}

const ProgramCarousel = React.memo(({ programs, programsPerPage=DEAFULT_PROGRAMS_PER_PAGE }: ProgramProps) => {
  const [visiblePrograms, setVisiblePrograms] = useState({
    startIndex: 0,
    endIndex: programsPerPage,
    currentPrograms: programs.slice(0, programsPerPage),
  });

  const nextPrograms = () => {
    const newStartIndex = visiblePrograms.startIndex + programsPerPage;
    const newEndIndex = visiblePrograms.endIndex + programsPerPage;

    if (newStartIndex < programs.length) {
      const slicedPrograms = programs.slice(newStartIndex, newEndIndex);
      setVisiblePrograms({
        startIndex: newStartIndex,
        endIndex: newEndIndex,
        currentPrograms: slicedPrograms,
      });
    }
  };

  const prevPrograms = () => {
    const newStartIndex = visiblePrograms.startIndex - programsPerPage;
    const newEndIndex = visiblePrograms.endIndex - programsPerPage;

    if (newStartIndex >= 0) {
      const slicedPrograms = programs.slice(newStartIndex, newEndIndex);
      setVisiblePrograms({
        startIndex: newStartIndex,
        endIndex: newEndIndex,
        currentPrograms: slicedPrograms,
      });
    }
  };


  return (
    <div className="program-carousel-container">
      <div className="program-carousel">
        <Button className="carousel-btn" onClick={prevPrograms}>
          <img src={prevIcon} alt="Previous Icon" />
        </Button>
        <div className="program-carousel-inner">
          {visiblePrograms.currentPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <Button className="carousel-btn" onClick={nextPrograms}>
          <img src={nextIcon} alt="Next Icon" />
        </Button>
      </div>
    </div>
  );
});

export default ProgramCarousel;
