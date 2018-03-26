import { trigger, state, animate, transition, style, query, stagger,group, animateChild, keyframes} from '@angular/animations';

export const fractalAnimation =
trigger('fractalAnimation', [
  state('left', style({
    transform: 'translateX(0)'
  })),
  state('right', style({
    transform: 'translateX(90%%)'
  })),
  transition('left <=> right', animate(1000))
]);

export const openCloseAnimation = 
trigger('openClose', [
  state('collapsed, void', style({height: '0px', color: 'maroon', borderColor: 'maroon'})),
  state('expanded', style({height: '100px', borderColor: 'green', color: 'green'})),
  transition(
      'collapsed <=> expanded', [animate(500, style({height: '150px', borderColor: 'pink'})), animate(500)])
])

// export const rotatorAnimation = 
// trigger('rotate', [
  
// ])

// export const fractalAnimation =
// trigger('fractalAnimation', [
//   state('down', style({
//     transform: 'translateY(0)'
//   })),
//   state('up', style({
//     transform: 'translateY(91%)'
//   })),
//   transition('down <=> up', animate(300))
// ]);


// export const testAnimation =
// trigger('testAnimation', [
//   transition('* => *', [
//     // this hides everything right away
//     query(':enter', style({ opacity: 0 })),
    
//     // starts to animate things with a stagger in between
//     query(':enter', stagger('100ms', [
//       animate('1s', style({ opacity: 1 }))
//     ])
//   ])
// ]);


// export const imageAnimation = 
// trigger('image', [
//   transition(':enter', [
//     query('*', [
//       style({ transform: 'translateX(200px)', opacity: 0 }),
//       stagger(100, [
//         animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
//       ])
//     ])
//   ])
// ]);

// export const parentAnimation = 
// trigger('parent', [
//   transition(':enter', [
//   style({ transform: 'translate(-100px)' }),
//   animate('500ms', style({ transform: 'translate(0px)' }))
//   ])
// ]);
// export const childAnimation = 
// trigger('child', [
//   transition(':enter', [
//   style({ opacity:0 }),
//   animate('0.5s', style({ opacity:1 }))
//   ])
// ]);

// export const previewAnimation = 
// trigger('preview', [
//   //...
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'absolute', left: '0%' })),
//     query(':enter', style({ left: '100%' })),
//     group([
//       query(':leave', group([
//         animateChild(),
//         animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity:0, left:'-100%' }))
//       ]), {optional: true}),
//       query(':enter', group([
//         animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*')),
//         animateChild()
//       ]), { delay: 200 }),
//     ])
//   ])
// ]);
    