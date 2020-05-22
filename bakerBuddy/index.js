var app = new Vue({
  el: '#doughType',
  data: {
    message: 'Sandwich Bread',
  }
})



var ingredientListTable = new Vue({
  el: '#ingredientList',
  data: {
    ingredientList: [
      {ID: 1, Name: 'Flour', Quantity: 575},
      {ID: 2, Name: 'Water', Quantity: 425},
      {ID: 3, Name: 'Salt', Quantity: 15},
    ],
  },
  computed: {
    "columns": function columns() {
        if (this.ingredientList.length == 0) {
            return [];
        }
        // Return the columns in the first row
        return Object.keys(this.ingredientList[0])
        
    }
  }
})

