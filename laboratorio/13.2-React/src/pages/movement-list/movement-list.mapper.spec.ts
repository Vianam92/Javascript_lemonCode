import { mapMovementsListFromApi } from "./movements-list.mapper";
import * as apiModel from "./api";

describe("pages/movements-list/movements-list.mapper specs", () => {
  describe("mapMovementsListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
      //Arrange

      const movementsList: apiModel.Movements[] = [
        {
          id: "1",
          description: "cuenta",
          amount: 200,
          balance: 400,
          transaction: "2019-11-21T14:07:38",
          realTransaction: "2019-11-21T14:07:38",
          accountId: "2",
        },
      ];

      //Act
      const result = mapMovementsListFromApi(movementsList);

      //Assert
      expect(result).toEqual([
        {
          id: "1",
          description: "cuenta",
          amount: 200,
          balance: 400,
          transaction: "2019-11-21T14:07:38",
          realTransaction: "2019-11-21T14:07:38",
          accountId: "2",
        },
      ]);
    });
  });
});
