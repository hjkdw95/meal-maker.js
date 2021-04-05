//1. Menu Object
const menu = {
    //2. _courses will ultimately contain a mapping between each course and the dishes available to order in that course.
    _courses : {
      //3. 코스는 3가지로 구성되어 있다.
      appetizers: [],
      mains: [],
      desserts: []
    },
  
    //-------------------------------------------------
  
    //4. getter과 setter로 courses의 각 항목별로 새로 추가되는 내역을 나열하게 만들기
  
    //4.1 getter and setter for _courses.appetizers
    // appetizers라는 항목은 어디서 끌어올 거냐면 return 적힌 란에서 뽑아올 것이다.
    get appetizers() {
      return this._courses.appetizers;
    },
    //set으로 _course.appetizers에 받을 value 이름 appetizers로 설정했다.
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
      //_course.appetizers array에 appetizerIn란에 적힌 것을 넣을 것이다.
    },
    get mains(){
      return this._courses.mains;
    },
    set mains(mainIn){
      return this._courses.mains = mainIn;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set mains(dessertsIn){
      return this._courses.desserts =dessertsIn;
    },
  
    //5~6. create an empty getter method for the _courses property.
    // 4를 통하여 추가된 항목들을 courses에 적혀있는대로 appetizers, mains, desserts 각각 오브젝트 형태로 뽑아낼 수 있도록 설정하기
  
    //(set으로 셋업해놓은것과 사실 상 똑같은 것이다.)
    //위의 get, set 부분은 사실 courses로 간추려 표현할 수 있다.
    get courses() {
      return {
        appetizers : this.appetizerIn,
        mains: this.mainIn,
        desserts: this.dessertsIn,
      };
    },
  
  
  //---------------------------------------------------
  
    //7. .addDishToCourse() which will be used to add a new dish to the specified course on the menu.
    // _course에 새로운 요리를 추가할 때 사용할 함수
    // 새로운 요리는 코스이름, 요리이름, 요리 가격을 갖고 있다.
    // 이것을 _course에 맞게 넣어지도록 조절하는 과정
    // 겸사겸사 _course안에 dishName, dishPrice도 추가하게 되었다
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        //7.1 creates a object with name and price
        name : dishName,
        price : dishPrice
      };
    //8. .push() the objected created into the selected courseName array in _courses 
    //courseName을 근거로 dish변수에 포함된 내역을 _courses에 추가함. 
      this._courses[courseName].push(dish);
    },
  
   //9. need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
   //menu의 course에 따라 랜덤 dish가 선택될 수 있도록 해야함
    getRandomDishFromCourse(courseName) {
      //10.1 dishes에 각 코스 이름별 array를 나열하기
    let dishes = this._courses[courseName];
      // 10.2 dishes에서 array 음식 아무거나 랜덤으로 고를 수 있게 randonIndex 설정
    let randomIndex = Math.floor(Math.random()*dishes.length);
      // 10.3 randomIndex로 돌린 숫자에 해당하는 음식을 반환하도록 설정
    return dishes[randomIndex];
    },
  
    // 11. 3끼니 골라주는 function 만들기
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      //전체 코스 가격도 나오게 하기
      let totalPrice = appetizer.price + main.price + dessert.price;
  
      //최종 내역 정리해서 보여주기
      return `Your meal will be composed of: 
    ${appetizer.name} to start, as a main ${main.name} and ${dessert.name} for dessert.
    
    Total costs will be $${totalPrice}. 
    
    Enjoy your meal!`
    }
  };
  
  //12. 메뉴 나열하기
  // 12. adding content to menu._courses[courseName] arrays
  // 12.1 appetizers
  menu.addDishToCourse('appetizers','tuna tartar',9.50);
  menu.addDishToCourse('appetizers','thai lolipops',9.00);
  menu.addDishToCourse('appetizers','bread and olives',3.50);
  //12.2 mains
  menu.addDishToCourse('mains','steak frites',13.00);
  menu.addDishToCourse('mains','sea bass', 12.50);
  menu.addDishToCourse('mains','caeser salad',9.00);
  // 12.3 desserts
  menu.addDishToCourse('desserts','sticky toffee pudding',4.00);
  menu.addDishToCourse('desserts','trio of ice cream',3.50);
  menu.addDishToCourse('desserts','big cheese plater',7.00);
  menu.addDishToCourse('desserts','small cheese plater',4.00);

  //13 테스트
  const meal = menu.generateRandomMeal();
  console.log(meal);