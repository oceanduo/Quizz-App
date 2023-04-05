
import "./Home.css";
import React from 'react';
import { TextField, MenuItem, Button} from "@mui/material";
import { useState } from "react";
import Categories from "../../Data/Categories";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";



export default function Home({name, setName,fetchQuestions}) {


  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
     
    }
  };


  return (
    <div className="home">
{/* 
      <img src="https://picsum.photos/300/300?random=3" className="banner" alt="quiz app" /> */}

      <div className="settings">

        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((option) => (
              <MenuItem key={option.category} value={option.value}>
                {option.category}
              </MenuItem>
            ))}
          </TextField>


          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>


          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={[{ backgroundColor: 'darkslategray', color: 'white' }, {
              '&:hover': {
                backgroundColor: 'teal',
              }}]}>
            Start Quiz
          </Button>




        </div>
      </div>

    </div>
  )
}

