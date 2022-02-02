import React, { useState } from "react";

import "../../styles/components/Form/form.css";

export const Form = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // const form = new FormData(event.target);
    // const data = Object.fromEntries(form);
    const data = {...formData}

    console.log("submit", data);
  };
  const handleChangeInput = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === 'checkbox'

    const data = formData[name] || {}

    if (isCheckbox) data[value] = checked

    const newValue = (isCheckbox) ? data : value
    setFormData({ ...formData, [name]: newValue });
    console.log("handleInptChange",data, formData);
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email || ""}
            className="input-form"
            placeholder="example@domain.com"
            onChange={handleChangeInput}
          />
          <label htmlFor="email" className="label-input-form">
            Email
          </label>
        </div>
        <div className="radios-container">
          <label htmlFor="cafe" className="label-radio-form">
            <input
              type="radio"
              name="drink"
              id="cafe"
              className="radio-form"
              onChange={handleChangeInput}
              value="cafe"
              checked={formData.drink === "cafe"}
            />
            Café
          </label>
          <label htmlFor="cha" className="label-radio-form">
            <input
              type="radio"
              name="drink"
              id="cha"
              className="radio-form"
              onChange={handleChangeInput}
              value="cha"
              checked={formData.drink === "cha"}
            />
            Chá
          </label>
        </div>
        <div className="checks-container">
          <label htmlFor="facebook">
            <input
              type="checkbox"
              name="social"
              id="facebook"
              onChange={handleChangeInput}
              value='facebook'
            />
            Facebook
          </label>
          <label htmlFor="twitter">
            <input
              type="checkbox"
              name="social"
              id="twitter"
              onChange={handleChangeInput}
              value='twitter'
            />
            Twitter
          </label>
          <label htmlFor="instagram">
            <input
              type="checkbox"
              name="social"
              id="instagram"
              onChange={handleChangeInput}
              value='instagram'
            />
            Instagram
          </label>
        </div>
        <div className="select-container">
          <select
            name="language"
            id="language"
            className="select-form"
            onChange={handleChangeInput}
            value={formData.language || ""}
          >
            <option value="javascript">Javascipt</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="text-area-container">
          <textarea
            name="bio"
            id="bio"
            className="text-area-form"
            cols="30"
            rows="10"
            onChange={handleChangeInput}
            value={formData.bio || ""}
          ></textarea>
        </div>

        <button type="submit" className="button-form">
          Enviar
        </button>
      </form>
    </>
  );
};
