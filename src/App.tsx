import QwertyInput from './components/QwertyInput';
import UncontrolledInput from "./components/UncontrolledInput";
import KeyboardControlledInput from './components/KeyboardControlledInput';

function App(): JSX.Element {
  return (
    <>
      <h2>Controlled input</h2>
      <QwertyInput />
      <hr />
      <h2>Uncontrolled input</h2>
      <UncontrolledInput />
      <h3> Keyboard Controlled Input</h3>
      <KeyboardControlledInput/>
    </>
  );
}

export default App;
