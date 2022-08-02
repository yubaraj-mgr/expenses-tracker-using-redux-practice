import UserSchema from "./UserSchema.js";

export const postUserData = (user) => {
  return UserSchema(user).save();
};

export const checkUserLoginDetails = (email) => {
  return UserSchema.findOne(email);
};
