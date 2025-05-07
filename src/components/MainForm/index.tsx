import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='task'
          type='text'
          placeholder='Digite Algo'
        />
      </div>

      <div className='formRow'>
        <p>Nesse ciclo descanse por {state.config.workTime}min</p>
      </div>

      <div className='formRow'></div>
      <Cycles />
      <div className='formRow'>
        <DefaultButton color='green' icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
