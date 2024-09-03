-- Criando a tabela 'estados' com várias colunas e suas características
CREATE TABLE estados (
    -- Coluna 'id' para armazenar um número inteiro que vai aumentar automaticamente
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    
    -- Coluna 'nome' para armazenar o nome do estado, com até 45 caracteres
    nome VARCHAR(45) NOT NULL,
    
    -- Coluna 'sigla' para armazenar a sigla do estado, com exatamente 2 caracteres
    sigla VARCHAR(2) NOT NULL,
    
    -- Coluna 'regiao' para armazenar a região do estado, com um dos valores possíveis definidos no ENUM
    regiao ENUM("Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul") NOT NULL,
    
    -- Coluna 'populacao' para armazenar a população do estado, com até 5 dígitos no total e 2 decimais
    populacao DECIMAL(5,2) NOT NULL,
    
    -- Define a coluna 'id' como chave primária, garantindo que cada estado tenha um identificador único
    PRIMARY KEY (id),
    
    -- Garante que cada nome de estado na tabela seja único
    UNIQUE KEY (nome),
    
    -- Garante que cada sigla de estado na tabela seja única
    UNIQUE KEY (sigla)
);
