import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'challenge-11-mar-app';
  isPlay: boolean = false;
  label: string = 'Play'
  icon: string = 'fa-solid fa-play'
  isDisable: boolean = true;
  idx: number = 0;

  video = {
    title: 'Oceans',
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
  };

  @ViewChild('myVideo') myVideo!: ElementRef;

  onClick(event: any) {
    this.isDisable = !this.isDisable;
    this.isPlay = !this.isPlay;

    console.log(event)
    if(this.myVideo.nativeElement.paused == false) {
      this.icon = 'fa-solid fa-play'
    } else {
      this.icon = 'fa-solid fa-pause'
    }
  }

  onPlay() {
    this.isPlay = !this.isPlay;
    this.isDisable = !this.isDisable;

    if(this.isPlay == true) {
      this.myVideo.nativeElement.play();
      this.icon = 'fa-solid fa-pause'
    }
    else {
      this.myVideo.nativeElement.pause();
      this.icon = 'fa-solid fa-play'
    }
  }

  onRestart() {
    this.icon = 'fa-solid fa-pause'
    this.isPlay = true;
    this.myVideo.nativeElement.currentTime = 0;
    this.myVideo.nativeElement.play();
  }

  forward() {
    this.icon = 'fa-solid fa-pause'
    this.isPlay = true;
    this.myVideo.nativeElement.currentTime += 5;
  }

  backward() {
    this.myVideo.nativeElement.currentTime -= 5;
  }
}
