const Alphi = require('discord.js');
const moron = new Alphi.Client();
let odii;
let alpho;
moron.on('guildMemberAdd', async member => {
  let welcome = moron.channels.get("467827398923124736") //ez nou
  welcome.send(`Welcome to Army of Morons ${member.toString()}! <:hype:468081845787951106> please take some time to read our <#465951736155340820> channel <:sippy:468081819980660766> and when you're done type 'agree' to unlock the rest of the server!  `);
        let response =  await welcome.awaitMessages(mg => {
        return mg.author.id === member.id;
    }, {max: 1})
    response = response.array()[0];

 if (response.content.toLowerCase() === "agree"){
        let role = member.guild.roles.find(role => {return role.id==="466316850737709057"});
        member.addRole(role);
        welcome.send("You now have access to the server, come and say hi in <#468798814808178700> <:hype:468081845787951106> and most importantly, enjoy your stay!!");
    }
    else{
        welcome.send("You did not meet the requirements, please contact an admin or try again.");
    }
  });

moron.on('ready', () => {
  console.log(`Succesfully logged in as: ` + moron.user.tag);
  moron.user.setActivity("Morons!", {type: "STREAMING", url: "https://twitch.tv/odaryt"}) //lol why it says unexpected token cuz u noob mf
}); 
let prefix = `.`
moron.on('message', async message => {
  if(message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.channel.type === "dm") return;
  
  if(command === "odii") {
  const smug = new Alphi.RichEmbed()
  .setTitle("<:smugpepe:468776456433172481>") 
  .setColor(`0x005500`) //here u go  nub  thanks odii np Alpho
  message.channel.send(smug);
  }
  
  if(command === "e"){
    if (["337343219128074240","363428457486483457", "291221132256870400"].indexOf(message.author.id) === -1){return;}
        let cmdparse = require("./cmdparse");
        message.content.slice(prefix.length)
        let data = message;
        let cmd = cmdparse(args.slice(0).join(" "));
        args.splice(0, 1);
        console.log({cmd});
        data.cmd = cmd;
        data.send = (($) => data.channel.send($));
        const newEmbed = require("./newEmbed")(Alphi);
        (async () => {
            return (eval(`${data.cmd.join(" ")};`));
        })()
        .then(output => {
            data.send(newEmbed({
                title: "**Eval Success**",
                color: 0x00ff00,
                fields: [
                    { title: "Result:", value: output !== undefined ? output : true }
                ]
              
            })).catch(console.warn);
        })
        .catch((e) => {
            data.send(newEmbed({
                title: "**Eval Failed**",
                color: 0xff0000,
                fields: [
                    { title: "Result:", value: e.message }
                ]
            })).catch(console.warn);
        });
     }
});
moron.login(process.env.MORON);
let client = 468767749083103242; //wot lel ;
