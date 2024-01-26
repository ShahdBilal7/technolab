import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "@mui/material";
import Countdown from "react-countdown";
const CountDown = ({ futureDate, completionMessage }) => {
  const renderer = ({ days, hours, minutes,seconds, completed }) => {
    if (completed) {
      return <span>{completionMessage}</span>;
    } else {
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return<>
  <FontAwesomeIcon  className="mx-2" icon="fa-clock" />
  <Countdown date={futureDate} renderer={renderer} />
  </>
};
export default CountDown;