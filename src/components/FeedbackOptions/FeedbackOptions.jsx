import styled from 'styled-components'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <BtnSection>
          {Object.keys(options).map(key => (
        <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
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