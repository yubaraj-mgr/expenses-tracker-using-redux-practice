import transSactionsSchema from "./transactionsSchema.js";

export const postTransactions = (data) => {
  return transSactionsSchema(data).save();
};
