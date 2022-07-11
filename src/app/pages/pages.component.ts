import { Component } from '@angular/core';
import { SpinnerService } from '../components/spinner/spinner.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent {
  isCollapsed = false;
  constructor(private spinner: SpinnerService) {}
  loading$ = this.spinner.loading$;
}

