
import React, {Component} from 'react'
import styled from 'styled-components'

class Statistics extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


onLeaveFeedback = (event) => {
    console.log(this.state)
    console.log(event.target.className);
    if(event.target.className === "GoodBtn") {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }
    if(event.target.classList.contains("NeutralBtn")) {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }
    if(event.target.className === "BadBtn") {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }
}

onGoodVote = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,
    }))
}
onNeutralVote = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1,
    }))
}
onBadVote = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1,
    }))
}

countTotalFeedback = (a, b, c) => {
    const totalFeedbackAmount = a + b +c;
    return totalFeedbackAmount;
}

countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if(good > 0 || neutral > 0 || bad > 0) {
        const totalFeedbackAmount = good + neutral + bad;
        const totalPositive = (good * 100) / totalFeedbackAmount;
        return `${Math.round(totalPositive)}%`;
    } else {
        return "no stats data yet"
    }
    
}

    render() {
        return (
            <Wrapper>
            <BtnSection>
                <button className='GoodBtn' onClick={this.onLeaveFeedback}>Good</button>
                <button className='NeutralBtn' onClick={this.onLeaveFeedback}>Neutral</button>
                <button className='BadBtn' onClick={this.onLeaveFeedback}>Bad</button>
            </BtnSection>  
            
            <StatisticsSection>
                    <StatisticsH2>Statistics</StatisticsH2>
                        <div>Good:{this.state.good}</div>
                        <div>Neutral: {this.state.neutral}</div>
                        <div>Bad: {this.state.bad}</div>
                        <div>Total: {this.countTotalFeedback(this.state.good, this.state.neutral, this.state.bad)}</div>
                        <div>Positive feedback: {this.countPositiveFeedbackPercentage(this.state.good, this.state.neutral, this.state.bad)}</div>
            </StatisticsSection>
            </Wrapper>
        )
    }
}

export default Statistics

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`

const BtnSection = styled.div`
        width: 350px;
        background-color: slategrey;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    `
const StatisticsSection = styled.section`

`
const StatisticsH2 = styled.h2`
    color: red;
    font-size: 24px;
    text-align: center;
`

// const GoodBtn = styled.button`
//     background-color: white;
//     width: 80px;
//     height: 20px;
//     outline: none;
//     border: 1px solid yellow;
//     border-radius: 3px;
// `
// const NeutralBtn = styled.button`
//     background-color: white;
//     width: 80px;
//     height: 20px;
//     border: 1px solid yellow;
//     height: 20px;
//     border-radius: 3px;
// `
// const BadButton = styled.button`
//     background-color: white;
//     width: 80px;
//     height: 20px;
//     outline: none;
//     border: 1px solid yellow;
//     border-radius: 3px;
// `