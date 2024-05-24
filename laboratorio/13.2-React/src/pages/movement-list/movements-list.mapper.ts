import * as apiModel from "./api";
import * as viewModel from "./movements-list.vm";

export const mapMovementsListFromApi = (
  movementsList: apiModel.Movements[]
): viewModel.MovementsVm[] =>
  movementsList.map((movements) => ({
    id: movements.id,
    description: movements.description,
    amount: movements.amount,
    balance: movements.balance,
    fecha: new Date(movements.transaction),
    fechaValor: new Date(movements.realTransaction),
  }));
