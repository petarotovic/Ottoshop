import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ConnectToDB } from 'src/app/db.service';

@Component({
  selector: 'app-productcontainer',
  templateUrl: './productcontainer.component.html',
  styleUrls: ['./productcontainer.component.scss']
})
export class ProductcontainerComponent implements OnInit {
  @Input() sortid: number | undefined;

  productsarray: any;
  sortedarray: any;
  currentmargin: number = 0;
  widthindex: number | undefined;
  clickindex: number = 1;

  constructor(private db: ConnectToDB) { }

  ngOnInit(): void {
    this.db.GetAllProducts().subscribe(products => {
      switch(this.sortid) {
        case 1:
          this.sortedarray = Object.values(products);
          this.productsarray = this.db.SortLatest(this.sortedarray);
          break;
        case 2:
          this.sortedarray = Object.values(products);
          this.productsarray = this.db.SortMostSold(this.sortedarray);
          break;
      }
    })

    this.setWidthIndex();
  }

  setWidthIndex() {
    if(window.innerWidth > 1200)
      this.widthindex = 1;
    else if (window.innerWidth >= 903 && window.innerWidth <= 1200) 
      this.widthindex = 2;
    else if (window.innerWidth >= 769 && window.innerWidth <= 902)
      this.widthindex = 3;
    else if (window.innerWidth >= 601 && window.innerWidth <= 768)
      this.widthindex = 4;
    else if (window.innerWidth <= 600)
      this.widthindex = 5;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {  
    if(window.innerWidth > 1200) {
      if (this.widthindex != 1) {
        this.clickindex = 1;
      }
      this.widthindex = 1;
      this.currentmargin = 0;
      document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = "0%";
    }
    else if (window.innerWidth >= 993 && window.innerWidth <= 1200) {
      if (this.widthindex != 2) {
        this.clickindex = 1;
      }
      this.widthindex = 2;
      this.currentmargin = 0;
      document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = "0%";
      this.clickindex = 1;
    }
    else if (window.innerWidth >= 769 && window.innerWidth <= 992) {
      this.widthindex = 3;
      this.currentmargin = 0;
      document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = "0%";
      this.clickindex = 1;
    }
    else if (window.innerWidth >= 601 && window.innerWidth <= 768) {
      if (this.widthindex != 4) {
        this.clickindex = 1;
      }
      this.widthindex = 4;
      this.currentmargin = 0;
      document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = "0%";
      this.clickindex = 1;
    }
    else if (window.innerWidth <= 600) {
      if (this.widthindex != 5) {
        this.clickindex = 1;
      }
      this.widthindex = 5;
      this.currentmargin = 0;
      document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = "0%";
      this.clickindex = 1;
    }
  }

  Backwards() {
    if(window.innerWidth > 1200) {
      if (this.clickindex != 1) {
        this.currentmargin = this.currentmargin + 24.9;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex--;
      }
    }

    if(window.innerWidth >= 993 && window.innerWidth <= 1200) {
      if (this.clickindex != 1) {
        this.currentmargin = this.currentmargin + 33.2;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex--;
      }
    }

    if(window.innerWidth >= 769 && window.innerWidth <= 992) {
      if (this.clickindex != 1) {
        this.currentmargin = this.currentmargin + 49.8;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex--;
      }
    }

    if(window.innerWidth >= 601 && window.innerWidth <= 768) {
      if (this.clickindex != 1) {
        this.currentmargin = this.currentmargin + 49.8;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex--;
      }
    }

    if(window.innerWidth <= 600) {
      if (this.clickindex != 1) {
        this.currentmargin = this.currentmargin + 98.5;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex--;
      }
    }
  }

  Forward() {
    if(window.innerWidth > 1200) {
      if (this.clickindex != 5) {
        this.currentmargin = this.currentmargin - 24.9;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex++;
      }
    }

    if(window.innerWidth >= 993 && window.innerWidth <= 1200) {
        if (this.clickindex != 5) {
          this.currentmargin = this.currentmargin - 33.2;
          document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
          this.clickindex++;
        }
    }

    if(window.innerWidth >= 769 && window.innerWidth <= 992) {
      if (this.clickindex != 7) {
        this.currentmargin = this.currentmargin - 49.8;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex++;
      }
    }

    if(window.innerWidth >= 601 && window.innerWidth <= 768) {
      if (this.clickindex != 7) {
        this.currentmargin = this.currentmargin - 49.8;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex++;
      }
    }

    if(window.innerWidth <= 600) {
      if (this.clickindex != 8) {
        this.currentmargin = this.currentmargin - 98.5;
        document.getElementById("pr" + "0" + this.sortid)!.style.marginLeft = String(this.currentmargin) + '%';
        this.clickindex++;
      }
    }
  }
}
