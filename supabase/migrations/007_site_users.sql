-- Migration: criar tabela site_users para autenticação local da plataforma

-- A tabela `site_users` armazena os usuários que podem acessar a plataforma
-- via login próprio (aluno, mentor ou empresa). Cada registro contém um
-- endereço de e‑mail único, a senha criptografada (hash), o papel
-- (role) do usuário e a data de criação. O campo `password_hash` não
-- armazena senhas em texto puro.

CREATE TABLE IF NOT EXISTS site_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'mentor', 'client')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);