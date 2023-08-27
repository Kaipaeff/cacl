import Calculator from '../calculator/Calculator';
import CalculatorContextProvider from "../../context/CalculatorContext";
import './app.css';

export default function App() {
  return (
    <div className='App'>
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
};