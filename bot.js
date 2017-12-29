const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(`© AJ Bot ™.`)

var channel =member.guild.channels.find('name', 'chat')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`© AJ Bot ™.`)

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});
client.login (process.env.BOT_TOKEN); 
client.on('ready', () => {
  client.user.setGame(`*Rando`,'https://www.twitch.tv/*Rando');
  console.log(' Game Is Online ');
});
const Eris = require("eris");
var iiserver = "380691386711801867";
var smart= new Eris(process.env.BOT_TOKEN);
 
smart.on("ready", ready => {
setInterval(function(){
    
                var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
			week = currentTime.getDay();
           
             
 
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
			}
smart.editChannel("393693489482694666", {name : "🏆 - Servers   「" + client.guilds.size + "」"})			
smart.editChannel("392659408905043979", {name : "👑 - Users 「" + client.users.size + "」"});
smart.editChannel("390112111105146880", {name : "🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」"}) 
smart.editChannel("390112110987968513", {name : "📅 - Date " + "「" + day + "-" + month + "-" + years + "」"})
smart.editChannel("390112111423913984", {name : "⌞ A ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ Ar ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ Ara ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ Arab ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ ArabJ ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ ArabJo ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ ArabJok ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ ArabJoke ⌝"})
smart.editChannel("390112111423913984", {name : "⌞ ArabJoker ⌝"})


}, 6000);
});
smart.connect(process.env.BOT_TOKEN)
client.on('message', message => {
	
		 if (message.content === "$server") {
	var year = message.guild.createdAt.getFullYear()
	var month = message.guild.createdAt.getMonth()
	var day = message.guild.createdAt.getDate()
		 let embed = new Discord.RichEmbed()
	
	.addField('**SERVER NAME💳**: ' , message.guild.name)
	.addField('**SERVER ID🆔** :' , message.guild.id)
	.addField(' SERVER VERIFICATIONLEVEL❓  : ' , message.guild.verificationLevel)
	.addField('SERVER REGION�� : ' , message.guild.region)
	.addField('CHANNELS SIZE🔋 : ' , message.guild.channels.size)
	.addField('DEFAULT CHANNEL1⃣ : ' , message.guild.defaultChannel)
	.addField('ROLES🔢 : ' , message.guild.roles.size)
	.addField('SERVER CREATED IN🕑 : ' ,year + "-"+ month +"-"+ day)
	.addField('MEMBERS📡 : ' , message.guild.memberCount)
	.addField('SERVER OWNER👑 : ' , message.guild.owner)
	.setColor("#51cde6")
    .setFooter(`© AJ Bot ™.`)
		  message.channel.sendEmbed(embed);
	} 
	
	});
