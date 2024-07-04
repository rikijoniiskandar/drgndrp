import { Injectable } from '@angular/core';
import { PageLayout } from '@shared/enums/PageLayout';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {

  private LayoutSubject = new Subject<PageLayout>();

  public Layout$ = this.LayoutSubject.asObservable()

  constructor() { }

  SetLayout(v: PageLayout){
    this.LayoutSubject.next(v)
  }
}
