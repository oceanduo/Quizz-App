import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions
}) => {

  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [buttonSelected, setButtonSelected] = useState(false);

  const handleCheck = (i) => {
    setSelected(i);
    setButtonSelected(true);
    if (i === correct) {
      setScore(score + 1);
      setError(false);
    }
    else { setError('wrong') }
  };


  const handleSelect = (i) => {
    if (selected === i && i === correct) return "select";
    else if (selected === i && i !== correct) return "wrong";
    else if (i === correct) return "select";
    // 上面这一行代码决定了我要不要显示答案
    else return ''
  };


  const handleNext = () => {
    if (currQues > 3) {
      setQuestions()
      navigate("/result");
    } else if (selected) {
      setButtonSelected(false);
      setCurrQues(currQues + 1);
      setSelected();
      setError(false) ;     
    } else setError("Please select an option first");
  };

 

  return (
    <>
      <div className="question">
        <h1> Question {currQues + 1}</h1>


        <div className="singleQuestion">
          <h2>{questions[currQues].question}</h2>
          <div className="options">
            {error && <ErrorMessage> {error} </ErrorMessage>}
            
            
            {options && options.map((i) => (
              <button key={i}
                className={`singleOption  ${selected && handleSelect(i)}`}
                onClick={() => { handleCheck(i) }}
                disabled={buttonSelected}
              > {i}</button>
            ))}

          </div>
        </div>



        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185, margin: '30px' }}
            sx={[{ backgroundColor: 'darkslategray', color: 'white' }, {
              '&:hover': {
                backgroundColor: 'teal',
              }}]}
            href="/"
          >
            Quit
          </Button>

          
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185,margin: '30px'  }}
            sx={[{ backgroundColor: 'darkslategray', color: 'white' }, {
              '&:hover': {
                backgroundColor: 'teal',
              }}]}
            onClick={handleNext}
          >
            {currQues > 3 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>

    </>
  )
};

export default Question;
