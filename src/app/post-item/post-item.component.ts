import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  
  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.loveIts ++;
  }

  onDontLoveIt(){
    this.loveIts --;
  }
}
