import styled from 'styled-components'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    // const good = options[0];
    // const neutral = options[1];
    // const bad = options[2];
    return (
        <BtnSection>
            <button className='GoodBtn' onClick={onLeaveFeedback}>Good</button>
            <button className='NeutralBtn' onClick={onLeaveFeedback}>Neutral</button>
            <button className='BadBtn' onClick={onLeaveFeedback}>Bad</button>
        </BtnSection> 
    )
}

export default FeedbackOptions;

const BtnSection = styled.div`
        width: 350px;
        background-color: slategrey;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    `