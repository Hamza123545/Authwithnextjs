import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Auth options configuration
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

// NextAuth handler
const handler = NextAuth(authOptions);

// Export GET and POST methods
export { handler as GET, handler as POST };
