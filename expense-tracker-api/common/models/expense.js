'use strict';

module.exports = function(Expense) {

  Expense.beforeRemote('create', function(context, user, next) {
    context.args.data.ownerId = context.req.accessToken.userId;
    next();
  });
  
};
