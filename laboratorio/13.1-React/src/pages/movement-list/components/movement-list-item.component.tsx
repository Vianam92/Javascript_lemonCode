import { MovementsVm } from "../movements-list.vm";
import classes from "./movements-list-item.component.module.css";

interface Props {
    movementItem: MovementsVm;
  }

export const MovementsListItemComponent: React.FC<Props> = (props) => {
    const { movementItem } = props;
  
    return (
      <div className={classes.row}>
        <span className={`${classes.dataCell}  ${classes.bold}`}>
       {movementItem.fecha.toLocaleDateString()}
        </span>
        <span className={`${classes.dataCell}  ${classes.bold}`}>{movementItem.fechaValor.toLocaleDateString()}</span>
        <span className={`${classes.dataCell}  ${classes.bold}`}>
        {movementItem.description}
        </span>
        <span className={`${classes.dataCell} ${classes.alignRight}  ${classes.bold}`}>
        {movementItem.amount}
        </span>
        <span className={`${classes.dataCell} ${classes.alignRight}  ${classes.bold}`}>
        {movementItem.balance}
        </span>
      </div>
    );
  };