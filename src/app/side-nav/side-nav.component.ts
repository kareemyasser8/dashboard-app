import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {


    this.matIconRegistery.addSvgIcon(
      'PMS',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/PMS.svg')
    )



    this.matIconRegistery.addSvgIcon(
      'controlRoom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/control-room.svg')
    )

    this.matIconRegistery.addSvgIcon(
      'dashboard',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/dashboard.svg')
    )

    this.matIconRegistery.addSvgIcon(
      'dashboardApps',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/dashboard-apps.svg')
    )


    this.matIconRegistery.addSvgIcon(
      'elements',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/elements.svg')
    )

    this.matIconRegistery.addSvgIcon(
      'logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/logout.svg')
    )

    this.matIconRegistery.addSvgIcon(
      'notifications',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/notifications.svg')
    )

    this.matIconRegistery.addSvgIcon(
      'settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/settings.svg')
    )

  }

  ngOnInit(): void {

  }

}
