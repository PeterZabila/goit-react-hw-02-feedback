import Notification from '../Notification/Notification'
import styled from 'styled-components'

const Statistics = ({good, neutral, bad, total, positivePercentage, message}) => {
    return (
        <>
        
            {(good + neutral + bad) < 1 ? (<Notification>{message}</Notification>)
                         :
                         (<StatisticsSection>
                            <div>Good:{good}</div>
                            <div>Neutral: {neutral}</div>
                            <div>Bad: {bad}</div>
                            <div>Total: {total(good, neutral, bad)}</div>
                            <div>Positive feedback: {positivePercentage(good, neutral, bad)}</div>
                        </StatisticsSection>)}
        </>
                    

    )
}

export default Statistics

const StatisticsSection = styled.section`
    width: 400px;
`
