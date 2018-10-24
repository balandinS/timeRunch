import { Component, OnInit, Input } from '@angular/core';
import { WatchModel } from '../../watche.model';
import { WatchesService } from '../../watches.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-also-list-item',
  templateUrl: './also-list-item.component.html',
  styleUrls: ['./also-list-item.component.scss']
})
export class AlsoListItemComponent implements OnInit {

  @Input() watch: WatchModel;
  @Input() index: number;
  constructor(
    private watchService: WatchesService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  detiel() {
   this.router.navigate(['../',this.index], {relativeTo: this.route})
  }


}
