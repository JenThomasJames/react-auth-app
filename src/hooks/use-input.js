const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [isInputTouched, setIsInputTouched] = useState(false);

  isInputTouched && enteredValue !== "" && setIsInputValid(true);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsInputTouched(true);
  };

  const reset = () => {
    setIsInputTouched(false);
    setIsInputValid(false);
  };

  return {
    enteredValue,
    isInputValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
