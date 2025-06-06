import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class PingPong {
  @Slash({
    description: "Ping-Pong",
    name: "ping",
  })
  async ping(interaction: CommandInteraction): Promise<void> {
    interaction.reply("Pong");
  }
}
