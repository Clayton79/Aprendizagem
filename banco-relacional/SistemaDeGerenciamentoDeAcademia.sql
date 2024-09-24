CREATE DATABASE Academia;

CREATE TABLE Alunos (
    ID_Aluno INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Data_de_Cadastro DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    Data_de_Nascimento VARCHAR(50) NOT NULL,
    Telefone VARCHAR(15),
    Endereco VARCHAR(255)
);

CREATE TABLE Instrutores (
    ID_Instrutor INT AUTO_INCREMENT PRIMARY KEY,
    RG VARCHAR(40) NOT NULL UNIQUE,
    Nome VARCHAR(100) NOT NULL,
    Data_de_Nascimento VARCHAR(50) NOT NULL,
    Telefone VARCHAR(15),
    Endereco VARCHAR(255)
);

CREATE TABLE Aulas (
    ID_Aula INT AUTO_INCREMENT PRIMARY KEY,
    ID_Instrutor INT NOT NULL,
    Nome_da_Aula VARCHAR(100) NOT NULL,
    Duração_da_Aula TIME DEFAULT '00:30:00',
    Capacidade_de_Alunos INT NOT NULL,
    FOREIGN KEY (ID_Instrutor) REFERENCES Instrutores (ID_Instrutor) ON DELETE CASCADE 
);

CREATE TABLE Matriculas_de_Aulas (
    ID_Matricula_de_Aula INT AUTO_INCREMENT PRIMARY KEY,
    ID_Aluno INT NOT NULL,
    ID_Aula INT NOT NULL,
    Data_da_Matricula VARCHAR(50) NOT NULL,
    STATUS ENUM('Ativa', 'Cancelada') DEFAULT 'Ativa',
    FOREIGN KEY(ID_Aluno) REFERENCES Alunos(ID_Aluno),
    FOREIGN KEY(ID_Aula) REFERENCES Aulas (ID_Aula) ON DELETE CASCADE
);