-- Inserindo usuários
INSERT INTO tb_Usuario (apelido, email, senha) VALUES 
('Patojoseph', 'pato@example.com', 'senha123'),
('MariaDev', 'maria@example.com', 'maria456');

-- Inserindo atividades para o usuário 1 (Patojoseph)
INSERT INTO tb_Atividades (id_usuario, nome, data_prevista, hora_prevista, conclusao) VALUES
(1, 'Estudar C#', '2025-07-15', '14:00', NULL),
(1, 'Revisar SQL', '2025-07-16', '10:30', NULL);

-- Inserindo atividades para o usuário 2 (MariaDev)
INSERT INTO tb_Atividades (id_usuario, nome, data_prevista, hora_prevista, conclusao) VALUES
(2, 'Criar protótipo', '2025-07-15', '09:00', NULL),
(2, 'Testar aplicação', '2025-07-17', '15:00', NULL);