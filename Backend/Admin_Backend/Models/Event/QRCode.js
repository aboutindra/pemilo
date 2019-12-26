class QRCode {
    async convertQRLink(qrCol, linkParam) {
        console.log(linkParam.admins_id, linkParam.events_id);
        let QRLink = "https://pemilo.id/" + (linkParam.admins_id).toString() + "/" + (linkParam.events_id).toString() + "/";
        let insertQRLink = await qrCol.insertOne({events_id: linkParam.events_id, link: QRLink});

        if (insertQRLink) {
            return QRLink
        } else {
            return false;
        }

    }
}

module.exports = QRCode;