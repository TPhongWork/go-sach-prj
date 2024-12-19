import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ribbon-slides',
  templateUrl: './ribbon-slides.component.html',
  styleUrls: ['./ribbon-slides.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class RibbonSlidesComponent implements OnInit, OnDestroy {
  @Input() imageUrls: string[] = [];  // Mảng ảnh được truyền vào
  currentIndex: number = 0;           // Chỉ số ảnh hiện tại
  autoSlideInterval: any;             // Thời gian tự động chuyển ảnh
  sliding: boolean = false;           // Kiểm tra xem ảnh có đang chuyển hay không
  transitionEnabled: boolean = true;  // Kiểm tra có thể chuyển ảnh hay không

  ngOnInit() {
    // Kiểm tra mảng ảnh khi component được khởi tạo
    if (this.imageUrls && this.imageUrls.length === 0) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    // Dọn dẹp interval khi component bị hủy
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Hàm chuyển ảnh tiếp theo
  nextImage() {
    if (!this.sliding) {
      this.sliding = true;
      this.transitionEnabled = true;

      this.currentIndex++;

      // Khi đến ảnh cuối thì quay lại ảnh đầu tiên
      if (this.currentIndex === this.imageUrls.length) {
        this.currentIndex = 0;
      }

      setTimeout(() => {
        this.sliding = false;
      }, 1000);
    }
  }

  // Hàm chuyển ảnh trước đó
  prevImage() {
    if (!this.sliding) {
      this.sliding = true;
      this.transitionEnabled = true;

      if (this.currentIndex === 0) {
        this.currentIndex = this.imageUrls.length - 1;
      } else {
        this.currentIndex--;
      }

      setTimeout(() => {
        this.sliding = false;
      }, 1000);
    }
  }

  // Hàm khởi động auto slide
  startAutoSlide() {
    // Kiểm tra nếu autoSlideInterval chưa được khởi động
    if (!this.autoSlideInterval) {
      this.autoSlideInterval = setInterval(() => {
        this.nextImage();
      }, 3000);  // Chuyển ảnh tự động mỗi 3 giây
    }
  }

  // Hàm dừng auto slide
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null; // Reset lại interval
    }
  }

  // Hàm trackBy cho ngFor để tối ưu hóa render
  trackByFn(index: number, item: any) {
    return index;
  }
}
