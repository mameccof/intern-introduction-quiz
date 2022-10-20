import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnDestroy {
  @ViewChild('scanner') private scanner!: ZXingScannerComponent;

  hasDevices!: boolean;
  hasPermission!: boolean;
  qrResultString!: string;

  _qrstring!: string;

  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  ngOnDestroy() {
    this.scanner.reset();
  }

  onDeviceSelectChange(selected: string) {
    console.debug('Selection changed: ', selected);
    // this.currentDevice = this.availableDevices.find(
    //   (device) => device.deviceId === selected
    // );
  }

  onCamerasFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    this.hasDevices = true;
  }

  onScanSuccess(result: string) {
    console.log(result);
    this._qrstring = result;
  }
}
