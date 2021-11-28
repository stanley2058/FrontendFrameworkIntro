import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css'],
})
export class ReasonComponent implements OnInit {
  private readonly adjectives = [
    '客戶那邊的',
    '我們的',
    '負責談需求的',
    '負責這個部分的',
    '直到上線前一天',
    '(雙手一攤)',
  ];
  private readonly nouns = [
    '專案經理',
    '主管',
    '工程師',
    '設計師',
    '外包',
    'User',
    '聯絡窗口',
  ];
  private readonly verbs = [
    '當初沒有講清楚',
    '一直換',
    '說他肚子不舒服',
    '擺爛不想做了',
    '突然開始放長假',
    '去生小孩了',
    '離職了',
    '都沒甚麼 sense',
    '都沒有跟我講',
    '以為這些不用做',
    '一直在狀況外',
    '做事拖拖拉拉',
    '還搞不清楚狀況',
    'Quality 有問題',
    '東西一直改',
    '在整我',
    '突然就沒來了',
  ];
  objText = '';
  verbText = '';

  constructor() {}

  ngOnInit(): void {
    this.generateRandomText();
  }

  generateRandomText() {
    const randomAdjectiveIndex = Math.floor(
      Math.random() * this.adjectives.length
    );
    const randomNounIndex = Math.floor(Math.random() * this.nouns.length);
    const randomVerbIndex = Math.floor(Math.random() * this.verbs.length);

    this.objText = `${this.adjectives[randomAdjectiveIndex]}${this.nouns[randomNounIndex]}`;
    this.verbText = this.verbs[randomVerbIndex];
  }
}
