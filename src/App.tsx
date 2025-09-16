import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/ContainerComponent/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import DefaultInput from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Task'
              type='text'
              id='oi'
              placeholder='digite a tarefa'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Iniciar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
