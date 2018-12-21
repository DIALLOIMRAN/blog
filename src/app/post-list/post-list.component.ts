import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
      {
          title: "Mon premier Post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus enim tempor lacus facilisis varius. Cras nec venenatis velit. Curabitur rutrum fermentum nunc sit amet mollis. In eleifend arcu libero. Aliquam ac sodales ipsum, quis sodales lacus. Duis ac ultrices enim. Sed consequat vehicula ipsum nec condimentum. Suspendisse iaculis odio sed lorem convallis faucibus. Pellentesque sed ornare lectus.",
          loveIts: 1,
          created_at: new Date()
      },
      {
          title: "Mon premier Post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus enim tempor lacus facilisis varius. Cras nec venenatis velit. Curabitur rutrum fermentum nunc sit amet mollis. In eleifend arcu libero. Aliquam ac sodales ipsum, quis sodales lacus. Duis ac ultrices enim. Sed consequat vehicula ipsum nec condimentum. Suspendisse iaculis odio sed lorem convallis faucibus. Pellentesque sed ornare lectus.",
          loveIts: -1,
          created_at: new Date()
      },
      {
          title: "Mon premier Post",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus enim tempor lacus facilisis varius. Cras nec venenatis velit. Curabitur rutrum fermentum nunc sit amet mollis. In eleifend arcu libero. Aliquam ac sodales ipsum, quis sodales lacus. Duis ac ultrices enim. Sed consequat vehicula ipsum nec condimentum. Suspendisse iaculis odio sed lorem convallis faucibus. Pellentesque sed ornare lectus.",
          loveIts: 0,
          created_at: new Date()
      }
  ];
  constructor() { }

  ngOnInit() {
  }

}
