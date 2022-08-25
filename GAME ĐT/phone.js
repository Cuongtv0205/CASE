class Mobile {

    constructor(_name) {
        this.name = _name;
        this.battery = 100;
        this.draft = '';
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }

    checkStatus() {
        return this.status;
    }

    onOff() {
        // đang tắt -> bật
        // đang bật -> tắt
        this.status = !this.status;
    }
    writting(text) {
        this.draft = text;
        this.battery--;
    }

    sendMessage(phone) {
// this: điện thoại hiện tại
        //phone: điện thoại gửi sang
        // công việc 1: chuyển thư nhắn nháp của this -> hộp thư đến của phone
        phone.inbox.push(this.draft);
        this.battery--;
        //2: chuyển tin nhắn nhát của this -> hộp thư đến của this
        this.outbox.push(this.draft);
        this.battery--;
        // 3: xóa tin nhắn nháp
        this.draft = ''
        this.battery--;
    }
    getInbox() {
        return this.inbox;
        this.battery--;
    }
    getOutbox() {
        return this.outbox;
        this.battery--;
    }
}
