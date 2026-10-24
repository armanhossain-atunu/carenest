import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Send login request to the external backend via the user's localhost API
          const res = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          });

          const data = await res.json();

          // The backend returns an object with `{ message, user }` if successful.
          // Extract the actual user object
          const user = data?.user || data;

          if (res.ok && user) {
            return {
              id: user.id || user._id,
              name: user.name,
              email: user.email,
              images: user.images || null,
              ...user
            };
          }

          // Authentication failed
          return null;
        } catch (error) {
          console.error("NextAuth Login fetch failed:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.images = user.images;
        // Optionally store the external backend token in the JWT for future requests
        if (user.token) token.backendToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.images = token.images;
        if (token.backendToken) session.user.token = token.backendToken;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login', // Redirect default signIn page to custom login page
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
