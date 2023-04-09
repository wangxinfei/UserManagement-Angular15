import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  template: `
      <footer>
        <div class="container">
          <p>&copy; 2023 - My App</p>
        </div>
      </footer>
    `,
    styles: [`
      footer {
        background-color: #f8f9fa;
        padding: 20px 0;
        text-align: center;
      }
    `]
  })
export class FooterComponent {

}
