import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='task'
          type='text'
          placeholder='Digite Algo'
        />
      </div>

      <div className='formRow'>
        <p>Nesse ciclo descanse por 25min</p>
      </div>

      <div className='formRow'></div>
      <Cycles />
      <div className='formRow'>
        <DefaultButton color='green' icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
