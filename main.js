          'use strict';
      alert('Привет Друг!');
  let money = +prompt('Ваш месячный доход?', 55000),
      income = 'Такси',
      addExpenses = prompt('Перечислите возможные расходы', 'Интернет, Квартира, Бензин'),
      deposit = confirm('Есть ли у вас депозит в банке?'), 
      mission = 100000, 
      period = 5,
      budgetDay,
      eхpenses1 = prompt('Введите обязательную статью расходов'),
      amount1 = +prompt('Во сколько это обойдется?'),
      expenses2 = prompt('Введите обязательную статью расходов'),
      amount2 = +prompt('Во сколько это обойдется?');

                    //месячные расходы
    const getExpensesMonth = function()  {
        return amount1 + amount2;
      
    };
    getExpensesMonth();
    console.log('Расходы за месяц ' + getExpensesMonth());
    

                    //накопления за месяц
    const getAccumulatedMonth = function() {
      return money - getExpensesMonth();
    };
    getAccumulatedMonth();
    
                      //объявление переменной accumulatedMonth
    let accumulatedMonth = getAccumulatedMonth();

                    //за какой период будет достигнута цель
    const getTargetMonth = function() {
      return mission / accumulatedMonth;
    };

    getAccumulatedMonth();

    budgetDay = accumulatedMonth / 30;
      console.log('Бюджет на день составляет ', Math.floor(budgetDay));

      const getStatusIncome = function() {
          switch (true){
          case budgetDay >= 1200:
      return ('У вас высокий уровень дохода');
          case budgetDay >= 600 && budgetDay < 1200:
      return ('У вас средний уровень дохода');
          case budgetDay >= 0 && budgetDay < 600:
      return ('К сожалению у вас уровень дохода ниже среднего');
          case budgetDay < 0:
      return ('Что то пошло не так');
    }
      };
      getStatusIncome();
      console.log(getStatusIncome());

     console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяцев(а)');
                                                        //budgetDay
      const showTypeOf = function(data) {
         console.log(data, typeof(data));
        
      };
      showTypeOf(money);
      showTypeOf(income);
      showTypeOf(deposit);
    
    console.log(addExpenses.split());


    

    

      

    
          
      

     

      

     
    
    

      


      