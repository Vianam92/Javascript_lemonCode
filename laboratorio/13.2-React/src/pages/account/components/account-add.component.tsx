import { ChangeEvent, useState } from "react";
import classes from "./account-add-component.module.css";
import {
  Account,
  AccountformErrors,
  createEmptyAccount,
  createEmptyAccountformErrors,
} from "./account-add.vm";
import { getAccount } from "../api";

const ACTION_NONE = "";
const CUENTA_CORRIENTE = "1";
const CUENTA_AHORRO = "2";

export const AccountAddComponent = () => {
  const [sendData, setSendData] = useState<Account>(createEmptyAccount);
  const [error, setError] = useState<AccountformErrors>(
    createEmptyAccountformErrors
  );

  const save = () => {
    if (sendData.name !== "" && sendData.type !== "") {
      getAccount(sendData).then((response) => response);
      setError(createEmptyAccountformErrors);
    }
    if (sendData.type.trim() === "") {
      setError({
        ...error,
        type: "Selecciona un tipo de cuenta",
      });
    }
    if (sendData.name.trim() === "") {
      setError({
        ...error,
        name: "Tienes que agregar un alias",
      });
    }
  };

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === "1") {
      return setSendData({ ...sendData, type: "corriente" });
    } else if (e.target.value === "2") {
      return setSendData({ ...sendData, type: "ahorro" });
    } else {
      return setSendData({ ...sendData, type: ACTION_NONE });
    }
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSendData({ ...sendData, name: e.target.value });
  };

  return (
    <div className={`${classes.dataCell} ${classes.selectContainer}`}>
      <div>
        <label>
          Tipo de cuenta:
          <select
            className={classes.select}
            onChange={handleSelectedOptionChange}
          >
            <option value={ACTION_NONE}>Seleccionar</option>
            <option value={CUENTA_AHORRO}>Cuenta de Ahorro</option>
            <option value={CUENTA_CORRIENTE}>Cuenta Corriente</option>
          </select>
        </label>{" "}
        {error && error.type}
        <div>
          <label htmlFor="alias">
            {" "}
            Alias:
            <input
              type="alias"
              id="alias"
              name="text"
              onChange={handleFieldChange}
              placeholder="Alias"
            />
          </label>
          {error && error.name}
        </div>
        <button onClick={save}>Guardar</button>
      </div>
    </div>
  );
};
