import React, { Component } from 'react'
import quizQuestion from "../resources/quizQuestion.json"
export default class QuizComponent  extends Component {
  
  constructor() {
    super();
    this.state = {
        questionIndex:0,
        question:'What temperature does water boil at?',
        oA:'50 degrees Celcius',
        oB:'25 degrees Celcius',
        oC:'100 degrees Celcius',
        oD:'150 degrees Celcius'
    }
  }


  renderNext = () => {
    if(this.state.questionIndex < 14){
        this.setState({
            questionIndex: this.state.questionIndex + 1
        }, () => {
            this.renderQuestions(); 
        });
    }
}

renderPrev = () => {
    if(this.state.questionIndex > 0){
        this.setState({
            questionIndex: this.state.questionIndex - 1
        }, () => {
            this.renderQuestions();
        });
    }
}
  
  renderQuestions = () => {
    this.setState({
        question : quizQuestion[this.state.questionIndex].question,
        oA : quizQuestion[this.state.questionIndex].optionA,
        oB : quizQuestion[this.state.questionIndex].optionB,
        oC : quizQuestion[this.state.questionIndex].optionC,
        oD : quizQuestion[this.state.questionIndex].optionD
    })    
  }


  renderQuit = () => {
    
    if(confirm('Are you sure you want to quit ?')){
        this.setState({
            questionIndex: 0
        }, () => {
            this.renderQuestions();
        })
    }
  }

  render() {
    const q = quizQuestion
    console.log(q)
    console.log(this.state.questionIndex)
    return (
      <div className='main'>
        <h1>Questions</h1>
        <p>{this.state.questionIndex + 1} of 15</p>
        <p className='question'>{this.state.question}</p>

        <div className="options">
            <div className="option">{this.state.oA}</div>
            <div className="option">{this.state.oB}</div>
            <div className="option">{this.state.oC}</div>
            <div className="option">{this.state.oD}</div>
        </div>

        <div className="buttons">
            <button className='prev' onClick={() => this.renderPrev()}>Previous</button>
            <button className='next' onClick={() => this.renderNext()}>Next</button>
            <button className='restart'onClick={() => this.renderQuit()}>Quit</button>
        </div>
      </div>
    )
  }
}