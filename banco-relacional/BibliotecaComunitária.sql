CREATE TABLE Clientes (
    ID_cliente INT AUTO_INCREMENT PRIMARY KEY,
    RG VARCHAR(20) NOT NULL UNIQUE,
   SistemaDeGerenci Nome VARCHAR(100) NOT NULL,
    Telefone VARCHAR(15),
    Endereco VARCHAR(255)
);

CREATE TABLE Produtos (
    ID_produto INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR (100) NOT NULL,
    Tipo VARCHAR(50)NOT NULL,
    Preco DECIMAL(10, 2)NOT NULL CHECK (Preco >= 0),
    Quantidade_em_estoque INT NOT NULL CHECK (Quantidade_em_estoque >= 0)
);

CREATE TABLE Pedidos (
    ID_pedidos INT AUTO_INCREMENT PRIMARY KEY,
    ID_cliente INT NOT NULL,
    Data1 DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10, 2) NOT NULL CHECK (valor_total >= 0),
    FOREIGN KEY (ID_cliente) REFERENCES Clientes (ID_cliente) ON DELETE CASCADE
); 