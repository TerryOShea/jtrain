import React, { Component } from "react";

class Question extends Component {
    constructor() {
        super();
        this.state = {
            showingAnswer: false,
        };
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeydown);
    }

    handleKeydown(e) {
        if (e.keyCode === 32) {
            this.setState({ showingAnswer: !this.state.showingAnswer });
        }
    }

    render() {
        const { questionText, answerText } = this.props;
        const shownText = this.state.showingAnswer ? answerText : questionText;

        return (
            <div className="Question">
                <div className="Question-price">
                    <h2>$800</h2>
                    <h3><i className="fas fa-flag Question-flag"></i></h3>
                </div>
                <div className="Question-text">
                    <h3>{shownText}</h3>
                </div>
            </div>
        );
    }
}

export default Question;
