-- Este comando insere um novo estado na tabela 'estados'
INSERT INTO estados 
    (nome, sigla, regiao, populacao)
VALUES
    ("Acre", "AC", "Norte", 0.83);  -- Aqui estamos inserindo o estado do Acre, com sua sigla, região e população

-- Este comando insere vários estados de uma vez na tabela 'estados'
INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    ("Alagoas", "AL", "Nordeste", 3.38),  -- Inserindo Alagoas com seus detalhes
    ("Amapá", "AP", "Norte", 0.8),        -- Inserindo Amapá com seus detalhes
    ("Amazonas", "AM", "Norte", 4.06);    -- Inserindo Amazonas com seus detalhes