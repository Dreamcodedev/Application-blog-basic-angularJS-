import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts= [
    {  
    title: 'Mon premier post',  
    content: 'khsdkjh jskhkjhsd kjhkjhsk kjhkjshdkjsdh khkjdhkjs',  
    loveIts: 3,  
    created_at: new Date()
    },

    {  
      title: 'Mon deuxieme post',  
      content: 'khsdkjh jskhkjhsd kjhkjhsk kjhkjshdkjsdh khkjdhkjs',  
      loveIts: 5,  
      created_at: new Date()
      },

      {  
        title: 'Mon 3eme post',  
        content: 'khsdkjh jskhkjhsd kjhkjhsk kjhkjshdkjsdh khkjdhkjs',  
        loveIts: 7,  
        created_at: new Date()
        }

  ];
}
