import {CompleteIcon} from '../CompleteIcon'
import {DeleteIcon} from '../DeleteIcon'
import "../css/TodoItem.css";

// lineal old code   
/* 
  <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        V
      </span>

       <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
*/

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };