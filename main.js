          'use strict';
      alert('Привет Друг!');
  let money = +prompt('Ваш месячный доход?', 55000),
      income = 'Такси',
      addExpenses = prompt('Перечислите возможные расходы', 'Интернет, Квартира, Бензин'),
      deposit = confirm('Есть ли у вас депозит в банке?'), 
      mission = 100000, 
      period = 5,
      budgetDay = money / 30;

      let eхpenses1 = prompt('Введите обязательную статью расходов'),
          amount1 = +prompt('Во сколько это обойдется?'),
          expenses2 = prompt('Введите обязательную статью расходов'),
          amount2 = +prompt('Во сколько это обойдется?');

      let budgetMonth = money - amount1 - amount2;
      console.log('Бюджет на месяц', budgetMonth);

      period = mission / budgetMonth;
      console.log('Цель будет достигнута за ', Math.ceil(period) + ' месяцев(а)');

      budgetDay = budgetMonth / 30;
      console.log('Бюджет на день составляет ', Math.floor(budgetDay));

      switch (true){
    case budgetDay >= 1200:
      console.log('У вас высокий уровень дохода');
      break;
    case budgetDay >= 600 && budgetDay < 1200:
      console.log('У вас средний уровень дохода');
      break;
    case budgetDay >= 0 && budgetDay < 600:
        console.log('К сожалению у вас уровень дохода ниже среднего');
      break;
    case budgetDay < 0:
          console.log('Что то пошло не так');
    }

    


      console.log('Сообщение в консоли' );

      console.log(typeof money);
      console.log(typeof income);
      console.log(typeof deposit);

      console.log(addExpenses.length);

      console.log('Период равен ' + period + ' месяцев');

      console.log('Цель заработать ' + mission + ' рублей');

       console.log(addExpenses.toLowerCase());
      console.log(addExpenses.split());

      console.log(Math.floor(budgetDay));
      


      