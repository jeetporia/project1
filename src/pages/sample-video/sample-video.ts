import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer , VideoOptions } from '@ionic-native/video-player';

/**
 * Generated class for the SampleVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-video',
  templateUrl: 'sample-video.html',
})
export class SampleVideoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private videoPlayer : VideoPlayer) {
  }
}