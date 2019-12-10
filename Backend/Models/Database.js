var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  event_code : String, // Nah event_code disini tuh di enkripsi dengan bcrypt terus nanti di compare sama plain text event_code nya apakah kunci nya benar
  organization_code : Number,
  selected_leader: Number, // Jika 0 (Belum memilih), Jika 1/2/3/dst Sudah memilih
  updated_at: { type: Date, default: Date.now },
});

var AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
    organization_name : String,
    organization_code : Number,
    balance : Number
});

var EventSchema = new mongoose.Schema({
  event_name : String,
  organization_name : String,
  organization_code : Number,
  total_user : Number,
  start_event : Date,
  end_event : Date,
  event_code : String // Rumus event_code nya organization_code + event_name (ini masih plain text ya enggak di encrypt)
})

var LeaderSchema = new mongoose.Schema({
    event_id : String,
    leader_name : String,
    leader_code : Number, //Untuk parameter selected_leader
    leader_desc : String,
    leader_vision : String,
    leader_mission : String,
    leader_partai : String, //Bisa diisi dgn kelas(?)
    total_suara : Number
});

var User = mongoose.model('Users', UserSchema , 'users');
var Admin = mongoose.model('Admins', AdminSchema , 'admins');
var Event = mongoose.model('Events', EventSchema , 'events');
var Leader = mongoose.model('Leaders', LeaderSchema , 'leaders');

module.exports = {
  User : User,
  Admin : Admin,
  Event : Event,
  Leader : Leader
};