import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { PoModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormlyModule, PoModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JSON PO-UI Form Generator';
  Object = Object; // Adiciona Object para usar no template
  
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  // Configuração usando po-input
  fields: FormlyFieldConfig[] = [
    {
      key: 'nome',
      type: 'po-input',
      props: {
        label: 'Nome Completo',
        placeholder: 'Digite seu nome completo',
        required: true,
        description: 'Informe seu nome completo'
      }
    },
    {
      key: 'sobrenome',
      type: 'po-input',
      props: {
        label: 'Sobrenome',
        placeholder: 'Digite seu sobrenome',
        required: false
      }
    },
    {
      key: 'email',
      type: 'po-email',
      props: {
        label: 'E-mail',
        placeholder: 'Digite seu e-mail',
        required: true,
        description: 'Informe um e-mail válido'
      }
    },
    {
      key: 'senha',
      type: 'po-password',
      props: {
        label: 'Senha',
        placeholder: 'Digite sua senha',
        required: true,
        minLength: 8,
        description: 'A senha deve ter pelo menos 8 caracteres'
      }
    },
    {
      key: 'idade',
      type: 'po-number',
      props: {
        label: 'Idade',
        placeholder: 'Digite sua idade',
        required: true,
        min: 18,
        max: 120,
        description: 'Informe sua idade (mínimo 18 anos)'
      }
    },
    {
      key: 'dataNascimento',
      type: 'po-datepicker',
      props: {
        label: 'Data de Nascimento',
        required: true,
        description: 'Selecione sua data de nascimento'
      }
    },
    {
      key: 'estado',
      type: 'po-select',
      props: {
        label: 'Estado',
        placeholder: 'Selecione seu estado',
        required: true,
        options: [
          { label: 'São Paulo', value: 'SP' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Minas Gerais', value: 'MG' },
          { label: 'Bahia', value: 'BA' },
          { label: 'Paraná', value: 'PR' },
          { label: 'Rio Grande do Sul', value: 'RS' },
          { label: 'Pernambuco', value: 'PE' },
          { label: 'Ceará', value: 'CE' },
          { label: 'Pará', value: 'PA' },
          { label: 'Santa Catarina', value: 'SC' }
        ],
        description: 'Selecione o estado onde reside'
      }
    },
    {
      key: 'profissao',
      type: 'po-combo',
      props: {
        label: 'Profissão',
        placeholder: 'Digite ou selecione sua profissão',
        required: true,
        options: [
          { label: 'Desenvolvedor', value: 'dev' },
          { label: 'Designer', value: 'design' },
          { label: 'Analista', value: 'analista' },
          { label: 'Gerente', value: 'gerente' },
          { label: 'Consultor', value: 'consultor' },
          { label: 'Arquiteto de Software', value: 'arquiteto' },
          { label: 'Product Owner', value: 'po' },
          { label: 'Scrum Master', value: 'sm' }
        ],
        fieldValue: 'value',
        fieldLabel: 'label',
        description: 'Digite ou selecione sua profissão'
      }
    },
    {
      key: 'genero',
      type: 'po-radio-group',
      props: {
        label: 'Gênero',
        required: true,
        options: [
          { label: 'Masculino', value: 'M' },
          { label: 'Feminino', value: 'F' },
          { label: 'Outro', value: 'O' },
          { label: 'Prefiro não informar', value: 'N' }
        ],
        description: 'Selecione seu gênero'
      }
    },
    {
      key: 'hobbies',
      type: 'po-checkbox-group',
      props: {
        label: 'Hobbies',
        options: [
          { label: 'Leitura', value: 'leitura' },
          { label: 'Esportes', value: 'esportes' },
          { label: 'Música', value: 'musica' },
          { label: 'Cinema', value: 'cinema' },
          { label: 'Culinária', value: 'culinaria' },
          { label: 'Viagens', value: 'viagens' },
          { label: 'Tecnologia', value: 'tecnologia' },
          { label: 'Arte', value: 'arte' }
        ],
        description: 'Selecione seus hobbies (múltipla escolha)'
      }
    },
    {
      key: 'biografia',
      type: 'po-textarea',
      props: {
        label: 'Biografia',
        placeholder: 'Conte um pouco sobre você...',
        rows: 4,
        maxLength: 500,
        description: 'Escreva uma breve biografia (máximo 500 caracteres)'
      }
    },
    {
      key: 'newsletter',
      type: 'po-checkbox',
      props: {
        label: 'Aceito receber newsletter',
        description: 'Marque para receber nossas novidades por e-mail'
      }
    },
    {
      key: 'termos',
      type: 'po-checkbox',
      props: {
        label: 'Aceito os termos de uso',
        required: true,
        description: 'É obrigatório aceitar os termos para continuar'
      }
    },
    {
      key: 'periodoFerias',
      type: 'po-datepicker-range',
      props: {
        label: 'Período de Férias',
        required: false,
        description: 'Selecione o período desejado para suas férias'
      }
    },
    {
      key: 'empresa',
      type: 'po-lookup',
      props: {
        label: 'Empresa',
        required: false,
        service: 'https://po-sample-api.onrender.com/v1/companies',
        fieldLabel: 'name',
        fieldValue: 'id',
        description: 'Busque e selecione uma empresa'
      }
    },
    {
      key: 'tecnologias',
      type: 'po-multiselect',
      props: {
        label: 'Tecnologias',
        placeholder: 'Selecione as tecnologias que conhece',
        options: [
          { label: 'Angular', value: 'angular' },
          { label: 'React', value: 'react' },
          { label: 'Vue.js', value: 'vue' },
          { label: 'Node.js', value: 'node' },
          { label: 'Python', value: 'python' },
          { label: 'Java', value: 'java' },
          { label: 'C#', value: 'csharp' },
          { label: 'JavaScript', value: 'javascript' },
          { label: 'TypeScript', value: 'typescript' },
          { label: 'PHP', value: 'php' }
        ],
        description: 'Selecione múltiplas tecnologias que você conhece'
      }
    },
    {
      key: 'notificacoes',
      type: 'po-switch',
      props: {
        label: 'Ativar Notificações',
        description: 'Ative para receber notificações push'
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados:', this.model);
    }
  }
}
