import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  @Input() postTitle ='';
  @Input() postContent ='';
  @Input() postLoveIts : number= 3;
  @Input() postCreateDate = new Date();
  


  constructor() { }

  ngOnInit(): void {
  }

  getLoveIts(){
    this.postLoveIts+=1;
    return this.postLoveIts
  };

}
