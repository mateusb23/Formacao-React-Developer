import Input from "./components/Input";
import Button from "./components/Button";
 
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${num}`);
  }

  const handlerSumNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  const handlerMinusNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation("");
    }
  }

  const handlerMultiplyNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  }

  const handlerDivideNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation("");
    }
  }

  const handleSquareRoot = () => {
    if (currentNumber !== "0") {
        const squareRoot = Math.sqrt(Number(currentNumber));
        setCurrentNumber(String(squareRoot));
        setOperation(""); 
        setFirstNumber("0");
    }
  }

  const handleAddDot = () => {
    if (!currentNumber.includes('.')) {
        setCurrentNumber(prev => prev === '0' ? '0.' : `${prev}.`);
    }
  }

  const handleEquals = () => {
    if(firstNumber !== "0" && operation !== "" && currentNumber !== "0"){
      switch(operation){
        case "+":
          handlerSumNumbers();
          break;
        case "-":
          handlerMinusNumbers();
          break;
        case "*":
          handlerMultiplyNumbers();
          break;
        case "/":
          handlerDivideNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")}/>
          <Button label="/" onClick={handlerDivideNumbers}/>
          <Button label="x" onClick={handlerMultiplyNumbers}/>
          <Button label="√" onClick={handleSquareRoot}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")}/>
          <Button label="8" onClick={() => handleAddNumber("8")}/>
          <Button label="9" onClick={() => handleAddNumber("9")}/>
          <Button label="-" onClick={handlerMinusNumbers}/>
        </Row>
          <Row>
          <Button label="4" onClick={() => handleAddNumber("4")}/>
          <Button label="5" onClick={() => handleAddNumber("5")}/>
          <Button label="6" onClick={() => handleAddNumber("6")}/>
          <Button label="+" onClick={handlerSumNumbers}/> 
        </Row>
          <Row>
          <Button label="1" onClick={() => handleAddNumber("1")}/>
          <Button label="2" onClick={() => handleAddNumber("2")}/>
          <Button label="3" onClick={() => handleAddNumber("3")}/>
          <Button label="." onClick={handleAddDot}/>
        </Row>
        <Row>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>   
      </Content>
    </Container>
  );
};

export default App;