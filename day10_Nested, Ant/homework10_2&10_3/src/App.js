import './App.css';
import InputNameComponents from './Components/InputName';
import LayoutComponents from './Components/Layout';
import InputNumberComponent from './Components/InputNumber';
import GenderComponent from './Components/Gender';
import ProvinceComponent from './Components/Province';
import CalendarComponent from './Components/Calendar';
import FormComponent from './Components/Form';

function App() {
  return (
    <div className='all'>
      <LayoutComponents
        form={FormComponent}
        // name={InputNameComponents}
        // number={InputNumberComponent}
        // gender={GenderComponent}
        // province={ProvinceComponent}
        // calendar={CalendarComponent}
        />
    </div>

  );
}

export default App;
