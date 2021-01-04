

var mqtt = require('mqtt')
//  broker IP is required
var client  = mqtt.connect('mqtt://15.207.229.174:1883');
// -----------------topic to subscribe--------------
client.subscribe("smarfactoryworx/noida/cnc1",(err)=>{
    if(!err) {
      console.log('connected')
    }else{
      console.log(`Error,${err}`)
    }

    
});
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    
  })
