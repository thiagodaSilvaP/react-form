import React, { useState } from "react";

// import "../../styles/components/Form/form.css";

import {
  Container,
  InputContainer,
  Button,
  RadioContainer,
  Radio,
  SelectContainer,
  TextAreaContainer,
  CheckBoxContainer,
  TextArea
} from "./style";

export const Form = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // const form = new FormData(event.target);
    // const data = Object.fromEntries(form);
    const data = { ...formData };

    console.log("submit", data);
  };
  const handleChangeInput = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === "checkbox";

    const data = formData[name] || {};

    if (isCheckbox) data[value] = checked;

    const newValue = isCheckbox ? data : value;
    setFormData({ ...formData, [name]: newValue });
    console.log("handleInptChange", data, formData);
  };

  return (
    <>
      <Container action="" onSubmit={handleSubmit}>
        <InputContainer>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email || ""}
            placeholder="example@domain.com"
            onChange={handleChangeInput}
          />
          <label htmlFor="email" >
            Email
          </label>
        </InputContainer>
        <RadioContainer>
          <label htmlFor="cafe">
            <Radio
              type="radio"
              name="drink"
              id="cafe"
              onChange={handleChangeInput}
              value="cafe"
              checked={formData.drink === "cafe"}
            />
            Café
          </label>
          <label htmlFor="cha">
            <Radio
              type="radio"
              name="drink"
              id="cha"
              onChange={handleChangeInput}
              value="cha"
              checked={formData.drink === "cha"}
            />
            Chá
          </label>
        </RadioContainer>
        <CheckBoxContainer>
          <label htmlFor="facebook">
            <input
              type="checkbox"
              name="social"
              id="facebook"
              onChange={handleChangeInput}
              value="facebook"
            />
            Facebook
          </label>
          <label htmlFor="twitter">
            <input
              type="checkbox"
              name="social"
              id="twitter"
              onChange={handleChangeInput}
              value="twitter"
            />
            Twitter
          </label>
          <label htmlFor="instagram">
            <input
              type="checkbox"
              name="social"
              id="instagram"
              onChange={handleChangeInput}
              value="instagram"
            />
            Instagram
          </label>
        </CheckBoxContainer>
        <SelectContainer>
          <select
            name="language"
            id="language"
            onChange={handleChangeInput}
            value={formData.language || ""}
          >
            <option value="javascript">Javascipt</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
          </select>
        </SelectContainer>
        <TextAreaContainer>
          <TextArea
            name="bio"
            id="bio"
            cols="30"
            rows="10"
            onChange={handleChangeInput}
            value={formData.bio || ""}
          ></TextArea>
        </TextAreaContainer>

        <Button type="submit">Enviar</Button>
      </Container>
    </>
  );
};
