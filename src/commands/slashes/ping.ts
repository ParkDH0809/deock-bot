import type { CommandInteraction } from "discord.js";
import { Discord, MetadataStorage, Slash } from "discordx";

@Discord()
export class SlashExample {
  @Slash({
    description: "Ping-Pong",
    name: "ping",
  })
  async ping(interaction: CommandInteraction): Promise<void> {
    interaction.reply("Pong");
  }
}
