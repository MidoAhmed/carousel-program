import { useEffect, useState } from "react";
import "./HomePage.scss";
import ProgramCarousel from "../../components/program-carousel/ProgramCarousel";
import { Program } from "../../types/program";
import { fetchPrograms } from "../../api/fetchPrograms";
import { ERROR_MESSAGES } from "../../constants";
import { LoadingComponent } from "../../components/LoadingComponent";
import { ErrorComponent } from "../../components/ErrorComponent";

const HomePage = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPrograms()
      .then(({ data, errors }) => {
        if (errors) {
          // Show user-friendly error message in the UI
          setError(ERROR_MESSAGES.fetchProgramsError);
        }
        setPrograms(data.program);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {
        // Show user-friendly error message in the UI
        setError(ERROR_MESSAGES.unexpectedError);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="home-page">
      <h1>Welcome to the Program Carousel</h1>
      <ProgramCarousel programs={programs} />
    </div>
  );
};

export default HomePage;
