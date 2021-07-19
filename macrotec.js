const { jsPDF } = require("jspdf"); // will automatically load the node version

const { autoTable } = require("jspdf-autotable");

const doc = new jsPDF();

//PAG1 - PAG1 - PAG1 - PAG1 - PAG1 - PAG1 - PAG1 - PAG1 - PAG1 - PAG1 - PAG1  

//L A                                       TAM              
    
doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S'); //PAG INTEIRA

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 270, 'S');

doc.rect(3, 3, doc.internal.pageSize.width - 120, doc.internal.pageSize.height - 243, 'S'); // MEIO

doc.rect(93, 3, doc.internal.pageSize.width - 96, doc.internal.pageSize.height - 243, 'S'); // MEIO

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 190, 'S');

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 155, 'S');

doc.rect(175, 30, doc.internal.pageSize.width - 178, doc.internal.pageSize.height - 284, 'S');
doc.rect(175, 30, doc.internal.pageSize.width - 178, doc.internal.pageSize.height - 270, 'S');


doc.rect(3, 3, doc.internal.pageSize.width - 120, doc.internal.pageSize.height - 250, 'S');
doc.rect(3, 3, doc.internal.pageSize.width - 120, doc.internal.pageSize.height - 257, 'S');
doc.rect(3, 3, doc.internal.pageSize.width - 120, doc.internal.pageSize.height - 263, 'S');

doc.rect(93, 30, doc.internal.pageSize.width - 128, doc.internal.pageSize.height - 290, 'S');
doc.rect(93, 30, doc.internal.pageSize.width - 128, doc.internal.pageSize.height - 284, 'S');
doc.rect(93, 30, doc.internal.pageSize.width - 128, doc.internal.pageSize.height - 277, 'S');


doc.setFontSize(10)
doc.text("MACROTEC LTDA", 135, 10);
doc.text("Endereço: Rua Halley, 50 - Bairro: Jardim Riacho das Pedras", 102, 15);
doc.text("Cep: 32242-270 - Contagem/MG", 124, 20);
doc.text("CNPJ: 25.417.270/0005-57   I.E.: 0625931720390", 112, 25);

doc.setFontSize(11)
doc.text("Vendedor: ", 5, 35);
doc.text("E-mail: ", 5, 41);
doc.text("Orçamentista: ", 5, 48);
doc.text("E-mail: ", 5, 55);

doc.setFontSize(11)
doc.text("Data da Proposta: ", 95, 35);
doc.text("Validade da Proposta: ", 95, 41);
doc.text("Modalidade de Entrega: ", 95, 48);
doc.text("Condição de Pagamento: ", 95, 55);

doc.setFontSize(11)
//doc.setFontType('bold')
doc.text("PROPOSTA ", 180, 35);
doc.setFontSize(9)
doc.text("x", 180, 40);
doc.setFontSize(11)
//doc.setFontType('bold')
doc.text("REVISAO ", 180, 50);
doc.setFontSize(9)
doc.text("x", 180, 55);

doc.setFontSize(10)
doc.text(5, 65, 'À')
//doc.setFontType('bold')
doc.text(5, 70, 'ANGLO AMERICAN MINÉRIO DE FERRO BRASIL S.A.')
//doc.setFontType('normal')
doc.text(5, 75, 'RUA JARDIM, S/N - SÃO SEBASTIÃO DO BOM SUCESSO ')
doc.text(5, 80, '35860-000 Conceição do Mato Dentro/MG')
doc.text(5, 85, 'CNPJ:')
doc.text(80, 85, 'IE:')
//doc.setFontType('bold')
doc.text(5, 95, 'A/C Sr(a):')
//doc.setFontType('normal')
doc.text(5, 100, 'Setor:')
doc.text(5, 105, 'Telefone:')

doc.setFontSize(10)
doc.text(5, 120, 'Atendendo à solicitação de V.Sas., temos o prazer de submeter para análise de nossa proposta comercial para os')
doc.text(5, 125, 'equipamentos / serviços descritos abaixo conforme sua especificação técnica.')

doc.setFontSize(11)
//doc.setFontType('bold')
doc.text(5, 135, 'REFERÊNCIA:')

