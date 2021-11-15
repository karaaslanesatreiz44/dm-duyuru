const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
exports.run = async(client, message, args) => {
const duration = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(`${client.user.username} İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
.addField("Gecikme", `**${client.ws.ping}** ms`, true)
.addField("Çalışma Süresi", duration, true)
.addField("Kullanıcılar", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("Kanallar", client.channels.cache.size, true)
.addField("Sunucular", client.guilds.cache.size.toLocaleString(), true)
.addField("Discord.JS Sürümü", Discord.version, true)
.setFooter(`${message.author.tag} istedi...`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
return message.channel.send(embed)
};
exports.conf = {
aliases: ['i', 'istatistik', 'bot-bilgi'],
permLevel: 0
};
exports.help = {
name: "botbilgi"
}; 
