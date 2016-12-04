module.exports = function(Expense) {

  Expense.beforeRemote('create', function(context, user, next) {
    context.args.data.ownerId = context.req.accessToken.userId;
    next();
  });

  Expense.disableRemoteMethod("upsert", true);
  Expense.disableRemoteMethod("upsertWithWhere", true);
  Expense.disableRemoteMethod("updateAll", true);
  Expense.disableRemoteMethod("replaceOrCreate", true);
  Expense.disableRemoteMethod("replaceById", true);
  Expense.disableRemoteMethod("findById", true);
  Expense.disableRemoteMethod("findOne", true);
  Expense.disableRemoteMethod("count", true);
  Expense.disableRemoteMethod("exists", true);
  Expense.disableRemoteMethod('createChangeStream', true);	
  Expense.disableRemoteMethod('__get__owner', false);

};
