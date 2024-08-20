import { IncomingMessage } from "http";
import { getSession } from "next-auth/react";

export const getUserSession = async (req: IncomingMessage) => {
  try {
    const session = await getSession({ req });

    return session?.user;
  } catch (error) {
    console.error((error as Error).message);
  }
};
