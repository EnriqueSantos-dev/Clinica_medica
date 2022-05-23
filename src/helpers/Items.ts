import iconTeleAnte from '../assets/teleatendimento.svg';
import iconTeleAnteFocus from '../assets/teleatendimentoFocus.svg';
import iconDiferencial from '../assets/icone-nosso-sitema.svg';
import iconDiferencialFocus from '../assets/icone-nosso-sitemaFocus.svg';
import iconAlcanca from '../assets/quebracabeca.svg';
import iconAlcancaFocus from '../assets/quebracabecaFocus.svg';

// icons descri
// inicial
import atendente from '../assets/atendente.svg';
import pessoas from '../assets/pessoas.svg';
import celular from '../assets/celular.svg';
import medicos from '../assets/medicos.svg';
import atendi24horas from '../assets/24horas.svg';
import enfermeiro from '../assets/enfermeiro.svg';

// Icons diferencial
import diferencial1 from '../assets/diferencial1.svg';
import diferencial2 from '../assets/diferencial2.svg';
import diferencial3 from '../assets/diferencial3.svg';

// icons o que queremos
import alcancar1 from '../assets/alcancar1.svg';
import alcancar2 from '../assets/alcancar2.svg';
import alcancar3 from '../assets/alcancar3.svg';
import alcancar4 from '../assets/alcancar4.svg';

export const listItems = [
  {
    id: 0,
    isState: true,
    title: 'Benefícios de Teleatendimento especializado em distância',
    icon: iconTeleAnte,
    iconFocus: iconTeleAnteFocus,
    description: [
      {
        text: 'Redução de inistralidade - consulta virtual tende a ser mais barata que uma consulta presencial',
        iconDescri: atendente,
      },
      {
        text: 'Evita aglomeração em emergências, pois o paciente poderá entender melhor seu quadro antes de buscar uma unidade de emergência',
        iconDescri: pessoas,
      },
      {
        text: 'Médico pode intercalar  seus horários em consultas presenciais e atendimento virtual eletivos,  dentro do mesmo turno de atendimento',
        iconDescri: celular,
      },
      {
        text: 'Maior abrangência, pois pacientes do interior podem se consultar com especialistas menos ofertados',
        iconDescri: medicos,
      },
      {
        text: 'Possibilidade de atendimento 7 x 24, inclusive nos atendimentos dos plantões noturnos em caso de operadoras verticalizadas',
        iconDescri: atendi24horas,
      },
      {
        text: 'O segurado tem a certeza de maior proximidade da operadora em relação ao mesmo, pois tem a segurança psicológica de acesso imediato a um médico caso necessite',
        iconDescri: enfermeiro,
      },
    ],
  },
  {
    id: 1,
    isState: false,
    title: 'Nosso diferencial',
    icon: iconDiferencial,
    iconFocus: iconDiferencialFocus,
    description: [
      {
        text: 'Contato rápido com necessidade de baixo conhecimento do paciente para conexão, sem instalações de aplicativo, sem cadastros',
        iconDescri: diferencial1,
      },
      {
        text: 'Prescrições eletronicas com tecnologia NEXODATA',
        iconDescri: diferencial2,
      },
      {
        text: 'Estamos sempre buscando crescer com as demandas do cliente e nossa equipe de saúde e tecnologia para aguardar novas necessidades',
        iconDescri: diferencial3,
        width: 60,
        height: 63,
      },
    ],
  },
  {
    id: 2,
    isState: false,
    title: 'O que queremos alcançar',
    icon: iconAlcanca,
    iconFocus: iconAlcancaFocus,
    description: [
      {
        text: 'Responsividade, uso e atendimento/emissão de prescrições por celular',
        iconDescri: alcancar1,
        width: 45,
        height: 48,
      },
      {
        text: 'Pré-cadastro para que possa ser solicitada consulta via internet',
        iconDescri: alcancar2,
        width: 44,
      },
      {
        text: 'Sistema de pré-atendimento inteligente onde o paciente cadastra sintomas que já dá uma ideia para o médico do que ele vai atender, simplificando o atendimento.',
        iconDescri: alcancar3,
      },
      {
        text: ' Sistema de registro de informações, algum tipo de prontuário eletrônico.',
        iconDescri: alcancar4,
        width: 48,
      },
    ],
  },
];
