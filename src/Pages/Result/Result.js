import Button from '@mui/material/Button';


import "./Result.css";

const Result = ({ name, score }) => {
 


  return (
    <div className="result">
      <span className="title">Hi {name} </span>
     <h1> your final Score is : {score}</h1>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Back to homepage
      </Button>
    </div>
  );
};

export default Result;
