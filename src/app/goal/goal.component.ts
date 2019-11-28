import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent  implements OnInit {
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  goals:Goal[] =[
    new Goal(1,'watch finding Nemo','Find online version and watch Merlin find his son',new Date(2020,3,14)),
    new Goal( 2,'buy cookies','i have to buy cookies for the parrot' ,new Date(2019,6,9)),
     new Goal(3,'get new phone case','Diana has her birthday coming up soon',new Date(2022,1,12)),
     new Goal(4,'Get doog food','pupper likes expensive snacks' ,new Date(2019,0,18)),
     new Goal(5,'solve math homework','Damn Math',new Date(2019,2,14)),
     new Goal(6,'plot my word domination plan','Cause i am an evil overlord',new Date(2030,3,14)),
];

addNewGoal(goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}
toggleDetails(index){
  this.goals[index].showDescription = !this.goals[index].showDescription;
}

constructor(){}
ngOnInit(){}

}
