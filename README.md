##Features
Control your Freebox using Gladys

##Installation
```bash
# Go to the hooks directory
$ cd gladys/api/hooks

# Clone the repository
$ git clone https://github.com/aschelch/gladys-freebox.git freebox
$ cd freebox

# Install NPM dependencies
$ npm install

# Restart Gladys
$ sudo pm2 restart gladys
```

##Usage
You can use the buttons on the dashboard or use the FreeboxService in your script.
```js
SpeakService.say("Bonjour, j'allume la télé");
FreeboxService.power();

// Or
SpeakService.say("Je zap sur TF1");
FreeboxService.pressKey(1);

// Or
SpeakService.say("J'augmente le volume");
FreeboxService.increaseVolume();
FreeboxService.increaseVolume();
```