const yt = require('ytdl-core');
client.on('message', message => {
  if (message.content.startsWith('$quran.1')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqqvpP8TVfk&t", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('$quran.2')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('$quran.3')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=mxUsXAwur5o&t=6s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('$quran.4')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('$quran.5')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=6Hzk5uPDaJk", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});
client.on('message', message => {
  if (message.content.startsWith('$quran.6')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=g46yT-neUnw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});

client.on('message', message => {
  if (message.content.startsWith('$quran.7')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=g46yT-neUnw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});
client.on("message", message => {
 if (message.content === "$quran") {

  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
     🕋 اوامر بوت القرآن الكريم 🕋

$quran.1 سورة البقرة كاملة عبد الباسط عبد الصمد🗣
$quran.2 سورة البقرة كاملة للشيخ مشاري العفاسي🗣
$quran.3 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي🗣
$quran.4 سورة الفاتحه بصوت الشيخ عبد الباسط عبد الصمد🗣
$quran.5 سورة يس كاملة للشيخ مشاري بن راشد العفاسي🗣
$quran.6 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي🗣
$quran.7 سورة يوسف بصوت الشيخ مشاري بن راشد العفاسي🗣

$quran.stop لآيقاف القران الكريم

`)


message.channel.sendEmbed(embed)

}
});
client.on("message", message => {
	if(message.content === "$quran.stop" ) {
					var servers = {};
  
			  if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	  
	}
  });
  client.on('message', message => {
	if(message.content.startsWith ('$members')) {
		if(!message.channel.guild) return;
	  let embed = new Discord.RichEmbed()
	  .setColor('RANDOM')
			.setThumbnail(message.author.avatarURL)
		.setFooter(message.author.username, message.author.avatarURL) 
  
	  .setDescription(`**🌷| Members info**
	  
  **:green_heart: | Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: | Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: | DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: | Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
  
		  message.channel.send()
  
  message.channel.sendEmbed(embed)
  }
  });
client.on('message', message => {
  if (message.content.startsWith("$avatar")) {
                     if(!message.channel.guild) return message.reply(':x:  **الاوامر مو فى الخاص**');

      var mentionned = message.mentions.users.first();
  var zead;
    if(mentionned){
        var zead = mentionned;
    } else {
        var zead = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${zead.avatarURL}`)
    message.channel.sendEmbed(embed);
    message.react("??")
  }
});
client.on('message', message => {
    if (message.content === "$date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
			اليوم = currentTime.getDate();
			
			var Date15= new Discord.RichEmbed()
			.setTitle("**Date - التاريخ**")
			.setTitle("  ")
			.setColor('RANDOM')
			.setTimestamp()
			.setDescription( "⌞"+ " " + اليوم + "-" + الشهر + "-" + السنة + " " + "⌝")
			 message.channel.sendEmbed(Date15);
    }
});
const pgx = new Discord.Client();
client.on('message', message => {
		if (message.content === "$time") {
				if (!message.channel.guild) return message.reply('** This command only for servers **');  
var currentTime = new Date(),
				hours = currentTime.getHours() + 0 ,
				minutes = currentTime.getMinutes(),
				seconds = currentTime.getSeconds();

				if (minutes < 10) {
						minutes = '0' + minutes;
				}
				var suffix = 'صباحاَ';
				if (hours >= 12) {
						suffix = 'مساء';
						hours = hours - 1
				}
				if (hours == 0) {
						hours = 12;
				}

						var Date15= new Discord.RichEmbed()
						.setTitle("**Time - الساعة**")
						.setTitle("  ")
						.setColor('RANDOM')
						.setTimestamp()
						.setDescription( "⌞"+ " " + hours + ":" + minutes + " " + "⌝")
						 message.channel.sendEmbed(Date15);
		}
});

const adkar = [
	'**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
	'**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
	'**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
	'**‏اذكار  |  **أستغفر الله .',     
	'**‏اذكار  | **الْلَّهُ أَكْبَرُ',
	'**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
	'**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
	'**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
	'**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
	'**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
	'**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
	'‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
	'**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
	'**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
	'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
	'**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
	'**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
	'**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
	'**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
	'**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
	'**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
	'**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
	'**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
	'**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
	'**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
	'**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
	'**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
	'**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
	'**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
	'**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
	'**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('$اذكار')) {
	if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("**اذكار**")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
				 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
client.on("message", message => {
	var args = message.content.substring(prefix.length).split(" ");
	if (message.content.startsWith(prefix + "clear")) {
		if(!message.channel.guild) return message.reply('**:x: هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
	title: "Done | تــم",
	color: 0x06DF00,
	description: "تم مسح الرسائل بنجاح",
	footer: {
		text: "© AJ Bot ™."
  
}
}}).then(msg => {msg.delete(3000)});
				  }


});
const moment = require('moment');
client.login(process.env.BOT_TOKEN);

client.on('message', message => {
	if (message.content.startsWith('$ping')) {
			   if(!message.channel.guild) return;
	
	if (message.author.bot) return;
		message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
		}
	
	});
client.on('message', message => {
	if(message.content == '$adminbot') {
			 if(!message.author.id === '384722029427032075') return;
	var gimg;
	var gname;
	var gmemb;
	var gbots;
	var groles;
	var servers = client.guilds;
	servers.forEach((g)=>{
	gname = g.name;
	gimg = g.iconURL;
	gmemb = g.members.size;
	gbots = g.members.filter(m=>m.bot).size;
	groles = g.roles.map(r=> {return r.name});
	let serv = new Discord.RichEmbed()
	.setAuthor(gname,gimg)
	.setThumbnail(gimg)
	.addField('Server bots',gbots)
	.addField('Server Member Count',gmemb = g.members.size)
	.setColor('RANDOM')
	message.channel.send(`
	Server Name : **${gname}**
	Server MemberCount : **${gmemb} **
			
			`);
		  message.channel.sendEmbed(serv);
	}) 
	}
	});
	client.on("message", message => {
		if (message.content === "$help") {
		 const embed = new Discord.RichEmbed() 
			 .setColor("#ffff00")
			 .setFooter('© AJ Bot ™.')
			 .setThumbnail(message.author.avatarURL)
			 .setDescription(`
  **✨Administrationr Commands | اوامر الاداره✨**
- $Kick / طرد شخص من السيرفر
- $ban / حظر شخص من السيرفر
- $clear / مسح المحادثات الكتابيه
- $mute / تحت الصيانه
- $unmute / تحت الصيانه
- $bc / ارسال رساله من خلال البوت = تحت الصيانة
  **🔩Bot Commands | اوامر البوت🔩**
- $support / عرض سيرفر المساعده
- $invite / رابط اضافه البوت
- $bot / معرفه عدد السيرفرات والمستخدمين
- $ping / عرض سرعه الاتصال 
- $info / عرض معلومات البوت
- $members / عرض عدد الاشخاص المتصلين
  **📡General Commands | الاوامر العامه📡**
- $id / عرض معلوماتك الشخصيه
- $server / عرض معلومات السيرفر
- $avatar / عرض صورتك الشخصيه
- $sav / عرض صورة السيرفر
- $say / البوت يكرر كلامك 
- $embed / البوت يكرر كلامك بطريقه اخرى
- $date / عرض اليوم + الشهر + السنه 
- $contact / لارسال رساله لصاحب البوت
- $roll / قرعه عشوائيا من 0 الى الرقم 100
  **🎶Music Commands | اوامر الاغاني🎶**
- $play / لتشغيل الاغنيه
- $skip / تخطي الاغنيه
- $volume / صوت البوت
- $pause / لايقاف الاغنيه موقتأ
- $resume / لاعاده تشغيل الاغنيه
  **🎮Games Commands  | اوامر الالعاب🎮**
- $لعبه اسئله / كت تويت
- $لاضهار بيت او شعر عن الحب / حب
- $لاضهار بيت او شعر عن الحياه / خواطر
  **🔰Special Commads | اوامر مميزه🔰**
- $welcomer / لتفعيل خاصيه الترحيب
- $bigmoji / لتكبير الايموجي
- $write / للكتابه بل ايموجي`)
	   message.author.sendEmbed(embed)
	   
	   }
	   });
		client.on('message', message => {
			if (message.author.boss) return;
			if (!message.content.startsWith(prefix)) return;
		  
			let command = message.content.split(" ")[0];
			command = command.slice(prefix.length);
		  
			let args = message.content.split(" ").slice(1);
		  
			if (command == "kick") {
						 if(!message.channel.guild) return message.reply('** This command only for servers**');
				   
			if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("البوت لا يملك صلاحيات الكيك");
			if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يملك صلاحيات الكيك");
			let user = message.mentions.users.first();
			let reason = message.content.split(" ").slice(2).join(" ");
		  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص المراد طرده**");
		  if (!message.guild.member(user)
		  .kickable) return message.reply("**لايمكنني طرد هذا الشخص**");
		  
			message.guild.member(user).kick();
		  
			const kickembed = new Discord.RichEmbed()
			.setAuthor(`تم طرد العضو`, user.displayAvatarURL)
			.setColor("RANDOM")
			.setTimestamp()
			.addField("**العضو اللي انطرد**",  '**[ ' + `${user.tag}` + ' ]**')
			.addField("**العضو اللي قام بالطرد**", '**[ ' + `${message.author.tag}` + ' ]**')
			.addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
			message.channel.send({
			  embed : kickembed
			  
			})
		  }
		  });
		  client.on('message', message => {
			if (message.author.boss) return;
			if (!message.content.startsWith(prefix)) return;
		  
			let command = message.content.split(" ")[0];
			command = command.slice(prefix.length);
		  
			let args = message.content.split(" ").slice(1);
		  
			if (command == "ban") {
						 if(!message.channel.guild) return message.reply('** This command only for servers**');
				   
			if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
			if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
			let user = message.mentions.users.first();
			let reason = message.content.split(" ").slice(2).join(" ");
		  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
			if (!message.guild.member(user)
		  .kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");
		  
			message.guild.member(user).ban();
		  
			const banembed = new Discord.RichEmbed()
			.setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
			.setColor("RANDOM")
			.setTimestamp()
			.addField("**العضو الي تبند:**",  '**[ ' + `${user.tag}` + ' ]**')
			.addField("**العضو اللي قام بالتبنيد:**", '**[ ' + `${message.author.tag}` + ' ]**')
			.addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
			message.channel.send({
			  embed : banembed
			})
		  }
		  });
		  client.on("message", message => {
			if (message.author.bot) return;
			
			let command = message.content.split(" ")[0];
			
			if (command === "$mute") {
				  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
			let user = message.mentions.users.first();
			
			let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
			if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
		  
			if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
			 let x5bz2 = new Discord.RichEmbed()
																	  .setColor("#008000")
										  .setDescription(":zipper_mouth: تم اسكات العضو")
										  message.channel.sendEmbed(x5bz2);
		  
			if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
		  
			if (message.guild.member(user).roles.has(muteRole.id)) {
			  
			} else {
			  message.guild.member(user).addRole(muteRole).then(() => {
			   
			  });
			}
		  
		  };
		  
			});
			const Random = [
				"https://i.imgur.com/BZhCIrX.gif",
				"https://i.imgur.com/VkCWPV2.gif",
				"https://i.imgur.com/3X9dmME.gif",
				"https://i.imgur.com/Gd2pPvf.gif",
				"https://i.imgur.com/S8b93f1.gif",
				"https://i.imgur.com/K8IuaSM.gif",
				"https://i.imgur.com/YB3y4MT.gif",
				"http://i.imgur.com/OTAeXcf.jpg",
				"http://i.imgur.com/ZYn8zWH.jpg",
				"http://i.imgur.com/piDWdUz.jpg",
				"https://i.imgur.com/aZtGZHN.gif",
				"https://i.imgur.com/TBShA0f.gif",
				"https://i.imgur.com/1I5LTqm.gif",
				"https://i.imgur.com/KDOE0hn.gif",
				"https://i.imgur.com/1iVFb8H.gif",
				"https://i.imgur.com/N8ShK7X.gif",
				"https://i.imgur.com/OlNdzhV.gif",
				"https://i.imgur.com/4mBnmEy.gif",
				"https://i.imgur.com/TPinfUc.gif"
			]
			
			
			client.on('message', message => {
				if (message.author.bot) return;
				if (message.content.startsWith('$cat')) {
				if(!message.channel.guild) return;
				var client= new Discord.RichEmbed()
				.setTitle("قطة")
				.setThumbnail(message.author.avatarURL)
				.setColor('RANDOM')
				.setDescription(`${Random[Math.floor(Math.random() * Random.length)]}`)
							 .setTimestamp()
				message.channel.sendMessage(client);
				message.react("??")
				}
				});
				const CUT = [
					'**كت تويت** ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
					' **كت تويت** | أكثر شيء يُسكِت الطفل برأيك؟',
					'**كت تويت** | الحرية لـ ... ؟',
					' **كت تويت** | قناة الكرتون المفضلة في طفولتك؟',
					' **كت تويت** ‏| كلمة للصُداع؟',
					' **كت تويت** ‏| ما الشيء الذي يُفارقك؟',
					' **كت تويت** ‏| ما الشيء الذي يُفارقك؟',
					'**كت تويت**  | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
					'**كت تويت**  ‏| أيهما ينتصر، الكبرياء أم الحب؟',
					' **كت تويت** | بعد ١٠ سنين ايش بتكون ؟',
					'**كت تويت**  ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
					'**كت تويت**  | عمرك شلت مصيبة عن شخص برغبتك ؟',
					' **كت تويت** | أكثر سؤال وجِّه إليك مؤخرًا؟',
					'**كت تويت**  | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
					'**كت تويت**  | وش يفسد الصداقة؟',
					'**كت تويت**  | شخص لاترفض له طلبا ؟',
					'**كت تويت**  | كم مره خسرت شخص تحبه؟.',
					'**كت تويت**  | كيف تتعامل مع الاشخاص السلبيين ؟',
					'‏**كت تويت** | كلمة تشعر بالخجل اذا قيلت لك؟',
				  ]
				  client.on('message', message => {
				  if (message.author.bot) return;
				  if (message.content.startsWith('$كت تويت')) {
					if(!message.channel.guild) return;
				  var client= new Discord.RichEmbed()
				  .setTitle("**كت تويت**")
				  .setThumbnail(message.author.avatarURL)
				  .setColor('RANDOM')
				  .setDescription(`${CUT[Math.floor(Math.random() * CUT.length)]}`)
								 .setTimestamp()
				  message.channel.sendEmbed(client);
				  message.react("??")
				  }
					});
						client.on('message', message => {
							if (message.content === "$help") {
							let embed = new Discord.RichEmbed()
					 .setAuthor(message.author.username)
												.setFooter(`© AJ Bot ™.`)
					 .setColor("#9B59B6")
					 .addField("Done | تــــم" , "✉ | تم ارسالك في الخاص")
				 
							
							
					 message.channel.sendEmbed(embed);
						 }
				 });

				const kwater = [
					"**خواطر** |الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم",
					"**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
					"**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
					"**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
					"**ان تعالج ألمك بنفسك تلك هى القوة**.", 
					"**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
					"**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
					"**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
					"**المناقشات العقيمة لا تنجب افكارا**.", 
					"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
					"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
				  ]
				  client.on('message', message => {
				  if (message.author.bot) return;
				  if (message.content.startsWith('$خواطر')) {
					if(!message.channel.guild) return;
				  var client= new Discord.RichEmbed()
				  .setTitle("**خواطر**")
				  .setThumbnail(message.author.avatarURL)
				  .setColor('RANDOM')
				  .setDescription(`${kwater[Math.floor(Math.random() * kwater.length)]}`)
								 .setTimestamp()
				  message.channel.sendEmbed(client);
				  message.react("??")
				  }
					});
						const weather = require('weather-js'); // Make sure you call the packages you install.
						
						
							client.on('message', message => {
						
								let msg = message.content.toUpperCase(); 
								let sender = message.author; 
								let cont = message.content.slice(prefix.length).split(" "); 
								let args = cont.slice(1); 
						
								if (msg.startsWith(prefix + 'WEATHER')) { 
						
										weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
												if (err) message.channel.send(err);
						
						if (result === undefined || result.length === 0) {
								
								message.channel.send('**Please enter a valid location.**') 
														return; 
												}
						
												var current = result[0].current; 
												var location = result[0].location;
						
												const embed = new Discord.RichEmbed()
														.setDescription(`**${current.skytext}**`) 
														.setAuthor(`Weather for ${current.observationpoint}`) 
														.setThumbnail(current.imageUrl)
														.setColor(0x00AE86) 
														.addField('Timezone',`UTC${location.timezone}`, true) 
														.addField('Degree Type',location.degreetype, true)
														.addField('Temperature',`${current.temperature} Degrees`, true)
														.addField('Feels Like', `${current.feelslike} Degrees`, true)
														.addField('Winds',current.winddisplay, true)
														.addField('Humidity', `${current.humidity}%`, true)
						
														message.channel.send({embed});
										});
								}
						
						});
					client.on('message', message => {
						if (message.content.startsWith(prefix + "uptime")) {
				let uptime = client.uptime;
		
				let days = 0;
				let hours = 0;
				let minutes = 0;
				let seconds = 0;
				let notCompleted = true;
		
				while (notCompleted) {
		
						if (uptime >= 8.64e+7) {
		
								days++;
								uptime -= 8.64e+7;
		
						} else if (uptime >= 3.6e+6) {
		
								hours++;
								uptime -= 3.6e+6;
		
						} else if (uptime >= 60000) {
		
								minutes++;
								uptime -= 60000;
		
						} else if (uptime >= 1000) {
								seconds++;
								uptime -= 1000;
		
						}
		
						if (uptime < 1000)  notCompleted = false;
		
				}
		
				message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");
		
		
		}
		});
		client.on('message', message => {
			
		if (message.content.startsWith(prefix + 'perm')) {
						 if(!message.channel.guild) return;
						 var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
						 var zPeRms = new Discord.RichEmbed()
						 .setColor('RANDOM')
						 .setTitle(':tools: Permissions')
						 .addField('Your Permissions:',perms)
											message.channel.send({embed:zPeRms});
		
				}
		});
		client.on('message', message => {
			if (message.content === "باك") {
				if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ولكم باك يا فتى!');
			 const embed = new Discord.RichEmbed()
		 .setColor("RANDOM")
		 .setDescription(':regional_indicator_w: :regional_indicator_e: :regional_indicator_l: :regional_indicator_c: :regional_indicator_o: :regional_indicator_m: :regional_indicator_e: ')
		 message.channel.sendEmbed(embed);
			 }
		});
		client.on('message', message => {
			if (message.content === ".") {
				if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('تسجيل دخول رهيب الصراحة : )');
			 const embed = new Discord.RichEmbed()
		 .setColor("RANDOM")
		 .setDescription(':hibiscus: احسنن ممن سجلل دخوولل ')
		 message.channel.sendEmbed(embed);
			 }
		});
    client.on('message', message => {
			if (message.content === "*id") {
			let embed = new Discord.RichEmbed()
	 .setThumbnail(message.author.avatarURL)  
	 .setAuthor(message.author.username)
 .setDescription("معلومات عن الحــساب")
								.setFooter(`© AJ Bot ™.`)
	 .setColor("#9B59B6")
	 .addField("اســـم الحســاب", `${message.author.username}`)
	 .addField('كود الحساب الخاص', message.author.discriminator)
	 .addField("الرقـــم الشـــخصي", message.author.id)
	 .addField('بــــوت', message.author.bot)
	 .addField("تاريخ التسجيل", message.author.createdAt)
			
			
	 message.channel.sendEmbed(embed);
		 }
 });
 client.on('message', message => {
	if (message.author.id === client.user.id) return;
	if (message.guild) {
 let embed = new Discord.RichEmbed()
	let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
	if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **ليس لديك صلاحيات**');
	if (!args[1]) {
message.channel.send("**$bc <message>**");
return;
}
			message.guild.members.forEach(m => {
				if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('⚠ | **ليس لديك صلاحيات**');
					var bc = new Discord.RichEmbed()
					.setAuthor(message.author.username, message.author.avatarURL)
					.addField('** الـسيرفر**', `${message.guild.name}`,true)
					.addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
					.addField(' **الرسالة** ', args)
					.setThumbnail(message.guild.iconURL)
					.setColor('RANDOM')
					m.send(`${m}`,{embed: bc});
			});
			const AziRo = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)   
			.setTitle('✔️ | جاري ارسال رسالتك ') 
			.addBlankField(true)
			.addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
			.addField('📋| الرسالة ', args)
			.setColor('RANDOM')  
			message.channel.sendEmbed(AziRo);          
	}
	} else {
			return;
	}
});
