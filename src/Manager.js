
function Manager() {

   this.addTask = function() {
    console.log('addTask in Manager');
   }
}

export const manager = new Manager();