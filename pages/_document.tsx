import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head >
                    <meta charSet="utf-8" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon-192x192.png" />
                    <meta name="theme-color" content="#B7D5F8" />
                    <meta name="msapplication-navbutton-color" content="#B7D5F8" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="#B7D5F8"
                    />
                    <meta
                        name="author"
                        content="Muhaemin Iskandar"
                    />
                    <meta name="google-site-verification" content="7KgkV67H12Dm3cvEblpXUAYgoT9BpUzCN8Cw-JXVQjc" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
