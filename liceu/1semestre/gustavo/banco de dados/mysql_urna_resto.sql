###select @@GLOBAL.secure_file_priv;

LOAD DATA INFILE'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/dados_eleitores.csv'
INTO TABLE eleitor
FIELDS terminated by ','
lines terminated by '\n'
ignore 1 rows;



select el.nm_eleitor, ca.nm_fantasia_candidato from eleitor as el
inner join candidato as ca on ca.id_eleitor_candidato = el.id_eleitor;

select el.nm_eleitor, ca.nm_fantasia_candidato, 
case when ca.nm_fantasia_candidato is not null then ca.nm_fantasia_candidato
else 'nao cadastrado' end as 'situacao candidato'

from eleitor as el
left join candidato as ca on ca.id_eleitor_candidato = el.id_eleitor