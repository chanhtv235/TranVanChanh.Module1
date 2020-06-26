    // Có thuộc tính mô tả kênh hiện thời đang phát.
    // Có thuộc tính mô tả âm lượng hiện thời
    // Có thuộc tính mô tả trạng thái bật, tắt.
    // Có tính năng điều khiển chuyển đến kênh nào đó.
    // Có tính năng điều khiển âm lượng.
function Tivi() {
    this.status= 'Off';
    this.channel = 0;
    this. volume = 0;
    this.turnOnTV =function () {
        this.status = 'On';
    };
    this.turnOffTV =function () {
        this.status = 'Off';
    };
    this.getStatusTV =function (Remote) {
        return this.status;
    };
    this.setChannelTV = function (channel) {
        this.channel=channel;
    };
    this.getChannelTV = function () {
        return this.channel;
    };

    this.upVolumeTV =function (number) {
        this.volume += number;
    };
    this.downVolumeTV =function (number) {
        this.volume -= number;
    };
    this.getVolumeTV = function () {
        return this.volume;
    };
}

