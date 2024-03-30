import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import {IdGeneratorMock} from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { GetUsersInputDTO } from "../../src/dtos/user/getUsers.dto"
import { USER_ROLES } from "../../src/models/User"
import { LoginInputDTO } from "../../src/dtos/user/login.dto"


describe("Testando o login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("Testando o login", async () => {
        const input: LoginInputDTO = {
            email: "fulano@email.com",
            password: "fulano123"
        }
        const result = await userBusiness.login(input)
        expect(result).toEqual({
            message: "Login realizado com sucesso",
            token: "token-mock-fulano"
        })
    })

 
})