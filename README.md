# random-hash-generator
Generates random key-secret pair with sha256 hash, with salt

## Installation
```sh
$ npm install -g random-hash-generator
```


## Usage

### `random-hash-generator`

`$ rhg --number 5 --key 10 --secret 15 --salt ShotMeBowmore`

#### Options

 * `--number`, `-n`: Number of key/secret pairs to generate
 * `--key`, `-k`: Length of key string
 * `--secret`, `-s`: Length of secret string
 * `--salt`, `-t`: Specifying salt string
 * `--help`, `-h`: This message

### `random-hash-calculator`

`$ rhc --key AAAAAAAAAAAAAAA --secret 15 --salt ShotMeBowmore`

#### Options

 * `--key`, `-k`: Key string
 * `--secret`, `-s`: Length of secret string
 * `--salt`, `-t`: Specifying salt string
 * `--help`, `-h`: This message


## API

### `.generate(key, secret, salt)`
 * `key`: Length of key string
 * `secret`: Length of secret string
 * `salt`: Specifying salt string

### `.calc(key, secret, salt)`
 * `key`: Key string
 * `secret`: Length of secret string
 * `salt`: Specifying salt string
 * returns calculated secret string
