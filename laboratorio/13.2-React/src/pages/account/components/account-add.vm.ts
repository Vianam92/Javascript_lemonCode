export interface Account {
  type: string;
  name: string;
}

export const createEmptyAccount = (): Account => ({
  type: "",
  name: "",
});

export interface AccountformErrors {
    type: string;
    name: string;
  }
  
  export const createEmptyAccountformErrors = (): AccountformErrors => ({
    type: "",
    name: "",
  });
