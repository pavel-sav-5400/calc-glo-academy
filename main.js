          'use strict';
          let money;
          const isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }; 
          const start = function() {
                do {
                   money = prompt('Ваш месячный доход?', 55000);
                  }
                 while (!isNumber(money)); 
                };
                start();

                let appData = {
                  income: {},
                  addIncome: [],
                  expenses: {},
                  addExpenses: [],
                  deposit: false,
                  mission: 100000,
                  period: 5,
                  budget: money,
                  budgetDay: 0,
                  budgetMonth: 0,
                  expensesMonth: 0,
                  asking: function() {
                let addExpenses = prompt('Перечислите возможные расходы', 'Интернет, Квартира, Бензин');
                    appData.addExpenses = addExpenses.toLowerCase().split(', ');
                    appData.deposit = confirm('Есть ли у вас депозит в банке?');
                  }
                };
      //alert('Привет Друг!');
  /*let 
      income = 'Такси',
      
       
      mission = 100000, 
      period = 5,
      budgetDay,
      expenses = [];
      eхpenses1 = prompt('Введите обязательную статью расходов'),
      amount1 = +prompt('Во сколько это обойдется?'),
      expenses2 = prompt('Введите обязательную статью расходов'),
      amount2 = +prompt('Во сколько это обойдется?');*/

      

                    //месячные расходы
    const getExpensesMonth = function()  {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
        
          appData.expenses[i] = prompt('Введите обязательную статью расходов');

                 sum += +prompt('Во сколько это обойдется?');
                 while (!isNumber(sum)) {
                   sum += +prompt('Во сколько это обойдется?');
                 } 
          }
          console.log(sum);
          return sum;
          
        };
        
        
      
    
    let expensesAmount = getExpensesMonth();
    console.log('Расходы за месяц ' + expensesAmount);
    

                    //накопления за месяц
    const  getAccumulatedMonth = function() {
      return money - expensesAmount;
    };
    getAccumulatedMonth();
    
                      //объявление переменной accumulatedMonth
    let accumulatedMonth = getAccumulatedMonth();

                    //за какой период будет достигнута цель
    const getTargetMonth = function() {
      return appData.mission / accumulatedMonth;
    };

    getTargetMonth();

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

      if (getTargetMonth() <= 0) {
        console.log('Цель не будет достигнута');
      }
         if (getTargetMonth() === Infinity) {
          console.log('Цель не будет достигнута');
        }
       else {console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяцев(а)');}

     
                                                        //budgetDay
      const showTypeOf = function(data) {
         console.log(data, typeof(data));
        
      };
      showTypeOf(money);
      showTypeOf(income);
      showTypeOf(deposit);
    
    console.log();


    

    

      

    
          
      

     

      

     
    
    

      


      