# Theme Dark Purple for [Hyper](https://hyper.is)

![Screenshot](./screenshot.png)

## [Install](./INSTALL.md)

#### Install using config file

Clone this repo to `~/.hyper_plugins/local/`

Add `hyper-dark-purple` to the localPlugins list in your `~/.hyper.js` config file.

```sh
    localPlugins: [
    	'hyper-dark-purple'
    ]
```

#### Activating theme

1.  Start Hyper
2.  Go to `View -> Full Reload` or pressing `Cmd + Shft + R`

### To add the same buttons as in the image:

Add the code below to your `.hyper.js` file:

```sh
    hyperCustomControls: {
      side: 'left', // Default: 'left'
      circleSize: 11, // Default: 11
      circleGap: 7.5, // Default: 7.5
      distanceToSide: 15, // Default: 15
      opacity: 1, // Default: 1
      hoverOpacity: 0.5, // Default: 0.5

      // Default controls below:
      // NOTE: You can remove a control, if you want to.
      controls: [{
          type: 'close',
          color: '#F24F55',
        },
        {
          type: 'minimize',
          color: '#FBC536',
        },
        {
          type: 'maximize',
          color: '#39EA48',
        },
      ],
    },

```

## License

MIT License
