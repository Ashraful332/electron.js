# React + TypeScript + Electron

## Start 
npm i --save-dev electron npm-run-all cross-env electron-builder

## Next

- create a app dir and 

```linux
--app\
--| main.ts
--| util.ts
--| tsconfig.json
```

- add tsconfig.json in app file

```json
{
    "compilerOptions": {
        "strict": true,
        "target": "ESNext",
        "module": "NodeNext",
        "outDir": "../../dist-electron",
        "skipLibCheck": true
    }
}
```

- update vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'./',
  build:{
    outDir:'out',
  },
  server:{
    port:5123,
    strictPort:true,
  }
})
```
- add electron-builder.json

```json
{
    "appId":"com.n-ziermann.electron-course",
    "files":["dist-electron","out"],
    "icon":"./favicon.svg",
    "mac":{
        "target":"dmg"
    },
    "linux":{
        "target":"AppImage",
        "category":"Utility"
    },
    "win":{
        "target":["portable","msi"]
    }
}
```

- update main package.json

```json

  "name": "todo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "main": "dist-electron/main.js",
  "scripts": {
    "dev":"npm-run-all --parallel dev:react dev:electron",
    "dev:react": "vite",
    "dev:electron": "npm run transpile:electron; Node_ENV=development electron .",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "transpile:electron": "tsc --project src/electron/tsconfig.json",
    "dist:mac": "npm run transpile:electron && npm run build && electron-builder --mac --arm64",
    "dist:win": "npm run transpile:electron && npm run build && electron-builder --win --x64",
    "dist:linux": "npm run transpile:electron && npm run build && electron-builder --linux --x64"
  },
```
## Imported command    

- start project ad website 
npm run dev:react

- start project as app
npm run dev:electron


- install electron builder
npm i --save-dev electron-builder

- build electron app on dist-electron
npm run transpile:electron

- build AppImage app foe linux
npm run dist:linux

- start full project 
npm run build