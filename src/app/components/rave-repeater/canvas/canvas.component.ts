import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, OnChanges, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';


@Component({
  selector: 'app-rave-repeater-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements OnInit, OnChanges {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  private running: boolean;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.running = true;
    this.ngZone.runOutsideAngular(() => this.paint(0, 0));
  }

  ngOnDestroy() {
    this.running = false;
  }

  ngOnChanges() {

  }

  private paint(prevX: number, prevY:number) {
    // Check that we're still running.
    if (!this.running) {
      return;
    }
  
    // Paint current frame
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
  
    // // Draw background (which also effectively clears any previous drawing)
    // ctx.fillStyle = 'rgb(255, 255, 255)';
    // ctx.fillRect(0, 0, 500, 500);
  
    // Advance flock. This updates the positions of all objects.
    // this.flock.tick();
  
    // Draw flock
    // let color = tinycolor("red");
    let newX = prevX + 10;
    let newY = prevY + 10;
    ctx.beginPath();              
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";  // Green path
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(newX, newY);
    ctx.stroke();  // Draw it
    
  
    // Schedule next
    requestAnimationFrame(() => this.paint(newX, newY));
  }

  getRandomColor() {

  }

}
