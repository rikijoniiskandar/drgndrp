import { inject } from "@angular/core";
import { PageLayout } from "../../enums/PageLayout";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PageLayoutService } from "./page-layout.service";

/**
   * Resolver sets the page layout type,
   * ensuring that the layout is available before navigating to the component.
  **/
export const PageLayoutResolver = (layout: PageLayout): ResolveFn<void> => {
  return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    inject(PageLayoutService).SetLayout(layout)
  }
}
