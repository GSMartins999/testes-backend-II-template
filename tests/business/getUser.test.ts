import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { GetUsersInputDTO } from "../../src/dtos/user/getUsers.dto"
import { USER_ROLES } from "../../src/models/User"


describe("Testando a getUser", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve retornar uma lista de users", async () => {
        const input: GetUsersInputDTO = {
            q: undefined,
            token: "token-mock-astrodev"
        }
        const result = await userBusiness.getUsers(input)
        expect(result).toEqual([
            {
                id: "id-mock-fulano",
                name: "Fulano",
                email: "fulano@email.com",
                role: USER_ROLES.NORMAL,
                created_at: expect.any(String)
            }, {
                id: "id-mock-astrodev",
                name: "Astrodev",
                email: "astrodev@email.com",
                role: USER_ROLES.ADMIN,
                created_at: expect.any(String)
            }
        ])


        // expect(result).toHaveLength(2)
        // expect(result).toContainEqual({
        //     id: "id-mock-fulano",
        //     name: "Fulano",
        //     email: "fulano@email.com",
        //     role: USER_ROLES.NORMAL,
        //     created_at: expect.any(String)
        // })
        // expect(result).toContainEqual({
        //     id: "id-mock-astrodev",
        //     name: "Astrodev",
        //     email: "astrodev@email.com",
        //     role: USER_ROLES.ADMIN,
        //     created_at: expect.any(String)
        // })
    })
})