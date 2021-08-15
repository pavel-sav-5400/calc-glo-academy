          'use strict';
      alert('Привет Друг!');
  let money = +prompt('Ваш месячный доход?', 55000),
      income = 'Такси',
      addExpenses = prompt('Перечислите возможные расходы', 'Интернет, Квартира, Бензин'),
      deposit = true, 
      mission = 100000, 
      period = 5,
      budgetDay = money / 30;

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
      


      