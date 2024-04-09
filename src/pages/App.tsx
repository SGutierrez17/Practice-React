import ButtonPractice from '../organisms/button-practice';
import CIButton from '../organisms/CI-button';
import BasicComponents from '../organisms/basic-components';
import PersonIdentity from '../organisms/person-identity';
import List from '../organisms/t-list';
import Counter from '../organisms/counter';
import NavBar from '../organisms/nav-bar';

function App() {
  return (
    <div>
      <ButtonPractice />
      <CIButton variant="contained" fullWidth color="error">On click</CIButton>
      <BasicComponents basic={['Interface', 'Type', 'Functions', 'Classes']}/>
      <PersonIdentity name="Sergio" age="27" hobbies={['futbol', 'billar', 'comer']}/>
      <List items={['One', 'Two', 'Three','Four']} renderItem={(item) => <span>{item}</span>}/>
      <Counter name='Counter' initialCount={0} buttonIncrement='increment' buttonDecrement='decrement'/>
      <NavBar />
    </div>
  );
}

export default App;

