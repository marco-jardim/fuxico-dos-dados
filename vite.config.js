import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite para um projeto React simples.
// O parâmetro `base` é deixado em branco para que o projeto funcione
// corretamente quando publicado no GitHub Pages, onde o caminho base
// será definido automaticamente durante a implantação.
export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    port: 3000,
  },
});