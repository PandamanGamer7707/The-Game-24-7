const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE5OTM1ODQyMjM5NTEyNzE3.Xt-rCg.BMZ4D1ueTaADB1jppQDbSSxXSnc';

const PREFIX = '/';

bot.on('ready',() =>{
    console.log('This bot is online!');
})

bot.on('message', message =>{
    if(message.content === "Hello."){
        message.reply('Hi.')
    }
})

bot.on('message', message =>{
    if(message.content === "goodbye"){
        message.reply('Bye.')
    }
})

bot.on('message', message =>{
    var args = message.content.substring(PREFIX.length).split(" ")
    switch(args[0]){
        case 'drops':
            if(args[1] === 'hollow'){

                if(args[2] === 'soldier'){
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 61){
                        message.reply('2 souls.')
                    }
                    if(drop > 31 && drop < 61){
                        armor = (Math.floor(Math.random()*3)+1);
                        if(armor === 1){
                            message.reply('Helmet and 2 souls')
                        }
                        if(armor === 2){
                            message.reply('Chestplate and 2 souls')
                        }
                        if(armor === 3){
                            message.reply('Loincloth and 2 souls')
                        }
                    }
                    if(drop > 11 && drop < 31){
                        message.reply('Weapon they are holding and 2 souls.')
                    }
                    if(drop > 1 && drop < 11){
                        message.reply('Shield and 2 souls.')
                    }
                    if(drop === 1){
                        message.reply('Unknown Rare Drop and 2 souls.')
                    }
                }
                else if(args[2] === 'knight'){
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 61){
                        message.reply('2 souls.')
                    }
                    if(drop > 31 && drop < 61){
                        armor = (Math.floor(Math.random()*3)+1);
                        if(armor === 1){
                            message.reply('Helmet and 2 souls')
                        }
                        if(armor === 2){
                            message.reply('Chestplate and 2 souls')
                        }
                        if(armor === 3){
                            message.reply('Loincloth and 2 souls')
                        }
                    }
                    if(drop > 11 && drop < 31){
                        message.reply('Weapon they are holding and 2 souls.')
                    }
                    if(drop > 1 && drop < 11){
                        message.reply('Shield and 2 souls.')
                    }
                    if(drop === 1){
                        message.reply('Unknown Rare Drop and 2 souls.')
                    }

                }
                else{
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 50){
                        message.reply('1 broken straightsword and 1 soul.')}
                    else{
                        message.reply('1 soul.')}}}
            else if(args[1] === 'hot'){
                if(args[2] === 'dog'){
                    message.reply('1 soul.')
                }
            }
            else if(args[1] === 'crag'){
                if(args[2] === 'spider'){
                    message.reply('1 soul.')
                }
            }
            else if(args[1] === 'undead'){
                if(args[2] === 'drake'){
                    message.reply('1 Dragon Scale and 8 souls.')
                }
            }
            else if(args[1] === 'ent'){
                var drop =(Math.floor(Math.random()*100)+1);
                if(drop > 48){
                    message.reply('1 Soul')
                }
                if(drop > 32 && drop < 48){
                    message.reply('1 Purple Moss and 1 Soul')
                }
                if(drop > 16 && drop < 32){
                    message.reply('1 Blooming Purple Moss and 1 Soul')
                }
                if(drop < 16){
                    message.reply('1 Unknown Item and 1 Soul')
                }
            }
            else if(args[1] === 'lightning'){
                if(args[2] === 'drake'){
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 5){
                        message.reply('1 Soul.')
                    }
                    if(drop < 5){
                        message.reply('Unknown Drop and 1 Soul.')
                    }
                }
            }
            else if(args[1] === 'stone'){
                if(args[2] === 'knight'){
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 50){
                        message.reply('6 souls.')
                    }
                    if(drop > 25){
                        message.reply('Unknown Drop 1 and 6 souls.')
                    }
                    if(drop <= 25){
                        message.reply('Unknown Drop 2 and 6 souls.')
                    }
                }
            }
            else if(args[1] === 'crystal'){
                if(args[2] === 'golem'){
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 8){
                        message.reply('2 souls.')
                    }
                    if(drop <= 8){
                        message.reply('Unknown Drop and 2 souls.')
                    }
                }
            }
            else if(args[1] === 'bolder'){
                if(args[1] === 'ogre'){
                    var drop =(Math.floor(Math.random()*100)+1);
                    if(drop > 55){
                        message.reply('5 souls.')
                    }
                    if(drop > 5 && drop < 55){
                        message.reply('Unknown Drop 1 and 5 souls.')
                    }
                    if(drop <= 5){
                        message.reply('Unknown Drop 2 and 5 souls.')
                    }
                }
            }
            else if(args[1] === 'halbart'){
                if(args[2] === 'black'){
                    if(args[3] === 'knight'){
                        var drop =(Math.floor(Math.random()*100)+1);
                        if(drop > 61){
                            message.reply('8 souls.')
                        }
                        if(drop > 41 && drop < 61){
                            message.reply('Black Knights Halbart and 8 souls.')
                        }
                        if(drop > 23 && drop < 41){
                            message.reply('Unknown Drop 1 and 8 souls.')
                        }
                        if(drop > 5 && drop < 23){
                            message.reply('Unknown Drop 2 and 8 souls.')
                        }
                        if(drop <= 5){
                            message.reply('Black Knights Shield and 8 souls')
                        }
                    }
                }
            }
            break;
        case 'beastiary':
            message.reply('Creatures added are : Bolder Ogre, Crag Spider, Crystal Golem, Ent, Halbart Black Knight, Hollow, Hollow Soldier, Hollow Knight, Hot Dog, Lightning Drake, Stone Knight, Undead Drake.')
            break;
        case 'commands':
            message.reply('List of in-game creatures- /beastiary, List of creature drops - /drops (creature name), Number of Deaths - /deaths (player name).')
            break;
        case 'deaths':
            if(args[1] === 'joey'){
                message.reply('Joey has 2 deaths.')
            }
            if(args[1] === 'augustus'){
                message.reply('Augustus has 6 deaths.')
            }
            if(args[1] === 'william'){
                message.reply('William has 24 deaths.')
            }
            if(args[1] === 'nathan'){
                message.reply('Nathan has 0 deaths.')
            }
            if(args[1] === 'nate'){
                message.reply('Nate has 8 deaths.')
            }
            if(args[1] === 'luke'){
                message.reply('Luke had 0 deaths.')
            }
        
    }  
})
bot.login(token);