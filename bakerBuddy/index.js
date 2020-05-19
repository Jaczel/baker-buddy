var app = new Vue({
  el: '#doughType',
  data: {
    message: 'Sandwich Bread',
  }
})

Vue.component('ingredient-item', {
    props: ['ingredient'],
    template:`
        <div class='ingredient-item'>
            <td>{{ingredient.name}}</td>
            <td>{{ingredient.quantity}}</td>
            <td>100</td>
        </div>
    `
})


var ingredientList = new Vue({
  el: '#ingredientList',
  data: {
    ingredientList: [
      {id: 1, name: 'Flour', quantity: 575},
      {id: 2, name: 'Water', quantity: 425},
      {id: 3, name: 'Salt', quantity: 15},
    ],
  },
})

