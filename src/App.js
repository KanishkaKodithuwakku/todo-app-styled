import { ButtonDefault, ButtonPrimary, ButtonWarning, ButtonDanger } from "./common/Buttons";
import { StyledInput } from "./components/StyledInput";
import { Alert} from './common/Alert'
import { Spinner } from "./common/Spinner";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <ButtonDefault type="button" onClick={() => alert()}>
        Test
      </ButtonDefault>
      <ButtonPrimary>Primary</ButtonPrimary>
      <ButtonWarning>Warning</ButtonWarning>
      <ButtonDanger>Danger</ButtonDanger>
      <StyledInput />
      <Alert className="alert-primary">This is a primary alert!</Alert>
      <Alert className="alert-danger">This is a danger alert!</Alert>
      <Spinner />
    </div>
  );
}

export default App;
