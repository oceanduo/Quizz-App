
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result'
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setName] = useState('duo');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category, difficulty) => {

    axios.get(`https://opentdb.com/api.php?amount=5${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
      .then(res => { setQuestions(res.data.results) })
      .catch(err => console.error(err));


    //   const { data } = await axios.get(
    //     `https://opentdb.com/api.php?amount=10${
    //       category && `&category=${category}`
    //     }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    //   );
    //  setQuestions(data.results);
    // 这是另一种方法， 直接distracture得到的数据


    // fetch(`https://opentdb.com/api.php?amount=10`)
    // .then(res => res.json())
    // .then(data => setQuestions(data.results))
    // .catch(err => console.error(err));
    //如果不用axios， 可以用fetch，得到的数据会是json

  };

  return (

    <div className="app" >
      <Header />

      <Routes>
        <Route path='/' element={<Home 
        name={name} 
        setName={setName} 
        fetchQuestions={fetchQuestions}
         />} />


        <Route path='/quiz' element={<Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
           />} />


        <Route path='/result' element={<Result
          name={name}
          score={score}
          
        />
        } />


      </Routes>

      <Footer />
    </div>


  );
}

export default App;
