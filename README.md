# React Lib

> **This project is under heavy development**. You can follow the progress live on [Twitch](https://www.twitch.tv/nononsensecoding) or watch previous broadcasts on [YouTube](https://www.youtube.com/channel/UCkDMBuT1tePRJKMAy0R-Xmg).

A collection of accessible, high quality, themeable, openly available React components.

# Features of this Project

## Using in Your Apps

- [x] Minimal dependencies
- [x] Import individual components as needs
- [x] Pre-packaged themes
- [ ] Inject your own theme

## Development

- [x] Isolated Development Environment (Storybook)
- [x] Automated Testing (Jest)
- [ ] Automated Versioned Releases with CHANGELOG entries
- [ ] Automated npm publishing
- [ ] Automated Git release tagging
- [ ] Continuous deployment for documentation

# How to Get Started as a User

1. Install via npm

   ```sh
   $ npm i @nononsensecoding/react-lib
   ```

2. Import components as needed:

   ```jsx
   import Button from '@nononsensecoding/react-lib/Button'

   render() {
       return (
           <div>
                <Button onClick={(e) => console.log(e)}>Click me</Button>
           </div>
       )
   }
   ```

# How to Get Started as a Developer

1. Clone Github repo

   ```sh
   $ git clone https://github.com/nononsensecoding/react-lib.git
   ```

2. Run isolated component development mode:

   ```sh
   $ npm start
   ```
