# Gerador de Formulários JSON com PO-UI

Este projeto demonstra como integrar **ngx-formly** com componentes **PO-UI** para criar formulários dinâmicos a partir de configurações JSON.

## 🚀 Características

- ✅ Integração completa entre ngx-formly e PO-UI
- ✅ 9 tipos de campos PO-UI suportados
- ✅ Templates pré-definidos
- ✅ Editor JSON em tempo real
- ✅ Validação automática
- ✅ Export/Import de configurações
- ✅ Interface responsiva

## 📋 Tipos de Campo Suportados

| Tipo | Componente PO-UI | Descrição |
|------|------------------|-----------|
| `po-input` | `<po-input>` | Campo de texto simples |
| `po-email` | `<po-email>` | Campo de e-mail com validação |
| `po-password` | `<po-password>` | Campo de senha |
| `po-number` | `<po-number>` | Campo numérico |
| `po-textarea` | `<po-textarea>` | Área de texto |
| `po-select` | `<po-select>` | Lista de seleção |
| `po-datepicker` | `<po-datepicker>` | Seletor de data |
| `po-checkbox-group` | `<po-checkbox-group>` | Grupo de checkboxes |
| `po-radio-group` | `<po-radio-group>` | Grupo de radio buttons |

## 🔧 Instalação e Configuração

### Dependências Necessárias

```bash
npm install @angular/forms @ngx-formly/core @po-ui/ng-components
```

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Executar testes
npm test

# Build para produção
npm run build
```

## 📝 Exemplo de Configuração JSON

```json
[
  {
    "key": "nome",
    "type": "po-input",
    "props": {
      "label": "Nome Completo",
      "placeholder": "Digite seu nome",
      "required": true,
      "description": "Campo obrigatório"
    }
  },
  {
    "key": "email",
    "type": "po-email",
    "props": {
      "label": "E-mail",
      "placeholder": "exemplo@email.com",
      "required": true
    }
  }
]
```

## 🎯 Como Usar

### 1. Usando Templates Pré-definidos
1. Selecione um template no dropdown
2. Clique em "Carregar Template"
3. O formulário será gerado automaticamente

### 2. Editando Configuração JSON
1. Abra a seção "Editor de Configuração JSON"
2. Modifique o JSON conforme necessário
3. Clique em "Aplicar Configuração"

## 📊 Funcionalidades

- **Estatísticas em Tempo Real**: Porcentagem de preenchimento, campos válidos
- **Visualização de Dados**: Preview dos dados do formulário em JSON
- **Export/Import**: Baixar configuração como arquivo JSON
- **Templates**: Formulários pré-configurados para casos comuns

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
