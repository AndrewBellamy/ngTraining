import { style, animate, transition, state, trigger } from '@angular/animations';

export class Animations {
    static styleStart = style({transform: 'translateX(-100%)', opacity: 0});
    static styleCurrent = style({transform: 'translateX(0)', opacity: 1});
    static styleEnd = style({transform: 'translateX(100%)', opacity: 0});

    static styleShadowed = style({boxShadow: '5px 10px 18px #888888'})
    static styleUnshadowed = style({boxShadow: 'none'})

    static page = trigger('routeAnimation', [
        state('*', Animations.styleCurrent),
        transition('void => *', [Animations.styleStart, animate('0.5s ease-in-out')]),
        transition('* => void', animate('0.5s ease-in-out', Animations.styleEnd))
    ]);

    static shadow = trigger('hoverAnimation', [
        state('off', Animations.styleUnshadowed),
        state('on', Animations.styleShadowed),
        transition('off => on', animate('0.2s ease-in')),
        transition('on => off', animate('0.2s ease-out'))
    ])
}