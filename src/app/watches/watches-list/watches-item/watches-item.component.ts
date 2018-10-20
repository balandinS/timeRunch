import { Component, OnInit, Input } from '@angular/core';
import { WatchModel } from '../../watche.model';
import { WatchesService } from '../../watches.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watches-item',
  templateUrl: './watches-item.component.html',
  styleUrls: ['./watches-item.component.scss']
})
export class WatchesItemComponent implements OnInit {
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
   this.router.navigate([this.index], {relativeTo: this.route})
  }

}
