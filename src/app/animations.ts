import {
  trigger, animateChild, group,
  transition, animate, style, query, sequence
} from '@angular/animations';


// Routable animations
export const fader =
  trigger('routeAnimation', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        }),
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      query(':leave', [
        animate('200ms ease',
          style({ opacity: 0 })
        )
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease',
          style({ opacity: 1 })
        ),
      ], { optional: true })
    ]),
  ]);