import { Component,
         trigger, state, style, transition, animate }  from '@angular/core';

import { Observable }    from 'rxjs/Observable';
import { Subject }       from 'rxjs/Subject';

import { WikiService }   from './wiki.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ WikiService ],
  animations: [
    trigger('moveUp', [
      state('active', style({transform: 'translateY(-150px)'})),
      state('inactive', style({transform: 'translateY(0px)'})),
      transition('* => active', [animate(600)]),
      transition('active => *', [animate(500)])
    ]),
    trigger('hideShow', [
      state('show', style({opacity: 1})),
      state('hide', style({opacity: 0})),
      transition('hide <=> show', [animate(500)])
    ])
  ]
})
export class Search {

  private searchTermStream = new Subject<string>();
  stateExpression: string;
  stateExp: string;

  constructor (private wiki: WikiService) { }

  onClick():void {
    this.stateExpression = 'active';
    this.stateExp = 'hide';
  }

  onBlur(): void { this.stateExp = 'show'; }

  search(term: string) { this.searchTermStream.next(term) }

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wiki.search(term));

}
