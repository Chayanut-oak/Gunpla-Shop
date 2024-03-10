# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```


## Install Docker

sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose


## Install Git
sudo yum install git -y
## Development Server

git clone -b docker --single-branch https://github.com/Chayanut-oak/Gunpla-Shop

cd Gunpla-Shop

git clone -b docker --single-branch https://github.com/Chayanut-oak/Gunpla-Shop_backend
cd /Gunpla-Shop_backend/cmd/myapps
echo OMISE_PUBLIC_KEY=pkey_test_5yyex97jk6w30bf2yhe > .env
echo OMISE_SECRET_KEY=skey_test_5yyex98g6g5mzezann7 >> .env
echo SECRET_KEY=oak >> .env



docker-compose up -d --build





## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
