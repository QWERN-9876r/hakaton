import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID!,
            clientSecret: process.env.YANDEX_CLIENT_SECRET!
        }),
        Credentials({
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'email',
                    required: true
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'password',
                    required: true
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                const fake = ['1', '2', '3', '4', '5', '6', '7']

                if (fake.find(value => credentials.email === value)) {
                    return {
                        id: credentials.email,
                        name: credentials.email,
                        email: credentials.email,
                        // image: 'https://i.pravatar.cc/150?img=' + credentials.email
                    }
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/signUp'
    }
}