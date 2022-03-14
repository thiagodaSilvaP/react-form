import styled from "styled-components";

const baseInput = () => {
  return `
    width: 100%;
    height: 3rem;
    padding: 0px 10px;
    border-radius: 4px;
    margin-bottom: 1rem;`;
};

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  color: #fff;

  input {
    display: block;
    border: 2px solid #fff;
    background-color: #444;
    color: #fff;
    ${baseInput}
    margin-bottom: 2px;
  }

  label {
    position: absolute;
    top: -0.45rem;
    left: 0;
    margin-left: 10px;
    padding: 0px 4px;
    border-radius: 2px;
    font-weight: bold;
    font-size: x-small;
    cursor: text;
    background-color: #444;
  }

  small {
    color: red;
    padding: 4px;
    font-size: x-small;
  }
`;
export const Button = styled.div`
  width: 100%;
  input {
    background-color: #555;
    color: #fff;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.1s ease;
    ${baseInput}

    &:hover {
      background-color: rgb(76, 76, 76);
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${baseInput}

  label {
    display: flex;
    align-items: center;
    font-size: small;
    font-weight: bolder;
    cursor: pointer;
  }
`;

export const Radio = styled.input`
  margin-right: 5px;
`;

export const SelectContainer = styled.div`
  margin-right: 5px;
  ${baseInput}
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${baseInput}
`;
export const TextAreaContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #444;
  border: 1px solid #fff;
  border-radius: 5px;
`;
