import UserSchema from "./UserSchema.js";

export const postUserData = (user) => {
  return UserSchema(user).save();
};
