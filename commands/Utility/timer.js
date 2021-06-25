const { Command, Parameter } = require('@pat.npm.js/discord-bot-framework');
const { MessageEmbed } = require('discord.js');
const seconds = 1
const startingCounter = 2
let counter = startingCounter
let counterr = "."
const startingCounterr = 0
let importantData = 'https://ourglass.io/stake is being released at 11pm GMT! Follow the count down below:'

const fetchData = async () => {
  importantData = 'https://ourglass.io/stake is being released at 11pm GMT! Follow the count down below:'
}

 getText = () => {
  return `${importantData}\n\nUpdating in ${counter} minutes...${counterr}`
}

const updateCounter = async (messagee) => {
  messagee.edit(getText())
  counter -= seconds

  if (counter <= 0) {
    counter = startingCounterr
    counterr = "\n**https://ourglass.io/stake has been released!**"
    await fetchData()
  }

  setTimeout(() => {
    updateCounter(messagee)
  }, 60000 * seconds)
}

module.exports = new Command()
    .setName('timer')
    .setGroup('Utility')
    .setType('Guild')
    .addPermissions('')
    
    .setCallback(async function(message, args, client) {        
        await fetchData()
        const guild = client.guilds.cache.first()
        const channel = guild.channels.cache.get('820358814217928705')

        const messagee = await channel.send(getText())
        updateCounter(messagee)
        


    });