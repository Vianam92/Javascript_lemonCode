import { MovementsVm } from "../movements-list.vm";
import { MovementsListItemComponent } from "./movement-list-item.component";
import classes from "./movements-list-table.component.module.css";

interface Props {
  movementsList: MovementsVm[];
}

export const MovementsListTableComponent = (props: Props) => {
  const { movementsList } = props;
  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movementsList.map((movement) => (
          <MovementsListItemComponent key={movement.id} movementItem={movement} />
        ))}
      </div>
    </>
  );
};
