import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BakeService } from './services/bake.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ],
  providers: [ BakeService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-order2';

}
