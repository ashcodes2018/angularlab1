(function(){
    function FormController(){
      var vm=this;
      vm.todoList=[];//test to see if it adds
      vm.addTodo=function(task){
        vm.todoList.push(task);
      }
      vm.removeTodo=function($index){
        vm.todoList.splice($index,1);
      }
//click on x to delete the todo
      //vm.close=function(event){
        //event.stopPropagation();
        //($this).parent().remove();
      }

    
  angular
      .module("App")
      .controller("FormController",FormController)
})();
