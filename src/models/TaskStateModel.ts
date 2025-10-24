import type { TaskModel } from './TaskModel';

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, mainForm
  secondsRemaining: number; // Countdown, historico, mainForm, button
  formattedSecondsRemaining: string; // titulo, countdown
  activeTask: TaskModel | null;
  currentCycle: number; // home
  config: {
    workTime: number; // mainForm
    shortBreakTime: number; // mainForm
    longBreakTime: number; // mainForm
  };
};
