import { userModel } from "../models/user";
export const resolvers = {
  hello: () => {
    return "Hello world! welcome to graphQL world";
  },
  getUser: async ({ id }) => {
    try {
      const user = await userModel.findById(id);
      return user;
    } catch (err) {
      throw new Error("Error retrieving user");
    }
  },
  getUsers: async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (err) {
      throw new Error("Error retrieving users");
    }
  },
  createUser: async ({ name, email, password }) => {
    try {
      const user = new userModel({ name, email, password });
      await user.save();
      return user;
    } catch (err) {
      throw new Error("Error creating user");
    }
  },
  updateUser: async ({ id, name, email, password }) => {
    try {
      const user = await userModel.findByIdAndUpdate(
        id,
        { name, email, password },
        { new: true }
      );
      return user;
    } catch (err) {
      throw new Error("Error updating user");
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const user = await userModel.findByIdAndDelete(id);
      return user;
    } catch (err) {
      console.log("error creating the user", err);
      throw new Error("Error deleting user");
    }
  },
};
