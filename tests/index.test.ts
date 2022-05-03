import {jest} from "@jest/globals"

import * as cardService from "../src/services/cardService"
import * as employeeRepository from "../src/repositories/employeeRepository"
import * as cardRepository from "../src/repositories/cardRepository"
import * as companyRepository from "../src/repositories/companyRepository";




describe("test create", () => {
    it("should create", async () => {
        jest.spyOn(companyRepository, "findByApiKey").mockResolvedValueOnce({id: 1, name: 'aaa', apiKey: 'bbb'});

        jest.spyOn(employeeRepository, "findById").mockResolvedValue({
          id: 1,
          cpf: "123",
          companyId: 1,
          email: "test@example.com",
          fullName: "test",
        });

        jest
          .spyOn(cardRepository, "findByTypeAndEmployeeId")
          .mockResolvedValue(null);

        jest.spyOn(cardRepository, "insert").mockResolvedValue();

        await cardService.create("123", 1, "groceries");

        expect(cardRepository.insert).toBeCalledTimes(1)
    })
})