import React, { useState } from 'react'
import { getQuestionById, updateQuestion } from '../../../utils/QuizService'
import { Link, useNavigate, useParams } from "react-router-dom"


const UpdateQuestion = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [question, setQuestion] = useState("")
    const[choices, setChoice] = useState([""])
    const[correctAnswers, setCorrectAnswers] = useState([""])
    const[isLoading, setIsLoading] = useState(true)


    useEffect(() =>{
        fetchQuestion()
    }, [])

    const fetchQuestion = async() => {
        try{
            const questionToUpdate = await getQuestionById(id)
            if(questionToUpdate) {
                setQuestion(questionToUpdate.question)
                setChoice(questionToUpdate.choices)
                setCorrectAnswers(questionToUpdate.correctAnswers)
            }
                setIsLoading(false)
        }catch(error){
            console.error(error)
        }

        const handleQuestionChange = (e) => {
            setQuestion(e.target.value)
        }

        const handleChoiceChange = (index, e) => {
            const updatedChoices = [...choices]
            updatedChoices[index] = e.target.value
            setChoice(updatedChoices)
        }

        const handleCorrectAnswerChange = (e) => {
            setCorrectAnswers(e.target.value)
        }

        const handleQuestionUpdate = async(e) => {
            e.preventDefault()
            try {
                const UpdatedQuestion = {
                    question,
                    choices,
                    correctAnswers: correctAnswers.toString().split(",").map((answer)=> answer.trim())
                }
                await updateQuestion(id, UpdatedQuestion)
                /* navigate back to all questions page */
                
            } catch (error) {
                console.error(error)
            }
        }
        if (isLoading) {
            return <p>Loading...</p>
        }
    }
  return (
   <section className="container">
    <h4 className="mt-5" style={{color: "GrayText"}}>Update Quiz Question</h4>

    <div className="col-md-8">
        <form onSubmit={handleQuestionUpdate}>
            <div className="form-group">
               <label className="text-info">Question:</label>
               <textarea 
               className="form-control"
               rows={4}
               value={question}
               onChange={handleQuestionChange}
               />
            </div>

                <div className="form-group">
                    <label className="text-info">Choices:</label>
                  
                        {choices.map((choice, index) => (
                        
                                <input 
                                key={index}
                                className="form-control mb-4"
                                type="text"
                                value={choice}
                                onChange={(e) => handleChoiceChange(index, e)}
                                />
                            
                        ))}
                </div>

                <div className="form-group">
                    <label className="text-info">Correct Answer(s):</label>
                    <input 
                        className="form-control mb-4"
                        type="text"
                        value={correctAnswers}
                        onChange={handleCorrectAnswerChange}
                    />
                </div>
                <div className='btn-group'>
                    <button type="submit" className="btn btn-sm btn-outline-warning">Update Question</button>
                    <Link to={"/all-quizzes"} className="btn btn-outline-primary mr-2">
                    Back to all questions
                    </Link>
                    <button type="reset" className="btn btn-secondary">Reset</button>

                </div>

        </form>

    </div>

   </section>
  )
}

export default UpdateQuestion