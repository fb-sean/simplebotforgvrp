const Discord = require('discord.js'); // DISCORD.JS my friend

client.on('message', async message => { // le event

    if (!message.guild.id === "735628370624381039") return; // if nich gvrp RETURN 
    if(message.channel.type === 'dm') return; //if channel type is DM, it won't run
    let channel = message.guild.channels.cache.get('847216168997879869') // get le channel
  
    if(message.channel == channel){ // if channel = our love channel
    let content = message.attachments.first() || message.content.includes("https://") // CHECKING YOUR SHITY MSG
    if(!content){
  
        if(message.author.bot) return  // NO ONE NEEDS BOTS
        await message.delete() // Delete le msg
        
        setTimeout(function(){ // le funktiona
        message.channel.send(`In diesem Channel werden nur Bilder gepostet ${message.author}!`).then(m => m.delete({timeout: 5000}) ) // Ende dings bums 
        }, 500) // timeout
    }
    }    


    if (!message.guild.id === "735628370624381039") return; // if nich gvrp RETURN 
    if(message.channel.type === 'dm') return; //if channel type is DM, it won't run
    let channel = message.guild.channels.cache.get('847216171555225610') // get le channel
  
    if(message.channel == channel){ // if channel = our love channel
    let content = message.content // CHECKING YOUR SHITY MSG
    if(content){
  
        if(message.author.bot) return  // NO ONE NEEDS BOTS
        await message.delete() // Delete le msg
        
        setTimeout(function(){ // le funktiona
        const m = await message.channel.send(`
        Wunsch von ${message.author}:

        ${content}
        

        Du willst auch ein wunsch äußern dann schreib einfach in diesen Channel!
        `) // Output von wunsch dies das

        m.react("<:yes:804503913805643796>") // le yes
        m.react("<:no:804503882885234739>") // le no
        }, 500) // timeout
    }
    }    

    if (!message.guild.id === "735628370624381039") return; // if nich gvrp RETURN 
    if(message.channel.type === 'dm') return; //if channel type is DM, it won't run
    let channel = message.guild.channels.cache.get('854845996084887612') // get le channel
  
    if(message.channel == channel){ // if channel = our love channel
    let content = message.content // CHECKING YOUR SHITY MSG
    if(content){
  
        if(message.author.bot) return  // NO ONE NEEDS BOTS
        await message.delete() // Delete le msg
        
        setTimeout(function(){ // le funktiona
        const m = await message.channel.send(`
        Kleidungswunsch von ${message.author}:

        ${content}
        

        Du willst auch ein wunsch äußern dann schreib einfach in diesen Channel!
        `) // Output von wunsch dies das

        m.react("<:yes:804503913805643796>") // le yes
        m.react("<:no:804503882885234739>") // le no
        }, 500) // timeout
    }
    }   

  });

client.login("TOKEN") // TOKEN LOGIN

// I LOVE GVRP <3