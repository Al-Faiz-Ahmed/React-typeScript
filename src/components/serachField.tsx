import Button from "./Button";

type PropsTypes = {
  placeHolder: string;
  inputValue: string;
  onChangeHandler: (event:string) => void;
  onClickHandler:() => void,
  buttonLabel:string
};

const SearchField = (props: PropsTypes) => {
  let { placeHolder = "Your Text", inputValue,onChangeHandler,onClickHandler,buttonLabel } = props;
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        value={inputValue}
        onChange={(event) => {
          onChangeHandler(event.target.value);
        }}
      />
      <Button onClick={onClickHandler}>{buttonLabel}</Button>
    </div>
  );
};

export default SearchField;
