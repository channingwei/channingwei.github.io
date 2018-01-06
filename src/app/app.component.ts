import { Component } from '@angular/core';
import { PageService } from './app.service';
import { trigger, keyframes, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageService],
  animations: [
    trigger('wordFlyIn', [
      state('word-c', style({ transform: 'translateX(0)' })),
      state('word-h', style({ transform: 'translateX(0)' })),
      state('word-a', style({ transform: 'translateX(0)' })),
      state('word-n-0', style({ transform: 'translateX(0)' })),
      state('word-n-1', style({ transform: 'translateX(0)' })),
      state('word-i', style({ transform: 'translateX(0)' })),
      state('word-n-2', style({ transform: 'translateX(0)' })),
      state('word-g', style({ transform: 'translateX(0)' })),
      state('word-k', style({ transform: 'translateX(0)' })),
      state('word-u', style({ transform: 'translateX(0)' })),
      state('word-o', style({ transform: 'translateX(0)' })),
      transition('void => word-c', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-500%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-h', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-500%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)  translateY(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-a', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-450%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-n-0', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-400%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-n-1', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(0) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-i', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(100%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-n-2', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(100%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 1 })
        ]))
      ]),
      transition('void => word-g', [
        animate(2500, keyframes([
          style({ opacity: 0, transform: 'translateX(350%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 0.4 }),
          style({ opacity: 1, transform: 'rotate(-20deg)', offset: 0.6 }),
          style({ opacity: 1, transform: 'rotate(0deg)', offset: 0.8 }),
          style({ opacity: 1, transform: 'rotate(10deg)', offset: 0.9 }),
          style({ opacity: 1, transform: 'rotate(0deg)', offset: 1 })
        ]))
      ]),
      transition('void => word-k', [
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateX(350%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 0.5 }),
          style({ opacity: 0, transform: 'translateX(700%) translateY(-700%)', offset: 1 })
        ]))
      ]),
      transition('void => word-u', [
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateX(400%) translateY(-200%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0) translateY(0)', offset: 0.5 }),
          style({ opacity: 0, transform: 'translateX(700%) translateY(-700%)', offset: 1 })
        ]))
      ]),
      transition('void => word-o', [
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateX(500%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 0.5 }),
          style({ opacity: 0, transform: 'translateX(700%) translateY(-700%)', offset: 1 })
        ]))
      ])
    ]),
    trigger('hover', [])
  ]
})
export class AppComponent {
  words = [{ char: 'C', trigger: 'word-c' }, { char: 'h', trigger: 'word-h' }, { char: 'a', trigger: 'word-a' }, { char: 'n', trigger: 'word-n-0' }, { char: 'n', trigger: 'word-n-1' }, { char: 'i', trigger: 'word-i' }, { char: 'n', trigger: 'word-n-2' }, { char: 'g', trigger: 'word-g' }, { char: 'K', trigger: 'word-k' }, { char: 'u', trigger: 'word-u' }, { char: 'o', trigger: 'word-o' }];
  topThreePapers = [];

  constructor(private pageService: PageService) {
    pageService.topThreePages().then(res => {
      this.topThreePapers = res.json().pages;
    }).catch(err => {
      console.log(err);
    });
  }

  /**
   * 删除'K'、'u'、'o'
   * @param {any} event
   * @param {any} index
   * @memberof AppComponent
   */
  animationDone(event, index) {
    if (event.toState === 'word-k' || event.toState === 'word-u' || event.toState === 'word-o') {
      event.element.remove();
    }
    // 减少angular自动渲染DOM带来的元素移动的突兀性
    // if (event.toState === 'word-k') {
    //   setTimeout(() => {
    //     document.getElementById('top').style.transform = 'translateX(-200px)';
    //   }, 50);
    //   setTimeout(() => {
    //     document.getElementById('top').style.transform = 'translateX(0)';
    //   }, 300);
    // }
  }

  /**
   * view the whole list
   */
  toList() {
    alert('Null');
  }

  /**
   * view the paper
   */
  toPaper(paper) {
    alert('Not prepared');
  }

}
