-- Tabela de Clientes
CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100) NOT NULL
);

-- Tabela de Fornecedores
CREATE TABLE Fornecedores (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100) NOT NULL
);

-- Tabela de Produtos
CREATE TABLE Produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50), -- Ex: flor, planta, acessório
    preco DECIMAL(10, 2) NOT NULL,
    quantidade_em_estoque INT NOT NULL,
    id_fornecedor INT,
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedores(id_fornecedor)
);

-- Tabela de Pedidos
CREATE TABLE Pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    id_produto INT, -- Adicionando referência ao produto diretamente no pedido
    quantidade INT NOT NULL, -- Adicionando quantidade diretamente no pedido
    preco_unitario DECIMAL(10, 2) NOT NULL, -- Adicionando preço unitário diretamente no pedido
    FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);
