export const Input = ({type, id, name, value, handleChangeInput}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChangeInput}
      />
    </>
  );
};
