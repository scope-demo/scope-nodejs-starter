const { createConnection } = require("typeorm");
const { User } = require("./entity/User");

describe("users", () => {
  it("can create and find users", async () => {
    const connection = await createConnection();
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    const users = await connection.manager.find(User);

    expect(users).not.toEqual(null);

    await connection.close();
  });
});
