import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;

    constructor(@Inject(DOCUMENT) private document: any ,private translate: TranslateService, public router: Router) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    elem;

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.elem = document.documentElement;
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

     rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
     }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    openFullscreen() {
        if (this.elem.requestFullscreen) {
          this.elem.requestFullscreen();
        } else if (this.elem.mozRequestFullScreen) {
          /* Firefox */
          this.elem.mozRequestFullScreen();
        } else if (this.elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          this.elem.webkitRequestFullscreen();
        } else if (this.elem.msRequestFullscreen) {
          /* IE/Edge */
          this.elem.msRequestFullscreen();
        }
      }
    
    //   /* Close fullscreen */
    //   closeFullscreen() {
    //     if (this.document.exitFullscreen) {
    //       this.document.exitFullscreen();
    //     } else if (this.document.mozCancelFullScreen) {
    //       /* Firefox */
    //       this.document.mozCancelFullScreen();
    //     } else if (this.document.webkitExitFullscreen) {
    //       /* Chrome, Safari and Opera */
    //       this.document.webkitExitFullscreen();
    //     } else if (this.document.msExitFullscreen) {
    //       /* IE/Edge */
    //       this.document.msExitFullscreen();
    //     }
    //   }
}
