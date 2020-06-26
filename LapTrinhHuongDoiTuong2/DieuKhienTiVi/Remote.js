// Có thuộc tính mã.
// Có tính năng điều khiển chuyển kênh.
// Có tính năng điều khiển âm lượng.
function Remote(Tivi) {

    this.turnOn = function () {
      Tivi.turnOnTV();
    };
    this.turnOff = function () {
        Tivi.turnOffTV();
    };
    this.setChannel = function (number) {
        Tivi.setChannelTV(number)
    };
    this.upVolume = function (number) {
        Tivi.upVolumeTV(number)
    };
    this.downVolume = function (number) {
        if (Tivi.getVolumeTV()>number){
            Tivi.downVolumeTV(number)
        }
    };
    this.getVolume = function () {
        return this.volume
    };
}
