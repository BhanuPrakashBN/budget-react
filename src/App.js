import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your Balance' value='2,500.53'  alignment = 'center' size='small' />

      <DisplayBalances />

      <MainHeader title="History" type='h3' />

      <EntryLine description='Something' value='10.00' isExpense={true} />
      <EntryLine description='Something Else' value='20.00' />

      <MainHeader title="Add New Transaction" type='h3' />
      <NewEntryForm />  

    </Container>
  );
}

export default App;
