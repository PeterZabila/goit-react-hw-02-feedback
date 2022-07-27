
import React, {Component} from 'react'
import styled from 'styled-components'

class Statistics extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
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


    render() {
        return (
            <>
            <BtnSection>
                <ButtonOne onClick={this.onGoodVote}>Good</ButtonOne>
                <ButtonTwo onClick={this.onNeutralVote}>Neutral</ButtonTwo>
                <ButtonThree onClick={this.onBadVote}>Bad</ButtonThree>
            </BtnSection>  
            
            <StatisticsSection>
                    <StatisticsH2>Statistics</StatisticsH2>
                    <div>Good:{this.state.good}</div>
                    <div>Neutral:{this.state.neutral}</div>
                    <div>Bad:{this.state.bad}</div>
            </StatisticsSection>
            </>
        )
    }
}

export default Statistics



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

const ButtonOne = styled.button`
    background-color: white;
    width: 80px;
    height: 20px;
    outline: none;
    border: 1px solid yellow;
    border-radius: 3px;
`
const ButtonTwo = styled.button`
    background-color: white;
    width: 80px;
    height: 20px;
    border: 1px solid yellow;
    height: 20px;
    border-radius: 3px;
`
const ButtonThree = styled.button`
    background-color: white;
    width: 80px;
    height: 20px;
    outline: none;
    border: 1px solid yellow;
    border-radius: 3px;
`