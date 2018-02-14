(function(){
    function FormController(){
      var vm=this;
      vm.todoList=[{task:"cook"},{task:"clean"}];//test to see if it adds
      vm.addTodo=function(task){
        todoList.push(task);
      }
      vm.removeTodo=function(index){
        todoList.splice(index,1);
      }
//click on x to delete the todo
      vm.close=function(event){
        event.stopPropagation();
        //($this).parent().remove();
      }

    }
  angular
      .module("App");
      .controller("FormController",FormController)
})();
