import React, {Component} from 'react'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import styled from 'styled-components'


export default class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
    return;
  };
 

  countTotalFeedback = (a, b, c) => {
    const totalFeedbackAmount = a + b +c;
    return totalFeedbackAmount;
  }

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
      if(good > 0 || neutral > 0 || bad > 0) {
          const totalFeedbackAmount = good + neutral + bad;
          const totalPositive = (good * 100) / totalFeedbackAmount;
          return `${Math.round(totalPositive)}%`;
      } 
      
  }
  
  render() {
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
        </Section>
          
      </Wrapper>
    );
  };
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100vh;
    padding: 10px;
    color: #010101;
`



