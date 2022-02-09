import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Counter from "./pages/Counter";
import HelloWorld from "./pages/HelloWorld";
import StopButton from "./pages/StopButton";
import SumCalculator from "./pages/SumCalculator";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HelloWorld />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/sum-calculator' element={<SumCalculator />} />
        <Route path='/stop-button' element={<StopButton />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
