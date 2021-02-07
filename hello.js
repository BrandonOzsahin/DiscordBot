module.exports ={
    name: 'hello',
    description: "Hello to the user",
    execute(message, args){
        message.channel.send('Hello {user}');

    }
}