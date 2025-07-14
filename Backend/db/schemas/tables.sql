/* Criação das tabelas essenciais para a aplicação */

CREATE TABLE IF NOT EXISTS tb_Usuario (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    apelido TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_Atividades (
    id_atividades INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER NOT NULL,
    nome TEXT NOT NULL,
    data_prevista DATE,
    hora_prevista TIME,
    conclusao DATETIME,
    FOREIGN KEY (id_usuario) REFERENCES tb_Usuario(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);