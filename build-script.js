var cmd=require('node-cmd');

// cmd.run('cd C:\\Users\\sandeepkumar.g\\Desktop\\nodebook\\bot_platform-fe');
cmd.get(
  'ng build --prod',
  function(err, data, stderr){
    LoggingService.log('the current working dir is : ',data, err)
  }
);

// cmd.run('ng build --prod');
