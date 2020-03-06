# Save The Old Reader Post

Saves The Old Reader post locally


## Installation

    yarn install


## Usage

  * run application with `yarn start` command
  * go to The Old Reader [Manage Settings -> Social](https://theoldreader.com/users/edit/social) page
  * in a section `Send Services` fill `Service Title` input and
    in a `Service Url` input add a link to your application like`http://example.com/?title=%{title}&url=%{url}`
    (for tunneling to the localhost you can use [ngrok](https://ngrok.com), for example)
  * in the page with posts expand post and push `Send To` button. Select menu item with name that you entered
    in the `Service Title` input


## Environment variables

  * `PORT` - port of the application. Default: `3000`
  * `FILE` - path to the file where posts being saved. Default: `./posts`
  * `LINE_FORMAT` - format of a saved post line. Default: `%{url} - %{title}`


## Linter

    yarn lint


## License

[BSD-3-Clause](LICENSE)
