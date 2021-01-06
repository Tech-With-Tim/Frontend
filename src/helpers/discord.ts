const discordCDN = "https://cdn.discordapp.com/";

interface avatarArgs {
  size?: number,
  animated?: boolean,
}

export const getAvatarURI = (id, avatar, args: avatarArgs = {}) => {
  const formattedArgs: any = [];
  let ext = "png";
  for (const arg in args) {
    if (arg === "animated") {
      if (avatar.startsWith("a_")) {
        ext = "gif";
      }
      continue;
    }
    formattedArgs.push(`${arg}=${args[arg]}`);
  }
  return discordCDN + `avatars/${id}/${avatar}.${ext}?${formattedArgs.join("&")}`;
}
