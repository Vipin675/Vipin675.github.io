# Caddy

Caddy is a web server designed around simplicity and security that comes with a number of features that are useful for hosting websites. For example, it can automatically obtain and manage TLS certificates from Let’s Encrypt to enable HTTPS.

HTTPS is a system for securing traffic between your users and your server, and is quickly becoming a basic expectation of any website running in production — without it, Chrome and Firefox will warn that your website is “Not Secure” if users try to submit login information.

## Caddy Installation steps

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

## Configuring Caddy

Basic Caddy configuration for serving static files from your server.

Create basic `index.html` file in `/var/www/portfolio`.

Caddy reads its configuration from a file called `Caddyfile`, stored under `/etc/caddy`. Create and open the file for editing:

```bash
sudo vim /etc/caddy/Caddyfile
```

Add the following lines:

```text
:3001 {
    root * /var/www/portfolio/index.html
    encode gzip
    file_server
}
```

This basic Caddy config declares that all HTTP traffic to your server should be served with files (`file_server`) from `/var/www` (which is marked as `root`) and compressed using `gzip` to reduce page loading times on the client side.

Caddy has different directives for many use cases. For example, the `log` directive could be useful for logging all HTTP requests that occur. You can review more options at the official documentation page for directives.

now reload caddy server by running following commands

```bash
sudo systemctl reload caddy
```

You have now configured Caddy to serve static files from your server. In the next step, you’ll extend Caddy’s functionality through plugins.

---
---

## Caddyfile Tutorial

The **Caddyfile** is a convenient Caddy configuration format for humans. It is most people's favorite way to use Caddy because it is easy to write, easy to understand

The basic idea is that you first type the address of your site, then the features or functionality you need your site to have.

## Menu

- **[Caddyfile concepts](./caddyfile/concepts/index.md)**

    Required reading! Structure, site addresses, matchers, placeholders, and more.
- **[Directives](./)**

    Keywords at the beginning of lines that enable features for your sites.
- **[Request matchers](./)**

    Filter requests by using matchers with your directives.
- **[Global options](./)**

    Settings that apply to the whole server rather than individual sites.
- **[Common patterns](./)**

    Simple ways to do common things.