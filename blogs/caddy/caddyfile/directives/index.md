# Directives

Directives are functional keywords that appear within site blocks. Sometimes, they may open blocks of their own which can contain subdirectives, but directives **cannot** be used within other directives unless noted. For example, you can't use `basicauth` inside a `file_server` block, because file_server does not know how to do authentication.

The Caddyfile is structured using a simple and easy-to-read syntax, with each directive on a separate line.

Here are all the Caddyfile directives with examples:

1. `root`: Sets the root path of the site, used by various matchers and directives that access  the file system. If unset, the default site root is the current working directory.

    This directive does not automatically enable serving static files, so it is often used in conjunction with the `file_server` directive.

    Syntax

    `root [<matcher>] <path>`
    Note that the `<path>` argument could be confused by the parser for a `matcher token` if it begins with `/`. To disambiguate, specify a wildcard matcher token (`*`). See examples below.

    Set the site root to `/home/user/public_html` for all requests:

    (Note that a wildcard matcher is required here because the first argument is ambiguous with a path matcher.)

    `root * /home/user/public_html`

2. `file_server`: serves static files from the directory specified by the `root` directive.

3. 