import { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // número do ciclo atual 1 ao 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
