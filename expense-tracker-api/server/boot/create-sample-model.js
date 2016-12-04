module.exports = function(app) {

  var NBR_EXPENSES = 2500;
  var NBR_USERS = 10; // at least 4
  var NBR_DAYS_BACK = 500;
  var AMOUNT_MAX = 125;
  var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

  var mysqlDs = app.dataSources.mysqlDs;
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Expense = app.models.expense;

  var sampleExpenses = ['Dinner at Blue Water Cafe', 'Lunch at Five Sails Restaurant', 'Dinner at Le Crocodile', 'Lunch Miku',
    'Breakfast at Starbucks', 'Breakfast at Pancake Factory', 'Breakfast at the La Crepe', 'Lunch at Trafalgars Bistro',
    'Lunch at Urban Fare', 'Dinner at Forage', 'Dinner at Lavance', 'Dinner at The Burgundy', 'Lunch at Blue Lemon',
    'Gas', 'Parking', 'Highway Toll', 'Soccer game tickets', 'Custom Tax', 'Software', 'Computer Charger', 'USB Reader',
    'USB Hard Drive', 'Breakfast at Cafe Carre', 'Lunch at the Illusion', 'Movie Tickets', 'Museum Tickets', 'Concert Tickets']; 

  var sampleUsers = new Array(NBR_USERS);
  sampleUsers[0] = {email: 'admin1@example.com', password: 'admin1' };
  sampleUsers[1] = {email: 'admin2@example.com', password: 'admin2' };
  for(var i=2; i<NBR_USERS; i++) {
    sampleUsers[i] = {email: `test${i-1}@example.com`, password: `test${i-1}` };
  }

  // create users
  mysqlDs.automigrate('user', function(err) {
    if (err) throw err;

    User.create(sampleUsers, 
        function(err, users) {
            if (err) throw err;

            console.log('Sample users created');

            //create the admin role
            Role.create({
                name: 'admin'
            }, function(err, role) {
                if (err) throw err;

                //make admins
                role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: users[0].id
                }, function(err, principal) { if (err) throw err;}
                );
               role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: users[1].id
                }, function(err, principal) { if (err) throw err;}
                );
            });

            // create expenses
            mysqlDs.automigrate('expense', function(err) {
                if (err) throw err;

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                var expenses = new Array(NBR_EXPENSES);
                for(var i = 0; i<NBR_EXPENSES; i++) {
                    expenses[i] = {
                        date: Date.now() - (DAY_IN_MILLISECONDS * getRandomInt(0, NBR_DAYS_BACK)),
                        amount: Math.random() * AMOUNT_MAX,
                        description: sampleExpenses[getRandomInt(0, sampleExpenses.length - 1)],
                        ownerId: users[getRandomInt(0, users.length - 1)].id
                    }
                }
               
                Expense.create(expenses, 
                    function(err, data) {
                        if (err) throw err;
                        console.log('Sample expenses created');
                    }
                );
            });
        }
    );
  });
};