doc.setFontSize(11)
//doc.setFontType('bold')
doc.text(5, 150, 'ESCOPO DE FORNECIMENTO')


doc.autoTable({
                head: [['Item', 'Qt', 'Código','NCM','Preço líquido unitário','Preço unitário sem IPI', 'Preço total sem IPI','ICMS incluso', 'IPI', 'ISS','Prazo de entrega']],
                body: [
                    [{ content: '1', colSpan: 1, rowSpan: 2, styles: { halign: 'center',valign: 'center' } }, '2', '440TMDSLE11GBGC','8301.40.00', 'R$ 3896.30', 'R$ 5410.30', 'R$ 10439.30', '0%    R$  5410.30', '0%','0%    R$  5410.30','30 DIAS'],
                    [{ content: 'CHAVE DUPLA DE INTERTRAVAMENTO MECANICA', colSpan: 11, rowSpan: 1 }],
                    [{ content: '2', colSpan: 1, rowSpan: 2, styles: { halign: 'center',valign: 'center' } }, '2', '440TMDSLE11GBGC','8301.40.00', 'R$ 3896.30', 'R$ 5410.30', 'R$ 10439.30', '0%    R$  5410.30', '0%','0%    R$  5410.30','30 DIAS'],
                    [{ content: ' Descrição: CHAVE DUPLA DE INTERTRAVAMENTO MECANICA', colSpan: 11, rowSpan: 1 }],
                    [{ content: 'Total ', colSpan: 6, rowSpan: 1 },'R$ 20878.60',{ content: 'R$ 3896.30', colSpan: 1, rowSpan: 1},{ content: '', colSpan: 3, rowSpan: 1 }]
                    // ...  
                ],
                margin: { top: 152 , left: 3.4},
                tableWidth: 203,
                styles: {fontSize: 6},
                theme: 'grid',
                headStyles: {fillColor: '#3d7bb9'},
                didDrawCell: (data) => {
                    if (data.section === 'body' && (data.column.index === 7 || data.column.index === 9) && data.row.index != 4) {
                        doc.line(data.cell.x + 6.5, data.cell.y, data.cell.x + 6.5, data.cell.y + 6);
                      //doc.addImage(base64Img, 'JPEG', data.cell.x + 2, data.cell.y + 2, 10, 10)
                    }
                  }
                })

//PAG2 - PAG2 - PAG2 - PAG2 - PAG2 - PAG2 - PAG2 - PAG2 - PAG2 - PAG2 - PAG2  
//L A                                       TAM    
doc.addPage();

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S');
doc.rect(3, 3, doc.internal.pageSize.width - 80, doc.internal.pageSize.height - 240, 'S');
doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 240, 'S');
doc.rect(133, 3, doc.internal.pageSize.width - 136, doc.internal.pageSize.height - 265, 'S');
doc.rect(133, 3, doc.internal.pageSize.width - 136, doc.internal.pageSize.height - 275, 'S');
doc.rect(133, 3, doc.internal.pageSize.width - 136, doc.internal.pageSize.height - 285, 'S');

doc.setFontSize(10)
doc.text(5, 10, 'Observação');

doc.setFontSize(9)
doc.text(135, 10, 'Preço Total Líquido');
doc.text(170, 10, 'R$');
doc.text(193, 10, '0,000.00');

doc.text(135, 20, 'Preço Total sem IPI');
doc.text(170, 20, 'R$');
doc.text(193, 20, '0,000.00');

doc.text(135, 30, 'Valor Total IPI');
doc.text(170, 30, 'R$');
doc.text(193, 30, '0,000.00');

doc.text(135, 50, 'Total com todos os');
doc.text(135, 55, 'impostos inclusos:');
doc.text(170, 53, 'R$');
doc.text(193, 53, '0,000.00');

doc.setFontSize(10)
doc.text(5,70, 'Reajuste de Moedas')
doc.text(5,80, 'Os preços para os itens abaixo serão reajustados conforme a variação da moeda do dia do faturamento.')
doc.text(5,85, 'PLX31EIPASCII - Dólar Base R$ 5,7042')

