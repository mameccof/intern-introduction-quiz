import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnDestroy {
  constructor(private router: Router) {}
  @ViewChild('scanner') private scanner!: ZXingScannerComponent;

  hasDevices!: boolean;

  _qrstring!: string;

  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  ngOnDestroy() {
    this.scanner.reset();
  }

  onDeviceSelectChange(selected: string) {
    console.debug('Selection changed: ', selected);
  }

  onCamerasFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    this.hasDevices = true;
  }

  onScanSuccess(result: string) {
    this._qrstring = result;
    const url_splited: string[] = this._qrstring.split('/');
    this.router.navigate([`/start/${url_splited.pop()}`]);
  }
}
