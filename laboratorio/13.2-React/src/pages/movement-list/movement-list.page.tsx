import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import React, { useEffect, useState } from "react";
import { getMovements } from "./api/movements-list.api";
import { useParams } from "react-router";
import { mapMovementsListFromApi } from "./movements-list.mapper";
import { MovementsVm } from "./movements-list.vm";
import { MovementsListTableComponent } from "./components/movements-list-table.component";
import { AccountVm } from "../account-list/account-list.vm";
import { getAccountList } from "../account-list/api";
import { mapAccountListFromApiToVm } from "../account-list/account-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementsList, setMovementsList] = useState<MovementsVm[]>([]);
  const [accountList, setAccountList] = useState<AccountVm[]>([]);
  const { id }: any = useParams();

  useEffect(() => {
    getMovements(id).then((result) =>
      setMovementsList(mapMovementsListFromApi(result))
    );
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const findId = accountList.find((account) => account.id === id);


  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <p>SALDO DISPONIBLE <span>{findId?.balance} €</span></p>
        </div>
        <div className={classes.containerIban}>
          <h3>Alias: {findId?.name}</h3>
          <p>IBAN: {findId?.iban}</p>
        </div>
        <MovementsListTableComponent movementsList={movementsList} />
      </div>
    </AppLayout>
  );
};
