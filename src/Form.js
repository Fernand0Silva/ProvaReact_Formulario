import React, { Component } from 'react';

class Form extends Component {
  state = {
    Nome: '',
    NomeEnviado: '',
    Endereco: '',
    EnderecoEnviado: '',
    Bairro: '',
    BairroEnviado: '',
    Cidade: '',
    CidadeEnviado: '',
    Pais: '',
    PaisEnviado: ''
  };

  // Handle submit for Nome
  handleSubmitNome = (e) => {
    e.preventDefault();
    let { Nome } = this.state;
    this.setState({
      NomeEnviado: Nome, // Armazena o valor digitado em NomeEnviado
      Nome: '' // Limpa o campo de input após o envio
    });
  };

  // Handle input change for Nome
  handleInputChangeNome = (e) => {
    this.setState({
      Nome: e.target.value // Atualiza o estado Nome enquanto o usuário digita
    });
  };

  // Handle submit for Endereco
  handleSubmitEndereco = (e) => {
    e.preventDefault();
    let { Endereco } = this.state;
    this.setState({
      EnderecoEnviado: Endereco, // Armazena o valor digitado em EnderecoEnviado
      Endereco: '' // Limpa o campo de input após o envio
    });
  };

  // Handle input change for Endereco
  handleInputChangeEndereco = (e) => {
    this.setState({
      Endereco: e.target.value // Atualiza o estado Endereco enquanto o usuário digita
    });
  };

  // Handle submit for Bairro
  handleSubmitBairro = (e) => {
    e.preventDefault();
    let { Bairro } = this.state;
    this.setState({
      BairroEnviado: Bairro, // Armazena o valor digitado em BairroEnviado
      Bairro: '' // Limpa o campo de input após o envio
    });
  };

  // Handle input change for Bairro
  handleInputChangeBairro = (e) => {
    this.setState({
      Bairro: e.target.value // Atualiza o estado Bairro enquanto o usuário digita
    });
  };

  // Handle submit for Cidade
  handleSubmitCidade = (e) => {
    e.preventDefault();
    let { Cidade } = this.state;
    this.setState({
      CidadeEnviado: Cidade, // Armazena o valor digitado em CidadeEnviado
      Cidade: '' // Limpa o campo de input após o envio
    });
  };

  // Handle input change for Cidade
  handleInputChangeCidade = (e) => {
    this.setState({
      Cidade: e.target.value // Atualiza o estado Cidade enquanto o usuário digita
    });
  };

  // Handle submit for Pais
  handleSubmitPais = (e) => {
    e.preventDefault();
    let { Pais } = this.state;
    this.setState({
      PaisEnviado: Pais, // Armazena o valor digitado em PaisEnviado
      Pais: '' // Limpa o campo de input após o envio
    });
  };

  // Handle input change for Pais
  handleInputChangePais = (e) => {
    this.setState({
      Pais: e.target.value // Atualiza o estado Pais enquanto o usuário digita
    });
  };

  render() {
    const { Nome, NomeEnviado, Endereco, EnderecoEnviado, Bairro, BairroEnviado, Cidade, CidadeEnviado, Pais, PaisEnviado } = this.state;

    return (
      <section>

        {/* Formulário para o campo Nome */}
        <form onSubmit={this.handleSubmitNome}>
          <label>
            Nome:
            <input
              value={Nome} // O valor do input é controlado pelo estado Nome
              onChange={this.handleInputChangeNome} // Atualiza o estado Nome enquanto o usuário digita
              type="text"
              placeholder="Digite seu nome"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {NomeEnviado && <h3>{NomeEnviado}</h3>} {/* Exibe o nome após o envio */}

        {/* Formulário para o campo Endereco */}
        <form onSubmit={this.handleSubmitEndereco}>
          <label>
            Endereço:
            <input
              value={Endereco} // O valor do input é controlado pelo estado Endereco
              onChange={this.handleInputChangeEndereco} // Atualiza o estado Endereco enquanto o usuário digita
              type="text"
              placeholder="Digite seu endereço"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {EnderecoEnviado && <h3>{EnderecoEnviado}</h3>} {/* Exibe o endereço após o envio */}

        {/* Formulário para o campo Bairro */}
        <form onSubmit={this.handleSubmitBairro}>
          <label>
            Bairro:
            <input
              value={Bairro} // O valor do input é controlado pelo estado Bairro
              onChange={this.handleInputChangeBairro} // Atualiza o estado Bairro enquanto o usuário digita
              type="text"
              placeholder="Digite seu bairro"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {BairroEnviado && <h3>{BairroEnviado}</h3>} {/* Exibe o bairro após o envio */}

        {/* Formulário para o campo Cidade */}
        <form onSubmit={this.handleSubmitCidade}>
          <label>
            Cidade:
            <input
              value={Cidade} // O valor do input é controlado pelo estado Cidade
              onChange={this.handleInputChangeCidade} // Atualiza o estado Cidade enquanto o usuário digita
              type="text"
              placeholder="Digite sua cidade"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {CidadeEnviado && <h3>{CidadeEnviado}</h3>} {/* Exibe a cidade após o envio */}

        {/* Formulário para o campo Pais */}
        <form onSubmit={this.handleSubmitPais}>
          <label>
            País:
            <input
              value={Pais} // O valor do input é controlado pelo estado Pais
              onChange={this.handleInputChangePais} // Atualiza o estado Pais enquanto o usuário digita
              type="text"
              placeholder="Digite seu país"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {PaisEnviado && <h3>{PaisEnviado}</h3>} {/* Exibe o país após o envio */}

      </section>
    );
  }
}

export default Form;
