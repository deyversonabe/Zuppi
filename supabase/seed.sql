insert into public.platform_users (role,name,email,skills,score,lgpd_accepted) values
('aluno','Lucas Santos','lucas@zuppi.dev',array['design','marketing','web'],87,true),
('mentor','Marina Alves','marina@zuppi.dev',array['produto','ux','negócios'],94,true),
('empresa','Inova Digital','contato@inova.dev',array['marketing','tecnologia'],80,true)
on conflict (email) do nothing;
insert into public.problems (title,description,source,segment,urgency,recurrence,impact_potential,tags,ai_summary) values
('Pequenas empresas não conseguem criar landing pages rápidas','PMEs locais têm baixa presença digital e dificuldade para testar campanhas em até 14 dias.','seed','PME',4,5,4,array['web','marketing'],'Pode virar desafio pago de landing page com mentor UX.'),
('ONGs precisam organizar campanhas de doação','Instituições sociais têm dificuldade com comunicação, coleta de dados e prestação de contas.','seed','Impacto Social',5,4,5,array['impacto','comunidade'],'Pode gerar desafios de comunicação, automação e relatório de impacto.');
insert into public.benefits (title,description,category) values ('Bolsa Educação','Benefício para aluno com evolução e participação em projeto.','educação'),('Mentoria Premium','Sessões adicionais para alunos com match aprovado.','mentoria');
