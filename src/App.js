import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'

const customer = {
  'name' : '나동훈',
  'birthday' : '950506',
  'gender' : '남자',
  'job' : '대학생'
}

function App() {
  return (
    <Customer
    name = {customer.name}
    birthday = {customer.birthday}
    gender = {customer.gender}
    job = {customer.job}
    />
  );
}

export default App;