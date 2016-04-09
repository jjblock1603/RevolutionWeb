  Session.setDefault('numberofPizzas', 0);

  Template.cool.helpers ({
    numberofPizzas: function () {
      return Session.get('numberofPizzas');
    }
  });

  Template.cool.events ({
    'click button': function () {
      Session.set('numberofPizzas', Session.get('numberofPizzas') + 1);
    }
  });