doc.setFontSize(10)
doc.text(5,100, 'Remanufatura')
//doc.setFontType('normal')
doc.text(5,110, '1 – É o processo no qual o produto é 100% re-fabricado, aplicando-se ao mesmo as últimas atualizações de')
doc.text(5,115, 'software e hardware. Além da substituição dos componentes avariados, também serão substituídos todos os')
doc.text(5,120, 'componentes com possibilidade de falha.')

doc.setFontSize(10)
doc.text(5,130, 'Notas:')
doc.text(5,140, '1 – A não aprovação deste orçamento dentro do prazo de sua validade implicará na devolução do ')
doc.text(5,145, 'equipamento, sem conserto, enviado por sua empresa.')
doc.text(5,150, '2 – Os Relatórios Técnicos somente serão emitidos mediante solicitação por escrito do usuário na')
doc.text(5,155, 'aprovação do pedido.')
doc.text(5,160, '3 – Remanufatura em Emergência: O prazo de entrega para a remanufatura em emergência está condicionado à')
doc.text(5,165, 'análise do equipamento por parte do fabricante, que acontece após aprovação do serviço em questão. Caso')
doc.text(5,170, 'falte alguma peça no estoque para realizar a remanufatura do equipamento, este prazo poderá sofrer')
doc.text(5,175, 'alterações.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,190, 'Garantia para Remanufatura')
//doc.setFontType('normal')
doc.text(5,200, '1 – Garantia Para Remanufatura: Os equipamentos ofertados são garantidos contra defeito comprovado de')
doc.text(5,205, 'fabricação, respeitando os limites de especificação dos equipamentos, pelo prazo de 12 meses após a')
doc.text(5,210, 'entrega.')
doc.text(5,215, 'Esta garantia não dá cobertura para defeitos causados por uso indevido, aplicação e armazenagem')
doc.text(5,220, 'inadequada, conexão incorreta dos equipamentos, partes ou peças de desgaste natural.')
doc.text(5,225, 'As despesas decorrentes do envio de equipamento defeituoso e seu posterior retorno correrão por conta do')
doc.text(5,230, 'usuário.')

doc.setFontSize(10)
doc.text(5,240, 'Serviços HH')
doc.text(5,250, 'Relatório')
doc.text(5,255, 'No término do serviço, será apresentado um Relatório de Serviço, no qual estão indicados os detalhes')
doc.text(5,260, 'relativos aos serviços efetuados. Este relatório será preenchido por nosso pessoal e aprovado pela pessoa')
doc.text(5,265, 'autorizada do Cliente, a quem será entregue uma via do mesmo.')

//PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3 - PAG3
doc.addPage();

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S');
//doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 240, 'S');

doc.setFontSize(10)
doc.text(5,10, 'Despesas')
doc.text(5,20, 'Todas as despesas de viagem, tais como passagem aérea, táxi, aluguel de carro, hotel, alimentação,')
doc.text(5,25, 'quilometragem e pedágios, serão repassadas mediante cópia dos comprovantes e terão um acréscimo de 5% de')
doc.text(5,30, 'taxa administrativa mais impostos.')

doc.text(5,40, 'ATENÇÃO COMPRADOR: Após conclusão dos serviços, a Macrotec enviará um e-mail baseado no relatório de ')
doc.text(5,45, 'atendimento, informando o valor total do serviço e despesas para que sua empresa possa autorizar o')
doc.text(5,50, 'faturamento. Providenciar revisão do seu pedido de compra com este valor final, ou resposta ao nosso')
doc.text(5,55, 'e-mail ou fax, confirmando seu de acordo no prazo de até 5 (cinco) dias úteis.')
doc.text(5,60, 'Caso não recebamos sua autorização neste prazo, faturaremos conforme condições informadas em nosso e-mail')
doc.text(5,65, 'ou fax.')

doc.text(5,75, 'Preços')
doc.text(5,80, 'O preço apresentado é do valor homem-hora programado, ou seja, a quantia por hora em Jornada Normal de ')
doc.text(5,85, 'Trabalho para o período de 8,0 horas diárias de segunda a sexta-feira compreendido entre 8:00 e 17:00hs,')
doc.text(5,90, 'com 1 hora de almoço.')
doc.text(5,95, 'O atendimento de homem-hora programado deve ser confirmado com 3 dias úteis de antecedência.')
doc.text(5,100, 'Caso contrário, será considerado o valor de homem-hora de emergência.')
doc.text(5,105, 'São consideradas as horas em excesso da jornada normal, antes das 8:00 e após as 17:00hs nos dias úteis e')
doc.text(5,110, 'as horas de sábado, com adicional de 50%. Domingos e feriados com adicional de 100%.')
doc.text(5,115, 'São consideradas as horas gastas nas viagens entre local de origem do engenheiro até o local da prestação')
doc.text(5,120, 'de serviço e retorno, e/ou as horas de locomoção entre o hotel e o local de trabalho, que serão debitadas')
//doc.setFontSize(10)
doc.text(5,125, 'pelo valor da hora normal. Será cobrada taxa de quilometragem de R$ 1,50 / Km rodado.')
doc.text(5,130, 'Caso nosso Engenheiro fique à disposição do CLIENTE aguardando a execução de serviços que impossibilitem')
doc.text(5,135, 'o seu trabalho, as horas de espera serão cobradas como se fossem horas de serviços, incluindo horas')
doc.text(5,140, 'extras.')
doc.text(5,145, 'Não estamos considerando horas de engenharia para que nosso engenheiro faça qualquer tipo de integração')
doc.text(5,150, '(como de segurança) para poder entrar e executar serviços no cliente final, assim, caso seja necessário')
doc.text(5,155, 'participar de alguma integração, essas horas serão repassadas para a Contratante considerando o valor')
doc.text(5,160, 'atual de Homem/Hora para assistência técnica em campo.')
doc.text(5,165, 'O valor mínimo para faturamento é de 4 (quatro) horas.')
doc.text(5,170, 'O envio desta proposta não caracteriza a disponibilidade do engenheiro.')
doc.text(5,175, 'A Macrotec reserva-se no direito de sub-contratar terceiros.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,190, 'Softwares')
//doc.setFontType('normal')
doc.text(5,200, 'O prazo de entrega do software está condicionado ao envio das informações do usuário do software,')
doc.text(5,205, 'conforme abaixo:')
doc.text(5,210, '•Razão social da empresa;')
doc.text(5,215, '•CNPJ;')
doc.text(5,220, '•Endereço;')
doc.text(5,225, '•Nome completo do usuário;')
doc.text(5,230, '•Telefone;')
doc.text(5,235, '•Fax;')
doc.text(5,240, '•E-mail.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,255, 'Embalagem')
//doc.setFontType('normal')
doc.text(5,260, 'Apropriada para transporte rodoviário, inclusa no preço apresentado.')


//PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4 - PAG4
doc.addPage();

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S');

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,10, 'Impostos')
//doc.setFontType('normal')
doc.text(5,15, 'Os impostos e contribuições, quando aplicáveis, serão cobrados às alíquotas vigentes na época do')
doc.text(5,20, 'faturamento, sendo que as alíquotas incidentes nos preços apresentados e as atualmente vigentes são:')
doc.text(5,25, 'PIS: 1,65% incluso;')
doc.text(5,30, 'COFINS: 7,6% incluso;')
doc.text(5,35, 'ICMS ST: incluso (produtos tributados pelo ICMS na modalidade de Substituição Tributária, devido a')
doc.text(5,40, 'protocolos firmados entre os Estados. A substituição tributária é recolhida pela Macrotec no momento da')
doc.text(5,45, 'aquisição dos produtos (entrada em ES/MG), e no momento da venda não ocorre novamente o destaque de ICMS')
doc.text(5,50, 'na NF, mas o valor integral do ICMS ST incidente sobre a operação, é informado nos dados adicionais da NF')
doc.text(5,55, 'para creditamento do imposto pelo adquirente).')
doc.text(5,60, 'Base Legal creditamento ST/MG: Em observância ao princípio da não-cumulatividade do imposto previsto')
doc.text(5,65, 'no art.62 do RICMS/MG, caso o contribuinte adquira mercadoria com imposto pago por ST, para ser utilizada')
doc.text(5,70, 'no processo produtivo poderá apropriar-se integralmente do imposto cobrado na operação própria, assim')
doc.text(5,75, 'como o valor correspondente à ST, desde que as saídas do produto final sejam tributadas pelo ICMS')
doc.text(5,80, '(parágrafo 8º, art.66, parte geral do RICMS/02).')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,90, 'Prazo de Entrega')
//doc.setFontType('normal')
doc.text(5,95, 'Conforme tabela acima, sujeito ao estoque do dia. Este prazo deverá ser reverificado na época do pedido.')
doc.text(5,100, 'A Macrotec não realiza faturamento de pedidos entre os dias 25 e 31 de cada mês.')
doc.text(5,105, 'Os prazos de entrega apresentados estão condicionados ao recebimento da ordem de compra de acordo com as')
doc.text(5,110, 'condições/critérios apresentadas nesta proposta.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,120, 'Formas de Pagamento')
//doc.setFontType('normal')
doc.text(5,125, 'Pagamento via crédito em conta.')
doc.text(5,130, 'Banco Itaú')
doc.text(5,135, 'Ag.: 1403')
doc.text(5,140, 'C/C 22606-9')
doc.text(5,145, 'CNPJ: 25.417.270/0001-23')

doc.setFontSize(10)
doc.text(5,155, 'Pagamento via PIX')
doc.text(5,160, 'PIX: 25.417.270/0001-23')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,170, 'Atrasos de Pagamento')
//doc.setFontType('normal')
doc.text(5,175, 'Em caso de atraso no pagamento de qualquer das parcelas, o prazo contratual será prorrogado em igual')
doc.text(5,180, 'número de dias.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,190, 'Custo Financeiro')
//doc.setFontType('normal')
doc.text(5,195, 'Sobre qualquer pagamento efetuado posteriormente ao seu vencimento, incidirá remuneração, referente a')
doc.text(5,200, 'custo financeiro.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,210, 'Limite de Responsabilidade')
//doc.setFontType('normal')
doc.text(5,215, 'A nossa responsabilidade em quaisquer reivindicações com base em dispositivos contratuais por quaisquer')
doc.text(5,220, 'perdas e danos ocasionados, relacionados ou resultantes da fabricação, venda, entrega, conserto,')
doc.text(5,225, 'substituição ou uso de quaisquer mercadorias objeto desta proposta não poderá, em caso algum, exceder o')
doc.text(5,230, 'preço atribuído à mercadoria ou parte dela, que tenha dado causa à reivindicação. Não poderemos em')
doc.text(5,235, 'hipótese alguma ser responsabilizado por lucros cessantes, danos indiretos, custos de capital ou')
doc.text(5,240, 'reclamação de terceiros por interrupção de serviços.')

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,250, 'Observações Comerciais')
//doc.setFontType('normal')
doc.text(5,255, 'Qualquer alteração legal que implique na incidência de impostos, tributos e taxas na operação, será')
doc.text(5,260, 'motivo de revisão deste orçamento de forma a ajustar os valores à realidade econômica até a data dos')
doc.text(5,265, 'efetivos pagamentos.')
doc.text(5,270, '')

//PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5 - PAG5
doc.addPage();

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S');
//doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 240, 'S');

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,10, 'CONDIÇÕES GERAIS DE FORNECIMENTO')
//doc.setFontType('normal')
doc.text(5,20, '1 - GERAL: As presentes “Condições Gerais de Fornecimento” (“CGF”) regulamentam todas e quaisquer')
doc.text(5,25, 'transações comerciais entre Macrotec Ltda. (“Fornecedora”) e a Compradora. Eventuais condições especiais,')
doc.text(5,30, 'que alterem ou complementem as presentes Condições, somente terão validade se previstas na proposta da')
doc.text(5,35, 'Fornecedora ou se tiverem sido aprovadas, por escrito, pela Fornecedora')
doc.text(5,45, '2- PROPOSTAS: As propostas da Fornecedora terão o prazo de validade de 10 (dez) dias, a partir da data de')
doc.text(5,50, 'sua emissão. Decorrido o prazo de vigência da proposta, todas as suas condições estarão sujeitas à')
doc.text(5,55, 'confirmação e/ou atualização de preços e prazos de entrega.')
doc.text(5,65, '3- MULTA: Nenhuma cláusula de multa será aceita, sem que haja o consentimento expresso e por escrito por')
doc.text(5,70, 'parte da Fornecedora.')
doc.text(5,80, '4- TRIBUTOS: Todos os tributos devidos em virtude do fornecimentoserão de responsabilidade da Compradora,')
doc.text(5,85, 'ainda que o recolhimento deva ser efetuado pela Fornecedora. Na hipótese de vir a incidir novos tributos')
doc.text(5,90, 'entre a base da proposta e o efetivo fornecimento, alterações de alíquotas ou de base de cálculo, os')
doc.text(5,95, 'mesmos serão de responsabilidade da Compradora.')
doc.text(5,105, '5- PREÇOS: Os preços contidos na proposta referem-se ao equipamento “posto sede” da Fornecedora, ou seja')
doc.text(5,110, '“Ex Works” (EXW) conforme INCOTERMS, de acordo com as características e quantidades previstas na')
doc.text(5,115, 'proposta. Excluem-se do preço e correrão por conta da Compradora as despesas provenientes de desenhos,')
doc.text(5,120, 'inspeções, testes, transportes, seguros e armazenagem.')
doc.text(5,130, '6- CONDIÇÕES DE PAGAMENTO: Os fornecimentos estarão sujeitos às condições de pagamento definidas na')
doc.text(5,135, 'proposta, mediante aprovação de crédito da Compradora. Se o crédito não for aprovado pela Fornecedora, o')
doc.text(5,140, 'pagamento do valor total deverá ser antecipado. Os pagamentos decorrentes dos fornecimentos deverão ser')
doc.text(5,145, 'feitos pela Compradora, na data de seus respectivos vencimentos, conforme instruções contidas na')
doc.text(5,150, 'proposta. Os débitos que não forem liquidados pela Compradora até as datas dos respectivos vencimentos,')
doc.text(5,155, 'serão acrescidos multa de 2% ao mês, juros de mora de 1,0% ao mês, sobre o valor principal, conforme')
doc.text(5,160, 'indicado nos documentos de cobrança, acrescido de eventuais despesas de cobrança até a data do efetivo')
doc.text(5,165, 'pagamento, inclusive protesto e honorários advocatícios estipulados em 10% havidas pela Fornecedora.')
doc.text(5,170, 'No caso da forma de pagamento total ou parcial na modalidade CONTRA ENTREGA, entende-se que o montante')
doc.text(5,175, 'correspondente deverá ser pago previamente à entrega dos equipamentos ou serviços. Os pagamentos serão')
doc.text(5,180, 'considerados realizados quando da quitação do boleto bancário ou crédito em conta corrente da')
doc.text(5,185, 'Fornecedora. Se a Compradora tiver algum problema de caráter financeiro, e este nos significar algum tipo')
doc.text(5,190, 'de risco, estamos habilitados,segundo nosso critério, a encerrar parte do contrato que ainda não tenha')
doc.text(5,195, 'sido cumprido, e/ou a solicitar algum tipo de depósito de garantia ou pré-pagamento contra entrega dos')
doc.text(5,200, 'produtos.')
doc.text(5,210, '7- TRANSPORTE: O equipamento deverá ser retirado pela Compradora ou por transportadora por ela indicada,')
doc.text(5,215, 'no endereço da sede da Fornecedora. A responsabilidade da Fornecedora sobre os equipamentos cessa na')
doc.text(5,220, 'ocasião da entrega à Compradora ou à transportadora por ela indicada.')


//PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6 - PAG6
doc.addPage();

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S');
//doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 240, 'S');

doc.setFontSize(10)
//doc.setFontType('bold')
doc.text(5,10, '8- GARANTIA:')
//doc.setFontType('normal')
doc.text(5,20, 'Os equipamentos ofertados são garantidos contra defeito comprovado de fabricação, respeitando os limites')
doc.text(5,25, 'de especificação dos equipamentos, pelo prazo de 01 (um) ano após a entrega. Esta garantia não dá')
doc.text(5,30, 'cobertura para defeitos causados por uso indevido, aplicação e armazenagem inadequada, conexão incorreta')
doc.text(5,35, 'dos equipamentos, partes ou peças de desgaste natural.')
doc.text(5,40, 'As despesas decorrentes do envio de equipamento defeituoso e seu posterior retorno correrão por conta do')
doc.text(5,45, 'usuário.')
doc.text(5,55, '(a) Hardware: A Fornecedora garante que os Produtos novos de hardware fornecidos por força deste')
doc.text(5,60, 'instrumento estão livres de defeitos de material, execução e projeto pelo período de 1 (um) ano a partir')
doc.text(5,65, 'da data da fatura da Fornecedora. Produtos reparados ou de reposição fornecidos em decorrência desta')
doc.text(5,70, 'sub-cláusula de garantia serão igualmente garantidos pelo período 6 (seis) meses a partir da data do')
doc.text(5,80, 'embarque para a Compradora ou pelo período restante do prazo de garantia original para aquele Produto')
doc.text(5,85, 'específico, prevalecendo aquele que for mais extenso.')
doc.text(5,95, '(b) Software e Firmware: Salvo se de outra forma previsto em alguma licença da Fornecedora ou de')
doc.text(5,100, 'terceiros, a Fornecedora garante que os Produtos regulares de software e firmware fornecidos com base')
doc.text(5,105, 'neste instrumento, quando utilizados com o hardware especificado pela Fornecedora, operarão de acordo com')
doc.text(5,110, 'as especificações publicadas elaboradas, aprovadas e emitidas pela Fornecedora pelo período de 1 (um) ano')
doc.text(5,115, 'a partir da data da fatura recebida da Fornecedora. A Fornecedora não declara nem garante, nem expressa')
doc.text(5,120, 'nem implicitamente, que a operação dos Produtos de software e firmware será ininterrupta ou isenta de')
doc.text(5,125, 'erros, ou que as ali contidas funções atenderão ou satisfarão ao uso ou necessidades da Compradora.')
doc.text(5,135, '(c) Refabricação e Consertos na Fábrica e Trocas no Local, Fora da Garantia: A Fornecedora garante que os')
doc.text(5,140, 'Produtos de hardware refabricados na fábrica ou trocados no local, ou componentes do Produto de hardware')
doc.text(5,145, 'submetidos a consertos, fora da garantia, estarão livres de defeitos de material e execução pelo período')
doc.text(5,150, 'de 1 (um) ano a partir da data fatura recebida da Fornecedora. Os produtos submetidos a consertos ou de')
doc.text(5,155, 'reposição fornecidos em decorrência desta sub-cláusula de garantia terão garantia pelo período de 30')
doc.text(5,160, '(trinta) dias a partir da data do embarque para a Compradora ou pelo período restante do prazo original')
doc.text(5,165, 'de garantia,prevalecendo aquele que for mais extenso.')
doc.text(5,175, '(d) Serviços: A Fornecedora garante que os Produtos compostos somente de serviços (ex.: treinamento,')
doc.text(5,180, 'consertos no local, e serviços de engenharia e de programação de aplicativos personalizados) serão')
doc.text(5,185, 'executados por pessoal devidamente especializado, empregados ou contratados pela Fornecedora.')
doc.text(5,195, '(e) Geral: A garantia será satisfeita somente se (a) a Fornecedora receber prontamente notificação, por')
doc.text(5,200, 'escrito, da reclamação de garantia, (b) verificação feita pela Fornecedora concluir que nenhum defeito')
doc.text(5,205, 'alegado foi causado por uso inadequado, negligência, instalação, operação manutenção, conserto, alteração')
doc.text(5,210, 'ou modificação inadequados, feitos por outros que não a Fornecedora, acidente, ou deterioração ou')
doc.text(5,215, 'degradação anormais dos Produtos ou peças componentes destes, devido ao ambiente físico ou ambiente com')
doc.text(5,220, 'ruído elétrico ou eletromagnético.')
doc.text(5,230, '9-. SOFTWARE E FIRMWARE LICENCIADOS: O uso de Produtos compreendidos por software ou firmware poderá')
doc.text(5,235, 'estar sujeito à aceitação pela Compradora de termos e condições adicionais estabelecidos em contratos de')
doc.text(5,240, 'licenciamento separados da Fornecedora ou de terceiros, que exercerão controle na medida necessária à ')
doc.text(5,245, 'solução de qualquer conflito com os termos e condições mencionados ou de outra forma referidos neste')
doc.text(5,250, 'instrumento. Na ausência de um acordo de licenciamento em separado, será concedida à Compradora uma')
doc.text(5,255, 'licença não exclusiva e intransferível de uso do software e firmware fornecidos pela Fornecedora somente')
doc.text(5,260, 'em versões finais de programas compilados de computador e unicamente em conjunto com Produtos fornecidos')
doc.text(5,265, 'pela Fornecedora, sem nenhum direito de sublicenciamento, divulgação, descompilação, desmontagem do')
doc.text(5,270, 'programa, engenharia reversa ou, de outra forma, de modificação do software ou firmware.')


//PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7 - PAG7
doc.addPage();

doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 6, 'S');
//doc.rect(3, 3, doc.internal.pageSize.width - 6, doc.internal.pageSize.height - 240, 'S');

