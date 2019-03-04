import { Component, OnInit, HostListener, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW_PROVIDERS, WINDOW } from '../../../helpers/window.helpers';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isFixed;
  public isCollapsed = true;

@Input() showNavBarBackgroundColor: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    // @Inject(WINDOW) private window: Window,
  ) {}

  ngOnInit() {
    if (this.showNavBarBackgroundColor) {
      this.isFixed = this.showNavBarBackgroundColor;
    }
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset =
      // this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
