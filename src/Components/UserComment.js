import React from 'react';


class UserComment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            date: new Date(),
            inputName: '',
            inputRubric: '',
            inputComment: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitComment = this.submitComment.bind(this)
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
    }


    submitComment = e => {
        e.preventDefault();
        this.setState({
            submitted: true,
            inputText: this.state.inputText
        })
    }

    render() {

        return (
            <div>

            <div className="userComment">
            <p id = "submittedText"> {
                this.state.submitted ?
                this.state.inputName : ''
              }</p>

              <p id = "submittedDate"> {
                this.state.submitted ?
                this.state.date.toLocaleString() : ''
              } </p>

              <p id = "submittedText"> {
                  this.state.submitted ?
                  this.state.inputRubric: ''
              }</p>

              <p id = "submittedText"> {
                this.state.submitted ?
                this.state.inputComment : ''
              }</p>
            </div>

                <form className="userComment" onSubmit={this.submitComment}>

                    <input 
                        type="text"
                        placeholder="Your Name" 
                        required 
                        value = {this.state.inputName}
                        onChange= {this.handleChange}
                        name="inputName"
                        />
                    <br/>
                        <input
                        type="text"
                        placeholder="Rubric" 
                        required 
                        value = {this.state.inputRubric}
                        onChange= {this.handleChange}
                        name="inputRubric"
                        />
                    <br/>
                    <textarea 
                        placeholder="Add your comment here" 
                        required
                        value = {this.state.inputComment}
                        onChange={this.handleChange}
                        name="inputComment"
                        />
                    <br/>

                    <button 
                        fluid="true"
                        id="submit" 
                        type="submit" 
                        onClick={this.submitComment}
                        disabled={
                            !this.state.inputName + !this.state.inputComment + !this.state
                        }
                        >
                        Add Comment
                        </button>

                </form> 

            </div>
        )
    }
}
export default UserComment;