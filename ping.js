module.exports ={
    name: 'ping',
    description: "this pings the bot",
    execute(message, args){
        if(message.member.roles.cache.has('689864329498984524' && '689863479120625786' && '689863714387918858')){
             message.channel.send('pong');
        }
        else{
            message.channel.send('No permission');
        }

    }
}