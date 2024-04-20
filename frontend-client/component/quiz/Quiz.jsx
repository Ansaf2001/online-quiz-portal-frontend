import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Quiz = () => {
    const[quizQuestions, setQuizQuestions] = useState([{
        id: "",
        question: "",
        correctAnswers: "",
        questionType: ""
    }])
    const[selectedAnswers, setSelectedAnswers] = useState([{id: "", answer: ""}])
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const[totalScores, setTotalScores] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()
    const{selectedSubject, selectedNumOfQuestion} = location.state

    useEffect(() =>{
        fetchQuizData()
    }, [])

    const fetchQuizData = async() => {
        if(selectedNumOfQuestion && selectedSubject) {
            const questions = await fetchQuizForUser(selectedNumOfQuestion, selectedSubject)
            setQuizQuestions(questions)
        }

    }

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers()
    }

  return (
    <div>

    </div>
  )
}

export default Quiz