import { defineConfig } from 'vite';

export default defineConfig({
  // Define o diretório raiz do seu projeto, onde estão os arquivos do frontend
  root: 'Cliente', 
  
  // Define a pasta onde os arquivos finais serão compilados (para produção)
  build: {
    outDir: '../dist', 
  },
  
  // Configuração para o servidor de desenvolvimento
  server: {
    // Porta que o frontend vai rodar (vamos usar 3001 para não conflitar com o seu backend 3000)
    port: 3001, 
    // Garante que a raiz do projeto seja a pasta 'public'
    open: '/',
  },
});