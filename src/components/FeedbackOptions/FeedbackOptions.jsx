import styled from 'styled-components'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <BtnSection>
          {options.map(option => (
        <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}

        </BtnSection>
      );
};

export default FeedbackOptions;

const BtnSection = styled.div`
  
        background-color: slategrey;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    `