doc.setFontSize(10)
//doc.setFontType('normal')
doc.text(5,10, '10- LIMITE DE RESPONSABILIDADE: A responsabilidade da Fornecedora em quaisquer reivindicações com base em')
doc.text(5,15, 'dispositivos contratuais por quaisquer perdas e danos ocasionados, relacionados ou resultantes da')
doc.text(5,20, 'fabricação, venda, entrega, conserto, substituição ou uso de quaisquer mercadorias objeto do fornecimento')
doc.text(5,25, 'não poderá, em caso algum, exceder o preço atribuído à mercadoria ou parte dela, que tenha dado causa à')
doc.text(5,30, 'reivindicação. A Fornecedora em hipótese alguma será responsabilizada por lucros cessantes, danos')
doc.text(5,35, 'indiretos, custos de capital ou reclamação de terceiros por interrupção de serviços.')
doc.text(5,45, '11- CANCELAMENTO E DEVOLUÇÕES: Nenhum cancelamento de Ordem de Compra será efetivado sem prévio aviso')
doc.text(5,50, 'escrito e aceito pela Fornecedora. O recebimento de equipamentos devolvidos não implicará no cancelamento')
doc.text(5,55, 'automático do pedido. Em caso de cancelamento de pedidos de equipamentos ou serviços por parte da')
doc.text(5,60, 'Compradora, a mesma será obrigada a ressarcir todas as despesas incorridas pela Fornecedora, por exemplo:')
doc.text(5,65, 'projetos, fabricação, materiais adquiridos e custos administrativos, etc., no montante mínimo de 50% ')
doc.text(5,70, '(cinquenta por cento) do valor do pedido ou da parcela cancelada. A compensação pode alcançar o total do')
doc.text(5,75, 'valor do equipamento ou serviço em alguns casos específicos, dependendo do avanço da fabricação,')
doc.text(5,80, 'aplicação e realização.')
doc.text(5,90, '12- FORÇA MAIOR: A Fornecedora não será responsável por nenhuma perda, dano ou atraso em decorrência do')
doc.text(5,95, 'não cumprimento das obrigações que lhe são ora atribuídas, por motivos fora de seu controle razoável,')
doc.text(5,100, 'inclusive, entre outros, casos fortuitos, atos ou omissões da Compradora, atos de autoridades civis ou')
doc.text(5,105, 'militares, incêndios, greves, enchentes, epidemias, restrições de quarentena, guerra, tumultos, atos de')
doc.text(5,110, 'terrorismo, atrasos de transportes, ou embargos de transportes. Ocorrendo tal atraso, a(s) data(s) para')
doc.text(5,115, 'cumprimento das obrigações da Fornecedora será prorrogada pelo tempo que possa vir a ser justificadamente')
doc.text(5,120, 'necessário para compensar o atraso.')
doc.text(5,130, '13- ARBITRAGEM: Qualquer disputa ou controvérsia relativa à interpretação ou execução deste Contrato, ou')
doc.text(5,135, 'de qualquer forma oriunda ou associada a ele, e que não seja dirimida amigavelmente entre as Partes,')
doc.text(5,140, 'deverá ser resolvida de forma definitiva por Arbitragem, nos termos do Regulamento de Arbitragem e')
doc.text(5,145, 'Mediação da Câmara de Arbitragem e Mediação da Federação das Indústrias do Estado do Paraná (CAMFIEP),')
doc.text(5,150, 'e sob a administração da mesma Câmara.')

doc.save("a4.pdf"); // SALVA ARQUIVO DIRETÓRIO PDF
