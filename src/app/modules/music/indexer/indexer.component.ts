import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {IndexerService  } from './indexer.service';

@Component({
  selector: 'app-indexer',
  templateUrl: './indexer.component.html',
  styleUrls: ['./indexer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class IndexerComponent implements OnInit {
  allArtists;

  constructor(private indexerService: IndexerService) { }

  ngOnInit() {
    this.indexerService.getAllArtists();
    this.allArtists = this.indexerService.allArtists;
  }

}
