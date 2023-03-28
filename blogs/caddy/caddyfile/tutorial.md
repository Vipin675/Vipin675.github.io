# Tutorial

## Adding functionality

Caddyfile - `/etc/caddy/Caddyfile`

```text
localhost

file_server browse
```

## Using **Templates**

Create a new file for example `caddy.html` in current directory

Add the following: 

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Caddy tutorial</title>
	</head>
	<body>
		Page loaded at: {% raw %} {{now | date "Mon Jan 2 15:04:05 MST 2006"}} {% endraw %}
	</body>
</html>
```

The output will be :

```text
Page loaded at: {{now | date "Mon Jan 2 15:04:05 MST 2006"}}
```

It'll not work yet because server isn't yet configured to serve a templated page. Easy to fix, just add a line to the Caddyfile so it looks like this:

```text
localhost

templates
file_server browse
```

now the output will be: 

```text
Page loaded at: Mon Mar 27 21:38:02 IST 2023
```

## Compression

In Caddy, compressing responses refers to the process of compressing the content of HTTP responses before sending them over the network. This can help reduce the size of the response, which can improve the performance of your web application by reducing the amount of data that needs to be transferred over the network.

You can enable response compression in Caddy by adding the encode directive to your Caddyfile. For example:

```text
localhost

encode zstd gzip
templates
file_server browse
```
