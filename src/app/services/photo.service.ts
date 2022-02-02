import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: RequestPhoto[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 20
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime() + '.jpeg';

    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

export interface RequestPhoto {
  filepath: string;
  webviewPath: string;
}
