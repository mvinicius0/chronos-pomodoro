import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function CountDown() {
  const taskContext = useTaskContext();
  console.log(taskContext);
  return <div className={styles.cantainer}>00:00</div>;
}
