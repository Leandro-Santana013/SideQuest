/*
Meu grupo: Arthur Lacerda, Thiago Militão, Vitor Lima, Leandro Santana e Guilherme Saltão.

SHOW VARIABLES LIKE 'default_authentication_plugin';
SELECT user, plugin 
FROM mysql.user
WHERE user = 'root';
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'SideQuest';
#ou
CREATE USER 'web_app_usr'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'SideQuest';
FLUSH PRIVILEGES;
*/
create database if not exists db_sidequest;
use db_sidequest;

create table if not exists tb_estado (
	cd_estado int not null auto_increment,
    nm_estado varchar(50) not null,
    sg_estado char(2) not null unique,
    
    constraint pk_estado primary key (cd_estado)
);

create table if not exists tb_cidade  (
	cd_cidade int not null auto_increment,
    nm_cidade varchar(70) not null,
    cd_estadoCidade int not null,
    
    constraint pk_cidade primary key (cd_cidade),
    constraint fk_estadoCidade foreign key (cd_estadoCidade) references tb_estado (cd_estado)
);

create table if not exists tb_cliente (
	cd_cliente int not null auto_increment,
    nm_cliente varchar(50) not null,
    cd_cpfCliente char(11) not null unique,
    sg_sexoCliente char(1) not null,
    qt_idadeCliente int not null,
    nmr_telefoneCliente char(11) unique not null,
    cd_emailCliente varchar(100) unique not null,
    ed_enderecoCliente varchar(200) not null,
	cd_cidadeCliente int not null,
    
    constraint pk_cliente primary key (cd_cliente),
    constraint check(sg_sexoCliente in('M', 'F', '-')),
    constraint check(qt_idadeCliente >= 18 and qt_idadeCliente <= 130),
    constraint fk_cidadeCliente foreign key (cd_cidadeCliente) references tb_cidade (cd_cidade)
);

create table if not exists tb_tipo_servico (
    cd_tipo_servico int not null auto_increment,
    nm_tipo_servico varchar(50) not null,
    
    constraint pk_tipo_servico primary key (cd_tipo_servico)
);

create table if not exists tb_profissional (
    cd_profissional int not null auto_increment,
    nm_profissional varchar(50) not null,
    nmr_telefoneProfissional char(11) unique not null,
    cd_emailProfissional varchar(100) unique not null,
    ed_enderecoProfissional varchar(200) not null,
    cd_cidadeProfissional int not null,
    
    constraint pk_profissional primary key (cd_profissional),
    constraint fk_cidadeProfissional foreign key (cd_cidadeProfissional) references tb_cidade (cd_cidade)
);

create table if not exists tb_solicitacao_servico (
    cd_solicitacao_servico int not null auto_increment,
    cd_cliente int not null,
    cd_tipo_servico int not null,
    cd_profissional int,
    ds_solicitacao varchar(500) not null,
    dt_solicitacao date not null,
    nm_situacao varchar(20) not null,
    
    constraint pk_solicitacao_servico primary key (cd_solicitacao_servico),
    constraint fk_clienteSolicitacao foreign key (cd_cliente) references tb_cliente (cd_cliente),
    constraint fk_tipo_servico foreign key (cd_tipo_servico) references tb_tipo_servico (cd_tipo_servico),
    constraint fk_profissional foreign key (cd_profissional) references tb_profissional (cd_profissional),
    constraint nm_situacao_servico check(nm_situacao in('pendente','concluída','cancelada'))
);

create table if not exists tb_termino_pagamento (
    cd_termino_pagamento int not null auto_increment,
    cd_solicitacao_servico int not null,
    dt_termino date not null,
    qt_valor_pago decimal(10, 2) not null,
    
    constraint pk_termino_pagamento primary key (cd_termino_pagamento),
    constraint fk_solicitacao_servico foreign key (cd_solicitacao_servico) references tb_solicitacao_servico (cd_solicitacao_servico)
);

create table if not exists tb_certificacao (
    cd_certificacao int not null auto_increment,
    cd_profissional int not null,
    nm_certificacao varchar(100) not null,
    
    constraint pk_certificacao primary key (cd_certificacao),
    constraint fk_profissional_certificacao foreign key (cd_profissional) references tb_profissional (cd_profissional)
);

create table if not exists tb_proposta (
    cd_proposta int not null auto_increment,
    cd_profissional int not null,
    cd_solicitacao_servico int not null,
    dt_proposta date not null,
    qt_valor_proposto decimal(10, 2) not null,
    nm_situacao_proposta varchar(20) not null,
    
    constraint pk_proposta primary key (cd_proposta),
    constraint fk_profissional_proposta foreign key (cd_profissional) references tb_profissional (cd_profissional),
    constraint fk_solicitacao_servico_proposta foreign key (cd_solicitacao_servico) references tb_solicitacao_servico (cd_solicitacao_servico),
    constraint nm_situacao_proposta check(nm_situacao_proposta in('pendente','aceita','recusada'))
);
